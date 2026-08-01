/**
 * Illustrations for the chapter tiles in MeetDevAsignSection.
 *
 *   AuditIllo  — the post-merge security audit: surface inventory → proven finding
 *   EscrowIllo — the finding turning into a funded, on-chain bounty
 *
 * Both are pure CSS/SVG (no images), themed off the brand tokens in theme.css
 * and styled there alongside the bento grid.
 */

/* ── Illustration: the post-merge audit ─────────────────────────────────── */

const SURFACES = [
    { tag: "api/", files: 38, load: 0.86, flags: 3 },
    { tag: "infra/", files: 12, load: 0.42, flags: 2 },
    { tag: "frontend/", files: 61, load: 0.64, flags: 1 },
    { tag: "secrets", files: 8, load: 0.18, flags: 1 },
];

export function AuditIllo() {
    return (
        <div className="da-illo da-illo-audit">
            <div className="audit-surface">
                <div className="head">
                    <span className="name">SURFACE INVENTORY</span>
                    <span className="count">142 files</span>
                </div>
                <div className="rows">
                    {SURFACES.map((s, i) => (
                        <div className={`row r${i + 1}`} key={s.tag}>
                            <span className="tag">{s.tag}</span>
                            <span className="bar">
                                <i style={{ width: `${Math.round(s.load * 100)}%` }} />
                            </span>
                            <span className="n">{s.files}</span>
                            <span className={`flag ${s.flags ? "on" : ""}`}>
                                {s.flags ? "●".repeat(s.flags) : "—"}
                            </span>
                        </div>
                    ))}
                    <span className="audit-scan" aria-hidden="true" />
                </div>
            </div>

            <div className="audit-arrow" aria-hidden="true">
                <span className="line" />
                <span className="tip" />
            </div>

            <div className="audit-finding">
                <div className="head">
                    <span className="sev">CRITICAL</span>
                    <span className="cwe">CWE-639 · IDOR</span>
                </div>
                <div className="loc">billing/routes.ts:88 — listInvoices()</div>
                <p className="concern">
                    <code>orgId</code> is read from the query string, never from the session.
                </p>
                <div className="steps">
                    <span className="step s1"><i>1</i>authenticate as tenant A</span>
                    <span className="step s2"><i>2</i>swap <code>?orgId=</code> for tenant B</span>
                    <span className="step s3"><i>3</i>read B&apos;s invoices, 200 OK</span>
                </div>
                <div className="blast">
                    <span className="k">BLAST RADIUS</span>
                    <span className="bar"><i /></span>
                    <span className="v">cross-tenant</span>
                </div>
            </div>
        </div>
    );
}

/* ── Illustration: finding → issue → escrow → payout ────────────────────── */

export function EscrowIllo() {
    return (
        <div className="da-illo da-illo-escrow">
            <div className="esc-node n1">
                <span className="kind">ISSUE #318</span>
                <span className="body">Cross-tenant invoice read</span>
            </div>

            <div className="esc-arrow a1"><span>funded</span></div>

            <div className="esc-box">
                <span className="lock" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                </span>
                <span className="amount">$600</span>
                <span className="label">USDC · IN ESCROW</span>
                <span className="coin c1" aria-hidden="true" />
            </div>

            <div className="esc-arrow a2"><span>fix accepted</span></div>

            <div className="esc-node n2 paid">
                <span className="kind">PAID · 4.2s</span>
                <span className="body">600.00 USDC → @contributor</span>
            </div>
        </div>
    );
}
