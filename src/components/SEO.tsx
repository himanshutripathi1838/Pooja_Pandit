import { useEffect } from 'react';
import { Language } from '../translations';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  language?: Language;
  pageNameForBreadcrumb?: string;
}

export default function SEO({
  title,
  description,
  keywords = 'pandit ji, pooja booking, vedic rituals, astrologer varanasi, online puja booking, hindu festivals, pandit dheeraj tripathi',
  canonicalPath = '',
  ogImage = 'https://pujapandit.tech/assets/images/pooja_pandit_logo_1783261742775.jpg',
  ogType = 'website',
  language = 'en',
  pageNameForBreadcrumb
}: SEOProps) {
  
  useEffect(() => {
    // 1. Title tag
    document.title = `${title} | Pandit Dheeraj Tripathi`;

    // 2. Canonical Link Tag
    const fullCanonicalUrl = `https://pujapandit.tech${canonicalPath}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonicalUrl);

    // 3. Helper to update/create meta tags
    const setMetaTag = (attributeName: string, attributeValue: string, content: string, isProperty = false) => {
      const selector = `meta[${isProperty ? 'property' : 'name'}="${attributeValue}"]`;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(isProperty ? 'property' : 'name', attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 4. Standard Metadata Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'author', 'Pandit Dheeraj Tripathi');
    setMetaTag('name', 'robots', 'index, follow');

    // 5. Open Graph Meta Tags
    setMetaTag('property', 'og:title', `${title} | Pandit Dheeraj Tripathi`, true);
    setMetaTag('property', 'og:description', description, true);
    setMetaTag('property', 'og:image', ogImage, true);
    setMetaTag('property', 'og:url', fullCanonicalUrl, true);
    setMetaTag('property', 'og:type', ogType, true);
    setMetaTag('property', 'og:site_name', 'Pandit Dheeraj Rites & Astrology', true);

    // 6. Twitter Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', `${title} | Pandit Dheeraj Tripathi`);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 7. Structured JSON-LD Data for LocalBusiness/ProfessionalService
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': 'Pandit Dheeraj Tripathi - Vedic Rites, Pujas & Astrology',
      'image': ogImage,
      '@id': 'https://pujapandit.tech/#professional-service',
      'url': 'https://pujapandit.tech',
      'telephone': '+919876543210',
      'priceRange': '₹₹',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Varanasi Vedic Rites Center',
        'addressLocality': 'Varanasi',
        'addressRegion': 'Uttar Pradesh',
        'postalCode': '221001',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 25.3176,
        'longitude': 82.9739
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        'opens': '06:00',
        'closes': '21:00'
      },
      'sameAs': [
        'https://facebook.com/pujapandittech',
        'https://instagram.com/pujapandittech'
      ]
    };

    let businessScript = document.getElementById('json-ld-business') as HTMLScriptElement;
    if (!businessScript) {
      businessScript = document.createElement('script');
      businessScript.id = 'json-ld-business';
      businessScript.type = 'application/ld+json';
      document.head.appendChild(businessScript);
    }
    businessScript.text = JSON.stringify(localBusinessSchema);

    // 8. Dynamic Breadcrumb Schema
    if (pageNameForBreadcrumb && canonicalPath && canonicalPath !== '/') {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://pujapandit.tech'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': pageNameForBreadcrumb,
            'item': fullCanonicalUrl
          }
        ]
      };

      let breadcrumbScript = document.getElementById('json-ld-breadcrumb') as HTMLScriptElement;
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.id = 'json-ld-breadcrumb';
        breadcrumbScript.type = 'application/ld+json';
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.text = JSON.stringify(breadcrumbSchema);
    } else {
      // Remove breadcrumb if it is the homepage
      const existingBreadcrumb = document.getElementById('json-ld-breadcrumb');
      if (existingBreadcrumb) {
        existingBreadcrumb.remove();
      }
    }

    // Cleanup functions when component unmounts
    return () => {
      // Keep general tags but remove specific breadcrumb
      const existingBreadcrumb = document.getElementById('json-ld-breadcrumb');
      if (existingBreadcrumb) {
        existingBreadcrumb.remove();
      }
    };
  }, [title, description, keywords, canonicalPath, ogImage, ogType, language, pageNameForBreadcrumb]);

  return null;
}
