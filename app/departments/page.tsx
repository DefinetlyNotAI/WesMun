import Image from "next/image";
import {Navigation} from "@/components/navigation";
import {Footer} from "@/components/footer";
import {ScrollToTop} from "@/components/scroll-to-top";
import {Card, CardContent} from "@/components/ui/card";
import {Mail} from "lucide-react";
import {departments, DepartmentText} from "@/lib/data/departments";

export default function DepartmentsPage() {
    return (
        <div className="min-h-screen">
            <ScrollToTop/>
            <Navigation/>

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto animate-in fade-in duration-1000">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{DepartmentText.PAGE_TITLE}</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{DepartmentText.PAGE_SUBTITLE}</p>
                    </div>

                    <div className="space-y-12">
                        {departments.map((department) => (
                            <DepartmentCard key={department.id} department={department}/>
                        ))}
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
}

function DepartmentCard({department}: { department: typeof departments[number] }) {
    return (
        <Card className="bg-card border-border overflow-hidden hover:border-primary/50 transition-colors p-0">
            {/* Banner Image */}
            <div className="relative w-full rounded-t-xl overflow-hidden">
                <Image
                    src={department.bannerImage || DepartmentText.PLACEHOLDER_IMAGE}
                    alt={`${department.name} team`}
                    width={1280}
                    height={720}
                    className="block w-full h-auto object-contain max-h-[60vh] md:max-h-[50vh] rounded-t-xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 1280px, 1280px"
                    priority={false}
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent"/>
                <h2 className="absolute bottom-4 left-4 text-2xl md:text-4xl font-bold text-foreground">
                    {department.name}
                </h2>
            </div>

            {/* Description and Email BELOW the image */}
            {(department.description || department.email) && (
                <div className="px-6 py-4">
                    {department.description && (
                        <p className="text-sm md:text-pretty text-foreground mb-2">
                            {department.description}
                        </p>
                    )}
                    {department.email && (
                        <a
                            href={`mailto:${department.email}`}
                            className="inline-flex items-center gap-1.5 text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Mail size={16} className="shrink-0"/>
                            <span className="truncate">{department.email}</span>
                        </a>
                    )}
                </div>
            )}

            {/* Team Members */}
            <CardContent className="p-6">
                <div className={`grid grid-cols-1 gap-6 ${
                    department.team.length === 4 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'
                }`}>
                    {department.team.map((member, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-foreground text-balance">{member.name}</h3>
                                <p className="text-sm text-primary mb-2">{member.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
