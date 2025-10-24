import type React from "react"
import {Analytics} from "@vercel/analytics/next"
import "./globals.css"

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <title>WESMUN 2026</title>
            <link rel="icon" href="/wesmun.svg"/>
        </head>
        <body className="font-sans antialiased">
        {children}
        <Analytics/>
        </body>
        </html>
    )
}
