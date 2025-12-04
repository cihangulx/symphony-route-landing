"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { useCookie } from "@/contexts/cookie-context"

export default function GoogleAnalytics() {
  const { preferences } = useCookie()
  const pathname = usePathname()

  useEffect(() => {
    // Only load Google Analytics if user has consented to analytics cookies
    if (preferences.analyticsCookies && typeof window !== "undefined") {
      const gaId = process.env.NEXT_PUBLIC_GA_ID

      if (gaId) {
        // Initialize dataLayer if not exists
        if (!window.dataLayer) {
          window.dataLayer = []
        }

        // Initialize gtag function if not exists
        if (!window.gtag) {
          window.gtag = function gtag(...args: any[]) {
            window.dataLayer.push(args)
          }
        }

        // Load Google Analytics script (only once)
        if (!document.querySelector(`script[src*="gtag/js?id=${gaId}"]`)) {
          const script1 = document.createElement("script")
          script1.async = true
          script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
          document.head.appendChild(script1)
        }

        // Initialize gtag config (only once)
        if (!document.querySelector(`script[data-ga-init]`)) {
          const script2 = document.createElement("script")
          script2.setAttribute("data-ga-init", "true")
          script2.innerHTML = `
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `
          document.head.appendChild(script2)
        }

        // Track initial page view
        if (window.gtag) {
          window.gtag("config", gaId, {
            page_path: pathname,
          })
        }
      }
    }
  }, [preferences.analyticsCookies])

  // Track page views on route changes
  useEffect(() => {
    if (preferences.analyticsCookies && typeof window !== "undefined") {
      const gaId = process.env.NEXT_PUBLIC_GA_ID
      if (gaId && window.gtag) {
        window.gtag("config", gaId, {
          page_path: pathname,
        })
      }
    }
  }, [pathname, preferences.analyticsCookies])

  return null
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

