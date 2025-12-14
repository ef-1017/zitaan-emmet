import { enData } from './locales/en';
import { esData } from './locales/es';
import { ptData } from './locales/pt';
import { zhCnData } from './locales/zh-cn';
import { koData } from './locales/ko';
import { zhTwData } from './locales/zh-tw';

interface EmmetDescData {
  desc: string;
}

export interface LocaleData {
  categories: Record<string, string>;
  html: Record<string, EmmetDescData>;
  css: Record<string, EmmetDescData>;
}

export const dataTranslations: Record<string, LocaleData> = {
  en: enData,
  es: esData,
  pt: ptData,
  'zh-cn': zhCnData,
  'zh-tw': zhTwData,
  ko: koData,
};
