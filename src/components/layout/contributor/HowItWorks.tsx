import { useState } from 'react';
import imgDevasignVector from "../../../assets/devasign-contributor-app-mockup.png";

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

const steps = [
    {
        title: "Claim a Bounty",
        content: "Browse open bounties. Pick one that matches your skills. Lock in and start working on it.",
    },
    {
        title: "Push Code & Open PR",
        content: "Fork the repo, write your code, and submit a pull request as usual.",
    },
    {
        title: "PR Gets Merged",
        content: "Maintainers review and merge. Our bot detects the merge event instantly.",
    },
    {
        title: "Get Paid in USDC",
        content: "USDC is released from escrow to your wallet automatically. Zero delays.",
    },
];

const HowItWorks = () => {
    const [openAccordion, setOpenAccordion] = useState(0);

    return (
        <section id="how-it-works" className="w-full py-12 md:py-20 px-4 md:px-8">
            <div className="max-w-[1260px] mx-auto">
                <div className="text-left space-y-4 mb-16">
                    <p className="text-[#fe891f] text-sm font-semibold tracking-wider uppercase">How it Works</p>
                    <h2 className="font-geist-light text-white text-2xl md:text-[40px] tracking-[-2px] leading-tight md:leading-normal">
                        From Code to Cash: A fully automated pipeline
                    </h2>
                </div>

                {/* Main Content with Accordion and Visual */}
                <div className="max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left: Accordion */}
                    <div className="space-y-6 md:space-y-8">
                        <div className="space-y-0">
                            {steps.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    title={item.title}
                                    content={item.content}
                                    isOpen={openAccordion === index}
                                    onClick={() => setOpenAccordion(index)}
                                />
                            ))}
                        </div>

                        <div className="pt-4">
                            <a href="https://contributor.devasign.com/authenticate" className="bg-amber-100 px-7 py-3.5 font-geist-extrabold text-[#090603] text-[15px] tracking-[-0.3px] transition-colors inline-block">
                                Explore Bounties
                            </a>
                        </div>
                    </div>

                    {/* Right: Visual Element */}
                    <div className="flex items-center justify-center">
                        <img alt="How it works visual" className="w-full max-w-[600px] h-auto object-contain" src={imgDevasignVector} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
