"use client"

import Link from "next/link"
import {useEffect, useState} from "react"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Navigation} from "@/components/navigation"
import {Footer} from "@/components/footer"
import {ScrollToTop} from "@/components/scroll-to-top"
import {Check, ExternalLink} from "lucide-react"
import {paymentInstructions, signUpPageContent, SignUpText} from "@/lib/data/signup"
import PaymentModal from "@/components/payment-modal"


export default function SignUpPage() {
    const [isEarlyBird, setIsEarlyBird] = useState(true)
    const [showPaymentModal, setShowPaymentModal] = useState(false)

    useEffect(() => {
        const checkEarlyBird = () => {
            const now = new Date().getTime()
            const deadline = new Date(signUpPageContent.earlyBirdDeadline).getTime()
            setIsEarlyBird(now < deadline)
        }

        checkEarlyBird()
        const interval = setInterval(checkEarlyBird, 60000) // Check every minute
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="min-h-screen">
            <ScrollToTop/>
            <Navigation/>

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto animate-in fade-in duration-1000">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{SignUpText.PAGE_TITLE}</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{SignUpText.PAGE_SUBTITLE}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {signUpPageContent.registrationTypes.map((type) => (
                            <Card key={type.id} className="bg-card border-border relative flex flex-col">
                                <CardHeader className="text-center pb-4">
                                    <CardTitle className="text-2xl mb-2">{type.name}</CardTitle>
                                    <CardDescription className="text-sm min-h-[40px]">{type.description}</CardDescription>
                                    <div className="mt-4">
                                        {isEarlyBird && type.earlyBirdPrice ? (
                                            <>
                                                <div className="text-sm text-muted-foreground line-through">{type.price}</div>
                                                <span className="text-4xl font-bold text-primary">{type.earlyBirdPrice}</span>
                                                <div className="text-xs text-muted-foreground mt-1">{SignUpText.EARLY_BIRD_LABEL}</div>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-4xl font-bold text-primary">{type.price}</span>
                                                <div className="text-xs text-muted-foreground mt-1">{SignUpText.REGULAR_PRICE_LABEL}</div>
                                            </>
                                        )}
                                    </div>
                                </CardHeader>

                                <CardContent className="flex-1 flex flex-col">
                                    <div className="mb-6 flex-1">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Check className="text-primary flex-shrink-0" size={20}/>
                                            <span
                                                className="text-lg font-semibold text-foreground">{SignUpText.PERKS_TITLE}</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed pl-7">{type.perksDescription}</p>
                                    </div>
                                    {type.signupLink ? (
                                        <Button
                                            asChild
                                            className="w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90"
                                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                        >
                                            <Link href={type.signupLink} target="_blank">
                                                {SignUpText.REGISTER_NOW} <ExternalLink className="ml-2" size={16} />
                                            </Link>
                                        </Button>
                                    ) : (
                                        <>
                                            <Button
                                                onClick={() => setShowPaymentModal(true)}
                                                className="w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90"
                                            >
                                                {SignUpText.VIEW_PAYMENT_INSTRUCTIONS}
                                            </Button>
                                        </>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Payment modal rendered centered on screen */}
                    <PaymentModal
                        open={showPaymentModal}
                        onCloseAction={() => setShowPaymentModal(false)}
                        instructions={paymentInstructions}
                    />

                    <div className="mt-20 text-center">
                        <h2 className="text-3xl font-bold mb-6 text-balance">
                            {SignUpText.FEATURES_TITLE || "Why Join Us"}
                        </h2>
                        <ul className="max-w-3xl mx-auto text-left list-disc list-inside text-muted-foreground space-y-3">
                            {signUpPageContent.features.map((feature, index) => (
                                <li key={index} className="text-lg leading-relaxed">
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-sm text-muted-foreground mb-4">{SignUpText.HELP_TEXT}</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild variant="outline" className="h-11 bg-transparent">
                                <Link href="/faqs">{SignUpText.VIEW_FAQS}</Link>
                            </Button>
                            <Button asChild variant="outline" className="h-11 bg-transparent">
                                <Link href="/contact">{SignUpText.CONTACT_US}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
