import { useState } from 'react';
import { SEO } from '../components/SEO';
import { SiteNav } from '../components/layout/SiteNav';
import { SiteFooter } from '../components/layout/SiteFooter';

const Check = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 12 10 18 20 6" />
    </svg>
);

const X = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round">
        <path d="M6 6 L18 18 M18 6 L6 18" />
    </svg>
);

const CheckCell = ({ max = false }: { max?: boolean }) => (
    <td className={`cell${max ? ' col-max' : ''}`}>
        <span className="circle-check"><Check /></span>
    </td>
);

const XCell = ({ max = false }: { max?: boolean }) => (
    <td className={`cell${max ? ' col-max' : ''}`}>
        <span className="circle-x outline"><X /></span>
    </td>
);

const TextCell = ({ children, max = false, strong = false }: { children: React.ReactNode; max?: boolean; strong?: boolean }) => (
    <td className={`cell${max ? ' col-max' : ''}`}>
        {strong ? <strong>{children}</strong> : children}
    </td>
);

export function PricingPage() {
    const [billing, setBilling] = useState<'month' | 'year'>('month');
    const proPrice = billing === 'month' ? '$25' : '$20';
    const maxPrice = billing === 'month' ? '$100' : '$80';

    return (
        <div className="da-root">
            <SEO
                title="Pricing — DevAsign"
                description="Free for OSS. Flat-rate for teams. Pay for the review, not the seat. Goal-aware code review on every PR."
            />
            <SiteNav />

            {/* HERO */}
            <header className="da-p-hero" id="hero">
                <div className="da-container wide">
                    <div className="da-p-hero-inner">
                        <div>
                            <span className="eyebrow">PRICING</span>
                            <h1>
                                Simple, transparent pricing.
                            </h1>
                            <br />
                            <p style={{ color: 'var(--fg-muted)' }}>One install. Goal-aware review on every PR. Bring the model you trust — Claude, Gemini, Codex, or Grok — and review where you already work: GitHub, the IDE, the CLI.</p>
                        </div>
                        <div className="da-toggle-card">
                            <span className="label">// Billing</span>
                            <div className="da-toggle" role="tablist">
                                <button
                                    type="button"
                                    className={billing === 'month' ? 'on' : ''}
                                    onClick={() => setBilling('month')}
                                >
                                    Monthly
                                </button>
                                <button
                                    type="button"
                                    className={billing === 'year' ? 'on' : ''}
                                    onClick={() => setBilling('year')}
                                >
                                    Yearly <span className="save">−20%</span>
                                </button>
                            </div>
                            <span className="label" style={{ borderTop: '1px dashed var(--border-faint)', paddingTop: 12 }}>// All prices in USD · per developer</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* PLANS */}
            <section className="da-plans-section">
                <div className="da-container wide">
                    <div className="da-plans">
                        {/* FREE */}
                        <article className="da-plan da-plan-free">
                            <div className="da-plan-head">
                                <div className="da-plan-name">Free</div>
                                <div className="da-plan-tag">For maintainers of public repos</div>
                                <div className="da-plan-price">
                                    <span className="num">$0</span>
                                    <span className="per">/ free forever</span>
                                </div>
                                <span className="da-plan-bullet">Public repos only</span>
                            </div>
                            <a href="https://app.devasign.com/authenticate/account" className="btn btn-secondary btn-block da-plan-cta">Get Started Now</a>
                            <div className="da-plan-features">
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Public repositories only</strong> — your project must be open-source</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>PR comments only</strong> — review surfaces inline on GitHub</span></div>
                                <div className="da-feat"><span className="circle-x outline"><X /></span><span className="dim">No IDE or CLI integration</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span>Multimodal goal ingestion — ticket, Figma, Loom</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span>Default Claude Haiku model</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span>Community support</span></div>
                            </div>
                        </article>

                        {/* PRO */}
                        <article className="da-plan da-plan-pro">
                            <div className="da-plan-head">
                                <div className="da-plan-name">Pro</div>
                                <div className="da-plan-tag">For private repos &amp; small teams</div>
                                <div className="da-plan-price">
                                    <span className="num">{proPrice}</span>
                                    <span className="per">/ dev / month</span>
                                </div>
                                <span className="da-plan-bullet">Private repos · Limited PR review</span>
                            </div>
                            <a href="https://app.devasign.com/authenticate/account" className="btn btn-primary btn-block da-plan-cta">Start 14-day trial</a>
                            <div className="da-plan-features">
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Private repositories</strong> — full access</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>200 PR reviews / dev / month</strong> — pooled across the team</span></div>
                                <div className="da-feat">
                                    <span className="circle-check"><Check /></span>
                                    <span>
                                        <strong>All frontier models</strong> — choose per repo
                                        <div className="da-models" style={{ marginLeft: 32 }}>
                                            <span className="da-model-pill">Claude</span>
                                            <span className="da-model-pill">Gemini</span>
                                            <span className="da-model-pill">Codex</span>
                                            <span className="da-model-pill">Grok</span>
                                        </div>
                                    </span>
                                </div>
                                <div className="da-feat">
                                    <span className="circle-check"><Check /></span>
                                    <span>
                                        <strong>Review in the PR, IDE &amp; CLI</strong>
                                        <div className="da-tool-row">
                                            <span className="da-tool-badge"><span className="dot" />Antigravity</span>
                                            <span className="da-tool-badge"><span className="dot" />Cursor</span>
                                            <span className="da-tool-badge"><span className="dot" />Windsurf</span>
                                            <span className="da-tool-badge"><span className="dot" />Claude Code</span>
                                            <span className="da-tool-badge"><span className="dot" />Gemini CLI</span>
                                        </div>
                                    </span>
                                </div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span>Linear / Jira / Asana acceptance-criteria sync</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span>Email support</span></div>
                            </div>
                        </article>

                        {/* MAX */}
                        <article className="da-plan da-plan-max">
                            <span className="recommended">★ Recommended</span>
                            <div className="da-plan-head">
                                <div className="da-plan-name">Max</div>
                                <div className="da-plan-tag">For shipping teams that review at velocity</div>
                                <div className="da-plan-price">
                                    <span className="num">{maxPrice}</span>
                                    <span className="per">/ dev / month</span>
                                </div>
                                <span className="da-plan-bullet">Unlimited PR reviews · Priority queue</span>
                            </div>
                            <a href="https://app.devasign.com/authenticate/account" className="btn btn-tertiary btn-block da-plan-cta">Start 14-day trial</a>
                            <div className="da-plan-features">
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Unlimited PR reviews</strong> — no per-month cap</span></div>
                                <div className="da-feat">
                                    <span className="circle-check"><Check /></span>
                                    <span>
                                        <strong>All frontier models</strong> — Pro coverage + priority capacity
                                        <div className="da-models" style={{ marginLeft: 32 }}>
                                            <span className="da-model-pill">Claude</span>
                                            <span className="da-model-pill">Gemini</span>
                                            <span className="da-model-pill">Codex</span>
                                            <span className="da-model-pill">Grok</span>
                                        </div>
                                    </span>
                                </div>
                                <div className="da-feat">
                                    <span className="circle-check"><Check /></span>
                                    <span>
                                        <strong>Review in the PR, IDE &amp; CLI</strong>
                                        <div className="da-tool-row">
                                            <span className="da-tool-badge"><span className="dot" />Antigravity</span>
                                            <span className="da-tool-badge"><span className="dot" />Cursor</span>
                                            <span className="da-tool-badge"><span className="dot" />Windsurf</span>
                                            <span className="da-tool-badge"><span className="dot" />Claude Code</span>
                                            <span className="da-tool-badge"><span className="dot" />Gemini CLI</span>
                                        </div>
                                    </span>
                                </div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Custom review policies</strong> per repo &amp; team</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span>Goal-coverage analytics &amp; dashboards</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span>Priority Slack support · 24h response</span></div>
                            </div>
                        </article>

                        {/* ENTERPRISE */}
                        <article className="da-plan da-plan-ent">
                            <div className="da-plan-head">
                                <div className="da-plan-name">Enterprise</div>
                                <div className="da-plan-tag" style={{ color: 'var(--coral)' }}>For orgs with security &amp; scale needs</div>
                                <span className="da-plan-bullet">Custom deployments with dedicated engineering</span>
                            </div>
                            <a href="https://cal.com/devasign/speak-to-sales" className="btn btn-coral btn-block da-plan-cta">Talk to sales →</a>
                            <div className="da-plan-features">
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Everything in Max</strong>, plus:</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>SSO</strong> — SAML, OIDC, SCIM provisioning</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>SLA</strong> — 99.9% uptime, 4h P1 response</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>SOC 2 Type II</strong> · DPA · GDPR</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>BYOK</strong> — bring your own model keys</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Self-hosted / VPC</strong> deployment option</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Audit logs</strong> · org-wide policies · role controls</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span>Dedicated CSM · onboarding workshop</span></div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* COMPARE */}
            <section className="da-compare-section">
                <div className="da-container wide">
                    <div className="da-compare-head">
                        <span className="eyebrow">COMPARE — EVERY FEATURE, EVERY PLAN</span>
                        <h2>Pick the plan that <span className="da-brand-text">matches the work</span></h2>
                    </div>
                    <div className="da-compare-wrap">
                        <table className="da-compare">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Free</th>
                                    <th>Pro</th>
                                    <th className="col-max">Max ★</th>
                                    <th>Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="section-row"><td>Repositories</td><td /><td /><td className="col-max" /><td /></tr>
                                <tr>
                                    <td className="feat-name">Public repos</td>
                                    <CheckCell /><CheckCell /><CheckCell max /><CheckCell />
                                </tr>
                                <tr>
                                    <td className="feat-name">Private repos</td>
                                    <XCell /><CheckCell /><CheckCell max /><CheckCell />
                                </tr>

                                <tr className="section-row"><td>Reviews</td><td /><td /><td className="col-max" /><td /></tr>
                                <tr>
                                    <td className="feat-name">PR reviews / dev / month</td>
                                    <TextCell>25</TextCell>
                                    <TextCell strong>200</TextCell>
                                    <TextCell max strong>Unlimited</TextCell>
                                    <TextCell strong>Unlimited</TextCell>
                                </tr>
                                <tr>
                                    <td className="feat-name">Multimodal goal ingestion (ticket, Figma, Loom)</td>
                                    <CheckCell /><CheckCell /><CheckCell max /><CheckCell />
                                </tr>
                                <tr>
                                    <td className="feat-name">Re-review on every commit</td>
                                    <CheckCell /><CheckCell /><CheckCell max /><CheckCell />
                                </tr>
                                <tr>
                                    <td className="feat-name">Goal-coverage scoring &amp; dashboards</td>
                                    <XCell />
                                    <TextCell>Org-wide</TextCell>
                                    <TextCell max>Org-wide</TextCell>
                                    <TextCell>Org-wide</TextCell>
                                </tr>

                                <tr className="section-row"><td>Models</td><td /><td /><td className="col-max" /><td /></tr>
                                <tr>
                                    <td className="feat-name">Default model</td>
                                    <TextCell>Gemini 3 Pro</TextCell>
                                    <TextCell>Choose per repo</TextCell>
                                    <TextCell max>Choose per repo</TextCell>
                                    <TextCell>Choose per repo</TextCell>
                                </tr>
                                <tr>
                                    <td className="feat-name">Claude · Gemini · Codex · Grok</td>
                                    <XCell /><CheckCell /><CheckCell max /><CheckCell />
                                </tr>
                                <tr>
                                    <td className="feat-name">Bring your own model keys (BYOK)</td>
                                    <XCell /><XCell /><XCell max /><CheckCell />
                                </tr>

                                <tr className="section-row"><td>Where you can review</td><td /><td /><td className="col-max" /><td /></tr>
                                <tr>
                                    <td className="feat-name">PR comments on GitHub</td>
                                    <CheckCell /><CheckCell /><CheckCell max /><CheckCell />
                                </tr>
                                <tr>
                                    <td className="feat-name">IDE — Antigravity, Cursor, Windsurf</td>
                                    <XCell /><CheckCell /><CheckCell max /><CheckCell />
                                </tr>
                                <tr>
                                    <td className="feat-name">CLI — Claude Code, Gemini CLI</td>
                                    <XCell /><CheckCell /><CheckCell max /><CheckCell />
                                </tr>

                                <tr className="section-row"><td>Integrations</td><td /><td /><td className="col-max" /><td /></tr>
                                <tr>
                                    <td className="feat-name">Linear / Jira / Asana sync</td>
                                    <XCell /><CheckCell /><CheckCell max /><CheckCell />
                                </tr>
                                <tr>
                                    <td className="feat-name">Figma &amp; Loom ingestion</td>
                                    <CheckCell /><CheckCell /><CheckCell max /><CheckCell />
                                </tr>

                                <tr className="section-row"><td>Security &amp; admin</td><td /><td /><td className="col-max" /><td /></tr>
                                <tr>
                                    <td className="feat-name">SSO (SAML, OIDC, SCIM)</td>
                                    <XCell /><XCell /><XCell max /><CheckCell />
                                </tr>
                                <tr>
                                    <td className="feat-name">SLA — 99.9% uptime, P1 response</td>
                                    <XCell /><XCell /><XCell max /><CheckCell />
                                </tr>
                                <tr>
                                    <td className="feat-name">SOC 2 Type II · DPA · GDPR</td>
                                    <XCell /><XCell /><XCell max /><CheckCell />
                                </tr>
                                <tr>
                                    <td className="feat-name">Audit logs &amp; org-wide policies</td>
                                    <XCell />
                                    <TextCell>Basic</TextCell>
                                    <TextCell max>Advanced</TextCell>
                                    <TextCell strong>Full</TextCell>
                                </tr>
                                <tr>
                                    <td className="feat-name">Self-hosted / VPC deployment</td>
                                    <XCell /><XCell /><XCell max /><CheckCell />
                                </tr>

                                <tr className="section-row"><td>Support</td><td /><td /><td className="col-max" /><td /></tr>
                                <tr>
                                    <td className="feat-name">Channel</td>
                                    <TextCell>Community</TextCell>
                                    <TextCell>Email</TextCell>
                                    <TextCell max strong>Priority Slack</TextCell>
                                    <TextCell strong>Dedicated CSM</TextCell>
                                </tr>
                                <tr>
                                    <td className="feat-name">Onboarding workshop</td>
                                    <XCell /><XCell /><XCell max /><CheckCell />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="da-faq-section">
                <div className="da-container">
                    <div className="da-faq-grid">
                        <div>
                            <span className="eyebrow">FAQ</span>
                            <h2 style={{ marginTop: 18 }}>Common questions, <span className="da-brand-text">honest answers</span></h2>
                            <p style={{ marginTop: 18, color: 'var(--fg-muted)', maxWidth: '34ch' }}>
                                Can't find it here? <a href="mailto:bethel@devasign.com">email CEO</a> — replies same day.
                            </p>
                        </div>
                        <div className="da-faq-list">
                            <details className="da-faq" open>
                                <summary>What counts as a "PR review"?</summary>
                                <div className="da-faq-body"><p>One review run on one pull request. Re-reviews triggered automatically by new commits don't count against the limit — only the initial review per PR is metered. Human-triggered <code>@devasign re-review</code> calls also don't count.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>Why is Free public-repo only?</summary>
                                <div className="da-faq-body"><p>Open source is where the community lives, and we want goal-aware review on every public PR forever — without billing friction. Private repositories carry compute, storage, and access-control overhead that the Pro tier exists to fund.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>Can I switch between Claude, Gemini, Codex, and Grok?</summary>
                                <div className="da-faq-body"><p>On Pro and Max, yes — choose the default model per repository, override per PR with a comment trigger, or pin a specific model for security-sensitive code paths. Free uses Claude Haiku.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>How do IDE and CLI reviews work?</summary>
                                <div className="da-faq-body"><p>Pro and Max ship plugins for Antigravity, Cursor, and Windsurf, and integrations for Claude Code and Gemini CLI. Run a goal-aware review locally on your branch before you push — same multimodal context, same acceptance-criteria scoring.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>What if my team uses 1,000 PRs in a month?</summary>
                                <div className="da-faq-body"><p>If you're consistently above 200 PRs per dev, Max removes the cap entirely and gets you a priority capacity lane. Most teams that hit Pro's ceiling upgrade within 60 days.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>Does the bounty / Soroban product cost extra?</summary>
                                <div className="da-faq-body"><p>No. The bounty rails are included on every plan. You only pay network fees on Stellar — sub-cent per payout, settled in seconds. Use it or ignore it.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>Can I cancel any time?</summary>
                                <div className="da-faq-body"><p>Yes. Pro and Max are month-to-month with no commitment. Yearly saves 20% but if you cancel mid-year we refund the unused portion pro-rata.</p></div>
                            </details>
                        </div>
                    </div>
                </div>
            </section>

            {/* CLOSING */}
            <section className="da-closing">
                <div className="da-container">
                    <h2><span className="da-brand-text">Goal-aware</span> from your first PR</h2>
                    <p>Install on a public repo in 60 seconds. Upgrade only when you have private code that deserves the same review.</p>
                    <div className="da-closing-ctas">
                        <a href="/#install" className="btn btn-primary">Install on GitHub →</a>
                        <a href="mailto:sales@devasign.com" className="btn btn-secondary">Talk to sales</a>
                    </div>
                </div>
            </section>

            <SiteFooter variant="full" />
        </div>
    );
}
