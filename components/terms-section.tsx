"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function TermsSection() {
  const { t } = useLanguage()

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/">
            <Button
              variant="ghost"
              className="text-[#020726] hover:text-[#0C58FE] hover:bg-transparent"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              {t.terms.backToHome}
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#020726] tracking-tight mb-6">
            {t.terms.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t.terms.lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-[#020726]">
            {t.terms.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-2xl font-bold text-[#020726] mt-8 mb-4">
                  {section.title}
                </h2>
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-base leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

