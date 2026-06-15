import { LegalDocLayout, NavCategory } from '../components/layout/LegalDocLayout';

const navCategories: NavCategory[] = [
    {
        label: 'OVERVIEW',
        items: [
            { id: 'introduction', title: 'Introduction' },
            { id: 'definitions', title: 'Definitions' },
        ],
    },
    {
        label: 'YOUR ACCOUNT',
        items: [
            { id: 'eligibility', title: 'Eligibility & registration' },
            { id: 'our-services', title: 'Our services' },
            { id: 'beta-features', title: 'Beta features' },
        ],
    },
    {
        label: 'USING DEVASIGN',
        items: [
            { id: 'permitted-use', title: 'Permitted use' },
            { id: 'acceptable-use', title: 'Acceptable use' },
            { id: 'ai-output', title: 'AI review & output' },
        ],
    },
    {
        label: 'PROJECTS & BOUNTIES',
        items: [
            { id: 'projects', title: 'Projects & contributors' },
            { id: 'bounties', title: 'Bounties & payouts' },
            { id: 'bounty-disputes', title: 'Submission disputes' },
        ],
    },
    {
        label: 'CONTENT & IP',
        items: [
            { id: 'user-content', title: 'User content & IP' },
            { id: 'dmca', title: 'DMCA & copyright' },
            { id: 'open-source', title: 'Open-source projects' },
            { id: 'third-party', title: 'Third-party services' },
        ],
    },
    {
        label: 'ACCOUNTS & DATA',
        items: [
            { id: 'fees', title: 'Fees, billing & taxes' },
            { id: 'privacy', title: 'Data protection & privacy' },
            { id: 'security', title: 'Security' },
            { id: 'termination', title: 'Suspension & termination' },
        ],
    },
    {
        label: 'LEGAL TERMS',
        items: [
            { id: 'representations', title: 'Representations' },
            { id: 'disclaimers', title: 'Disclaimers' },
            { id: 'indemnity', title: 'Indemnity' },
            { id: 'liability', title: 'Limitation of liability' },
            { id: 'confidentiality', title: 'Confidentiality' },
        ],
    },
    {
        label: 'DISPUTES & GENERAL',
        items: [
            { id: 'changes', title: 'Changes to these terms' },
            { id: 'governing-law', title: 'Governing law & disputes' },
            { id: 'export', title: 'Export & sanctions' },
            { id: 'force-majeure', title: 'Force majeure' },
            { id: 'government-users', title: 'U.S. government users' },
            { id: 'general', title: 'General provisions' },
            { id: 'contact', title: 'Contact us' },
        ],
    },
];

export function TermsPage() {
    return (
        <LegalDocLayout
            activePath="/terms"
            seoTitle="Terms of Use & Services — DevAsign"
            seoDescription="The terms governing your access to and use of DevAsign's website, API, software, integrations, and related services."
            navCategories={navCategories}
        >
            {/* ===== INTRODUCTION ===== */}
            <section id="introduction" className="docs-section">
                <br />
                <h1 className="docs-title">Terms of Use &amp; Services</h1>
                <p className="docs-meta">
                    DevAsign, Inc.<br />
                    <strong>Effective date:</strong> May 8, 2026 &nbsp;·&nbsp; <strong>Last updated:</strong> May 8, 2026 &nbsp;·&nbsp; <strong>Version:</strong> 1.0
                </p>
                <h2 className="docs-heading">1. Introduction</h2>
                <p className="docs-paragraph">
                    Welcome to DevAsign, Inc. (<strong>"DevAsign"</strong>, <strong>"we"</strong>, <strong>"our"</strong>, or <strong>"us"</strong>), a Delaware corporation. These Terms of Use (<strong>"Terms"</strong>) govern your access to and use of Our Service, including our website, related websites, mobile applications, wallet, API, software, integrations, and any related services made available by us (collectively, the <strong>"Services"</strong>).
                </p>
                <p className="docs-paragraph">
                    These Terms apply to all users, including enterprise customers, maintainers, contributors, and API users (<strong>"Users"</strong>). By accessing or using our Services, you agree to be bound by these Terms, our Acceptable Use Policy, and our <a href="/privacy" className="docs-link">Privacy Policy</a>. If you do not agree to these Terms, please do not use our Services. Additional terms may apply to certain features, pricing plans, beta services, enterprise arrangements, APIs, or order forms. Where additional terms conflict with these Terms, the additional terms shall prevail to the extent of the conflict.
                </p>
                <div className="docs-callout">
                    <strong>Please read these Terms carefully.</strong> Section 26 (<a href="#governing-law" className="docs-link">Governing Law and Dispute Resolution</a>) contains a binding arbitration agreement, a class action waiver, and a jury trial waiver that affect your legal rights.
                </div>
            </section>

            {/* ===== DEFINITIONS ===== */}
            <section id="definitions" className="docs-section">
                <h2 className="docs-heading">2. Definitions</h2>
                <p className="docs-paragraph">In these Terms, unless the context otherwise requires:</p>
                <p className="docs-definition"><strong>"AI Output"</strong> means any analysis, recommendation, summary, classification, suggestion, score, feedback, or other content generated by or through Our Service using artificial intelligence or automated systems.</p>
                <p className="docs-definition"><strong>"AI Provider"</strong> means any third-party artificial-intelligence, machine-learning, large-language-model, or vision/video-understanding service (such as Anthropic and Google) used by or through Our Service to generate, summarize, transcribe, or analyze content, including in order to produce AI Output.</p>
                <p className="docs-definition"><strong>"Contributor"</strong> means a user who submits code, documentation, fixes, responses, or other work in connection with a Project or Task.</p>
                <p className="docs-definition"><strong>"Customer"</strong> means an organization or person that subscribes to, pays for, or otherwise uses Our Service for business or project management purposes.</p>
                <p className="docs-definition"><strong>"Maintainer"</strong> means a user or organization that owns, controls, manages, or administers a Project or Task on the platform.</p>
                <p className="docs-definition"><strong>"Project"</strong> means a repository, open-source project, software project, task stream, or other development environment connected to the platform.</p>
                <p className="docs-definition"><strong>"Submission"</strong> means any code, content, file, patch, comment, message, issue response, review response, or other material uploaded, posted, linked, or transmitted through the platform.</p>
                <p className="docs-definition"><strong>"Task"</strong> means a work item, issue, bounty, code review request, assignment, or similar item created or managed on the platform.</p>
                <p className="docs-definition"><strong>"Third-Party Services"</strong> means GitHub, Linear, Slack, Discord, Figma, video-hosting platforms (such as Loom, YouTube, and Vimeo), AI Providers, payment processors, blockchain networks and wallets (such as the Stellar network), cloud and database providers, analytics tools, and any other external service integrated with or used in connection with the platform.</p>
                <p className="docs-definition"><strong>"User"</strong> means any person or entity that accesses or uses the platform, whether as a Maintainer, Contributor, Customer, viewer, or otherwise.</p>
                <p className="docs-definition"><strong>"User Content"</strong> means all data, code, text, files, metadata, instructions, comments, prompts, repositories, and other materials submitted to or through Our Service by or on behalf of a User.</p>
            </section>

            {/* ===== ELIGIBILITY ===== */}
            <section id="eligibility" className="docs-section">
                <h2 className="docs-heading">3. Eligibility and account registration</h2>
                <p className="docs-paragraph">3.1 You may use Our Service only if you are at least eighteen (18) years of age and legally capable of entering into a binding contract under applicable law. If you are between the ages of thirteen (13) and seventeen (17), you may use Our Service only with the involvement and consent of a parent or legal guardian who agrees to be bound by these Terms.</p>
                <p className="docs-paragraph">3.2 If you are using Our Service for an organization, you represent and warrant that you are authorized to bind that organization to these Terms.</p>
                <p className="docs-paragraph">3.3 You agree to provide accurate, current, and complete information when creating an account or connecting a Project, and to keep such information updated.</p>
                <p className="docs-paragraph">3.4 You are responsible for maintaining the confidentiality of your login credentials, access tokens, API keys, wallet details, and connected account permissions. You agree to:</p>
                <ul className="docs-legal-list">
                    <li>i. Notify us immediately of any unauthorized use of your account;</li>
                    <li>ii. Ensure that you log out from your account at the end of each session; and</li>
                    <li>iii. Use strong passwords and maintain appropriate security measures.</li>
                </ul>
                <p className="docs-paragraph">3.5 You are responsible for all activity occurring under your account, except to the extent caused by our verified security failure.</p>
                <p className="docs-paragraph">3.6 You must promptly notify us of any unauthorized access, suspected compromise, or security incident relating to your account.</p>
                <p className="docs-paragraph">3.7 You represent and warrant that you are not located in, under the control of, or a national or resident of any country subject to U.S. embargo, or on any U.S. government list of restricted or prohibited parties (including the Specially Designated Nationals List maintained by the Office of Foreign Assets Control (<strong>"OFAC"</strong>), the Entity List, or the Denied Persons List).</p>
            </section>

            {/* ===== OUR SERVICES ===== */}
            <section id="our-services" className="docs-section">
                <h2 className="docs-heading">4. Our Services</h2>
                <p className="docs-paragraph">4.1 DevAsign provides a technology Service that uses artificial intelligence to review code changes (such as pull requests) against their associated tasks, tickets, and specifications, and to support code review, task coordination, project communication, AI-assisted feedback, workflow automation, contributor management, and related software development functions.</p>
                <p className="docs-paragraph">4.2 Our Service may include features such as:</p>
                <ul className="docs-legal-list">
                    <li>(a) AI-assisted code review and feedback;</li>
                    <li>(b) ingestion and analysis of multimodal context — including linked issues and tickets, connected chat threads, design files, video recordings and transcripts, images, and documents — to evaluate a Submission against its intended goal;</li>
                    <li>(c) posting review outcomes to connected developer tools, including GitHub Check Runs, pull request reviews and comments, and broadcasts to connected chat tools;</li>
                    <li>(d) repository indexing and whole-repository analysis;</li>
                    <li>(e) threaded communication between Maintainers and Contributors;</li>
                    <li>(f) repository integrations and issue tracking;</li>
                    <li>(g) bounty creation, acceptance, and payment workflows;</li>
                    <li>(h) analytics, monitoring, and productivity tools;</li>
                    <li>(i) APIs, SDKs, and integrations; and</li>
                    <li>(j) other related features we may introduce from time to time.</li>
                </ul>
                <p className="docs-paragraph">4.3 We may modify, suspend, discontinue, replace, or add features at any time, with or without notice, subject to any mandatory law or separate written agreement.</p>
                <p className="docs-paragraph">4.4 Certain features may be offered in beta, preview, experimental, or limited-release form. Such features are provided for evaluation only and may be unstable, incomplete, or changed without notice.</p>
            </section>

            {/* ===== BETA ===== */}
            <section id="beta-features" className="docs-section">
                <h2 className="docs-heading">5. Beta and experimental features</h2>
                <p className="docs-paragraph">5.1 Beta or experimental features are provided <strong>"AS IS"</strong> and <strong>"AS AVAILABLE."</strong></p>
                <p className="docs-paragraph">5.2 You understand that beta features may:</p>
                <ul className="docs-legal-list">
                    <li>(a) contain errors, bugs, or inaccuracies;</li>
                    <li>(b) be removed or changed at any time;</li>
                    <li>(c) produce different results from documented features; and</li>
                    <li>(d) depend on Third-Party Services that may fail or change.</li>
                </ul>
                <p className="docs-paragraph">5.3 You use beta features at your own risk and should not rely on them for critical, security-sensitive, legal, financial, or mission-critical decisions without independent review.</p>
            </section>

            {/* ===== PERMITTED USE ===== */}
            <section id="permitted-use" className="docs-section">
                <h2 className="docs-heading">6. Permitted use</h2>
                <p className="docs-paragraph">6.1 Subject to these Terms and any applicable subscription or order form, we grant you a limited, non-exclusive, non-transferable, revocable, and terminable right to access and use the Services for your internal business, development, or project purposes.</p>
                <p className="docs-paragraph">6.2 You may use Our Service only in compliance with:</p>
                <ul className="docs-legal-list">
                    <li>(a) these Terms;</li>
                    <li>(b) any applicable project rules or bounty conditions;</li>
                    <li>(c) all applicable U.S. federal, state, and local laws and regulations, and any applicable foreign laws;</li>
                    <li>(d) any open-source license or third-party license governing your Project; and</li>
                    <li>(e) the terms of any Third-Party Services you connect.</li>
                </ul>
                <p className="docs-paragraph">6.3 We may impose usage limits, access tiers, rate limits, storage limits, workspace restrictions, or other technical restrictions from time to time.</p>
            </section>

            {/* ===== ACCEPTABLE USE ===== */}
            <section id="acceptable-use" className="docs-section">
                <h2 className="docs-heading">7. Acceptable use</h2>
                <p className="docs-paragraph">7.1 You must not, and must not permit any third party to:</p>
                <ul className="docs-legal-list">
                    <li>(a) use Our Service for any unlawful, harmful, fraudulent, or deceptive purpose;</li>
                    <li>(b) upload malware, ransomware, spyware, exploit code, or any material intended to damage systems or steal data;</li>
                    <li>(c) probe, scan, test, or breach the security of Our Service or any connected system without authorization, or violate the Computer Fraud and Abuse Act or any analogous U.S. or state computer crime statute;</li>
                    <li>(d) interfere with Service availability or performance, including through scraping, denial-of-service activity, or abusive automation;</li>
                    <li>(e) reverse engineer, decompile, disassemble, or attempt to extract source code or model weights except to the extent permitted by law;</li>
                    <li>(f) bypass access controls, rate limits, billing controls, or usage restrictions;</li>
                    <li>(g) impersonate another person or entity;</li>
                    <li>(h) misuse AI Output as if it were guaranteed, certified, or professionally verified output;</li>
                    <li>(i) upload or process content that infringes intellectual property, privacy, publicity, or other rights;</li>
                    <li>(j) use Our Service to facilitate money laundering, sanctions evasion, fraud, or unlawful transfers, or to violate the Bank Secrecy Act, the USA PATRIOT Act, OFAC sanctions, the Foreign Corrupt Practices Act, or any other applicable financial, anti-corruption, or anti-bribery law; or</li>
                    <li>(k) use Our Service in a manner that would place us, the platform, or other Users at legal or regulatory risk.</li>
                </ul>
                <p className="docs-paragraph">7.2 You are responsible for ensuring that all code, materials, and actions on Our Service are appropriate for the relevant Project and do not violate any internal policy or external license.</p>
            </section>

            {/* ===== AI OUTPUT ===== */}
            <section id="ai-output" className="docs-section">
                <h2 className="docs-heading">8. AI-assisted review and output disclaimers</h2>
                <p className="docs-paragraph">8.1 Our Service may generate AI Output based on submitted code, repository contents, linked tasks and tickets, connected chat threads, design files, video recordings and transcripts, images, documents, prompts, context, project data, instructions, and other inputs. AI Output is provided for assistance, workflow acceleration, and decision support only.</p>
                <p className="docs-paragraph">8.2 AI Output may be inaccurate, incomplete, outdated, non-deterministic, biased, or unsuitable for your particular use case. You are solely responsible for independently reviewing and validating any AI Output before relying on it, including any code security, merge-readiness, correctness, performance, licensing, or production impact.</p>
                <p className="docs-paragraph">8.3 AI Output does not constitute:</p>
                <ul className="docs-legal-list">
                    <li>(a) legal advice;</li>
                    <li>(b) security certification;</li>
                    <li>(c) financial advice;</li>
                    <li>(d) investment advice;</li>
                    <li>(e) employment advice; or</li>
                    <li>(f) a warranty that code is safe, bug-free, or fit for deployment.</li>
                </ul>
                <p className="docs-paragraph">8.4 We do not guarantee that AI Output will detect all bugs, vulnerabilities, license conflicts, policy issues, or logic errors.</p>
                <p className="docs-paragraph">8.5 To generate AI Output, Our Service transmits relevant inputs to one or more AI Providers that process them on our behalf. Our use of AI Providers, and how your User Content is processed in connection with these features, is described in our <a href="/privacy" className="docs-link">Privacy Policy</a>.</p>
            </section>

            {/* ===== PROJECTS ===== */}
            <section id="projects" className="docs-section">
                <h2 className="docs-heading">9. Projects, Maintainers, and Contributors</h2>
                <p className="docs-paragraph">9.1 Maintainers are responsible for creating, configuring, and administering Projects, including deciding:</p>
                <ul className="docs-legal-list">
                    <li>(a) who may access the Project;</li>
                    <li>(b) how tasks are assigned;</li>
                    <li>(c) what the acceptance criteria are;</li>
                    <li>(d) whether bounties are offered; and</li>
                    <li>(e) when a Submission is accepted or rejected.</li>
                </ul>
                <p className="docs-paragraph">9.2 Contributors are responsible for ensuring that their Submissions:</p>
                <ul className="docs-legal-list">
                    <li>(a) are original or properly licensed;</li>
                    <li>(b) do not infringe third-party rights;</li>
                    <li>(c) comply with the Project's instructions and rules;</li>
                    <li>(d) are lawful and technically accurate to the best of their knowledge; and</li>
                    <li>(e) can be lawfully shared, merged, and/or rewarded as applicable.</li>
                </ul>
                <p className="docs-paragraph">9.3 We are not a party to the relationship between Maintainers and Contributors unless we expressly agree otherwise in writing.</p>
            </section>

            {/* ===== BOUNTIES ===== */}
            <section id="bounties" className="docs-section">
                <h2 className="docs-heading">10. Bounties, rewards, and automated payouts</h2>
                <p className="docs-paragraph">10.1 Our Service may allow Maintainers to offer bounties, rewards, incentives, or task-based compensation for defined work. Unless expressly stated otherwise in a separate written agreement:</p>
                <ul className="docs-legal-list">
                    <li>(a) the Maintainer determines the bounty amount, eligibility criteria, acceptance criteria, and payout conditions;</li>
                    <li>(b) the Service acts as a technology facilitator and record-keeping tool; and</li>
                    <li>(c) we do not guarantee that any Submission will qualify for a payout.</li>
                </ul>
                <p className="docs-paragraph">10.2 A bounty is only earned when the conditions set by the Maintainer and/or Service workflow are satisfied, including any verification, acceptance, or dispute window requirements.</p>
                <p className="docs-paragraph">10.3 Where automated or semi-automated payout functionality is enabled, payout may be routed through Third-Party Services, including payment processors, digital asset providers, blockchain networks, or wallet infrastructure.</p>
                <p className="docs-paragraph">10.4 We are not a bank, escrow agent, trustee, broker, exchange, money transmitter, custodian, or financial institution solely by virtue of facilitating technical workflows for bounty payout, unless we expressly state otherwise in a separate written agreement and subject to applicable law (including the Bank Secrecy Act, FinCEN money services business regulations, and applicable state money transmission laws).</p>
                <p className="docs-paragraph">10.5 You acknowledge that:</p>
                <ul className="docs-legal-list">
                    <li>(a) payment rails may fail, delay, or reject transactions;</li>
                    <li>(b) digital asset settlements may be subject to network congestion, volatility, and irreversible transfers;</li>
                    <li>(c) gas fees, network fees, service charges, and foreign exchange costs may apply; and</li>
                    <li>(d) payout timing may depend on Third-Party Services and compliance checks (including OFAC sanctions screening and "Know Your Customer" / AML procedures).</li>
                </ul>
                <p className="docs-paragraph">10.6 You are solely responsible for any taxes, reporting obligations (including any U.S. federal and state income tax, self-employment tax, and IRS information reporting on Forms 1099-NEC, 1099-MISC, 1099-K, or W-8/W-9 forms, as applicable), or compliance requirements arising from bounty earnings or payouts in your jurisdiction.</p>
                <p className="docs-paragraph">10.7 If a bounty payment is disputed, the Maintainer's decision, Our Service workflow, and any agreed dispute mechanism shall apply, subject to these Terms and any separate written bounty rules.</p>
            </section>

            {/* ===== BOUNTY DISPUTES ===== */}
            <section id="bounty-disputes" className="docs-section">
                <h2 className="docs-heading">11. Disputes relating to Submissions or bounties</h2>
                <p className="docs-paragraph">11.1 If a Contributor disputes a rejection, payout delay, or bounty determination, the Contributor must raise the dispute within the time stated in the Project rules or service workflow.</p>
                <p className="docs-paragraph">11.2 Where no specific period is stated, the dispute must be raised within a reasonable time after the event complained of.</p>
                <p className="docs-paragraph">11.3 We may, but are not obliged to, review the dispute, mediate between the parties, or apply platform-level rules. Unless we expressly agree otherwise, we are not the final decision-maker on bounty disputes between Users.</p>
                <p className="docs-paragraph">11.4 Our records, logs, timestamps, acceptance markers, and system events may be used as evidence of what occurred on the platform.</p>
            </section>

            {/* ===== USER CONTENT & IP ===== */}
            <section id="user-content" className="docs-section">
                <h2 className="docs-heading">12. User Content, Submissions, and intellectual property</h2>
                <p className="docs-paragraph">12.1 As between you and DevAsign, you retain ownership of your User Content, subject to the licenses you grant under these Terms, any Project rules, and any applicable Third-Party Service terms.</p>
                <p className="docs-paragraph">12.2 You grant DevAsign a worldwide, non-exclusive, royalty-free, transferable, sublicensable license to host, store, reproduce, process, transmit, display, adapt, analyze, and create derivative technical representations of User Content solely to:</p>
                <ul className="docs-legal-list">
                    <li>(a) operate, provide, secure, maintain, and improve the Service;</li>
                    <li>(b) facilitate Project workflows, reviews, comments, and bounty administration;</li>
                    <li>(c) comply with law, enforce these Terms, or protect rights and security; and</li>
                    <li>(d) generate aggregated or de-identified analytics, product improvements, and Service enhancements.</li>
                </ul>
                <p className="docs-paragraph">12.3 If you submit a Contribution to a Project, you represent that you have the right to do so and that the Submission may be reviewed, tested, merged, rejected, or rewarded according to the Project's rules.</p>
                <p className="docs-paragraph">12.4 Unless otherwise stated in a separate signed agreement or the applicable open-source license:</p>
                <ul className="docs-legal-list">
                    <li>(a) this Service does not itself transfer ownership of any underlying software project or repository from its owner to us; and</li>
                    <li>(b) ownership and licensing of code remain governed by the applicable Project rules, repository settings, open-source license, or written agreement.</li>
                </ul>
                <p className="docs-paragraph">12.5 You are solely responsible for ensuring that your use of Our Service does not breach any open-source license, proprietary license, contributor agreement, or employer policy.</p>
                <p className="docs-paragraph">12.6 If you are a Maintainer, you represent that you have the authority to create a Project, set bounty rules, and invite Contributors to participate.</p>
                <p className="docs-paragraph">12.7 If you are a Contributor, you represent that your Submission is not subject to restrictions that would prevent it from being reviewed, published, or rewarded in accordance with the Project rules.</p>
                <p className="docs-paragraph">12.8 <strong>DevAsign Marks and IP.</strong> All right, title, and interest in and to the Service (excluding User Content), including all software, technology, content, trademarks, service marks, trade names, logos, and intellectual property rights therein, are and shall remain the exclusive property of DevAsign and its licensors. Nothing in these Terms grants you any right, title, or interest in or to any DevAsign intellectual property except as expressly set forth herein.</p>
                <p className="docs-paragraph">12.9 <strong>Feedback.</strong> If you provide DevAsign with any suggestions, ideas, or feedback regarding the Service (<strong>"Feedback"</strong>), you grant DevAsign a perpetual, irrevocable, worldwide, royalty-free, sublicensable, and transferable license to use, modify, and exploit such Feedback for any purpose without obligation to you.</p>
            </section>

            {/* ===== DMCA ===== */}
            <section id="dmca" className="docs-section">
                <h2 className="docs-heading">13. DMCA and copyright policy</h2>
                <p className="docs-paragraph">13.1 DevAsign respects the intellectual property rights of others and complies with the Digital Millennium Copyright Act (<strong>"DMCA"</strong>), 17 U.S.C. § 512.</p>
                <p className="docs-paragraph">13.2 If you believe that any User Content infringes your copyright, you may submit a written notification to our designated DMCA agent containing the information required by 17 U.S.C. § 512(c)(3), including:</p>
                <ul className="docs-legal-list">
                    <li>(a) a physical or electronic signature of the copyright owner or authorized representative;</li>
                    <li>(b) identification of the copyrighted work claimed to have been infringed;</li>
                    <li>(c) identification of the material claimed to be infringing and information reasonably sufficient to permit DevAsign to locate the material;</li>
                    <li>(d) your contact information (address, telephone number, email);</li>
                    <li>(e) a statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and</li>
                    <li>(f) a statement, made under penalty of perjury, that the information in the notification is accurate and that you are authorized to act on behalf of the copyright owner.</li>
                </ul>
                <p className="docs-paragraph">13.3 Designated DMCA Agent:</p>
                <div className="docs-callout">
                    DevAsign, Inc.<br />
                    Attn: DMCA Agent<br />
                    2261 Market Street, San Francisco, CA 94114, US<br />
                    Email: <a href="mailto:dmca@devasign.com" className="docs-link">dmca@devasign.com</a>
                </div>
                <p className="docs-paragraph">13.4 We will respond to valid DMCA notices in accordance with the DMCA, and we may remove or disable access to allegedly infringing material. Submitters may also file counter-notifications under the DMCA. We will terminate the accounts of repeat infringers in appropriate circumstances.</p>
            </section>

            {/* ===== OPEN SOURCE ===== */}
            <section id="open-source" className="docs-section">
                <h2 className="docs-heading">14. Open-source projects</h2>
                <p className="docs-paragraph">14.1 Many Projects on Our Service may be open-source or community-driven. You acknowledge that such Projects may involve public repositories, public discussions, public issue tracking, and community participation.</p>
                <p className="docs-paragraph">14.2 Where a Project uses an open-source license, that license governs the rights and obligations relating to the relevant code, subject to these Terms and any Project-specific rules that do not conflict with the license. You must not use Our Service to create or enforce terms that are inconsistent with the applicable open-source license governing a Project.</p>
                <p className="docs-paragraph">14.3 We may, but are not obliged to, flag potential licensing conflicts or related issues. Any such flag is informational only and does not constitute legal advice or a guarantee of compliance.</p>
            </section>

            {/* ===== THIRD PARTY ===== */}
            <section id="third-party" className="docs-section">
                <h2 className="docs-heading">15. Third-party services and integrations</h2>
                <p className="docs-paragraph">15.1 Our Service may integrate with Third-Party Services. Your use of those services is governed by the third party's own terms and policies.</p>
                <p className="docs-paragraph">15.2 You are responsible for enabling, configuring, and authorizing any integration you choose to use.</p>
                <p className="docs-paragraph">15.3 We are not responsible for:</p>
                <ul className="docs-legal-list">
                    <li>(a) any act or omission of a Third-Party Service;</li>
                    <li>(b) downtime, delay, data loss, or security issues caused by a Third-Party Service;</li>
                    <li>(c) any change in a Third-Party Service's terms, APIs, pricing, availability, or functionality; or</li>
                    <li>(d) any loss arising from your use of third-party tokens, wallets, APIs, or credentials.</li>
                </ul>
                <p className="docs-paragraph">15.4 You authorize us to access, use, and process data from connected Third-Party Services to the extent necessary to provide Our Service and its features, and in line with our <a href="/privacy" className="docs-link">Privacy Policy</a>.</p>
                <p className="docs-paragraph">15.5 We may suspend or disable integrations that pose security, compliance, technical, or legal risk.</p>
            </section>

            {/* ===== FEES ===== */}
            <section id="fees" className="docs-section">
                <h2 className="docs-heading">16. Fees, billing, and taxes</h2>
                <p className="docs-paragraph">16.1 Certain features may be subject to subscription fees, usage fees, transaction fees, or other charges. Fees, billing cycles, payment methods, trial terms, and refund policies may be set out in a separate order form, <a href="/pricing" className="docs-link">pricing page</a>, enterprise agreement, or on-Service checkout flow.</p>
                <p className="docs-paragraph">16.2 You authorize us and/or our payment processors to charge the applicable fees using your selected payment method.</p>
                <p className="docs-paragraph">16.3 Unless required by law or expressly stated otherwise, all fees are non-refundable.</p>
                <p className="docs-paragraph">16.4 You are responsible for all taxes, duties, levies, and government charges arising from your use of the platform (including all U.S. federal, state, and local sales, use, value-added, withholding, and similar taxes), except for taxes based on our net income.</p>
                <p className="docs-paragraph">16.5 If you fail to pay amounts due, we may suspend or terminate access until payment is made. Past due amounts may bear interest at the lesser of 1.5% per month or the maximum rate permitted by applicable law.</p>
                <p className="docs-paragraph">16.6 <strong>Auto-Renewal.</strong> Subscriptions may automatically renew on the same terms unless and until canceled in accordance with the applicable order form or our website. Where required by California Business and Professions Code §§ 17600–17606 or analogous state automatic-renewal laws, we will provide the disclosures, acknowledgments, and cancellation methods required by such laws.</p>
            </section>

            {/* ===== PRIVACY ===== */}
            <section id="privacy" className="docs-section">
                <h2 className="docs-heading">17. Data protection and privacy</h2>
                <p className="docs-paragraph">17.1 We process personal data in connection with account creation, Project participation, Service security, support, analytics, and Service delivery.</p>
                <p className="docs-paragraph">17.2 Our processing of personal data is governed by our <a href="/privacy" className="docs-link">Privacy Policy</a> and applicable U.S. federal and state privacy laws (including, where applicable, the California Consumer Privacy Act of 2018, as amended by the California Privacy Rights Act of 2020 (<strong>"CCPA/CPRA"</strong>), the Virginia Consumer Data Protection Act, the Colorado Privacy Act, the Connecticut Data Privacy Act, the Children's Online Privacy Protection Act, and the Gramm-Leach-Bliley Act where applicable), and, for users in the European Economic Area, the United Kingdom, or Switzerland, the EU/UK General Data Protection Regulation.</p>
                <p className="docs-paragraph">17.3 You must ensure that you have a lawful basis to upload or share any personal data through the platform.</p>
                <p className="docs-paragraph">17.4 If you are a Maintainer or Customer, you are responsible for ensuring that you provide any notices, consents, or contractual arrangements required in relation to personal data you submit, process, or instruct us to process.</p>
                <p className="docs-paragraph">17.5 You must not upload sensitive personal data unless it is necessary for the Project and you have ensured appropriate legal safeguards.</p>
                <p className="docs-paragraph">17.6 We may use aggregated and de-identified data to improve the platform, develop features, and analyze usage patterns, provided this is done in accordance with applicable law and our Privacy Policy.</p>
            </section>

            {/* ===== SECURITY ===== */}
            <section id="security" className="docs-section">
                <h2 className="docs-heading">18. Security</h2>
                <p className="docs-paragraph">18.1 You must use commercially reasonable measures to protect your credentials, access tokens, API keys, and connected accounts.</p>
                <p className="docs-paragraph">18.2 You must not knowingly introduce malware, malicious scripts, compromised dependencies, or harmful files into Our Service or any connected Project.</p>
                <p className="docs-paragraph">18.3 We may monitor Our Service for abuse, fraud, security incidents, and compliance purposes.</p>
                <p className="docs-paragraph">18.4 We may suspend access immediately where we reasonably believe there is a security threat, abuse, or unauthorized access risk.</p>
                <p className="docs-paragraph">18.5 You are responsible for your own device security, repository hygiene, account permissions, and internal access controls.</p>
            </section>

            {/* ===== TERMINATION ===== */}
            <section id="termination" className="docs-section">
                <h2 className="docs-heading">19. Suspension and termination</h2>
                <p className="docs-paragraph">19.1 We may suspend or terminate your access, in whole or in part, immediately or on notice, if:</p>
                <ul className="docs-legal-list">
                    <li>(a) you breach these Terms;</li>
                    <li>(b) we reasonably suspect fraud, abuse, or security risk;</li>
                    <li>(c) your use of Our Service exposes us or others to legal or regulatory risk;</li>
                    <li>(d) we are required to do so by law or by a competent authority; or</li>
                    <li>(e) your subscription or payment obligations are overdue.</li>
                </ul>
                <p className="docs-paragraph">19.2 You may stop using Our Service at any time. If you are a paid Customer, termination rights and data export rights may be subject to your plan or separate agreement.</p>
                <p className="docs-paragraph">19.3 Upon termination or suspension:</p>
                <ul className="docs-legal-list">
                    <li>(a) your license to use Our Service ceases;</li>
                    <li>(b) we may delete, deactivate, or restrict access to your data in accordance with our retention policies and law;</li>
                    <li>(c) any accrued payment obligations remain due; and</li>
                    <li>(d) Sections intended to survive termination shall survive.</li>
                </ul>
                <p className="docs-paragraph">19.4 We are not liable for any loss arising from suspension or termination in accordance with these Terms.</p>
            </section>

            {/* ===== REPRESENTATIONS ===== */}
            <section id="representations" className="docs-section">
                <h2 className="docs-heading">20. User representations and warranties</h2>
                <p className="docs-paragraph">You represent and warrant that:</p>
                <p className="docs-paragraph">20.1 you have the legal capacity and authority to enter into these Terms;</p>
                <p className="docs-paragraph">20.2 all information you provide is true, accurate, and not misleading;</p>
                <p className="docs-paragraph">20.3 you will use Our Service only for lawful purposes and in accordance with these Terms;</p>
                <p className="docs-paragraph">20.4 you have all rights, licenses, permissions, and approvals needed for the User Content you submit;</p>
                <p className="docs-paragraph">20.5 your use of Our Service will not violate any law, regulation, contract, fiduciary duty, or third-party right;</p>
                <p className="docs-paragraph">20.6 if you are a business user, you will ensure your personnel comply with these Terms; and</p>
                <p className="docs-paragraph">20.7 you are not prohibited from using Our Service under any applicable U.S. or foreign sanctions, export control (including the U.S. Export Administration Regulations and the International Traffic in Arms Regulations), or other legal restriction.</p>
            </section>

            {/* ===== DISCLAIMERS ===== */}
            <section id="disclaimers" className="docs-section">
                <h2 className="docs-heading">21. Disclaimers</h2>
                <p className="docs-paragraph">21.1 THE PLATFORM, AI OUTPUT, AND ALL RELATED SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS.</p>
                <p className="docs-paragraph">21.2 TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING, USAGE, OR TRADE.</p>
                <p className="docs-paragraph">21.3 WE DO NOT WARRANT THAT:</p>
                <ul className="docs-legal-list">
                    <li>(a) Our Service will be error-free or uninterrupted;</li>
                    <li>(b) AI Output will be accurate, complete, lawful, secure, or sufficient for your intended use;</li>
                    <li>(c) any Submission will be accepted, merged, or rewarded;</li>
                    <li>(d) any integration will remain available; or</li>
                    <li>(e) any defect will be corrected within a particular timeframe.</li>
                </ul>
                <p className="docs-paragraph">21.4 You are responsible for evaluating the suitability of Our Service for your needs, including code quality, security, compliance, and operational risk.</p>
                <p className="docs-paragraph">21.5 SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES, SO SOME OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU. IN SUCH JURISDICTIONS, OUR WARRANTIES ARE LIMITED TO THE MINIMUM EXTENT PERMITTED BY APPLICABLE LAW.</p>
            </section>

            {/* ===== INDEMNITY ===== */}
            <section id="indemnity" className="docs-section">
                <h2 className="docs-heading">22. Indemnity</h2>
                <p className="docs-paragraph">22.1 You agree to indemnify, defend, and hold harmless DevAsign, its directors, officers, employees, contractors, agents, licensors, and affiliates from and against any claims, losses, liabilities, damages, costs, and expenses (including reasonable attorneys' fees) arising out of or related to:</p>
                <ul className="docs-legal-list">
                    <li>(a) your breach of these Terms;</li>
                    <li>(b) your User Content or Submissions;</li>
                    <li>(c) your use of Our Service or Third-Party Services;</li>
                    <li>(d) your violation of law or third-party rights;</li>
                    <li>(e) your misuse of AI Output;</li>
                    <li>(f) your failure to obtain necessary permissions, licenses, consents, or approvals; or</li>
                    <li>(g) any dispute between you and another User, Contributor, Maintainer, or third party.</li>
                </ul>
                <p className="docs-paragraph">22.2 We may, at our discretion, control the defense of any matter for which you owe an indemnity, and you agree to cooperate fully. You may not settle any matter without our prior written consent.</p>
            </section>

            {/* ===== LIABILITY ===== */}
            <section id="liability" className="docs-section">
                <h2 className="docs-heading">23. Limitation of liability</h2>
                <p className="docs-paragraph">23.1 TO THE FULLEST EXTENT PERMITTED BY LAW, DEVASIGN SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING LOSS OF PROFITS, LOSS OF DATA, LOSS OF GOODWILL, BUSINESS INTERRUPTION, OR LOSS OF OPPORTUNITY, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
                <p className="docs-paragraph">23.2 TO THE FULLEST EXTENT PERMITTED BY LAW, OUR TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS OR OUR SERVICE SHALL NOT EXCEED THE GREATER OF (A) THE TOTAL FEES YOU PAID TO US IN THE SIX (6) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS ($100).</p>
                <p className="docs-paragraph">23.3 The limitations in this Section apply whether the claim arises in contract, tort, negligence, strict liability, equity, statute, or otherwise.</p>
                <p className="docs-paragraph">23.4 Nothing in these Terms limits liability that cannot lawfully be limited, including liability for fraud, willful misconduct, gross negligence, or other non-excludable liability under applicable law.</p>
                <p className="docs-paragraph">23.5 SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF CERTAIN DAMAGES, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU IN FULL.</p>
            </section>

            {/* ===== CONFIDENTIALITY ===== */}
            <section id="confidentiality" className="docs-section">
                <h2 className="docs-heading">24. Confidentiality</h2>
                <p className="docs-paragraph">24.1 If we and you enter into a separate confidentiality agreement or data processing agreement, that agreement shall govern to the extent of any inconsistency.</p>
                <p className="docs-paragraph">24.2 If no separate agreement applies, you must keep confidential any non-public information disclosed by us that is reasonably understood to be confidential, including product plans, security information, pricing not publicly disclosed, and technical information.</p>
                <p className="docs-paragraph">24.3 You must not disclose such confidential information except where required by law or with prior written consent.</p>
                <p className="docs-paragraph">24.4 You must also take reasonable steps to protect the confidentiality of any non-public Project information you access through the platform.</p>
            </section>

            {/* ===== CHANGES ===== */}
            <section id="changes" className="docs-section">
                <h2 className="docs-heading">25. Changes to these Terms</h2>
                <p className="docs-paragraph">25.1 We may update these Terms from time to time.</p>
                <p className="docs-paragraph">25.2 If we make a material change, we will take reasonable steps to notify you, such as posting the updated Terms, emailing the account contact, or providing an in-product notice.</p>
                <p className="docs-paragraph">25.3 Continued use of Our Service after the effective date of the updated Terms constitutes acceptance of the revised Terms.</p>
            </section>

            {/* ===== GOVERNING LAW ===== */}
            <section id="governing-law" className="docs-section">
                <h2 className="docs-heading">26. Governing law and dispute resolution</h2>
                <p className="docs-paragraph">26.1 <strong>Governing Law.</strong> These Terms and any dispute arising out of or relating to these Terms or Our Service shall be governed by and construed in accordance with the laws of the State of Delaware, without giving effect to any choice or conflict of law provision or rule. The United Nations Convention on Contracts for the International Sale of Goods does not apply.</p>
                <p className="docs-paragraph">26.2 <strong>Informal Resolution.</strong> The parties shall first attempt in good faith to resolve any dispute informally within thirty (30) days of written notice of the dispute, sent to <a href="mailto:legal@devasign.com" className="docs-link">legal@devasign.com</a> (for notices to DevAsign) or to your account email (for notices to you).</p>
                <p className="docs-paragraph">26.3 <strong>Binding Arbitration.</strong> Except for the matters described in Section 26.7, any dispute, claim, or controversy arising out of or relating to these Terms or Our Service that cannot be resolved informally shall be finally resolved by binding arbitration administered by JAMS (or, at the claimant's election, the American Arbitration Association (<strong>"AAA"</strong>)) in accordance with its then-current Comprehensive Arbitration Rules and Procedures (or AAA Commercial Arbitration Rules, as applicable). The arbitration shall be conducted in English by a single arbitrator. The seat and legal place of arbitration shall be Wilmington, Delaware, although the arbitrator may conduct hearings remotely or in another location with the parties' consent. This arbitration agreement is governed by the Federal Arbitration Act, 9 U.S.C. §§ 1 et seq.</p>
                <p className="docs-paragraph">26.4 <strong>Arbitration Award.</strong> The arbitral award shall be final and binding, and judgment upon the award may be entered and enforced in any court of competent jurisdiction. Each party shall bear its own attorneys' fees and costs, except as otherwise provided by applicable law or by the arbitrator's award.</p>
                <p className="docs-paragraph">26.5 <strong>CLASS ACTION WAIVER.</strong> YOU AND DEVASIGN AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN AN INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, COLLECTIVE, CONSOLIDATED, REPRESENTATIVE, OR PRIVATE ATTORNEY GENERAL ACTION OR PROCEEDING. THE ARBITRATOR MAY NOT CONSOLIDATE MORE THAN ONE PERSON'S CLAIMS, AND MAY NOT OTHERWISE PRESIDE OVER ANY FORM OF A REPRESENTATIVE OR CLASS PROCEEDING. If this Class Action Waiver is found to be illegal or unenforceable as to all or some parts of a dispute, then those parts shall be severed and proceed in a court of competent jurisdiction, with the remaining parts proceeding in arbitration.</p>
                <p className="docs-paragraph">26.6 <strong>JURY TRIAL WAIVER.</strong> TO THE FULLEST EXTENT PERMITTED BY LAW, EACH PARTY KNOWINGLY AND VOLUNTARILY WAIVES ITS RIGHT TO A TRIAL BY JURY IN ANY ACTION OR PROCEEDING ARISING OUT OF OR RELATING TO THESE TERMS OR OUR SERVICE.</p>
                <p className="docs-paragraph">26.7 <strong>Exceptions; Equitable Relief; Small Claims.</strong> Notwithstanding the foregoing, either party may (a) bring an individual action in small claims court for disputes within its jurisdictional limit; or (b) seek injunctive or other equitable relief in any court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation, or violation of a party's intellectual property rights, confidentiality obligations, or Service security. The exclusive jurisdiction and venue for any such court action, and for any disputes not subject to arbitration, shall be the state and federal courts located in Wilmington, Delaware, and each party irrevocably consents to the personal jurisdiction of such courts.</p>
                <p className="docs-paragraph">26.8 <strong>Opt-Out.</strong> You may opt out of the arbitration agreement and class action waiver in Sections 26.3 and 26.5 by sending written notice to <a href="mailto:legal@devasign.com" className="docs-link">legal@devasign.com</a> within thirty (30) days of first accepting these Terms. Your notice must include your name, address, account information, and a clear statement that you wish to opt out of arbitration. Opting out will not affect any other portion of these Terms.</p>
            </section>

            {/* ===== EXPORT ===== */}
            <section id="export" className="docs-section">
                <h2 className="docs-heading">27. Export, sanctions, and anti-fraud compliance</h2>
                <p className="docs-paragraph">27.1 You must comply with all applicable U.S. and foreign export control, sanctions, anti-money laundering, and anti-fraud laws, including the U.S. Export Administration Regulations, the International Traffic in Arms Regulations, OFAC sanctions programs, the Bank Secrecy Act, and the USA PATRIOT Act.</p>
                <p className="docs-paragraph">27.2 You must not use Our Service to:</p>
                <ul className="docs-legal-list">
                    <li>(a) launder proceeds of crime;</li>
                    <li>(b) conceal the origin or destination of funds or digital assets;</li>
                    <li>(c) evade sanctions screening;</li>
                    <li>(d) facilitate fraud, fraudulent activities, or cybercrime; or</li>
                    <li>(e) support unlawful activity.</li>
                </ul>
                <p className="docs-paragraph">27.3 We may restrict or terminate access where we reasonably believe a compliance concern exists.</p>
            </section>

            {/* ===== FORCE MAJEURE ===== */}
            <section id="force-majeure" className="docs-section">
                <h2 className="docs-heading">28. Force majeure</h2>
                <p className="docs-paragraph">28.1 We shall not be liable for any delay or failure to perform caused by events beyond our reasonable control, including network outages, cloud service failures, power failures, civil unrest, war, terrorism, government action, natural disasters, pandemics, public health emergencies, or failures of Third-Party Services.</p>
                <p className="docs-paragraph">28.2 During a force majeure event, we may suspend or modify services to protect users, infrastructure, and compliance obligations.</p>
            </section>

            {/* ===== GOVERNMENT USERS ===== */}
            <section id="government-users" className="docs-section">
                <h2 className="docs-heading">29. U.S. government end users</h2>
                <p className="docs-paragraph">If you are a U.S. federal government end user, the Service is a "Commercial Item" as defined at 48 C.F.R. § 2.101, consisting of "Commercial Computer Software" and "Commercial Computer Software Documentation," as such terms are used in 48 C.F.R. § 12.212 or 48 C.F.R. § 227.7202, as applicable. Consistent with these provisions, the Service is licensed to U.S. government end users only as Commercial Items and with only those rights as are granted to all other end users pursuant to these Terms.</p>
            </section>

            {/* ===== GENERAL ===== */}
            <section id="general" className="docs-section">
                <h2 className="docs-heading">30. General provisions</h2>
                <p className="docs-paragraph">30.1 <strong>Assignment.</strong> You may not assign or transfer your rights or obligations under these Terms without our prior written consent. Any attempted assignment in violation of this Section is void. We may assign our rights and obligations in connection with a reorganization, merger, acquisition, or sale of assets without your consent.</p>
                <p className="docs-paragraph">30.2 <strong>Severability.</strong> If any provision is found unenforceable, that provision shall be modified to the minimum extent necessary or severed, and the remainder shall continue in full force.</p>
                <p className="docs-paragraph">30.3 <strong>Waiver.</strong> No failure or delay in exercising any right shall operate as a waiver. Any waiver must be in writing and signed by the waiving party.</p>
                <p className="docs-paragraph">30.4 <strong>No Third-Party Beneficiaries.</strong> Except as expressly stated, these Terms do not confer rights on any third party.</p>
                <p className="docs-paragraph">30.5 <strong>Relationship.</strong> Nothing in these Terms creates a partnership, employment, agency, fiduciary, or joint venture relationship between you and us.</p>
                <p className="docs-paragraph">30.6 <strong>Entire Agreement.</strong> These Terms, together with our Privacy Policy, Acceptable Use Policy, and any applicable order forms, constitute the entire agreement between you and DevAsign regarding the subject matter hereof and supersede all prior or contemporaneous understandings, agreements, representations, and warranties, both written and oral.</p>
                <p className="docs-paragraph">30.7 <strong>Notices.</strong> Notices to DevAsign must be sent to <a href="mailto:legal@devasign.com" className="docs-link">legal@devasign.com</a> or to our registered office. Notices to you may be sent to the email address associated with your account or by posting on the Service. Notices are deemed given when delivered, posted, or sent.</p>
                <p className="docs-paragraph">30.8 <strong>Headings.</strong> Section headings are for convenience only and do not affect interpretation.</p>
                <p className="docs-paragraph">30.9 <strong>Survival.</strong> Sections that by their nature should survive termination of these Terms shall survive, including (without limitation) Sections 12 (Intellectual Property), 13 (DMCA), 17 (Privacy), 22 (Indemnity), 23 (Limitation of Liability), 24 (Confidentiality), 26 (Governing Law and Dispute Resolution), and 30 (General Provisions).</p>
            </section>

            {/* ===== CONTACT ===== */}
            <section id="contact" className="docs-section">
                <h2 className="docs-heading">31. Contact us</h2>
                <p className="docs-paragraph">Questions about these Terms should be directed to:</p>
                <div className="docs-callout">
                    <strong>DevAsign, Inc.</strong><br />
                    2261 Market Street, San Francisco, CA 94114, US<br />
                    General: <a href="mailto:contact@devasign.com" className="docs-link">contact@devasign.com</a><br />
                    Legal Notices: <a href="mailto:legal@devasign.com" className="docs-link">legal@devasign.com</a><br />
                    Support: <a href="mailto:support@devasign.com" className="docs-link">support@devasign.com</a><br />
                    DMCA: <a href="mailto:dmca@devasign.com" className="docs-link">dmca@devasign.com</a><br />
                    Privacy: <a href="mailto:privacy@devasign.com" className="docs-link">privacy@devasign.com</a>
                </div>
            </section>
        </LegalDocLayout>
    );
}
