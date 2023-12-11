import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

const language = localStorage.getItem("pageLanguage");

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: language ? language : "en",
  });

export default i18n;
