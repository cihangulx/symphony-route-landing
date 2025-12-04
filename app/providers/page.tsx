import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AllProvidersSection from "@/components/all-providers-section"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://symphonyroute.com"

export const metadata: Metadata = {
  title: "Supported SMS Providers | SymphonyRoute",
  description:
    "View all supported SMS providers on SymphonyRoute. Connect your existing accounts and start routing messages intelligently across 150+ supported providers worldwide.",
  keywords: [
    "SMS providers",
    "Twilio",
    "Vonage",
    "AWS SNS",
    "MessageBird",
    "Plivo",
    "Sinch",
    "SMS gateway providers",
    "bulk SMS providers",
  ],
  alternates: {
    canonical: "/providers",
    languages: {
      en: `${siteUrl}/providers`,
      tr: `${siteUrl}/providers`,
      es: `${siteUrl}/providers`,
      de: `${siteUrl}/providers`,
      fr: `${siteUrl}/providers`,
      "pt-BR": `${siteUrl}/providers`,
      ar: `${siteUrl}/providers`,
    },
  },
  openGraph: {
    title: "Supported SMS Providers | SymphonyRoute",
    description:
      "View all supported SMS providers on SymphonyRoute. Connect your existing accounts and start routing messages intelligently across 150+ supported providers worldwide.",
    url: `${siteUrl}/providers`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supported SMS Providers | SymphonyRoute",
    description:
      "View all supported SMS providers on SymphonyRoute. Connect your existing accounts and start routing messages intelligently across 150+ supported providers worldwide.",
  },
}

export default function ProvidersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AllProvidersSection />
      <Footer />
    </main>
  )
}

