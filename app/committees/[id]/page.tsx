import CommitteeDetailPageClient from "./CommitteeDetailPageClient"
import { notFound } from "next/navigation"
import {committees} from "@/lib/data/committees"
import {Params} from "@/lib/types";

export function generateStaticParams() {
    return committees.map((committee) => ({ id: committee.id }))
}


// Server component to fetch committee data
export default function CommitteeDetailPage({ params }: Params) {
    const committee = committees.find((c) => c.id === params.id)

    if (!committee) {
        notFound()
    }

    return <CommitteeDetailPageClient committee={committee} />
}
