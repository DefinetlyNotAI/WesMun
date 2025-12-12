"use client"

import Link from "next/link"
import Image from "next/image"
import {Card, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Navigation} from "@/components/navigation"
import {Footer} from "@/components/footer"
import {ScrollToTop} from "@/components/scroll-to-top"
import {ArrowRight, Users} from "lucide-react"
import {committees, CommitteeText} from "@/lib/data/committees"

export default function CommitteesPage() {
    return (
        <div className="min-h-screen">
            <ScrollToTop/>
            <Navigation/>

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto animate-in fade-in duration-1000">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{CommitteeText.PAGE_TITLE}</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                            {CommitteeText.PAGE_SUBTITLE}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {committees.map((committee) => (
                            <Link key={committee.id} href={`/committees/${committee.id}`}>
                                <Card
                                    className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all cursor-pointer h-full p-0">
                                    <div className="relative w-full h-auto sm:h-64 md:h-96 lg:h-[400px] bg-muted rounded-t-xl overflow-hidden">
                                        <Image
                                            src={committee.bannerImage || CommitteeText.PLACEHOLDER_IMAGE}
                                            alt={`${committee.name} Banner`}
                                            width={1200}
                                            height={300}
                                            className="block w-full h-auto object-contain sm:h-full rounded-t-xl"
                                        />
                                    </div>
                                    <CardHeader className="border-b border-border">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <CardTitle className="text-2xl">{committee.name}</CardTitle>
                                                    <ArrowRight className="text-primary"/>
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
                                                <p className="text-sm text-muted-foreground leading-relaxed">{committee.description}</p>
                                            </div>
                                        </div>
                                    </CardHeader>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
