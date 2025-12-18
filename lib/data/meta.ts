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
    {name: "Committees", href: "/committees"},
    {name: "FAQs", href: "/faqs"},
    {name: "Contact", href: "/contact"},
    {name: "Departments", href: "/departments"},
]

// Secretary General Letter
const [firstSG, secondSG] = departments.find(d => d.id === "secretariat")!.team.slice(0, 2);
export const secretaryGeneralLetter = {
    title: "Letter from the Secretary Generals",
    name: `${firstSG.name} & ${secondSG.name}`,
    position: "Secretary General",
    image: "/img/dep/sg.webp",
    content: `Dear leaders of the future,

With admiration, unimaginable excitement, and thrills, we welcome you to WESMUN'26, which marks our 10th annual MUN. With a decade’s worth of experience and the careful analysis of past failures and triumphs, we assure you this MUN will be one of the most refined and polished you have ever come across. We simply cannot wait to meet you and watch your passion ignite and set the world ablaze.

Through crystal clear lenses, our vision for this conference remains unobstructed. The purpose of this conference is not only to serve us but, more importantly, all of you. This is a golden opportunity not only to educate yourself but also those around you, for everyone has something to learn. To think there’s no room for improvement is to think you’re perfect — and no one’s perfect.

During our conference, you will engage in meaningful dialogue exchanges, discussing real-world problems and situations, including geopolitics, corruption, crime, and much more. You will observe yourself applying critical thinking to identify issues, discover solutions, and express yourself in a confident and effective manner. These skills will be etched into your very being, sticking with you for the rest of your life, and it will not be long before you realise these are necessary skills to master.

We can't wait to see you at WESMUN 2026 and hope you leave with an unforgettable experience.`,
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
        date: "January 30th to February 1st, 2026",
        location: "Wesgreen International School",
        theme: "Geopolitics, Networking Control and Transnational Threats",
        conferenceStart: "2026-01-30T14:30:00", // January 30, 2026, 12:30 PM
        conferenceEnd: "2026-02-01T22:00:00",  // February 1, 2026, 10:00 PM
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
        {text: "View Committees", href: "/committees", primary: false},
    ],

    STATS: [
        {icon: Users, value: "500+", label: "Expected Delegates"},
        {icon: Globe, value: "15", label: "Diverse Committees"},
        {icon: Award, value: "3 Days", label: "Of Intense Debate"},
    ],

    SG_LETTER: {
        title: secretaryGeneralLetter.title,
        content: secretaryGeneralLetter.content.split("\n\n"),
        image: secretaryGeneralLetter.image,
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
