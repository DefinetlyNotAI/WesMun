import {Navigation} from "@/components/navigation"
import {Footer} from "@/components/footer"
import {ScrollToTop} from "@/components/scroll-to-top"
import {Card, CardContent} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {SiInstagram, SiTiktok} from "react-icons/si"
import {contactInfo} from "@/data"

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            <ScrollToTop/>
            <Navigation/>

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-4xl animate-in fade-in duration-1000">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get In Touch</h1>
                        <p className="text-lg text-muted-foreground text-pretty">
                            Have questions? We're here to help. Reach out to us through any of the channels below
                        </p>
                    </div>

                    <Card className="bg-card border-border">
                        <CardContent className="p-8 text-center">
                            <h3 className="text-xl font-semibold text-foreground mb-4">Connect on Social Media</h3>
                            <div className="flex gap-4 justify-center mb-6">
                                <Button asChild variant="outline" size="icon">
                                    <a
                                        href={contactInfo.socialMedia.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                    >
                                        <SiInstagram size={20}/>
                                    </a>
                                </Button>
                                <Button asChild variant="outline" size="icon">
                                    <a
                                        href={contactInfo.socialMedia.tiktok}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="TikTok"
                                    >
                                        <SiTiktok size={20}/>
                                    </a>
                                </Button>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Follow us for updates, announcements, and behind-the-scenes content
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
