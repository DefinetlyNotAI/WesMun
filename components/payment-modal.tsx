"use client"

import React, {useEffect, useRef, useState} from "react"
import {createPortal} from "react-dom"

type PaymentInstructions = Record<string, string[]>

type Props = {
    open: boolean
    onCloseAction: () => void
    instructions: PaymentInstructions
}

export default function PaymentModal({open, onCloseAction, instructions}: Props) {
    const [mounted, setMounted] = useState(false)
    const modalRoot = useRef<HTMLElement | null>(null)

    useEffect(() => {
        if (!modalRoot.current) {
            const div = document.createElement("div")
            document.body.appendChild(div)
            modalRoot.current = div
        }
        setMounted(true)
        return () => {
            if (modalRoot.current) {
                document.body.removeChild(modalRoot.current)
                modalRoot.current = null
            }
        }
    }, [])

    // Close on Esc
    useEffect(() => {
        if (!open) return

        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") onCloseAction()
        }

        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [open, onCloseAction])

    // Prevent background scroll
    useEffect(() => {
        if (open) document.body.style.overflow = "hidden"
        else document.body.style.overflow = ""
    }, [open])

    if (!mounted || !modalRoot.current) return null

    return createPortal(
        <>
            {/* Overlay */}
            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 9999,
                    backgroundColor: "rgba(0,0,0,0.4)",
                    backdropFilter: "blur(4px)",
                    transition: "opacity 200ms",
                    opacity: open ? 1 : 0,
                    pointerEvents: open ? "auto" : "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                onClick={onCloseAction}
            >
                {/* Modal */}
                <div
                    style={{
                        maxWidth: "min(92vw, 600px)",
                        width: "100%",
                        zIndex: 10000,
                        transition: "opacity 200ms, transform 200ms",
                        transform: open ? "translateY(0) scale(1)" : "translateY(-20px) scale(0.95)",
                        opacity: open ? 1 : 0,
                        pointerEvents: open ? "auto" : "none",
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div
                        className="rounded-lg shadow-2xl ring-1 overflow-hidden"
                        style={{
                            backgroundColor: "#000000",
                            color: "#e0aa3e",
                            borderColor: "#e0aa3e",
                        }}
                    >
                        <div className="p-4 sm:p-6 max-h-[70vh] overflow-y-auto">
                            <div className="flex items-start justify-between">
                                <h2 className="text-lg font-semibold" style={{color: "#e0aa3e"}}>
                                    Payment Instructions
                                </h2>
                                <button
                                    onClick={onCloseAction}
                                    className="ml-4 transition-colors"
                                    style={{color: "#e0aa3e"}}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = "#f0d28a")}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = "#e0aa3e")}
                                    aria-label="Close payment instructions"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="mt-4 text-sm space-y-4">
                                {Object.entries(instructions).map(([key, steps]) => (
                                    <div key={key}>
                                        <h3 className="font-medium mb-2 capitalize" style={{color: "#e0aa3e"}}>
                                            {key}
                                        </h3>
                                        <ol className="list-decimal list-inside space-y-1" style={{color: "#d29a33"}}>
                                            {steps.map((step, i) => (
                                                <li key={i} className="leading-relaxed">
                                                    {step.split(/(\{\{.*?}})/g).map((part, pi) => {
                                                        const match = part.match(/\{\{(.*?)}}/)
                                                        if (match) {
                                                            const email = match[1]
                                                            return (
                                                                <a
                                                                    key={pi}
                                                                    href={`mailto:${email}`}
                                                                    className="underline transition-colors"
                                                                    style={{color: "#e0aa3e"}}
                                                                    onMouseEnter={(e) => (e.currentTarget.style.color = "#f0d28a")}
                                                                    onMouseLeave={(e) => (e.currentTarget.style.color = "#e0aa3e")}
                                                                >
                                                                    {email}
                                                                </a>
                                                            )
                                                        }
                                                        return part
                                                    })}
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex justify-end">
                                <button
                                    onClick={onCloseAction}
                                    className="px-4 py-2 rounded-md text-sm font-medium transition-colors"
                                    style={{
                                        backgroundColor: "#e0aa3e",
                                        color: "#000000",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = "#f0d28a"
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = "#e0aa3e"
                                    }}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        modalRoot.current
    )
}
