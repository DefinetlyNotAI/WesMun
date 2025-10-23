"use client"

import {useEffect, useState} from "react"
import {siteConfig} from "@/lib/data"

export function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState<string>("")
    const [status, setStatus] = useState<"countdown" | "started" | "ended">("countdown")

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime()
            const conferenceStart = new Date(siteConfig.event.conferenceStart).getTime()
            const conferenceEnd = new Date(siteConfig.event.conferenceEnd).getTime()

            if (now >= conferenceEnd) {
                setStatus("ended")
                setTimeLeft("WESMUN has ended")
                return
            }

            if (now >= conferenceStart) {
                setStatus("started")
                setTimeLeft("WESMUN has officially begun!")
                return
            }

            const distance = conferenceStart - now
            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            setStatus("countdown")
            setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`)
        }

        calculateTimeLeft()
        const interval = setInterval(calculateTimeLeft, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="text-center py-8 px-4">
            <div className="inline-block bg-card border border-primary/20 rounded-lg px-8 py-6">
                {status === "countdown" && (
                    <>
                        <p className="text-sm text-muted-foreground mb-2">Conference starts in</p>
                        <p className="text-3xl md:text-4xl font-bold text-primary font-mono">{timeLeft}</p>
                    </>
                )}
                {status === "started" && (
                    <p className="text-2xl md:text-3xl font-bold text-primary animate-pulse">{timeLeft}</p>
                )}
                {status === "ended" &&
                    <p className="text-2xl md:text-3xl font-bold text-muted-foreground">{timeLeft}</p>}
            </div>
        </div>
    )
}
