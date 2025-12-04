import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://symphonyroute.com"

export const metadata: Metadata = {
  title: "Contact Us | SymphonyRoute",
  description:
    "Get in touch with SymphonyRoute for questions, suggestions, or support requests. We'll get back to you as soon as possible.",
  alternates: {
    canonical: "/contact",
    languages: {
      en: `${siteUrl}/contact`,
      tr: `${siteUrl}/contact`,
      es: `${siteUrl}/contact`,
      de: `${siteUrl}/contact`,
      fr: `${siteUrl}/contact`,
      "pt-BR": `${siteUrl}/contact`,
      ar: `${siteUrl}/contact`,
    },
  },
  openGraph: {
    title: "Contact Us | SymphonyRoute",
    description:
      "Get in touch with SymphonyRoute for questions, suggestions, or support requests. We'll get back to you as soon as possible.",
    url: `${siteUrl}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Us | SymphonyRoute",
    description:
      "Get in touch with SymphonyRoute for questions, suggestions, or support requests. We'll get back to you as soon as possible.",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ContactSection />
      <Footer />
    </main>
  )
}

