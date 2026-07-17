import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { SiteNav } from '../components/layout/SiteNav';
import { SiteFooter } from '../components/layout/SiteFooter';

const Check = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 12 10 18 20 6" />
    </svg>
);

export function BountyAutomationPage() {
    return (
        <div className="da-root da-bounty">
            <SEO
                title="Bounty Automation — DevAsign"
                description="Pay contributors in USDC on Stellar the moment their PR ships. Drop a /bounty comment, lock funds in Soroban escrow, settle in seconds."
            />
            <SiteNav />

            {/* HERO */}
            <header className="da-b-hero">
                <div className="da-container">
                    <div className="da-b-hero-flex">
                        <div>
                            <div className="da-hero-eyebrow">
                                <span className="dot" />
                                <span className="eyebrow brand">AUTOMATE BOUNTY PAYOUTS</span>
                            </div>
                            <h1>
                                Pay contributors the <span className="da-brand-text">moment</span> <span className="da-highlight">their PR merges</span>
                            </h1>
                            <br></br>
                            <p className="da-b-hero-sub text-left" style={{ maxWidth: 640 }}>
                                Drop a one-line comment on any GitHub issue. Lock <strong>USDC into a Soroban escrow</strong>. The moment a contributor's PR is tested and merged to <code style={{ background: 'var(--bg-elevated)', padding: '2px 8px', border: '1px solid var(--border-faint)', fontSize: '0.9em' }}>main</code>, the escrow releases — settled on Stellar in seconds.
                            </p>
                            <div className="da-b-ctas">
                                <a href="https://app.devasign.com" className="btn btn-primary">Create bounty →</a>
                                <Link to="/bounty-docs" className="btn btn-secondary">Bounty Docs</Link>
                            </div>
                            <div className="da-proof-row">
                                Built on Stellar &amp; Soroban<span>·</span>USDC settlement &lt; 5s<span>·</span>Sub-cent network fees
                            </div>
                            <br></br>
                        </div>

                        <div>
                            <div className="da-issue-card">
                                <div className="head">
                                    <span className="num">acme/dashboard</span>
                                    <span>· issue</span>
                                    <span style={{ color: '#1a1a1a', fontWeight: 700 }}>#312</span>
                                    <span className="open">● Open · Bountied</span>
                                </div>
                                <div className="body">
                                    <div className="title">Implement streaming token usage aggregation for multi-turn tool-use conversations</div>
                                    <div className="comment">
                                        <span className="who">@maintainer</span><span className="meta">· 2d ago</span>
                                        <p><span className="cmd">/bounty $800 3 days</span></p>
                                        <p style={{ color: '#666', fontSize: 11, marginTop: 6 }}>Acceptance criteria: <code>UsageAggregator</code> implemented in both SDKs. PR passes CI on Python 3.9–3.12 and Node 18/20.</p>
                                    </div>
                                    <div className="comment">
                                        <span className="who bot">devasign</span><span className="meta">· 2d ago</span>
                                        <p>
                                            <strong style={{ color: 'var(--brand-deep)' }}>✓ Bounty escrowed.</strong> $800.00 USDC locked on Soroban contract <code style={{ background: '#eee', padding: '1px 6px', fontSize: 11 }}>CA…q4f</code>. Auto-pays on PR merge to <code style={{ background: '#eee', padding: '1px 6px', fontSize: 11 }}>main</code> within <strong>3 days</strong>.<span className="da-cursor" />
                                        </p>
                                        <div className="tag-grid">
                                            <span className="brand">$800 USDC</span>
                                            <span>3 day window</span>
                                            <span className="coral">Soroban escrow</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* HOW IT WORKS */}
            <section className="da-section">
                <div className="da-container">
                    <div className="da-section-head">
                        <span className="eyebrow">END-TO-END</span>
                        <h2><span className="da-brand-text">4 mins</span> from merge to wallet</h2>
                    </div>
                    <div className="da-timeline">
                        <div className="da-tl-event">
                            <span className="when">Day 0 · 14:02</span>
                            <h3>Maintainer drops <code style={{ fontSize: '0.85em', color: 'var(--brand)', background: 'var(--bg-elevated)', border: '1px solid var(--border-faint)', padding: '2px 8px' }}>/bounty $50 2 days</code></h3>
                            <p>On <code>acme/dashboard#312</code>. DevAsign acknowledges in 3 seconds and posts the escrow contract address.</p>
                        </div>
                        <div className="da-tl-event">
                            <span className="when">Day 0 · 14:02</span>
                            <h3>$50 USDC locks in Soroban escrow</h3>
                            <p>Tx confirmed on Stellar. Contributors browsing the issue see a green "Bountied" tag and the on-chain proof.</p>
                            <div className="receipt">
                                <div className="row"><span>Contract</span><span>CA…q4f</span></div>
                                <div className="row"><span>Locked</span><span>50.00 USDC</span></div>
                                <div className="row"><span>Status</span><span className="ok">● Active · 2d window</span></div>
                            </div>
                        </div>
                        <div className="da-tl-event">
                            <span className="when">Day 1 · 19:48</span>
                            <h3>Contributor opens PR · ticket says <code style={{ fontSize: '0.85em', color: 'var(--info)' }}>closes #312</code></h3>
                            <p>CI runs. DevAsign's goal-aware reviewer scores acceptance criteria 6/6 against the linked Figma. No gaps.</p>
                        </div>
                        <div className="da-tl-event">
                            <span className="when">Day 1 · 20:11</span>
                            <h3>Maintainer merges to <code>main</code></h3>
                            <p>The merge event fires the Soroban contract's release condition. No human in the loop after this point.</p>
                        </div>
                        <div className="da-tl-event">
                            <span className="when">Day 1 · 20:11 · +4s</span>
                            <h3>$50 USDC settled to contributor's wallet</h3>
                            <p>Receipt posted as a comment on the merged PR with the Stellar tx hash. Contributor confirmed in their wallet within seconds.</p>
                            <div className="receipt">
                                <div className="row"><span>Recipient</span><span>@octo-dev</span></div>
                                <div className="row"><span>Amount</span><span>50.00 USDC</span></div>
                                <div className="row"><span>Network fee</span><span>0.00001 XLM</span></div>
                                <div className="row"><span>Tx</span><span>e9b…42a1</span></div>
                                <div className="row"><span>Status</span><span className="ok">✓ Settled · 4.2s</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ESCROW DEEP DIVE */}
            <section className="da-escrow-section">
                <div className="da-container">
                    <div className="da-section-head">
                        <span className="eyebrow">TRUSTLESS ESCROW</span>
                        <h2>Funds locked. <span className="da-brand-text">Conditions on-chain</span></h2>
                        <p className="lead">The bounty isn't a promise — it's a Soroban contract. Contributors can verify the funds exist before they spend a minute on the issue. Maintainers can't ghost a payout. The merge event is the only key.</p>
                    </div>
                    <div className="da-escrow-grid">
                        <div className="da-escrow-copy">
                            <h3>How the escrow contract works</h3>
                            <p>When a maintainer drops <code style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-faint)', padding: '1px 6px', color: 'var(--brand)', fontFamily: 'var(--font-mono)', fontSize: '0.9em' }}>/bounty</code>, DevAsign calls a Soroban smart contract that locks the USDC and encodes the release condition: <em>PR merged to the configured production branch within the window</em>.</p>
                            <ul>
                                <li><span className="circle-check circle-sm"><Check /></span><span><strong>Maintainer can't pull funds early.</strong> Once locked, only the merge event releases them.</span></li>
                                <li><span className="circle-check circle-sm"><Check /></span><span><strong>Contributor can verify funds.</strong> Before writing code, look up the contract on-chain. Real money. Real lock.</span></li>
                                <li><span className="circle-check circle-sm"><Check /></span><span><strong>Window expires → auto-refund.</strong> No merge in time? Funds return to the maintainer. No support tickets.</span></li>
                                <li><span className="circle-check circle-sm"><Check /></span><span><strong>Settled in seconds.</strong> Stellar finalises in ~5s. No ACH. No invoice. No 30-day net.</span></li>
                            </ul>
                        </div>

                        <div className="da-diagram">
                            <div className="da-diagram-stage">
                                <div className="da-actor">
                                    <div className="av maint">M</div>
                                    <div>
                                        <div className="role">Maintainer</div>
                                        <div className="name">@acme-team</div>
                                    </div>
                                </div>
                                <div className="da-flow-arrow"><span>/bounty $50 2 days</span></div>
                                <div className="da-escrow-box">
                                    <div className="da-lock-icon">
                                        <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round">
                                            <rect x="3" y="11" width="18" height="11" rx="2" />
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                    </div>
                                    <div className="label">Soroban Escrow</div>
                                    <div className="amount">$50<span style={{ color: 'var(--fg-muted)', fontSize: '0.5em' }}>.00</span></div>
                                    <div className="sub">USDC locked · Contract CA…q4f</div>
                                </div>
                                <div className="da-flow-arrow"><span>↓ PR merged to main</span></div>
                                <div className="da-actor">
                                    <div className="av dev">D</div>
                                    <div>
                                        <div className="role">Contributor</div>
                                        <div className="name">@octo-dev</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHO IT'S FOR */}
            <section className="da-section">
                <div className="da-container">
                    <div className="da-section-head">
                        <span className="eyebrow">WHO IT'S FOR</span>
                        <h2>Two sides of the same merge</h2>
                    </div>
                    <div className="da-split">
                        <div className="da-split-card maint">
                            <span className="role-tag">For maintainers</span>
                            <h3>Get the issue closed without the chase.</h3>
                            <p>Stop messaging contributors on Discord at midnight. Stop running monthly invoice spreadsheets. Stop asking for IBAN numbers in DMs.</p>
                            <ul>
                                <li>Drop <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13, background: '#eee', padding: '1px 6px' }}>/bounty</code> in the issue you actually care about</li>
                                <li>Funds locked in seconds — proof contributors can verify</li>
                                <li>Auto-refund if no PR merges in the window</li>
                                <li>One-click receipts for accounting</li>
                            </ul>
                        </div>
                        <div className="da-split-card dev">
                            <span className="role-tag">For contributors</span>
                            <h3>See the money before you write the code.</h3>
                            <p>The bounty is real and on-chain. You can verify it in your wallet's block explorer before you've cloned the repo. Ship the PR — get paid the second it merges.</p>
                            <ul>
                                <li>Funds locked on-chain — verifiable, can't be revoked</li>
                                <li>Settles in seconds, sub-cent network fees</li>
                                <li>Receive USDC anywhere Stellar reaches</li>
                                <li>No invoicing, no 30-day net, no FX hits</li>
                            </ul>
                        </div>
                    </div>

                    <div className="da-stats">
                        <div className="da-stat-cell">
                            <div className="num">~5s</div>
                            <div className="label">Settlement</div>
                            <div className="sub">Stellar finality, end-to-end.</div>
                        </div>
                        <div className="da-stat-cell">
                            <div className="num">&lt;$0.01</div>
                            <div className="label">Network fee</div>
                            <div className="sub">Fixed txn fee per payout.</div>
                        </div>
                        <div className="da-stat-cell">
                            <div className="num">USDC</div>
                            <div className="label">Stable, on-chain</div>
                            <div className="sub">No FX hit. No bank wire.</div>
                        </div>
                        <div className="da-stat-cell">
                            <div className="num">100%</div>
                            <div className="label">On-merge</div>
                            <div className="sub">Pays the moment <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand)' }}>main</code> moves.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="da-faq-section">
                <div className="da-container">
                    <div className="da-faq-grid">
                        <div>
                            <span className="eyebrow">FAQ</span>
                            <h2 style={{ marginTop: 18 }}>Bounty <span className="da-brand-text">questions</span></h2>
                            <p className="da-faq-note" style={{ marginTop: 18, maxWidth: '34ch' }}>
                                Can't find it here? <a href="mailto:bethel@devasign.com">email CEO</a> — replies same day.
                            </p>
                        </div>
                        <div className="da-faq-list">
                            <details className="da-faq" open>
                                <summary>What does "tested &amp; merged" mean exactly?</summary>
                                <div className="da-faq-body"><p>Tested = your repo's CI passes on the PR. Merged = the PR closes the bountied issue and lands on the configured production branch (<code>main</code> by default; configurable per repo). Both conditions are checked by the Soroban contract — the release isn't subjective.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>Who can post bounty?</summary>
                                <div className="da-faq-body"><p>Any GitHub user with <em>maintain</em> or <em>admin</em> rights on the repo, and a funded Freighter or any Stellar-compatible wallet. Contributors with <em>write</em> access can request a bounty, but only maintainers can lock funds.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>What happens if no one ships in time?</summary>
                                <div className="da-faq-body"><p>The Soroban contract auto-refunds the maintainer's wallet when the window expires. No support ticket, no manual reclaim. You can re-post a fresh <code>/bounty</code> with a longer window or a higher amount.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>What if two contributors race the same issue?</summary>
                                <div className="da-faq-body"><p>A bounty can only be assigned to one contributor at a time. If both contributors apply for the bounty, one of them will be delegated the task by the maintainer and the contributor has the time frame to submit for them to get paid for a particular task.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>Why USDC and Stellar?</summary>
                                <div className="da-faq-body"><p>Stable value (USDC won't swing 30% mid-PR), seconds-to-finality settlement, sub-cent fees, and global reach. A contributor in Lagos and a contributor in Lisbon get paid the same way, the same speed, with no bank routing.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>Does this cost extra on top of my plan?</summary>
                                <div className="da-faq-body"><p>No. Bounty rails are included on every DevAsign plan — Free included. You pay only the Stellar network fee (sub-cent per payout) plus the bounty amount itself.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>Can I bounty private-repo issues?</summary>
                                <div className="da-faq-body"><p>Yes — on Pro, Max, and Enterprise. The Free plan supports bounties on public repos only, matching the Free product's open-source scope.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>How does this interact with goal-aware review?</summary>
                                <div className="da-faq-body"><p>Beautifully. DevAsign already reads the ticket the bounty is attached to — the same multimodal goal model. So the reviewer that scores the PR's acceptance criteria is the reviewer the maintainer trusts to recommend a merge. The bounty just makes the merge worth shipping.</p></div>
                            </details>
                        </div>
                    </div>
                </div>
            </section>

            {/* CLOSING */}
            <section className="da-closing" id="install">
                <div className="da-container">
                    <h2>Stop chasing payouts <span className="da-brand-text">Drop a comment</span></h2>
                    <p>Install DevAsign on a repo, fund your wallet, and post your first <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand)', background: 'var(--bg-elevated)', border: '1px solid var(--border-faint)', padding: '2px 8px', fontSize: '0.9em' }}>/bounty</code> in 60 seconds.</p>
                    <div className="da-closing-ctas">
                        <a href="https://app.devasign.com/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Get Started Now</a>
                        <a href="https://cal.com/devasign/30min" className="btn btn-secondary">Talk to founder</a>
                    </div>
                </div>
            </section>

            <SiteFooter variant="full" />
        </div>
    );
}
