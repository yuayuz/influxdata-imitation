import { en as vuetifyEn, zhHans as vuetifyZhHans } from "vuetify/locale";

import en from "./locales/en.json";
import zhHans from "./locales/zhHans.json";
import { defineI18nConfig } from "#i18n";

export default defineI18nConfig(() => ({
  legacy: false,
  locales: ["en", "zhHans"],
  defaultLocale: "en",
  messages: {
    en: Object.assign({}, vuetifyEn, en),
    zhHans: Object.assign({}, vuetifyZhHans, zhHans),
  },
}));
