import CommitteeDetailPageClient from "./CommitteeDetailPageClient"
import {notFound} from "next/navigation"
import {committees} from "@/lib/data/committees"
import type { Metadata } from 'next'
import type { Committee } from '@/lib/types'

// Generate static paths for SSG
export function generateStaticParams() {
    return committees.map((committee) => ({id: committee.id}))
}

// Provide a user-selected canonical for each dynamic committee page
export async function generateMetadata({ params }: any): Promise<Metadata> {
    const id = params?.id
    const committee: Committee | undefined = committees.find((c) => c.id === String(id))
    if (!committee) {
        return {}
    }

    return {
        alternates: {
            canonical: `https://wesmun.com/committees/${id}`,
        },
        title: committee.name || 'Committee',
        description: committee.description || undefined,
    }
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

    return <CommitteeDetailPageClient committee={committee}/>
}
