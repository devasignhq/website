import { SEO } from '../components/SEO';
import { SiteNav } from '../components/layout/SiteNav';
import { SiteFooter } from '../components/layout/SiteFooter';

export function NotFoundPage() {
    return (
        <>
            <SEO title="Page Not Found" description="The page you're looking for doesn't exist or has been moved." />

            <div className="da-root min-h-screen w-full flex flex-col relative overflow-hidden">
                <SiteNav />

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
                    <span className="text-[250px] md:text-[350px] lg:text-[500px] select-none leading-none tracking-tighter" style={{ color: "var(--fg)", opacity: 0.03, fontFamily: "var(--font-display)", fontWeight: 800 }}>
                        404
                    </span>
                </div>

                <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#FE891F]/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0" />
                <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#FE891F]/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0" />

                <div className="flex-grow flex flex-col items-center justify-center px-4 md:px-8 relative z-10 w-full max-w-[1260px] mx-auto">
                    <div className="flex flex-col items-center text-center max-w-[600px] z-10">
                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-black/20 mb-6 backdrop-blur-sm">
                            <div className="w-1.5 h-1.5 bg-[var(--brand)] rounded-full"></div>
                            <span className="eyebrow">PAGE NOT FOUND</span>
                        </div>

                        <h1 className="mb-6 flex flex-col md:flex-row items-center gap-2 md:gap-4 flex-wrap justify-center">
                            <span>404</span>
                            <span
                                className="italic"
                                style={{
                                    fontFamily: '"Instrument Serif", "Playfair Display", Georgia, serif',
                                    fontWeight: 400,
                                    color: "#FEF3C7",
                                }}
                            >
                                error?
                            </span>
                        </h1>

                        <p className="body-lg max-w-[480px] mx-auto mb-10" style={{ color: "var(--fg-muted)" }}>
                            The page you're looking for doesn't exist. Let's get you back on to why you're here.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                            <a href="https://app.devasign.com/authenticate/account" className="btn btn-primary">
                                Get Started
                            </a>
                            <button className="btn btn-secondary flex items-center justify-center gap-2 relative overflow-hidden group">
                                <span className="relative z-10 flex items-center gap-2 pointer-events-none">
                                    Watch Demo
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 opacity-0 cursor-pointer z-20 h-full w-full flex items-center justify-center" dangerouslySetInnerHTML={{ __html: `<wistia-player media-id="stxda2cwpp" wistia-popover="true" aspect="1.83206106870229" style="width: 300px;height: 164px;"></wistia-player>` }} />
                            </button>
                        </div>
                    </div>
                </div>

                <SiteFooter variant="full" />
            </div>
        </>
    );
}
