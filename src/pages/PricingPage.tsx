import { useState } from 'react';
import { useStatsigClient } from '@statsig/react-bindings';
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
    const proPrice = billing === 'month' ? '$15' : '$12';
    const maxPrice = billing === 'month' ? '$45' : '$36';
    const proPriceNum = billing === 'month' ? 15 : 12;
    const maxPriceNum = billing === 'month' ? 45 : 36;
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
                            <p className="da-p-hero-sub">One install. Goal-aware review on every PR — DevAsign pulls context from your tickets, designs, and Loom walkthroughs, then posts the verdict right on your GitHub pull requests.</p>
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
                                <div className="da-plan-tag">For maintainers of public repos</div>
                                <div className="da-plan-price">
                                    <span className="num">$0</span>
                                    <span className="per">/ free forever</span>
                                </div>
                                <span className="da-plan-bullet">Public repos only</span>
                            </div>
                            <a
                                href="https://devasign.ai"
                                className="btn btn-secondary btn-block da-plan-cta"
                                data-cta="pricing_card_free"
                                data-plan="free"
                                data-placement="card"
                                onClick={() => logCtaClick('free', 'card', 0)}
                            >
                                Get Started Now
                            </a>
                            <div className="da-plan-features">
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Public repositories only</strong> — your project must be open-source</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>10 PR reviews / month</strong></span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>PR comments only</strong> — review surfaces inline on GitHub</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span>Multimodal goal ingestion — ticket, Figma, Loom</span></div>
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
                                    <span className="per">/ month</span>
                                </div>
                                <span className="da-plan-bullet">Private repos · Limited PR review</span>
                            </div>
                            <a
                                href="https://devasign.ai"
                                className="btn btn-primary btn-block da-plan-cta"
                                data-cta="pricing_card_pro"
                                data-plan="pro"
                                data-placement="card"
                                onClick={() => logCtaClick('pro', 'card', proPriceNum)}
                            >
                                Start 14-day trial
                            </a>
                            <div className="da-plan-features">
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Private repositories</strong> — full access</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>50 PR reviews / month</strong> — shared across your team</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Inline PR reviews on GitHub</strong> — Check Run + grouped review with fix prompts</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span>Linear acceptance-criteria sync</span></div>
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
                                    <span className="per">/ month</span>
                                </div>
                                <span className="da-plan-bullet">Unlimited PR reviews · Priority queue</span>
                            </div>
                            <a
                                href="https://devasign.ai"
                                className="btn btn-tertiary btn-block da-plan-cta"
                                data-cta="pricing_card_max"
                                data-plan="max"
                                data-placement="card"
                                onClick={() => logCtaClick('max', 'card', maxPriceNum)}
                            >
                                Start 14-day trial
                            </a>
                            <div className="da-plan-features">
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Unlimited PR reviews</strong> — no per-month cap</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Inline PR reviews on GitHub</strong> — Check Run + grouped review with fix prompts</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span><strong>Custom review policies</strong> per repo &amp; team</span></div>
                                <div className="da-feat"><span className="circle-check"><Check /></span><span>Goal-coverage analytics &amp; dashboards</span></div>
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
                                    <th>Pro</th>
                                    <th className="col-max">Max ★</th>
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
                                    <TextCell>10</TextCell>
                                    <TextCell strong>50</TextCell>
                                    <TextCell max strong>Unlimited</TextCell>
                                </tr>
                                <tr>
                                    <td className="feat-name">Multimodal goal ingestion (ticket, Figma, Loom)</td>
                                    <CheckCell /><CheckCell /><CheckCell max />
                                </tr>
                                <tr>
                                    <td className="feat-name">Re-review on every commit</td>
                                    <CheckCell /><CheckCell /><CheckCell max />
                                </tr>
                                <tr>
                                    <td className="feat-name">Goal-coverage scoring &amp; dashboards</td>
                                    <XCell />
                                    <TextCell>Org-wide</TextCell>
                                    <TextCell max>Org-wide</TextCell>
                                </tr>

                                <tr className="section-row"><td>Models</td><td /><td /><td className="col-max" /></tr>
                                <tr>
                                    <td className="feat-name">Review model — managed by DevAsign</td>
                                    <TextCell>Standard</TextCell>
                                    <TextCell>Frontier</TextCell>
                                    <TextCell max>Frontier</TextCell>
                                </tr>
                                <tr>
                                    <td className="feat-name">Frontier models — Claude · Gemini · Codex · Grok</td>
                                    <XCell /><CheckCell /><CheckCell max />
                                </tr>

                                <tr className="section-row"><td>Integrations</td><td /><td /><td className="col-max" /></tr>
                                <tr>
                                    <td className="feat-name">GitHub — inline PR reviews &amp; checks</td>
                                    <CheckCell /><CheckCell /><CheckCell max />
                                </tr>
                                <tr>
                                    <td className="feat-name">Linear — acceptance-criteria sync</td>
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
                                <summary>Which model reviews my PRs?</summary>
                                <div className="da-faq-body"><p>DevAsign manages this for you — there's nothing to configure. On Pro and Max we automatically route each review to the best frontier model for the job (Claude, Gemini, Codex, or Grok). Free runs on a capable standard model.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>What if my team uses 1,000 PRs in a month?</summary>
                                <div className="da-faq-body"><p>If you're consistently above 50 PR reviews a month, Max removes the cap entirely and gets you a priority capacity lane. Most teams that hit Pro's ceiling upgrade within 60 days.</p></div>
                            </details>
                            <details className="da-faq">
                                <summary>Can I cancel any time?</summary>
                                <div className="da-faq-body"><p>Yes. Pro and Max are month-to-month with no commitment, and you can cancel whenever you like. Cancellations aren't refunded — your plan stays active through the period you've already paid for, then doesn't renew.</p></div>
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
                        <a
                            href="https://devasign.ai"
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
