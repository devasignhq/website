limport { useState } from 'react';
import svgPaths from "./imports/svg-mzil336qsi";
import imgBgImage from "./assets/c8f0d3f13ac7dd476288c0403bdca511610a696b.png";
import imgHeroImage from "./assets/013a8d1f9bfd97354677e6e611c314b3d894e9ce.png";
import imgHeroImage1 from "./assets/787f6fe36329cedaf5da3b0f31092bec8f8c3da0.png";
import imgHeroImage2 from "./assets/3b4654b781f5656cf586bf63df0ec8d0e553e20b.png";
import imgBgImage1 from "./assets/466f75350a19b899ab2540393026dad8f7fe0bf9.png";
import imgDevasignVector from "./assets/6a4be5d08487314716e9608ba30d92fb98e728f8.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./components/ui/dialog";
import { Input } from "./components/ui/input";

// Star Icon Component
function StarIcon() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_1119)">
          <path d={svgPaths.pdb52f00} fill="#FE891F" />
        </g>
        <defs>
          <clipPath id="clip0_1_1119">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// Logo Component
function Logo() {
  return (
    <div className="flex gap-[5.717px] items-center">
      <div className="h-[30px] w-[30.058px] relative shrink-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 30">
          <path d={svgPaths.p177efd00} fill="#FFC795" />
          <path clipRule="evenodd" d={svgPaths.pffa9c00} fill="#FE891F" fillRule="evenodd" />
        </svg>
      </div>
      <p className="font-geist-ultrablack leading-normal text-2xl md:text-3xl text-white tracking-[-1.6909px] whitespace-pre">DevAsign</p>
    </div>
  );
}

// Navigation Component
function Navigation({ onJoinWaitlistClick }: { onJoinWaitlistClick: () => void }) {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full max-w-[1260px] mx-auto px-4 md:px-8 py-6 md:py-10">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex gap-3 md:gap-5 items-center">
          <a href="https://github.com/devasignhq/devasign-api" target="_blank" rel="noopener noreferrer" className="flex gap-[5px] items-center hover:opacity-80 transition-opacity">
            <div className="size-[20px]">
              <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p48b43e0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
            <span className="font-geist-light text-[15px] text-white">25</span>
          </a>
          <button onClick={onJoinWaitlistClick} className="join-waitlist-btn hidden md:block bg-[#fe891f] px-5 md:px-7 py-2.5 md:py-3 font-geist-extrabold text-[#090603] text-sm md:text-[15px] tracking-[-0.3px] whitespace-nowrap transition-colors">
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
}

// Join Waitlist Modal Component
function JoinWaitlistModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    project: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#090603] z-50 border-[#2a2a2a] text-white max-w-[600px] p-8 [&>button]:text-white [&>button]:hover:text-white [&>button]:opacity-100">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-white text-lg md:text-2xl font-geist-extrabold tracking-[-0.4px]">
            Join Waitlist
          </DialogTitle>
          <DialogDescription className="text-white text-base font-geist-regular opacity-90 leading-relaxed">
            Be among the first to try new DevAsign features and updates, and get dedicated onboarding and priority support.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-white text-sm font-geist-medium">
                First Name
              </label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="bg-[#1a1a1a] border-[#2a2a2a] text-[#aaaaaa] placeholder:text-[#aaaaaa] focus-visible:border-[#fe891f] focus-visible:ring-[#fe891f]/20"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-white text-sm font-geist-medium">
                Last Name
              </label>
              <Input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="bg-[#1a1a1a] border-[#2a2a2a] text-[#aaaaaa] placeholder:text-[#aaaaaa] focus-visible:border-[#fe891f] focus-visible:ring-[#fe891f]/20"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-white text-sm font-geist-medium">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-[#1a1a1a] border-[#2a2a2a] text-[#aaaaaa] placeholder:text-[#aaaaaa] focus-visible:border-[#fe891f] focus-visible:ring-[#fe891f]/20"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="project" className="block text-white text-sm font-geist-medium">
              Open-source Project
            </label>
            <Input
              id="project"
              type="text"
              value={formData.project}
              onChange={(e) => setFormData({ ...formData, project: e.target.value })}
              placeholder="Project name or URL"
              className="bg-[#1a1a1a] border-[#2a2a2a] text-[#aaaaaa] placeholder:text-[#aaaaaa] focus-visible:border-[#fe891f] focus-visible:ring-[#fe891f]/20"
            />
          </div>

          <button
            type="submit"
            className="join-waitlist-btn bg-[#fe891f] text-[#090603] px-7 py-3.5 font-geist-extrabold text-[15px] tracking-[-0.3px] transition-colors w-full md:w-auto"
          >
            Submit
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// Hero Section Component
function HeroSection({ onJoinWaitlistClick }: { onJoinWaitlistClick: () => void }) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Navigation Overlay */}
      <Navigation onJoinWaitlistClick={onJoinWaitlistClick} />

      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute h-full w-full object-cover opacity-100" src={imgBgImage} />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#090603] opacity-55" />

      {/* Content */}
      <div className="relative max-w-[1260px] mx-auto px-4 md:px-8 pt-20 md:pt-32 lg:pt-40 pb-12 md:pb-20">
        {/* Hero Content */}
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
          <button onClick={onJoinWaitlistClick} className="join-waitlist-btn bg-[#fe891f] px-7 py-3.5 font-geist-extrabold text-[#090603] text-[15px] tracking-[-0.3px] transition-colors">
            Join Waitlist
          </button>
        </div>

        {/* Hero Images - Responsive */}
        <div className="flex items-center justify-center gap-0 md:gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 min-h-[300px] md:min-h-[600px]">
          {/* Image 1 */}
          <div className="hidden md:block flex-shrink-0 transform rotate-[8deg] skew-x-[7.923deg]">
            <div className="w-[200px] lg:w-[397px] h-[280px] lg:h-[560px] relative">
              <img alt="" className="absolute h-full w-[93.95%] left-[3.02%]" src={imgHeroImage} />
            </div>
          </div>

          {/* Image 2 - Main */}
          <div className="flex-shrink-0 transform rotate-[8deg] skew-x-[7.923deg]">
            <div className="w-[280px] md:w-[300px] lg:w-[418px] h-[400px] md:h-[450px] lg:h-[560px] relative">
              <img alt="" className="absolute h-full w-[89.65%] left-[5.18%]" src={imgHeroImage1} />
            </div>
          </div>

          {/* Image 3 */}
          <div className="hidden md:block flex-shrink-0 transform rotate-[8deg] skew-x-[7.923deg]">
            <div className="w-[200px] lg:w-[397px] h-[280px] lg:h-[560px] relative">
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

      </div>

      {/* Bottom Overlay */}
      <div className="absolute bottom-[-80px] left-0 right-0 h-[300px] bg-[#090603] blur-[15px] filter -z-10" />
    </section>
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
function BenefitsSection({ onJoinWaitlistClick }: { onJoinWaitlistClick: () => void }) {
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

            <button onClick={onJoinWaitlistClick} className="join-waitlist-btn bg-amber-100 px-7 py-3.5 font-geist-extrabold text-[#090603] text-[15px] tracking-[-0.3px] transition-colors">
              Join Waitlist
            </button>
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

// Footer Component
function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute h-full w-full object-cover" src={imgBgImage1} />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#070b15] opacity-50" />

      {/* Top Overlay */}
      <div className="absolute top-[-210px] left-[-10%] right-[-10%] h-[330px] bg-[#090603] blur-[35px] filter" />

      {/* Content */}
      <div className="relative max-w-[1260px] mx-auto px-4 md:px-8 py-16 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-5">
            <Logo />
            <p className="font-geist-regular text-[#c4c4c4] text-sm md:text-base">
              © 2025 DevAsign, Inc.
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-5">
            <h3 className="font-geist-extrabold text-white text-lg md:text-xl opacity-90 tracking-[-0.4px]">
              Social
            </h3>
            <div className="space-y-4">
              {[
                { name: 'GitHub', url: 'https://github.com/devasignhq' },
                { name: 'X', url: 'https://x.com/devasign' },
                { name: 'Discord', url: 'https://discord.gg/dpRKcSTY' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/company/devasign/' }
              ].map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="block font-geist-medium text-[#aaaaaa] text-sm md:text-xl tracking-[-0.36px] hover:text-white transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-5">
            <h3 className="font-geist-extrabold text-white text-lg md:text-xl opacity-90 tracking-[-0.4px]">
              Company
            </h3>
            <div className="space-y-4">
              {[
                { name: 'Contact Us', url: 'https://cal.com/devasign/15min' },
                { name: 'Security', url: 'mailto:security@devasign.com' }
              ].map((link) => (
                <a key={link.name} href={link.url} target={link.url.startsWith('mailto:') ? undefined : '_blank'} rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'} className="block font-geist-medium text-[#aaaaaa] text-sm md:text-xl tracking-[-0.36px] hover:text-white transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#090603] min-h-screen w-full flex flex-col">
      <div className="flex-shrink-0">
        <HeroSection onJoinWaitlistClick={handleOpenModal} />
      </div>
      <div className="flex-grow">
        <HowItWorksSection />
        <BenefitsSection onJoinWaitlistClick={handleOpenModal} />
      </div>
      <div className="flex-shrink-0">
        <Footer />
      </div>
      <JoinWaitlistModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}