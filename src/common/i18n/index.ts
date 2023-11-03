import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LanguageEnum } from '../constants/locales';
import { en } from './locales';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

const resources = {
  [LanguageEnum.EN]: {
    translation: en,
  },
};

const config = {
  lng: LanguageEnum.EN,
  returnNull: false,
  resources,
};

i18n.use(initReactI18next).init(config);

export default i18n;
