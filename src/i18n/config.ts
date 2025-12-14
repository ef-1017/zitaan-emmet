

export const locales = ['ja', 'en', 'es', 'pt', 'zh-cn', 'zh-tw', 'ko'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'ja';

export const localeNames: Record<Locale, string> = {
  ja: '日本語',
  en: 'English',
  es: 'Español',
  pt: 'Português',
  'zh-cn': '简体中文',
  'zh-tw': '繁體中文',
  ko: '한국어',
};



export const isValidLocale = (locale: string): locale is Locale => {
  return (locales as readonly string[]).includes(locale);
};

