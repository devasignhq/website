import imgBgImage from "../../assets/c8f0d3f13ac7dd476288c0403bdca511610a696b.png";
import { Navigation } from "./Navigation";

export function HeroSection({ children }: { children: React.ReactNode }) {
    return (
        <section className="relative w-full overflow-hidden flex flex-col pt-[80px]">
            {/* Navigation Overlay */}
            <Navigation />

            {/* Background Image */}
            <div className="absolute inset-0 pointer-events-none">
                <img alt="" className="absolute h-[120%] w-full object-cover object-bottom opacity-100 top-0" src={imgBgImage} />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#090603] opacity-65 pointer-events-none" />

            {/* Content */}
            <div className="relative max-w-[1260px] mx-auto px-4 md:px-8 pt-16 md:pt-24 lg:pt-[100px] pb-0 flex flex-col w-full h-full">
                {children}
            </div>

            {/* Bottom Gradient Overlay for fading mockups */}
            <div className="absolute bottom-[-2px] left-0 right-0 h-[350px] bg-gradient-to-t from-[#090603] via-[#090603]/80 to-transparent z-20 pointer-events-none" />
        </section>
    );
}
