"use client"

import {useEffect} from "react"

export function ScrollToTop() {
    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo({top: 0, behavior: "smooth"})
    }, [])

    return null
}
