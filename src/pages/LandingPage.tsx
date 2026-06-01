import { SEO } from '../components/SEO';
import { SiteNav } from '../components/layout/SiteNav';
import { SiteFooter } from '../components/layout/SiteFooter';
import { MeetDevAsignSection } from '../components/MeetDevAsignSection';
import { HeroBackground } from '../components/HeroBackground';

const CheckSvg = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 12 10 18 20 6" />
    </svg>
);

const XSvg = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round">
        <path d="M6 6 L18 18 M18 6 L6 18" />
    </svg>
);

export function LandingPage() {
    return (
        <div className="da-root">
            <SEO />
            <SiteNav activePath="/" />

            {/* HERO */}
            <header className="da-hero" id="hero">
                <HeroBackground />
                <div className="da-container">
                    <div className="da-hero-grid">
                        <div>
                            <div className="da-hero-eyebrow">
                                <span className="dot" />
                                <span className="mono-sm" style={{ color: 'var(--fg-muted)' }}>The multimodal AI code reviewer</span>
                            </div>
                            <h1>
                                Code review, against the <span className="da-brand-text">goal</span> — not just the <span className="da-strike">diff</span>
                            </h1>
                            <br />
                            <p style={{ color: 'var(--fg-muted)' }}>
                                DevAsign ingests your <strong>ticket, linked issues, screenshots, Figma frames, and Loom walkthroughs</strong> — then reviews every PR against what was actually asked.
                            </p>
                            <div className="da-hero-ctas">
                                <a href="https://devasign.ai" className="btn btn-primary">Start reviewing →</a>
                                {/* <a href="#shots" className="btn btn-secondary">See it review a real PR</a> */}
                            </div>
                            <div className="da-hero-proof">
                                Free for OSS<span>·</span>200+ PRs reviewed end-to-end<span>·</span>Goal-aware from PR #1
                            </div>
                        </div>

                        <div>
                            <div className="da-pr-card">
                                <div className="head">
                                    <span className="avatar">D</span>
                                    <span>devasign[bot]</span>
                                    <span>commented on PR #847</span>
                                    <span className="meta">2m ago</span>
                                </div>
                                <div className="body">
                                    <p>
                                        I read ticket <strong>#43</strong> and the attached Figma. The acceptance criteria asked for a <span className="quote">"Resend invite" affordance on the empty state</span> — your diff handles invite-pending but not empty.
                                    </p>
                                    <p>
                                        Also: this PR <span className="miss">silently changes the v2 webhook contract</span>. That'll break the Stripe handler in prod.
                                    </p>
                                    <p>
                                        Goal coverage: <strong>4 / 6</strong> requirements satisfied. I'll re-score on your next commit.<span className="da-cursor" />
                                    </p>
                                    <div className="tag-line">
                                        <span className="chip chip-brand" style={{ fontSize: 10 }}>Goal-aware</span>
                                        <span style={{ marginLeft: 'auto' }}>PR #847 · feat/team-invites</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* SECTION 2 — SHIFT
            <section className="da-section">
                <div className="da-container">
                    <div className="da-section-head">
                        <span className="eyebrow">// 02 — THE SHIFT</span>
                        <h2>AI broke both ends of the pipeline.</h2>
                    </div>
                    <div className="da-shift-stack">
                        <div className="da-shift-line"><span className="num">/01</span><span>Developers ship code faster than ever — most of it written by an agent.</span></div>
                        <div className="da-shift-line"><span className="num">/02</span><span>AI reviewers approve that code faster than ever — and most of them only look at the diff.</span></div>
                        <div className="da-shift-line"><span className="num">/03</span><span>Nobody is asking the question that used to keep PRs honest: <em>does this actually do what the ticket asked for?</em></span></div>
                    </div>
                </div>
            </section> */}

            {/* SECTION 3 — PROBLEM
            <section className="da-section">
                <div className="da-container">
                    <div className="da-section-head">
                        <span className="eyebrow coral">// 03 — THE PROBLEM</span>
                        <h2>Faster reviews. <span style={{ color: 'var(--coral)' }}>Same blind spot.</span></h2>
                    </div>
                    <div className="da-cols-3">
                        <div className="da-problem-card">
                            <span className="circle-x" aria-hidden="true"><XSvg /></span>
                            <span className="chip chip-coral">DIFF-ONLY</span>
                            <h3>Diff-only reviewers</h3>
                            <p>Approve PRs that compile and pass tests, but miss the intent of the ticket entirely. Style, lint, security — never <em>"is this what was asked?"</em></p>
                        </div>
                        <div className="da-problem-card">
                            <span className="circle-x" aria-hidden="true"><XSvg /></span>
                            <span className="chip chip-coral">SWAMPED</span>
                            <h3>Swarmed maintainers</h3>
                            <p>Don't have time to verify intent against output on every PR — so they trust the green check and merge.</p>
                        </div>
                        <div className="da-problem-card">
                            <span className="circle-x" aria-hidden="true"><XSvg /></span>
                            <span className="chip chip-coral">PROD</span>
                            <h3>Bugs leak to prod</h3>
                            <p>What should have been caught at review time becomes a hotfix, a rollback, or an on-call page at 3am.</p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* SECTION 4 — NOT ENOUGH */}
            <section className="da-section">
                <div className="da-container">
                    <div className="da-section-head">
                        <span className="eyebrow">WHY "AI CODE REVIEW" ISN'T ENOUGH</span>
                        <h2>Reviewing the diff is <span className="chip-coral">NOT</span> reviewing the work</h2>
                    </div>
                    <div className="da-not-enough">
                        <div className="col-left">
                            <span className="chip chip-coral" style={{ marginBottom: 18, display: 'inline-flex' }}>OTHER REVIEWERS SEE</span>
                            <h3>The diff. The lint. The test status.</h3>
                            <p>They approve if it compiles. They never met the ticket. They never opened the Figma. They've never watched the Loom. So they can't tell you what's missing — only what's there.</p>
                        </div>
                        <div className="col-right">
                            <span className="chip chip-brand" style={{ marginBottom: 18, display: 'inline-flex' }}>THEY MISS</span>
                            <div className="da-miss-list">
                                <div className="da-miss-item"><span className="circle-x" aria-hidden="true"><XSvg /></span><p><strong>The button</strong> the ticket asked for, but the dev forgot.</p></div>
                                <div className="da-miss-item"><span className="circle-x" aria-hidden="true"><XSvg /></span><p><strong>The flow</strong> described in the Loom that was never implemented.</p></div>
                                <div className="da-miss-item"><span className="circle-x" aria-hidden="true"><XSvg /></span><p><strong>The state</strong> shown in the Figma that the diff silently skips.</p></div>
                                <div className="da-miss-item"><span className="circle-x" aria-hidden="true"><XSvg /></span><p><strong>The breaking change</strong> that ships fine to staging and explodes in prod.</p></div>
                            </div>
                            <div className="da-cap">This is the gap <span>DevAsign</span> closes.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5 — BEFORE / AFTER */}
            {/* <section className="da-section">
                <div className="da-container">
                    <div className="da-section-head">
                        <span className="eyebrow">BEFORE / AFTER</span>
                        <h2>What "review" used to be vs. <span className="da-brand-text">what it should be</span></h2>
                    </div>
                    <div className="da-ba-grid">
                        <div className="da-ba-card before">
                            <span className="circle-x circle-lg icon-tr" aria-hidden="true"><XSvg /></span>
                            <span className="chip chip-coral" style={{ alignSelf: 'flex-start' }}>BEFORE — DIFF-ONLY REVIEW</span>
                            <h3>Reads the patch. Stamps it green. Moves on.</h3>
                            <p>Reviewer reads the patch. Checks if it compiles. Stamps it approved and moves on. Maintainer inherits the bug.</p>
                            <ul className="da-ba-list">
                                <li>Diff in, diff out</li>
                                <li>No ticket context</li>
                                <li>No Figma, no Loom</li>
                                <li>"Approved" ≠ "correct"</li>
                            </ul>
                        </div>
                        <div className="da-ba-card after">
                            <span className="circle-check circle-lg icon-tr" aria-hidden="true"><CheckSvg /></span>
                            <span
                                className="chip"
                                style={{
                                    background: 'var(--brand)',
                                    color: 'var(--fg-on-light)',
                                    borderColor: 'var(--fg-on-light)',
                                    alignSelf: 'flex-start',
                                }}
                            >
                                AFTER — DEVASIGN
                            </span>
                            <h3>Reads the goal. Reviews against it. Guides inline.</h3>
                            <p>Agent ingests the <em>full</em> goal — ticket, linked issues, screenshots, Figma, Loom, acceptance criteria. Reviews the PR against the goal, not just the diff.</p>
                            <ul className="da-ba-list">
                                <li>Multimodal goal ingestion</li>
                                <li>Re-scored on every commit</li>
                                <li>Inline guidance, in the dev's flow</li>
                                <li>Flags prod risks before merge</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* SECTION 6 — INTRODUCING */}
            <MeetDevAsignSection />

            {/* SECTION 7 — HOW IT WORKS */}
            {/* <section className="da-section" id="how">
                <div className="da-container">
                    <div className="da-section-head">
                        <span className="eyebrow">HOW IT WORKS</span>
                        <h2>Goal in. <span className="da-brand-text">Review out.</span></h2>
                    </div>
                    <div className="da-steps">
                        <div className="da-step">
                            <div className="step-num">01</div>
                            <h3>Ingest the goal</h3>
                            <p>Ticket text + linked issues + screenshots + Figma frames + Loom walkthroughs + acceptance criteria. The agent builds a model of what done looks like.</p>
                            <div className="bullets"><span>Ticket</span><span>Figma</span><span>Loom</span><span>AC</span></div>
                        </div>
                        <div className="da-step">
                            <div className="step-num">02</div>
                            <h3>Watch the PR</h3>
                            <p>Diff, tests, behavior, dependencies, migrations. Every commit gets re-scored against the goal — not just the linter.</p>
                            <div className="bullets"><span>Diff</span><span>Tests</span><span>Migrations</span></div>
                        </div>
                        <div className="da-step">
                            <div className="step-num">03</div>
                            <h3>Guide inline</h3>
                            <p>
                                Comments on the PR, IDE, CLI — right inside the dev's flow.<br />
                                <em style={{ color: 'var(--brand)', fontFamily: 'var(--font-mono)', fontSize: 12, fontStyle: 'italic' }}>"The ticket asked for X — your diff handles Y but not X."</em>
                            </p>
                            <div className="bullets"><span>In-PR</span><span>IDE</span><span>CLI</span></div>
                        </div>
                        <div className="da-step">
                            <div className="step-num">04</div>
                            <h3>Flag prod risks</h3>
                            <p>Schema drift, breaking API changes, missing migrations, edge cases the spec called out and the diff missed. Surfaced before merge — not after the on-call page.</p>
                            <div className="bullets"><span>Schema</span><span>Contracts</span><span>Edge cases</span></div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* SECTION 8 — LIVES WHERE */}
            {/* <section className="da-section" id="platforms">
                <div className="da-container">
                    <div className="da-section-head">
                        <span className="eyebrow">WHERE YOU SHIP</span>
                        <h2>One agent, <span className="da-brand-text">three surfaces</span></h2>
                        <p className="lead">GitHub. Your IDE. The terminal. Devs don't live in one tab — neither does DevAsign. The same goal-aware brain shows up wherever your hands already are.</p>
                    </div>

                    <div className="da-surfaces">
                        <div className="da-surface">
                            <div className="da-surface-tab">
                                <span className="da-surface-dots"><span /><span /><span /></span>
                                <span className="da-surface-name">github.com/acme/dashboard</span>
                                <span className="da-surface-pill">PR</span>
                            </div>
                            <div className="da-surface-body gh">
                                <div className="da-gh-line">
                                    <span className="num">#43</span>
                                    <span className="status open">● Open</span>
                                    <span className="branch">feat/teams-empty-state</span>
                                </div>
                                <div className="da-gh-comment">
                                    <div className="head">
                                        <span className="who bot">devasign</span>
                                        <span className="meta">· just now</span>
                                    </div>
                                    <p>Goal coverage <strong className="ok">6/6 ✓</strong>. CTA copy now matches the linked Figma frame on line&nbsp;142.</p>
                                </div>
                                <div className="da-gh-status">
                                    <span className="check">✓</span> All checks passed · Ready to merge
                                </div>
                            </div>
                            <div className="da-surface-cap">
                                <strong>On the PR.</strong> Inline review comments, blocking checks, goal-coverage scoring before merge.
                            </div>
                        </div>

                        <div className="da-surface">
                            <div className="da-surface-tab">
                                <span className="da-surface-dots"><span /><span /><span /></span>
                                <span className="da-surface-name">EmptyState.tsx — VS Code</span>
                                <span className="da-surface-pill">IDE</span>
                            </div>
                            <div className="da-surface-body ide">
                                <div className="da-ide-line"><span className="ln">141</span><span className="code"><span className="kw">const</span> cta = <span className="str">"Add team"</span>;</span></div>
                                <div className="da-ide-line hot"><span className="ln">142</span><span className="code">&lt;<span className="tag">Button</span>&gt;{'{'}cta{'}'}&lt;/<span className="tag">Button</span>&gt;</span></div>
                                <div className="da-ide-line"><span className="ln">143</span><span className="code">&nbsp;</span></div>
                                <div className="da-ide-hint">
                                    <span className="badge">DevAsign</span>
                                    <p>Ticket #43 says CTA copy should be <em>"Create your first team"</em> — Figma frame, line 4.</p>
                                    <div className="actions">
                                        <span className="kbd">⌘ ↵</span> apply fix
                                    </div>
                                </div>
                            </div>
                            <div className="da-surface-cap">
                                <strong>In your editor.</strong> Goal-aware hints inline as you type — VS Code, Cursor, JetBrains.
                            </div>
                        </div>

                        <div className="da-surface">
                            <div className="da-surface-tab">
                                <span className="da-surface-dots"><span /><span /><span /></span>
                                <span className="da-surface-name">~/acme-dashboard — zsh</span>
                                <span className="da-surface-pill">CLI</span>
                            </div>
                            <div className="da-surface-body cli">
                                <div className="da-cli-line"><span className="prompt">$</span> devasign review #43</div>
                                <div className="da-cli-out dim">→ reading ticket, figma frames, attached loom…</div>
                                <div className="da-cli-out"><span className="ok">✓</span> acceptance criteria · 4/6</div>
                                <div className="da-cli-out"><span className="warn">!</span> missing: empty-state CTA copy</div>
                                <div className="da-cli-out"><span className="warn">!</span> missing: a11y label on primary action</div>
                                <div className="da-cli-line"><span className="prompt">$</span> <span className="da-cursor dark" /></div>
                            </div>
                            <div className="da-surface-cap">
                                <strong>In the terminal.</strong> Pre-PR goal coverage from a one-line command. CI-ready.
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* SECTION 9 — SCREENSHOTS */}
            <section className="da-section" id="shots">
                <div className="da-container">
                    <div className="da-section-head">
                        <span className="eyebrow">IN ACTION</span>
                        <h2>See what reading the ticket <em>actually changes</em></h2>
                    </div>
                    <div className="da-shots">
                        {/* Shot 1 */}
                        <div className="da-shot">
                            <div className="da-shot-frame">
                                <div className="da-gh">
                                    <div className="da-gh-bar">
                                        <div className="dots"><span /><span /><span /></div>
                                        <span className="path">acme/billing-api</span>
                                        <span className="pr-tag">PR #847</span>
                                    </div>
                                    <div className="da-gh-body">
                                        <div className="da-gh-comment">
                                            <div className="head"><span className="who bot">devasign</span> commented · just now</div>
                                            <p>Reading <span className="quote-tx">ticket #43 — "Resend invite from empty state"</span>:</p>
                                            <div className="da-gh-quote-block">"When a workspace has zero pending invites, show an empty state with a primary 'Send invite' CTA AND a 'Resend last invite' link if any historical invite exists."</div>
                                            <p>Your PR handles the empty CTA. The <em style={{ color: 'var(--coral)' }}>Resend last invite</em> path is missing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="da-shot-cap">Agent quotes the ticket back to the dev and shows the gap.</div>
                        </div>

                        {/* Shot 2 */}
                        <div className="da-shot">
                            <div className="da-shot-frame">
                                <div className="da-gh">
                                    <div className="da-gh-bar">
                                        <div className="dots"><span /><span /><span /></div>
                                        <span className="path">acme/dashboard</span>
                                        <span className="pr-tag">PR #312</span>
                                    </div>
                                    <div className="da-gh-body">
                                        <div className="da-gh-comment coral">
                                            <div className="head"><span className="who bot coral">devasign</span> flagged · 1m ago</div>
                                            <p>The attached Figma <strong style={{ color: 'var(--info)' }}>"Teams · v3"</strong> defines an empty state for workspaces with no members.</p>
                                            <div className="da-gh-figma">
                                                <div className="thumb" />
                                                <p>Frame <em style={{ color: 'var(--info)' }}>empty-state/no-members</em> shows an illustration + <em>"Invite teammates"</em> CTA. Your diff renders <code style={{ color: 'var(--coral)' }}>null</code> in this branch.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="da-shot-cap">Agent references the attached Figma and flags a missing empty state.</div>
                        </div>

                        {/* Shot 3 */}
                        <div className="da-shot">
                            <div className="da-shot-frame">
                                <div className="da-gh">
                                    <div className="da-gh-bar">
                                        <div className="dots"><span /><span /><span /></div>
                                        <span className="path">acme/billing-api</span>
                                        <span className="pr-tag">PR #211</span>
                                    </div>
                                    <div className="da-gh-body">
                                        <div className="da-gh-comment coral">
                                            <div className="head"><span className="who bot coral">devasign</span> · breaking change</div>
                                            <p><strong style={{ color: 'var(--coral)' }}>Webhook contract v2 — <code>invoice.paid</code></strong> would break for 14 downstream consumers.</p>
                                            <div className="da-gh-diff">
                                                <span className="ctx">  payload.amount: number,</span>
                                                <span className="rem">- payload.customer_id: string,</span>
                                                <span className="add">+ payload.customer: {'{ id: string, email: string }'},</span>
                                                <span className="ctx">  payload.created_at: ISO8601</span>
                                            </div>
                                            <p>Tests pass. Stripe handler in prod will <em style={{ color: 'var(--coral)' }}>throw on parse</em>.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="da-shot-cap">Agent catches a breaking schema change the diff alone wouldn't.</div>
                        </div>

                        {/* Shot 4 */}
                        <div className="da-shot">
                            <div className="da-shot-frame">
                                <div className="da-gh">
                                    <div className="da-gh-bar">
                                        <div className="dots"><span /><span /><span /></div>
                                        <span className="path">acme/billing-api</span>
                                        <span className="pr-tag">PR #847 · re-review</span>
                                    </div>
                                    <div className="da-gh-body">
                                        <div className="da-gh-comment">
                                            <div className="head"><span className="who bot">devasign</span> re-scored · just now</div>
                                            <p>Goal coverage after commit <code>a3f1c08</code>:</p>
                                            <div className="da-gh-cov">
                                                <span className="mono" style={{ fontSize: 10, width: 90 }}>REQUIREMENTS</span>
                                                <div className="bar"><i style={{ width: '100%' }} /></div>
                                                <span className="pct">6 / 6</span>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 6, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-muted)' }}>
                                                <span>✓ Resend invite affordance</span>
                                                <span>✓ Empty state copy matches Figma</span>
                                                <span>✓ Webhook contract preserved</span>
                                                <span>✓ Loom flow implemented end-to-end</span>
                                            </div>
                                            <p style={{ marginTop: 8, color: 'var(--brand)' }}>Approving — all acceptance criteria satisfied.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="da-shot-cap">Agent re-reviews after each commit and tracks goal coverage.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 10 — QUADRANT */}
            {/* <section className="da-quad-section">
                <div className="da-container">
                    <div className="da-section-head">
                        <span className="eyebrow">WHY DEVASIGN</span>
                        <h2>The only AI code reviewer that reads what the dev was <span className="da-brand-text">given</span></h2>
                        <p className="lead">As AI-generated code share rises, diff-only reviewers become a weak signal. <em>Goal coverage</em> is the only signal that matters.</p>
                    </div>

                    <div className="da-quadrant">
                        <div className="da-axis-y"><span>Multimodal context →</span></div>
                        <div className="da-quad-grid">
                            <div className="da-quad">
                                <div>
                                    <div className="da-quad-name">Quadrant · TL</div>
                                    <div className="da-quad-brand" style={{ fontSize: 22, color: 'var(--fg-faint)' }}>— mostly empty —</div>
                                </div>
                                <div className="da-quad-list">High context · Self-review</div>
                            </div>
                            <div className="da-quad top-right">
                                <span className="da-quad-tag">ALONE HERE</span>
                                <div>
                                    <div className="da-quad-name">Goal-aware · Independent</div>
                                    <div className="da-quad-devasign" style={{ color: 'var(--fg)' }}>DevAsign</div>
                                </div>
                                <div className="da-quad-list" style={{ color: 'var(--brand)' }}>Reads ticket · Figma · Loom · Judges PR</div>
                            </div>
                            <div className="da-quad">
                                <div>
                                    <div className="da-quad-name">Diff-only reviewers</div>
                                    <div className="da-quad-brand">CodeRabbit · Greptile</div>
                                </div>
                                <div className="da-quad-list">Diff in · Style · Lint · Tests</div>
                            </div>
                            <div className="da-quad">
                                <div>
                                    <div className="da-quad-name">Self-reviewing agents</div>
                                    <div className="da-quad-brand">Cursor · Devin · Codex · Claude Code</div>
                                </div>
                                <div className="da-quad-list">Multimodal (Text & Images) · Reviews own work</div>
                            </div>
                        </div>
                        <div className="da-axis-x">
                            <span><i>← Reviews own work</i></span>
                            <span><i>Reviews someone else's work →</i></span>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* SECTION 11 — 70% STAT */}
            <section className="da-stat-section">
                <div className="da-container" style={{ textAlign: 'center' }}>
                    <div className="da-stat-card">
                        <div className="num">70<em>%</em></div>
                        <div className="divider" />
                        <div className="label">Reduction in review cycle time</div>
                        <p className="sub">Faster merges. Fewer regressions. Contributors who actually feel reviewed — not just gated. PRs merged with the spec satisfied — not just the tests passing.</p>
                        <span className="circle-check stat-check" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5}>
                                <polyline points="4 12 10 18 20 6" />
                            </svg>
                        </span>
                    </div>
                </div>
            </section>

            {/* CLOSING CTA */}
            <section className="da-closing" id="install">
                <div className="da-container">
                    <div className="da-closing-icons" aria-hidden="true">
                        <span className="circle-x circle-xl">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={3}>
                                <path d="M6 6 L18 18 M18 6 L6 18" />
                            </svg>
                        </span>
                        <span className="gradient-line" />
                        <span className="circle-check circle-xl">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}>
                                <polyline points="4 12 10 18 20 6" />
                            </svg>
                        </span>
                    </div>
                    <h2>We review the goal not just the diff</h2>
                    <p>Install DevAsign on your repo and watch what your other reviewer missed.</p>
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
