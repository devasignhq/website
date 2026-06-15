import { SiteNav } from '../components/layout/SiteNav';
import { SiteFooter } from '../components/layout/SiteFooter';
import { useScrollSpy } from '../hooks/useScrollSpy';
import agentDashboard from '../assets/devasign-agent.webp';
import agentWorkflow from '../assets/devasign-workflow.webp';
import linearWorkflow from '../assets/devasign-installation.webp';
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
        label: 'SETUP',
        items: [
            { id: 'installation', title: 'Installation' },
            { id: 'permissions', title: 'GitHub permissions' },
            { id: 'linear', title: 'Linear integration' },
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
        label: 'CUSTOMIZATION',
        items: [
            { id: 'workflow', title: 'Review workflow' },
            { id: 'devasign-guidance', title: 'DEVASIGN.md guidance' },
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
];

const sectionIds = navCategories.flatMap((cat) => cat.items).map((item) => item.id);

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
    const { activeSection, scrollToSection, scrollToTop } = useScrollSpy(sectionIds);

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
                            DevAsign is a <strong>multimodal AI code review agent</strong> that reviews every pull request against what was actually asked — not just the diff in isolation. It pulls context from the ticket, linked issues, Slack/Linear/Discord threads, Figma frames, Loom walkthroughs, screenshots, and PDFs, then synthesizes a concrete End goal and checks the PR against it.
                        </p>
                        <p className="docs-paragraph">
                            Every repository also gets its own editable <strong><a href="#workflow" className="docs-link">review workflow</a></strong>: toggle stages, steer each AI step with your own instructions, choose blocking or comment-only verdicts, and even dispatch a GitHub Action when a review finishes.
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
                                <span className="stage-desc">A GitHub webhook (HMAC-verified) applies your repo's trigger policy, materializes a review record, and pushes a job onto the queue. The moment a worker picks it up, a "review in progress" comment lands on the PR.</span>
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
                                <span className="stage-desc">Edit the progress comment into the verdict, refresh the Check Run, approve (or withdraw a stale approval), and broadcast to Slack/Discord.</span>
                            </li>
                            <li>
                                <span className="stage-title">Run GitHub Action <em>(optional)</em></span>
                                <span className="stage-desc">Dispatch a GitHub Actions workflow you chose — on every verdict, or only when the review passes.</span>
                            </li>
                        </ol>
                        <p className="docs-paragraph">
                            Every stage appends to a per-PR <strong>review log</strong> — an append-only timeline you can replay in the dashboard to see exactly what the agent ingested, synthesized, and decided. The optional stages (whole-repo, deferred-work, DEVASIGN.md guidance, the Action step) can be toggled and steered per repository in the <a href="#workflow" className="docs-link">review workflow</a>.
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
                        <p className="docs-paragraph">
                            This is policy, not hard-coded. The repo's <a href="#workflow" className="docs-link">review workflow</a> can turn off re-review-on-push, skip draft PRs, or skip bot-authored PRs (Dependabot, Renovate, GitHub Apps). A draft marked "ready for review" is still reviewed — the skip applies only while it's a draft.
                        </p>
                        <h3 className="docs-subheading">Manual</h3>
                        <p className="docs-paragraph">
                            Comment the single word <code className="docs-code">review</code> on any open PR. DevAsign resolves the PR, materializes a review record, and runs the full criteria pipeline — useful for PRs opened before the app was installed.
                        </p>
                        <div className="docs-callout">
                            <strong>On merge:</strong> when a PR is merged, DevAsign queues an <em>incremental</em> refresh of the repository index for the files that changed (see <a href="#repo-index" className="docs-link">Repository index</a>), keeping whole-repo reviews accurate as the codebase evolves.
                        </div>
                    </section>

                    {/* ===== INSTALLATION ===== */}
                    <section id="installation" className="docs-section">
                        <h2 className="docs-heading">Installation</h2>
                        <p className="docs-paragraph">
                            Sign up on <a href="https://app.devasign.com/authenticate/account" target="_blank" rel="noopener noreferrer" className="docs-link">DevAsign</a> with GitHub and install the app on a repository. Public repositories are reviewed on every plan; <strong>private repositories require Pro or Max</strong>. Plans meter <em>unique PRs per month</em> — re-reviews of a PR (new pushes, reruns) never consume quota. See <a href="/pricing" className="docs-link">Pricing</a> for the caps.
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
                            <li><strong>Block a merge</strong> — DevAsign never sets a required, merge-gating status itself; its Check Run and approval only gate a merge if <em>you</em> choose to require them in branch protection (see <a href="#severity" className="docs-link">verdict modes</a>).</li>
                            <li><strong>See repos you didn't pick</strong> — the app only ever sees the specific repositories you select at install time, and you can add or remove them whenever you like.</li>
                            <li><strong>Keep a copy of your source</strong> — file contents are fetched on demand via short-lived tokens; what's persisted is the index's short per-file summaries, not your raw code.</li>
                        </ul>

                        <div className="docs-callout">
                            <strong>Revoke anytime:</strong> manage or uninstall DevAsign from <em>GitHub → Settings → Applications → Installed GitHub Apps</em>. Removing it revokes all access immediately.
                        </div>
                    </section>

                    {/* ===== LINEAR INTEGRATION ===== */}
                    <section id="linear" className="docs-section">
                        <h2 className="docs-heading">Linear integration</h2>
                        <p className="docs-paragraph">
                            Connect a Linear workspace and DevAsign judges each PR against the <strong>ticket it implements</strong> — pulling the issue into <a href="#context-ingestion" className="docs-link">context ingestion</a> — then reports the verdict back on that issue. It's how the agent learns <em>what was asked</em> when the spec lives in Linear rather than the PR description.
                        </p>
                        <h3 className="docs-subheading">Connecting</h3>
                        <p className="docs-paragraph">
                            In the dashboard, open <strong>Settings → Integrations → Linear</strong> and click <strong>Connect</strong>. A popup hands you to Linear's OAuth screen to authorize your workspace; approve it and the workspace appears in your integration list. There are <strong>no tokens or API keys to paste</strong>, re-connecting simply refreshes the authorization, and one Linear workspace connects per account. The Linear integration is a <strong>Pro / Max</strong> feature.
                        </p>
                        <img
                            src={linearWorkflow}
                            alt="DevAsign Linear integration configuration"
                            style={{ width: '100%' }}
                        />
                        <h3 className="docs-subheading">Permissions you grant</h3>
                        <p className="docs-paragraph">
                            Linear shows you these scopes on the authorization screen — DevAsign requests nothing more:
                        </p>
                        <div className="docs-table-wrapper">
                            <table className="docs-table">
                                <thead>
                                    <tr>
                                        <th>Scope</th>
                                        <th>Access</th>
                                        <th>Why DevAsign needs it</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Read</strong></td>
                                        <td><span className="docs-pill read">read</span></td>
                                        <td>Ingest the ticket a PR implements — its description, comments, sub-issues, labels, parent and project, plus attachments (PDFs and images) and any embedded Loom / YouTube / Vimeo — as the context a review is judged against.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Write</strong></td>
                                        <td><span className="docs-pill write">write</span></td>
                                        <td>Post one short verdict comment back on the linked issue. The full review stays on the PR.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3 className="docs-subheading">What it can't do</h3>
                        <ul className="docs-unordered-list">
                            <li><strong>Speak as you</strong> — its comment is attributed to the DevAsign app, not your user account.</li>
                            <li><strong>Change your tickets</strong> — DevAsign never creates, reassigns, closes, or moves the status of an issue; its only write is that single notification comment.</li>
                            <li><strong>See more than it resolves</strong> — although the Linear OAuth grant is workspace-wide, DevAsign reads only the issues it actually links a PR to.</li>
                        </ul>
                        <h3 className="docs-subheading">What it does</h3>
                        <ol className="docs-ordered-list">
                            <li><strong>Links PRs to tickets.</strong> DevAsign matches a PR to a Linear issue by an explicit reference — an <code className="docs-code">ENG-123</code> key in the PR body or branch name (including the <code className="docs-code">Fixes ENG-123</code> line Linear's own GitHub integration injects) — or, when there's no explicit ref, by a conservative match of the PR title and description against your issues.</li>
                            <li><strong>Pulls the ticket into the review.</strong> The linked issue's description, discussion, attachments, and embedded videos feed <a href="#end-goal" className="docs-link">end-goal &amp; criteria</a> synthesis, so the PR is measured against what the ticket actually asked for.</li>
                            <li><strong>Seeds acceptance criteria.</strong> When a ticket is opened or updated, DevAsign synthesizes criteria from it ahead of time and caches them; a PR that later links to that ticket reuses those criteria instead of re-deriving them.</li>
                            <li><strong>Reports back on the issue.</strong> Once the linked PR is reviewed, DevAsign posts a short comment on the Linear issue — that it reviewed the PR and <em>passed</em> or <em>requested changes</em>, with a link to it. The comment posts once per commit, so re-reviews of the same push don't repeat it.</li>
                        </ol>
                        <div className="docs-callout">
                            <strong>The PR stays the source of truth:</strong> the Linear comment is a pointer. The full verdict — per-criterion evidence, inline comments, and fix prompts — lives on the GitHub PR.
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
                                        <td>The linked issue's description, comments, sub-issues, and attachments, plus any embedded video — see <a href="#linear" className="docs-link">Linear integration</a>.</td>
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
                            The review model evaluates the diff against each criterion and emits a structured verdict: <code className="docs-code">passed</code> or <code className="docs-code">changes_requested</code>, a per-criterion checklist with <strong>evidence quoted from the diff</strong>, line notes pinned to <code className="docs-code">file:line</code>, and a fix suggestion for every unmet criterion. It is told to never manufacture issues to appear thorough — a sound diff with no spec returns a short positive summary.
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
                            When a PR has multiple problems, DevAsign also composes a single <strong>consolidated prompt</strong> that bundles every failed criterion and every review finding — regressions, security warnings, deferred work, even DEVASIGN.md nits, whatever the severity — one paste to fix the whole PR.
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
                            The model then looks for <strong>regressions, critical errors, and security flaws</strong> beyond what the criteria covered. Each finding is tagged <span className="docs-pill blocker">blocker</span> when it would clearly break a feature, corrupt state, or expose data, or <span className="docs-pill warn">warn</span> for a plausible concern that needs human eyes. A single blocker flips the verdict to <em>changes requested</em>. The pass is skipped until the index has finished building, in which case DevAsign falls back to the criteria-only verdict — and it can be switched off per repo in the <a href="#workflow" className="docs-link">review workflow</a>.
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

                    {/* ===== REVIEW WORKFLOW ===== */}
                    <section id="workflow" className="docs-section">
                        <h2 className="docs-heading">Review workflow</h2>
                        <p className="docs-paragraph">
                            Every repository carries its own <strong>review workflow</strong>, edited on the dashboard's <strong>Workflow</strong> screen — a visual, node-based view of the pipeline with a repository rail, a canvas showing every stage in run order, and a detail panel for the selected stage. The pipeline is a fixed chain: you don't add or remove nodes, you switch the optional stages on or off and steer each AI stage with your own instructions. A repo you never touch reviews exactly like stock DevAsign.
                        </p>
                        <img
                            src={agentWorkflow}
                            alt="DevAsign code review agent workflow configuration"
                            style={{ width: '100%' }}
                        />
                        <h3 className="docs-subheading">Stage toggles</h3>
                        <p className="docs-paragraph">
                            The optional stages — <a href="#holistic-review" className="docs-link">whole-repo review</a>, the <a href="#deferred-work" className="docs-link">deferred-work scan</a>, <a href="#devasign-guidance" className="docs-link">DEVASIGN.md guidance</a>, and the <strong>Run GitHub Action</strong> step — can each be switched off per repository. Context ingestion, criteria synthesis, the diff review, and the verdict always run. Stage toggles are available on every plan.
                        </p>
                        <h3 className="docs-subheading">Modes</h3>
                        <p className="docs-paragraph">
                            Three one-click presets set the core policy (trigger, stages, verdict). Tweak anything off-preset and the mode chip reads <strong>Custom</strong>. Applying a preset preserves your per-stage prompts and the Action step.
                        </p>
                        <div className="docs-table-wrapper">
                            <table className="docs-table">
                                <thead>
                                    <tr>
                                        <th>Mode</th>
                                        <th>What it does</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Strict</strong></td>
                                        <td>Maximum rigor: every stage on, blocking verdicts, and drafts and bot PRs are reviewed too.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Balanced</strong></td>
                                        <td>Every stage on with blocking verdicts, but draft and bot-authored PRs are skipped.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Light</strong></td>
                                        <td>Lean and advisory: comment-only verdicts, no re-review on push, whole-repo and deferred-work scans off (DEVASIGN.md guidance stays on), drafts and bots skipped.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3 className="docs-subheading">Advanced controls <span className="docs-pill write">Pro / Max</span></h3>
                        <ul className="docs-unordered-list">
                            <li><strong>Trigger policy</strong> — re-review on every push, skip draft PRs, skip bot-authored PRs (see <a href="#triggering" className="docs-link">Triggering reviews</a>).</li>
                            <li><strong>Verdict mode</strong> — blocking (default) or comment-only; see <a href="#severity" className="docs-link">Severity &amp; verdict</a>.</li>
                            <li><strong>Per-stage prompts</strong> — steer each AI stage with your own instructions.</li>
                            <li><strong>Run GitHub Action</strong> — dispatch a workflow when the review finishes.</li>
                        </ul>
                        <h3 className="docs-subheading">Per-stage prompts</h3>
                        <p className="docs-paragraph">
                            Each AI stage — criteria synthesis, the diff review, the whole-repo pass, the deferred-work scan, and DEVASIGN.md guidance — accepts a custom prompt of up to <strong>2,000 characters</strong>. It's appended to the stage's system prompt as <em>maintainer instructions</em>: it steers what the stage pays attention to, but it can't override the stage's structured output contract or make the agent invent findings.
                        </p>
                        <h3 className="docs-subheading">Run GitHub Action</h3>
                        <p className="docs-paragraph">
                            Pick a workflow file from your repo and DevAsign dispatches it (via <code className="docs-code">workflow_dispatch</code>, on the PR's head branch) after the verdict posts — on every review, or only when the review <strong>passes</strong>, so you can chain deploy previews or extra test suites onto a green verdict. The workflow must declare a <code className="docs-code">workflow_dispatch</code> trigger and the DevAsign app needs Actions access on the repo; if either is missing, the step logs a note in the review timeline and never fails the review.
                        </p>
                    </section>

                    {/* ===== DEVASIGN.md GUIDANCE ===== */}
                    <section id="devasign-guidance" className="docs-section">
                        <h2 className="docs-heading">DEVASIGN.md guidance</h2>
                        <p className="docs-paragraph">
                            Drop a <code className="docs-code">DEVASIGN.md</code> into your repository to teach the review agent your team's own conventions — the same way you'd use an <code className="docs-code">AGENTS.md</code> or <code className="docs-code">CLAUDE.md</code>. There's <strong>no dashboard setup</strong>: commit the file and the next review picks it up. When no <code className="docs-code">DEVASIGN.md</code> governs the files a PR touches, this step is skipped entirely — it costs nothing.
                        </p>
                        <h3 className="docs-subheading">Hierarchical scope</h3>
                        <p className="docs-paragraph">
                            DevAsign reads a <code className="docs-code">DEVASIGN.md</code> at <em>every</em> level of your tree and scopes each one to its own directory. Rules <strong>compound down the tree</strong>:
                        </p>
                        <ul className="docs-unordered-list">
                            <li>The repo-root <code className="docs-code">DEVASIGN.md</code> governs every file.</li>
                            <li>A <code className="docs-code">frontend/DEVASIGN.md</code> governs only files under <code className="docs-code">frontend/</code>.</li>
                            <li>A changed file obeys every <code className="docs-code">DEVASIGN.md</code> on its path, root → leaf.</li>
                        </ul>
                        <p className="docs-paragraph">
                            The docs are read from the <strong>PR's head commit</strong>, so a PR that edits its own <code className="docs-code">DEVASIGN.md</code> is judged against the new text. To keep reviews bounded, DevAsign reads up to <strong>15</strong> files at <strong>8,000</strong> characters each.
                        </p>
                        <h3 className="docs-subheading">Findings are advisory nits</h3>
                        <p className="docs-paragraph">
                            The agent flags only what the diff <em>newly</em> introduces — pre-existing code that breaks a rule is left alone. Each finding lands as a <span className="docs-pill nit">nit</span>: it ships a copy-paste <a href="#multimodal-review" className="docs-link">fix prompt</a> but <strong>never blocks the merge</strong> (see <a href="#severity" className="docs-link">Severity &amp; verdict</a>). DevAsign is told to flag only rules a <code className="docs-code">DEVASIGN.md</code> actually states — it won't invent conventions.
                        </p>
                        <h3 className="docs-subheading">Docs stay honest (bidirectional)</h3>
                        <p className="docs-paragraph">
                            The check runs both ways. If the diff changes code such that a <code className="docs-code">DEVASIGN.md</code> statement is now outdated, DevAsign flags the <strong>doc</strong> for an update too — so your conventions don't silently drift from the code.
                        </p>
                        <h3 className="docs-subheading">Starter template</h3>
                        <p className="docs-paragraph">
                            Put broad rules in the root file and narrow, area-specific rules in a <code className="docs-code">DEVASIGN.md</code> inside the relevant subdirectory:
                        </p>
                        <pre className="docs-pre">{`# DEVASIGN.md

Conventions for this directory and everything under it. Newly introduced
violations are flagged as nits; they don't block the merge.

## Conventions
- State each rule as a single, checkable sentence.
- Prefer concrete, observable rules ("API calls go through \`src/api.ts\`") over
  subjective taste ("write clean code").

## Examples
- Error handling: wrap external calls and surface a typed error, never throw raw.
- Naming: React components are PascalCase; hooks start with \`use\`.`}</pre>
                        <p className="docs-paragraph">
                            On each review, DevAsign emits two advisory outputs, both scoped to the files the governing docs cover — convention <code className="docs-code">violations</code> and <code className="docs-code">docUpdates</code> (statements the diff makes outdated):
                        </p>
                        <CodeBlock lang="json" code={`{
  "violations": [
    {
      "path": "frontend/src/Button.tsx",
      "concern": "Rule: styling uses design tokens, but this adds color: '#fe891f' inline.",
      "fixPrompt": "Fix: Replace the inline hex with a design token ..."
    }
  ],
  "docUpdates": [
    {
      "path": "frontend/DEVASIGN.md",
      "concern": "Doc says the browser talks to the API only through src/api.ts, but this diff routes through src/client.ts.",
      "fixPrompt": "Fix: Update the convention to point at the new client path ..."
    }
  ],
  "summary": "1 convention nit, 1 doc to update."
}`} />
                        <div className="docs-callout">
                            <strong>Writing good rules:</strong> state each as a single, checkable sentence, and favor concrete, observable rules (<em>"API calls go through <code className="docs-code">src/api.ts</code>"</em>) over subjective taste (<em>"write clean code"</em>). Findings surface in the verdict comment under a dedicated <strong>DEVASIGN.md</strong> section, and the stage can be toggled or steered per repo in the <a href="#workflow" className="docs-link">review workflow</a>.
                        </div>
                    </section>

                    {/* ===== SEVERITY ===== */}
                    <section id="severity" className="docs-section">
                        <h2 className="docs-heading">Severity &amp; verdict</h2>
                        <p className="docs-paragraph">
                            Findings carry a severity that determines whether they affect the verdict. How the verdict lands on GitHub depends on the repo's <a href="#workflow" className="docs-link">verdict mode</a>:
                        </p>
                        <ul className="docs-unordered-list">
                            <li><strong>Blocking</strong> (default) — a failing review concludes the Check Run as <code className="docs-code">action_required</code> and withdraws DevAsign's earlier approval, so if your branch protection requires the check or an approval, the merge gate stays honest. DevAsign itself never submits a <code className="docs-code">REQUEST_CHANGES</code> review.</li>
                            <li><strong>Comment-only</strong> (advisory) — the same verdict posts as a plain comment, earlier approvals are left standing, and the merge button is never in the way.</li>
                        </ul>
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
                                    <tr>
                                        <td><span className="docs-pill nit">nit</span></td>
                                        <td>No</td>
                                        <td>Advisory only; never gates the merge — e.g. <a href="#devasign-guidance" className="docs-link">DEVASIGN.md</a> convention nits.</td>
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
                            DevAsign's whole conversation footprint on a PR is <strong>one self-updating comment</strong> plus a Check Run. When a run starts it posts a <em>"PR Review In Progress"</em> comment; when the run finishes it edits that same comment into the full verdict. It's <strong>one comment per commit</strong>: a rerun on the same commit resets the existing comment back to "in progress" and edits it again, while a new push gets a fresh comment. If a run errors, the comment becomes a failure notice (with an auto-retry on your next push) — it never sticks on "in progress". All comment copy is emoji-free.
                        </p>
                        <p className="docs-paragraph">
                            The verdict comment is structured to be scannable, leading with what needs attention:
                        </p>
                        <ul className="docs-unordered-list">
                            <li><strong>End goal</strong>, then <strong>Previously met — now broken</strong>: criteria an earlier commit satisfied that a later change regressed, each with what broke.</li>
                            <li><strong>Acceptance criteria not met</strong>, each with a "why it failed" line. Criteria that pass collapse into a count header and an expandable list, so re-reviews don't re-litigate what already passed.</li>
                            <li><strong>Deferred / incomplete work</strong> the diff conceded.</li>
                            <li><strong>Suggested changes</strong> with minimal code examples and per-item fix prompts, plus <strong>line notes</strong> pinned to <code className="docs-code">file:line</code>.</li>
                            <li><strong>Repo-wide concerns</strong> from the holistic pass and <strong>DEVASIGN.md</strong> nits.</li>
                            <li>A collapsible <strong>"one prompt to fix all of this"</strong> for your AI coding agent.</li>
                        </ul>
                        <p className="docs-paragraph">
                            Line notes are pre-filtered against the file paths actually present in the diff, so a bad path from the model can't put junk in the comment. Alongside the comment, a <strong>Check Run</strong> named <code className="docs-code">DevAsign · End goal</code> is keyed to the head commit — concluding <code className="docs-code">success</code> or <code className="docs-code">action_required</code> — and refreshes on every push without adding conversation noise. The formal GitHub review actions are reduced to invisible timeline signals:
                        </p>
                        <div className="docs-table-wrapper">
                            <table className="docs-table">
                                <thead>
                                    <tr>
                                        <th>Outcome</th>
                                        <th>What lands on GitHub</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>All acceptance criteria met (spec'd PR)</td>
                                        <td>A <strong>bodyless approval</strong> — the timeline reads "approved these changes" with no extra comment block.</td>
                                    </tr>
                                    <tr>
                                        <td>Any criterion unmet, or a blocker found</td>
                                        <td>The Check Run flips to <code className="docs-code">action_required</code> and DevAsign <strong>withdraws its earlier approval</strong>, so a stale green review can't keep the merge unlocked. No <code className="docs-code">REQUEST_CHANGES</code> review is submitted — GitHub would force it to carry a duplicate comment.</td>
                                    </tr>
                                    <tr>
                                        <td>Clean pass, but no spec to check against</td>
                                        <td>The verdict comment alone, plus a one-time invite to add an end goal.</td>
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
                            Reviews are conversational. Reply on the PR — as a comment, a formal review, or an inline review comment — and DevAsign ingests it and decides whether it changes what "done" means. You can reply with any of:
                        </p>
                        <ul className="docs-unordered-list">
                            <li><strong>Text</strong> — a description of the intended behaviour and acceptance conditions.</li>
                            <li><strong>A Loom / YouTube / Vimeo link</strong> — DevAsign watches it and extracts acceptance signals.</li>
                            <li><strong>A screenshot + description</strong> — show the expected result and describe it.</li>
                        </ul>
                        <p className="docs-paragraph">
                            Feedback is <strong>additive</strong>: new requirements are appended to the criteria list — never replacing it — and criteria earlier commits already satisfied keep their verdicts, so moving the bar doesn't re-fail finished work.
                        </p>
                        <p className="docs-paragraph">
                            When feedback does move the goal, DevAsign doesn't burn a full re-review on a diff it just judged. It posts a concrete <strong>implementation guide</strong> for the new requirement, flips the review to <em>changes requested</em> (refreshing the Check Run and, in blocking mode, withdrawing its earlier approval), and runs the real re-review on your <strong>next push</strong> — once there's actually new code to judge.
                        </p>
                        <p className="docs-paragraph">
                            Pure acknowledgements ("lgtm", "ship it") are recognized and don't move the goal. A mid-review Loom flagging a new bug gets a discrete fix comment without disturbing the verdict. Bot and self-authored comments are filtered out so the agent never reacts to its own output.
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
                            DevAsign routes each task to the model that fits it, and tiers the reasoning model by plan.
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
                                        <td>The reasoning passes on Pro and Max — criteria synthesis, diff review, the whole-repo holistic pass, deferred-work judgment, and DEVASIGN.md guidance.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Claude Haiku</strong></td>
                                        <td>The same reasoning passes on the Free plan, plus per-file repository-index summaries on every plan — fast and high-volume.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Gemini 2.5 Pro</strong></td>
                                        <td>Watching and summarizing video (Loom / YouTube / Vimeo) and vision tasks.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="docs-paragraph">
                            The review model follows the repo owner's plan: <strong>Free</strong> reviews run end-to-end on Claude Haiku, while <strong>Pro</strong> and <strong>Max</strong> run the frontier reasoning model. System prompts are sent with <strong>prompt caching</strong> enabled, so the reused instruction blocks don't re-bill on every pass.
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
                            <li><strong>Persistence</strong> — reviews, criteria, the index, per-repo workflow configs, and an append-only review-log timeline are stored in Postgres.</li>
                        </ul>
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
