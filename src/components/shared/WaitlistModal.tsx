import React, { useState } from 'react';
import { X } from 'lucide-react';

type WaitlistModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyZgIPuO7_Xj7xfa_HA1fBVHJLHMVMWxG0UbcyPVBw2O2OYga2rt4IhyfvE2Hqv1hqN1g/exec';

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.project.trim()) {
      setError('All fields are required');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        mode: 'no-cors',
        body: JSON.stringify(formData)
      });

      // Since we're using no-cors, we won't get response details
      // We'll assume success if no error is thrown
      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setFormData({ name: '', email: '', project: '' });
      }, 2000);
    } catch (err) {
      setError('Failed to submit form. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4 sm:px-6">
      <div className="bg-black p-6 sm:p-8 border border-gray-800 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 sm:top-6 right-4 sm:right-6 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="mb-6 sm:mb-8 text-left">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">Join the Waitlist</h2>
          <p className="text-sm sm:text-base text-gray-400">Be among the first to revolutionize open-source management.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2 text-left">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800 border border-gray-700 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2 text-left">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800 border border-gray-700 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2 text-left">
              Open-source Project
            </label>
            <input
              type="text"
              id="project"
              value={formData.project}
              onChange={(e) => setFormData(prev => ({ ...prev, project: e.target.value }))}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800 border border-gray-700 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Project name or URL"
            />
          </div>

          {error && (
            <p className="text-red-400 text-xs sm:text-sm">{error}</p>
          )}

          <div className="mt-8 sm:mt-16">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full px-6 py-2.5 sm:py-3 text-base sm:text-lg font-bold bg-gradient-to-r from-orange-500 to-orange-400 text-black hover:bg-white hover:from-white hover:to-white transition-all ${
                isLoading ? 'cursor-not-allowed opacity-70' : ''
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing
                </span>
              ) : success ? (
                'Thank you! ✓'
              ) : (
                'Join Waitlist'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};