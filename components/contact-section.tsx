"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/language-context"

export default function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

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
              {t.contact.backToHome}
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#020726] tracking-tight mb-6">
            {t.contact.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl border border-[#020726]/5 p-8 lg:p-12 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#020726] mb-2">
                  {t.contact.name}
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#020726] mb-2">
                  {t.contact.email}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12"
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-[#020726] mb-2">
                {t.contact.subject}
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                className="h-12"
                placeholder={t.contact.subjectPlaceholder}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#020726] mb-2">
                {t.contact.message}
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="resize-none"
                placeholder={t.contact.messagePlaceholder}
              />
            </div>

            {/* Submit Status */}
            {submitStatus === "success" && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                {t.contact.successMessage}
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                {t.contact.errorMessage}
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0C58FE] hover:bg-[#0a4ad9] text-white rounded-xl px-8 py-6 text-base font-medium h-auto"
            >
              {isSubmitting ? (
                <>
                  <span className="mr-2">{t.contact.sending}</span>
                </>
              ) : (
                <>
                  <Send className="mr-2 w-5 h-5" />
                  {t.contact.send}
                </>
              )}
            </Button>
          </form>

          {/* Contact Info */}
          <div className="mt-12 pt-12 border-t border-[#020726]/10">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="w-5 h-5" />
              <span className="text-sm">{t.contact.emailInfo}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

