import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationCA from '@/locales/ca/translation.json';
import translationES from '@/locales/es/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ca: { translation: translationCA },
      es: { translation: translationES },
    },
    fallbackLng: 'ca',
    debug: false, // Posa-ho a true si vols veure missatges a la consola
    interpolation: {
      escapeValue: false, // React ja protegeix de XSS
    },
  });

export default i18n;