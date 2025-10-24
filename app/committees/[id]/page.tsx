import CommitteeDetailPageClient from "./CommitteeDetailPageClient"
import {notFound} from "next/navigation"
import {committees} from "@/lib/data/committees"
import {Params} from "@/lib/types"

// Generate static paths for SSG
export function generateStaticParams() {
    return committees.map((committee) => ({id: committee.id}))
}

// Server component
export default async function CommitteeDetailPage({params}: Params) {
    const resolvedParams = await params  // Ignore TypeScript warning for async params - Error: Route "/committees/[id]" used `params.id`. `params` should be awaited before using its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis
    const committee = committees.find((c) => c.id === resolvedParams.id)

    if (!committee) {
        notFound()
    }

    return <CommitteeDetailPageClient committee={committee}/>
}