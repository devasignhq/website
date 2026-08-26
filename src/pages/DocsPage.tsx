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
            { id: 'holistic-review', title: 'Codebase-aware review' },
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
        label: 'BOUNTY AUTOMATION',
        items: [
            { id: 'bounty-overview', title: 'Bounty overview' },
            { id: 'first-bounty', title: 'Your first bounty' },
            { id: 'bounties', title: 'Bounties' },
            { id: 'submissions', title: 'Submissions' },
        ],
    },
    {
        label: 'PAYMENTS & WALLET',
        items: [
            { id: 'escrow', title: 'Soroban escrow' },
            { id: 'wallet', title: 'Payout wallet' },
            { id: 'withdrawals', title: 'Deadlines & disputes' },
        ],
    },
    {
        label: 'UNDER THE HOOD',
        items: [
            { id: 'models', title: 'Models & plans' },
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
                        <h1 className="docs-title">DevAsign Documentation</h1>
                        <p className="docs-paragraph">
                            DevAsign is a <strong>multimodal AI code review agent</strong> that reviews every pull request against what was actually asked, not just the diff in isolation. It pulls context from the ticket, linked issues, Slack/Linear/Discord threads, Figma frames, Loom walkthroughs, screenshots, and PDFs, then synthesizes a concrete End goal and checks the PR against it.
                        </p>
                        <p className="docs-paragraph">
                            Every repository also gets its own editable <strong><a href="#workflow" className="docs-link">review workflow</a></strong>: toggle stages, steer each AI step with your own instructions, choose blocking or comment-only verdicts, and even dispatch a GitHub Action when a review finishes. On top of review, DevAsign also automates <strong><a href="#bounty-overview" className="docs-link">bounty payouts</a></strong>: put a price on a GitHub issue, and the payout settles from a Soroban escrow contract the moment you approve the work.
                        </p>
                        <div className="docs-callout">
                            <strong>Why it's different:</strong> traditional review bots grade style and surface lint. DevAsign judges the change against <em>intent</em> (the acceptance criteria distilled from the ticket and everything attached to it) and flags regressions across the wider codebase that the diff alone can't reveal.
                        </div>
                        <img
                            src={agentDashboard}
                            alt="DevAsign Agents dashboard: review queue, review log, and the synthesized end goal with acceptance criteria"
                            width={1889}
                            height={1020}
                            decoding="async"
                            style={{ width: '100%', height: 'auto', marginTop: '2rem' }}
                        />
                    </section>

                    {/* ===== HOW A REVIEW WORKS ===== */}
                    <section id="how-it-works" className="docs-section">
                        <h2 className="docs-heading">How a review works</h2>
                        <p className="docs-paragraph">
                            A PR event lands, DevAsign enqueues a job, and a worker runs the full pipeline before posting results back. Reviews never run inline in the webhook handler. Long multimodal and transcription work runs on dedicated workers, so it isn't bound by function timeouts.
                        </p>
                        <ol className="docs-stage-list">
                            <li>
                                <span className="stage-title">Trigger &amp; enqueue</span>
                                <span className="stage-desc">A GitHub webhook (HMAC-verified) applies your repo's trigger policy, materializes a review record, and pushes a job onto the queue. The moment a worker picks it up, a "review in progress" comment lands on the PR.</span>
                            </li>
                            <li>
                                <span className="stage-title">Context ingestion</span>
                                <span className="stage-desc">Gather everything the PR should be judged against: diff, linked issues, attached videos, designs, and docs.</span>
                            </li>
                            <li>
                                <span className="stage-title">End-goal synthesis</span>
                                <span className="stage-desc">Distill that context into a one-sentence end goal plus a list of independently checkable acceptance criteria.</span>
                            </li>
                            <li>
                                <span className="stage-title">Review</span>
                                <span className="stage-desc">Judge the diff against every criterion and, in the same pass, look for regressions and security flaws in the surrounding codebase, self-admitted punts, and DEVASIGN.md convention breaks, so each finding is weighed with all the others in view.</span>
                            </li>
                            <li>
                                <span className="stage-title">Second-pass verification</span>
                                <span className="stage-desc">A separate adversarial pass re-examines the draft: it drops findings it can't substantiate, downgrades ones it can't justify at the stated severity, and adds anything the first pass missed. The timeline records what changed.</span>
                            </li>
                            <li>
                                <span className="stage-title">Output</span>
                                <span className="stage-desc">Edit the progress comment into the verdict, refresh the Check Run, approve (or withdraw a stale approval), and broadcast to Slack/Discord.</span>
                            </li>
                            <li>
                                <span className="stage-title">Run GitHub Action <em>(optional)</em></span>
                                <span className="stage-desc">Dispatch a GitHub Actions workflow you chose, on every verdict or only when the review passes.</span>
                            </li>
                        </ol>
                        <p className="docs-paragraph">
                            Every stage appends to a per-PR <strong>review log</strong>: an append-only timeline you can replay in the dashboard to see exactly what the agent ingested, synthesized, and decided. The optional checks (codebase-aware analysis, deferred-work, DEVASIGN.md guidance, the Action step) can be toggled and steered per repository in the <a href="#workflow" className="docs-link">review workflow</a>.
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
                            This is policy, not hard-coded. On <strong>Personal</strong> and <strong>Team</strong>, the repo's <a href="#workflow" className="docs-link">review workflow</a> controls the entry triggers: turn off re-review-on-push, skip draft PRs, or skip bot-authored PRs (Dependabot, Renovate, GitHub Apps). A draft marked "ready for review" is still reviewed; the skip applies only while it's a draft.
                        </p>
                        <p className="docs-paragraph">
                            On the <strong>Free</strong> plan the entry triggers are fixed: a PR is reviewed when it's opened, reopened, or marked ready for review, and <strong>pushes don't re-run the review</strong>. You can still start one by hand at any time (below), and upgrading turns re-review-on-push on.
                        </p>
                        <h3 className="docs-subheading">Manual</h3>
                        <p className="docs-paragraph">
                            Comment the single word <code className="docs-code">review</code> on any open PR. DevAsign resolves the PR, materializes a review record, and runs the full criteria pipeline, useful for PRs opened before the app was installed.
                        </p>
                        <p className="docs-paragraph">
                            Reviewing a PR for the first time spends one of your plan's monthly pull requests; re-reviews of that same PR don't. Each PR carries its own window of <strong>6 re-reviews a month</strong>, enough for a normal cycle of pushes. Past that, a paid plan draws on its overage credits to keep going; on Free, further runs on that PR wait until the next month. Opening a new PR always starts fresh.
                        </p>
                        <div className="docs-callout">
                            <strong>If a PR closes mid-review:</strong> DevAsign stops the run at the next checkpoint instead of spending the rest of it, and rewrites its comment to say the review was abandoned because the PR is no longer open. Reopening the PR queues a fresh review.
                        </div>
                        <div className="docs-callout">
                            <strong>On merge:</strong> when a PR is merged, DevAsign refreshes its index of the files that changed (see <a href="#repo-index" className="docs-link">Repository index</a>), keeping codebase-aware reviews accurate as the repository evolves.
                        </div>
                    </section>

                    {/* ===== INSTALLATION ===== */}
                    <section id="installation" className="docs-section">
                        <h2 className="docs-heading">Installation</h2>
                        <p className="docs-paragraph">
                            Sign up on <a href="https://app.devasign.com/authenticate/account" target="_blank" rel="noopener noreferrer" className="docs-link">DevAsign</a> with GitHub and install the app on a repository. Public repositories are reviewed on every plan; <strong>private repositories require Personal or Team</strong>. Plans meter <em>unique PRs per month</em>, so re-reviewing the same PR after a push doesn't spend another PR from your allowance. See <a href="/pricing" className="docs-link">Pricing</a> for the caps.
                        </p>
                        <ol className="docs-ordered-list">
                            <li>Sign in with GitHub and install the DevAsign GitHub App on your repo.</li>
                            <li>DevAsign indexes the repository in the background, so reviews can reason about code beyond the diff.</li>
                            <li>Open any existing PR and comment <code className="docs-code">review</code> to kick off the first review.</li>
                            <li>From then on, every new PR is reviewed automatically.</li>
                        </ol>
                        <img
                            src={onboardingScreenshot}
                            alt="DevAsign onboarding: step 1, install the DevAsign GitHub App and choose which repositories it can access"
                            width={2022}
                            height={725}
                            loading="lazy"
                            decoding="async"
                            style={{ width: '100%', height: 'auto', marginTop: '2rem' }}
                        />
                    </section>

                    {/* ===== GITHUB PERMISSIONS ===== */}
                    <section id="permissions" className="docs-section">
                        <h2 className="docs-heading">GitHub permissions</h2>
                        <p className="docs-paragraph">
                            When you install it, GitHub shows you the exact scopes below, and the app requests nothing else. It never sees your GitHub password, and rather than hold a long-lived key it exchanges the installation for a <strong>short-lived token</strong>, scoped to the repositories you picked, on each request.
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
                                        <td>Read source files to build the <a href="#repo-index" className="docs-link">repository index</a> and run the <a href="#holistic-review" className="docs-link">codebase-aware review</a>. Read-only: DevAsign never pushes commits or edits your code.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Issues</strong></td>
                                        <td><span className="docs-pill write">read · write</span></td>
                                        <td>Read linked issues (<code className="docs-code">closes #N</code>) and PR conversation comments: the ticket context a review is judged against, plus the manual <code className="docs-code">review</code> trigger and maintainer replies. Write is used by <a href="#bounty-overview" className="docs-link">bounty automation</a> to post the bounty comment on an issue and apply its status label.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Actions</strong></td>
                                        <td><span className="docs-pill write">read · write</span></td>
                                        <td>List the workflows in your repository so you can pick one, and dispatch it after a review when you enable <a href="#workflow" className="docs-link">Run GitHub Action</a>. DevAsign only triggers workflows you selected; it never edits them.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Metadata</strong></td>
                                        <td><span className="docs-pill read">read</span></td>
                                        <td>Mandatory, read-only repository metadata (branches and basic repo info) that every GitHub App receives.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Members</strong> <span className="mute">(organization)</span></td>
                                        <td><span className="docs-pill read">read</span></td>
                                        <td>Confirm a teammate genuinely belongs to your GitHub organization before linking their account to the organization's DevAsign installation.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="docs-subheading">What we can't do</h3>
                        <ul className="docs-unordered-list">
                            <li><strong>Push, merge, or modify code</strong>: Contents access is read-only, so DevAsign cannot commit, force-push, switch branches, or alter your files.</li>
                            <li><strong>Touch repository settings</strong>: no access to branch-protection rules, webhooks, secrets, deploy keys, or collaborator management. DevAsign can dispatch a GitHub Actions workflow you picked, but cannot create, edit, or delete one.</li>
                            <li><strong>Block a merge</strong>: DevAsign never sets a required, merge-gating status itself; its Check Run and approval only gate a merge if <em>you</em> choose to require them in branch protection (see <a href="#severity" className="docs-link">verdict modes</a>).</li>
                            <li><strong>See repos you didn't pick</strong>: the app only ever sees the specific repositories you select at install time, and you can add or remove them whenever you like.</li>
                            <li><strong>Use your code to train models</strong>: your source is read to produce a review and nothing else. The <a href="#repo-index" className="docs-link">repository index</a> stores excerpts of your code so reviews can cite them, scoped to your installation alone and deleted when you uninstall.</li>
                        </ul>

                        <div className="docs-callout">
                            <strong>Revoke anytime:</strong> manage or uninstall DevAsign from <em>GitHub → Settings → Applications → Installed GitHub Apps</em>. Removing it revokes all access immediately.
                        </div>
                    </section>

                    {/* ===== LINEAR INTEGRATION ===== */}
                    <section id="linear" className="docs-section">
                        <h2 className="docs-heading">Linear integration</h2>
                        <p className="docs-paragraph">
                            Connect a Linear workspace and DevAsign judges each PR against the <strong>ticket it implements</strong>, pulling the issue into <a href="#context-ingestion" className="docs-link">context ingestion</a>, then reports the verdict back on that issue. It's how the agent learns <em>what was asked</em> when the spec lives in Linear rather than the PR description.
                        </p>
                        <h3 className="docs-subheading">Connecting</h3>
                        <p className="docs-paragraph">
                            In the dashboard, open <strong>Settings → Integrations → Linear</strong> and click <strong>Connect</strong>. A popup hands you to Linear's OAuth screen to authorize your workspace; approve it and the workspace appears in your integration list. There are <strong>no tokens or API keys to paste</strong>, re-connecting just refreshes the authorization, and one Linear workspace connects per account. The Linear integration is a <strong>Personal / Team</strong> feature.
                        </p>
                        <img
                            src={linearWorkflow}
                            alt="DevAsign Linear integration configuration"
                            width={1889}
                            height={660}
                            loading="lazy"
                            decoding="async"
                            style={{ width: '100%', height: 'auto' }}
                        />
                        <h3 className="docs-subheading">Permissions you grant</h3>
                        <p className="docs-paragraph">
                            Linear shows you these scopes on the authorization screen, and DevAsign requests nothing more:
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
                                        <td>Ingest the ticket a PR implements: its description, comments, sub-issues, labels, parent and project, plus attachments (PDFs and images) and any embedded Loom / YouTube / Vimeo, all as the context a review is judged against.</td>
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
                            <li><strong>Speak as you</strong>: its comment is attributed to the DevAsign app, not your user account.</li>
                            <li><strong>Change your tickets</strong>: DevAsign never creates, reassigns, closes, or moves the status of an issue; its only write is that single notification comment.</li>
                            <li><strong>See more than it resolves</strong>: although the Linear OAuth grant is workspace-wide, DevAsign reads only the issues it actually links a PR to.</li>
                        </ul>
                        <h3 className="docs-subheading">What it does</h3>
                        <ol className="docs-ordered-list">
                            <li><strong>Links PRs to tickets.</strong> DevAsign matches a PR to a Linear issue by an explicit reference, an <code className="docs-code">ENG-123</code> key in the PR body or branch name (including the <code className="docs-code">Fixes ENG-123</code> line Linear's own GitHub integration injects). Failing that, it falls back to a conservative match of the PR title and description against your issues.</li>
                            <li><strong>Pulls the ticket into the review.</strong> The linked issue's description, discussion, attachments, and embedded videos feed <a href="#end-goal" className="docs-link">end-goal &amp; criteria</a> synthesis, so the PR is measured against what the ticket actually asked for.</li>
                            <li><strong>Seeds acceptance criteria.</strong> When a ticket is opened or updated, DevAsign synthesizes criteria from it ahead of time and caches them; a PR that later links to that ticket reuses those criteria instead of re-deriving them.</li>
                            <li><strong>Reports back on the issue.</strong> Once the linked PR is reviewed, DevAsign posts a short comment on the Linear issue saying it reviewed the PR and <em>passed</em> or <em>requested changes</em>, with a link to it. The comment posts once per commit, so re-reviews of the same push don't repeat it.</li>
                        </ol>
                        <div className="docs-callout">
                            <strong>The PR stays the source of truth:</strong> the Linear comment is a pointer. The full verdict, with per-criterion evidence, inline comments and fix prompts, lives on the GitHub PR.
                        </div>
                    </section>

                    {/* ===== CONTEXT INGESTION ===== */}
                    <section id="context-ingestion" className="docs-section">
                        <h2 className="docs-heading">Context ingestion</h2>
                        <p className="docs-paragraph">
                            The first stage gathers every source the PR should be measured against. This is the multimodal layer: DevAsign reads code <em>and</em> watches video, parses designs, and reads documents.
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
                                        <td>The linked issue's description, comments, sub-issues, and attachments, plus any embedded video. See <a href="#linear" className="docs-link">Linear integration</a>.</td>
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
                                        <td>Transcript and a visual walkthrough, summarized into acceptance signals (see below).</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Screenshots / PDF</strong></td>
                                        <td>Images are read by a vision-capable model; PDFs are parsed to text.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Maintainer messages</strong></td>
                                        <td>Directives and notes sent from the dashboard's <strong>Steer review</strong> box, plus any video or image they link. See <a href="#steering" className="docs-link">Steering a review</a>.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>PR state</strong></td>
                                        <td>Mergeability, merge conflicts, and the status of your CI checks on the head commit, so the review can tell you a PR is broken or unmergeable rather than reviewing it in a vacuum.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="docs-subheading">Video understanding</h3>
                        <p className="docs-paragraph">
                            DevAsign scans the PR body, every linked issue, and task attachments for video URLs and de-duplicates them, then watches each one. Up to five videos are summarized per PR. Every video becomes a structured summary the review can reason over: what the recording demonstrates, the key moments it walks through, and the <strong>acceptance signals</strong> a reviewer should confirm the PR actually implements. Where a host can't be watched directly, DevAsign says so rather than inventing detail.
                        </p>

                        <h3 id="steering" className="docs-subheading">Steering a review</h3>
                        <p className="docs-paragraph">
                            The <strong>Steer review</strong> box under the review log sends the agent a message in one of two modes. <strong>Set intent</strong> states what the PR must do in your own words: it becomes the top of the intent hierarchy, above the linked issues, and the acceptance criteria are regenerated from it before the review re-runs. <strong>Add context</strong> points the agent at evidence, such as a test that already covers a criterion, a Loom, a design doc, or a CI flake it should discount, and re-runs the review with the criteria held fixed. Both persist on the pull request across pushes, both use one run, and the verdict comment on GitHub discloses that maintainer input shaped it.
                        </p>
                        <p className="docs-paragraph">
                            Every acceptance criterion carries a source tag, <em>issue</em>, <em>PR body</em>, <em>maintainer</em> or <em>standing</em>, in the dashboard and in the review prompt. The agent knows when it is grading the author against their own description and weighs the verdict accordingly.
                        </p>
                    </section>

                    {/* ===== END GOAL ===== */}
                    <section id="end-goal" className="docs-section">
                        <h2 className="docs-heading">End goal &amp; acceptance criteria</h2>
                        <p className="docs-paragraph">
                            A single LLM pass distills all that raw context into a one-sentence <strong>End goal</strong> and a list of independently checkable <strong>acceptance criteria</strong>. The result is a structured object you can edit, not a black box. It's persisted on the task and shown in the dashboard, so you can correct it before or during a review.
                        </p>
                        <CodeBlock lang="json" code={`{
  "endGoal": "Team members can be invited by email and land in the right workspace role.",
  "criteria": [
    { "id": "c1", "text": "An invite email is sent to a valid, non-member address" },
    { "id": "c2", "text": "Re-inviting an existing member returns a clear error, not a duplicate" },
    { "id": "c3", "text": "The accepted invite grants exactly the role it was sent for" }
  ]
}`} />
                        <h3 className="docs-subheading">PRs with no spec</h3>
                        <p className="docs-paragraph">
                            When a PR has no linked issue, attachment, or video, DevAsign does <strong>not</strong> invent requirements. Synthesis is instructed to derive criteria only from explicit, checkable claims the PR's own title and description make. If there are none, it returns <strong>zero criteria</strong> with a neutral end goal, then reviews the diff for correctness only.
                        </p>
                        <h3 className="docs-subheading">Editing the goal</h3>
                        <p className="docs-paragraph">
                            The end goal and its criteria are yours to correct. Edit them in the dashboard and the next run judges the PR against your version. It's the fastest way to steer a review that misread the intent. Attached walkthroughs feed the same synthesis, so a video that demonstrates a concrete requirement shapes the criteria directly.
                        </p>
                    </section>

                    {/* ===== MULTIMODAL REVIEW ===== */}
                    <section id="multimodal-review" className="docs-section">
                        <h2 className="docs-heading">Multimodal review</h2>
                        <p className="docs-paragraph">
                            The review model evaluates the diff against each criterion and emits a structured verdict: <code className="docs-code">passed</code> or <code className="docs-code">changes_requested</code>, a per-criterion checklist with <strong>evidence quoted from the diff</strong>, line notes pinned to <code className="docs-code">file:line</code>, and a fix suggestion for every unmet criterion. It is told to never manufacture issues to appear thorough, and a sound diff with no spec returns a short positive summary.
                        </p>
                        <h3 className="docs-subheading">Copy-paste fix prompts</h3>
                        <p className="docs-paragraph">
                            Every suggestion (and every blocking finding) ships a self-contained <strong>fix prompt</strong> you can paste straight into an external AI coding agent such as Cursor, Claude Code, or Codex. It quotes the relevant diff hunk verbatim so the agent can act without repository access:
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
                            When a PR has multiple problems, DevAsign also composes a single <strong>consolidated prompt</strong> that bundles every failed criterion and every review finding, from regressions and security warnings to deferred work and DEVASIGN.md nits, whatever the severity. One paste to fix the whole PR.
                        </p>
                        <h3 className="docs-subheading">Second-pass verification</h3>
                        <p className="docs-paragraph">
                            False positives cost you more time than they save, so nothing is published on the first pass. A second, adversarial pass re-examines the draft and tries to knock findings down: anything it can't substantiate against the actual code is <strong>dropped</strong>, anything real but overstated is <strong>downgraded</strong>, and anything the first pass missed is <strong>added</strong>. Only what survives reaches your PR.
                        </p>
                        <p className="docs-paragraph">
                            The review log records the counts for every run, so you can see how much the verification pass changed. If it can't complete, DevAsign publishes the unverified draft rather than dropping the review.
                        </p>
                    </section>

                    {/* ===== HOLISTIC REVIEW ===== */}
                    <section id="holistic-review" className="docs-section">
                        <h2 className="docs-heading">Codebase-aware review</h2>
                        <p className="docs-paragraph">
                            Acceptance criteria capture intent, but a diff can satisfy every criterion and still break the rest of the codebase. So DevAsign doesn't review the diff alone. Using the <a href="#repo-index" className="docs-link">repository index</a>, it pulls in the code around the change: the definitions the diff calls, the callers that depend on it, and the surrounding scope. The change is judged in that context.
                        </p>
                        <p className="docs-paragraph">
                            That surfaces three things a diff-only reviewer can't see:
                        </p>
                        <ul className="docs-unordered-list">
                            <li><strong>Regressions and critical errors</strong>: the change is correct in isolation but breaks a caller, an invariant, or an existing feature.</li>
                            <li><strong>Security flaws the change introduces</strong>, flagged <span className="docs-pill blocker">blocker</span> when they would expose data or corrupt state.</li>
                            <li><strong>Pre-existing vulnerabilities</strong> in the code the PR touches or depends on, reported as advisory context, never held against the author, since the PR didn't introduce them.</li>
                        </ul>
                        <p className="docs-paragraph">
                            Findings also record <em>which tree</em> they describe: your PR's code as it stands, or what happens once the base branch is merged in. A conflict that only appears after merging is a real problem, and DevAsign labels it as one rather than reporting it against code you can see.
                        </p>
                        <p className="docs-paragraph">
                            A single blocker flips the verdict to <em>changes requested</em>. Reviews still run before a repository has finished indexing; the analysis is just limited to the diff until the index is ready. This check can be switched off per repo in the <a href="#workflow" className="docs-link">review workflow</a>.
                        </p>
                    </section>

                    {/* ===== DEFERRED WORK ===== */}
                    <section id="deferred-work" className="docs-section">
                        <h2 className="docs-heading">Deferred-work detection</h2>
                        <p className="docs-paragraph">
                            A coding agent will sometimes agree to a design, then quietly punt part of it during implementation, burying the admission in a code comment instead of telling you. DevAsign catches those self-admissions in the PR's <strong>own added lines</strong>.
                        </p>
                        <p className="docs-paragraph">
                            DevAsign looks for the markers these admissions hide behind: <code className="docs-code">TODO</code>, <code className="docs-code">FIXME</code>, <code className="docs-code">NotImplemented</code>, <code className="docs-code">stub</code>, "for now", "deferred to a follow-up". It then judges which are genuine scope cuts and which are benign matches, like an unrelated pre-existing TODO or a marker inside a log string.
                        </p>
                        <p className="docs-paragraph">
                            Each genuine finding's explanation leads with <code className="docs-code">Contradicts &lt;criterion&gt;</code> when the punt undercuts something the PR promised, or <code className="docs-code">Incidental</code> when it doesn't. These findings are <strong>advisory</strong>. They're always <span className="docs-pill warn">warn</span> and never gate the merge, so you see the punt on time without being blocked by it.
                        </p>
                    </section>

                    {/* ===== REVIEW WORKFLOW ===== */}
                    <section id="workflow" className="docs-section">
                        <h2 className="docs-heading">Review workflow</h2>
                        <p className="docs-paragraph">
                            Every repository carries its own <strong>review workflow</strong>, edited on the dashboard's <strong>Workflow</strong> screen: a visual, node-based view of the pipeline with a repository rail, a canvas showing every stage in run order, and a detail panel for the selected stage. The pipeline is a fixed chain: you don't add or remove nodes, you switch the optional stages on or off and steer each AI stage with your own instructions. A repo you never touch reviews exactly like stock DevAsign.
                        </p>
                        <img
                            src={agentWorkflow}
                            alt="DevAsign code review agent workflow configuration"
                            width={1889}
                            height={1020}
                            loading="lazy"
                            decoding="async"
                            style={{ width: '100%', height: 'auto' }}
                        />
                        <h3 className="docs-subheading">Stage toggles</h3>
                        <p className="docs-paragraph">
                            The optional checks (<a href="#holistic-review" className="docs-link">codebase-aware review</a>, the <a href="#deferred-work" className="docs-link">deferred-work scan</a>, and <a href="#devasign-guidance" className="docs-link">DEVASIGN.md guidance</a>) can each be switched off per repository. Context ingestion, criteria synthesis, the review itself, the verification pass, and the verdict always run. <strong>Stage toggles are available on every plan.</strong>
                        </p>
                        <h3 className="docs-subheading">What you can configure</h3>
                        <p className="docs-paragraph">
                            Select any node on the canvas to open its detail panel. Most of the pipeline is configurable on every plan; the two controls that change <em>when</em> DevAsign runs, and what it triggers afterwards, are Personal/Team.
                        </p>
                        <div className="docs-table-wrapper">
                            <table className="docs-table">
                                <thead>
                                    <tr>
                                        <th>Control</th>
                                        <th>What it does</th>
                                        <th>Plan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Stage toggles</strong></td>
                                        <td>Switch the codebase-aware review, deferred-work scan, and DEVASIGN.md guidance on or off.</td>
                                        <td>All plans</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Verdict mode</strong></td>
                                        <td>Blocking (default) or comment-only. See <a href="#severity" className="docs-link">Severity &amp; verdict</a>.</td>
                                        <td>All plans</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Stage instructions</strong></td>
                                        <td>Your own standing instructions for each AI stage.</td>
                                        <td>All plans</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Entry triggers</strong></td>
                                        <td>Re-review on every push, skip draft PRs, skip bot-authored PRs. See <a href="#triggering" className="docs-link">Triggering reviews</a>.</td>
                                        <td><span className="docs-pill write">Personal / Team</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Run GitHub Action</strong></td>
                                        <td>Dispatch a workflow once the review finishes.</td>
                                        <td><span className="docs-pill write">Personal / Team</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="docs-paragraph">
                            Edits save as you make them and apply from the next review onward. A control your plan doesn't cover is shown in its enforced state and locked instead of hidden, so you can always see what a repository is actually running. Your configuration is kept if a plan lapses: DevAsign falls back to the free behaviour while you're downgraded, and restores your settings when you upgrade again.
                        </p>
                        <h3 className="docs-subheading">Stage instructions</h3>
                        <p className="docs-paragraph">
                            Each AI stage (criteria synthesis, the diff review, the codebase-aware pass, the deferred-work scan, and DEVASIGN.md guidance) accepts your own instructions, up to <strong>2,000 characters</strong> each. They're carried into the review as <em>maintainer instructions</em>: they steer what a stage pays attention to, but they can't make the agent invent findings or skip its checks.
                        </p>
                        <p className="docs-paragraph">
                            Use them for the things a reviewer on your team would already know: that a service is latency-critical and added round-trips should be flagged, or that you're mid-migration off a legacy client and its use shouldn't be reported yet.
                        </p>
                        <h3 className="docs-subheading">Run GitHub Action</h3>
                        <p className="docs-paragraph">
                            Pick a workflow file from your repo and DevAsign dispatches it (via <code className="docs-code">workflow_dispatch</code>, on the PR's head branch) after the verdict posts, either on every review or only when the review <strong>passes</strong>, so you can chain deploy previews or extra test suites onto a green verdict. The workflow must declare a <code className="docs-code">workflow_dispatch</code> trigger and the DevAsign app needs Actions access on the repo; if either is missing, the step logs a note in the review timeline and never fails the review.
                        </p>
                    </section>

                    {/* ===== DEVASIGN.md GUIDANCE ===== */}
                    <section id="devasign-guidance" className="docs-section">
                        <h2 className="docs-heading">DEVASIGN.md guidance</h2>
                        <p className="docs-paragraph">
                            Drop a <code className="docs-code">DEVASIGN.md</code> into your repository to teach the review agent your team's own conventions, the same way you'd use an <code className="docs-code">AGENTS.md</code> or <code className="docs-code">CLAUDE.md</code>. There's <strong>no dashboard setup</strong>: commit the file and the next review picks it up. When no <code className="docs-code">DEVASIGN.md</code> governs the files a PR touches, this step is skipped entirely and costs nothing.
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
                            The agent flags only what the diff <em>newly</em> introduces; pre-existing code that breaks a rule is left alone. Each finding lands as a <span className="docs-pill nit">nit</span>: it ships a copy-paste <a href="#multimodal-review" className="docs-link">fix prompt</a> but <strong>never blocks the merge</strong> (see <a href="#severity" className="docs-link">Severity &amp; verdict</a>). DevAsign is told to flag only rules a <code className="docs-code">DEVASIGN.md</code> actually states, so it won't invent conventions.
                        </p>
                        <h3 className="docs-subheading">Docs stay honest (bidirectional)</h3>
                        <p className="docs-paragraph">
                            The check runs both ways. If the diff changes code such that a <code className="docs-code">DEVASIGN.md</code> statement is now outdated, DevAsign flags the <strong>doc</strong> for an update too, so your conventions don't silently drift from the code.
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
                            On each review, DevAsign emits two advisory outputs, both scoped to the files the governing docs cover: convention <code className="docs-code">violations</code> and <code className="docs-code">docUpdates</code> (statements the diff makes outdated):
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
                            <li><strong>Blocking</strong> (default): a failing review concludes the Check Run as <code className="docs-code">action_required</code> and withdraws DevAsign's earlier approval, so if your branch protection requires the check or an approval, the merge gate stays honest. DevAsign itself never submits a <code className="docs-code">REQUEST_CHANGES</code> review.</li>
                            <li><strong>Comment-only</strong> (advisory): the same verdict posts as a plain comment, earlier approvals are left standing, and the merge button is never in the way.</li>
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
                                        <td>Advisory only; never gates the merge. For example, <a href="#devasign-guidance" className="docs-link">DEVASIGN.md</a> convention nits.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="docs-paragraph">
                            Severities are assigned during the review and then re-tested by the <a href="#multimodal-review" className="docs-link">verification pass</a>, which can downgrade a finding it can't justify at the stated severity or drop it entirely. A blocker that reaches your PR has survived that second look.
                        </p>
                        <div className="docs-callout">
                            <strong>Verdict rule:</strong> a PR passes only when <em>every</em> acceptance criterion is met <em>and</em> no blocker-severity finding surfaced. Otherwise DevAsign requests changes.
                        </div>
                    </section>

                    {/* ===== GITHUB OUTPUT ===== */}
                    <section id="github-output" className="docs-section">
                        <h2 className="docs-heading">GitHub output</h2>
                        <p className="docs-paragraph">
                            DevAsign's whole conversation footprint on a PR is <strong>one self-updating comment</strong> plus a Check Run. When a run starts it posts a <em>"PR Review In Progress"</em> comment; when the run finishes it edits that same comment into the full verdict. It's <strong>one comment per commit</strong>: a rerun on the same commit resets the existing comment back to "in progress" and edits it again, while a new push gets a fresh comment. If a run errors, the comment becomes a failure notice (with an auto-retry on your next push), so it never sticks on "in progress". All comment copy is emoji-free.
                        </p>
                        <p className="docs-paragraph">
                            The verdict comment is structured to be scannable, leading with what needs attention:
                        </p>
                        <ul className="docs-unordered-list">
                            <li><strong>End goal</strong>, then <strong>Previously met, now broken</strong>: criteria an earlier commit satisfied that a later change regressed, each with what broke.</li>
                            <li><strong>Acceptance criteria not met</strong>, each with a "why it failed" line. Criteria that pass collapse into a count header and an expandable list, so re-reviews don't re-litigate what already passed.</li>
                            <li><strong>Deferred / incomplete work</strong> the diff conceded.</li>
                            <li><strong>Suggested changes</strong> with minimal code examples and per-item fix prompts, plus <strong>line notes</strong> pinned to <code className="docs-code">file:line</code>.</li>
                            <li><strong>Repo-wide concerns</strong> from the codebase-aware review, including any pre-existing vulnerabilities it noticed, plus <strong>DEVASIGN.md</strong> nits.</li>
                            <li>A collapsible <strong>"one prompt to fix all of this"</strong> for your AI coding agent.</li>
                        </ul>
                        <p className="docs-paragraph">
                            Line notes are pre-filtered against the file paths actually present in the diff, so a bad path from the model can't put junk in the comment. Alongside the comment, a <strong>Check Run</strong> named <code className="docs-code">DevAsign · End goal</code> is keyed to the head commit, concluding <code className="docs-code">success</code> or <code className="docs-code">action_required</code>, and refreshes on every push without adding conversation noise. The formal GitHub review actions are reduced to invisible timeline signals:
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
                                        <td>A <strong>bodyless approval</strong>: the timeline reads "approved these changes" with no extra comment block.</td>
                                    </tr>
                                    <tr>
                                        <td>Any criterion unmet, or a blocker found</td>
                                        <td>The Check Run flips to <code className="docs-code">action_required</code> and DevAsign <strong>withdraws its earlier approval</strong>, so a stale green review can't keep the merge unlocked. No <code className="docs-code">REQUEST_CHANGES</code> review is submitted, since GitHub would force it to carry a duplicate comment.</td>
                                    </tr>
                                    <tr>
                                        <td>Clean pass, but no spec to check against</td>
                                        <td>The verdict comment alone, plus a one-time invite to add an end goal.</td>
                                    </tr>
                                    <tr>
                                        <td>The PR is closed while the review is running</td>
                                        <td>The run stops and the comment says the review was abandoned. No verdict is recorded and the Check Run is left alone.</td>
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
                            Reviews are conversational. Reply on the PR as a comment, a formal review, or an inline review comment, and DevAsign ingests it and decides whether it changes what "done" means. You can reply with any of:
                        </p>
                        <ul className="docs-unordered-list">
                            <li><strong>Text</strong>: a description of the intended behaviour and acceptance conditions.</li>
                            <li><strong>A Loom / YouTube / Vimeo link</strong>: DevAsign watches it and extracts acceptance signals.</li>
                            <li><strong>A screenshot + description</strong>: show the expected result and describe it.</li>
                        </ul>
                        <p className="docs-paragraph">
                            Feedback is <strong>additive</strong>: new requirements are appended to the criteria list instead of replacing it, and criteria earlier commits already satisfied keep their verdicts, so moving the bar doesn't re-fail finished work.
                        </p>
                        <p className="docs-paragraph">
                            When feedback does move the goal, DevAsign doesn't burn a full re-review on a diff it just judged. It posts a concrete <strong>implementation guide</strong> for the new requirement, flips the review to <em>changes requested</em> (refreshing the Check Run and, in blocking mode, withdrawing its earlier approval), and runs the real re-review on your <strong>next push</strong>, once there's actually new code to judge.
                        </p>
                        <p className="docs-paragraph">
                            Pure acknowledgements ("lgtm", "ship it") are recognized and don't move the goal. A mid-review Loom flagging a new bug gets a discrete fix comment without disturbing the verdict. Bot and self-authored comments are filtered out so the agent never reacts to its own output.
                        </p>
                    </section>

                    {/* ===== BROADCAST ===== */}
                    <section id="broadcast" className="docs-section">
                        <h2 className="docs-heading">Broadcast &amp; alerts</h2>
                        <p className="docs-paragraph">
                            When a verdict lands, DevAsign broadcasts it to your connected <strong>Slack</strong> or <strong>Discord</strong> channel so the team sees the outcome without opening GitHub. In the dashboard, the notification bell surfaces a row per completed review, with a blue dot for a clean pass and a red dot for changes requested or a failed run. Clicking it jumps straight to the review detail and its log timeline.
                        </p>
                    </section>

                    {/* ===== BOUNTY OVERVIEW ===== */}
                    <section id="bounty-overview" className="docs-section">
                        <h2 className="docs-heading">Bounty overview</h2>
                        <p className="docs-paragraph">
                            Alongside review, DevAsign lets maintainers put a price on a GitHub issue and have it pay out on merge. The money is held by a <strong>Soroban</strong> smart contract on Stellar, not by DevAsign, and settles straight to the contributor's own wallet.
                        </p>
                        <div className="docs-callout">
                            <strong>Non-custodial by design:</strong> DevAsign never holds your funds and never holds your keys. A sponsor funds an escrow from their own Stellar wallet by signing the transaction themselves, and a contributor is paid directly at an address they registered. There is no DevAsign balance to top up and nothing to withdraw.
                        </div>
                        <p className="docs-paragraph">
                            The sections below cover both sides: posting a bounty as a maintainer, and claiming one as a contributor. Setup is the same GitHub App install described in <a href="#installation" className="docs-link">Installation</a>. Once it's on your repo, bounties are available immediately.
                        </p>
                        <p className="docs-paragraph">
                            You'll need a <strong>Stellar wallet</strong>: <a href="https://www.freighter.app/" target="_blank" rel="noopener noreferrer" className="docs-link">Freighter</a> to sponsor bounties, and any Stellar wallet with a USDC trustline to receive them.
                        </p>
                    </section>

                    {/* ===== YOUR FIRST BOUNTY ===== */}
                    <section id="first-bounty" className="docs-section">
                        <h2 className="docs-heading">Your first bounty</h2>
                        <ol className="docs-ordered-list">
                            <li>Install the DevAsign GitHub App on your repository. See <a href="#installation" className="docs-link">Installation</a>.</li>
                            <li>Comment <code className="docs-code">bounty $150 1 week</code> on the issue. DevAsign replies with a funding link and the acceptance criteria it drafted from the issue.</li>
                            <li>Open the link, connect <strong>Freighter</strong>, and sign the funding transaction. The USDC moves from your wallet into the escrow contract, and the bounty goes live.</li>
                            <li>Developers apply. Pick one and sign the delegation, which locks the escrow to their payout address and starts the delivery clock.</li>
                            <li>They open a PR. The usual <a href="#how-it-works" className="docs-link">review pipeline</a> runs on it, so they get feedback before you look.</li>
                            <li>Merge their PR and the escrow releases automatically, or approve the payout in the dashboard if you'd rather settle without merging.</li>
                        </ol>
                        <div className="docs-callout">
                            <strong>Note the two signatures.</strong> You sign once to fund, and once to delegate. Both happen in your own wallet, and the second is what makes the merge-triggered payout safe: the escrow can only ever pay the address you already approved.
                        </div>
                    </section>

                    {/* ===== BOUNTIES ===== */}
                    <section id="bounties" className="docs-section">
                        <h2 className="docs-heading">Bounties</h2>
                        <p className="docs-paragraph">
                            Create a bounty by commenting on any open issue with the amount in <strong>USDC</strong> and a delivery window:
                        </p>
                        <CodeBlock lang="prompt" code={`bounty $150 1 week`} />
                        <p className="docs-paragraph">
                            DevAsign replies on the issue with a funding link, labels the issue, and drafts <a href="#end-goal" className="docs-link">acceptance criteria</a> from the issue text so applicants know what "done" means. You can edit those criteria until the escrow is funded. After that they're locked, since contributors committed to them.
                        </p>
                        <h3 className="docs-subheading">Bounty lifecycle</h3>
                        <div className="docs-table-wrapper">
                            <table className="docs-table">
                                <thead>
                                    <tr>
                                        <th>State</th>
                                        <th>What it means</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td><strong>Pending funding</strong></td><td>The bounty exists but no money is committed. It isn't visible to contributors yet.</td></tr>
                                    <tr><td><strong>Open</strong></td><td>The escrow is funded on-chain and the bounty is accepting applications.</td></tr>
                                    <tr><td><strong>Delegated</strong></td><td>You picked an applicant and signed the delegation. The escrow is locked to their payout address and the delivery clock is running.</td></tr>
                                    <tr><td><strong>In review</strong></td><td>They submitted their work and are waiting on your decision.</td></tr>
                                    <tr><td><strong>Paid</strong></td><td>The escrow released to the contributor.</td></tr>
                                    <tr><td><strong>Cancelled</strong></td><td>The escrow refunded to you, because you cancelled it, the deadline elapsed, or a rejection was accepted.</td></tr>
                                    <tr><td><strong>Disputed</strong></td><td>The contributor contested a rejection or an imminent refund. Settlement is frozen until it's resolved.</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <h3 className="docs-subheading">Changing a bounty</h3>
                        <p className="docs-paragraph">
                            Before the escrow is funded you can adjust it from the issue:
                        </p>
                        <CodeBlock lang="prompt" code={`bounty-update-amount increase $50
bounty-update-deadline decrease 2 days`} />
                        <p className="docs-paragraph">
                            Once the escrow is funded the amount is locked on-chain. To change it, cancel the bounty (the escrow refunds to you) and post a fresh command. The delivery window can be up to a year, and the clock only starts when you delegate the work, not when you create the bounty.
                        </p>
                        <h3 className="docs-subheading">Cancelling</h3>
                        <p className="docs-paragraph">
                            You can cancel a bounty that hasn't paid out and the escrow refunds to the wallet that funded it. If the work is already delegated, cancelling is a rejection, and the contributor can accept it or dispute it, as below.
                        </p>
                    </section>

                    {/* ===== SUBMISSIONS ===== */}
                    <section id="submissions" className="docs-section">
                        <h2 className="docs-heading">Submissions</h2>
                        <p className="docs-paragraph">
                            Developers browse open bounties in the DevAsign contributor app. When you find one you want, click <strong>Apply</strong>. Applying requires a <a href="#wallet" className="docs-link">payout wallet</a> on file. DevAsign checks the address is valid and has a USDC trustline at that moment, and records it with your application, so the maintainer knows the money can actually reach you.
                        </p>
                        <p className="docs-paragraph">
                            Applying doesn't reserve the bounty. The maintainer picks one applicant and signs a <strong>delegation</strong>, which locks the escrow to your payout address on-chain and starts the delivery clock. Until that happens you're one of several candidates, and you can withdraw your application at any time.
                        </p>
                        <h3 className="docs-subheading">Doing the work</h3>
                        <p className="docs-paragraph">
                            Open a pull request against the linked issue. The usual <a href="#how-it-works" className="docs-link">review pipeline</a> runs on it, judged against the bounty's acceptance criteria, so you get actionable feedback before the maintainer looks. When you're ready, submit from the dashboard with the PR link and any supporting links, like a demo video or a deployed preview.
                        </p>
                        <h3 className="docs-subheading">Getting paid</h3>
                        <p className="docs-paragraph">
                            There are two ways the escrow releases to you, and both pay the address locked at delegation:
                        </p>
                        <ul className="docs-unordered-list">
                            <li><strong>Your PR is merged</strong>: the release fires automatically. DevAsign checks the merged PR was authored by the delegated contributor before releasing anything.</li>
                            <li><strong>The maintainer approves the payout</strong>: useful when the work shipped without a merge. They sign the release from their own wallet.</li>
                        </ul>
                        <p className="docs-paragraph">
                            If a maintainer <strong>rejects</strong> the submission they must give a reason. You can accept it, which refunds the escrow to them, or <a href="#withdrawals" className="docs-link">dispute</a> it, which freezes settlement while it's worked out.
                        </p>
                    </section>

                    {/* ===== ESCROW ===== */}
                    <section id="escrow" className="docs-section">
                        <h2 className="docs-heading">Soroban escrow</h2>
                        <p className="docs-paragraph">
                            Bounty money is held by a Soroban smart contract on the <strong>Stellar network</strong>, never by DevAsign. Funding, delegating, and approving a payout are all transactions the sponsor signs in their own wallet; DevAsign builds the transaction and broadcasts it, but it can't move funds it wasn't authorized to move.
                        </p>
                        <h3 className="docs-subheading">How escrow works</h3>
                        <p className="docs-paragraph">
                            When a sponsor funds a bounty, USDC moves from their wallet into the escrow contract and is locked there. Neither side can unilaterally take it back. Two later actions can move it, and each is constrained by what the sponsor already signed:
                        </p>
                        <ul className="docs-unordered-list">
                            <li><strong>Release</strong>: pays the contributor address the sponsor locked in at delegation. Triggered by merging the delegate's PR, or by the sponsor approving the payout directly.</li>
                            <li><strong>Refund</strong>: returns the full amount to the wallet that funded it. Happens on cancellation, on an accepted rejection, or automatically once a missed deadline's dispute window closes.</li>
                        </ul>
                        <p className="docs-paragraph">
                            Because the contributor's address is fixed on-chain at delegation, the merge-triggered release doesn't need the sponsor's key and still can't pay anyone else. Automatic payout on merge is therefore a property of the contract, not something you have to take on trust.
                        </p>

                        <div className="docs-escrow-contract-card">
                            <div className="docs-escrow-contract-badge">LIVE ON STELLAR</div>
                            <div className="docs-escrow-contract-inline">
                                <span className="docs-escrow-contract-label">Smart Contract:</span>
                                <a
                                    href="https://stellar.expert/explorer/public/contract/CDWMA24IREKTSX25VT27HZFUAQE5PZNDY2EGW56JH6M2GID4UZNWHHJU"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="docs-escrow-contract-address"
                                >
                                    CDWMA24IREKTSX25VT27HZFUAQE5PZNDY2EGW56JH6M2GID4UZNWHHJU
                                </a>
                            </div>
                        </div>
                        <h3 className="docs-subheading">Settlement</h3>
                        <p className="docs-paragraph">
                            Every escrow movement is a real Stellar transaction you can verify on-chain. DevAsign tracks each one until the network confirms it, retries a transaction the network dropped, and reconciles against contract state rather than assuming a broadcast succeeded, so a bounty can't be left reading "paid" when the money never moved, or stuck pending when it did.
                        </p>
                        <p className="docs-paragraph">
                            Both apps carry a transaction ledger of funding, releases and refunds, with a link to each transaction on the Stellar explorer, and sponsors can export theirs as CSV.
                        </p>
                    </section>

                    {/* ===== WALLET ===== */}
                    <section id="wallet" className="docs-section">
                        <h2 className="docs-heading">Payout wallet</h2>
                        <p className="docs-paragraph">
                            DevAsign doesn't create or hold a wallet for you. You bring your own Stellar wallet, and both sides of a bounty use it directly.
                        </p>
                        <h3 className="docs-subheading">Sponsoring bounties</h3>
                        <p className="docs-paragraph">
                            Funding, delegating, and approving payouts are signed with <a href="https://www.freighter.app/" target="_blank" rel="noopener noreferrer" className="docs-link">Freighter</a>. DevAsign prepares each transaction and hands it to your wallet to sign. Your keys never leave the extension, and nothing moves without your approval.
                        </p>
                        <h3 className="docs-subheading">Receiving bounties</h3>
                        <p className="docs-paragraph">
                            Contributors register a <strong>payout address</strong> in the dashboard: any Stellar address you control, plus an optional memo if your wallet or exchange requires one. Approved bounties pay out to it directly.
                        </p>
                        <ul className="docs-unordered-list">
                            <li>The address must have a <strong>USDC trustline</strong>. Without one it can't receive USDC, and DevAsign flags this on your wallet rather than letting a payout fail silently.</li>
                            <li>The address is checked when you apply to a bounty and recorded with that application, so changing it later never redirects a bounty already delegated to you.</li>
                            <li>You can replace or remove it at any time. Removing it pauses payouts until you add a new one.</li>
                        </ul>
                        <div className="docs-callout">
                            <strong>There is no DevAsign balance.</strong> We never hold your funds and never hold your keys, so there's nothing to top up and nothing to withdraw. See <a href="#withdrawals" className="docs-link">Deadlines &amp; disputes</a> for what happens when work stalls.
                        </div>
                    </section>

                    {/* ===== WITHDRAWALS ===== */}
                    <section id="withdrawals" className="docs-section">
                        <h2 className="docs-heading">Deadlines &amp; disputes</h2>
                        <p className="docs-paragraph">
                            A bounty can't stall indefinitely with money locked in escrow. The delivery clock starts when the sponsor delegates the work, not when the bounty is created, and runs for the window they set.
                        </p>
                        <h3 className="docs-subheading">A missed deadline</h3>
                        <p className="docs-paragraph">
                            When the delivery window elapses, DevAsign notifies both sides and opens a <strong>24-hour dispute window</strong> before refunding anything. If the contributor doesn't contest it in that time, the escrow refunds to the sponsor automatically. If they do, settlement freezes until it's resolved, so a contributor who delivered late or whose work is under review doesn't lose the bounty to a clock.
                        </p>
                        <h3 className="docs-subheading">A rejected submission</h3>
                        <p className="docs-paragraph">
                            A sponsor rejecting work must give a reason. The contributor can <strong>accept</strong> it, which refunds the escrow to the sponsor and closes the bounty, or <strong>dispute</strong> it, which holds the escrow in place while the two of you work it out on the issue.
                        </p>
                        <div className="docs-callout">
                            <strong>While a bounty is disputed</strong> the escrow moves in neither direction: no release, no refund, no expiry. It stays locked until the dispute is resolved, so neither side can run out the clock on the other.
                        </div>
                    </section>

                    {/* ===== MODELS ===== */}
                    <section id="models" className="docs-section">
                        <h2 className="docs-heading">Models &amp; plans</h2>
                        <p className="docs-paragraph">
                            DevAsign runs on frontier AI models and routes each job to the one that fits it. Which model reviews your code follows the repository owner's plan:
                        </p>
                        <div className="docs-table-wrapper">
                            <table className="docs-table">
                                <thead>
                                    <tr>
                                        <th>Plan</th>
                                        <th>Review model</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Free</strong></td>
                                        <td><strong>Standard</strong>: a fast, capable model that runs the same pipeline end to end: criteria synthesis, the review, and the verification pass.</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Personal / Team</strong></td>
                                        <td><strong>Frontier</strong>: the most capable reasoning tier we offer, with extended reasoning enabled so the model works through a change before judging it. Noticeably stronger on large diffs, subtle regressions, and security analysis.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="docs-paragraph">
                            Video and image understanding run on a vision-capable model on every plan, so a Free repository still gets walkthroughs watched and screenshots read.
                        </p>
                        <p className="docs-paragraph">
                            Which model sits behind each tier is ours to choose, not a setting you configure. We move each tier onto stronger models as they become available, so reviews improve without any change on your side.
                        </p>
                        <h3 className="docs-subheading">Monthly review allowance</h3>
                        <div className="docs-table-wrapper">
                            <table className="docs-table">
                                <thead>
                                    <tr>
                                        <th>Plan</th>
                                        <th>Reviews / month</th>
                                        <th>Private repositories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td><strong>Free</strong></td><td>30</td><td>No</td></tr>
                                    <tr><td><strong>Personal</strong></td><td>120</td><td>Yes</td></tr>
                                    <tr><td><strong>Team</strong></td><td>600</td><td>Yes</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="docs-paragraph">
                            The allowance is per installation and meters <em>unique pull requests</em>: reviewing a PR for the first time spends one, and re-reviewing it after a push does not. Each PR then carries its own window of 6 re-reviews a month; past that a paid plan spends overage credits (150 a month on Personal, 650 on Team). See <a href="#triggering" className="docs-link">Triggering reviews</a>.
                        </p>

                        <h3 className="docs-subheading">Credits</h3>
                        <p className="docs-paragraph">
                            Credits cover reviews beyond your monthly allowance. Personal and Team include a fresh batch every month, and you can buy more at any time from <strong>Settings → Billing</strong> — a one-off purchase, not a subscription. Purchased credits never expire and are only spent once the month's included batch is gone.
                        </p>
                        <div className="docs-callout">
                            <strong>When the allowance runs out:</strong> DevAsign pauses reviews for that installation and leaves a single comment on the pull request explaining why, with a link to your billing page. Nothing is lost — the paused PR is reviewed as soon as you buy credits or the allowance resets.
                        </div>
                        <p className="docs-paragraph">
                            Credits are an add-on for paid plans. On Free, reaching the allowance means waiting for the next month or upgrading. If a credit purchase is refunded or charged back, the credits it bought are removed from the balance; if a chargeback is later resolved in your favour, they are returned.
                        </p>
                    </section>

                    {/* ===== REPO INDEX ===== */}
                    <section id="repo-index" className="docs-section">
                        <h2 className="docs-heading">Repository index</h2>
                        <p className="docs-paragraph">
                            The <a href="#holistic-review" className="docs-link">codebase-aware review</a> is powered by a searchable index of your repository. It lets a review pull in the code that actually matters to a change (the definitions it calls, the callers that depend on it, the surrounding scope) instead of judging the diff in isolation.
                        </p>
                        <ul className="docs-unordered-list">
                            <li><strong>Built on install</strong>: DevAsign indexes your default branch, skipping the things that aren't source: dependencies, build output, lockfiles, and binaries.</li>
                            <li><strong>Refreshed on merge</strong>: when a PR merges, only what changed is re-indexed, and deleted files are pruned. Unchanged code is never reprocessed.</li>
                            <li><strong>Private by default</strong>: the index is scoped to your installation and is never shared across accounts. Uninstalling the app deletes it.</li>
                        </ul>
                        <p className="docs-paragraph">
                            Indexing runs in the background and reviews never wait on it. Until a repository has finished indexing, usually the first few minutes after install, reviews still run, with the codebase-aware analysis limited to the diff itself.
                        </p>
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
                                    <tr><td><code className="docs-code">ready</code></td><td>The index is up to date; codebase-aware review has full context.</td></tr>
                                    <tr><td><code className="docs-code">stale</code></td><td>A PR merged; an incremental refresh is pending.</td></tr>
                                    <tr><td><code className="docs-code">errored</code></td><td>The last build failed; reviews continue against the diff while DevAsign retries.</td></tr>
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
                            <li><strong>Webhook receiver</strong>: verifies each delivery's <code className="docs-code">sha256</code> HMAC signature, then enqueues a job. It does no review work itself.</li>
                            <li><strong>Job queue &amp; workers</strong>: reviews, index builds, and maintainer-feedback jobs run on workers, so multimodal and transcription work isn't capped by a function timeout.</li>
                            <li><strong>GitHub App</strong>: the app requests only the scopes listed under <a href="#permissions" className="docs-link">GitHub permissions</a>, and exchanges the installation for short-lived tokens per request rather than holding long-lived credentials.</li>
                            <li><strong>Data handling</strong>: your code is read to produce a review and is never used to train models. Reviews, criteria, your repository index, per-repo workflow settings, and the review-log timeline are stored against your installation and removed when you uninstall.</li>
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
