import { StatsigProvider, useClientAsyncInit } from '@statsig/react-bindings';
import { StatsigAutoCapturePlugin } from '@statsig/web-analytics';
import { StatsigSessionReplayPlugin } from '@statsig/session-replay';

const STATSIG_CLIENT_KEY = 'client-cBOBwEpbz8xXWVxibGwwth6hoDZFc4TfLNpQlA3BFMw';

// Only emit Statsig events from the production site. Localhost, Vercel
// previews, and any other host stay silent so dev/staging traffic doesn't
// pollute the dashboard.
const PRODUCTION_HOSTS = new Set(['devasign.com', 'www.devasign.com']);
const isProductionHost =
  typeof window !== 'undefined' && PRODUCTION_HOSTS.has(window.location.hostname);

export function StatsigWrapper({ children }: { children: React.ReactNode }) {
  const { client } = useClientAsyncInit(
    STATSIG_CLIENT_KEY,
    {},
    {
      plugins: isProductionHost
        ? [new StatsigAutoCapturePlugin(), new StatsigSessionReplayPlugin()]
        : [],
      loggingEnabled: isProductionHost ? 'browser-only' : 'disabled',
      networkConfig: isProductionHost ? undefined : { preventAllNetworkTraffic: true },
    }
  );

  return <StatsigProvider client={client}>{children}</StatsigProvider>;
}
