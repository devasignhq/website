import { SEO } from '../components/SEO';
import { Footer } from '../components/layout/Footer';
import NetworkBackground from '../components/layout/contributor/NetworkBackground';
import ContributorHeroSection from '../components/layout/contributor/HeroSection';
import HowItWorks from '../components/layout/contributor/HowItWorks';
import FeaturesSection from '../components/layout/contributor/FeaturesSection';


export function ContributorPage() {
    return (
        <>
            <SEO
                title="Contributors - DevAsign"
                description="Apply for bounties and get paid in USDC. Automated escrow releases via smart contract triggered from GitHub."
                canonical="/contributor"
            />
            <div className="min-h-screen w-full flex flex-col">
                <NetworkBackground /> 
                <main>
                    <div className="flex-shrink-0">
                        <ContributorHeroSection />
                    </div>
                    <FeaturesSection />
                    <HowItWorks />
                    <Footer />
                </main>
            </div>
        </>
    );
}
