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

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Load locale from localStorage on mount
    let stored = localStorage.getItem(STORAGE_KEY) as Locale | null
    
    // Migration: Convert old "pt-br" format to "pt-BR"
    if (stored === "pt-br") {
      stored = "pt-BR" as Locale
      localStorage.setItem(STORAGE_KEY, stored)
    }
    
    const initialLocale = (stored && supportedLocales.includes(stored)) ? stored : defaultLocale
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

