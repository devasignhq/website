import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LandingPage } from './pages/LandingPage';
import { WaitlistPage } from './pages/WaitlistPage';

// Main App Component & Routing
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/waitlist" element={<WaitlistPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}