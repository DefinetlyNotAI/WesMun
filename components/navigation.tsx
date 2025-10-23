"use client"

import Link from "next/link"
import {useState} from "react"
import {Menu, X} from "lucide-react"
import {Button} from "@/components/ui/button"
import {navigationLinks, siteConfig} from "@/lib/data/meta"

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="text-2xl font-title text-gradient-primary whitespace-nowrap">
                        {siteConfig.name}
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navigationLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm text-foreground hover:text-primary transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            <Link href="/sign-up">Register Now</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground"
                            aria-label="Toggle menu">
                        {isOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>

                {isOpen && (
                    <div className="md:hidden py-4 border-t border-border">
                        <div className="flex flex-col gap-4">
                            {navigationLinks.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => {
                                        setIsOpen(false)
                                        window.scrollTo({top: 0, behavior: "smooth"})
                                    }}
                                    className="text-sm text-foreground hover:text-primary transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button
                                asChild
                                size="sm"
                                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                                onClick={() => {
                                    setIsOpen(false)
                                    window.scrollTo({top: 0, behavior: "smooth"})
                                }}
                            >
                                <Link href="/sign-up">Register Now</Link>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
