import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emmetチートシート | 時短サポートサイト「ジターン」",
  description: "よく使うEmmetコマンドを厳選して掲載。HTML・CSSのコーディングを効率化する、実践向けEmmetチートシートです。制作現場で役立つショートカットをまとめています。",
  openGraph: {
    locale: "ja_JP",
    siteName: "時短サポートサイト「ジターン」",
    type: "website",
    title: "Emmetチートシート | 時短サポートサイト「ジターン」",
    description: "よく使うEmmetコマンドを厳選して掲載。HTML・CSSのコーディングを効率化する、実践向けEmmetチートシートです。制作現場で役立つショートカットをまとめています。",
    url: "https://emmet.zitaan.com",
    images: [
      {
        url: "https://emmet.zitaan.com/OGP.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmetチートシート | 時短サポートサイト「ジターン」",
    description: "よく使うEmmetコマンドを厳選して掲載。HTML・CSSのコーディングを効率化する、実践向けEmmetチートシートです。制作現場で役立つショートカットをまとめています。",
    images: ["https://emmet.zitaan.com/OGP.jpg"],
  },
  icons: {
    icon: "/assets/img/favicon.ico",
    apple: "/assets/img/home.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    <html lang="ja">
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
        {children}
      </body>
    </html>
  );
}
