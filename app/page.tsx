import Link from "next/link"
import Image from "next/image"
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Navigation} from "@/components/navigation"
import {Footer} from "@/components/footer"
import {CountdownTimer} from "@/components/countdown-timer"
import {ScrollToTop} from "@/components/scroll-to-top"
import {ArrowRight, Award, Globe, Users} from "lucide-react"
import {offerings, secretaryGeneralLetter, siteConfig} from "@/data"

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <ScrollToTop/>
            <Navigation/>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background"/>
                <div className="container mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center animate-in fade-in duration-1000">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-title mb-6 text-balance">
                            Welcome to <span className="text-gradient-primary">{siteConfig.name}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-primary font-semibold mb-4 text-balance">{siteConfig.event.theme}</p>
                        <p className="text-base md:text-lg text-muted-foreground mb-8 text-pretty">
                            Join us for three days of rigorous debate, diplomatic negotiation, and global
                            problem-solving at Western
                            University's premier Model United Nations conference.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg"
                                    className="bg-primary text-primary-foreground hover:bg-primary/90">
                                <Link href="/sign-up">
                                    Register Now <ArrowRight className="ml-2" size={20}/>
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/committees">View Committees</Link>
                            </Button>
                        </div>
                        <p className="mt-8 text-sm text-muted-foreground">
                            {siteConfig.event.date} | {siteConfig.event.location}
                        </p>
                    </div>
                </div>
            </section>

            {/* Countdown Timer */}
            <CountdownTimer/>

            {/* Stats Section */}
            <section className="py-16 px-4 bg-card">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-1000 delay-200">
                        <div className="text-center">
                            <div
                                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                                <Users className="text-primary" size={32}/>
                            </div>
                            <h3 className="text-3xl font-bold text-foreground mb-2">500+</h3>
                            <p className="text-muted-foreground">Expected Delegates</p>
                        </div>
                        <div className="text-center">
                            <div
                                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                                <Globe className="text-primary" size={32}/>
                            </div>
                            <h3 className="text-3xl font-bold text-foreground mb-2">6</h3>
                            <p className="text-muted-foreground">Diverse Committees</p>
                        </div>
                        <div className="text-center">
                            <div
                                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                                <Award className="text-primary" size={32}/>
                            </div>
                            <h3 className="text-3xl font-bold text-foreground mb-2">3 Days</h3>
                            <p className="text-muted-foreground">Of Intense Debate</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Secretary General Letter Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="max-w-5xl mx-auto animate-in fade-in duration-1000 delay-300">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{secretaryGeneralLetter.title}</h2>
                        </div>
                        <Card className="bg-card border-border overflow-hidden">
                            <div className="w-full h-64 md:h-80 relative bg-muted">
                                <Image
                                    src={secretaryGeneralLetter.image || "/placeholder.svg"}
                                    alt="Secretaries General"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardContent className="p-8 md:p-12">
                                <div className="prose prose-invert max-w-none">
                                    {secretaryGeneralLetter.content.split("\n\n").map((paragraph, index) => (
                                        <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                                <div className="mt-8 pt-6 border-t border-border">
                                    <p className="font-semibold text-foreground">{secretaryGeneralLetter.name}</p>
                                    <p className="text-sm text-muted-foreground">{secretaryGeneralLetter.position}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* What We Offer Section */}
            <section className="py-20 px-4 bg-card">
                <div className="container mx-auto">
                    <div className="text-center mb-12 animate-in fade-in duration-1000 delay-400">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">What We Offer</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                            WESMUN provides a comprehensive Model UN experience designed to develop your diplomatic
                            skills
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {offerings.map((offering, index) => (
                            <Card key={index}
                                  className="bg-background border-border hover:border-primary/50 transition-colors">
                                <CardContent className="p-6">
                                    <div
                                        className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                        <Users className="text-primary" size={24}/>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-foreground">{offering.title}</h3>
                                    <p className="text-muted-foreground text-sm">{offering.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center animate-in fade-in duration-1000 delay-500">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Join WESMUN 2025?</h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                        Register now to secure your spot at one of the most prestigious Model UN conferences
                    </p>
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link href="/sign-up">
                            Register Now <ArrowRight className="ml-2" size={20}/>
                        </Link>
                    </Button>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
