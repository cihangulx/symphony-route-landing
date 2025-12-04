"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCookie } from "@/contexts/cookie-context"
import { useLanguage } from "@/contexts/language-context"

export default function CookieConsent() {
  const { hasConsented, acceptEssential, acceptAll } = useCookie()
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show banner only if user hasn't consented yet
    if (!hasConsented) {
      // Small delay for smooth animation
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      setIsVisible(false)
    }
  }, [hasConsented])

  if (hasConsented || !isVisible) {
    return null
  }

  return (
    <div
      className={`fixed bottom-4 right-4 left-4 md:left-auto md:max-w-md z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-white border border-[#020726]/10 rounded-xl shadow-lg p-4 md:p-5 space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-[#020726] mb-1">
              {t.cookieConsent?.title || "Cookie Preferences"}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t.cookieConsent?.description || 
                "We use essential cookies to ensure our website works properly. You can accept all cookies to enable analytics."}
            </p>
          </div>
          <button
            onClick={acceptEssential}
            className="flex-shrink-0 text-muted-foreground hover:text-[#020726] transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <Button
            onClick={acceptEssential}
            variant="outline"
            size="sm"
            className="flex-1 text-xs border-[#020726]/20 hover:bg-[#020726]/5 hover:text-[#0C58FE]"
          >
            {t.cookieConsent?.essentialOnly || "Accept Only Essential"}
          </Button>
          <Button
            onClick={acceptAll}
            size="sm"
            className="flex-1 text-xs bg-[#0C58FE] hover:bg-[#0a4ad9] text-white"
          >
            {t.cookieConsent?.acceptAll || "Accept All"}
          </Button>
        </div>

        {/* Privacy Policy Link */}
        <p className="text-xs text-muted-foreground text-center pt-1">
          {t.cookieConsent?.privacyText || "Learn more in our"}{" "}
          <Link
            href="/privacy"
            className="text-[#0C58FE] hover:underline"
          >
            {t.cookieConsent?.privacyLink || "Privacy Policy"}
          </Link>
        </p>
      </div>
    </div>
  )
}

