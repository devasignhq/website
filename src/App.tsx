import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LandingPage } from './pages/LandingPage';
import { ContributorPage } from './pages/ContributorPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { DocsPage } from './pages/DocsPage';
import { AgentReviewPage } from './pages/AgentReviewPage';
import { Toaster } from 'sonner';

// Main App Component & Routing
export default function App() {
  return (
    <HelmetProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contributor" element={<ContributorPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/agent-review" element={<AgentReviewPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}