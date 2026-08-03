import { useEffect, useRef } from "react";
import { AuditIllo, EscrowIllo } from "./story/StoryIllustrations";

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

/**
 * Bento layout: the three chapters as large tiles, interleaved with small
 * accent tiles that carry one hard fact each. Tiles reveal (and their
 * illustrations start animating) as the grid scrolls into view.
 */
export function MeetDevAsignSection() {
    const gridRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;
        const tiles = [...grid.querySelectorAll<HTMLElement>(".da-bento-tile")];
        if (!tiles.length) return;

        // Opt into the hidden-until-revealed state only now that the revealer is
        // definitely running — if this effect never fires the tiles stay visible.
        grid.classList.add("js-reveal");

        // Seven rect reads, and the listener detaches itself once the last tile
        // has been revealed — cheap enough not to need throttling.
        const reveal = () => {
            let pending = 0;
            for (const t of tiles) {
                if (t.classList.contains("is-in")) continue;
                // Revealed once its top crosses the lower eighth of the viewport.
                // Deliberately no lower bound: a jump-to-anchor or fast flick that
                // lands past the grid must still leave everything above visible.
                if (t.getBoundingClientRect().top < window.innerHeight * 0.88) t.classList.add("is-in");
                else pending++;
            }
            if (pending === 0) teardown();
        };
        const teardown = () => {
            window.removeEventListener("scroll", reveal);
            window.removeEventListener("resize", reveal);
        };

        reveal();
        window.addEventListener("scroll", reveal, { passive: true });
        window.addEventListener("resize", reveal);
        return teardown;
    }, []);

    return (
        <section className="da-section da-bento-section" id="introducing">
            <div className="da-container">
                <div className="da-section-head">
                    <span className="eyebrow brand">INTRODUCING</span>
                    <h2>One agent, three chapters</h2>
                </div>

                <div className="da-bento" ref={gridRef}>
                    {/* ── Chapter 01 ── */}
                    <article className="da-bento-tile chapter t-read">
                        <div className="tile-copy">
                            <span className="tile-tag">CHAPTER 01</span>
                            <h3>Read what the developer was given</h3>
                            <p>
                                It reads what the developer read — ticket, Figma, Loom, the thread where the requirement got decided — and builds a model of <em>done</em>. Then it reviews every commit against that.
                            </p>
                        </div>
                        <div className="tile-illo"><IngestIllo /></div>
                    </article>

                    {/* ── Accent: the agent's voice ── */}
                    <article className="da-bento-tile accent t-voice">
                        {/* <span className="tile-kicker">IN ITS OWN WORDS</span> */}
                        <h5>
                            “...the ticket asked for a per-org filter. Your diff filters by <code>userId</code> only.”
                        </h5>
                        <p>Every comment names the requirement it is measuring against — so the feedback is arguable, not vague.</p>
                    </article>

                    {/* ── Chapter 02 ── */}
                    <article className="da-bento-tile chapter t-audit">
                        <div className="tile-copy">
                            <span className="tile-tag">CHAPTER 02</span>
                            <h3>Audit the house, not the doorway</h3>
                            <p>
                                Every merge wakes a second agent that walks the whole repo&apos;s security surface — routes, tenant scoping, infra, secrets, deps — and never files what it can&apos;t prove.
                            </p>
                        </div>
                        <div className="tile-illo"><AuditIllo /></div>
                    </article>

                    {/* ── Accent: severity model ── */}
                    <article className="da-bento-tile accent t-blast">
                        {/* <span className="tile-kicker">SEVERITY MODEL</span> */}
                        <h5>Ranked by blast radius, not likelihood.</h5>
                        <p>A bug that leaks one tenant to another ends every enterprise contract at once. Priority follows the damage, not the odds.</p>
                        <ul className="tile-matrix">
                            <li><span className="s crit">CRITICAL</span><span className="act block">block</span></li>
                            <li><span className="s high">HIGH</span><span className="act warn">warn</span></li>
                            <li><span className="s med">MEDIUM</span><span className="act track">track</span></li>
                            <li><span className="s low">LOW</span><span className="act track">track</span></li>
                        </ul>
                    </article>

                    {/* ── Accent: the merge gate ── */}
                    <article className="da-bento-tile accent t-gate">
                        {/* <span className="tile-kicker">MERGE GATE</span> */}
                        <div className="tile-check fail"><span className="mark">✗</span> devasign/security — blocked</div>
                        <div className="tile-check pass"><span className="mark">✓</span> devasign/security — passed</div>
                        <p>Mark the check required and an unresolved critical stops the queue — <strong>yours included</strong>.</p>
                    </article>

                    {/* ── Accent: settlement ── */}
                    <article className="da-bento-tile accent t-settle">
                        {/* <span className="tile-kicker">SETTLEMENT</span> */}
                        <div className="tile-stat">~4s</div>
                        <p>USDC on Stellar. Sub-cent network fee. No invoice, no wire, no thirty-day net — the same speed to Lisbon and to Lagos.</p>
                    </article>

                    {/* ── Chapter 03 ── */}
                    <article className="da-bento-tile chapter t-fund">
                        <div className="tile-copy">
                            <span className="tile-tag">CHAPTER 03</span>
                            <h3>Put a bounty on the ones you can&apos;t get to</h3>
                            <p>
                                You won&apos;t fix all of them. Create a GitHub issue in a click, then fund it <strong>USDC locked in escrow</strong> — a dev can verify before they apply. Once a fix is accepted and merged, the bounty is paid in seconds.
                            </p>
                        </div>
                        <div className="tile-illo"><EscrowIllo /></div>
                    </article>
                </div>
            </div>
        </section>
    );
}
