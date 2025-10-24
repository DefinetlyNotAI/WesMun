import CommitteeDetailPageClient from "./CommitteeDetailPageClient"
import { notFound } from "next/navigation"
import { committees } from "@/lib/data/committees"

// Generate static paths for SSG
export function generateStaticParams() {
    return committees.map((committee) => ({ id: committee.id }))
}

// Server component
export default async function CommitteeDetailPage(props: any) {
    // Defensive resolution: params itself or its id may be a Promise/thenable (per Next generated types)
    let params = props?.params
    if (params && typeof (params as any).then === 'function') {
        params = await params
    }

    let id: any = params?.id ?? params
    if (id && typeof (id as any).then === 'function') {
        id = await id
    }

    // find committee safely
    const committee = (id == null) ? undefined : committees.find((c) => c.id === String(id))

    if (!committee) {
        notFound()
    }

    return <CommitteeDetailPageClient committee={committee} />
}
