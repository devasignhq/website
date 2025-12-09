import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import svgPaths from "../../imports/svg-mzil336qsi";
import { Logo } from "../Logo";

export function Navigation() {
    const [totalStars, setTotalStars] = useState(20); // Default fallback value
    const [isLoading, setIsLoading] = useState(true);

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
        <nav className="absolute top-0 left-0 right-0 z-50 w-full max-w-[1260px] mx-auto px-4 md:px-8 py-6 md:py-10">
            <div className="flex items-center justify-between">
                <Link to="/">
                    <Logo />
                </Link>
                <div className="flex gap-3 md:gap-5 items-center">
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
                    <Link 
                        to="/waitlist" 
                        className="join-waitlist-btn hidden md:block bg-[#fe891f] px-5 md:px-7 py-2.5 md:py-3 font-geist-extrabold text-[#090603] text-sm md:text-[15px] tracking-[-0.3px] whitespace-nowrap transition-colors"
                    >
                        Join Waitlist
                    </Link>
                </div>
            </div>
        </nav>
    );
}