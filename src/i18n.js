import i18n from 'i18next';

import en from './locales/en';
import fi from './locales/fi';
import zh from './locales/zh';
import es from './locales/es';
import ru from './locales/ru';

const resources = {
  en,
  fi,
  zh,
  es,
  ru,
};

i18n.init({
  resources,
  fallbackLng: 'en',
  lng: 'en',
  defaultNS: 'common',
  react: {
    useSuspense: false,
  },
});

export default i18n;
