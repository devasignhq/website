import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../Logo";

interface SiteNavProps {
    activePath?: string;
}

export function SiteNav({ activePath }: SiteNavProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const path = activePath ?? location.pathname;
    const hash = location.hash;
    const is = (p: string) => path === p ? "active" : "";
    const productActive = path === "/" && hash === "#introducing" ? "active" : "";
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    useEffect(() => { setMobileOpen(false); }, [location.pathname, location.hash]);

    const closeMobile = () => setMobileOpen(false);

    const goToTop = (targetPath: string) =>
        (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            closeMobile();
            if (location.pathname === targetPath) {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                navigate(targetPath);
                requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }));
            }
        };

    const goToProduct = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        closeMobile();
        const scrollToIntroducing = () => {
            const el = document.getElementById("introducing");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        };
        if (location.pathname === "/") {
            scrollToIntroducing();
        } else {
            navigate("/#introducing");
            setTimeout(scrollToIntroducing, 60);
        }
    };

    const loginUrl = "https://app.devasign.com/authenticate/account";
    const signupUrl = "https://app.devasign.com/authenticate/account";

    return (
        <nav className="da-nav">
            <div className="da-nav-inner">
                <Link to="/" aria-label="DevAsign home" onClick={goToTop("/")}>
                    <Logo />
                </Link>
                <div className="da-nav-links">
                    <Link to="/#introducing" className={productActive} onClick={goToProduct}>Product</Link>
                    <Link to="/pricing" className={is("/pricing")} onClick={goToTop("/pricing")}>Pricing</Link>
                    <a href="https://github.com/devasignhq/devasign-api" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <Link to="/docs" className={is("/docs")} onClick={goToTop("/docs")}>Docs</Link>
                    <a href={loginUrl} className="da-nav-login">Login</a>
                    <a href={signupUrl} className="btn btn-sm btn-primary">Get Started →</a>
                </div>
                <button
                    type="button"
                    className="da-nav-burger"
                    aria-label="Open menu"
                    aria-expanded={mobileOpen}
                    onClick={() => setMobileOpen(true)}
                >
                    <span /><span /><span />
                </button>
            </div>

            {mobileOpen && (
                <div className="da-nav-mobile" role="dialog" aria-modal="true">
                    <div className="da-nav-mobile-head">
                        <Link to="/" aria-label="DevAsign home" onClick={goToTop("/")}>
                            <Logo />
                        </Link>
                        <button
                            type="button"
                            className="da-nav-mobile-close"
                            aria-label="Close menu"
                            onClick={closeMobile}
                        >
                            ×
                        </button>
                    </div>
                    <div className="da-nav-mobile-links">
                        <Link to="/#introducing" onClick={goToProduct}>Product</Link>
                        <Link to="/pricing" onClick={goToTop("/pricing")}>Pricing</Link>
                        <a href="https://github.com/devasignhq/devasign-api" target="_blank" rel="noopener noreferrer" onClick={closeMobile}>GitHub</a>
                        <Link to="/docs" onClick={goToTop("/docs")}>Docs</Link>
                    </div>
                    <div className="da-nav-mobile-ctas">
                        <a href={loginUrl} className="btn btn-secondary btn-block" onClick={closeMobile}>Login</a>
                        <a href={signupUrl} className="btn btn-primary btn-block" onClick={closeMobile}>Get Started →</a>
                    </div>
                </div>
            )}
        </nav>
    );
}
