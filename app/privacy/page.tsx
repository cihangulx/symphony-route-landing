import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PrivacySection from "@/components/privacy-section"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://symphonyroute.com"

export const metadata: Metadata = {
  title: "Privacy Policy | SymphonyRoute",
  description:
    "SymphonyRoute Privacy Policy. Learn how we collect, use, store, and protect your personal information when you use our SMS routing platform.",
  alternates: {
    canonical: "/privacy",
    languages: {
      en: `${siteUrl}/privacy`,
      tr: `${siteUrl}/privacy`,
      es: `${siteUrl}/privacy`,
      de: `${siteUrl}/privacy`,
      fr: `${siteUrl}/privacy`,
      "pt-BR": `${siteUrl}/privacy`,
      ar: `${siteUrl}/privacy`,
    },
  },
  openGraph: {
    title: "Privacy Policy | SymphonyRoute",
    description:
      "SymphonyRoute Privacy Policy. Learn how we collect, use, store, and protect your personal information when you use our SMS routing platform.",
    url: `${siteUrl}/privacy`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | SymphonyRoute",
    description:
      "SymphonyRoute Privacy Policy. Learn how we collect, use, store, and protect your personal information when you use our SMS routing platform.",
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PrivacySection />
      <Footer />
    </main>
  )
}

