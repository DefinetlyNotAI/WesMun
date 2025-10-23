import CommitteeDetailPageClient from "./CommitteeDetailPageClient"
import {notFound} from "next/navigation"
import {committees} from "@/data"

export function generateStaticParams() {
    return committees.map((committee) => ({
        id: committee.id,
    }))
}

// Server component to fetch data and generate static params
export default function CommitteeDetailPage({params}: { params: { id: string } }) {
    const committee = committees.find((c) => c.id === params.id)

    if (!committee) {
        notFound()
    }

    return <CommitteeDetailPageClient committee={committee}/>
}
