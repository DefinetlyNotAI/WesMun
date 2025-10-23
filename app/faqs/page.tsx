"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {faqs, FAQText} from "@/lib/data"


export default function FAQsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>(FAQText.CATEGORY_ALL)

    const categories = [FAQText.CATEGORY_ALL, ...new Set(faqs.map((faq) => faq.category))]
    const filteredFaqs =
        selectedCategory === FAQText.CATEGORY_ALL ? faqs : faqs.filter((faq) => faq.category === selectedCategory)

    return (
        <div className="min-h-screen">
            <ScrollToTop />
            <Navigation />

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-4xl animate-in fade-in duration-1000">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{FAQText.PAGE_TITLE}</h1>
                        <p className="text-lg text-muted-foreground text-pretty">{FAQText.PAGE_SUBTITLE}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center mb-8">
                        {categories.map((category) => (
                            <Badge
                                key={category}
                                variant={selectedCategory === category ? "default" : "outline"}
                                className="cursor-pointer capitalize"
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </Badge>
                        ))}
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        {filteredFaqs.map((faq) => (
                            <AccordionItem key={faq.id} value={faq.id} className="border-border">
                                <AccordionTrigger className="text-left hover:text-primary">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <Footer />
        </div>
    )
}
