import Link from "next/link"
import {SiInstagram, SiTiktok} from "react-icons/si"
import {contactInfo} from "@/lib/data/contact"
import {navigationLinks, siteConfig} from "@/lib/data/meta";
import DeploymentInfo from "@/components/deployement-info";

export function Footer() {
    return (
        <footer className="bg-card border-t border-border">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="text-lg font-bold text-primary mb-4">{siteConfig.name}</div>
                        <p className="text-sm text-muted-foreground mb-4">{siteConfig.event.theme}</p>
                        <p className="text-sm text-muted-foreground">{siteConfig.event.date}</p>
                    </div>

                    <div>
                        <div className="text-sm font-semibold text-foreground mb-4">Quick Links</div>
                        <div className="flex flex-col gap-2">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="text-sm font-semibold text-foreground mb-4">Connect With Us</div>
                        <div className="flex gap-4 mb-4">
                            <a
                                href={contactInfo.socialMedia.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="Instagram"
                            >
                                <SiInstagram size={20}/>
                            </a>
                            <a
                                href={contactInfo.socialMedia.tiktok}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="TikTok"
                            >
                                <SiTiktok size={20}/>
                            </a>
                        </div>
                        <a
                            href={`mailto:${contactInfo.email}`}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                        >
                            {contactInfo.email}
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                    <p>
                        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                    </p>
                    <DeploymentInfo/>
                </div>
            </div>
        </footer>
    )
}
