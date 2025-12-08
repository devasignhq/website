import { Link } from 'react-router-dom';
import imgBgImage1 from "../../assets/466f75350a19b899ab2540393026dad8f7fe0bf9.png";
import { Logo } from "../Logo";

export function Footer() {
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
                        <Link to="/">
                            <Logo />
                        </Link>
                        <p className="font-geist-regular text-[#c4c4c4] text-sm md:text-base pt-4 md:pt-8">
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
