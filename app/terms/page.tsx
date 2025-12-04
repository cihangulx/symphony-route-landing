import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import TermsSection from "@/components/terms-section"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://symphonyroute.com"

export const metadata: Metadata = {
  title: "Terms of Service | SymphonyRoute",
  description:
    "SymphonyRoute Terms of Service. Read our service agreement to understand the terms and conditions for using our SMS routing platform.",
  alternates: {
    canonical: "/terms",
    languages: {
      en: `${siteUrl}/terms`,
      tr: `${siteUrl}/terms`,
      es: `${siteUrl}/terms`,
      de: `${siteUrl}/terms`,
      fr: `${siteUrl}/terms`,
      "pt-BR": `${siteUrl}/terms`,
      ar: `${siteUrl}/terms`,
    },
  },
  openGraph: {
    title: "Terms of Service | SymphonyRoute",
    description:
      "SymphonyRoute Terms of Service. Read our service agreement to understand the terms and conditions for using our SMS routing platform.",
    url: `${siteUrl}/terms`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | SymphonyRoute",
    description:
      "SymphonyRoute Terms of Service. Read our service agreement to understand the terms and conditions for using our SMS routing platform.",
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <TermsSection />
      <Footer />
    </main>
  )
}

