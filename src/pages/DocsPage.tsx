import { useEffect, useState, useRef, useCallback } from 'react';
import { SiteNav } from '../components/layout/SiteNav';
import { SiteFooter } from '../components/layout/SiteFooter';
import agentDashboard from '../assets/devasign-agent.webp';
import onboardingScreenshot from '../assets/devasign-onboarding.webp';

interface NavItem {
    id: string;
    title: string;
}

interface NavCategory {
    label: string;
    items: NavItem[];
}

const navCategories: NavCategory[] = [
    {
        label: 'GET STARTED',
        items: [
            { id: 'overview', title: 'Overview' },
            { id: 'how-it-works', title: 'How a review works' },
            { id: 'triggering', title: 'Triggering reviews' },
        ],
    },
    {
        label: 'THE REVIEW ENGINE',
        items: [
            { id: 'context-ingestion', title: 'Context ingestion' },
            { id: 'end-goal', title: 'End goal & criteria' },
            { id: 'multimodal-review', title: 'Multimodal review' },
            { id: 'holistic-review', title: 'Whole-repo review' },
            { id: 'deferred-work', title: 'Deferred-work detection' },
        ],
    },
    {
        label: 'VERDICTS & OUTPUT',
        items: [
            { id: 'severity', title: 'Severity & verdict' },
            { id: 'github-output', title: 'GitHub output' },
            { id: 'maintainer-feedback', title: 'Maintainer feedback loop' },
            { id: 'broadcast', title: 'Broadcast & alerts' },
        ],
    },
    {
        label: 'UNDER THE HOOD',
        items: [
            { id: 'models', title: 'Models' },
            { id: 'repo-index', title: 'Repository index' },
            { id: 'architecture', title: 'Architecture' },
        ],
    },
    {
        label: 'SETUP',
        items: [
            { id: 'installation', title: 'Installation' },
            { id: 'permissions', title: 'GitHub permissions' },
            { id: 'integrations', title: 'Integrations & clients' },
        ],
    },
];

const allNavItems = navCategories.flatMap((cat) => cat.items);

// ─── Lightweight syntax highlighting for the code blocks ───
// No external dependency: the snippets are static and controlled, so a small
// tokenizer keeps the bundle lean while giving JSON, diff, and prompt text
// proper editor-style colors. Input is HTML-escaped before any spans are added.
function escapeHtml(s: string): string {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function highlightJson(code: string): string {
    const re = /("(?:\\.|[^"\\])*")(\s*:)?|\b(true|false|null)\b|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g;
    return escapeHtml(code).replace(re, (match, str, colon, lit, num) => {
        if (str) {
            return colon
                ? `<span class="tok-key">${str}</span>${colon}`
                : `<span class="tok-str">${str}</span>`;
        }
        if (lit) return `<span class="tok-${lit === 'null' ? 'null' : 'bool'}">${lit}</span>`;
        if (num) return `<span class="tok-num">${num}</span>`;
        return match;
    });
}

function highlightPlaceholders(esc: string): string {
    // Angle-bracket placeholders like <path> read as muted italics.
    return esc.replace(/&lt;[^&]*?&gt;/g, (m) => `<span class="tok-placeholder">${m}</span>`);
}

function highlightPrompt(code: string): string {
    let inDiff = false;
    return code
        .split('\n')
        .map((line) => {
            const esc = escapeHtml(line);
            if (/^```/.test(line)) {
                inDiff = line.trim().length > 3; // ```diff opens the fence, ``` closes it
                return `<span class="tok-fence">${esc}</span>`;
            }
            if (inDiff) {
                if (/^\+/.test(line) && !/^\+\+\+/.test(line)) return `<span class="tok-add">${esc}</span>`;
                if (/^-/.test(line) && !/^---/.test(line)) return `<span class="tok-del">${esc}</span>`;
                return esc;
            }
            const label = esc.match(/^([A-Z][A-Za-z ]*?:)(.*)$/);
            if (label) return `<span class="tok-label">${label[1]}</span>${highlightPlaceholders(label[2])}`;
            return highlightPlaceholders(esc);
        })
        .join('\n');
}

function CodeBlock({ lang, code }: { lang: 'json' | 'prompt'; code: string }) {
    const __html = lang === 'json' ? highlightJson(code) : highlightPrompt(code);
    return <pre className="docs-pre" dangerouslySetInnerHTML={{ __html }} />;
}

export function DocsPage() {
    const [activeSection, setActiveSection] = useState('overview');
    const observerRef = useRef<IntersectionObserver | null>(null);
    const isClickScrolling = useRef(false);

    // Scroll to section on nav click
    const scrollToSection = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
            isClickScrolling.current = true;
            setActiveSection(id);
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Allow observer to take over again after scroll animation
            setTimeout(() => {
                isClickScrolling.current = false;
            }, 900);
        }
    }, []);

    // Back to top — reuse scrollToSection so it scrolls the main content correctly
    const scrollToTop = () => {
        scrollToSection('overview');
    };

    // IntersectionObserver for scrollspy
    useEffect(() => {
        const sectionElements = allNavItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean) as HTMLElement[];

        observerRef.current = new IntersectionObserver(
            (entries) => {
                if (isClickScrolling.current) return;
                // Find the topmost visible section
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible.length > 0) {
                    setActiveSection(visible[0].target.id);
                }
            },
            {
                rootMargin: '-100px 0px -60% 0px',
                threshold: 0,
            }
        );

        sectionElements.forEach((el) => observerRef.current?.observe(el));

        return () => observerRef.current?.disconnect();
    }, []);

    return (
        <div className="docs-page">
            <div className="da-root">
                <SiteNav activePath="/docs" />
            </div>

            <div className="docs-layout">
                {/* ─── Left Sidebar ─── */}
                <aside className="docs-sidebar">
                    <nav className="docs-sidebar-inner">
                        {navCategories.map((cat) => (
                            <div key={cat.label} className="docs-nav-group">
                                <span className="docs-nav-category">{cat.label}</span>
                                <ul className="docs-nav-list">
                                    {cat.items.map((item) => (
                                        <li key={item.id}>
                                            <button
                                                onClick={() => scrollToSection(item.id)}
                                                className={`docs-nav-link${activeSection === item.id ? ' active' : ''}`}
                                            >
                                                {item.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* ─── Main Content ─── */}
                <main className="docs-content">
                    {/* ===== OVERVIEW ===== */}
                    <section id="overview" className="docs-section">
                        <br />
                        <h1 className="docs-title">Code Review Documentation</h1>
                        <p className="docs-paragraph">
                            DevAsign is a <strong>multimodal AI code review agent</strong> that reviews every pull request against <strong>what was actually asked</strong> — not just the diff in isolation. It pulls context from the ticket, linked issues, Slack/Linear/Discord threads, Figma frames, Loom walkthroughs, screenshots, and PDFs, then synthesizes a concrete <strong>End goal</strong> and checks the PR against it.
                        </p>
                        <p className="docs-paragraph">
                            When a review finishes, DevAsign posts a <strong>GitHub Check Run</strong> and a single grouped <strong>PR review</strong> with per-criterion evidence, inline comments, and copy-paste fix prompts — then broadcasts the verdict to your team chat. The verdict is <strong>advisory</strong>: it never blocks merging, and a human always makes the final call.
                        </p>
                        <div className="docs-callout">
                            <strong>Why it's different:</strong> traditional review bots grade style and surface lint. DevAsign judges the change against <em>intent</em> — the acceptance criteria distilled from the ticket and everything attached to it — and flags whole-repo regressions the diff alone can't reveal.
                        </div>
                        <img
                            src={agentDashboard}
                            alt="DevAsign Agents dashboard — review queue, review log, and the synthesized end goal with acceptance criteria"
                            style={{ width: '100%', marginTop: '2rem' }}
                        />
                    </section>

                    {/* ===== HOW A REVIEW WORKS ===== */}
                    <section id="how-it-works" className="docs-section">
                        <h2 className="docs-heading">How a review works</h2>
                        <p className="docs-paragraph">
                            A review is an <strong>asynchronous pipeline</strong>, not a request/response. A PR event lands, DevAsign enqueues a job, and a worker runs the full pipeline before posting results back. Reviews never run inline in the webhook handler — long multimodal and transcription work runs on dedicated workers so it isn't bound by function timeouts.
                        </p>
                        <ol className="docs-stage-list">
                            <li>
                                <span className="stage-title">Trigger &amp; enqueue</span>
                                <span className="stage-desc">A GitHub webhook (HMAC-verified) materializes a review record and pushes a job onto the queue.</span>
                            </li>
                            <li>
                                <span className="stage-title">Context ingestion</span>
                                <span className="stage-desc">Gather everything the PR should be judged against — diff, linked issues, attached videos, designs, and docs.</span>
                            </li>
                            <li>
                                <span className="stage-title">End-goal synthesis</span>
                                <span className="stage-desc">Distill that context into a one-sentence end goal plus a list of independently checkable acceptance criteria.</span>
                            </li>
                            <li>
                                <span className="stage-title">Multimodal review</span>
                                <span className="stage-desc">Evaluate the diff against each criterion, producing a verdict, per-criterion evidence, inline comments, and fix suggestions.</span>
                            </li>
                            <li>
                                <span className="stage-title">Whole-repo holistic pass</span>
                                <span className="stage-desc">Check the diff against the repository index for regressions, critical errors, and security flaws beyond the criteria.</span>
                            </li>
                            <li>
                                <span className="stage-title">Deferred-work scan</span>
                                <span className="stage-desc">Mine the diff's own added lines for self-admitted punts — TODOs, stubs, "deferred to a follow-up".</span>
                            </li>
                            <li>
                                <span className="stage-title">Output</span>
                                <span className="stage-desc">Post the Check Run + PR review, write the append-only review-log timeline, and broadcast to Slack/Discord.</span>
                            </li>
                        </ol>
                        <p className="docs-paragraph">
                            Every stage appends to a per-PR <strong>review log</strong> — an append-only timeline you can replay in the dashboard to see exactly what the agent ingested, synthesized, and decided.
                        </p>
                    </section>

                    {/* ===== TRIGGERING ===== */}
                    <section id="triggering" className="docs-section">
                        <h2 className="docs-heading">Triggering reviews</h2>
                        <p className="docs-paragraph">
                            Once the DevAsign GitHub App is installed on a repository, reviews start automatically. You can also kick one off by hand on any existing PR.
                        </p>
                        <h3 className="docs-subheading">Automatic</h3>
                        <p className="docs-paragraph">
                            DevAsign reviews a PR whenever GitHub fires one of these <code className="docs-code">pull_request</code> actions: <code className="docs-code">opened</code>, <code className="docs-code">reopened</code>, <code className="docs-code">synchronize</code> (a new push), or <code className="docs-code">ready_for_review</code>. A push to an open PR re-runs the review so the verdict tracks the latest commit.
                        </p>
                        <h3 className="docs-subheading">Manual</h3>
                        <p className="docs-paragraph">
                            Comment the single word <code className="docs-code">review</code> on any open PR. DevAsign resolves the PR, materializes a review record, and runs the full criteria pipeline — useful for PRs opened before the app was installed.
                        </p>
                        <div className="docs-callout">
                            <strong>On merge:</strong> when a PR is merged, DevAsign queues an <em>incremental</em> refresh of the repository index for the files that changed (see <a href="#repo-index" className="docs-link">Repository index</a>), keeping whole-repo reviews accurate as the codebase evolves.
                        </div>
                    </section>

                    {/* ===== CONTEXT INGESTION ===== */}
                    <section id="context-ingestion" className="docs-section">
                        <h2 className="docs-heading">Context ingestion</h2>
                        <p className="docs-paragraph">
                            The first stage gathers every source the PR should be measured against. This is the multimodal layer — DevAsign reads code <em>and</em> watches video, parses designs, and reads documents.
                        </p>
                        <div className="docs-table-wrapper">
                            <table className="docs-table">
                                <thead>
                                    <tr>
                                        <th>Source</th>
                                        <th>What the agent pulls</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>GitHub PR</strong></td>
                                        <td>Title, description, the unified diff, and accurate additions / deletions / changed-file counts.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Linked issues</strong></td>
                                        <td><em>Primary</em> links (<code className="docs-code">closes</code> / <code className="docs-code">fixes</code> / <code className="docs-code">resolves #N</code>) are treated as the authoritative job-to-be-done; bare <code className="docs-code">#N</code> references are ingested as secondary background.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Linear</strong></td>
                                        <td>Issue description and comments via the Linear API.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Slack / Discord</strong></td>
                                        <td>The thread or channel the task lives in.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Figma</strong></td>
                                        <td>Frame images plus design metadata.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Loom / YouTube / Vimeo</strong></td>
                                        <td>Transcript and a visual walkthrough, summarized by Gemini (see below).</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Screenshots / PDF</strong></td>
                                        <td>Images are passed to a vision model; PDFs are parsed to text.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="docs-subheading">Video understanding</h3>
                        <p className="docs-paragraph">
                            DevAsign scans the PR body, every linked issue, and task attachments for video URLs, de-duplicates them, and hands each to <strong>Gemini 2.5 Pro</strong>. YouTube videos are watched natively; other providers are inferred conservatively and flagged as <code className="docs-code">unreliable</code>. Each video becomes a structured summary the reviewer can reason over:
                        </p>
                        <CodeBlock lang="json" code={`{
  "summary": "What the recording shows and the UX it implies",
  "keyMoments": [ { "t": "00:42", "note": "Empty state renders a placeholder" } ],
  "acceptanceSignals": [ "List paginates after 20 items" ],
  "unreliable": false
}`} />

                        <h3 className="docs-subheading">The Message-agent inbox</h3>
                        <p className="docs-paragraph">
                            Anything you send the agent on the <strong>Message-agent</strong> screen — a Loom link, a Figma frame, an image, a PDF, a plain link, or free text — is attached to the task and ingested exactly like the sources above. It's how you give the agent context that doesn't live in the ticket.
                        </p>
                    </section>

                    {/* ===== END GOAL ===== */}
                    <section id="end-goal" className="docs-section">
                        <h2 className="docs-heading">End goal &amp; acceptance criteria</h2>
                        <p className="docs-paragraph">
                            A single LLM pass distills all that raw context into a one-sentence <strong>End goal</strong> and a list of independently checkable <strong>acceptance criteria</strong>. This is the heart of the product: a structured, editable object — not a black box — persisted on the task and visible in the dashboard, where you can refine it before or during review.
                        </p>
                        <CodeBlock lang="json" code={`{
  "endGoal": "Users can withdraw USDC to any Stellar address with a trustline.",
  "criteria": [
    { "id": "c1", "text": "Withdrawal validates the destination has a USDC trustline" },
    { "id": "c2", "text": "Insufficient-balance attempts return a clear error" },
    { "id": "c3", "text": "A 24h cooldown is enforced between withdrawals" }
  ]
}`} />
                        <h3 className="docs-subheading">PRs with no spec</h3>
                        <p className="docs-paragraph">
                            When a PR has no linked issue, attachment, or video, DevAsign does <strong>not</strong> invent requirements. Synthesis is instructed to derive criteria only from explicit, checkable claims the PR's own title and description make — and if there are none, it returns <strong>zero criteria</strong> with a neutral end goal, then reviews the diff for correctness only.
                        </p>
                        <h3 className="docs-subheading">Refining from video</h3>
                        <p className="docs-paragraph">
                            If a walkthrough is attached, a follow-up pass lets the model reconsider the end goal in light of what the video actually shows. It only updates the goal when the recording reveals concrete, product-aligned requirements that weren't already covered — never speculative ones.
                        </p>
                    </section>

                    {/* ===== MULTIMODAL REVIEW ===== */}
                    <section id="multimodal-review" className="docs-section">
                        <h2 className="docs-heading">Multimodal review</h2>
                        <p className="docs-paragraph">
                            The review model evaluates the diff against each criterion and emits a structured verdict: <code className="docs-code">passed</code> or <code className="docs-code">changes_requested</code>, a per-criterion checklist with <strong>evidence quoted from the diff</strong>, inline comments tied to specific lines, and a fix suggestion for every unmet criterion. It is told to never manufacture issues to appear thorough — a sound diff with no spec returns a short positive summary.
                        </p>
                        <h3 className="docs-subheading">Copy-paste fix prompts</h3>
                        <p className="docs-paragraph">
                            Every suggestion (and every blocking finding) ships a self-contained <strong>fix prompt</strong> you can paste straight into an external AI coding agent — Cursor, Claude Code, or Codex. It quotes the relevant diff hunk verbatim so the agent can act without repository access:
                        </p>
                        <CodeBlock lang="prompt" code={`Fix: <one-line summary>

File: <path>
Symbol: <function / class / component name, or 'n/a'>

Issue:
<2-3 sentence concern description>

Suggested approach:
<concrete steps to fix>

Relevant diff:
\`\`\`diff
<the exact hunk this finding refers to>
\`\`\``} />
                        <p className="docs-paragraph">
                            When a PR has multiple problems, DevAsign also composes a single <strong>consolidated prompt</strong> that bundles every failed criterion and blocking finding — one paste to fix the whole PR.
                        </p>
                    </section>

                    {/* ===== HOLISTIC REVIEW ===== */}
                    <section id="holistic-review" className="docs-section">
                        <h2 className="docs-heading">Whole-repo (holistic) review</h2>
                        <p className="docs-paragraph">
                            Acceptance criteria capture intent, but a diff can satisfy every criterion and still break the rest of the codebase. The holistic pass closes that gap. Using the <a href="#repo-index" className="docs-link">repository index</a>, DevAsign assembles a focused slice of the repo around the change:
                        </p>
                        <ul className="docs-unordered-list">
                            <li><strong>Touched files</strong> — the files the diff actually modifies (capped at 25).</li>
                            <li><strong>Dependents</strong> — files that import the touched files' symbols, so the model sees blast radius (capped at 25).</li>
                            <li><strong>Repo manifest</strong> — a short tour of the largest code files for whole-repo context (capped at 20).</li>
                        </ul>
                        <p className="docs-paragraph">
                            The model then looks for <strong>regressions, critical errors, and security flaws</strong> beyond what the criteria covered. Each finding is tagged <span className="docs-pill blocker">blocker</span> when it would clearly break a feature, corrupt state, or expose data, or <span className="docs-pill warn">warn</span> for a plausible concern that needs human eyes. A single blocker flips the verdict to <em>changes requested</em>. The pass is skipped until the index has finished building, in which case DevAsign falls back to the criteria-only verdict.
                        </p>
                    </section>

                    {/* ===== DEFERRED WORK ===== */}
                    <section id="deferred-work" className="docs-section">
                        <h2 className="docs-heading">Deferred-work detection</h2>
                        <p className="docs-paragraph">
                            A coding agent will sometimes agree to a design, then quietly punt part of it during implementation — burying the admission in a code comment instead of telling you. DevAsign catches those self-admissions in the PR's <strong>own added lines</strong>.
                        </p>
                        <p className="docs-paragraph">
                            A cheap regex pre-scan first flags candidate lines against a set of markers — <code className="docs-code">TODO</code>, <code className="docs-code">FIXME</code>, <code className="docs-code">NotImplemented</code>, <code className="docs-code">stub</code>, "for now", "deferred to a follow-up", and more. A clean diff costs nothing. Only when candidates surface does a precision LLM pass decide which are real scope cuts versus benign matches (an unrelated pre-existing TODO, a marker inside a logging string).
                        </p>
                        <p className="docs-paragraph">
                            Each genuine finding's explanation leads with <code className="docs-code">Contradicts &lt;criterion&gt;</code> when the punt undercuts something the PR promised, or <code className="docs-code">Incidental</code> when it doesn't. These findings are <strong>advisory</strong> — always <span className="docs-pill warn">warn</span>, never gating the merge — so you see the punt on time without being blocked by it.
                        </p>
                    </section>

                    {/* ===== SEVERITY ===== */}
                    <section id="severity" className="docs-section">
                        <h2 className="docs-heading">Severity &amp; verdict</h2>
                        <p className="docs-paragraph">
                            Findings carry a severity that determines whether they affect the verdict. The verdict itself is always advisory toward GitHub — DevAsign never blocks a merge through branch protection.
                        </p>
                        <div className="docs-table-wrapper">
                            <table className="docs-table">
                                <thead>
                                    <tr>
                                        <th>Severity</th>
                                        <th>Gates the verdict?</th>
                                        <th>Meaning</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><span className="docs-pill blocker">blocker</span></td>
                                        <td>Yes</td>
                                        <td>Would clearly break a feature, corrupt state, or expose data. Flips the verdict to changes requested.</td>
                                    </tr>
                                    <tr>
                                        <td><span className="docs-pill warn">warn</span></td>
                                        <td>No</td>
                                        <td>A plausible concern (or a deferred-work note) worth a human's eyes but not blocking.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="docs-callout">
                            <strong>Verdict rule:</strong> a PR passes only when <em>every</em> acceptance criterion is met <em>and</em> no blocker-severity finding surfaced. Otherwise DevAsign requests changes.
                        </div>
                    </section>

                    {/* ===== GITHUB OUTPUT ===== */}
                    <section id="github-output" className="docs-section">
                        <h2 className="docs-heading">GitHub output</h2>
                        <p className="docs-paragraph">
                            DevAsign posts results in two places. A <strong>Check Run</strong> named <code className="docs-code">DevAsign · End goal</code> is keyed to the head commit (concluding <code className="docs-code">success</code> or <code className="docs-code">action_required</code>) and refreshes on every push without adding conversation noise. A single grouped <strong>PR review</strong> carries the detail, structured to be scannable:
                        </p>
                        <ul className="docs-unordered-list">
                            <li><strong>End goal</strong>, then <strong>❌ criteria not met</strong> (each with a "why it failed" line), then <strong>✅ criteria met</strong>.</li>
                            <li><strong>🕓 Deferred / incomplete work</strong> the diff conceded.</li>
                            <li><strong>Suggested changes</strong> with minimal code examples and per-item fix prompts.</li>
                            <li><strong>Repo-wide concerns</strong> from the holistic pass.</li>
                            <li>A collapsible <strong>"one prompt to fix all of this"</strong> for your AI coding agent.</li>
                        </ul>
                        <p className="docs-paragraph">
                            Inline comments are pre-filtered against the file paths actually present in the diff, so a bad path from the model can't poison the whole review; if GitHub rejects the inline batch, DevAsign falls back to posting the verdict body alone. The review action depends on the outcome:
                        </p>
                        <div className="docs-table-wrapper">
                            <table className="docs-table">
                                <thead>
                                    <tr>
                                        <th>Outcome</th>
                                        <th>GitHub review event</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>All acceptance criteria met (spec'd PR)</td>
                                        <td><code className="docs-code">APPROVE</code></td>
                                    </tr>
                                    <tr>
                                        <td>Any criterion unmet, or a blocker found</td>
                                        <td><code className="docs-code">REQUEST_CHANGES</code></td>
                                    </tr>
                                    <tr>
                                        <td>Clean pass, but no spec to check against</td>
                                        <td><code className="docs-code">COMMENT</code> + a one-time invite to add an end goal</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="docs-callout">
                            <strong>It never rubber-stamps:</strong> DevAsign won't formally approve a PR it had no acceptance criteria to verify against. Instead it posts a neutral comment and, exactly once, invites you to supply an end goal so a real criteria-based review can run.
                        </div>
                    </section>

                    {/* ===== MAINTAINER FEEDBACK ===== */}
                    <section id="maintainer-feedback" className="docs-section">
                        <h2 className="docs-heading">Maintainer feedback loop</h2>
                        <p className="docs-paragraph">
                            Reviews are conversational. Reply on the PR — as a comment, a formal review, or an inline review comment — and DevAsign ingests it, decides whether it changes what "done" means, and re-reviews if so. You can reply with any of:
                        </p>
                        <ul className="docs-unordered-list">
                            <li><strong>Text</strong> — a description of the intended behaviour and acceptance conditions.</li>
                            <li><strong>A Loom / YouTube / Vimeo link</strong> — DevAsign watches it and extracts acceptance signals.</li>
                            <li><strong>A screenshot + description</strong> — show the expected result and describe it.</li>
                        </ul>
                        <p className="docs-paragraph">
                            Pure acknowledgements ("lgtm", "ship it") are recognized and don't move the goal. A mid-review Loom flagging a new bug gets a discrete fix comment without disturbing the verdict, and a maintainer's request can be turned into a concrete implementation guide. Bot and self-authored comments are filtered out so the agent never reacts to its own output.
                        </p>
                    </section>

                    {/* ===== BROADCAST ===== */}
                    <section id="broadcast" className="docs-section">
                        <h2 className="docs-heading">Broadcast &amp; alerts</h2>
                        <p className="docs-paragraph">
                            When a verdict lands, DevAsign broadcasts it to your connected <strong>Slack</strong> or <strong>Discord</strong> channel so the team sees the outcome without opening GitHub. In the dashboard, the notification bell surfaces a row per completed review — a blue dot for a clean pass, a red dot for changes requested or a failed run — and clicking it jumps straight to the review detail and its log timeline.
                        </p>
                    </section>

                    {/* ===== MODELS ===== */}
                    <section id="models" className="docs-section">
                        <h2 className="docs-heading">Models</h2>
                        <p className="docs-paragraph">
                            DevAsign routes each task to the model that fits it, and lets you override the reasoning model per repository.
                        </p>
                        <div className="docs-table-wrapper">
                            <table className="docs-table">
                                <thead>
                                    <tr>
                                        <th>Model</th>
                                        <th>Where it's used</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Claude Opus</strong></td>
                                        <td>Criteria synthesis, diff review, the whole-repo holistic pass, and deferred-work judgment.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Claude Haiku</strong></td>
                                        <td>Per-file repository-index summaries — cheap and high-volume.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Gemini 2.5 Pro</strong></td>
                                        <td>Watching and summarizing video (Loom / YouTube / Vimeo) and vision tasks.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="docs-paragraph">
                            Each repository has a <strong>default model</strong> plus optional per-path overrides, so expensive repos can run a stronger model while routine ones stay cheap. System prompts are sent with <strong>prompt caching</strong> enabled, so the reused instruction blocks don't re-bill on every pass.
                        </p>
                    </section>

                    {/* ===== REPO INDEX ===== */}
                    <section id="repo-index" className="docs-section">
                        <h2 className="docs-heading">Repository index</h2>
                        <p className="docs-paragraph">
                            The whole-repo review is powered by a per-file index: a short LLM-generated summary of each source file, capturing what it does, its top-level <code className="docs-code">exports</code> and <code className="docs-code">imports</code>, and any security-sensitive flags (<code className="docs-code">reads-env</code>, <code className="docs-code">raw-sql</code>, <code className="docs-code">handles-auth</code>, …).
                        </p>
                        <ul className="docs-unordered-list">
                            <li><strong>Full build</strong> — on install, DevAsign walks the default-branch tree, filters to reviewable source files (skipping <code className="docs-code">node_modules</code>, build output, lockfiles, and binaries, with size caps), and summarizes each with Haiku at a concurrency of 8.</li>
                            <li><strong>SHA-keyed cache</strong> — every entry is keyed by the file's git blob SHA, so re-indexing an unchanged file is free.</li>
                            <li><strong>Incremental refresh</strong> — when a PR merges, only the changed paths are re-summarized; deleted and renamed files are pruned.</li>
                        </ul>
                        <p className="docs-paragraph">
                            An index moves through these states, surfaced per-repo in the dashboard:
                        </p>
                        <div className="docs-table-wrapper">
                            <table className="docs-table">
                                <thead>
                                    <tr>
                                        <th>State</th>
                                        <th>Meaning</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td><code className="docs-code">queued</code></td><td>A build job is waiting on the index queue.</td></tr>
                                    <tr><td><code className="docs-code">indexing</code></td><td>A worker is actively walking the tree.</td></tr>
                                    <tr><td><code className="docs-code">ready</code></td><td>The index is up to date; holistic review is enabled.</td></tr>
                                    <tr><td><code className="docs-code">stale</code></td><td>A PR merged; an incremental refresh is pending.</td></tr>
                                    <tr><td><code className="docs-code">errored</code></td><td>The last build failed; reviews fall back to criteria-only.</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* ===== ARCHITECTURE ===== */}
                    <section id="architecture" className="docs-section">
                        <h2 className="docs-heading">Architecture</h2>
                        <p className="docs-paragraph">
                            DevAsign keeps the request path thin and pushes the heavy lifting to workers:
                        </p>
                        <ul className="docs-unordered-list">
                            <li><strong>Webhook receiver</strong> — verifies each delivery's <code className="docs-code">sha256</code> HMAC signature, then enqueues a job. It does no review work itself.</li>
                            <li><strong>Job queue &amp; workers</strong> — reviews, index builds, and maintainer-feedback jobs run on workers, so multimodal and transcription work isn't capped by a function timeout.</li>
                            <li><strong>Least-privilege GitHub App</strong> — the app requests only Pull requests (read/write), Checks (write), Contents (read), Issues (read), and Metadata (read), and exchanges the installation for short-lived tokens per request rather than holding long-lived credentials (see <a href="#permissions" className="docs-link">GitHub permissions</a>).</li>
                            <li><strong>Persistence</strong> — reviews, criteria, the index, and an append-only review-log timeline are stored in Postgres.</li>
                        </ul>
                    </section>

                    {/* ===== INSTALLATION ===== */}
                    <section id="installation" className="docs-section">
                        <h2 className="docs-heading">Installation</h2>
                        <p className="docs-paragraph">
                            Sign up on <a href="https://app.devasign.com/authenticate/account" target="_blank" rel="noopener noreferrer" className="docs-link">DevAsign</a> with GitHub and install the app on a repository. DevAsign works with any public GitHub repository.
                        </p>
                        <ol className="docs-ordered-list">
                            <li>Sign in with GitHub and install the DevAsign GitHub App on your repo.</li>
                            <li>DevAsign builds the repository index in the background (this enables whole-repo review).</li>
                            <li>Open any existing PR and comment <code className="docs-code">review</code> to kick off the first review.</li>
                            <li>From then on, every new PR is reviewed automatically.</li>
                        </ol>
                        <img
                            src={onboardingScreenshot}
                            alt="DevAsign onboarding — step 1, install the DevAsign GitHub App and choose which repositories it can access"
                            style={{ width: '100%', marginTop: '2rem' }}
                        />
                    </section>

                    {/* ===== GITHUB PERMISSIONS ===== */}
                    <section id="permissions" className="docs-section">
                        <h2 className="docs-heading">GitHub permissions</h2>
                        <p className="docs-paragraph">
                            DevAsign installs as a <strong>least-privilege GitHub App</strong>. When you install it, GitHub shows you the exact scopes below — and the app requests nothing else. It never sees your GitHub password, and rather than hold a long-lived key it exchanges the installation for a <strong>short-lived token</strong>, scoped to the repositories you picked, on each request.
                        </p>

                        <h3 className="docs-subheading">What we request</h3>
                        <div className="docs-table-wrapper">
                            <table className="docs-table">
                                <thead>
                                    <tr>
                                        <th>Permission</th>
                                        <th>Access</th>
                                        <th>Why DevAsign needs it</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Pull requests</strong></td>
                                        <td><span className="docs-pill write">read · write</span></td>
                                        <td>Read the title, description, and diff; post the grouped review, inline comments, and the approve / request-changes verdict.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Checks</strong></td>
                                        <td><span className="docs-pill write">write</span></td>
                                        <td>Publish the <code className="docs-code">DevAsign · End goal</code> Check Run on the head commit.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Contents</strong></td>
                                        <td><span className="docs-pill read">read</span></td>
                                        <td>Read source files to build the <a href="#repo-index" className="docs-link">repository index</a> and run the whole-repo holistic pass. Read-only — DevAsign never pushes commits or edits your code.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Issues</strong></td>
                                        <td><span className="docs-pill read">read</span></td>
                                        <td>Read linked issues (<code className="docs-code">closes #N</code>) and PR conversation comments — the ticket context a review is judged against, plus the manual <code className="docs-code">review</code> trigger and maintainer replies.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Metadata</strong></td>
                                        <td><span className="docs-pill read">read</span></td>
                                        <td>Mandatory, read-only repository metadata (branches and basic repo info) that every GitHub App receives.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="docs-subheading">What we can't do</h3>
                        <ul className="docs-unordered-list">
                            <li><strong>Push, merge, or modify code</strong> — Contents access is read-only, so DevAsign cannot commit, force-push, switch branches, or alter your files.</li>
                            <li><strong>Touch repository settings</strong> — no access to branch-protection rules, webhooks, secrets, deploy keys, GitHub Actions, or collaborator management.</li>
                            <li><strong>Block a merge</strong> — the verdict is advisory; DevAsign posts a Check Run and review but never sets a required, merge-gating status.</li>
                            <li><strong>See repos you didn't pick</strong> — the app only ever sees the specific repositories you select at install time, and you can add or remove them whenever you like.</li>
                            <li><strong>Keep a copy of your source</strong> — file contents are fetched on demand via short-lived tokens; what's persisted is the index's short per-file summaries, not your raw code.</li>
                        </ul>

                        <div className="docs-callout">
                            <strong>Revoke anytime:</strong> manage or uninstall DevAsign from <em>GitHub → Settings → Applications → Installed GitHub Apps</em>. Removing it revokes all access immediately.
                        </div>
                    </section>

                    {/* ===== INTEGRATIONS ===== */}
                    <section id="integrations" className="docs-section">
                        <h2 className="docs-heading">Integrations &amp; clients</h2>
                        <p className="docs-paragraph">
                            Connect your team's tools so the agent can pull richer ticket context and broadcast verdicts where you already work.
                        </p>
                        <ul className="docs-unordered-list">
                            <li><strong>Slack, Linear &amp; Discord</strong> — authorize once to let DevAsign read the thread or issue a task lives in (feeding the review engine) and post verdicts back to your channel.</li>
                            <li><strong>IDE extensions</strong> — VS Code and JetBrains plugins bring reviews into your editor.</li>
                            <li><strong>CLI agent</strong> — drop reviews into a terminal or vibe-coding workflow.</li>
                        </ul>
                        <p className="docs-paragraph">
                            The IDE and CLI clients are thin: they authenticate to DevAsign and call the same review API the dashboard uses.
                        </p>
                    </section>

                    {/* Bottom spacer */}
                    <div style={{ height: '120px' }} />
                </main>

                {/* ─── Right Utility Sidebar ─── */}
                <aside className="docs-right-sidebar">
                    <div className="docs-right-sidebar-inner">
                        <button onClick={scrollToTop} className="docs-util-link">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 12V2M7 2L2 7M7 2L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Back to top
                        </button>
                    </div>
                </aside>
            </div>
            <SiteFooter variant="full" />
        </div>
    );
}
