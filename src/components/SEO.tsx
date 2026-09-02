import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    ogTitle?: string;
    ogDescription?: string;
    canonical?: string;
    image?: string;
    type?: string;
    breadcrumbs?: { name: string; path: string }[];
}

export const SEO = ({
    title = "DevAsign - Code review against the goal not just the diff",
    description = "The AI code reviewer that opens the ticket first. DevAsign reads your issues, screenshots and Loom walkthroughs, then checks every pull request against what was actually asked for. Catch the change that compiles, passes CI, and still ships the wrong thing.",
    ogTitle = "DevAsign | Code review against the goal not just the diff",
    ogDescription = "DevAsign judges every pull request against the goal it was meant to hit, and reads the code around your change to catch the regressions and security holes a diff on its own can't show you.",
    canonical,
    image = "/devasign-preview.webp", // Default social/link-preview image
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
            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={ogDescription} />
            <meta property="og:image" content={fullImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullCanonical} />
            <meta property="twitter:title" content={ogTitle} />
            <meta property="twitter:description" content={ogDescription} />
            <meta property="twitter:image" content={fullImage} />

            <script type="application/ld+json">
                {JSON.stringify(schemaOrgData.length === 1 ? schemaOrgData[0] : schemaOrgData)}
            </script>
        </Helmet>
    );
};
