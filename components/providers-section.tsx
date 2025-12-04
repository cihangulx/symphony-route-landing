"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import providersData from "@/lib/data/providers.json"

export default function ProvidersSection() {
  const { t } = useLanguage()
  
  // Ana sayfada "Supported" olan ilk 6 provider'ı göster
  const supportedProviders = providersData.filter(p => p.supportStatus === "Supported")
  const displayedProviders = supportedProviders.slice(0, 6)
  
  // Toplam provider sayısından gösterilen provider sayısını çıkar
  const remainingProviders = providersData.length - displayedProviders.length

  return (
    <section id="providers" className="py-10 lg:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#020726] tracking-tight">
            {t.providers.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.providers.description}
          </p>
        </div>

        {/* Provider Grid - Show first 6 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedProviders.map((provider) => (
            <div
              key={provider.id}
              className="group bg-white rounded-2xl p-6 border border-[#020726]/5 hover:border-[#0C58FE]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#0C58FE]/5"
            >
              <div className="flex items-start gap-4">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-white border border-[#020726]/5 p-3 flex items-center justify-center overflow-hidden">
                    <Image
                      src={provider.logo}
                      alt={provider.name}
                      width={64}
                      height={64}
                      className="object-contain w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-[#020726]">
                      {provider.name}
                    </h3>
                    {provider.supportStatus && (
                      <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${
                        provider.supportStatus === "Supported" 
                          ? "bg-green-100 text-green-700" 
                          : provider.supportStatus === "Partially Supported"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-700"
                      }`}>
                        {provider.supportStatus}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {provider.regions.map((region, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-[#0C58FE]/10 text-[#0C58FE] rounded-md"
                      >
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/providers">
            <Button
              variant="outline"
              size="lg"
              className="border-[#020726]/20 text-[#020726] hover:bg-[#020726]/5 hover:text-[#0C58FE] rounded-xl px-8 py-6 text-base font-medium bg-transparent transition-colors"
            >
              {t.providers.viewAll} {remainingProviders}+ {t.providers.more}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

