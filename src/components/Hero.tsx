import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { WaitlistModal } from './shared/WaitlistModal';
import devasignLogo from './logo/devasign logo full.svg';
import scfLogo from './logo/scf logo.svg';
import githubLogo from './logo/github-logo.svg';

export const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setMousePosition({ x, y });
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Fixed Navigation Bar */}
      <nav 
        className={`fixed top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black' : 'bg-transparent'
        }`}
      >
        <img src={devasignLogo} alt="Devasign Logo" className="h-6 sm:h-8" />
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href="https://github.com/devasignhq"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-2 text-base font-bold border border-white text-white hover:border-gray-400 transition-all"
          >
            <img src={githubLogo} alt="GitHub" className="w-5 h-5 mr-2" />
            GitHub
          </a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2 text-base font-bold bg-gradient-to-r from-orange-500 to-orange-400 text-black hover:bg-white hover:from-white hover:to-white transition-all"
          >
            Join Waitlist
          </button>
        </div>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="sm:hidden text-white hover:text-orange-400 transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-lg"></div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 sm:top-7 right-4 text-white hover:text-orange-400 transition-colors z-10"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <div className="text-center relative z-10 space-y-4">
            <a
              href="https://github.com/devasignhq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold border border-white text-white hover:border-gray-400 transition-all"
            >
              <img src={githubLogo} alt="GitHub" className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              GitHub
            </a>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-extrabold bg-gradient-to-r from-orange-500 to-orange-400 text-black hover:bg-white hover:from-white hover:to-white transition-all"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      )}

      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-black pt-24 sm:pt-0">
      {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-orange-950/5 to-black z-0"></div>
        
        {/* Grid vector background with radial blur */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(85, 85, 85, 0.6) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(85, 85, 85, 0.6) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
              mask: 'radial-gradient(circle at center, black 30%, transparent 70%)',
              WebkitMask: 'radial-gradient(circle at center, black 30%, transparent 70%)',
              filter: 'blur(0.5px)',
              opacity: '0.6'
            }}
          />
        </div>

        {/* Additional static left-center blur */}
        <div 
          className="absolute w-[900px] h-[900px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.12) 0%, rgba(249, 115, 22, 0.06) 45%, transparent 70%)',
            filter: 'blur(140px)',
            left: '20%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
        
        {/* Enhanced floating UI elements with interactive blur */}
        <div 
          className="absolute w-[1000px] h-[1000px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, rgba(249, 115, 22, 0.08) 45%, transparent 70%)',
            filter: 'blur(160px)',
            transform: `translate(calc(${mousePosition.x}px - 50%), calc(${mousePosition.y}px - 50%))`,
            willChange: 'transform',
            transition: 'transform 0.2s cubic-bezier(0.2, 0, 0.2, 1)',
          }}
        ></div>
        
        <div 
          className="absolute w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.12) 0%, rgba(249, 115, 22, 0.06) 45%, transparent 70%)',
            filter: 'blur(130px)',
            transform: `translate(calc(${mousePosition.x * 1.2}px - 50%), calc(${mousePosition.y * 1.2}px - 50%))`,
            willChange: 'transform',
            transition: 'transform 0.3s cubic-bezier(0.2, 0, 0.2, 1)',
          }}
        ></div>

        {/* Additional static glow */}
        <div 
          className="absolute w-[1200px] h-[1200px] rounded-full opacity-50 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, rgba(249, 115, 22, 0.03) 35%, transparent 60%)',
            filter: 'blur(180px)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
        
        {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 mb-4 sm:mb-6 text-xs sm:text-sm font-medium bg-gradient-to-r from-orange-600/10 to-orange-500/10 border border-orange-500/20 text-orange-400">
          Coming soon • Join the waitlist
        </div>
        
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300 max-w-5xl mx-auto">
            Automate bounty payments and PR merges with AI
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
          DevAsign streamlines open-source workflows with advanced PR review, 
          intelligent contributor feedback, and automatic bounty payouts.
        </p>
        
          <div className="flex flex-col items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-extrabold bg-gradient-to-r from-orange-500 to-orange-400 text-black hover:bg-white hover:from-white hover:to-white transition-all"
            >
              Join Waitlist
            </button>
            <div className="mt-12 sm:mt-16 flex items-center gap-2 sm:gap-3">
              <p className="text-sm sm:text-base text-white">Backed by</p>
              <img src={scfLogo} alt="Stellar Community Fund Logo" className="h-8 sm:h-12" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <ArrowRight className="w-6 h-6 text-gray-500 animate-bounce rotate-180" />
      </div>

        <WaitlistModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
    </section>
    </>
  );
};
