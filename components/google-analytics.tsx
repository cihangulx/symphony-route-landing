"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { useCookie } from "@/contexts/cookie-context"

export default function GoogleAnalytics() {
  const { preferences } = useCookie()
  const pathname = usePathname()

  // Update consent when preferences change
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      const consentState = preferences.analyticsCookies ? "granted" : "denied"
      
      window.gtag("consent", "update", {
        analytics_storage: consentState,
        ad_storage: consentState,
        ad_user_data: consentState,
        ad_personalization: consentState,
      })
    }
  }, [preferences.analyticsCookies])

  // Load Google Analytics script and initialize
  useEffect(() => {
    if (typeof window !== "undefined") {
      const gaId = process.env.NEXT_PUBLIC_GA_ID

      if (gaId) {
        // Ensure dataLayer and gtag exist (should already exist from layout)
        if (!window.dataLayer) {
          window.dataLayer = []
        }

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
            gtag('config', '${gaId}', {
              send_page_view: false
            });
          `
          document.head.appendChild(script2)
        }

        // Track initial page view only if consent is granted
        if (preferences.analyticsCookies && window.gtag) {
          // Small delay to ensure GA script is loaded
          setTimeout(() => {
            if (window.gtag) {
              window.gtag("config", gaId, {
                page_path: pathname,
              })
            }
          }, 100)
        }
      }
    }
  }, [preferences.analyticsCookies, pathname])

  // Track page views on route changes (only if consent granted)
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

