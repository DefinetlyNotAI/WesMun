import type React from "react"
import { Caramel, Great_Vibes, Hurricane, Playfair_Display, Tangerine } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const PLAYFAIR = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const PLAYFAIR_EXTRALIGHT = Playfair_Display({ weight: "400", subsets: ["latin"], variable: "--font-playfair-extralight" })
const GREAT_VIBES = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-great-vibes" })
const CARAMEL = Caramel({ weight: "400", subsets: ["latin"], variable: "--font-caramel" })
const HURRICANE = Hurricane({ weight: "400", subsets: ["latin"], variable: "--font-hurricane" })
const TANGERINE = Tangerine({ weight: "400", subsets: ["latin"], variable: "--font-tangerine" })

const FONTS = {
    PLAYFAIR: PLAYFAIR,
    PLAYFAIR_EXTRALIGHT: PLAYFAIR_EXTRALIGHT,
    GREAT_VIBES: GREAT_VIBES,
    CARAMEL: CARAMEL,
    HURRICANE: HURRICANE,
    TANGERINE: TANGERINE,
} as const

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const fontClasses = `${FONTS.PLAYFAIR.variable} ${FONTS.PLAYFAIR_EXTRALIGHT.variable} ${FONTS.GREAT_VIBES.variable} ${FONTS.CARAMEL.variable} ${FONTS.HURRICANE.variable} ${FONTS.TANGERINE.variable}`

    return (
        <html lang="en">
        <head>
            <title>WESMUN 2026</title></head>
        <body className={`${fontClasses} font-sans antialiased`}>
        {children}
        <Analytics />
        </body>
        </html>
    )
}
