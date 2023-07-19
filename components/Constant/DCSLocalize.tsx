import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as RNLocalize from "react-native-localize";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import XHR from "i18next-http-backend";
import en from "./Translation/en";
import sp from "./Translation/sp";
import ru from "./Translation/ru";
// import { AsyncLocalStorage } from "async_hooks";

const LANGUAGES = {
  ru,
  en,
};

i18n
  // .use(XHR) // <---- add this
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3",
    resources: LANGUAGES,
    // fallbackLng: "ru",
    fallbackLng: "ru",
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
