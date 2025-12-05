import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { LanguageProvider } from "@/contexts/language-context"
import { CookieProvider } from "@/contexts/cookie-context"
import CookieConsent from "@/components/cookie-consent"
import GoogleAnalytics from "@/components/google-analytics"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://symphonyroute.com"
const siteName = "SymphonyRoute"
const title = "SymphonyRoute - Smart Multi-Provider SMS Routing"
const description =
  "Intelligent SMS orchestration and routing platform. Automatically choose the best provider with smart failover and real-time optimization."
const keywords = [
  "SMS routing",
  "multi-provider SMS",
  "SMS orchestration",
  "SMS failover",
  "SMS API",
  "bulk SMS",
  "SMS gateway",
  "SMS provider",
  "Twilio alternative",
  "SMS automation",
]

export const metadata: Metadata = {
  title,
  description,
  keywords,
  authors: [{ name: "SymphonyRoute" }],
  creator: "SymphonyRoute",
  publisher: "SymphonyRoute",
  generator: "Next.js",
  applicationName: siteName,
  referrer: "origin-when-cross-origin",
  metadataBase: new URL(siteUrl),
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      en: `${siteUrl}`,
      tr: `${siteUrl}`,
      es: `${siteUrl}`,
      de: `${siteUrl}`,
      fr: `${siteUrl}`,
      "pt-BR": `${siteUrl}`,
      ar: `${siteUrl}`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title,
    description,
    images: [
      {
        url: "/icon.svg",
        width: 1200,
        height: 630,
        alt: "SymphonyRoute - Smart Multi-Provider SMS Routing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/icon.svg"],
    creator: "@SymphonyRoute",
    site: "@SymphonyRoute",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  verification: {
    // Google Search Console verification code can be added here
    // google: "verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          <CookieProvider>
            {children}
            <CookieConsent />
            <GoogleAnalytics />
          </CookieProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}

