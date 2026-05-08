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
