# DevAsign Website + x402 Integration

This is the website and documentation portal for **DevAsign** — an AI-powered platform that reviews code and automates bounty payouts for open-source projects using the **Stellar** network.

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file (or update the existing one) in the project root:

```env
VITE_API_URL="http://localhost:5000"       # Backend API URL
VITE_RPC_URL="https://soroban-testnet.stellar.org"  # Stellar Testnet RPC endpoint
```

### 3. Start Development Server

```bash
npm run dev
```

The application will start at `http://localhost:3001/` and automatically open in your default browser.

### 4. Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build` directory.

## Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Landing Page | Hero section, "How It Works", benefits, and CTA to the main app |
| `/docs` | Documentation | Full product documentation with scrollspy sidebar navigation |
| `/contributor` | Contributors | Dedicated page for developers looking to earn bounties |
| `/agent-review` | Agent Review (x402) | Pay-per-use AI code review via the x402 payment protocol |
| `*` | 404 | Custom not-found page |

## ⚡ x402 Payment Protocol Integration

This website includes an integration with the [**x402 protocol**](https://www.x402.org/) — an HTTP-native payment standard that enables pay-per-API-call workflows on the Stellar network.

The **Agent Review** page (`/agent-review`) demonstrates this integration end-to-end:

1. A user connects their Stellar wallet via [Stellar Wallets Kit](https://github.com/Creit-Tech/Stellar-Wallets-Kit).
2. They paste a public GitHub Pull Request URL.
3. The frontend sends a request to the backend, which responds with an HTTP `402 Payment Required` header containing payment instructions.
4. The client constructs and signs a **0.50 USDC** payment payload via the connected wallet.
5. The signed payment is sent back with the retry request. The backend verifies and settles the payment on-chain.
6. Once payment is confirmed, an autonomous AI agent reviews the PR and posts structured feedback as a GitHub comment.

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Dev | `npm run dev` | Start development server on port 3001 |
| Build | `npm run build` | Create production build in `build/` |

## Notes

- The project uses the **Geist Mono** font family loaded from Google Fonts.
- Path alias `@/` is configured in `vite.config.ts` to point to the `src/` directory.
- Figma asset hashes are aliased in `vite.config.ts` for seamless imports.
- The x402 integration currently targets the **Stellar Testnet** (`stellar:testnet`).

## Troubleshooting

### Port Already in Use

The dev server runs on port **3001**. To change it, update `vite.config.ts`:

```typescript
server: {
  port: 3002, // Change to any available port
  open: true,
}
```

### Wallet Connection Issues

- Ensure you have a Stellar-compatible wallet extension installed (e.g., Freighter).
- The wallet must be set to the **Testnet** network to match the application's configuration.

© 2026 DevAsign, Inc.
