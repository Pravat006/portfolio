import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * SeoManager component to handle site-wide SEO settings
 * This is particularly useful for managing base SEO settings across all pages
 */
const SeoManager = () => {
    return (
        <Helmet>
            {/* Base Meta Tags that should be on all pages */}
            <html lang="en" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Preload Important Assets */}
            <link rel="preload" as="image" href="/placeholder.svg?height=120&width=120" />

            {/* Prevent content from being translated automatically */}
            <meta name="google" content="notranslate" />

            {/* Favicon Links */}
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

            {/* Preconnect to important domains */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            {/* Security Headers */}
            <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
            <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />

            {/* OpenGraph base settings */}
            <meta property="og:site_name" content="Developer Portfolio" />
            <meta property="og:type" content="website" />

            {/* Twitter base settings */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@yourusername" />
        </Helmet>
    );
};

export default SeoManager;
