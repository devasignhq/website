import { useEffect, useState, useRef, useCallback } from 'react';
import { Navigation } from '../components/layout/Navigation';
import { Footer } from '../components/layout/Footer';
import submissionScreenshot from '../assets/devasign.submission.png';
import installationScreenshot from '../assets/devasign.installation.png';
import bountyCommentScreenshot from '../assets/bounty.comment.png';
import createBountyInapp from '../assets/create.bounty.inapp.png';
import aiReviewScreenshot from '../assets/code.review.png';
import topupWalletScreenshot from '../assets/topup.wallet.png';
import contributorScreenshot from '../assets/contributor.task.png';
import submitTaskScreenshot from '../assets/submit.task.png';
import bountyPR from '../assets/bounty.pr.png';

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
            { id: 'installation', title: 'Installation' },
            { id: 'first-session', title: 'Your First Bounty' },
        ],
    },
    {
        label: 'CORE FEATURES',
        items: [
            { id: 'ai-review', title: 'AI Code Review' },
            { id: 'bounties', title: 'Bounties' },
            { id: 'submissions', title: 'Submissions' },
            // { id: 'disputes', title: 'Dispute Resolution' },
        ],
    },
    {
        label: 'PAYMENTS & WALLET',
        items: [
            { id: 'escrow', title: 'Soroban Escrow' },
            { id: 'wallet', title: 'Built-in Wallet' },
            { id: 'withdrawals', title: 'Withdrawals' },
        ],
    },
    {
        label: 'TOOLS',
        items: [
            { id: 'github-app', title: 'GitHub App' },
            // { id: 'api', title: 'API Reference' },
        ],
    },
];

const allNavItems = navCategories.flatMap((cat) => cat.items);

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
            <div className="docs-nav-bar">
                <Navigation />
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
                        <br/>
                        <h1 className="docs-title">DevAsign Documentation</h1>
                        <p className="docs-paragraph">
                            DevAsign helps engineering managers and open-source project maintainers review developers' code and give detailed feedback using <strong>AI</strong>, while automating bounty payouts using <strong>Soroban</strong> smart contract.
                        </p>
                        <p className="docs-paragraph">
                            Whether you're an <strong>engineering manager</strong> looking to incentivize contributions, or a <strong>developer</strong> hunting for paid open-source work, this guide covers everything you need to get started.
                        </p>
                        <img
                            src={submissionScreenshot}
                            alt="DevAsign submission review interface"
                            style={{
                                width: '100%',
                                marginTop: '2rem',
                            }}
                        />
                    </section>

                    {/* ===== INSTALLATION ===== */}
                    <section id="installation" className="docs-section">
                        <h2 className="docs-heading">Installation</h2>
                        <p className="docs-paragraph">
                            Get started by signing up on <a href="https://app.devasign.com/authenticate/account" target="_blank" rel="noopener noreferrer" className="docs-link">DevAsign</a> and install the app on your project repository. DevAsign works with any public GitHub repository.
                        </p>
                        <p className="docs-paragraph">
                            Once installed, kindly open any existing PR you want to review and comment <strong>"review"</strong>. The AI agent will pick up the PR and review it immediately. Subsequently, for any new PR that is submitted by anyone in your team, the AI agent will automatically review it and give feedback. 
                        </p>
                        <img
                            src={installationScreenshot}
                            alt="DevAsign installation interface"
                            style={{
                                width: '100%',
                                marginTop: '2rem',
                            }}
                        />
                    </section>

                    {/* ===== YOUR FIRST BOUNTY ===== */}
                    <section id="first-session" className="docs-section">
                        <h2 className="docs-heading">Your First Bounty</h2>
                        <ol className="docs-ordered-list">
                            <li>Install the DevAsign GitHub App on your repository</li>
                            <li>Fund your DevAsign wallet with XLM or USDC</li>
                            <li>Create a bounty by commenting on the GitHub issue <blockquote className="docs-code">/bounty $10 2 days</blockquote> - $10 is the bounty amount and 2 days is the deadline.</li>
                            <li>Developers accept the bounty and submit PRs</li>
                            <li>PR is reviewed with AI and feedback is posted as a comment</li>
                            <li>Approve or reject PR submission</li>
                            <li>On merge/approval, the payout is <strong>automatically</strong> released to the developer</li>
                        </ol>
                        <img
                            src={bountyCommentScreenshot}
                            alt="Create bounty directly in GitHub via comment"
                            style={{
                                width: '100%',
                                marginTop: '2rem',
                            }}
                        />
                    </section>

                    {/* ===== AI CODE REVIEW ===== */}
                    <section id="ai-review" className="docs-section">
                        <h2 className="docs-heading">AI Code Review</h2>
                        <p className="docs-paragraph">
                            DevAsign goes beyond traditional static analysis by utilizing a comprehensive <strong>agentic AI layer</strong>. When a PR is submitted, a swarm of specialized AI agents analyzes the code.
                        </p>
                        <ul className="docs-unordered-list">
                            <li><strong>Security Agents:</strong> Scan the code for complex vulnerabilities and potential attack vectors.</li>
                            <li><strong>Code Review Agent:</strong> Analyzes architectural choices, code style, and performance optimizations.</li>
                            <li><strong>Testing Agent:</strong> Verifies that proper unit tests are included and checks logic edge cases.</li>
                        </ul>
                        <p className="docs-paragraph">
                            These agents work together to compile a structured analysis, which is posted directly as comments on the GitHub PR — giving developers instant, actionable feedback before the maintainer even reviews it.
                        </p>
                        <img
                            src={aiReviewScreenshot}
                            alt="AI code review"
                            style={{
                                width: '100%',
                                marginTop: '2rem',
                            }}
                        />
                    </section>

                    {/* ===== BOUNTIES ===== */}
                    <section id="bounties" className="docs-section">
                        <h2 className="docs-heading">Bounties</h2>
                        <p className="docs-paragraph">
                            Maintainers can assign a bounty to any open issue. When creating a bounty, you specify the task deadline and the payout amount in <strong>USDC</strong>. These funds are held securely in a Soroban escrow contract until the work is approved/merged.
                        </p>
                        <h3 className="docs-subheading">Bounty Lifecycle</h3>
                        <ol className="docs-ordered-list">
                            <li><strong>Open</strong> — Maintainer creates a bounty linked to a GitHub issue</li>
                            <li><strong>In Progress</strong> — A developer claims the bounty</li>
                            <li><strong>Review</strong> — Developer submits a PR for review</li>
                            <li><strong>Bounty Paid</strong> — PR is merged/approved and funds are released</li>
                            <li><strong>Rejected</strong> — Bounty is rejected and funds are returned to the maintainer</li>
                            <li><strong>Deleted</strong> — Bounty is deleted and funds are returned to the maintainer</li>
                        </ol>
                        <img
                            src={createBountyInapp}
                            alt="Create bounty directly in DevAsign maintainer app"
                            style={{
                                width: '100%',
                                marginTop: '2rem',
                            }}
                        />

                        <h3 className="docs-subheading">Topping Up Funds</h3>
                        <p className="docs-paragraph">
                            Before a bounty can be activated, the maintainer must fund the escrow. You can easily top up your DevAsign wallet directly from the dashboard to ensure there is enough balance to cover the bounties you create.
                        </p>
                        <img
                            src={topupWalletScreenshot}
                            alt="Top up wallet in DevAsign"
                            style={{
                                width: '100%',
                                marginTop: '2rem',
                            }}
                        />
                    </section>

                    {/* ===== SUBMISSIONS ===== */}
                    <section id="submissions" className="docs-section">
                        <h2 className="docs-heading">Submissions</h2>
                        <p className="docs-paragraph">
                            Developers browse active bounties on DevAsign. When you find a task you want to work on, click <code className="docs-code">Apply</code>. This lets the maintainer know you are interested in working on it.
                        </p>
                        <p className="docs-paragraph">
                            Once you open a Pull Request against the linked issue, DevAsign automatically kicks in — it reviews your code using the AI layer to provide immediate, actionable feedback.
                        </p>
                        <img
                            src={bountyPR}
                            alt="Developer bounty PR submission in GitHub"
                            style={{
                                width: '100%',
                                marginTop: '2rem',
                            }}
                        />
                        <h3 className="docs-subheading">Submission Review</h3>
                        <p className="docs-paragraph">
                            Maintainers can <strong>approve</strong> or <strong>reject</strong> submissions. On approval, the bounty payout is triggered automatically. On rejection, a reason must be provided so the contributor can iterate or dispute the decision.
                        </p>
                        <img
                            src={contributorScreenshot}
                            alt="Developer tasks in DevAsign"
                            style={{
                                width: '100%',
                                marginTop: '2rem',
                            }}
                        />
                        <img
                            src={submitTaskScreenshot}
                            alt="Submit task in DevAsign"
                            style={{
                                width: '100%',
                                marginTop: '2rem',
                            }}
                        />
                    </section>

                    {/* ===== DISPUTES ===== */}
                    {/* <section id="disputes" className="docs-section">
                        <h2 className="docs-heading">Dispute Resolution</h2>
                        <p className="docs-paragraph">
                            If a contributor's submission is rejected, they can file a dispute with supporting evidence and reasoning. Disputes are designed to ensure fairness in the review process.
                        </p>
                        <div className="docs-table-wrapper">
                            <table className="docs-table">
                                <thead>
                                    <tr>
                                        <th>Status</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><code className="docs-code">open</code></td>
                                        <td>Dispute has been filed and is awaiting resolution</td>
                                    </tr>
                                    <tr>
                                        <td><code className="docs-code">resolved</code></td>
                                        <td>Maintainer has reviewed and resolved the dispute</td>
                                    </tr>
                                    <tr>
                                        <td><code className="docs-code">escalated</code></td>
                                        <td>Dispute has been escalated for further review</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section> */}

                    {/* ===== ESCROW ===== */}
                    <section id="escrow" className="docs-section">
                        <h2 className="docs-heading">Soroban Escrow</h2>
                        <p className="docs-paragraph">
                            Trust is guaranteed via automated Soroban smart contracts on the <strong>Stellar network</strong>.
                        </p>
                        <h3 className="docs-subheading">How Escrow Works</h3>
                        <p className="docs-paragraph">
                            When a maintainer creates a bounty, the funds are deposited into a secure Soroban escrow contract. They are locked there until the conditions (PR approval) are met. Neither the maintainer nor the contributor can unilaterally withdraw escrowed funds.
                        </p>

                        <div className="docs-escrow-contract-card">
                            <div className="docs-escrow-contract-badge">LIVE ON STELLAR</div>
                            <div className="docs-escrow-contract-inline">
                                <span className="docs-escrow-contract-label">Smart Contract:</span>
                                <a
                                    href="https://stellar.expert/explorer/public/contract/CDDFBYM5MECFZHDAU3ZZLGGCU4WPSEMRACAMID6UTFV5TGLSKIKTWLQM"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="docs-escrow-contract-address"
                                >
                                    CDDFBYM5MECFZHDAU3ZZLGGCU4WPSEMRACAMID6UTFV5TGLSKIKTWLQM
                                </a>
                            </div>
                        </div>
                        <h3 className="docs-subheading">Automated Payouts</h3>
                        <p className="docs-paragraph">
                            <strong>Zero manual intervention is required for payouts.</strong> As soon as the maintainer approves the contributor's submission, the system triggers the smart contract. The bounty is paid immediately and automatically directly into the contributor's wallet.
                        </p>
                    </section>

                    {/* ===== WALLET ===== */}
                    <section id="wallet" className="docs-section">
                        <h2 className="docs-heading">Built-in Wallet</h2>
                        <p className="docs-paragraph">
                            Web3 onboarding can be tough, which is why DevAsign abstracts it away. Both maintainers and contributors are <strong>automatically provided with a secure, built-in wallet</strong> upon account creation.
                        </p>
                        <p className="docs-paragraph">
                            You do not need to connect a third-party wallet (like Freighter or Lobstr) to start using DevAsign. Your wallet is created and funded automatically through the Stellar network.
                        </p>
                        <div className="docs-callout">
                            <strong>Security:</strong> All wallet secret keys are encrypted at rest using AES-256-GCM with a server-side encryption key.
                        </div>
                    </section>

                    {/* ===== WITHDRAWALS ===== */}
                    <section id="withdrawals" className="docs-section">
                        <h2 className="docs-heading">Withdrawals</h2>
                        <p className="docs-paragraph">
                            Once a contributor receives their bounty in their DevAsign wallet, they can seamlessly withdraw the funds to any external Stellar address or exchange of their choice.
                        </p>
                        <h3 className="docs-subheading">Withdrawal Requirements</h3>
                        <ul className="docs-unordered-list">
                            <li>The destination must be a valid Stellar address with a USDC trustline</li>
                            <li>Sufficient balance must be available in your wallet</li>
                            <li>A 24-hour cooldown period applies between withdrawals for security</li>
                        </ul>
                    </section>

                    {/* ===== GITHUB APP ===== */}
                    <section id="github-app" className="docs-section">
                        <h2 className="docs-heading">GitHub App</h2>
                        <p className="docs-paragraph">
                            The DevAsign GitHub App is the bridge between your repositories and the DevAsign platform. Once installed, it:
                        </p>
                        <ul className="docs-unordered-list">
                            <li>Monitors open issues and PRs in real-time</li>
                            <li>Triggers AI code reviews on new PR submissions</li>
                            <li>Posts structured analysis as PR comments</li>
                            <li>Detects PR merges to trigger automatic payouts</li>
                        </ul>
                        <p className="docs-paragraph">
                            Install it from your DevAsign dashboard.
                        </p>
                    </section>

                    {/* ===== API REFERENCE ===== */}
                    {/* <section id="api" className="docs-section">
                        <h2 className="docs-heading">API Reference</h2>
                        <p className="docs-paragraph">
                            DevAsign exposes a RESTful API for programmatic access. All endpoints require authentication via GitHub OAuth tokens.
                        </p>
                        <div className="docs-table-wrapper">
                            <table className="docs-table">
                                <thead>
                                    <tr>
                                        <th>Endpoint</th>
                                        <th>Method</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><code className="docs-code">/api/bounties</code></td>
                                        <td>GET</td>
                                        <td>List all bounties</td>
                                    </tr>
                                    <tr>
                                        <td><code className="docs-code">/api/bounties</code></td>
                                        <td>POST</td>
                                        <td>Create a new bounty</td>
                                    </tr>
                                    <tr>
                                        <td><code className="docs-code">/api/submissions</code></td>
                                        <td>GET</td>
                                        <td>List submissions for a bounty</td>
                                    </tr>
                                    <tr>
                                        <td><code className="docs-code">/api/submissions/:id/approve</code></td>
                                        <td>POST</td>
                                        <td>Approve a submission</td>
                                    </tr>
                                    <tr>
                                        <td><code className="docs-code">/api/submissions/:id/reject</code></td>
                                        <td>POST</td>
                                        <td>Reject a submission</td>
                                    </tr>
                                    <tr>
                                        <td><code className="docs-code">/api/submissions/:id/dispute</code></td>
                                        <td>POST</td>
                                        <td>Dispute a rejected submission</td>
                                    </tr>
                                    <tr>
                                        <td><code className="docs-code">/api/disputes/:id/resolve</code></td>
                                        <td>POST</td>
                                        <td>Resolve a developer dispute</td>
                                    </tr>
                                    <tr>
                                        <td><code className="docs-code">/api/wallet</code></td>
                                        <td>GET</td>
                                        <td>Get wallet balance and pending earnings</td>
                                    </tr>
                                    <tr>
                                        <td><code className="docs-code">/api/wallet/withdraw</code></td>
                                        <td>POST</td>
                                        <td>Withdraw funds to an external address</td>
                                    </tr>
                                    <tr>
                                        <td><code className="docs-code">/api/wallet/transactions</code></td>
                                        <td>GET</td>
                                        <td>Get paginated transaction history</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section> */}

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
            <Footer />
        </div>
    );
}
