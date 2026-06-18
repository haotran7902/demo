import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import viTranslation from "@/locales/vi/translation.json";
import enTranslation from "@/locales/en/translation.json";

export const resources = {
  vi: {
    translation: viTranslation,
  },
  en: {
    translation: enTranslation,
  },
};

const NAME_SPACES = ["translation"];

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  ns: NAME_SPACES,
  defaultNS: "translation",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
