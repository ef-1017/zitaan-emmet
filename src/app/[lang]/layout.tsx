import type { Metadata } from "next";
import Script from "next/script";
import "../globals.css";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { Locale, isValidLocale, defaultLocale } from "@/i18n/config";

import { uiTranslations } from "@/i18n/ui";
import { locales } from "@/i18n/config";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const t = uiTranslations[lang];

  const alternatives = locales.reduce((acc, locale) => {
    acc[locale] = `https://emmet.zitaan.com/${locale}`;
    return acc;
  }, {} as Record<string, string>);
//test
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    keywords: t.metaKeywords,
    alternates: {
      canonical: `https://emmet.zitaan.com/${lang}`,
      languages: alternatives,
    },
    openGraph: {
      locale: lang,
      siteName: "Emmet Cheatsheet @ zitaan.com",
      type: "website",
      title: t.metaTitle,
      description: t.metaDescription,
      url: `https://emmet.zitaan.com/${lang}`,
      images: [
        {
          url: "https://emmet.zitaan.com/OGP.jpg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.metaTitle,
      description: t.metaDescription,
      images: ["https://emmet.zitaan.com/OGP.jpg"],
    },
    icons: {
      icon: "/assets/img/favicon.ico",
      apple: "/assets/img/home.png",
    },
  };
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const lang = isValidLocale(params.lang) ? params.lang : defaultLocale;
  const { children } = props;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Emmetチートシート | 時短サポートサイト「ジターン」",
    "url": "https://emmet.zitaan.com",
    "description": "よく使うEmmetコマンドを厳選して掲載。HTML・CSSのコーディングを効率化する、実践向けEmmetチートシートです。制作現場で役立つショートカットをまとめています。",
    "image": "https://emmet.zitaan.com/OGP.jpg",
    "author": {
      "@type": "Organization",
      "name": "時短サポートサイト「ジターン」"
    },
    "publisher": {
      "@type": "Organization",
      "name": "時短サポートサイト「ジターン」",
      "logo": {
        "@type": "ImageObject",
        "url": "https://emmet.zitaan.com/home.png"
      }
    }
  };

  return (
    <html lang={lang}>
      <head>
        <link rel="canonical" href="https://emmet.zitaan.com" />
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-S3DLD2CEQM" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S3DLD2CEQM');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body id="top">
        <LocaleProvider lang={lang}>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
