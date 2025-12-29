import { useState } from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import svgPaths from "../imports/svg-mzil336qsi";
import imgHeroImage from "../assets/013a8d1f9bfd97354677e6e611c314b3d894e9ce.png";
import imgHeroImage1 from "../assets/787f6fe36329cedaf5da3b0f31092bec8f8c3da0.png";
import imgHeroImage2 from "../assets/3b4654b781f5656cf586bf63df0ec8d0e553e20b.png";
import imgDevasignVector from "../assets/6a4be5d08487314716e9608ba30d92fb98e728f8.png";
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/layout/HeroSection';
import { StarIcon } from '../components/StarIcon';

// Home Hero Content
function HomeHeroContent() {
    return (
        <>
            <div className="flex flex-col items-center gap-6 md:gap-8 mb-8 md:mb-12">
                {/* Coming Soon Badge */}
                <div className="flex gap-2.5 items-center">
                    <StarIcon />
                    <p className="font-geist-medium text-[#aaaaaa] text-sm">Coming soon • Join the waitlist</p>
                </div>

                {/* Title */}
                <h1 className="font-geist-regular text-white text-center text-3xl md:text-5xl lg:text-[64px] tracking-[-3.2px] max-w-[950px] leading-tight md:leading-normal">
                    Review code and automate bounty payouts with AI
                </h1>

                {/* Description */}
                <p className="font-geist-medium text-white text-center text-sm md:text-base tracking-[-0.32px] opacity-75 max-w-[758px] leading-relaxed">
                    DevAsign helps open-source project maintainers review contributors code, give detailed feedback & automate bounty payout when needed.
                </p>

                {/* CTA Button */}
                <Link to="/waitlist" className="join-waitlist-btn bg-[#fe891f] px-7 py-3.5 font-geist-extrabold text-[#090603] text-[15px] tracking-[-0.3px] transition-colors">
                    Join Waitlist
                </Link>
            </div>

            {/* Hero Images - Responsive */}
            <div className="flex items-center justify-center gap-0 md:gap-4 pt-12 overflow-visible pb-4 md:pb-0 min-h-[300px] md:min-h-[400px]">
                {/* Image 1 */}
                <div className="hidden md:block flex-shrink-0 transform rotate-[8deg] skew-x-[7.923deg]">
                    <div className="w-[280px] md:w-[300px] lg:w-[418px] h-[400px] md:h-[450px] lg:h-[420px] relative">
                        <img alt="" className="absolute h-full w-[93.95%] left-[3.02%]" src={imgHeroImage} />
                    </div>
                </div>

                {/* Image 2 - Main */}
                <div className="flex-shrink-0 transform rotate-[8deg] skew-x-[7.923deg]">
                    <div className="w-[280px] md:w-[300px] lg:w-[418px] h-[400px] md:h-[450px] lg:h-[420px] relative">
                        <img alt="" className="absolute h-full w-[89.65%] left-[5.18%]" src={imgHeroImage1} />
                    </div>
                </div>

                {/* Image 3 */}
                <div className="hidden md:block flex-shrink-0 transform rotate-[8deg] skew-x-[7.923deg]">
                    <div className="w-[280px] md:w-[300px] lg:w-[418px] h-[400px] md:h-[450px] lg:h-[420px] relative">
                        <img alt="" className="absolute h-full w-[93.95%] left-[3.02%]" src={imgHeroImage2} />
                    </div>
                </div>
            </div>

            {/* Backed By - Absolutely positioned */}
            <div className="flex items-center justify-center mt-8 md:mt-12 relative z-50 gap-4">
                <p className="font-['Geist_Mono:Regular',sans-serif] text-white text-sm opacity-90">Backed by</p>
                <div className="h-[40px] w-[123.125px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 124 40">
                        <path clipRule="evenodd" d={svgPaths.p1c7e5480} fill="#F0F0EE" fillRule="evenodd" />
                    </svg>
                </div>
            </div>
        </>
    );
}

// How It Works Section
function HowItWorksSection() {
    const steps = [
        {
            icon: (
                <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p161c9780} fill="#FE891F" />
                    <path d={svgPaths.p1af15100} fill="#FE891F" />
                </svg>
            ),
            title: "Install DevAsign app",
            description: "Get started by installing DevAsign GitHub app to your project and grant it the required access."
        },
        {
            icon: (
                <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p397c3400} fill="#FE891F" />
                </svg>
            ),
            title: "Scan repo for open PRs",
            description: "Our AI analyzes the repo's to find patterns. Issues & open PRs are matched for review, test and feedback."
        },
        {
            icon: (
                <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p96e8c00} fill="#FE891F" />
                </svg>
            ),
            title: "Review PR for merge",
            description: "Receive structured analysis and actionable feedback that can be sent to individual contributor to implement."
        }
    ];

    return (
        <section className="w-full py-12 md:py-20 px-4 md:px-8">
            <div className="max-w-[1260px] mx-auto">
                {/* Section Title */}
                <h2 className="font-geist-light text-white text-center text-2xl md:text-[40px] tracking-[-2px] opacity-90 mb-8 md:mb-12 max-w-[600px] mx-auto leading-tight md:leading-normal">
                    The smartest way to manage open-source development
                </h2>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-[rgba(19,19,19,0.5)] border border-[rgba(254,137,31,0.15)] p-8 md:p-10">
                            {/* Icon */}
                            <div className="bg-[#090603] border border-[#2a2a2a] rounded-[30px] size-[60px] flex items-center justify-center mb-6 md:mb-8">
                                <div className="size-[24px]">
                                    {step.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-4">
                                <h3 className="font-geist-regular text-amber-100 text-lg md:text-xl tracking-[-0.4px]">
                                    {step.title}
                                </h3>
                                <p className="font-geist-regular text-[#aaaaaa] text-sm md:text-base tracking-[-0.32px] leading-[25px]">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Accordion Item Component
function AccordionItem({ title, content, isOpen, onClick }: { title: string; content: string; isOpen: boolean; onClick: () => void }) {
    return (
        <div className="border-b-2 border-[rgba(255,255,255,0.1)]">
            <button
                className="w-full flex items-center justify-between py-4 md:py-5 text-left"
                onClick={onClick}
            >
                <span className="font-geist-regular text-white text-lg md:text-xl opacity-90 tracking-[-0.4px]">
                    {title}
                </span>
                <div className={`transition-transform ${isOpen ? '' : 'rotate-180'}`}>
                    <svg className="w-[14px] h-[7px]" fill="none" viewBox="0 0 12 7">
                        <path d="M0.7 1.05L5.6 5.95L10.5 1.05" stroke="#999999" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="pb-5">
                    <p className="font-geist-regular text-[#aaaaaa] text-sm md:text-base tracking-[-0.32px] leading-[25px]">
                        {content}
                    </p>
                </div>
            )}
        </div>
    );
}

// Benefits Section
function BenefitsSection() {
    const [openAccordion, setOpenAccordion] = useState(0);

    const accordionItems = [
        {
            title: "Code Review",
            content: "Find, review and test quality PRs, and recommend merge based on project impact and contributor reliability."
        },
        {
            title: "Feedback Loop",
            content: "Provide constructive and actionable feedback to help contributors improve their code using AI."
        },
        {
            title: "Bounty Automation",
            content: "Add bounties to tasks/issues and automate payouts to contributors once PR is tested & merged."
        }
    ];

    const additionalBenefits = [
        {
            icon: (
                <svg className="block size-full" fill="none" viewBox="0 0 30 30">
                    <path d={svgPaths.p34fa1000} stroke="#FB923C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                    <path d={svgPaths.p6f7c200} stroke="#FB923C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </svg>
            ),
            title: "Security Scanning",
            description: "Identify and flag potential security vulnerabilities before they enter your codebase."
        },
        {
            icon: (
                <svg className="block size-full" fill="none" viewBox="0 0 30 30">
                    <path d={svgPaths.p16167c00} stroke="#FB923C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                    <path d={svgPaths.p20f91200} stroke="#FB923C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </svg>
            ),
            title: "Custom Workflows",
            description: "Configure project-specific rules and thresholds for automated decisions."
        },
        {
            icon: (
                <svg className="block size-full" fill="none" viewBox="0 0 30 30">
                    <path d={svgPaths.p12abce00} stroke="#FB923C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                    <path d={svgPaths.p1e46b00} stroke="#FB923C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </svg>
            ),
            title: "Contributor Reward",
            description: "Automatically calculate and distribute rewards based on contribution quality and complexity."
        }
    ];

    return (
        <section className="w-full py-12 md:py-20 px-4 md:px-8">
            <div className="max-w-[1260px] mx-auto">
                {/* Top Section with Accordion and Visual */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-24">
                    {/* Left: Accordion */}
                    <div className="space-y-6 md:space-y-8">
                        <h2 className="font-geist-light text-white text-2xl md:text-[40px] tracking-[-2px] leading-tight md:leading-normal">
                            Powerful tools for modern open-source development
                        </h2>

                        <div className="space-y-0">
                            {accordionItems.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    title={item.title}
                                    content={item.content}
                                    isOpen={openAccordion === index}
                                    onClick={() => setOpenAccordion(index)}
                                />
                            ))}
                        </div>

                        <Link to="/waitlist" className="join-waitlist-btn bg-amber-100 px-7 py-3.5 font-geist-extrabold text-[#090603] text-[15px] tracking-[-0.3px] transition-colors inline-block">
                            Join Waitlist
                        </Link>
                    </div>

                    {/* Right: Visual Element */}
                    <div className="flex items-center justify-center">
                        <img alt="DevAsign Vector" className="w-full max-w-[600px] h-auto object-contain" src={imgDevasignVector} />
                    </div>
                </div>

                {/* Bottom Section: Additional Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16">
                    {additionalBenefits.map((benefit, index) => (
                        <div key={index} className="space-y-4 md:space-y-5">
                            <div className="size-[24px]">
                                {benefit.icon}
                            </div>
                            <h3 className="font-geist-regular text-white text-lg md:text-xl opacity-90 tracking-[-0.4px]">
                                {benefit.title}
                            </h3>
                            <p className="font-geist-regular text-[#aaaaaa] text-sm md:text-base tracking-[-0.32px] leading-[25px]">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function LandingPage() {
    return (
        <>
            <SEO />
            <div className="bg-[#090603] min-h-screen w-full flex flex-col">
                <div className="flex-shrink-0">
                    <HeroSection>
                        <HomeHeroContent />
                    </HeroSection>
                </div>
                <div className="flex-grow">
                    <HowItWorksSection />
                    <BenefitsSection />
                </div>
                <div className="flex-shrink-0">
                    <Footer />
                </div>
            </div>
        </>
    );
}
