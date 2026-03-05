import { CircleDollarSign, Github, Zap, Shield, Globe, Lock } from "lucide-react";

const features = [
  {
    icon: CircleDollarSign,
    title: "USDC Stablecoin Payouts",
    desc: "Get paid in a stable, globally accepted digital dollar. No volatility. No bank wires.",
  },
  {
    icon: Github,
    title: "GitHub-Native Workflow",
    desc: "No new tools. Work in your favorite repos. We plug into the flow you already use.",
  },
  {
    icon: Zap,
    title: "Zero Payment Delays",
    desc: "Funds are released the instant a PR is merged. Automated, deterministic, instant.",
  },
  {
    icon: Shield,
    title: "Transparent Escrow",
    desc: "Bounty funds are locked in on-chain escrow from day one. Full transparency for both sides.",
  },
  {
    icon: Globe,
    title: "Global by Default",
    desc: "No bank account needed. Developers anywhere in the world can earn and withdraw USDC.",
  },
  {
    icon: Lock,
    title: "Permissionless & Trustless",
    desc: "Smart contracts handle escrow and payouts. No middlemen. No manual approvals.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="relative py-24 md:py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <p className="text-[#fe891f] text-sm font-semibold tracking-wider uppercase">Features</p>
        <h2 className="font-geist-light text-white text-center text-2xl md:text-[40px] tracking-[-2px] opacity-90 mb-8 md:mb-12 mx-auto leading-tight md:leading-normal">
          Built for Developers, Powered by Web3
        </h2>
        <p className="font-geist-regular text-[#aaaaaa] text-center text-sm md:text-base tracking-[-0.32px] leading-[25px] mx-auto">
          Everything you need to earn and pay for open-source contributions.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-[rgba(19,19,19,0.5)] border border-[rgba(254,137,31,0.15)] p-8 md:p-10 rounded-xl hover:border-[#fe891f]/40 transition-colors"
          >
            <div className="w-11 h-11 rounded-lg bg-[#fe891f]/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <f.icon size={20} className="text-[#fe891f]" />
            </div>
            <h3 className="text-base font-semibold text-amber-100 mb-2">{f.title}</h3>
            <p className="text-sm text-[#aaaaaa] leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
