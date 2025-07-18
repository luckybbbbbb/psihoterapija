import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  language?: 'cirilica' | 'latinica';
}

const SEO: React.FC<SEOProps> = ({
  title = "Psihoterapija Suzana Mojsilović | Online i Uživo Seanse",
  description = "Gestalt i Schema psihoterapija sa licenciranim psihoterapeutom Suzana Mojsilović u Srbiji. Online i uživo seanse. Anksioznost, depresija, stres, odnosi.",
  keywords = "psihoterapija, gestalt terapija, schema terapija, online psihoterapija, anksioznost, depresija, stres, psiholog, psihoterapeut, srbija",
  image = "https://www.tvoj-psihoterapeut.rs/photos/psihoterapeut.jpg",
  url = "https://www.tvoj-psihoterapeut.rs/",
  type = "website",
  language = "latinica"
}) => {
  const siteName = "Tvoj Psihoterapeut";
  const fullTitle = `${title} | ${siteName}`;
  
  // Ensure URL doesn't have hash fragments for canonical
  const canonicalUrl = url.split('#')[0];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="language" content={language === 'cirilica' ? 'Serbian (Cyrillic)' : 'Serbian (Latin)'} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="sr_RS" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical URL - always point to root without hash */}
      <link rel="canonical" href="https://www.tvoj-psihoterapeut.rs/" />
      
      {/* Additional SEO */}
      <meta name="author" content="Suzana Mojsilović" />
      <meta name="geo.region" content="RS" />
      <meta name="geo.placename" content="Serbia" />
      <meta name="geo.position" content="44.7866;20.4489" />
      <meta name="ICBM" content="44.7866, 20.4489" />
      
      {/* Prevent indexing of hash URLs */}
      <meta name="fragment" content="!" />
    </Helmet>
  );
};

export default SEO; 