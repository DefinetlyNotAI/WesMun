import type {Metadata} from "next";
import {Award, Globe, Users} from "lucide-react";
import {Offering} from "@/lib/types";


// Metadata
export const metadata: Metadata = {
    title: "WESMUN 2025 - Model United Nations Conference",
    description:
        "Join us for WESMUN 2025, a premier Model United Nations conference fostering diplomacy, debate, and global understanding.",
}

// Navigation Links
export const navigationLinks = [
    {name: "Home", href: "/"},
    {name: "Committees", href: "/committees"},
    {name: "Sign Up", href: "/sign-up"},
    {name: "FAQs", href: "/faqs"},
    {name: "Contact", href: "/contact"},
    {name: "Departments", href: "/departments"},
]

// Secretary General Letter
export const secretaryGeneralLetter = {
    title: "Letter from the Secretaries General",
    name: "Jane Doe & John Smith",
    position: "Secretaries General",
    image: "/placeholder.svg?height=400&width=1200",
    content: `Dear Delegates,

It is with great pleasure that we welcome you to WESMUN 2025. As Secretaries General, we are honored to invite you to join us for three days of rigorous debate, diplomatic negotiation, and global problem-solving.

This year's conference promises to be our most ambitious yet, bringing together the brightest minds from across the region to tackle the world's most pressing challenges. Whether you're a seasoned delegate or attending your first Model UN conference, WESMUN offers an unparalleled opportunity to develop your skills in public speaking, critical thinking, and international relations.

Our dedicated team has worked tirelessly to create an experience that will challenge you intellectually while fostering lasting friendships and memories. We encourage you to engage fully with the conference, step outside your comfort zone, and embrace the spirit of international cooperation that defines the United Nations.

We look forward to seeing you at WESMUN 2025.

Sincerely,
Jane Doe & John Smith
Secretaries General, WESMUN 2025`,
}

// Site Configuration (e.g. footer) and Main page
export const offerings: Offering[] = [
    {
        id: "diverse-committees",
        title: "Diverse Committees",
        description:
            "Choose from six specialized committees covering a wide range of global issues, from security to health to human rights.",
        icon: "users",
    },
    {
        id: "skill-development",
        title: "Skill Development",
        description:
            "Develop essential skills in public speaking, negotiation, research, and critical thinking that will benefit you throughout your academic and professional career.",
        icon: "trending-up",
    },
    {
        id: "networking",
        title: "Networking Opportunities",
        description:
            "Connect with like-minded students from across the region who share your passion for international relations and global affairs.",
        icon: "network",
    },
    {
        id: "comprehensive-support",
        title: "Comprehensive Support",
        description:
            "From detailed background guides to experienced chairs, we provide everything you need to succeed at your first or fiftieth conference.",
        icon: "life-buoy",
    },
    {
        id: "awards-recognition",
        title: "Awards & Recognition",
        description:
            "Outstanding delegates are recognized for their diplomacy, research, and contribution to committee debate.",
        icon: "award",
    },
    {
        id: "memorable-experience",
        title: "Memorable Experience",
        description:
            "Beyond the committee rooms, enjoy social events, keynote speakers, and activities that make WESMUN an unforgettable experience.",
        icon: "star",
    },
]

export const siteConfig = {
    name: "WESMUN",
    event: {
        date: "March 15-17, 2025",
        location: "Western University",
        theme: "Geopolitics, Networking Control and Transnational Threats",
        conferenceStart: "2026-12-01T09:00:00", // December 1st, 2026 at 9 AM
        conferenceEnd: "2026-12-04T17:00:00", // December 4th, 2026 at 5 PM (3 days after start)
    },
    contact: {
        email: "info@wesmun.org",
        phone: "+1 (555) 123-4567",
        address: "1151 Richmond St, London, ON N6A 3K7",
        socialMedia: {
            instagram: "https://instagram.com/wesmun",
            twitter: "https://twitter.com/wesmun",
            facebook: "https://facebook.com/wesmun",
            linkedin: "https://linkedin.com/company/wesmun",
            tiktok: "https://tiktok.com/@wesmun",
        },
    },
}

export const MainText = {
    title: `Welcome to ${siteConfig.name}`,
    theme: siteConfig.event.theme,
    description:
        "Join us for three days of rigorous debate, diplomatic negotiation, and global problem-solving at Western University's premier Model United Nations conference.",
    dateLocation: `${siteConfig.event.date} | ${siteConfig.event.location}`,
    buttons: [
        {text: "Register Now", href: "/sign-up", primary: true},
        {text: "View Committees", href: "/committees", primary: false},
    ],

    STATS: [
        {icon: Users, value: "500+", label: "Expected Delegates"},
        {icon: Globe, value: "6", label: "Diverse Committees"},
        {icon: Award, value: "3 Days", label: "Of Intense Debate"},
    ],

    SG_LETTER: {
        title: secretaryGeneralLetter.title,
        content: secretaryGeneralLetter.content.split("\n\n"),
        image: secretaryGeneralLetter.image || "/placeholder.svg",
        name: secretaryGeneralLetter.name,
        position: secretaryGeneralLetter.position,
    },

    OFFERINGS: offerings.map((off) => ({
        title: off.title,
        description: off.description,
    })),

    CTA: {
        title: "Ready to Join WESMUN 2025?",
        description:
            "Register now to secure your spot at one of the most prestigious Model UN conferences",
        button: {text: "Register Now", href: "/sign-up"},
    },
}
