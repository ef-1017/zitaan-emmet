import { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/'], // Example exclusions
    },
    sitemap: 'https://emmet.zitaan.com/sitemap.xml',
  };
}
