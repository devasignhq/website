import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import devasignLogo from './logo/devasign logo full.svg';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#000000] relative min-h-[420px] sm:min-h-[520px] flex flex-col">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center flex-grow">
        {/* Brand */}
        <div className="flex flex-col items-center">
          <div className="mb-3 sm:mb-4">
            <img src={devasignLogo} alt="Devasign Logo" className="h-6 sm:h-8" />
          </div>
          <p className="text-sm sm:text-lg text-gray-400 mb-4 sm:mb-6 text-center max-w-md">
            Automate open-source payments and merges with AI-powered tools.
          </p>
          <div className="flex justify-center space-x-3 sm:space-x-4">
            <a 
              href="https://github.com/devasignhq" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-orange-400 transition-colors" 
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a 
              href="https://x.com/devasign" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-orange-400 transition-colors" 
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/company/devasign/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-orange-400 transition-colors" 
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
        
      <div className="pt-6 sm:pt-8 pb-4 sm:pb-6 w-full text-center absolute bottom-0 left-0">
        <p className="text-xs sm:text-base text-gray-400">
          &copy; {currentYear} DevAsign. All rights reserved.
        </p>
      </div>
    </footer>
  );
};