import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-mono">
      <div className="mx-auto">
        <Hero />
        <Features />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;