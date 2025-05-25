import React, { useState } from 'react';
import { WaitlistModal } from './shared/WaitlistModal';
import { Check } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    "Be the first to try new features and updates",
    "Get dedicated onboarding and priority support",
    "Lock in the best founder pricing forever"
  ];

  return (
    <section className="pt-11 pb-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#000000] border-b border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 mb-4 sm:mb-6 text-xs sm:text-sm font-medium bg-gradient-to-r from-orange-600/10 to-orange-500/10 border border-orange-500/20 text-orange-400">
          Limited Beta Access
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 max-w-3xl mx-auto">
          Be Among the First to Revolutionize Open-Source Management
        </h2>

        <div className="flex flex-col items-center mb-8 sm:mb-12">
          <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg text-gray-400 inline-flex flex-col items-center">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 flex-shrink-0" />
                <span className="text-center text-sm sm:text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-extrabold bg-gradient-to-r from-orange-500 to-orange-400 text-black hover:bg-white hover:from-white hover:to-white transition-all"
        >
          Join Waitlist
        </button>

        <WaitlistModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};