"use client"

import Link from "next/link"
import Image from "next/image"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Navigation} from "@/components/navigation"
import {Footer} from "@/components/footer"
import {ScrollToTop} from "@/components/scroll-to-top"
import {ArrowLeft, Download, ExternalLink, Users} from "lucide-react"
import {CommitteeDetailPage} from "@/lib/data/committees";
import {CommitteeDetailPageClientProps} from "@/lib/types";

export default function CommitteeDetailPageClient({committee}: CommitteeDetailPageClientProps) {
    return (
        <div className="min-h-screen">
            <ScrollToTop/>
            <Navigation/>

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-5xl animate-in fade-in duration-1000">
                    {/* Back Button */}
                    <Link
                        href="/committees"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
                        onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                    >
                        <ArrowLeft className="mr-2" size={16}/>
                        {CommitteeDetailPage.BACK_BUTTON}
                    </Link>

                    {/* Banner image */}
                    <div className="w-full h-64 md:h-80 relative bg-muted rounded-lg overflow-hidden mb-8">
                        <Image
                            src={committee.bannerImage || CommitteeDetailPage.PLACEHOLDER_IMAGE}
                            alt={`${committee.name} Banner`}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Committee Header */}
                    <div className="mb-8">
                        <div className="flex flex-wrap gap-3 mb-4">
                            <Badge variant="secondary" className="text-base px-4 py-1">
                                {committee.abbreviation}
                            </Badge>
                            <Badge
                                variant="outline"
                                className={`text-base px-4 py-1 ${
                                    committee.difficulty === "Beginner"
                                        ? "border-green-500 text-green-500"
                                        : committee.difficulty === "Intermediate"
                                            ? "border-yellow-500 text-yellow-500"
                                            : "border-red-500 text-red-500"
                                }`}
                            >
                                {committee.difficulty}
                            </Badge>
                            <Badge variant="outline" className="text-base px-4 py-1 border-muted-foreground/50">
                                <Users size={14} className="mr-2"/>
                                {committee.committeeSize}
                            </Badge>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{committee.name}</h1>
                        <p className="text-lg text-muted-foreground text-pretty">{committee.description}</p>
                    </div>

                    {/* Leadership section */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>{CommitteeDetailPage.COMMITTEE_LEADERSHIP_TITLE}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={committee.chair.image || CommitteeDetailPage.PLACEHOLDER_IMAGE}
                                        alt={committee.chair.name}
                                        width={80}
                                        height={80}
                                        className="rounded-full object-cover border-2 border-primary"
                                    />
                                    <div>
                                        <p className="text-lg font-semibold text-foreground">{committee.chair.name}</p>
                                        <p className="text-sm text-muted-foreground">{CommitteeDetailPage.CHAIR_LABEL}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={committee.viceChair.image || CommitteeDetailPage.PLACEHOLDER_IMAGE}
                                        alt={committee.viceChair.name}
                                        width={80}
                                        height={80}
                                        className="rounded-full object-cover border-2 border-primary"
                                    />
                                    <div>
                                        <p className="text-lg font-semibold text-foreground">{committee.viceChair.name}</p>
                                        <p className="text-sm text-muted-foreground">{CommitteeDetailPage.VICE_CHAIR_LABEL}</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* About Section */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>{CommitteeDetailPage.ABOUT_COMMITTEE_TITLE}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">{committee.detailedDescription}</p>
                        </CardContent>
                    </Card>

                    {/* Topics Section */}
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>{CommitteeDetailPage.TOPICS_TITLE}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {committee.topics.map((topic, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-primary font-bold text-lg mt-0.5">{index + 1}.</span>
                                        <span className="text-muted-foreground leading-relaxed">{topic}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Button asChild variant="outline" className="h-12 text-base bg-transparent">
                            <a href={committee.backgroundGuidePdf} download>
                                <Download className="mr-2" size={18}/>
                                {CommitteeDetailPage.DOWNLOAD_BG_GUIDE}
                            </a>
                        </Button>
                        <Button
                            asChild
                            className="h-12 text-base bg-primary text-primary-foreground hover:bg-primary/90"
                            onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                        >
                            <Link href={committee.signupLink} target="_blank">
                                {CommitteeDetailPage.APPLY_BUTTON}
                                <ExternalLink className="ml-2" size={18}/>
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
