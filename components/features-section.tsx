"use client"

import { ArrowRightLeft, ShieldCheck, BarChart3, Code2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function FeaturesSection() {
  const { t } = useLanguage()
  
  const features = [
    {
      icon: ArrowRightLeft,
      title: t.features.multiProviderRouting.title,
      description: t.features.multiProviderRouting.description,
    },
    {
      icon: ShieldCheck,
      title: t.features.automaticFailover.title,
      description: t.features.automaticFailover.description,
    },
    {
      icon: BarChart3,
      title: t.features.realTimeAnalytics.title,
      description: t.features.realTimeAnalytics.description,
    },
    {
      icon: Code2,
      title: t.features.developerFriendly.title,
      description: t.features.developerFriendly.description,
    },
  ]
  return (
    <section id="features" className="py-10 lg:py-16 bg-[#FAFBFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#020726] tracking-tight">
            {t.features.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.features.description}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 border border-[#020726]/5 hover:border-[#0C58FE]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#0C58FE]/5"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#020726]/5 to-[#0C58FE]/10 flex items-center justify-center mb-5 group-hover:from-[#0C58FE]/10 group-hover:to-[#0C58FE]/20 transition-all">
                <feature.icon className="w-6 h-6 text-[#0C58FE]" />
              </div>
              <h3 className="text-lg font-semibold text-[#020726] mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
