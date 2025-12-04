"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/contexts/language-context"

export default function FAQSection() {
  const { t } = useLanguage()
  
  const faqs = [
    {
      question: t.faq.questions.routing.question,
      answer: t.faq.questions.routing.answer,
    },
    {
      question: t.faq.questions.failover.question,
      answer: t.faq.questions.failover.answer,
    },
    {
      question: t.faq.questions.existingProviders.question,
      answer: t.faq.questions.existingProviders.answer,
    },
    {
      question: t.faq.questions.integration.question,
      answer: t.faq.questions.integration.answer,
    },
    {
      question: t.faq.questions.freeTrial.question,
      answer: t.faq.questions.freeTrial.answer,
    },
    {
      question: t.faq.questions.analytics.question,
      answer: t.faq.questions.analytics.answer,
    },
  ]
  return (
    <section className="py-10 lg:py-16 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#020726] tracking-tight">{t.faq.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.faq.description}</p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-[#020726]/5 rounded-xl px-6 data-[state=open]:border-[#0C58FE]/20 data-[state=open]:shadow-lg data-[state=open]:shadow-[#0C58FE]/5 transition-all"
            >
              <AccordionTrigger className="text-left text-[#020726] font-medium hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
