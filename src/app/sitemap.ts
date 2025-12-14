import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://emmet.zitaan.com';

  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: locale === 'ja' ? 1.0 : 0.8,
  }));
}
