import imgBgImage from "../../assets/c8f0d3f13ac7dd476288c0403bdca511610a696b.png";
import { Navigation } from "./Navigation";

export function HeroSection({ children }: { children: React.ReactNode }) {
    return (
        <section className="relative w-full overflow-hidden flex flex-col min-h-screen md:min-h-0">
            {/* Navigation Overlay */}
            <Navigation />

            {/* Background Image */}
            <div className="absolute inset-0 pointer-events-none">
                <img alt="" className="absolute h-full w-full object-cover opacity-100" src={imgBgImage} />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#090603] opacity-65" />

            {/* Content */}
            <div className="relative z-10 max-w-[1260px] mx-auto px-4 md:px-8 pt-20 md:pt-28 lg:pt-40 pb-12 md:pb-20 flex-grow flex flex-col justify-center">
                {children}
            </div>

            {/* Bottom Overlay - Only show if enough height, or strictly mainly for visual blend */}
            <div className="absolute bottom-[-80px] left-0 right-0 h-[300px] bg-[#090603] blur-[15px] filter -z-10" />
        </section>
    );
}
