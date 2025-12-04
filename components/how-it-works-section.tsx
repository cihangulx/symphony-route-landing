"use client"

import { Plus, Settings, Send } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function HowItWorksSection() {
  const { t } = useLanguage()
  
  const steps = [
    {
      icon: Plus,
      number: "01",
      title: t.howItWorks.step1.title,
      description: t.howItWorks.step1.description,
    },
    {
      icon: Settings,
      number: "02",
      title: t.howItWorks.step2.title,
      description: t.howItWorks.step2.description,
    },
    {
      icon: Send,
      number: "03",
      title: t.howItWorks.step3.title,
      description: t.howItWorks.step3.description,
    },
  ]
  return (
    <section className="py-10 lg:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#020726] tracking-tight">{t.howItWorks.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.howItWorks.description}
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">

                <div className="flex flex-col items-center text-center">
                  {/* Step Number & Icon */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#020726] to-[#0C58FE] flex items-center justify-center shadow-lg shadow-[#0C58FE]/25">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-lg bg-white border-2 border-[#0C58FE] flex items-center justify-center">
                      <span className="text-xs font-bold text-[#0C58FE]">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-xl font-semibold text-[#020726]">{step.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed max-w-xs">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code Preview */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-[#020726] rounded-2xl overflow-hidden shadow-2xl shadow-[#020726]/20">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-white/50 ml-2">{t.howItWorks.codeExample.filename}</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <pre className="text-white/90">
                <code>
                  <span className="text-[#0C58FE]">const</span> response = <span className="text-[#0C58FE]">await</span>{" "}
                  symphonyRoute.send({"{"}
                  {"\n"} to: <span className="text-green-400">{`"+90 555 123 4567"`}</span>,{"\n"} message:{" "}
                  <span className="text-green-400">{`"Hello from SymphonyRoute!"`}</span>,{"\n"} routing:{" "}
                  <span className="text-green-400">{`"cost-optimized"`}</span>
                  {"\n"}
                  {"}"});
                  {"\n\n"}
                  <span className="text-white/50">{t.howItWorks.codeExample.comment}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Bottom Divider Line */}
        <div className="mt-8">
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#0C58FE]/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}
