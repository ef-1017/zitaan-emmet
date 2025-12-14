import ClientPage from './ClientPage';

export async function generateStaticParams() {
  return [
    { lang: 'ja' },
    { lang: 'en' },
    { lang: 'es' },
    { lang: 'pt' },
    { lang: 'zh-cn' },
    { lang: 'zh-tw' },
    { lang: 'ko' },
  ];
}

// ページ本体（サーバーコンポーネント）
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <ClientPage lang={lang} />;
}