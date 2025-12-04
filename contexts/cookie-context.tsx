"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface CookiePreferences {
  essentialCookies: boolean
  analyticsCookies: boolean
}

interface CookieContextType {
  preferences: CookiePreferences
  setPreferences: (prefs: CookiePreferences) => void
  hasConsented: boolean
  acceptEssential: () => void
  acceptAll: () => void
}

const CookieContext = createContext<CookieContextType | undefined>(undefined)

const STORAGE_KEY = "symphonyroute-cookie-preferences"

const defaultPreferences: CookiePreferences = {
  essentialCookies: true, // Always true
  analyticsCookies: false,
}

export function CookieProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferencesState] = useState<CookiePreferences>(defaultPreferences)
  const [hasConsented, setHasConsented] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Load preferences from localStorage on mount
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        try {
          const parsed = JSON.parse(stored) as CookiePreferences
          setPreferencesState({
            essentialCookies: true, // Always true
            analyticsCookies: parsed.analyticsCookies || false,
          })
          setHasConsented(true)
        } catch (error) {
          // Invalid stored data, use defaults
          setHasConsented(false)
        }
      }
      setMounted(true)
    }
  }, [])

  const setPreferences = (prefs: CookiePreferences) => {
    const newPrefs = {
      essentialCookies: true, // Always true
      analyticsCookies: prefs.analyticsCookies || false,
    }
    setPreferencesState(newPrefs)
    setHasConsented(true)
    
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newPrefs))
    }
  }

  const acceptEssential = () => {
    // Analytics is considered essential, so accept it
    setPreferences({
      essentialCookies: true,
      analyticsCookies: true,
    })
  }

  const acceptAll = () => {
    setPreferences({
      essentialCookies: true,
      analyticsCookies: true,
    })
  }

  const value: CookieContextType = {
    preferences,
    setPreferences,
    hasConsented,
    acceptEssential,
    acceptAll,
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <CookieContext.Provider value={value}>
        {children}
      </CookieContext.Provider>
    )
  }

  return <CookieContext.Provider value={value}>{children}</CookieContext.Provider>
}

export function useCookie() {
  const context = useContext(CookieContext)
  if (context === undefined) {
    throw new Error("useCookie must be used within a CookieProvider")
  }
  return context
}

