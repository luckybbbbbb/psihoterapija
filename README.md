# Psihoterapija Novi Pazar - Suzana Mojsilović

Website for psychotherapy services in Novi Pazar, Serbia.

## SEO Optimization

This project has been optimized for search engines with the following features:

### ✅ Implemented SEO Features

1. **Proper Meta Tags**: Complete Open Graph, Twitter Cards, and standard meta tags
2. **Structured Data**: JSON-LD schema markup for medical business
3. **Canonical URLs**: Proper canonical URL pointing to root domain
4. **Sitemap**: Clean XML sitemap with only indexable URLs
5. **Robots.txt**: Properly configured robots.txt file
6. **SPA Routing**: Configured for single-page application without hash URLs
7. **Performance**: Optimized images and assets
8. **Mobile-Friendly**: Responsive design for all devices

### 🔧 SEO Configuration Files

- `public/sitemap.xml` - Clean sitemap with only root URL
- `public/robots.txt` - Proper crawling directives
- `public/_redirects` - SPA routing for Vercel
- `vercel.json` - Server configuration for SPA
- `src/components/SEO.tsx` - Dynamic meta tag management

### 🚨 Google Search Console Issues - SOLVED

The following issues have been resolved:

1. **Redirect Issues**: 
   - Removed hash URLs from sitemap
   - Added proper SPA routing configuration
   - Fixed canonical URL to always point to root

2. **Robots.txt Conflicts**:
   - Updated robots.txt with proper directives
   - Removed conflicting rules
   - Added explicit allow rules for important content

3. **Indexing Problems**:
   - Removed hash URLs that Google doesn't index
   - Added proper meta robots tags
   - Ensured single canonical URL

### 📋 Next Steps for Google Search Console

1. **Submit Updated Sitemap**:
   - Go to Google Search Console
   - Navigate to Sitemaps section
   - Submit: `https://www.tvoj-psihoterapeut.rs/sitemap.xml`

2. **Request Re-indexing**:
   - Use URL Inspection tool
   - Request indexing for main URL
   - Monitor coverage report

3. **Monitor Performance**:
   - Check Core Web Vitals
   - Monitor mobile usability
   - Track search performance

### 🛠️ Technical Setup

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 📱 PWA Features

- Service Worker for offline functionality
- Web App Manifest for app-like experience
- Responsive design for all devices

### 🌐 Deployment

Deployed on Vercel with automatic HTTPS and CDN optimization.

### 📞 Contact

For technical support or SEO questions, contact the development team.
