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
  title = "Psihoterapija Novi Pazar - Suzana Mojsilović | Online i Uživo Sesije",
  description = "Gestalt i Schema psihoterapija sa licenciranim terapeutom Suzana Mojsilović u Novom Pazaru. Online i uživo sesije. Anksioznost, depresija, stres, odnosi.",
  keywords = "psihoterapija, novi pazar, gestalt terapija, schema terapija, online psihoterapija, anksioznost, depresija, stres, psiholog, terapeut, srbija",
  image = "https://www.tvoj-psihoterapeut.rs/photos/psihoterapeut.jpg",
  url = "https://www.tvoj-psihoterapeut.rs/",
  type = "website",
  language = "latinica"
}) => {
  const siteName = "Tvoj Psihoterapeut";
  const fullTitle = `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="language" content={language === 'cirilica' ? 'Serbian (Cyrillic)' : 'Serbian (Latin)'} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="sr_RS" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Suzana Mojsilović" />
      <meta name="geo.region" content="RS" />
      <meta name="geo.placename" content="Novi Pazar" />
    </Helmet>
  );
};

export default SEO; 