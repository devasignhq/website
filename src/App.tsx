import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LandingPage } from './pages/LandingPage';
import { WaitlistPage } from './pages/WaitlistPage';
import { ContributorPage } from './pages/ContributorPage';

// Main App Component & Routing
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/waitlist" element={<WaitlistPage />} />
          <Route path="/contributor" element={<ContributorPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}