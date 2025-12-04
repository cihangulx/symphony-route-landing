"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X, Globe, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { locale, setLocale, t } = useLanguage()
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  
  // Dashboard URL from environment variable
  const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'http://localhost:5001'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#020726] to-[#0C58FE] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-lg font-semibold text-[#020726]">SymphonyRoute</span>
          </Link>

          {/* Desktop Navigation - Only show on homepage */}
          {isHomePage && (
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm text-muted-foreground hover:text-[#020726] transition-colors">
                {t.header.features}
              </Link>
              <Link href="#pricing" className="text-sm text-muted-foreground hover:text-[#020726] transition-colors">
                {t.header.pricing}
              </Link>
              <Link href="#providers" className="text-sm text-muted-foreground hover:text-[#020726] transition-colors">
                {t.header.providers}
              </Link>
            </nav>
          )}

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-[#020726] hover:bg-[#0C58FE]/20 hover:text-[#020726] bg-white border border-[#020726]/10 rounded-lg px-3 py-2 h-auto">
                  <Globe className="w-4 h-4 mr-2" />
                  <span className="text-sm font-normal text-[#020726]/60">{locale.toUpperCase()}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white border border-[#020726]/10 rounded-lg p-1 min-w-[120px]">
                <DropdownMenuItem 
                  onClick={() => setLocale("en")} 
                  className="text-[#020726] hover:bg-[#0C58FE]/20 hover:text-[#020726] bg-white rounded-md px-3 py-2 cursor-pointer flex items-center justify-between"
                >
                  <span className="text-sm">English</span>
                  {locale === "en" && <Check className="w-4 h-4 text-[#0C58FE]" />}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLocale("tr")} 
                  className="text-[#020726] hover:bg-[#0C58FE]/20 hover:text-[#020726] bg-white rounded-md px-3 py-2 cursor-pointer flex items-center justify-between"
                >
                  <span className="text-sm">Türkçe</span>
                  {locale === "tr" && <Check className="w-4 h-4 text-[#0C58FE]" />}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLocale("es")} 
                  className="text-[#020726] hover:bg-[#0C58FE]/20 hover:text-[#020726] bg-white rounded-md px-3 py-2 cursor-pointer flex items-center justify-between"
                >
                  <span className="text-sm">Español</span>
                  {locale === "es" && <Check className="w-4 h-4 text-[#0C58FE]" />}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLocale("de")} 
                  className="text-[#020726] hover:bg-[#0C58FE]/20 hover:text-[#020726] bg-white rounded-md px-3 py-2 cursor-pointer flex items-center justify-between"
                >
                  <span className="text-sm">Deutsch</span>
                  {locale === "de" && <Check className="w-4 h-4 text-[#0C58FE]" />}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLocale("fr")} 
                  className="text-[#020726] hover:bg-[#0C58FE]/20 hover:text-[#020726] bg-white rounded-md px-3 py-2 cursor-pointer flex items-center justify-between"
                >
                  <span className="text-sm">Français</span>
                  {locale === "fr" && <Check className="w-4 h-4 text-[#0C58FE]" />}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLocale("pt-BR")} 
                  className="text-[#020726] hover:bg-[#0C58FE]/20 hover:text-[#020726] bg-white rounded-md px-3 py-2 cursor-pointer flex items-center justify-between"
                >
                  <span className="text-sm">Português (BR)</span>
                  {locale === "pt-BR" && <Check className="w-4 h-4 text-[#0C58FE]" />}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLocale("ar")} 
                  className="text-[#020726] hover:bg-[#0C58FE]/20 hover:text-[#020726] bg-white rounded-md px-3 py-2 cursor-pointer flex items-center justify-between"
                >
                  <span className="text-sm">العربية</span>
                  {locale === "ar" && <Check className="w-4 h-4 text-[#0C58FE]" />}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button 
              variant="ghost" 
              className="text-[#020726] hover:text-[#0C58FE] hover:bg-transparent"
              onClick={() => window.open(`${dashboardUrl}/login`, '_blank')}
            >
              {t.header.login}
            </Button>
            <Button 
              className="bg-[#0C58FE] hover:bg-[#0a4ad9] text-white rounded-xl px-5"
              onClick={() => window.open(`${dashboardUrl}/register`, '_blank')}
            >
              {t.header.tryItFree}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#020726]" /> : <Menu className="w-6 h-6 text-[#020726]" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              {isHomePage && (
                <>
                  <Link href="#features" className="text-sm text-muted-foreground hover:text-[#020726] transition-colors">
                    {t.header.features}
                  </Link>
                  <Link href="#pricing" className="text-sm text-muted-foreground hover:text-[#020726] transition-colors">
                    {t.header.pricing}
                  </Link>
                  <Link href="#providers" className="text-sm text-muted-foreground hover:text-[#020726] transition-colors">
                    {t.header.providers}
                  </Link>
                </>
              )}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLocale("en")}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-[#020726]/10 text-[#020726] hover:bg-[#0C58FE]/20 transition-colors text-sm"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-[#020726]/60">EN</span>
                  {locale === "en" && <Check className="w-4 h-4 text-[#0C58FE]" />}
                </button>
                <button
                  onClick={() => setLocale("tr")}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-[#020726]/10 text-[#020726] hover:bg-[#0C58FE]/20 transition-colors text-sm"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-[#020726]/60">TR</span>
                  {locale === "tr" && <Check className="w-4 h-4 text-[#0C58FE]" />}
                </button>
                <button
                  onClick={() => setLocale("es")}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-[#020726]/10 text-[#020726] hover:bg-[#0C58FE]/20 transition-colors text-sm"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-[#020726]/60">ES</span>
                  {locale === "es" && <Check className="w-4 h-4 text-[#0C58FE]" />}
                </button>
                <button
                  onClick={() => setLocale("de")}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-[#020726]/10 text-[#020726] hover:bg-[#0C58FE]/20 transition-colors text-sm"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-[#020726]/60">DE</span>
                  {locale === "de" && <Check className="w-4 h-4 text-[#0C58FE]" />}
                </button>
                <button
                  onClick={() => setLocale("fr")}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-[#020726]/10 text-[#020726] hover:bg-[#0C58FE]/20 transition-colors text-sm"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-[#020726]/60">FR</span>
                  {locale === "fr" && <Check className="w-4 h-4 text-[#0C58FE]" />}
                </button>
                <button
                  onClick={() => setLocale("pt-BR")}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-[#020726]/10 text-[#020726] hover:bg-[#0C58FE]/20 transition-colors text-sm"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-[#020726]/60">PT-BR</span>
                  {locale === "pt-BR" && <Check className="w-4 h-4 text-[#0C58FE]" />}
                </button>
                <button
                  onClick={() => setLocale("ar")}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-[#020726]/10 text-[#020726] hover:bg-[#0C58FE]/20 transition-colors text-sm"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-[#020726]/60">AR</span>
                  {locale === "ar" && <Check className="w-4 h-4 text-[#0C58FE]" />}
                </button>
              </div>
              <Button 
                className="bg-[#0C58FE] hover:bg-[#0a4ad9] text-white rounded-xl w-full mt-2"
                onClick={() => window.open(`${dashboardUrl}/register`, '_blank')}
              >
                {t.header.tryItFree}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
