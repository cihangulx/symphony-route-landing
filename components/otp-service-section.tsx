"use client"

import { Shield, Send, CheckCircle2, Key, Zap, Lock, Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function OTPServiceSection() {
  const { t } = useLanguage()

  const howItWorks = [
    {
      icon: Key,
      title: t.otpService.howItWorks.step1.title,
      description: t.otpService.howItWorks.step1.description,
    },
    {
      icon: Send,
      title: t.otpService.howItWorks.step2.title,
      description: t.otpService.howItWorks.step2.description,
    },
    {
      icon: Zap,
      title: t.otpService.howItWorks.step3.title,
      description: t.otpService.howItWorks.step3.description,
    },
    {
      icon: CheckCircle2,
      title: t.otpService.howItWorks.step4.title,
      description: t.otpService.howItWorks.step4.description,
    },
    {
      icon: Lock,
      title: t.otpService.howItWorks.step5.title,
      description: t.otpService.howItWorks.step5.description,
    },
  ]

  return (
    <section id="otp-service" className="py-10 lg:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#020726] tracking-tight mb-4">
            {t.otpService.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.otpService.description}
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[#020726] text-center mb-10">
            {t.otpService.howItWorks.title}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-[#020726]/5 hover:border-[#0C58FE]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#0C58FE]/5"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#020726]/5 to-[#0C58FE]/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-[#0C58FE]" />
                </div>
                <h4 className="text-base font-semibold text-[#020726] mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* API Integration */}
        <div className="mb-16 bg-gradient-to-br from-[#020726] to-[#0C58FE] rounded-2xl p-8 lg:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">{t.otpService.apiIntegration.title}</h3>
            <p className="text-lg text-white/90 mb-8">{t.otpService.apiIntegration.description}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold mb-2">{t.otpService.apiIntegration.endpoint1.title}</h4>
                <p className="text-sm text-white/80">{t.otpService.apiIntegration.endpoint1.description}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold mb-2">{t.otpService.apiIntegration.endpoint2.title}</h4>
                <p className="text-sm text-white/80">{t.otpService.apiIntegration.endpoint2.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits and Use Cases Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Benefits */}
          <div className="bg-[#FAFBFC] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#020726] to-[#0C58FE] flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#020726]">{t.otpService.benefits.title}</h3>
            </div>
            <ul className="space-y-4">
              {t.otpService.benefits.items.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0C58FE]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#0C58FE]" />
                  </div>
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div className="bg-[#FAFBFC] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#020726] to-[#0C58FE] flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#020726]">{t.otpService.useCases.title}</h3>
            </div>
            <ul className="space-y-4">
              {t.otpService.useCases.items.map((useCase, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0C58FE]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#0C58FE]" />
                  </div>
                  <span className="text-muted-foreground">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Package Info */}
        <div className="bg-gradient-to-r from-[#0C58FE]/10 to-[#020726]/5 rounded-xl p-6 border border-[#0C58FE]/20 mb-12">
          <p className="text-center text-muted-foreground">
            <span className="font-semibold text-[#020726]">{t.otpService.packageInfo.label}:</span>{" "}
            {t.otpService.packageInfo.description}
          </p>
        </div>

        {/* Highlight Quote */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-[#020726] to-[#0C58FE] bg-clip-text text-transparent">
            <p className="text-2xl sm:text-3xl font-bold leading-relaxed">
              {t.otpService.highlight}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

