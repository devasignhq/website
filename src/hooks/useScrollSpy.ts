import { useEffect, useState, useRef, useCallback } from 'react';

/**
 * Scrollspy for the long-form docs/legal pages. Tracks which `<section id="…">`
 * is the topmost visible one via an IntersectionObserver and exposes helpers to
 * smooth-scroll to a section (or back to the top).
 *
 * Pass a **stable** array of section ids — a module-level constant or a
 * `useMemo`'d value — so the observer effect doesn't re-run on every render.
 * The ids must match the rendered `<section id>` and the nav item ids.
 */
export function useScrollSpy(sectionIds: string[]) {
    const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');
    const observerRef = useRef<IntersectionObserver | null>(null);
    const isClickScrolling = useRef(false);
    const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const scrollToSection = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
            isClickScrolling.current = true;
            setActiveSection(id);
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });

            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }

            // Allow the observer to take over again after the scroll animation.
            scrollTimeoutRef.current = setTimeout(() => {
                isClickScrolling.current = false;
            }, 900);
        }
    }, []);

    const scrollToTop = useCallback(() => {
        const firstId = sectionIds[0];
        if (firstId) scrollToSection(firstId);
    }, [sectionIds, scrollToSection]);

    // IntersectionObserver scrollspy — highlights the topmost visible section.
    useEffect(() => {
        const sectionElements = sectionIds
            .map((id) => document.getElementById(id))
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
    }, [sectionIds]);

    // Cleanup any pending timeout on unmount.
    useEffect(() => {
        return () => {
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

    return { activeSection, scrollToSection, scrollToTop };
}
