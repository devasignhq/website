import React, { useState } from 'react';

type EmailFormProps = {
  buttonText: string;
  includeNameField?: boolean;
  disclaimerText?: string;
};

export const EmailForm: React.FC<EmailFormProps> = ({ 
  buttonText, 
  includeNameField = false,
  disclaimerText
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (includeNameField && !name.trim()) {
      setError('Please enter your name');
      return;
    }
    
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Simulate form submission
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setSuccess(false);
        setEmail('');
        setName('');
      }, 3000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full">
      {includeNameField && (
        <div className="mb-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            aria-label="Your name"
          />
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-grow px-4 py-3 bg-gray-900 border border-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          aria-label="Your email address"
        />
        
        <button
          type="submit"
          disabled={isLoading}
          className={`px-6 py-3 text-lg font-extrabold transition-all ${
            isLoading 
              ? 'bg-gray-700 text-gray-300 cursor-not-allowed' 
              : 'bg-gradient-to-r from-orange-500 to-orange-400 text-black hover:from-orange-600 hover:to-orange-500'
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing
            </span>
          ) : success ? (
            'Thank you! ✓'
          ) : (
            buttonText
          )}
        </button>
      </div>
      
      {error && (
        <p className="mt-2 text-sm text-red-400">{error}</p>
      )}
      
      {disclaimerText && (
        <p className="mt-3 text-xs text-gray-500">{disclaimerText}</p>
      )}
    </form>
  );
};