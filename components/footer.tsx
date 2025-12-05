"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()
  
  const footerLinks = {
    product: [
      { name: t.footer.links.features, href: "#features" },
      { name: t.footer.links.pricing, href: "#pricing" },
      { name: t.footer.links.providers, href: "/providers" },
    ],
    legal: [
      { name: t.footer.links.privacy, href: "/privacy" },
      { name: t.footer.links.terms, href: "/terms" },
      { name: t.footer.links.contact, href: "/contact" },
    ],
  }
  return (
    <footer className="bg-[#020726] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <img 
                src="/sr_logo32x32.svg" 
                alt="SymphonyRoute" 
                className="w-8 h-8"
              />
              <span className="text-lg font-semibold">SymphonyRoute</span>
            </Link>
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Link
                href="https://twitter.com/SymphonyRoute"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white/70" />
              </Link>
              <Link
                href="https://github.com/SymphonyRoute"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-white/70" />
              </Link>
              <Link
                href="https://linkedin.com/company/SymphonyRoute"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white/70" />
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">{t.footer.product}</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">{t.footer.copyright.replace("{year}", new Date().getFullYear().toString())}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-white/50 hover:text-white transition-colors">
              {t.footer.privacyPolicy}
            </Link>
            <Link href="/terms" className="text-sm text-white/50 hover:text-white transition-colors">
              {t.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
