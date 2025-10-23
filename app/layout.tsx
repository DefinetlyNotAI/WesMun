import type React from "react"
import { Caramel, Great_Vibes, Hurricane, Playfair_Display, Tangerine } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Centralized font definitions
const FONTS = {
    PLAYFAIR: Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" }),
    PLAYFAIR_EXTRALIGHT: Playfair_Display({ weight: "400", subsets: ["latin"], variable: "--font-playfair-extralight" }),
    GREAT_VIBES: Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-great-vibes" }),
    CARAMEL: Caramel({ weight: "400", subsets: ["latin"], variable: "--font-caramel" }),
    HURRICANE: Hurricane({ weight: "400", subsets: ["latin"], variable: "--font-hurricane" }),
    TANGERINE: Tangerine({ weight: "400", subsets: ["latin"], variable: "--font-tangerine" }),
} as const

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const fontClasses = `${FONTS.PLAYFAIR.variable} ${FONTS.PLAYFAIR_EXTRALIGHT.variable} ${FONTS.GREAT_VIBES.variable} ${FONTS.CARAMEL.variable} ${FONTS.HURRICANE.variable} ${FONTS.TANGERINE.variable}`

    return (
        <html lang="en">
        <body className={`${fontClasses} font-sans antialiased`}>
        {children}
        <Analytics />
        </body>
        </html>
    )
}
