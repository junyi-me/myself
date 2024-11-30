import { derived, writable } from "svelte/store";
import translations, { type LanguageType } from "./data/translations";

export const locale = writable<LanguageType>("en");
export const locales = Object.keys(translations);

type ReplaceVars = {
  [key: string]: string;
};

function translate(locale: LanguageType, key: string, vars: ReplaceVars) {
  // Let's throw some errors if we're trying to use keys/locales that don't exist.
  // We could improve this by using Typescript and/or fallback values.
  if (!key) throw new Error("no key provided to $t()");
  if (!locale) throw new Error(`no translation for key "${key}"`);

  // Grab the translation from the translations object.
  const keys = key.split(".");
  const lang = translations[locale];
  let text: any = lang;
  for (let i = 0; i < keys.length; i++) {
    text = text[keys[i]];
  }

  if (text == null) throw new Error(`no translation found for ${locale}.${key}`);

  // Replace any passed in variables in the translation string.
  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = (text as string).replace(regex, vars[k]);
  });

  return text;
}
export const t = derived(locale, ($locale) => (key: string, vars: ReplaceVars = {}) =>
  translate($locale as LanguageType, key, vars)
);

const localeMap: Record<LanguageType, string> = {
  en: "en-US",
  jp: "ja-JP",
  zh: "zh-CN",
}

function formatDate(date: Date, locale: LanguageType) {
  const formattedDate = date.toLocaleDateString(localeMap[locale], {
    year: "numeric",
    month: "short"
  });
  return formattedDate;
}
export const dt = derived(locale, ($locale) => (date: Date) => formatDate(date, $locale as LanguageType));

