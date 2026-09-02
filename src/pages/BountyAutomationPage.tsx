import { SEO } from '../components/SEO';
import { SiteNav } from '../components/layout/SiteNav';
import { SiteFooter } from '../components/layout/SiteFooter';
import { URLS } from '../config/constants';

const Check = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 12 10 18 20 6" />
    </svg>
);

export function BountyAutomationPage() {
    return (
        <div className="da-root da-bounty">
            <SEO
                title="Open-Source Bounties — DevAsign"
                description="Fund an issue on your open-source repo and pay the contributor in USDC the moment their fix merges. One comment, a Soroban escrow on Stellar, settlement in seconds."
            />
            <SiteNav />

            {/* HERO */}
            <header className="da-b-hero">
                <div className="da-container">
                    <div className="da-b-hero-flex">
                        <div>
                            <div className="da-hero-eyebrow">
                                <span className="dot" />
                                <span className="eyebrow brand">BOUNTIES FOR OPEN-SOURCE REPOS</span>
                            </div>
                            <h1>
                                Pay contributors the <span className="da-brand-text">moment</span> <span className="da-highlight">their PR merges</span>
                            </h1>
                            <br></br>
                            <p className="da-b-hero-sub text-left" style={{ maxWidth: 640 }}>
                                Comment on any issue in your open-source repo and DevAsign turns it into a funded bounty. Your <strong>USDC sits in a Soroban escrow</strong>, locked on-chain to the contributor you pick, and the moment their PR merges to <code style={{ background: 'var(--bg-elevated)', padding: '2px 8px', border: '1px solid var(--border-faint)', fontSize: '0.9em' }}>main</code> it settles to their wallet in seconds.
                            </p>
                            <div className="da-b-ctas">
                                <a href={URLS.SPONSOR_AUTH} className="btn btn-primary">Create bounty →</a>
                                <a href={URLS.CONTRIBUTOR_AUTH} className="btn btn-secondary">Dev Login</a>
                            </div>
                            <div className="da-proof-row">
                                Built on Stellar &amp; Soroban<span>·</span>For public repos<span>·</span>Settles in seconds
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
                                        <p><span className="cmd">bounty $800 3 days</span></p>
                                        <p style={{ color: '#666', fontSize: 11, marginTop: 6 }}>Acceptance criteria: <code>UsageAggregator</code> implemented in both SDKs. PR passes CI on Python 3.9–3.12 and Node 18/20.</p>
                                    </div>
                                    <div className="comment">
                                        <span className="who bot">devasign</span><span className="meta">· 2d ago</span>
                                        <p>
                                            <strong style={{ color: 'var(--brand-deep)' }}>✓ Bounty escrowed.</strong> $800.00 USDC locked on Soroban contract <code style={{ background: '#eee', padding: '1px 6px', fontSize: 11 }}>CA…q4f</code>. Pick an applicant and it pays out the moment their PR merges to <code style={{ background: '#eee', padding: '1px 6px', fontSize: 11 }}>main</code>.<span className="da-cursor" />
                                        </p>
                                        <div className="tag-grid">
                                            <span className="brand">$800 USDC</span>
                                            <span>3 day delivery window</span>
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
                            <h3>Maintainer comments <code style={{ fontSize: '0.85em', color: 'var(--brand)', background: 'var(--bg-elevated)', border: '1px solid var(--border-faint)', padding: '2px 8px' }}>bounty $50 2 days</code></h3>
                            <p>On <code>acme/dashboard#312</code>. DevAsign answers within seconds with a funding link and the acceptance criteria it drafted from the issue.</p>
                        </div>
                        <div className="da-tl-event">
                            <span className="when">Day 0 · 14:02</span>
                            <h3>$50 USDC locks in Soroban escrow</h3>
                            <p>The maintainer signs the funding transaction in their own wallet. Anyone reading the issue now sees a "Bountied" tag and can check the money on-chain themselves.</p>
                            <div className="receipt">
                                <div className="row"><span>Contract</span><span>CA…q4f</span></div>
                                <div className="row"><span>Locked</span><span>50.00 USDC</span></div>
                                <div className="row"><span>Status</span><span className="ok">● Active · 2d window</span></div>
                            </div>
                        </div>
                        <div className="da-tl-event">
                            <span className="when">Day 0 · 16:30</span>
                            <h3>Maintainer picks an applicant</h3>
                            <p>Developers apply through DevAsign. The maintainer chooses one and signs the delegation, which writes that contributor's payout address into the escrow and starts the 2-day clock. From here the money can only ever go to them.</p>
                        </div>
                        <div className="da-tl-event">
                            <span className="when">Day 1 · 19:48</span>
                            <h3>Contributor opens PR · ticket says <code style={{ fontSize: '0.85em', color: 'var(--info)' }}>closes #312</code></h3>
                            <p>CI runs, and the DevAsign reviewer checks the PR against the bounty's own acceptance criteria. Six of six, no gaps.</p>
                        </div>
                        <div className="da-tl-event">
                            <span className="when">Day 1 · 20:11</span>
                            <h3>Maintainer merges to <code>main</code></h3>
                            <p>DevAsign confirms the merged PR was written by the contributor it was delegated to, then calls release on the contract. Nobody has to remember to pay anyone.</p>
                        </div>
                        <div className="da-tl-event">
                            <span className="when">Day 1 · 20:11 · +4s</span>
                            <h3>$50 USDC settled to contributor's wallet</h3>
                            <p>A receipt with the Stellar transaction hash lands on the issue, and the contributor watches it arrive in their own wallet.</p>
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
                        <p className="lead">A bounty here isn't a promise, it's a contract holding real money. A contributor can check the funds exist before spending an evening on the issue, and once the work is delegated the escrow knows exactly one address it's allowed to pay.</p>
                    </div>
                    <div className="da-escrow-grid">
                        <div className="da-escrow-copy">
                            <h3>How the escrow contract works</h3>
                            <p>When a maintainer comments <code style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-faint)', padding: '1px 6px', color: 'var(--brand)', fontFamily: 'var(--font-mono)', fontSize: '0.9em' }}>bounty</code>, DevAsign builds a Soroban transaction and hands it to their wallet to sign. The USDC leaves their wallet for the contract and stays there until one of two things happens: the delegated contributor's PR merges, or the bounty is cancelled or runs out of time.</p>
                            <ul>
                                <li><span className="circle-check circle-sm"><Check /></span><span><strong>The payout address is fixed on-chain.</strong> Delegation writes the contributor in, so a release can't be redirected to anyone else, not even by us.</span></li>
                                <li><span className="circle-check circle-sm"><Check /></span><span><strong>Contributors can check before they start.</strong> Look the contract up on any Stellar explorer and see the money sitting there.</span></li>
                                <li><span className="circle-check circle-sm"><Check /></span><span><strong>A missed deadline doesn't end it quietly.</strong> Both sides are told, and the contributor has 24 hours to contest before the escrow refunds the maintainer.</span></li>
                                <li><span className="circle-check circle-sm"><Check /></span><span><strong>Nobody holds your keys.</strong> Not DevAsign either. Every movement is signed in your own wallet or by the contract itself.</span></li>
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
                                <div className="da-flow-arrow"><span>bounty $50 2 days</span></div>
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
                            <p>No more chasing someone on Discord at midnight, no more monthly invoice spreadsheet, no more asking a stranger for their IBAN in a DM.</p>
                            <ul>
                                <li>Comment <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13, background: '#eee', padding: '1px 6px' }}>bounty</code> on the issue you actually care about</li>
                                <li>Funded in seconds, and contributors can verify it themselves</li>
                                <li>Refunded to you if the work never lands</li>
                                <li>Every transaction on record, exportable as CSV</li>
                            </ul>
                        </div>
                        <div className="da-split-card dev">
                            <span className="role-tag">For contributors</span>
                            <h3>See the money before you write the code.</h3>
                            <p>You can look the escrow up in a block explorer before you've even cloned the repo. Once the maintainer delegates the work to you, the contract can't pay anybody else.</p>
                            <ul>
                                <li>The money is on-chain and locked to your address</li>
                                <li>Settles in seconds for a fraction of a cent</li>
                                <li>Paid in USDC, anywhere Stellar reaches</li>
                                <li>No invoice, no 30-day wait, no FX spread</li>
                            </ul>
                        </div>
                    </div>

                    <div className="da-stats">
                        <div className="da-stat-cell">
                            <div className="num">~5s</div>
                            <div className="label">Settlement</div>
                            <div className="sub">From merge to wallet.</div>
                        </div>
                        <div className="da-stat-cell">
                            <div className="num">&lt;$0.01</div>
                            <div className="label">Network fee</div>
                            <div className="sub">Whatever the payout is worth.</div>
                        </div>
                        <div className="da-stat-cell">
                            <div className="num">USDC</div>
                            <div className="label">Stable, on-chain</div>
                            <div className="sub">Same value on both sides.</div>
                        </div>
                        <div className="da-stat-cell">
                            <div className="num">0</div>
                            <div className="label">Funds we hold</div>
                            <div className="sub">The contract holds it, not us.</div>
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
                                Not answered here? <a href="mailto:bethel@devasign.com">Email our CEO</a>. He replies the same day.
                            </p>
                        </div>
                        <div className="da-faq-list">
                            <details className="da-faq" open>
                                <summary>What exactly triggers the payout?</summary>
                                <div className="da-faq-body"><p>The delegated contributor's pull request closing the bountied issue and landing on your production branch (<code>main</code> unless you've configured another). DevAsign checks the merged PR was authored by the contributor you delegated to, then calls release. You can also approve the payout yourself from the dashboard if the work shipped without a merge.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>Who can post a bounty?</summary>
                                <div className="da-faq-body"><p>The repo owner, a member of the owning organization, or a collaborator on the repo. DevAsign reads that straight from GitHub, so an outside contributor commenting <code>bounty $500 1 week</code> won't create one. You'll also need <a href="https://www.freighter.app/" target="_blank" rel="noopener noreferrer">Freighter</a> with enough USDC to fund it.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>What happens if nobody ships in time?</summary>
                                <div className="da-faq-body"><p>When the window runs out we tell both sides and hold for 24 hours. If the contributor doesn't contest it, the escrow refunds to the wallet that funded it, with no support ticket and nothing to reclaim by hand. That pause is there so somebody who delivered on the last evening doesn't lose the bounty to a clock. You're free to post a fresh <code>bounty</code> comment with more time or more money.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>What if two contributors go for the same issue?</summary>
                                <div className="da-faq-body"><p>They can't both be delegated. Applying doesn't reserve anything: the maintainer reads the applications, picks one person, and signs the delegation that locks the escrow to that person's address. Only then does the delivery clock start. Everyone else is free to withdraw and spend their evening on something else.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>Why USDC on Stellar?</summary>
                                <div className="da-faq-body"><p>Because a bounty shouldn't be worth 30% less by the time the PR lands, and because paying someone across a border shouldn't take a week and a bank. Stellar settles in seconds for a fraction of a cent, so a contributor in Lagos gets paid exactly the way one in Lisbon does.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>Does this cost extra on top of my plan?</summary>
                                <div className="da-faq-body"><p>No. Bounties are included on every plan, Free as well. You pay the bounty itself and the Stellar network fee, which is a fraction of a cent. We don't take a cut.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>Can I put a bounty on a private repo?</summary>
                                <div className="da-faq-body"><p>Bounties are built for open source, so use them on public repositories. The whole model leans on it: an applicant needs to read the issue, read the code, and decide the work is worth doing before they apply, and none of that works if they can't see the repo. Private repositories still get the full code review on Personal and Team.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>How does this fit with the code review?</summary>
                                <div className="da-faq-body"><p>They run on the same reading of the issue. The criteria DevAsign drafts when you post the bounty are the criteria the reviewer later checks the PR against, so an applicant knows what "done" means going in, and gets that feedback on their pull request before you've even looked at it.</p></div>
                            </details>
                        </div>
                    </div>
                </div>
            </section>

            {/* CLOSING */}
            <section className="da-closing" id="install">
                <div className="da-container">
                    <h2>Stop chasing payouts <span className="da-brand-text">Leave a comment</span></h2>
                    <p>Install DevAsign on a public repo, fund your wallet, and your first <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand)', background: 'var(--bg-elevated)', border: '1px solid var(--border-faint)', padding: '2px 8px', fontSize: '0.9em' }}>bounty</code> comment takes about a minute.</p>
                    <div className="da-closing-ctas">
                        <a href={URLS.SPONSOR_AUTH} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Get Started Now</a>
                        <a href="https://cal.com/devasign/30min" className="btn btn-secondary">Talk to founder</a>
                    </div>
                </div>
            </section>

            <SiteFooter variant="full" />
        </div>
    );
}
