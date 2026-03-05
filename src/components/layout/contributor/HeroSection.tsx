import { GitPullRequest, CircleDollarSign, CheckCircle2 } from "lucide-react";
import { Navigation } from "../Navigation";
import { StarIcon } from '../../StarIcon';

const HeroSection = () => (
    <section className="relative pt-24 pb-20 md:pt-40 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
            <Navigation />
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left — Copy */}
                <div className="space-y-8">
                    <div className="flex gap-2.5 items-center">
                        <StarIcon />
                        <p className="font-geist-medium text-[#aaaaaa] text-sm">v1.0 live • Instant USDC payouts.</p>
                    </div>
                    <h1 className="font-geist-regular text-white text-left text-3xl md:text-5xl lg:text-[64px] tracking-[-3.2px] max-w-[950px] leading-tight md:leading-normal">
                        Code. Merge.
                        <br />
                        <span className="text-primary text-[#FEF3C7]">Get Paid!</span>
                    </h1>

                    <p className="font-geist-regular text-[#aaaaaa] text-left text-sm md:text-base tracking-[-0.32px] leading-[25px]">
                        Ship code on GitHub. The moment your PR is merged, USDC flows directly
                        to your wallet. No invoices. No delays. Pure automation.
                    </p>
                    <div className="flex gap-12">
                        {/* CTA Button */}
                        <a href="https://contributor.devasign.com/authenticate" className="signup-btn bg-[#fe891f] px-7 py-3.5 font-geist-extrabold text-[#090603] text-[15px] tracking-[-0.3px] transition-colors">
                            Explore Bounties
                        </a>
                    </div>
                </div>

                {/* Right — Mock UI */}
                <div className="relative">
                    <div className="rounded-xl border border-border/60 bg-[#0E0C0C] backdrop-blur-sm overflow-hidden shadow-2xl shadow-primary/5">
                        {/* Window bar */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-[#151419]">
                            <div className="w-3 h-3 rounded-full bg-[#FF3737]/60" />
                            <div className="w-3 h-3 rounded-full bg-[#FFEE48]/60" />
                            <div className="w-3 h-3 rounded-full bg-[#00FF00]/60" />
                            <span className="ml-3 text-xs text-[#68778D]">github.com/acme/protocol</span>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-5">
                            {/* PR merged */}
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                    <GitPullRequest size={16} className="text-purple-400" />
                                </div>
                                <div className="space-y-1.5 flex-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-semibold text-foreground">PR #247 merged</span>
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-medium">merged</span>
                                    </div>
                                    <p className="text-xs text-[#68778D]">fix: resolve token decimals in swap router</p>
                                </div>
                            </div>

                            {/* Separator with animation */}
                            <div className="flex items-center gap-3 px-2">
                                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#FE891F]/40 to-transparent" />
                                <span className="text-[10px] text-[#FE891F] font-medium animate-pulse-glow">BOUNTY TRIGGERED</span>
                                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#FE891F]/40 to-transparent" />
                            </div>

                            {/* USDC payout */}
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-[#FE891F]/20 flex items-center justify-center shrink-0 mt-0.5">
                                    <CircleDollarSign size={16} className="text-[#FE891F]" />
                                </div>
                                <div className="space-y-1.5 flex-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-semibold text-foreground">+500.00 USDC</span>
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FE891F]/20 text-[#FE891F] font-medium">sent</span>
                                    </div>
                                    <p className="text-xs text-[#68778D]">→ 0x7a3f...c42d</p>
                                </div>
                            </div>

                            {/* Confirmed */}
                            <div className="flex items-center gap-2 text-xs text-green-400/80 pl-11">
                                <CheckCircle2 size={14} />
                                Transaction confirmed · 1.2s
                            </div>
                        </div>
                    </div>

                    {/* Floating glow decoration */}
                    <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-[#FE891F]/10 blur-[60px] animate-float" />
                </div>
            </div>
        </div>
    </section>
);

export default HeroSection;
