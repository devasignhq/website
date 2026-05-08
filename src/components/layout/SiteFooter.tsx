import { Link } from "react-router-dom";
import { Logo } from "../Logo";

interface SiteFooterProps {
    variant?: "full" | "compact";
}

export function SiteFooter({ variant = "compact" }: SiteFooterProps) {
    if (variant === "compact") {
        return (
            <footer className="da-footer-compact">
                <div className="inner">
                    <span>© {new Date().getFullYear()} DevAsign Inc. · Pay contributors in USDC, on Stellar, on merge.</span>
                    <span>
                        <Link to="/">← Back to home</Link>
                        {" · "}
                        <a href="mailto:bethel@devasign.com">bethel@devasign.com</a>
                    </span>
                </div>
            </footer>
        );
    }

    return (
        <footer className="da-footer-full">
            <div className="da-container">
                <div className="da-footer-bounty">
                    <div>Built on top of DevAsign's open-source bounty rails — pay contributors in USDC on Stellar with on-chain settlement in seconds.</div>
                    <Link to="/bounty-payouts">Learn more →</Link>
                </div>
                <div className="da-footer-grid">
                    <div className="da-footer-col">
                        <Link to="/"><Logo size="sm" /></Link>
                        <p className="da-footer-tag">Multimodal, goal-aware code review.</p>
                        <div className="da-footer-social" aria-label="Social media">
                            <a
                                href="https://github.com/devasignhq"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fill="currentColor"
                                        d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.69-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18.92-.26 1.9-.38 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .31.21.66.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://x.com/devasign"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X (Twitter)"
                            >
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fill="currentColor"
                                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/devasign"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fill="currentColor"
                                        d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://discord.gg/GtvqA4UPwT"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Discord"
                            >
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fill="currentColor"
                                        d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3.2a.077.077 0 0 0-.082.038c-.345.62-.73 1.43-.997 2.062a18.27 18.27 0 0 0-5.487 0 12.51 12.51 0 0 0-1.012-2.062.08.08 0 0 0-.082-.038A19.74 19.74 0 0 0 5.14 4.37a.07.07 0 0 0-.032.027C2.36 8.516 1.61 12.53 1.978 16.49a.083.083 0 0 0 .031.057 19.91 19.91 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.225-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.075.075 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.01c.12.099.246.197.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.077.077 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-4.587-.838-8.566-3.549-12.094a.06.06 0 0 0-.031-.028zM8.02 14.06c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.957-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.957 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="da-footer-col">
                        <h4>Product</h4>
                        <ul>
                            <li><Link to="/#platforms">Platforms</Link></li>
                            <li><Link to="/#shots">Multimodal</Link></li>
                            <li><Link to="/bounty-payouts">Bounty Payout</Link></li>
                        </ul>
                    </div>
                    <div className="da-footer-col">
                        <h4>Resources</h4>
                        <ul>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/docs">Docs</Link></li>
                            <li><a href="https://github.com/devasignhq/devasign-api" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                            <li><a href="mailto:bethel@devasign.com">Contact</a></li>
                        </ul>
                    </div>
                    <div className="da-footer-col">
                        <h4>More</h4>
                        <ul>
                            <li><a href="https://imaginary-dime-a8c.notion.site/Terms-of-Use-c46ff8a9d3d08262a60b0168117f4926" target="_blank" rel="noopener noreferrer">Terms of Use</a></li>
                            <li><a href="https://imaginary-dime-a8c.notion.site/Privacy-Policy-35aff8a9d3d08065a770ce7cc313ed53" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="da-footer-col">
                        <h4>Join our newsletter</h4>
                        <form
                            className="da-footer-form"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="da-footer-input">
                                <input id="footer-email" type="email" placeholder="dev@yourco.com" />
                                <button type="submit">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="da-footer-bottom">
                    <span>© {new Date().getFullYear()} DevAsign Inc. · Multimodal, goal-aware code review.</span>
                </div>
            </div>
        </footer>
    );
}
