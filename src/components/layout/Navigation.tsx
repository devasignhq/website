import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import svgPaths from "../../imports/svg-mzil336qsi";
import { Logo } from "../Logo";
import { URLS } from "../../config/constants";

export function Navigation() {
    const location = useLocation();
    const [totalStars, setTotalStars] = useState(20); // Default fallback value
    const [isLoading, setIsLoading] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        fetchGitHubStars();
    }, []);

    const fetchGitHubStars = async () => {
        try {
            const response = await fetch(
                'https://api.github.com/orgs/devasignhq/repos?per_page=100'
            );

            if (!response.ok) {
                throw new Error('Failed to fetch repositories');
            }

            const repos = await response.json();
            const total = repos.reduce((sum: any, repo: any) => sum + repo.stargazers_count, 0);

            setTotalStars(total);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching GitHub stars:', error);
            setIsLoading(false);
            // Keeps the default value of 20 if fetch fails
        }
    };

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 w-full px-4 md:px-8 py-6 md:py-10">
            <div className="max-w-[1260px] mx-auto flex items-center justify-between">
                <div className="flex items-center gap-4 md:gap-8">
                    <Link to="/">
                        <Logo />
                    </Link>
                    <div className="hidden md:flex items-center">
                        <Link
                            to="/docs"
                            className={`nav-link-custom font-geist-regular text-sm md:text-[15px] tracking-[-0.3px] whitespace-nowrap ${location.pathname.startsWith('/docs') ? 'active' : ''}`}
                        >
                            Docs
                        </Link>
                        <Link
                            to="/contributor"
                            className={`nav-link-custom font-geist-regular text-sm md:text-[15px] tracking-[-0.3px] whitespace-nowrap ${location.pathname === '/contributor' ? 'active' : ''}`}
                        >
                            Devs
                        </Link>
                        <Link
                            to="/agent-review"
                            className={`nav-link-custom font-geist-regular text-sm md:text-[15px] tracking-[-0.3px] whitespace-nowrap ${location.pathname === '/agent-review' ? 'active' : ''}`}
                        >
                            x402
                        </Link>
                        {/* <Link
                            to="/ai-security"
                            className={`nav-link-custom font-geist-regular text-sm md:text-[15px] tracking-[-0.3px] whitespace-nowrap ${location.pathname === '/ai-security' ? 'active' : ''}`}
                        >
                            AI Security
                        </Link> */}
                    </div>
                </div>
                <div className="hidden md:flex gap-3 md:gap-5 items-center">
                    <a
                        href="https://github.com/devasignhq/devasign-api"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-[5px] items-center hover:opacity-80 transition-opacity"
                    >
                        <div className="size-[20px]">
                            <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                                <path
                                    d={svgPaths.p48b43e0}
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                />
                            </svg>
                        </div>
                        <span className="font-geist-light text-[15px] text-white">
                            {isLoading ? '...' : totalStars}
                        </span>
                    </a>
                    <a
                        href={location.pathname === '/contributor' ? URLS.CONTRIBUTOR_APP : URLS.APP_AUTH}
                        className="login-btn hidden md:block px-5 py-2.5 font-geist-extrabold text-[#fe891f] text-sm md:text-[15px] tracking-[-0.3px] whitespace-nowrap transition-colors"
                    >
                        Login
                    </a>
                    <a
                        href={location.pathname === '/contributor' ? URLS.CONTRIBUTOR_APP : URLS.APP_AUTH}
                        className="signup-btn hidden md:block bg-[#fe891f] px-5 py-2.5 font-geist-extrabold text-[#090603] text-sm md:text-[15px] tracking-[-0.3px] whitespace-nowrap transition-colors"
                    >
                        Sign Up
                    </a>
                </div>

                <button 
                  className="md:hidden flex items-center justify-center p-2 text-white" 
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[100] bg-[#090603]/80 backdrop-blur-xl flex flex-col items-center justify-center">
                    <div className="absolute top-0 left-0 right-0 w-full px-4 md:px-8 py-6 md:py-10 flex items-center justify-between">
                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                            <Logo />
                        </Link>
                        <button 
                            className="p-2 text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-col items-center gap-8 w-full px-8 mt-12">
                        <div className="flex flex-col items-center gap-6">
                            <Link
                                to="/docs"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`font-geist-regular text-2xl tracking-[-0.3px] text-white whitespace-nowrap transition-opacity ${location.pathname.startsWith('/docs') ? 'opacity-100' : 'opacity-70'}`}
                            >
                                Docs
                            </Link>
                            <Link
                                to="/contributor"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`font-geist-regular text-2xl tracking-[-0.3px] text-white whitespace-nowrap transition-opacity ${location.pathname === '/contributor' ? 'opacity-100' : 'opacity-70'}`}
                            >
                                Devs
                            </Link>
                            <Link
                                to="/agent-review"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`font-geist-regular text-2xl tracking-[-0.3px] text-white whitespace-nowrap transition-opacity ${location.pathname === '/agent-review' ? 'opacity-100' : 'opacity-70'}`}
                            >
                                x402
                            </Link>
                        </div>

                        <div className="flex flex-col items-center gap-4 w-full max-w-[200px] mt-12">
                            <a
                                href="https://github.com/devasignhq/devasign-api"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-[5px] items-center justify-center hover:opacity-80 transition-opacity mb-2"
                            >
                                <div className="size-[24px]">
                                    <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                                        <path
                                            d={svgPaths.p48b43e0}
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                </div>
                                <span className="font-geist-light text-xl text-white">
                                    {isLoading ? '...' : totalStars}
                                </span>
                            </a>
                            <a
                                href={location.pathname === '/contributor' ? URLS.CONTRIBUTOR_APP : URLS.APP_AUTH}
                                className="login-btn w-full text-center px-5 py-3.5 font-geist-extrabold text-[#fe891f] text-lg tracking-[-0.3px] whitespace-nowrap transition-colors"
                            >
                                Login
                            </a>
                            <a
                                href={location.pathname === '/contributor' ? URLS.CONTRIBUTOR_APP : URLS.APP_AUTH}
                                className="signup-btn w-full text-center bg-[#fe891f] px-5 py-3.5 font-geist-extrabold text-[#090603] text-lg tracking-[-0.3px] whitespace-nowrap transition-colors"
                            >
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}