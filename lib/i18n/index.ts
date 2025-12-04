import type { Locale, Translations } from "./types"
import trTranslations from "./translations/tr.json"
import enTranslations from "./translations/en.json"
import esTranslations from "./translations/es.json"
import deTranslations from "./translations/de.json"
import frTranslations from "./translations/fr.json"
import ptBrTranslations from "./translations/pt-br.json"
import arTranslations from "./translations/ar.json"

export const translations: Record<Locale, Translations> = {
  tr: trTranslations as Translations,
  en: enTranslations as Translations,
  es: esTranslations as Translations,
  de: deTranslations as Translations,
  fr: frTranslations as Translations,
  "pt-BR": ptBrTranslations as Translations,
  ar: arTranslations as Translations,
}

export const defaultLocale: Locale = "en"
export const supportedLocales: Locale[] = ["tr", "en", "es", "de", "fr", "pt-BR", "ar"]

// RTL languages
export const rtlLocales: Locale[] = ["ar"]

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations[defaultLocale]
}

