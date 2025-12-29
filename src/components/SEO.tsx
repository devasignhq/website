import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    image?: string;
    type?: string;
}

export const SEO = ({
    title = "DevAsign - Review code and automate bounty payouts with AI",
    description = "DevAsign helps you review code and automate bounty payouts with AI. Join the waitlist for early access.",
    canonical,
    image = "/stellar-community-fund.png", // Using existing image as default or fallback
    type = "website"
}: SEOProps) => {
    const siteUrl = "https://devasign.com"; // TODO: Update with actual domain
    const fullCanonical = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : siteUrl;
    const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content="DevAsign, bounty payouts, AI code review, open source, code review, issue bounty, open source bounty, bounty platform" />
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullCanonical} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={fullImage} />

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "DevAsign",
                    "url": siteUrl,
                    "description": description
                })}
            </script>
        </Helmet>
    );
};
