import { LegalDocLayout, NavCategory } from '../components/layout/LegalDocLayout';

const navCategories: NavCategory[] = [
    {
        label: 'OVERVIEW',
        items: [
            { id: 'purpose', title: 'Purpose & statement' },
            { id: 'scope', title: 'Scope & objectives' },
        ],
    },
    {
        label: 'HOW WE PROCESS DATA',
        items: [
            { id: 'principles', title: 'Processing principles' },
            { id: 'privacy-notice', title: 'Data privacy notice' },
            { id: 'legal-grounds', title: 'Legal grounds' },
            { id: 'consent', title: 'Consent' },
        ],
    },
    {
        label: 'YOUR RIGHTS',
        items: [
            { id: 'rights', title: 'Your rights' },
            { id: 'transfers', title: 'Transfer of data' },
        ],
    },
    {
        label: 'GOVERNANCE & SECURITY',
        items: [
            { id: 'breach', title: 'Data breach management' },
            { id: 'dpia', title: 'Impact assessments' },
            { id: 'data-security', title: 'Data security' },
            { id: 'privacy-lead', title: 'Privacy Lead / DPO' },
            { id: 'training', title: 'Training' },
            { id: 'audit', title: 'Data protection audit' },
        ],
    },
    {
        label: 'REFERENCE',
        items: [
            { id: 'changes', title: 'Changes to this policy' },
            { id: 'glossary', title: 'Glossary' },
            { id: 'contact', title: 'Contact & escalation' },
        ],
    },
];

export function PrivacyPage() {
    return (
        <LegalDocLayout
            activePath="/privacy"
            seoTitle="Data Privacy & Protection Policy — DevAsign"
            seoDescription="How DevAsign collects, processes, stores, transfers, secures, and disposes of personal data across our platform, systems, services, and business operations."
            navCategories={navCategories}
        >
            {/* ===== PURPOSE ===== */}
            <section id="purpose" className="docs-section">
                <br />
                <h1 className="docs-title">Data Privacy and Protection Policy</h1>
                <p className="docs-meta">
                    DevAsign, Inc. — Comprehensive Internal &amp; External Governance Policy<br />
                    <strong>Effective date:</strong> May 8, 2026 &nbsp;·&nbsp; <strong>Version:</strong> 1.0 &nbsp;·&nbsp; <strong>Review cycle:</strong> Annual or as required by law
                </p>
                <h2 className="docs-heading">1. Purpose and policy statement</h2>
                <p className="docs-paragraph">i. As part of our operations, DevAsign, Inc. (<strong>"DevAsign"</strong>, <strong>"We"</strong>, <strong>"Our"</strong>, <strong>"Us"</strong>, or <strong>"the Company"</strong>) may collect and process certain types of information (such as name, telephone numbers, address, emails, GitHub username, records, financials, etc.) of individuals and companies that makes them easily identifiable. These individuals and companies include current, past and prospective employees, clients, employees of clients, merchants, suppliers/vendors, customers of merchants and other individuals and companies whom DevAsign communicates or deals with, jointly and/or severally (<strong>"Data Subjects"</strong> or <strong>"Consumers"</strong>).</p>
                <p className="docs-paragraph">ii. DevAsign is committed to protecting personal data, preserving privacy rights, and ensuring responsible, lawful, and transparent processing of all data entrusted to it. This Data Privacy and Protection Policy (<strong>"Policy"</strong>) establishes the governance framework, operational standards, and compliance obligations that guide how We collect, process, store, transfer, secure, and dispose of personal data across Our platform, systems, services, and business operations.</p>
                <p className="docs-paragraph">iii. This Policy is designed to ensure alignment with applicable privacy and data protection laws, including but not limited to the California Consumer Privacy Act of 2018, as amended by the California Privacy Rights Act of 2020 (<strong>"CCPA/CPRA"</strong>), the Virginia Consumer Data Protection Act (<strong>"VCDPA"</strong>), the Colorado Privacy Act (<strong>"CPA"</strong>), the Connecticut Data Privacy Act (<strong>"CTDPA"</strong>), the Utah Consumer Privacy Act (<strong>"UCPA"</strong>), the Children's Online Privacy Protection Act (<strong>"COPPA"</strong>), the Gramm-Leach-Bliley Act (<strong>"GLBA"</strong>) where applicable, the Federal Trade Commission Act, the EU General Data Protection Regulation (<strong>"GDPR"</strong>) and the UK GDPR for users in those jurisdictions, and other applicable U.S. federal and state privacy laws (collectively, <strong>"Applicable Privacy Laws"</strong>). Failure to comply with the data protection rules and guiding principles set out in Applicable Privacy Laws as well as those set out in this Policy is a material violation of DevAsign's policies and may result in disciplinary action as required, including suspension or termination of employment or business relationship.</p>
                <p className="docs-paragraph">iv. Maintaining the Data Subject's trust and confidence requires that Data Subjects do not suffer negative consequences as a result of providing Us with their Personal Data. To this end, We are committed to complying with Applicable Privacy Laws, regulations, rules and principles to ensure security of Personal Data handled by the Company. This Policy describes the minimum standards that must be strictly adhered to in the collection, use and disclosure of Personal Data, and indicates that We commit to processing the Personal Data it receives or processes with confidentiality and security.</p>
            </section>

            {/* ===== SCOPE ===== */}
            <section id="scope" className="docs-section">
                <h2 className="docs-heading">2. Scope and objectives</h2>
                <p className="docs-paragraph">i. This Policy applies to all forms of systems, devices, repositories, APIs, databases, operations and processes within the DevAsign environment that involve the collection, storage, use, transmission and disposal of Personal Data. This includes all employees of DevAsign, as well as any external business partners (such as users, enterprise clients, contributors, partners, affiliates, merchants, suppliers, contractors, vendors and other service providers) who receive, send, collect, access, or process both structured and unstructured Personal Data in any way on behalf of DevAsign, including processing wholly or partly by automated means within and outside the United States. This Policy also applies to third party Data Processors and Service Providers who process Personal Data received from DevAsign.</p>
                <p className="docs-paragraph">ii. The objectives of this Policy are to:</p>
                <ul className="docs-legal-list">
                    <li>a. ensure lawful and ethical handling of personal data;</li>
                    <li>b. protect the rights and freedoms of Data Subjects and Consumers;</li>
                    <li>c. establish accountability and governance structures for privacy compliance;</li>
                    <li>d. reduce legal, operational, reputational, and cybersecurity risks;</li>
                    <li>e. enable secure innovation within DevAsign's platform ecosystem;</li>
                    <li>f. strengthen trust with users, customers, enterprise partners, and regulators.</li>
                </ul>
            </section>

            {/* ===== PRINCIPLES ===== */}
            <section id="principles" className="docs-section">
                <h2 className="docs-heading">3. General principles for processing of Personal Data</h2>
                <p className="docs-paragraph">DevAsign is committed to maintaining the principles set forth in Applicable Privacy Laws relating to the processing of Personal Data. To demonstrate this commitment as well as our aim to create a positive privacy culture within DevAsign, We adhere to the following basic principles relating to the processing of Personal Data:</p>

                <h3 className="docs-subheading">3.1 Lawfulness, fairness and transparency</h3>
                <p className="docs-paragraph">Personal Data must be processed lawfully, fairly and in a transparent manner at all times. This implies that Personal Data collected and processed by or on behalf of DevAsign must be in accordance with a specific, legitimate and lawful purpose disclosed to the Data Subject at or before the point of collection, save where the processing is otherwise allowed by law or within other legal grounds recognized in Applicable Privacy Laws.</p>

                <h3 className="docs-subheading">3.2 Data accuracy</h3>
                <p className="docs-paragraph">Personal Data must be accurate and kept up-to-date. In this regard DevAsign:</p>
                <ul className="docs-legal-list">
                    <li>a) shall ensure that any data it collects and/or processes is accurate and not misleading in a way that could be harmful to the Data Subject;</li>
                    <li>b) make efforts to keep Personal Data updated where reasonable and applicable; and</li>
                    <li>c) make timely efforts to correct or erase Personal Data when inaccuracies are discovered.</li>
                </ul>

                <h3 className="docs-subheading">3.3 Purpose limitation</h3>
                <p className="docs-paragraph">DevAsign collects Personal Data only for the purposes identified in the appropriate DevAsign Privacy Notice provided to the Data Subject and for which Consent has been obtained or another lawful basis applies. Such Personal Data cannot be reused for another purpose that is incompatible with the original purpose, except where a new disclosure has been made and (where required) a new Consent obtained.</p>
                <p className="docs-paragraph">The purposes for which DevAsign will use your personal data may include but is not limited to:</p>
                <ul className="docs-legal-list">
                    <li>a) Provision of services to you;</li>
                    <li>b) Customer care and support;</li>
                    <li>c) Marketing and promotional communications (subject to opt-out rights under the CAN-SPAM Act and applicable state laws);</li>
                    <li>d) Managing our networks and understanding network usage;</li>
                    <li>e) Account creation and management;</li>
                    <li>f) Platform access and authentication;</li>
                    <li>g) AI-assisted workflow execution;</li>
                    <li>h) Code analysis, repository indexing, and code review;</li>
                    <li>i) Multimodal context ingestion (processing linked tickets, connected chat threads, design files, video recordings and transcripts, images, and documents associated with a code review);</li>
                    <li>j) Payment processing and billing;</li>
                    <li>k) Fraud prevention, detection and security monitoring;</li>
                    <li>l) Service improvement and analytics;</li>
                    <li>m) Legal and regulatory compliance.</li>
                </ul>

                <h3 className="docs-subheading">3.4 Data minimization</h3>
                <p className="docs-paragraph">3.4.1 DevAsign limits Personal Data collection and usage to data that is relevant, adequate, and reasonably necessary for carrying out the purpose for which the data is processed.</p>
                <p className="docs-paragraph">3.4.2 DevAsign will evaluate whether and to what extent the processing of personal data is necessary and where the purpose allows, anonymized or de-identified data must be used.</p>

                <h3 className="docs-subheading">3.5 Integrity and confidentiality</h3>
                <p className="docs-paragraph">3.5.1 DevAsign shall establish adequate controls in order to protect the integrity and confidentiality of Personal Data, both in digital and physical format and to prevent personal data from being accidentally or deliberately compromised.</p>
                <p className="docs-paragraph">3.5.2 Personal Data of Data Subjects is protected from unauthorized viewing or access and from unauthorized changes to ensure that it is reliable and correct.</p>
                <p className="docs-paragraph">3.5.3 Any personal data processing undertaken by an employee who has not been authorized to carry out such processing as part of their legitimate duties is unauthorized.</p>
                <p className="docs-paragraph">3.5.4 DevAsign Employees may have access to Personal Data only as is appropriate for the type and scope of the task in question and are forbidden to use Personal Data for their own private or commercial purposes or to disclose them to unauthorized persons, or to make them available in any other way.</p>
                <p className="docs-paragraph">3.5.5 All Parties processing Personal Data are informed at the commencement of their relationship with DevAsign about the obligation to maintain personal data privacy. This obligation shall remain in force even after the relationship has ended.</p>

                <h3 className="docs-subheading">3.6 Personal Data retention</h3>
                <p className="docs-paragraph">3.6.1 All personal information shall be retained, stored and destroyed by DevAsign in line with legislative and regulatory guidelines. For all Personal Data and records obtained, used and stored within the Company, DevAsign shall perform periodical reviews of the data retained to confirm the accuracy, purpose, validity and requirement to retain.</p>
                <p className="docs-paragraph">3.6.2 To the extent permitted by Applicable Privacy Laws and without prejudice to DevAsign's Document Retention Policy, the length of storage of Personal Data shall, amongst other things, be determined by:</p>
                <ul className="docs-legal-list">
                    <li>(a) the contract terms agreed between DevAsign and the Data Subject or as long as it is needed for the purpose for which it was obtained; or</li>
                    <li>(b) whether the transaction or relationship has statutory implication or a required retention period (e.g., tax, employment, securities, or financial recordkeeping requirements under U.S. federal or state law); or</li>
                    <li>(c) whether there is an express request for deletion of Personal Data by the Data Subject, provided that such request will only be treated where the Data Subject is not under any investigation which may require DevAsign to retain such Personal Data or there is no subsisting contractual arrangement with the Data Subject that would require the processing of the Personal Data; or</li>
                    <li>(d) whether DevAsign has another lawful basis for retaining that information beyond the period for which it is necessary to serve the original purpose.</li>
                </ul>
                <p className="docs-paragraph">Notwithstanding the foregoing and consistent with Applicable Privacy Laws, DevAsign shall be entitled to retain and process Personal Data for archiving, scientific or historical research, or statistical purposes in the public interest, subject to appropriate safeguards.</p>
                <p className="docs-paragraph">3.6.3 DevAsign will delete Personal Data in its possession where such Personal Data is no longer required by DevAsign or in line with DevAsign's Retention Policy, provided no law or regulation in force requires DevAsign to retain such Personal Data.</p>

                <h3 className="docs-subheading">3.7 Accountability</h3>
                <p className="docs-paragraph">3.7.1 DevAsign demonstrates accountability in line with Applicable Privacy Laws obligations by monitoring and continuously improving data privacy practices within DevAsign.</p>
                <p className="docs-paragraph">3.7.2 Any individual, employee, customer, or partner who breaches this Policy may be subject to disciplinary action (up to and including termination of their relationship); and may also face civil or criminal liability if their action violates the law.</p>
            </section>

            {/* ===== PRIVACY NOTICE ===== */}
            <section id="privacy-notice" className="docs-section">
                <h2 className="docs-heading">4. Data privacy notice</h2>
                <p className="docs-paragraph">4.1 DevAsign considers Personal Data as confidential and as such must be adequately protected from unauthorized use and/or disclosure. DevAsign will ensure that the Data Subjects are provided with adequate information regarding the use of their Personal Data as well as acquire their respective Consent, where required by Applicable Privacy Laws.</p>
                <p className="docs-paragraph">4.2 DevAsign shall display a simple and conspicuous notice (Privacy Notice) on any medium through which Personal Data is being collected or processed. The following information must be considered for inclusion in the Privacy Notice, as appropriate in distinct circumstances in order to ensure fair and transparent processing:</p>
                <ul className="docs-legal-list">
                    <li>a) The categories of Personal Data collected;</li>
                    <li>b) The categories of sources from which the Personal Data is collected;</li>
                    <li>c) The business or commercial purposes for collecting, using, selling, or sharing Personal Data;</li>
                    <li>d) The categories of third parties with whom Personal Data is shared, sold, or disclosed;</li>
                    <li>e) What constitutes Data Subject's Consent (where consent is the legal basis);</li>
                    <li>f) The technical methods used to collect and store the information;</li>
                    <li>g) The retention periods (or criteria used to determine the retention period) for each category of Personal Data;</li>
                    <li>h) The rights available to Data Subjects under Applicable Privacy Laws and how to exercise them, including the right to opt out of the sale or sharing of Personal Data and the right to limit the use of Sensitive Personal Information under the CCPA/CPRA;</li>
                    <li>i) Information about whether DevAsign has actual knowledge that it sells or shares Personal Data of consumers under sixteen (16) years of age; and</li>
                    <li>j) Available remedies in the event of violation of the Policy and the timeframe for remedy.</li>
                </ul>
                <p className="docs-paragraph">4.3 DevAsign's Privacy Notice is available on DevAsign's website at <a href="/privacy" className="docs-link">devasign.com/privacy</a>.</p>
            </section>

            {/* ===== LEGAL GROUNDS ===== */}
            <section id="legal-grounds" className="docs-section">
                <h2 className="docs-heading">5. Legal grounds for processing of Personal Data</h2>
                <p className="docs-paragraph">The personal data We collect from our customers and how We collect it depends on the services that our customers subscribe to, how they use our services and how they interact or interface with us. This also applies to persons who are not customers of DevAsign but have interacted with DevAsign. We may also obtain your personal data from a third party with permission to share it with us.</p>
                <p className="docs-paragraph">Please note that We only process your personal data based on lawful grounds set out in Applicable Privacy Laws. Accordingly, processing of Personal Data by DevAsign shall be lawful if at least one of the following applies:</p>
                <ul className="docs-legal-list">
                    <li>a) where you give Us consent to the processing of your Personal Data for one or more specific purposes. You are at liberty to withdraw the consent and DevAsign will cease to process your Personal Data where there is no other lawful basis to do so;</li>
                    <li>b) where the processing is necessary for the performance of a contract to which you are a party or in order to take steps at your request prior to entering into a contract;</li>
                    <li>c) where processing is necessary for compliance with a legal obligation to which DevAsign is subject under U.S. federal or state law;</li>
                    <li>d) where processing is necessary in order to protect your vital interests or those of another natural person;</li>
                    <li>e) where processing is necessary for the establishment, exercise, or defense of legal claims; or</li>
                    <li>f) where processing is necessary for the purpose of the legitimate interests pursued by DevAsign or by a third party to whom the data is disclosed, except where such interests are overridden by your fundamental rights and freedoms.</li>
                </ul>

                <h3 className="docs-subheading">5.1 Sources of Personal Data</h3>
                <p className="docs-paragraph">We collect your personal data when you do any of the following:</p>
                <ul className="docs-legal-list">
                    <li>a) Buy or use any of our products and services;</li>
                    <li>b) Use our network or other DevAsign products and services;</li>
                    <li>c) Register for a specific product or service;</li>
                    <li>d) Connect a code repository, chat tool, project-management or issue-tracking tool, design tool, or other integration to the Service;</li>
                    <li>e) Upload, link, or submit attachments — such as videos, design files, images, or documents — to the Service;</li>
                    <li>f) Fill in your information on our KYC registration form, self-service applications, social media platforms, etc.;</li>
                    <li>g) Visit or browse our website;</li>
                    <li>h) Have given permission to other companies to share information about you;</li>
                    <li>i) Where your information is publicly available;</li>
                    <li>j) Are the customers of a business We acquire; or</li>
                    <li>k) Take part in a competition, prize draw or survey.</li>
                </ul>

                <h3 className="docs-subheading">5.2 Categories of Personal Data collected</h3>
                <p className="docs-paragraph">Personal data We have about our customers, where applicable, may include: name, phone number, address, photograph, government-issued ID number (where required for KYC), educational information, job experience, signature, company details, details of officers of company, payment information, IP addresses, device identifiers, cookie identifiers, and similar online identifiers.</p>
                <p className="docs-paragraph">In connection with your use of the platform, We also collect and process: account and identity data (such as your GitHub username, profile, and email address); repository and source-code data, including pull requests, commits, diffs, and file contents; linked task and ticket content (such as Linear issues); communications from connected chat tools (such as Slack or Discord threads); design-file content and metadata (such as Figma frames); video recordings, transcripts, and summaries (such as Loom, YouTube, or Vimeo links you provide); images, screenshots, and documents you upload; the AI-generated review output produced from the foregoing; blockchain wallet addresses and transaction details (such as Stellar addresses); billing and payment information processed by our payment processor; and usage, log, device, and analytics data.</p>
            </section>

            {/* ===== CONSENT ===== */}
            <section id="consent" className="docs-section">
                <h2 className="docs-heading">6. Consent</h2>
                <p className="docs-paragraph">Where processing of Personal Data is based on consent, DevAsign shall obtain the requisite consent of Data Subjects at the time of collection of Personal Data. Here, DevAsign will ensure:</p>
                <ul className="docs-legal-list">
                    <li>a) that the specific purpose of collection is made known to you and the Consent is requested in clear and plain language;</li>
                    <li>b) that the Consent is freely given by you and obtained without fraud, coercion or undue influence;</li>
                    <li>c) that the Consent is sufficiently distinct from other matters to which you have agreed;</li>
                    <li>d) that the Consent is explicitly provided in an affirmative manner;</li>
                    <li>e) that Consent is obtained for each purpose of Personal Data collection and processing; and</li>
                    <li>f) that it is clearly communicated to and understood by you that you can update, manage or withdraw your Consent at any time.</li>
                </ul>

                <h3 className="docs-subheading">6.1 Valid Consent</h3>
                <p className="docs-paragraph">6.1.1 For Consent to be valid, it must be given voluntarily by you where you are appropriately informed. Consent cannot be implied. Silence, pre-ticked boxes, or inactivity does not constitute Consent.</p>
                <p className="docs-paragraph">6.1.2 Consent in respect of Sensitive Personal Information must be explicit. A pre-checked box would not suffice.</p>

                <h3 className="docs-subheading">6.2 Consent of minors</h3>
                <p className="docs-paragraph">In compliance with the Children's Online Privacy Protection Act (<strong>"COPPA"</strong>), DevAsign does not knowingly collect, use, or disclose Personal Data from children under the age of thirteen (13) without verifiable parental consent. In respect of children between the ages of thirteen (13) and sixteen (16), DevAsign will not sell or share Personal Data without affirmative authorization, consistent with the CCPA/CPRA. If We become aware that We have inadvertently collected Personal Data from a child without appropriate consent, We will take reasonable steps to delete such information.</p>
            </section>

            {/* ===== RIGHTS ===== */}
            <section id="rights" className="docs-section">
                <h2 className="docs-heading">7. Data Subject and Consumer rights</h2>
                <p className="docs-paragraph">7.1 All individuals who are the subject of Personal Data held by DevAsign are entitled, subject to and to the extent provided by Applicable Privacy Laws, to the following rights:</p>
                <ul className="docs-legal-list">
                    <li><strong>a) Right to Know / Access</strong> — the right to request access to and details about the Personal Data DevAsign has collected, used, disclosed, and (where applicable) sold or shared about you, and to receive a copy in a portable, readily usable format where data is held electronically in a structured form;</li>
                    <li><strong>b) Right to Information</strong> — the right to information on your personal data collected and stored, including categories and sources;</li>
                    <li><strong>c) Right to Correct / Rectify</strong> — the right to request rectification or modification of inaccurate Personal Data which DevAsign keeps;</li>
                    <li><strong>d) Right to Delete</strong> — the right to request deletion of your Personal Data, except as restricted by law or DevAsign's statutory obligations;</li>
                    <li><strong>e) Right to Portability</strong> — the right to receive your Personal Data in a structured, commonly used, and machine-readable format and to request transmission of that data to another controller where technically feasible;</li>
                    <li><strong>f) Right to Opt Out of Sale or Sharing</strong> — the right to direct DevAsign not to sell or share your Personal Data with third parties, including for cross-context behavioral advertising purposes, consistent with the CCPA/CPRA and similar state laws;</li>
                    <li><strong>g) Right to Limit Use of Sensitive Personal Information</strong> — the right to limit DevAsign's use and disclosure of Sensitive Personal Information to that which is reasonably necessary to perform the services or provide the goods reasonably expected;</li>
                    <li><strong>h) Right to Object / Restrict Processing</strong> — the right to object to, and to request that DevAsign restricts, the processing of your information except as required by law or DevAsign's statutory obligations;</li>
                    <li><strong>i) Right to Object to Automated Decision-Making and Profiling</strong> — the right to opt out of, or contest, decisions made solely on the basis of automated processing that produce legal or similarly significant effects;</li>
                    <li><strong>j) Right to Non-Discrimination</strong> — the right not to receive discriminatory treatment for exercising any rights conferred by Applicable Privacy Laws; and</li>
                    <li><strong>k) Right to Appeal</strong> — where required by state law (e.g., Virginia, Colorado, Connecticut), the right to appeal a refusal to take action on a privacy rights request.</li>
                </ul>

                <h3 className="docs-subheading">7.2 Opting out of marketing and unsolicited messages</h3>
                <p className="docs-paragraph">If you no longer want to receive marketing messages from DevAsign, you can choose to opt out at any time. If you've previously opted in to receive personalized content based on how and where you use our network, you can also opt out at any time. These are various ways to opt out:</p>
                <ul className="docs-legal-list">
                    <li>Contact our customer services team — see the Contact Us page;</li>
                    <li>Click the unsubscribe link from our email (CAN-SPAM compliant);</li>
                    <li>Disable push notification messages, including marketing messages, at any time in our apps by changing the notification settings on your device or by uninstalling the app;</li>
                    <li>Submit a "Do Not Sell or Share My Personal Information" request via our website;</li>
                    <li>Honor of Global Privacy Control (GPC) browser signals where applicable.</li>
                </ul>
                <p className="docs-paragraph">7.3 DevAsign's well-defined procedure regarding how to handle and answer Data Subject's requests are contained in DevAsign's Data Subject Access Request Policy.</p>
                <p className="docs-paragraph">7.4 You can exercise any of your rights by completing DevAsign's Subject Access Request (SAR) Form and submitting it to the Company via <a href="mailto:privacy@devasign.com" className="docs-link">privacy@devasign.com</a>, or by calling our toll-free privacy line where available. We will respond within the timeframes required by Applicable Privacy Laws (generally within forty-five (45) days under CCPA/CPRA, with one extension permitted).</p>
                <p className="docs-paragraph">7.5 We may verify your identity before responding to a request, in order to protect your Personal Data. Authorized agents may submit requests on your behalf with appropriate documentation.</p>
            </section>

            {/* ===== TRANSFERS ===== */}
            <section id="transfers" className="docs-section">
                <h2 className="docs-heading">8. Transfer of Personal Data</h2>
                <h3 className="docs-subheading">8.1 Service Providers and third parties within the United States</h3>
                <p className="docs-paragraph">DevAsign may engage the services of third parties (including Service Providers and Contractors as defined under the CCPA/CPRA) in order to process your Personal Data collected by us. The processing by such third parties shall be governed by a written contract with DevAsign that contractually restricts the use of Personal Data to the specified purposes and otherwise meets the requirements of Applicable Privacy Laws. We may also share your personal data with law enforcement agencies where required by law to do so.</p>
                <p className="docs-paragraph"><strong>AI providers and sub-processors.</strong> To provide AI-assisted code review and related features, DevAsign transmits your content — including code, repository contents, linked tickets, connected chat threads, design files, video recordings and transcripts, images, and documents — to third-party artificial-intelligence and machine-learning providers (such as Anthropic and Google) that process the data on Our behalf to generate, summarize, transcribe, or analyze content. These providers act as Our Service Providers / sub-processors under written contracts that restrict their use of the data to providing the service to Us and that, for the service tiers We use, prohibit them from using your content to train their general-purpose models, except as permitted by you or required by law. We may update the providers We use from time to time; a current list is available on request.</p>
                <p className="docs-paragraph">Where applicable, DevAsign will share your information with:</p>
                <ul className="docs-legal-list">
                    <li>a) Partners, suppliers or agents involved in delivering the products and services you've ordered or used, handled by our business partner who is bound by contract to protect your personal data.</li>
                    <li>b) AI and machine-learning providers, hosting and database providers, payment processors, and analytics providers, who process Personal Data on Our behalf as Service Providers / sub-processors under contract.</li>
                    <li>c) Law enforcement agencies, government bodies, regulatory organizations, courts or other public authorities if We have to, or are authorized to by law (including in response to subpoenas, court orders, or other valid legal process under U.S. federal or state law).</li>
                    <li>d) A third party or body where such disclosure is required to satisfy any applicable law, or other legal or regulatory requirement (e.g., to detect or prevent fraud, money laundering, or the commission of any other crime).</li>
                    <li>e) A merging or acquiring entity where We undergo business reorganization (e.g., merger, acquisition, financing, or sale of all or substantially all of our assets).</li>
                </ul>

                <h3 className="docs-subheading">8.2 International transfer of Personal Data</h3>
                <p className="docs-paragraph">8.2.1 Where Personal Data is to be transferred to a country outside the United States, or where Personal Data of EU/UK/EEA residents is transferred to the United States, DevAsign shall put adequate measures in place to ensure the security of such Personal Data, in accordance with Applicable Privacy Laws.</p>
                <p className="docs-paragraph">8.2.2 For transfers of personal data of individuals in the European Economic Area, the United Kingdom, or Switzerland to the United States or other jurisdictions not deemed adequate, DevAsign relies on one or more of the following transfer mechanisms:</p>
                <ul className="docs-legal-list">
                    <li>a) Your explicit consent;</li>
                    <li>b) Standard Contractual Clauses (<strong>"SCCs"</strong>) approved by the European Commission and, where applicable, the UK International Data Transfer Addendum;</li>
                    <li>c) Where applicable, the EU-U.S. Data Privacy Framework, the UK Extension to the EU-U.S. Data Privacy Framework, and the Swiss-U.S. Data Privacy Framework;</li>
                    <li>d) The transfer is necessary for the performance of a contract between DevAsign and you, or implementation of pre-contractual measures taken at your request;</li>
                    <li>e) The transfer is necessary to conclude a contract between DevAsign and a third party in your interest;</li>
                    <li>f) The transfer is necessary for important reasons of public interest;</li>
                    <li>g) The transfer is for the establishment, exercise or defense of legal claims;</li>
                    <li>h) The transfer is necessary in order to protect your vital interests or those of other persons, where you are physically or legally incapable of giving consent.</li>
                </ul>
                <p className="docs-paragraph">8.2.3 In all circumstances of cross-border transfer, you have been informed through the Privacy Notice of the specific principle(s) of data protection that may be implicated. DevAsign will take all necessary steps to ensure that the Personal Data is transmitted in a safe and secure manner. Details of the protection given to your information when it is transferred internationally shall be provided to you upon request.</p>
            </section>

            {/* ===== BREACH ===== */}
            <section id="breach" className="docs-section">
                <h2 className="docs-heading">9. Data breach management procedure</h2>
                <p className="docs-paragraph">9.1 A data breach procedure is established and maintained to deal with incidents concerning Personal Data or privacy practices leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, Personal Data transmitted, stored or otherwise processed.</p>
                <p className="docs-paragraph">9.2 Employees will inform their designated line manager or the Privacy Lead of DevAsign immediately about cases of violations of this Policy or other regulations on the protection of Personal Data, in accordance with DevAsign's Personal Data Breach Management Procedure in respect of any:</p>
                <ul className="docs-legal-list">
                    <li>a) improper transmission of Personal Data across borders;</li>
                    <li>b) loss or theft of data or equipment on which data is stored;</li>
                    <li>c) accidental sharing of data with someone who does not have a right to know this information;</li>
                    <li>d) inappropriate access controls allowing unauthorized use;</li>
                    <li>e) equipment failure;</li>
                    <li>f) human error resulting in data being shared with someone who does not have a right to know; and</li>
                    <li>g) hacking or ransomware attack.</li>
                </ul>
                <p className="docs-paragraph">9.3 A data protection breach notification must be made without unreasonable delay following any data breach to ensure that:</p>
                <ul className="docs-legal-list">
                    <li>a) immediate remedial steps can be taken in respect of the breach;</li>
                    <li>b) any reporting duties to applicable regulatory authorities (including state attorneys general, the Federal Trade Commission, supervisory authorities under the GDPR within 72 hours where applicable, and any sector-specific regulators) can be complied with;</li>
                    <li>c) any affected Data Subject can be informed in accordance with applicable U.S. state breach notification statutes and other Applicable Privacy Laws; and</li>
                    <li>d) any stakeholder communication can be managed.</li>
                </ul>
                <p className="docs-paragraph">9.4 When a potential breach has occurred, DevAsign will investigate to determine if an actual breach has occurred and the actions required to manage and investigate the breach as follows:</p>
                <ul className="docs-legal-list">
                    <li>a) Validate the Personal Data breach.</li>
                    <li>b) Ensure proper and impartial investigation (including digital forensics if necessary) is initiated, conducted, documented, and concluded.</li>
                    <li>c) Identify remediation requirements and track resolution.</li>
                    <li>d) Report findings to senior management and the Board (where appropriate).</li>
                    <li>e) Coordinate with appropriate authorities as needed (e.g., FBI, state AGs, FTC, sectoral regulators).</li>
                    <li>f) Coordinate internal and external communications.</li>
                    <li>g) Ensure that impacted Data Subjects are properly notified in accordance with the timing and content requirements of applicable U.S. state breach notification laws.</li>
                </ul>
            </section>

            {/* ===== DPIA ===== */}
            <section id="dpia" className="docs-section">
                <h2 className="docs-heading">10. Data Protection Impact Assessment</h2>
                <p className="docs-paragraph">DevAsign shall carry out a Data Protection Impact Assessment (<strong>"DPIA"</strong>) or Data Protection Assessment (<strong>"DPA"</strong>), as required under state laws such as the VCDPA, CPA, CTDPA, and the GDPR for EU/UK users, in respect of any new project, IT system, or processing activity involving the processing of Personal Data that is likely to result in heightened risk to the rights and freedoms of Data Subjects, including (but not limited to):</p>
                <ul className="docs-legal-list">
                    <li>a) processing for purposes of targeted advertising;</li>
                    <li>b) the sale of Personal Data;</li>
                    <li>c) processing of Sensitive Personal Information;</li>
                    <li>d) processing involving profiling that presents a reasonably foreseeable risk of unfair or deceptive treatment, financial or physical injury, or intrusion upon the solitude or seclusion of consumers; and</li>
                    <li>e) any other processing activities that present a heightened risk of harm to consumers.</li>
                </ul>
                <p className="docs-paragraph">DevAsign shall carry out the DPIA in line with the procedures laid down in the DevAsign Data Protection Impact Assessment Policy.</p>
            </section>

            {/* ===== DATA SECURITY ===== */}
            <section id="data-security" className="docs-section">
                <h2 className="docs-heading">11. Data security</h2>
                <p className="docs-paragraph">11.1 All Personal Data is kept securely and is not stored any longer than necessary. DevAsign will ensure that appropriate administrative, technical, and physical measures are employed against unauthorized access, accidental loss, damage, and destruction to data. This includes the use of password-encrypted databases for digital storage and locked cabinets for those using paper form.</p>
                <p className="docs-paragraph">11.2 To ensure security of Personal Data, DevAsign will, among other things, implement the following appropriate technical and organizational controls aligned with industry-recognized frameworks (such as NIST Cybersecurity Framework, SOC 2, and ISO/IEC 27001):</p>
                <ul className="docs-legal-list">
                    <li>a) Industry-accepted hardening standards for workstations, servers, and databases;</li>
                    <li>b) Full disk software encryption on all corporate workstations/laptops operating systems drives storing Personal Data;</li>
                    <li>c) Encryption at rest and in transit, including key management for key databases (consistent with FIPS-validated cryptographic modules where required);</li>
                    <li>d) Security audit logging across all systems managing Personal Data;</li>
                    <li>e) Multi-factor authentication for access to systems containing Personal Data;</li>
                    <li>f) Restrictions on the use of removable media such as USB flash drives;</li>
                    <li>g) Anonymization, pseudonymization, and tokenization techniques on testing environments;</li>
                    <li>h) Physical access controls where Personal Data is stored in hardcopy;</li>
                    <li>i) Vendor risk management and security assessments for all Service Providers;</li>
                    <li>j) Routine vulnerability scanning, penetration testing, and patch management;</li>
                    <li>k) An incident response plan tested at least annually.</li>
                </ul>
            </section>

            {/* ===== PRIVACY LEAD ===== */}
            <section id="privacy-lead" className="docs-section">
                <h2 className="docs-heading">12. Privacy Lead / Data Protection Officer</h2>
                <p className="docs-paragraph">DevAsign shall appoint a Privacy Lead (and, where required by the GDPR, a Data Protection Officer (<strong>"DPO"</strong>)) responsible for overseeing the Company's data protection strategy and its implementation to ensure compliance with Applicable Privacy Laws. The Privacy Lead/DPO shall be a knowledgeable person on data privacy and protection principles and shall be familiar with Applicable Privacy Laws. The main tasks of the Privacy Lead / DPO include:</p>
                <ul className="docs-legal-list">
                    <li>a) administering data protection policies and practices of DevAsign;</li>
                    <li>b) monitoring compliance with Applicable Privacy Laws, data protection policies, awareness-raising, training, and audits;</li>
                    <li>c) advising the business, management, employees and third parties who carry on processing activities of their obligations under Applicable Privacy Laws;</li>
                    <li>d) acting as a contact point for DevAsign in respect of privacy inquiries and regulatory communications;</li>
                    <li>e) monitoring and updating the implementation of the data protection policies and practices of DevAsign and ensuring compliance amongst all employees of DevAsign;</li>
                    <li>f) ensuring that DevAsign undertakes Data Protection Assessments and curbs potential risk in DevAsign data processing operations; and</li>
                    <li>g) maintaining a data inventory / record of processing activities for all DevAsign data collection and processing operations.</li>
                </ul>
            </section>

            {/* ===== TRAINING ===== */}
            <section id="training" className="docs-section">
                <h2 className="docs-heading">13. Training</h2>
                <p className="docs-paragraph">DevAsign shall ensure that employees who collect, access and process Personal Data receive adequate data privacy and protection training in order to develop the necessary knowledge, skills and competence required to effectively manage the compliance framework under this Policy and Applicable Privacy Laws with regard to the protection of Personal Data. On an annual basis, DevAsign shall develop a capacity building plan for its employees on data privacy and protection in line with Applicable Privacy Laws.</p>
            </section>

            {/* ===== AUDIT ===== */}
            <section id="audit" className="docs-section">
                <h2 className="docs-heading">14. Data protection audit</h2>
                <p className="docs-paragraph">DevAsign shall conduct an annual privacy and data protection audit, either internally or through a qualified independent third-party assessor, to verify DevAsign's compliance with the provisions of Applicable Privacy Laws.</p>
                <p className="docs-paragraph">Where required, DevAsign will obtain industry-recognized attestations and certifications (such as SOC 2 Type II reports, ISO/IEC 27001 certification, or equivalent) and will retain audit reports for the period required by law and best practice.</p>
            </section>

            {/* ===== CHANGES ===== */}
            <section id="changes" className="docs-section">
                <h2 className="docs-heading">15. Changes to the Policy</h2>
                <p className="docs-paragraph">DevAsign reserves the right to change, amend or alter this Policy at any point in time. If We amend this Policy, We will provide you with the updated version and, where required by Applicable Privacy Laws, will notify you of material changes in advance of their effective date.</p>
            </section>

            {/* ===== GLOSSARY ===== */}
            <section id="glossary" className="docs-section">
                <h2 className="docs-heading">16. Glossary</h2>
                <p className="docs-definition"><strong>"Consent"</strong> means any freely given, specific, informed and unambiguous indication of the Data Subject's wishes by which he or she, through a statement or a clear affirmative action, signifies agreement to the processing of Personal Data relating to him or her.</p>
                <p className="docs-definition"><strong>"Consumer"</strong> means a natural person who is a resident of a U.S. state, as defined under applicable state privacy laws (including the CCPA/CPRA).</p>
                <p className="docs-definition"><strong>"Database"</strong> means a collection of data organized in a manner that allows access, retrieval, deletion and processing of that data; it includes but is not limited to structured, unstructured, cached and file system type Databases.</p>
                <p className="docs-definition"><strong>"Data Processor / Service Provider"</strong> means a person or organization that processes Personal Data on behalf of and on instructions of DevAsign, Inc.</p>
                <p className="docs-definition"><strong>"Data Subject"</strong> means any natural person who can be identified, directly or indirectly, by reference to an identification number or to one or more factors specific to his or her physical, physiological, mental, economic, cultural or social identity.</p>
                <p className="docs-definition"><strong>"CCPA/CPRA"</strong> means the California Consumer Privacy Act of 2018, as amended by the California Privacy Rights Act of 2020, and its implementing regulations.</p>
                <p className="docs-definition"><strong>"GDPR"</strong> means the EU General Data Protection Regulation (Regulation (EU) 2016/679), and the UK GDPR as incorporated into UK law.</p>
                <p className="docs-definition"><strong>"Personal Data"</strong> means any information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular Data Subject or household. It can be anything from a name, address, photograph, email address, bank details, posts on social networking websites, medical information, and other unique identifiers such as but not limited to MAC address, IP address, IMEI number, IMSI number, SIM, Personally Identifiable Information (<strong>"PII"</strong>), and other similar identifiers.</p>
                <p className="docs-definition"><strong>"Sensitive Personal Information"</strong> means data revealing racial or ethnic origin, religious or philosophical beliefs, union membership, genetic data, biometric data processed for the purpose of uniquely identifying a natural person, data concerning health, data concerning a natural person's sex life or sexual orientation, government-issued identifiers (such as a Social Security number, driver's license, state identification card, or passport number), account log-in credentials, financial account, debit card, or credit card numbers in combination with any required security or access code, password, or credentials allowing access to an account, precise geolocation, and the contents of consumer mail, email, and text messages unless the business is the intended recipient of the communication.</p>
            </section>

            {/* ===== CONTACT ===== */}
            <section id="contact" className="docs-section">
                <h2 className="docs-heading">Contact and escalation</h2>
                <p className="docs-paragraph">Questions, complaints, or concerns regarding privacy practices may be directed to:</p>
                <div className="docs-callout">
                    <strong>Privacy Lead / Data Protection Officer</strong><br />
                    DevAsign, Inc.<br />
                    2261 Market Street, San Francisco, CA 94114, US<br />
                    Email: <a href="mailto:oss@devasign.com" className="docs-link">oss@devasign.com</a>
                </div>
                <p className="docs-paragraph">EU/UK individuals also have the right to lodge a complaint with their local supervisory authority. California residents may contact the California Privacy Protection Agency or the California Attorney General. Other U.S. residents may contact their state Attorney General.</p>
            </section>
        </LegalDocLayout>
    );
}
