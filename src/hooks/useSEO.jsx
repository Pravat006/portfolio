import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

/**
 * Custom hook for managing SEO metadata for each page
 * @param {Object} props - SEO props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string[]} props.keywords - Keywords for the page
 * @param {string} props.ogImage - Open Graph image URL
 * @param {string} props.canonicalUrl - Canonical URL for the page
 * @param {Object} props.schemaData - Schema.org structured data
 * @returns {JSX.Element} - Helmet component with SEO tags
 */
const useSEO = ({
    title,
    description,
    keywords = [],
    ogImage = 'https://pravat.tech/',
    canonicalUrl,
    schemaData
}) => {
    // Set document title dynamically
    useEffect(() => {
        if (title) {
            document.title = `${title} | Portfolio`;
        }
    }, [title]);

    // Convert schema data to JSON string
    const schemaJSON = schemaData ? JSON.stringify(schemaData) : null;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            {title && <title>{title} | Portfolio</title>}
            {title && <meta name="title" content={`${title} | Portfolio`} />}
            {description && <meta name="description" content={description} />}
            {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}

            {/* Open Graph / Facebook */}
            {title && <meta property="og:title" content={`${title} | Portfolio`} />}
            {description && <meta property="og:description" content={description} />}
            {ogImage && <meta property="og:image" content={ogImage} />}
            {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
            <meta property="og:type" content="website" />

            {/* Twitter */}
            {title && <meta property="twitter:title" content={`${title} | Portfolio`} />}
            {description && <meta property="twitter:description" content={description} />}
            {ogImage && <meta property="twitter:image" content={ogImage} />}
            <meta property="twitter:card" content="summary_large_image" />

            {/* Canonical URL */}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            {/* Schema.org data */}
            {schemaJSON && (
                <script type="application/ld+json">
                    {schemaJSON}
                </script>
            )}
        </Helmet>
    );
};

export default useSEO;
