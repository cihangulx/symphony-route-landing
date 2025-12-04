"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function HeroSection() {
  const { t } = useLanguage()
  
  // Dashboard URL from environment variable
  const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'http://localhost:5001'
  // Dashboard domain for mockup display
  const dashboardDomain = process.env.NEXT_PUBLIC_DASHBOARD_DOMAIN || 'dashboard.symphonyroute.com'
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0C58FE]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-[#0C58FE]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#020726]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0C58FE]/10 border border-[#0C58FE]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0C58FE] animate-pulse" />
            <span className="text-sm font-medium text-[#020726]">{t.hero.badge}</span>
          </div>

          {/* Headline - İki satıra ayır */}
          <h1>
            <div className="mb-3 text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground leading-normal">
              {t.hero.headline}
            </div>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#020726] to-[#0C58FE] bg-clip-text text-transparent leading-tight mb-2">
              {t.hero.headlineHighlight}
            </div>
          </h1>

          {/* Subtext - Daha büyük ve okunabilir */}
          <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            {t.hero.subtext}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#020726] to-[#0C58FE] hover:from-[#030936] hover:to-[#0d63ff] text-white rounded-xl px-8 py-6 text-base font-medium shadow-lg shadow-[#0C58FE]/25 transition-all hover:shadow-xl hover:shadow-[#0C58FE]/30"
              onClick={() => window.open(`${dashboardUrl}/register`, '_blank')}
            >
              {t.hero.tryItFree}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Hero Image / Dashboard Mockup */}
        <div className="mt-16 lg:mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="relative mx-auto max-w-5xl">
            <div className="bg-gradient-to-br from-[#020726] to-[#0C58FE] rounded-2xl p-1 shadow-2xl shadow-[#0C58FE]/20">
              <div className="bg-[#020726] rounded-xl overflow-hidden">
                {/* Dashboard Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-white/10 rounded-lg px-4 py-1 text-xs text-white/60">
                      {dashboardDomain}
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-4">
                  {/* Stats Row */}
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { label: t.dashboard.messagesSent, value: "2.4M", change: "+12%" },
                      { label: t.dashboard.deliveryRate, value: "99.7%", change: "+0.3%" },
                      { label: t.dashboard.activeProviders, value: "5", change: "" },
                      { label: t.dashboard.avgLatency, value: "124ms", change: "-18%" },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/5 rounded-xl p-4">
                        <p className="text-xs text-white/50">{stat.label}</p>
                        <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                        {stat.change && <p className="text-xs text-[#0C58FE] mt-1">{stat.change}</p>}
                      </div>
                    ))}
                  </div>

                  {/* Chart Area */}
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm font-medium text-white">{t.dashboard.messageVolume}</p>
                      <div className="flex gap-2">
                        <span className="text-xs px-2 py-1 bg-[#0C58FE]/20 text-[#0C58FE] rounded-lg">24h</span>
                        <span className="text-xs px-2 py-1 text-white/40 rounded-lg">7d</span>
                        <span className="text-xs px-2 py-1 text-white/40 rounded-lg">30d</span>
                      </div>
                    </div>
                    <div className="h-32 flex items-end gap-2">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-[#0C58FE]/60 to-[#0C58FE] rounded-t-sm"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Provider Status */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4">
                      <p className="text-sm font-medium text-white mb-3">{t.dashboard.providerStatus}</p>
                      <div className="space-y-2">
                        {["Twilio", "Vonage", "AWS SNS"].map((provider, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <span className="text-xs text-white/70">{provider}</span>
                            <span className="flex items-center gap-1.5 text-xs text-green-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                              {t.dashboard.active}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <p className="text-sm font-medium text-white mb-3">{t.dashboard.routingRules}</p>
                      <div className="space-y-2">
                        {[t.dashboard.costOptimization, t.dashboard.geoRouting, t.dashboard.failover].map((rule, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <span className="text-xs text-white/70">{rule}</span>
                            <span className="text-xs text-[#0C58FE]">{t.dashboard.enabled}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
