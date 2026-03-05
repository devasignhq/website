import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LandingPage } from './pages/LandingPage';
import { ContributorPage } from './pages/ContributorPage';

// Main App Component & Routing
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contributor" element={<ContributorPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}