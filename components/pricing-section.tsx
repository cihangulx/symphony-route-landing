"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useRouter } from "next/navigation"

export default function PricingSection() {
  const { t } = useLanguage()
  const router = useRouter()
  
  // Dashboard URL from environment variable
  const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'http://localhost:5001'
  
  const plans = [
    {
      name: t.pricing.basic.name,
      price: t.pricing.basic.price,
      period: t.pricing.basic.period,
      description: t.pricing.basic.description,
      features: t.pricing.basic.features,
      cta: t.pricing.basic.cta,
      popular: false,
    },
    {
      name: t.pricing.pro.name,
      price: t.pricing.pro.price,
      period: t.pricing.pro.period,
      description: t.pricing.pro.description,
      features: t.pricing.pro.features,
      cta: t.pricing.pro.cta,
      popular: true,
    },
    {
      name: t.pricing.enterprise.name,
      price: t.pricing.enterprise.price,
      period: t.pricing.enterprise.period,
      description: t.pricing.enterprise.description,
      features: t.pricing.enterprise.features,
      cta: t.pricing.enterprise.cta,
      popular: false,
    },
  ]
  return (
    <section id="pricing" className="py-10 lg:py-16 bg-[#FAFBFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#020726] tracking-tight">{t.pricing.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.pricing.description}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular
                  ? "border-2 border-[#0C58FE] shadow-xl shadow-[#0C58FE]/15 scale-105 lg:scale-110"
                  : "border border-[#020726]/5"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#020726] to-[#0C58FE] text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                    {t.pricing.mostPopular}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-[#020726]">{plan.name}</h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-[#020726]">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0C58FE]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#0C58FE]" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full rounded-xl py-6 text-base font-medium ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#020726] to-[#0C58FE] hover:from-[#030936] hover:to-[#0d63ff] text-white shadow-lg shadow-[#0C58FE]/25"
                    : "bg-[#020726]/5 text-[#020726] hover:bg-[#020726]/10"
                }`}
                onClick={() => {
                  if (plan.cta === t.pricing.enterprise.cta) {
                    // Contact sales için iletişim sayfasına yönlendir
                    router.push('/contact')
                    return
                  }
                  window.open(`${dashboardUrl}/register`, '_blank')
                }}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
