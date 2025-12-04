"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/contexts/language-context"
import providersData from "@/lib/data/providers.json"
import { cn } from "@/lib/utils"

export default function AllProvidersSection() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [regionFilter, setRegionFilter] = useState<string>("all")

  // Get unique regions from all providers
  const allRegions = useMemo(() => {
    const regions = new Set<string>()
    providersData.forEach(provider => {
      provider.regions.forEach(region => regions.add(region))
    })
    return Array.from(regions).sort()
  }, [])

  // Filter providers
  const filteredProviders = useMemo(() => {
    return providersData.filter(provider => {
      // Search filter
      const matchesSearch = searchQuery === "" || 
        provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provider.description.toLowerCase().includes(searchQuery.toLowerCase())

      // Status filter
      const matchesStatus = statusFilter === "all" || provider.supportStatus === statusFilter

      // Region filter
      const matchesRegion = regionFilter === "all" || 
        provider.regions.some(region => region.toLowerCase().includes(regionFilter.toLowerCase()))

      return matchesSearch && matchesStatus && matchesRegion
    })
  }, [searchQuery, statusFilter, regionFilter])

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/">
            <Button
              variant="ghost"
              className="text-[#020726] hover:text-[#0C58FE] hover:bg-transparent"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              {t.providers.backToHome}
            </Button>
          </Link>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#020726] tracking-tight mb-6">
            {t.providers.allProviders}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            {t.providers.allProvidersDescription}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t.providers.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 h-12 text-base"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-[#020726]"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder={t.providers.filterByStatus} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t.providers.allStatuses}</SelectItem>
                  <SelectItem value="Supported">{t.providers.supported}</SelectItem>
                  <SelectItem value="Partially Supported">{t.providers.partiallySupported}</SelectItem>
                  <SelectItem value="Not Supported yet">{t.providers.notSupportedYet}</SelectItem>
                </SelectContent>
              </Select>

              {/* Results Count */}
              <div className="flex-1 flex items-center justify-end text-sm text-muted-foreground">
                {t.providers.resultsCount.replace("{count}", filteredProviders.length.toString())}
              </div>
            </div>

            {/* Region Filter - Chip List */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#020726]">
                {t.providers.filterByRegion}
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setRegionFilter("all")}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    regionFilter === "all"
                      ? "bg-[#0C58FE] text-white shadow-md"
                      : "bg-white border border-[#020726]/10 text-[#020726] hover:bg-[#0C58FE]/10 hover:border-[#0C58FE]/20"
                  )}
                >
                  {t.providers.allRegions}
                </button>
                {allRegions.map((region) => (
                  <button
                    key={region}
                    onClick={() => setRegionFilter(region)}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      regionFilter === region
                        ? "bg-[#0C58FE] text-white shadow-md"
                        : "bg-white border border-[#020726]/10 text-[#020726] hover:bg-[#0C58FE]/10 hover:border-[#0C58FE]/20"
                    )}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All Providers Grid */}
        {filteredProviders.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProviders.map((provider) => (
                  <div
                    key={provider.id}
                    className="group bg-white rounded-2xl p-6 border border-[#020726]/5 hover:border-[#0C58FE]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#0C58FE]/5"
                  >
                    <div className="flex flex-col gap-4">
                      {/* Logo and Name */}
                      <div className="flex items-start gap-4">
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
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
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
                          <div className="flex flex-wrap gap-1">
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

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {provider.description}
                      </p>
                    </div>
                  </div>
                ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">{t.providers.noResults}</p>
          </div>
        )}
      </div>
    </section>
  )
}

