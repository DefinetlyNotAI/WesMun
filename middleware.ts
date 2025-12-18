import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'

export function middleware(req: NextRequest) {
    const host = req.headers.get('host') || ''
    const proto = req.headers.get('x-forwarded-proto') || req.nextUrl.protocol || ''

    // Only enforce HTTPS at the application level. Do not rewrite or force hostname — Vercel handles www redirects.
    const wantsProto = 'https'

    const isInsecure = proto && proto !== wantsProto && !host.includes('localhost')

    if (isInsecure) {
        const url = req.nextUrl.clone()
        url.protocol = wantsProto
        return NextResponse.redirect(url, 301)
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/:path*',
}
