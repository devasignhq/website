import { useState } from 'react';
import { Input } from "../components/ui/input";
import svgPaths from "../imports/svg-mzil336qsi";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select";
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/layout/HeroSection';
import imgHeroImage from "../assets/013a8d1f9bfd97354677e6e611c314b3d894e9ce.png";
import imgHeroImage1 from "../assets/787f6fe36329cedaf5da3b0f31092bec8f8c3da0.png";
import imgHeroImage2 from "../assets/3b4654b781f5656cf586bf63df0ec8d0e553e20b.png";


function WaitlistHeroContent() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        project: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // You handle submission logic here (e.g., call API, show success message)
        alert("Thanks for joining!");
    };

    return (
        <>
            <div className="flex flex-col items-center gap-6 md:gap-8 mb-8 md:mb-12">

                {/* Title */}
                <h1 className="font-geist-regular text-white text-center text-3xl md:text-5xl lg:text-[64px] tracking-[-3.2px] max-w-[950px] leading-tight md:leading-normal">
                    Join the Waitlist
                </h1>

                {/* Description */}
                <p className="font-geist-medium text-white text-center text-sm md:text-base tracking-[-0.32px] opacity-60 max-w-[600px] leading-relaxed">
                    Get early access by signing up for the beta and get dedicated onboarding and priority support.
                </p>

                {/* Form */}
                <div className="w-full max-w-[600px] shadow-2xl pt-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="firstName" className="block text-[#FEF3C7] text-tiny font-geist-medium text-left">
                                First Name
                            </label>
                            <Input
                                id="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                placeholder="First Name"
                                className="h-[46px] pl-4 pr-4 bg-input border-[#2a2a2a] text-white placeholder:text-[#aaaaaa] focus-visible:border-[#fe891f] focus-visible:ring-[#fe891f]/20"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-[#FEF3C7] text-tiny font-geist-medium text-left">
                                Email Address
                            </label>
                            <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="Email Address"
                                className="h-[46px] pl-4 pr-4 bg-input border-[#2a2a2a] text-white placeholder:text-[#aaaaaa] focus-visible:border-[#fe891f] focus-visible:ring-[#fe891f]/20"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-[#FEF3C7] text-tiny font-geist-medium text-left">
                                Role
                            </label>
                            <Select onValueChange={(value: string) => setFormData({ ...formData, role: value })}>
                                <SelectTrigger className="h-[46px] pl-4 pr-4 bg-input border-[#2a2a2a] text-white focus:ring-[#fe891f]/20">
                                    <SelectValue placeholder="Select your role" />
                                </SelectTrigger>
                                <SelectContent className="pl-4 pr-4 pt-4 pb-4 bg-input border-[#2a2a2a] text-[#aaaaaa]">
                                    <SelectItem value="software-engineer">Software Engineer</SelectItem>
                                    <SelectItem value="oss-maintainer">OSS Maintainer</SelectItem>
                                    <SelectItem value="engineering-lead">Engineering Lead</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="project" className="block text-[#FEF3C7] text-tiny font-geist-medium text-left">
                                Open-source Project
                            </label>
                            <Input
                                id="project"
                                type="text"
                                value={formData.project}
                                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                                placeholder="Project name or URL"
                                className="h-[46px] pl-4 pr-4 bg-input border-[#2a2a2a] text-white placeholder:text-[#aaaaaa] focus-visible:border-[#fe891f] focus-visible:ring-[#fe891f]/20"
                            />
                        </div>

                        <button
                            type="submit"
                            className="join-waitlist-btn bg-[#fe891f] text-[#090603] px-7 py-3.5 font-geist-extrabold text-[15px] tracking-[-0.3px] transition-colors w-full"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Hero Images - Responsive */}
                <div className="flex items-center justify-center gap-0 md:gap-4 pt-12 overflow-x-auto md:overflow-visible pb-4 md:pb-0 min-h-[300px] md:min-h-[400px]">
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
            </div>
        </>
    );
}

// function WaitlistForm() {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         role: '',
//         project: ''
//     });

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         console.log('Form submitted:', formData);
//         // You handle submission logic here (e.g., call API, show success message)
//         alert("Thanks for joining!");
//     };

//     return (
//         <div className="w-full max-w-[500px] bg-[#090603] border border-[#2a2a2a] p-8 md:p-10 rounded-xl shadow-2xl">
//             <div className="space-y-4 mb-8 text-center">
//                 <h2 className="text-white text-2xl font-geist-extrabold tracking-[-0.4px]">
//                     Join Waitlist
//                 </h2>
//                 <p className="text-white text-base font-geist-regular opacity-90 leading-relaxed">
//                     Be among the first to try new DevAsign features and updates.
//                 </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                         <label htmlFor="firstName" className="block text-white text-sm font-geist-medium text-left">
//                             First Name
//                         </label>
//                         <Input
//                             id="firstName"
//                             type="text"
//                             value={formData.firstName}
//                             onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//                             className="bg-[#1a1a1a] border-[#2a2a2a] text-[#aaaaaa] placeholder:text-[#aaaaaa] focus-visible:border-[#fe891f] focus-visible:ring-[#fe891f]/20"
//                         />
//                     </div>
//                     <div className="space-y-2">
//                         <label htmlFor="lastName" className="block text-white text-sm font-geist-medium text-left">
//                             Last Name
//                         </label>
//                         <Input
//                             id="lastName"
//                             type="text"
//                             value={formData.lastName}
//                             onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//                             className="bg-[#1a1a1a] border-[#2a2a2a] text-[#aaaaaa] placeholder:text-[#aaaaaa] focus-visible:border-[#fe891f] focus-visible:ring-[#fe891f]/20"
//                         />
//                     </div>
//                 </div>

//                 <div className="space-y-2">
//                     <label htmlFor="email" className="block text-white text-sm font-geist-medium text-left">
//                         Email Address
//                     </label>
//                     <Input
//                         id="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                         className="bg-[#1a1a1a] border-[#2a2a2a] text-[#aaaaaa] placeholder:text-[#aaaaaa] focus-visible:border-[#fe891f] focus-visible:ring-[#fe891f]/20"
//                     />
//                 </div>

//                 <div className="space-y-2">
//                     <label className="block text-white text-sm font-geist-medium text-left">
//                         Role
//                     </label>
//                     <Select onValueChange={(value: string) => setFormData({ ...formData, role: value })}>
//                         <SelectTrigger className="bg-[#1a1a1a] border-[#2a2a2a] text-[#aaaaaa] focus:ring-[#fe891f]/20">
//                             <SelectValue placeholder="Select your role" />
//                         </SelectTrigger>
//                         <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a] text-[#aaaaaa]">
//                             <SelectItem value="software-engineer">Software Engineer</SelectItem>
//                             <SelectItem value="oss-maintainer">OSS Maintainer</SelectItem>
//                             <SelectItem value="engineering-lead">Engineering Lead</SelectItem>
//                         </SelectContent>
//                     </Select>
//                 </div>

//                 <div className="space-y-2">
//                     <label htmlFor="project" className="block text-white text-sm font-geist-medium text-left">
//                         Open-source Project
//                     </label>
//                     <Input
//                         id="project"
//                         type="text"
//                         value={formData.project}
//                         onChange={(e) => setFormData({ ...formData, project: e.target.value })}
//                         placeholder="Project name or URL"
//                         className="bg-[#1a1a1a] border-[#2a2a2a] text-[#aaaaaa] placeholder:text-[#aaaaaa] focus-visible:border-[#fe891f] focus-visible:ring-[#fe891f]/20"
//                     />
//                 </div>

//                 <button
//                     type="submit"
//                     className="join-waitlist-btn bg-[#fe891f] text-[#090603] px-7 py-3.5 font-geist-extrabold text-[15px] tracking-[-0.3px] transition-colors w-full"
//                 >
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// }

export function WaitlistPage() {
    return (
        <div className="bg-[#090603] min-h-screen w-full flex flex-col">
            <div className="flex-shrink-0">
                <HeroSection>
                    <div className="w-full flex justify-center items-center">
                        <WaitlistHeroContent />
                    </div>
                </HeroSection>
            </div>
            <div className="flex-grow">
                {/* You could add content here if needed, but for now just the form in hero */}
            </div>
            <div className="flex-shrink-0">
                <Footer />
            </div>
        </div>
    );
}
