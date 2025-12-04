import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import ProvidersSection from "@/components/providers-section"
import HowItWorksSection from "@/components/how-it-works-section"
import PricingSection from "@/components/pricing-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://symphonyroute.com"

// Structured Data (JSON-LD)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SymphonyRoute",
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description:
    "Intelligent SMS orchestration and routing platform. Automatically choose the best provider with smart failover and real-time optimization.",
  sameAs: [
    "https://twitter.com/SymphonyRoute",
    "https://github.com/SymphonyRoute",
    "https://linkedin.com/company/SymphonyRoute",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "contact@symphonyroute.com",
  },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SymphonyRoute",
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/providers?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does multi-provider routing work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SymphonyRoute connects to your existing SMS providers (like Twilio, Vonage, AWS SNS) and intelligently routes each message to the optimal provider based on your rules—whether that's cost, delivery speed, geographic coverage, or reliability scores.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if a provider goes down?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our automatic failover system continuously monitors provider health. If a provider experiences issues, we instantly reroute messages to your backup providers—all without any code changes or manual intervention required.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use my existing SMS provider accounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SymphonyRoute works with your existing provider accounts. Simply add your API credentials, and we'll start routing through them immediately. You maintain full control over your provider relationships.",
      },
    },
    {
      "@type": "Question",
      name: "How long does integration take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most developers are up and running within 15 minutes. Our RESTful API is designed to be familiar and intuitive, and we provide SDKs for JavaScript, Python, Ruby, Go, and PHP.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free trial available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! All plans include a 14-day free trial with full access to all features. No credit card required to get started. You can also use our free tier for testing and development.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of analytics do you provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our analytics dashboard provides real-time insights into delivery rates, provider performance, latency metrics, cost breakdowns, and geographic delivery patterns. Pro and Enterprise plans include advanced reporting and exportable data.",
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <ProvidersSection />
        <HowItWorksSection />
        <PricingSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  )
}
