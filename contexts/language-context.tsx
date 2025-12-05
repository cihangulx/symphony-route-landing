"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import type { Locale } from "@/lib/i18n/types"
import { getTranslations, defaultLocale, supportedLocales, rtlLocales } from "@/lib/i18n"
import type { Translations } from "@/lib/i18n/types"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = "symphonyroute-landing-locale"

/**
 * Detects browser language and returns matching supported locale
 * Returns null if no match found
 */
function detectBrowserLocale(): Locale | null {
  if (typeof navigator === "undefined") {
    return null
  }

  // Get browser language preferences
  const browserLanguages = navigator.languages || [navigator.language]
  
  for (const browserLang of browserLanguages) {
    // Try exact match first
    if (supportedLocales.includes(browserLang as Locale)) {
      return browserLang as Locale
    }
    
    // Try matching by language code (first 2 characters)
    const langCode = browserLang.split("-")[0].toLowerCase()
    
    // Special case for pt-BR: check if browser language starts with "pt"
    if (langCode === "pt") {
      // Check if it's pt-BR (Brazil) or pt-PT (Portugal)
      const countryCode = browserLang.split("-")[1]?.toUpperCase()
      if (countryCode === "BR") {
        return "pt-BR"
      }
      // For other pt variants, default to pt-BR
      return "pt-BR"
    }
    
    // For other languages, match by language code
    const matchedLocale = supportedLocales.find(
      (locale) => locale.toLowerCase().split("-")[0] === langCode
    )
    
    if (matchedLocale) {
      return matchedLocale
    }
  }
  
  return null
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Priority 1: Load locale from localStorage on mount
    let stored = localStorage.getItem(STORAGE_KEY) as Locale | null
    
    // Migration: Convert old "pt-br" format to "pt-BR"
    if (stored === "pt-br") {
      stored = "pt-BR" as Locale
      localStorage.setItem(STORAGE_KEY, stored)
    }
    
    let initialLocale: Locale
    
    // If stored locale is valid, use it
    if (stored && supportedLocales.includes(stored)) {
      initialLocale = stored
    } else {
      // Priority 2: Detect browser language
      const browserLocale = detectBrowserLocale()
      initialLocale = browserLocale || defaultLocale
    }
    
    setLocaleState(initialLocale)
    // Update HTML lang and dir attributes on mount
    if (typeof document !== "undefined") {
      document.documentElement.lang = initialLocale
      document.documentElement.dir = rtlLocales.includes(initialLocale) ? "rtl" : "ltr"
    }
    setMounted(true)
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem(STORAGE_KEY, newLocale)
    // Update HTML lang and dir attributes
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLocale
      document.documentElement.dir = rtlLocales.includes(newLocale) ? "rtl" : "ltr"
    }
  }

  const value: LanguageContextType = {
    locale,
    setLocale,
    t: getTranslations(locale),
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <LanguageContext.Provider value={value}>
        {children}
      </LanguageContext.Provider>
    )
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

