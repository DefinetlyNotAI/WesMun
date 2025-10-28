import type {Metadata} from "next";
import {Award, Globe, Users} from "lucide-react";
import {Offering} from "@/lib/types";
import {departments} from "@/lib/data/departments";


// Metadata
export const metadata: Metadata = {
    title: "WESMUN 2026 - Model United Nations Conference",
    description:
        "Join us for WESMUN 2026, a premier Model United Nations conference fostering diplomacy, debate, and global understanding.",
}

// Navigation Links
export const navigationLinks = [
    {name: "Home", href: "/"},
    // TODO : Remove this link until committees are finalized
    {name: "Committees", href: "/committees"},
    {name: "Sign Up", href: "/sign-up"},
    // TODO : Remove this link until faqs page is ready
    {name: "FAQs", href: "/faqs"},
    {name: "Contact", href: "/contact"},
    // TODO : Remove this link until departments page is ready
    {name: "Departments", href: "/departments"},
]

// Secretary General Letter
const [firstSG, secondSG] = departments.find(d => d.id === "secretariat")!.team.slice(0, 2);
export const secretaryGeneralLetter = {
    title: "Letter from the Secretaries General",
    name: `${firstSG.name} & ${secondSG.name}`,
    position: "Secretaries General",
    image: "/placeholder.svg?height=400&width=1200",
    content: `Dear Delegates,

It is with great pleasure that we welcome you to WESMUN 2026. As Secretaries General, we are honored to invite you to join us for three days of rigorous debate, diplomatic negotiation, and global problem-solving.

This year's conference promises to be our most ambitious yet, bringing together the brightest minds from across the region to tackle the world's most pressing challenges. Whether you're a seasoned delegate or attending your first Model UN conference, WESMUN offers an unparalleled opportunity to develop your skills in public speaking, critical thinking, and international relations.

Our dedicated team has worked tirelessly to create an experience that will challenge you intellectually while fostering lasting friendships and memories. We encourage you to engage fully with the conference, step outside your comfort zone, and embrace the spirit of international cooperation that defines the United Nations.

We look forward to seeing you at WESMUN 2026.`,
}

// Site Configuration (e.g. footer) and Main page
export const offerings: Offering[] = [
    {
        id: "diverse-committees",
        title: "Diverse Committees",
        description:
            "Choose from many specialized committees covering a wide range of global issues, from Geopolitics, Networking Control to Transnational Threats.",
        icon: "Users",
    },
    {
        id: "skill-development",
        title: "Skill Development",
        description:
            "Develop essential skills in public speaking, negotiation, research, and critical thinking that will benefit you throughout your academic and professional career.",
        icon: "TrendingUp",
    },
    {
        id: "networking",
        title: "Networking Opportunities",
        description:
            "Connect with like-minded students from across the region who share your passion for international relations and global affairs.",
        icon: "Network",
    },
    {
        id: "comprehensive-support",
        title: "Comprehensive Support",
        description:
            "From detailed background guides to experienced chairs, we provide everything you need to succeed at your first or fiftieth conference.",
        icon: "LifeBuoy",
    },
    {
        id: "awards-recognition",
        title: "Awards & Recognition",
        description:
            "Outstanding delegates are recognized for their diplomacy, research, and contribution to committee debate.",
        icon: "Award",
    },
    {
        id: "memorable-experience",
        title: "Memorable Experience",
        description:
            "Beyond the committee rooms, enjoy social events, keynote speakers, and activities that make WESMUN an unforgettable experience.",
        icon: "Star",
    },
];

export const siteConfig = {
    name: "WESMUN",
    event: {
        date: "January 30th to February 1st, 2025",
        location: "Wesgreen International School",
        theme: "Geopolitics, Networking Control and Transnational Threats",
        conferenceStart: "2025-01-30T14:30:00", // January 30, 2025, 12:30 PM
        conferenceEnd: "2025-02-01T22:00:00",  // February 1, 2025, 10:00 PM
    },
    contact: {
        email: "secretariat@wesmun.com",
        address: "Wesgreen International School, Muwaileh, Sharjah",
        socialMedia: {
            instagram: "https://instagram.com/w.e.s.mun",
            tiktok: "https://tiktok.com/@w.e.s.mun",
        },
    },
    imageSVG: "/wesmun.svg",
}

export const MainText = {
    title: `Welcome To ${siteConfig.name}`,
    theme: siteConfig.event.theme,
    description:
        "Join us for three days of rigorous debate, diplomatic negotiation, and global problem-solving at Wesgreen's premier Model United Nations conference.",
    dateLocation: `${siteConfig.event.date} | ${siteConfig.event.location}`,
    buttons: [
        {text: "Register Now", href: "/sign-up", primary: true},
        // TODO : Remove this link until committees are finalized
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
        icon: off.icon,
    })),

    CTA: {
        title: "Ready to Join WESMUN 2026?",
        description:
            "Register now to secure your spot at one of the most prestigious Model UN conferences",
        button: {text: "Register Now", href: "/sign-up"},
    },
}
