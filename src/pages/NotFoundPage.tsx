import { SEO } from '../components/SEO';
import { Navigation } from '../components/layout/Navigation';

export function NotFoundPage() {
    return (
        <>
            <SEO title="Page Not Found" description="The page you're looking for doesn't exist or has been moved." />
            
            <div className="bg-[#090603] min-h-screen w-full flex flex-col relative overflow-hidden">
                {/* Navbar is strictly positioned absolute at the top by its implementation */}
                <Navigation />
                
                {/* Background 404 Watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
                    <span className="text-[250px] md:text-[350px] lg:text-[500px] font-geist-extrabold text-white opacity-[0.03] select-none leading-none tracking-tighter">
                        404
                    </span>
                </div>
                
                {/* Glow effects similar to mockup background */}
                <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#FE891F]/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0" />
                <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#FE891F]/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0" />
                
                {/* Content */}
                <div className="flex-grow flex flex-col items-center justify-center px-4 md:px-8 relative z-10 w-full max-w-[1260px] mx-auto min-h-screen">
                    <div className="flex flex-col items-center text-center max-w-[600px] z-10">
                        {/* Pill badge */}
                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-black/20 mb-6 backdrop-blur-sm">
                            <div className="w-1.5 h-1.5 bg-[#FE891F] rounded-full"></div>
                            <span className="font-geist-medium text-[10px] md:text-[11px] text-[#aaaaaa] tracking-[0.15em]">
                                PAGE NOT FOUND
                            </span>
                        </div>
                        
                        {/* Heading */}
                        <h1 className="text-white text-5xl md:text-7xl lg:text-[80px] leading-tight md:leading-none tracking-[-0.04em] mb-6 flex flex-col md:flex-row items-center gap-2 md:gap-4 flex-wrap justify-center">
                            <span className="font-geist-regular text-[#e6e6e6]">404</span>
                            <span 
                                className="text-[#FEF3C7] italic" 
                                style={{ 
                                    fontFamily: '"Instrument Serif", "Playfair Display", Georgia, serif', 
                                    fontWeight: 400 
                                }}
                            >
                                error?
                            </span>
                        </h1>
                        
                        {/* Description */}
                        <p className="font-geist-medium text-[#aaaaaa] text-base md:text-[17px] tracking-[-0.32px] opacity-90 max-w-[480px] mx-auto leading-relaxed mb-10">
                            The page you're looking for doesn't exist. Let's get you back on to why you're here.
                        </p>
                        
                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                            <a href="https://app.devasign.com/authenticate/account" className="signup-btn bg-[#fe891f] px-7 py-3.5 font-geist-extrabold text-[#090603] text-[15px] tracking-[-0.3px] transition-colors">
                                Get Started
                            </a>
                            <button className="flex items-center justify-center gap-2 border border-white hover:bg-white/10 bg-transparent px-7 py-3.5 font-geist-extrabold text-white text-[15px] tracking-[-0.3px] transition-colors relative overflow-hidden group">
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
            </div>
        </>
    );
}
