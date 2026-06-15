import { useEffect, useState, useRef, useCallback, ReactNode } from 'react';
import { SiteNav } from './SiteNav';
import { SiteFooter } from './SiteFooter';
import { SEO } from '../SEO';

export interface NavItem {
    id: string;
    title: string;
}

export interface NavCategory {
    label: string;
    items: NavItem[];
}

interface LegalDocLayoutProps {
    /** Route path, used to mark the active nav state and the SEO canonical. */
    activePath: string;
    seoTitle: string;
    seoDescription: string;
    navCategories: NavCategory[];
    children: ReactNode;
}

/**
 * Shared chrome for the long-form legal pages (Terms of Use, Privacy Policy).
 * Mirrors the docs page layout: a sticky scrollspy sidebar, a centered content
 * column, and a "back to top" utility rail. Pages provide the nav categories
 * and render their own <section id="…"> blocks as children — the ids must match
 * the nav item ids so the IntersectionObserver can track them.
 */
export function LegalDocLayout({ activePath, seoTitle, seoDescription, navCategories, children }: LegalDocLayoutProps) {
    const allNavItems = navCategories.flatMap((cat) => cat.items);
    const [activeSection, setActiveSection] = useState(allNavItems[0]?.id ?? '');
    const observerRef = useRef<IntersectionObserver | null>(null);
    const isClickScrolling = useRef(false);

    const scrollToSection = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
            isClickScrolling.current = true;
            setActiveSection(id);
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Allow the observer to take over again after the scroll animation.
            setTimeout(() => {
                isClickScrolling.current = false;
            }, 900);
        }
    }, []);

    const scrollToTop = () => {
        const firstId = allNavItems[0]?.id;
        if (firstId) scrollToSection(firstId);
    };

    // IntersectionObserver scrollspy — highlights the topmost visible section.
    useEffect(() => {
        const sectionElements = allNavItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean) as HTMLElement[];

        observerRef.current = new IntersectionObserver(
            (entries) => {
                if (isClickScrolling.current) return;
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible.length > 0) {
                    setActiveSection(visible[0].target.id);
                }
            },
            {
                rootMargin: '-100px 0px -60% 0px',
                threshold: 0,
            }
        );

        sectionElements.forEach((el) => observerRef.current?.observe(el));

        return () => observerRef.current?.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="docs-page">
            <SEO title={seoTitle} description={seoDescription} canonical={activePath} />
            <div className="da-root">
                <SiteNav activePath={activePath} />
            </div>

            <div className="docs-layout">
                {/* ─── Left Sidebar ─── */}
                <aside className="docs-sidebar">
                    <nav className="docs-sidebar-inner">
                        {navCategories.map((cat) => (
                            <div key={cat.label} className="docs-nav-group">
                                <span className="docs-nav-category">{cat.label}</span>
                                <ul className="docs-nav-list">
                                    {cat.items.map((item) => (
                                        <li key={item.id}>
                                            <button
                                                onClick={() => scrollToSection(item.id)}
                                                className={`docs-nav-link${activeSection === item.id ? ' active' : ''}`}
                                            >
                                                {item.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* ─── Main Content ─── */}
                <main className="docs-content">
                    {children}
                    {/* Bottom spacer */}
                    <div style={{ height: '120px' }} />
                </main>

                {/* ─── Right Utility Sidebar ─── */}
                <aside className="docs-right-sidebar">
                    <div className="docs-right-sidebar-inner">
                        <button onClick={scrollToTop} className="docs-util-link">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 12V2M7 2L2 7M7 2L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Back to top
                        </button>
                    </div>
                </aside>
            </div>
            <SiteFooter variant="full" />
        </div>
    );
}
