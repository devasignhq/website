import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    image?: string;
    type?: string;
    breadcrumbs?: { name: string; path: string }[];
}

export const SEO = ({
    title = "DevAsign - Review code and automate bounty payouts with AI",
    description = "DevAsign helps you review code and automate bounty payouts with AI. Join the waitlist for early access.",
    canonical,
    image = "/link-preview.webp", // Using existing image as default or fallback
    type = "website",
    breadcrumbs
}: SEOProps) => {
    const siteUrl = "https://devasign.com"; // TODO: Update with actual domain
    const fullCanonical = canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : siteUrl;
    const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

    const schemaOrgData: any[] = [
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "DevAsign",
            "url": siteUrl,
            "description": description
        }
    ];

    if (breadcrumbs && breadcrumbs.length > 0) {
        schemaOrgData.push({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": crumb.name,
                "item": `${siteUrl}${crumb.path}`
            }))
        });
    }

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
                {JSON.stringify(schemaOrgData.length === 1 ? schemaOrgData[0] : schemaOrgData)}
            </script>
        </Helmet>
    );
};
