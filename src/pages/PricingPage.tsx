import { useState } from 'react';
import { useStatsigClient } from '@statsig/react-bindings';
import { SEO } from '../components/SEO';
import { SiteNav } from '../components/layout/SiteNav';
import { SiteFooter } from '../components/layout/SiteFooter';
import { URLS } from '../config/constants';

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
    // Analytics keys 'pro'/'max' are frozen legacy identifiers for the Personal/Team tiers
    // (logCtaClick plan values, data-plan/data-cta) — kept stable for Statsig dashboard continuity.
    const proPrice = billing === 'month' ? '$20' : '$16';
    const maxPrice = billing === 'month' ? '$100' : '$80';
    const proPriceNum = billing === 'month' ? 20 : 16;
    const maxPriceNum = billing === 'month' ? 100 : 80;
    const { client } = useStatsigClient();

    const logCtaClick = (
        plan: 'free' | 'pro' | 'max' | 'na',
        placement: 'card' | 'closing',
        priceMonthly: number | null,
    ) => {
        client.logEvent('pricing_cta_clicked', plan, {
            plan,
            placement,
            price_monthly: priceMonthly !== null ? String(priceMonthly) : '',
            billing_period: billing === 'month' ? 'monthly' : 'annual',
            page_url: typeof window !== 'undefined' ? window.location.href : '',
        });
        client.flush();
    };

    return (
        <div className="da-root da-pricing">
            <SEO
                title="Pricing — DevAsign"
                description="Free for open source, flat-rate for teams, and never per seat. Goal-aware code review on every pull request."
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
                            <p className="da-p-hero-sub">Install it once and every pull request gets reviewed against the ticket it came from. DevAsign reads your issues, screenshots and Loom walkthroughs, then posts what it found straight onto the PR. Priced per review, never per seat.</p>
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
                            <span className="label" style={{ borderTop: '1px dashed var(--border-faint)', paddingTop: 12 }}>// All prices in USD · per month</span>
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
                                <div className="da-plan-tag">Automated review on public repos</div>
                                <div className="da-plan-price">
                                    <span className="num">$0</span>
                                    <span className="per">/ free forever</span>
                                </div>
                                <span className="da-plan-bullet">Public repos only</span>
                            </div>
                            <a
                                href={URLS.SPONSOR_AUTH}
                                className="btn btn-secondary btn-block da-plan-cta"
                                data-cta="pricing_card_free"
                                data-plan="free"
                                data-placement="card"
                                onClick={() => logCtaClick('free', 'card', 0)}
                            >
                                Get Started Now
                            </a>
                            <div className="da-plan-features">
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Auto-reviews your own PRs</strong> — every PR you open</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span>Comment <strong>"review"</strong> to review PRs authored by other collaborators</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Public repositories only</strong> — your project must be open-source</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>30 PR reviews / month</strong></span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span>Standard model — managed by DevAsign</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Onchain bounty automation</strong> on your public repos</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span>Multimodal goal ingestion: ticket, screenshots, Loom</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span>Community support</span></div>
                            </div>
                        </article>

                        {/* PRO */}
                        <article className="da-plan da-plan-pro">
                            <div className="da-plan-head">
                                <div className="da-plan-name">Personal</div>
                                <div className="da-plan-tag">For developers with private code to ship</div>
                                <div className="da-plan-price">
                                    <span className="num">{proPrice}</span>
                                    <span className="per">/ month</span>
                                </div>
                                <span className="da-plan-bullet">Private + public repos · 120 reviews / mo</span>
                            </div>
                            <a
                                href={URLS.SPONSOR_AUTH}
                                className="btn btn-primary btn-block da-plan-cta"
                                data-cta="pricing_card_pro"
                                data-plan="pro"
                                data-placement="card"
                                onClick={() => logCtaClick('pro', 'card', proPriceNum)}
                            >
                                Start 7-day trial
                            </a>
                            <div className="da-plan-features">
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Auto-reviews your own PRs</strong> — every PR you open</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span>Comment <strong>"review"</strong> to review PRs authored by other collaborators</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Private + public repositories</strong> — full access</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>120 PR reviews / month</strong></span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>150 overage credits / month</strong> — keep reviewing past the cap</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span>Frontier model — managed by DevAsign</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Custom workflows</strong> — tailor the review pipeline per repository</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Onchain bounty automation</strong> on your public repos</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span>Linear sync for acceptance criteria</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span>Email support</span></div>
                            </div>
                        </article>

                        {/* MAX */}
                        <article className="da-plan da-plan-max">
                            <span className="recommended">★ Recommended</span>
                            <div className="da-plan-head">
                                <div className="da-plan-name">Team</div>
                                <div className="da-plan-tag">For teams reviewing at scale</div>
                                <div className="da-plan-price">
                                    <span className="num">{maxPrice}</span>
                                    <span className="per">/ month</span>
                                </div>
                                <span className="da-plan-bullet">Org-wide auto-review · 600 reviews / mo</span>
                            </div>
                            <a
                                href={URLS.SPONSOR_AUTH}
                                className="btn btn-tertiary btn-block da-plan-cta"
                                data-cta="pricing_card_max"
                                data-plan="max"
                                data-placement="card"
                                onClick={() => logCtaClick('max', 'card', maxPriceNum)}
                            >
                                Start 7-day trial
                            </a>
                            <div className="da-plan-features">
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Auto-reviews every PR opened in your GitHub org</strong></span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span>Comment <strong>"review"</strong> to review PRs authored by other collaborators</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Private + public repositories</strong></span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>600 PR reviews / month</strong></span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>650 overage credits / month</strong> — keep reviewing past the cap</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span>Frontier model — managed by DevAsign</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Custom workflows</strong> — tailor the review pipeline per repository</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Onchain bounty automation</strong> on your public repos</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Custom review policies</strong> per repo and team</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span>Linear sync for acceptance criteria</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span>Priority Slack support · 24h response</span></div>
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
                                    <th>Personal</th>
                                    <th className="col-max">Team ★</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="section-row"><td>Repositories</td><td /><td /><td className="col-max" /></tr>
                                <tr>
                                    <td className="feat-name">Public repos</td>
                                    <CheckCell /><CheckCell /><CheckCell max />
                                </tr>
                                <tr>
                                    <td className="feat-name">Private repos</td>
                                    <XCell /><CheckCell /><CheckCell max />
                                </tr>

                                <tr className="section-row"><td>Reviews</td><td /><td /><td className="col-max" /></tr>
                                <tr>
                                    <td className="feat-name">PR reviews / month</td>
                                    <TextCell>30</TextCell>
                                    <TextCell strong>120</TextCell>
                                    <TextCell max strong>600</TextCell>
                                </tr>
                                <tr>
                                    <td className="feat-name">Overage credits / month</td>
                                    <XCell />
                                    <TextCell>150</TextCell>
                                    <TextCell max>650</TextCell>
                                </tr>
                                <tr>
                                    <td className="feat-name">Comment "review" to review any PR</td>
                                    <CheckCell /><CheckCell /><CheckCell max />
                                </tr>
                                <tr>
                                    <td className="feat-name">Auto-review every PR in your GitHub org</td>
                                    <XCell /><CheckCell /><CheckCell max />
                                </tr>
                                <tr>
                                    <td className="feat-name">Multimodal context (ticket, screenshots, Loom)</td>
                                    <CheckCell /><CheckCell /><CheckCell max />
                                </tr>
                                <tr>
                                    <td className="feat-name">Re-review on every commit</td>
                                    <CheckCell /><CheckCell /><CheckCell max />
                                </tr>
                                <tr>
                                    <td className="feat-name">Custom review-pipeline workflows (per repo)</td>
                                    <XCell /><CheckCell /><CheckCell max />
                                </tr>

                                <tr className="section-row"><td>Models</td><td /><td /><td className="col-max" /></tr>
                                <tr>
                                    <td className="feat-name">Review model — managed by DevAsign</td>
                                    <TextCell>Standard</TextCell>
                                    <TextCell>Frontier</TextCell>
                                    <TextCell max>Frontier</TextCell>
                                </tr>

                                <tr className="section-row"><td>Integrations</td><td /><td /><td className="col-max" /></tr>
                                <tr>
                                    <td className="feat-name">GitHub inline PR reviews and checks</td>
                                    <CheckCell /><CheckCell /><CheckCell max />
                                </tr>
                                <tr>
                                    <td className="feat-name">GitHub bounty automation (public repos)</td>
                                    <CheckCell /><CheckCell /><CheckCell max />
                                </tr>
                                <tr>
                                    <td className="feat-name">Linear acceptance-criteria sync</td>
                                    <XCell /><CheckCell /><CheckCell max />
                                </tr>

                                <tr className="section-row"><td>Support</td><td /><td /><td className="col-max" /></tr>
                                <tr>
                                    <td className="feat-name">Channel</td>
                                    <TextCell>Community</TextCell>
                                    <TextCell>Email</TextCell>
                                    <TextCell max strong>Priority Slack</TextCell>
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
                            <p className="da-faq-note" style={{ marginTop: 18, maxWidth: '34ch' }}>
                                Not answered here? <a href="mailto:bethel@devasign.com">Email our CEO</a>. He replies the same day.
                            </p>
                        </div>
                        <div className="da-faq-list">
                            <details className="da-faq" open>
                                <summary>What counts as a "PR review"?</summary>
                                <div className="da-faq-body"><p>One review run on one pull request. Only the first review of a PR is metered: pushing new commits re-runs the review for free, and so does asking for one by hand. Open ten PRs in a day and that's ten, however many times each one gets looked at again.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>Why is Free public-repo only?</summary>
                                <div className="da-faq-body"><p>Open source is where most of this work happens in the open, and we'd rather it stayed reviewed than gated behind a card. Private repositories cost us real compute, storage and access-control work, and that's what the Personal tier pays for. Bounties are public-repo only for the same reason: a contributor can't decide a bounty is worth taking on if they can't read the code.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>Which model reviews my PRs?</summary>
                                <div className="da-faq-body"><p>We pick it, and there's nothing for you to configure. Personal and Team run on our strongest reasoning tier with extended thinking switched on, which shows on big diffs and subtle regressions. Free runs a fast standard model. As better models ship we move each tier onto them, so your reviews improve without you touching anything.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>What are overage credits?</summary>
                                <div className="da-faq-body"><p>They keep reviews running once you pass your monthly cap. Personal includes 150 and Team includes 650, and reviews draw on them automatically, so a busy month doesn't leave a pull request unlooked-at.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>What if my team reviews far more than the cap?</summary>
                                <div className="da-faq-body"><p>If you're regularly over Personal's 120 a month, Team takes you to 600 plus 650 overage credits. Most teams that hit the Personal ceiling move up within a couple of months.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>Can I cancel any time?</summary>
                                <div className="da-faq-body"><p>Yes. Personal and Team are month to month with no commitment. We don't refund the current period, so your plan stays live until the end of what you've already paid for and then simply doesn't renew.</p></div>
                            </details>
                        </div>
                    </div>
                </div>
            </section>

            {/* CLOSING */}
            <section className="da-closing">
                <div className="da-container">
                    <h2><span className="da-brand-text">Goal-aware</span> from your first PR</h2>
                    <p>Put it on a public repo in about a minute. Upgrade when you have private code that deserves the same review.</p>
                    <div className="da-closing-ctas">
                        <a
                            href={URLS.SPONSOR_AUTH}
                            className="btn btn-primary"
                            data-cta="pricing_closing_install"
                            data-plan="na"
                            data-placement="closing"
                            onClick={() => logCtaClick('na', 'closing', null)}
                        >
                            Get Started Now
                        </a>
                    </div>
                </div>
            </section>

            <SiteFooter variant="full" />
        </div>
    );
}
