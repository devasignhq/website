import { useEffect, useRef, useState } from "react";

const PILLARS = [
    {
        tag: "PILLAR 01",
        title: "Ingest the goal",
        body: "Reads the ticket, linked issues, attached screenshots and Loom walkthroughs — the same inputs the dev was given. It builds a model of what done looks like before it ever opens the diff.",
        illo: "ingest" as const,
    },
    {
        tag: "PILLAR 02",
        title: "Goal-aware review",
        body: "Every commit & PR is scored against that model — not just against the linter. Missed requirements, silent omissions, and contract-breaking changes get flagged out loud.",
        illo: "review" as const,
    },
    {
        tag: "PILLAR 03",
        title: "Inline dev guidance",
        body: "Guides the dev right on the PR while they're still in the flow. No context switch. Feedback shows up where the work is happening.",
        illo: "guidance" as const,
    },
];

type IngestSource = {
    id: string;
    label: string;
    cx: number;
    cy: number;
    stack?: number;
    icon: React.ReactNode;
};

const FigmaIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 12a4 4 0 1 1 0-8h4a4 4 0 0 1 0 8h-4z" fill="#A259FF" />
        <path d="M4 8a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" fill="#F24E1E" />
        <path d="M4 16a4 4 0 0 1 4-4h4v8a4 4 0 1 1-8 0z" fill="#0ACF83" />
        <path d="M12 12h4a4 4 0 1 1-4 4v-4z" fill="#1ABCFE" />
        <path d="M4 12a4 4 0 0 0 4 4h4v-8H8a4 4 0 0 0-4 4z" fill="#FF7262" />
    </svg>
);

const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
            d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.69-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18.92-.26 1.9-.38 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .31.21.66.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"
            fill="#fff"
        />
    </svg>
);

const LoomIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#625DF5" />
        <polygon points="9.5,7.5 17,12 9.5,16.5" fill="#fff" />
    </svg>
);

const NotionIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="2" fill="#fff" stroke="#0a0a0a" strokeWidth="0.6" />
        <text x="12" y="17.5" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="700" fontSize="15" fill="#0a0a0a">N</text>
    </svg>
);

const SlackIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="9.5" y="2" width="3" height="9" rx="1.5" fill="#36C5F0" />
        <rect x="2" y="11.5" width="9" height="3" rx="1.5" fill="#2EB67D" />
        <rect x="11.5" y="13" width="3" height="9" rx="1.5" fill="#ECB22E" />
        <rect x="13" y="9.5" width="9" height="3" rx="1.5" fill="#E01E5A" />
    </svg>
);

const YoutubeIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="1" y="6" width="22" height="12" rx="3" fill="#FF0000" />
        <polygon points="10,9 16,12 10,15" fill="#fff" />
    </svg>
);

const LinearIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#5E6AD2" />
        <path d="M6 14l4 4M6 10l8 8M6 6l12 12M10 6l8 8M14 6l4 4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
);

function IngestIllo() {
    const sources: IngestSource[] = [
        { id: "figma",   label: "Figma frame",     cx: 200, cy: 50,  icon: <FigmaIcon /> },
        { id: "github",  label: "GitHub issue",    cx: 332, cy: 86,  icon: <GitHubIcon /> },
        { id: "notion",  label: "API docs",        cx: 360, cy: 198, icon: <NotionIcon /> },
        { id: "loom",    label: "Loom walkthrough", cx: 282, cy: 268, icon: <LoomIcon />, stack: 2 },
        { id: "slack",   label: "Slack thread",    cx: 118, cy: 268, icon: <SlackIcon /> },
        { id: "youtube", label: "Tutorial vid",    cx: 40,  cy: 198, icon: <YoutubeIcon /> },
        { id: "linear",  label: "Linear ticket",   cx: 68,  cy: 86,  icon: <LinearIcon /> },
    ];

    const cx = 200;
    const cy = 160;

    return (
        <div className="da-illo da-illo-ingest">
            <svg className="ingest-lines" viewBox="0 0 400 320" aria-hidden="true">
                <defs>
                    {sources.map((s, i) => (
                        <path
                            key={i}
                            id={`ingest-path-${i}`}
                            d={`M ${s.cx} ${s.cy} Q ${(s.cx + cx) / 2} ${(s.cy + cy) / 2} ${cx} ${cy}`}
                        />
                    ))}
                </defs>
                {sources.map((_, i) => (
                    <use key={i} href={`#ingest-path-${i}`} className="ingest-line" />
                ))}
                {sources.map((_, i) => (
                    <circle key={i} className="ingest-packet" r="2.5" fill="var(--brand)">
                        <animateMotion dur="2.6s" repeatCount="indefinite" begin={`${(i * 0.36).toFixed(2)}s`}>
                            <mpath href={`#ingest-path-${i}`} />
                        </animateMotion>
                    </circle>
                ))}
            </svg>

            {sources.map((s, i) => (
                <div
                    key={s.id}
                    className={`ingest-source s-${s.id}`}
                    style={{
                        left: `${(s.cx / 400) * 100}%`,
                        top: `${(s.cy / 320) * 100}%`,
                        animationDelay: `${i * 70}ms`,
                    }}
                >
                    {s.stack ? (
                        <>
                            <span className="chip-shadow s2" aria-hidden="true" />
                            <span className="chip-shadow s1" aria-hidden="true" />
                        </>
                    ) : null}
                    <span
                        className="chip"
                        style={{ animationDelay: `${i * 380}ms` }}
                    >
                        {s.icon}
                    </span>
                    <span className="label">{s.label}</span>
                    {s.stack ? <span className="badge">+{s.stack}</span> : null}
                </div>
            ))}

            <span className="ingest-pulse" aria-hidden="true">+12 streaming…</span>

            <div className="ingest-core">
                <span className="ring r1" />
                <span className="ring r2" />
                <span className="dot" />
                <span className="label">DevAsign Agent</span>
            </div>
        </div>
    );
}

function ReviewIllo() {
    return (
        <div className="da-illo da-illo-review">
            <div className="review-pr">
                <div className="head">
                    <span className="who">PR #43</span>
                    <span className="meta">+124 / −38</span>
                </div>
                <div className="diff">
                    <div className="line add"><span>+</span> <code>&lt;Button&gt;{"{cta}"}&lt;/Button&gt;</code></div>
                    <div className="line add"><span>+</span> <code>aria-label="Create team"</code></div>
                    <div className="line del"><span>−</span> <code>// TODO: empty state</code></div>
                    <div className="line ctx"><span> </span> <code>return &lt;EmptyState/&gt;;</code></div>
                    <div className="scan" />
                </div>
            </div>

            <div className="review-arrow" aria-hidden="true">
                <span className="line" />
                <span className="head" />
            </div>

            <div className="review-goals">
                <div className="head">
                    <span className="who">GOAL MODEL</span>
                    <span className="score">6/6</span>
                </div>
                <ul>
                    <li className="g1">CTA matches Figma copy</li>
                    <li className="g2">Empty state visible when teams=0</li>
                    <li className="g3">a11y label on primary action</li>
                    <li className="g4">Track impression event</li>
                    <li className="g5">Mobile matches Figma</li>
                    <li className="g6">Loading respects skeleton</li>
                </ul>
            </div>
        </div>
    );
}

function GuidanceIllo() {
    return (
        <div className="da-illo da-illo-guidance">
            <div className="ide-frame">
                <div className="ide-tab">
                    <span className="dots"><span /><span /><span /></span>
                    <span className="name">EmptyState.tsx</span>
                </div>
                <div className="ide-body">
                    <div className="ide-line l1"><span className="ln">141</span><span className="code"><span className="kw">const</span> cta = <span className="str">"Add team"</span>;</span></div>
                    <div className="ide-line l2 hot"><span className="ln">142</span><span className="code">&lt;<span className="tag">Button</span>&gt;{"{cta}"}&lt;/<span className="tag">Button</span>&gt;</span></div>
                    <div className="ide-line l3"><span className="ln">143</span><span className="code">&nbsp;</span></div>

                    <div className="ide-callout" role="note">
                        <span className="tail" aria-hidden="true" />
                        <span className="badge">DevAsign</span>
                        <p className="typewriter">
                            <span>Should be </span>
                            <em>"Create your first team"</em>
                            <span> per Figma frame 4.</span>
                            <span className="caret" />
                        </p>
                        <div className="actions">
                            <span className="kbd">⌘ ↵</span>
                            <span>apply fix</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function MeetDevAsignSection() {
    const [active, setActive] = useState(0);
    const sectionRef = useRef<HTMLElement | null>(null);
    const current = PILLARS[active];

    useEffect(() => {
        const update = () => {
            const sec = sectionRef.current;
            if (!sec) return;
            // Skip scroll-pinning on tablet/mobile — the layout is stacked.
            if (window.innerWidth < 1024) return;
            const total = sec.offsetHeight - window.innerHeight;
            if (total <= 0) return;
            const rect = sec.getBoundingClientRect();
            const progress = Math.max(0, Math.min(1, -rect.top / total));
            const next = progress >= 0.66 ? 2 : progress >= 0.33 ? 1 : 0;
            setActive((prev) => (prev === next ? prev : next));
        };
        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    const goToPillar = (i: number) => {
        const sec = sectionRef.current;
        if (sec && window.innerWidth >= 1024) {
            const total = sec.offsetHeight - window.innerHeight;
            if (total > 0) {
                const targetProgress = i === 0 ? 0.05 : i === 1 ? 0.45 : 0.8;
                const targetTop = sec.offsetTop + total * targetProgress;
                window.scrollTo({ top: targetTop, behavior: "smooth" });
                return;
            }
        }
        setActive(i);
    };

    return (
        <section ref={sectionRef} className="da-section da-pillar-section" id="introducing">
            <div className="da-pillar-sticky">
                <div className="da-container">
                    <div className="da-section-head">
                        <span className="eyebrow brand">INTRODUCING</span>
                        <h2>Meet <span className="da-brand-text">DevAsign</span></h2>
                        <p className="lead">The multimodal, goal-aware code review agent.</p>
                    </div>

                    <div className="da-pillar-split">
                        <div className="da-pillar-accordion">
                            {PILLARS.map((p, i) => {
                                const isOpen = active === i;
                                return (
                                    <div
                                        key={p.tag}
                                        className={`da-acc-item ${isOpen ? "open" : ""}`}
                                    >
                                        <button
                                            type="button"
                                            className="da-acc-head"
                                            aria-expanded={isOpen}
                                            aria-controls={`da-acc-body-${i}`}
                                            onClick={() => goToPillar(i)}
                                        >
                                            <span className="num-tag">{p.tag}</span>
                                            <span className="da-acc-title">{p.title}</span>
                                            <span className="da-acc-chev" aria-hidden="true">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </span>
                                        </button>
                                        <div
                                            id={`da-acc-body-${i}`}
                                            className="da-acc-body"
                                            role="region"
                                        >
                                            <p>{p.body}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="da-pillar-illo-wrap" key={active} aria-live="polite">
                            {current.illo === "ingest" && <IngestIllo />}
                            {current.illo === "review" && <ReviewIllo />}
                            {current.illo === "guidance" && <GuidanceIllo />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
