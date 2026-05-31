import { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LandingPage } from './pages/LandingPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { DocsPage } from './pages/DocsPage';
import { BountyDocsPage } from './pages/BountyDocsPage';
import { BountyPayoutsPage } from './pages/BountyPayoutsPage';
import { PricingPage } from './pages/PricingPage';
import { Toaster } from 'sonner';

function GAPageView() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // @ts-expect-error gtag is loaded globally via index.html
    if (typeof window.gtag === 'function') {
      // @ts-expect-error gtag is loaded globally via index.html
      window.gtag('event', 'page_view', {
        page_path: pathname + search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname, search]);

  return null;
}

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      };
      if (!tryScroll()) {
        const t = setTimeout(tryScroll, 50);
        return () => clearTimeout(t);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

// Main App Component & Routing
export default function App() {
  return (
    <HelmetProvider>
      <Toaster />
      <BrowserRouter>
        <ScrollToHash />
        <GAPageView />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/bounty-payouts" element={<BountyPayoutsPage />} />
          <Route path="/bounty-docs" element={<BountyDocsPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}