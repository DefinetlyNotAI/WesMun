import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"
import { departments, DepartmentText } from "@/lib/data/departments"

export default function DepartmentsPage() {
    return (
        <div className="min-h-screen">
            <ScrollToTop />
            <Navigation />

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto animate-in fade-in duration-1000">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{DepartmentText.PAGE_TITLE}</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{DepartmentText.PAGE_SUBTITLE}</p>
                    </div>

                    <div className="space-y-12">
                        {departments.map((department) => (
                            <Card
                                key={department.id}
                                className="bg-card border-border overflow-hidden hover:border-primary/50 transition-colors"
                            >
                                {/* Department Banner */}
                                <div className="relative h-48 md:h-64 bg-muted">
                                    <Image
                                        src={department.bannerImage || DepartmentText.PLACEHOLDER_IMAGE}
                                        alt={`${department.name} team`}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{department.name}</h2>
                                        <p className="text-muted-foreground text-pretty max-w-3xl">{department.description}</p>
                                        {department.email && (
                                            <a
                                                href={`mailto:${department.email}`}
                                                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mt-2 break-all"
                                            >
                                                <Mail size={16} className="flex-shrink-0" />
                                                <span className="truncate">{department.email}</span>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Team Members */}
                                <CardContent className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {department.team.map((member, index) => (
                                            <div key={index} className="flex items-start gap-4">
                                                <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
                                                    <Image
                                                        src={member.image || DepartmentText.PLACEHOLDER_IMAGE}
                                                        alt={member.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-semibold text-foreground text-balance">{member.name}</h3>
                                                    <p className="text-sm text-primary mb-2">{member.position}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
