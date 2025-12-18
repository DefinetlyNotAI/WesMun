import type React from "react"
import type { Metadata } from 'next'
import {Analytics} from "@vercel/analytics/next"
import "./globals.css"

// Provide a metadata base so Next's metadata API (and any generated URLs) use the canonical host
export const metadata: Metadata = {
    metadataBase: new URL('https://www.wesmun.com'),
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <title>WESMUN 2026</title>
            <link rel="icon" href="/wesmun.svg"/>
            {/* Explicit canonical for the site root */}
            <link rel="canonical" href="https://www.wesmun.com/" />
        </head>
        <body className="font-sans antialiased">
        {children}
        <Analytics/>
        </body>
        </html>
    )
}
