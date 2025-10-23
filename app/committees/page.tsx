"use client"

import {useState} from "react"
import Link from "next/link"
import Image from "next/image"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Navigation} from "@/components/navigation"
import {Footer} from "@/components/footer"
import {ScrollToTop} from "@/components/scroll-to-top"
import {ArrowRight, Users} from "lucide-react"
import {committees} from "@/data"

export default function CommitteesPage() {
    const [expandedCommittee, setExpandedCommittee] = useState<string | null>(null)

    const toggleCommittee = (id: string) => {
        setExpandedCommittee(expandedCommittee === id ? null : id)
    }

    return (
        <div className="min-h-screen">
            <ScrollToTop/>
            <Navigation/>

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto animate-in fade-in duration-1000">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Committees</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                            Choose from six diverse committees, each tackling critical global issues
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {committees.map((committee) => {
                            const isExpanded = expandedCommittee === committee.id

                            return (
                                <div
                                    key={committee.id}
                                    className="cursor-pointer"
                                    onClick={() => toggleCommittee(committee.id)}
                                >
                                    <Card
                                        className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all h-full">
                                        <div className="w-full h-48 relative bg-muted">
                                            <Image
                                                src={committee.bannerImage || "/placeholder.svg"}
                                                alt={`${committee.name} Banner`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <CardHeader className="border-b border-border">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <CardTitle className="text-2xl">{committee.name}</CardTitle>
                                                        <ArrowRight
                                                            className={`text-primary transition-transform ${
                                                                isExpanded ? "rotate-90" : ""
                                                            }`}
                                                        />
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        <Badge variant="secondary">{committee.abbreviation}</Badge>
                                                        <Badge
                                                            variant="outline"
                                                            className={
                                                                committee.difficulty === "Beginner"
                                                                    ? "border-green-500 text-green-500"
                                                                    : committee.difficulty === "Intermediate"
                                                                        ? "border-yellow-500 text-yellow-500"
                                                                        : "border-red-500 text-red-500"
                                                            }
                                                        >
                                                            {committee.difficulty}
                                                        </Badge>
                                                        <Badge variant="outline" className="border-muted-foreground/50">
                                                            <Users size={12} className="mr-1"/>
                                                            {committee.committeeSize}
                                                        </Badge>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                                        {committee.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardHeader>

                                        {isExpanded && (
                                            <CardContent className="p-6 space-y-6">
                                                <div>
                                                    <h4 className="text-sm font-semibold text-foreground mb-2">About
                                                        This Committee</h4>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                                        {committee.detailedDescription}
                                                    </p>
                                                </div>

                                                <div>
                                                    <h4 className="text-sm font-semibold text-foreground mb-2">Topics
                                                        for Debate</h4>
                                                    <ul className="space-y-2">
                                                        {committee.topics.map((topic, index) => (
                                                            <li key={index}
                                                                className="text-sm text-muted-foreground flex items-start gap-2">
                                                                <span
                                                                    className="text-primary mt-1 font-bold">{index + 1}.</span>
                                                                <span>{topic}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="pt-4 border-t border-border">
                                                    <h4 className="text-sm font-semibold text-foreground mb-3">Committee
                                                        Leadership</h4>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                        <div className="flex items-center gap-3">
                                                            <Image
                                                                src={committee.chair.image || "/placeholder.svg"}
                                                                alt={committee.chair.name}
                                                                width={56}
                                                                height={56}
                                                                className="rounded-full object-cover"
                                                            />
                                                            <div>
                                                                <p className="text-sm font-medium text-foreground">{committee.chair.name}</p>
                                                                <p className="text-xs text-muted-foreground">Chair</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <Image
                                                                src={committee.viceChair.image || "/placeholder.svg"}
                                                                alt={committee.viceChair.name}
                                                                width={56}
                                                                height={56}
                                                                className="rounded-full object-cover"
                                                            />
                                                            <div>
                                                                <p className="text-sm font-medium text-foreground">{committee.viceChair.name}</p>
                                                                <p className="text-xs text-muted-foreground">Vice
                                                                    Chair</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                                                    <Button
                                                        asChild
                                                        variant="outline"
                                                        className="h-11 bg-transparent"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <a href={committee.backgroundGuidePdf} download>
                                                            <ArrowRight className="mr-2" size={16}/>
                                                            Download Guide
                                                        </a>
                                                    </Button>
                                                    <Button
                                                        asChild
                                                        className="h-11 bg-primary text-primary-foreground hover:bg-primary/90"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <Link href={committee.signupLink} target="_blank">
                                                            Apply Now <ArrowRight className="ml-2" size={16}/>
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        )}
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
