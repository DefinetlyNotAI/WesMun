import type {Metadata} from "next";

// Metadata
export const metadata: Metadata = {
    title: "WESMUN 2025 - Model United Nations Conference",
    description:
        "Join us for WESMUN 2025, a premier Model United Nations conference fostering diplomacy, debate, and global understanding.",
}

// Site Configuration
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

// Committees
export interface Committee {
    id: string
    name: string
    abbreviation: string
    description: string
    topics: string[]
    chair: {
        name: string
        image: string
    }
    viceChair: {
        name: string
        image: string
    }
    bannerImage: string
    signupLink: string
    detailedDescription: string
    backgroundGuidePdf: string
    committeeSize: string
    difficulty: "Beginner" | "Intermediate" | "Advanced"
}

export const committees: Committee[] = [
    {
        id: "unga",
        name: "United Nations General Assembly",
        abbreviation: "UNGA",
        description:
            "The General Assembly is the main deliberative, policymaking and representative organ of the UN. All 193 Member States are represented, making it a truly global forum.",
        detailedDescription:
            "The United Nations General Assembly (UNGA) is one of the six principal organs of the United Nations, serving as the main deliberative, policymaking and representative organ. Composed of all 193 Member States of the UN, it provides a unique forum for multilateral discussion of international issues. In this committee, delegates will engage in substantive debate on pressing global challenges while developing their diplomatic and negotiation skills.",
        topics: [
            "Addressing Climate Migration and Refugee Rights",
            "Promoting Sustainable Development Goals",
            "Strengthening International Cooperation",
        ],
        chair: {
            name: "Alex Johnson",
            image: "/placeholder.svg?height=300&width=300",
        },
        viceChair: {
            name: "Emma Williams",
            image: "/placeholder.svg?height=300&width=300",
        },
        bannerImage: "/placeholder.svg?height=400&width=1200",
        signupLink: "https://forms.gle/unga-signup",
        backgroundGuidePdf: "/guides/unga-background-guide.pdf",
        committeeSize: "40-50 delegates",
        difficulty: "Beginner",
    },
    {
        id: "unsc",
        name: "United Nations Security Council",
        abbreviation: "UNSC",
        description:
            "The Security Council has primary responsibility for the maintenance of international peace and security. It is the only UN body with the authority to issue binding resolutions.",
        detailedDescription:
            "The United Nations Security Council (UNSC) has primary responsibility for maintaining international peace and security. With the power to make binding decisions, investigate disputes, recommend methods of adjustment, and authorize the use of force, the Security Council is one of the most powerful bodies in international relations. This committee features fast-paced debate, crisis elements, and requires strong diplomatic skills.",
        topics: [
            "Maintaining Peace and Security in the Indo-Pacific Region",
            "Addressing Nuclear Proliferation",
            "Combating International Terrorism",
        ],
        chair: {
            name: "Sarah Chen",
            image: "/placeholder.svg?height=300&width=300",
        },
        viceChair: {
            name: "Marcus Lee",
            image: "/placeholder.svg?height=300&width=300",
        },
        bannerImage: "/placeholder.svg?height=400&width=1200",
        signupLink: "https://forms.gle/unsc-signup",
        backgroundGuidePdf: "/guides/unsc-background-guide.pdf",
        committeeSize: "15 delegates",
        difficulty: "Advanced",
    },
    {
        id: "ecosoc",
        name: "Economic and Social Council",
        abbreviation: "ECOSOC",
        description:
            "ECOSOC coordinates the economic and social work of the UN and its specialized agencies, promoting higher standards of living and solutions to economic and social problems.",
        detailedDescription:
            "The Economic and Social Council (ECOSOC) is at the heart of the United Nations system to advance the three dimensions of sustainable development – economic, social and environmental. It is the central platform for fostering debate and innovative thinking, forging consensus on ways forward, and coordinating efforts to achieve internationally agreed goals.",
        topics: [
            "Promoting Sustainable Development in Emerging Economies",
            "Addressing Global Inequality",
            "Fostering International Trade",
        ],
        chair: {
            name: "Michael Okonkwo",
            image: "/placeholder.svg?height=300&width=300",
        },
        viceChair: {
            name: "Aisha Patel",
            image: "/placeholder.svg?height=300&width=300",
        },
        bannerImage: "/placeholder.svg?height=400&width=1200",
        signupLink: "https://forms.gle/ecosoc-signup",
        backgroundGuidePdf: "/guides/ecosoc-background-guide.pdf",
        committeeSize: "30-35 delegates",
        difficulty: "Intermediate",
    },
    {
        id: "who",
        name: "World Health Organization",
        abbreviation: "WHO",
        description:
            "WHO is the directing and coordinating authority on international health within the United Nations system, responsible for providing leadership on global health matters.",
        detailedDescription:
            "The World Health Organization (WHO) is a specialized agency of the United Nations responsible for international public health. Delegates will tackle pressing global health challenges, from pandemic preparedness to antimicrobial resistance, while learning about the intersection of health policy, economics, and international cooperation.",
        topics: [
            "Combating Antimicrobial Resistance Globally",
            "Strengthening Global Health Security",
            "Addressing Mental Health Crisis",
        ],
        chair: {
            name: "Dr. Priya Sharma",
            image: "/placeholder.svg?height=300&width=300",
        },
        viceChair: {
            name: "Dr. James Wilson",
            image: "/placeholder.svg?height=300&width=300",
        },
        bannerImage: "/placeholder.svg?height=400&width=1200",
        signupLink: "https://forms.gle/who-signup",
        backgroundGuidePdf: "/guides/who-background-guide.pdf",
        committeeSize: "25-30 delegates",
        difficulty: "Intermediate",
    },
    {
        id: "unhrc",
        name: "United Nations Human Rights Council",
        abbreviation: "UNHRC",
        description:
            "The Human Rights Council is responsible for strengthening the promotion and protection of human rights around the globe and for addressing situations of human rights violations.",
        detailedDescription:
            "The United Nations Human Rights Council (UNHRC) is an inter-governmental body responsible for promoting and protecting human rights around the world. It addresses situations of human rights violations and makes recommendations on them. Delegates will engage with contemporary human rights challenges and develop solutions that balance national sovereignty with universal human rights principles.",
        topics: [
            "Protecting Digital Privacy and Freedom of Expression",
            "Combating Human Trafficking",
            "Ensuring Rights of Marginalized Communities",
        ],
        chair: {
            name: "Maria Rodriguez",
            image: "/placeholder.svg?height=300&width=300",
        },
        viceChair: {
            name: "Ahmed Hassan",
            image: "/placeholder.svg?height=300&width=300",
        },
        bannerImage: "/placeholder.svg?height=400&width=1200",
        signupLink: "https://forms.gle/unhrc-signup",
        backgroundGuidePdf: "/guides/unhrc-background-guide.pdf",
        committeeSize: "30-35 delegates",
        difficulty: "Intermediate",
    },
    {
        id: "disec",
        name: "Disarmament and International Security Committee",
        abbreviation: "DISEC",
        description:
            "DISEC deals with disarmament, global challenges and threats to peace that affect the international community, and seeks solutions to the challenges in the international security regime.",
        detailedDescription:
            "The Disarmament and International Security Committee (DISEC) is the First Committee of the UN General Assembly. It deals with disarmament, global challenges and threats to peace that affect the international community. Delegates will explore cutting-edge security issues including cyber warfare, autonomous weapons, and arms control in an increasingly complex global security environment.",
        topics: [
            "Regulating Autonomous Weapons Systems",
            "Preventing Cyber Warfare",
            "Controlling Small Arms Proliferation",
        ],
        chair: {
            name: "James Park",
            image: "/placeholder.svg?height=300&width=300",
        },
        viceChair: {
            name: "Sofia Ivanova",
            image: "/placeholder.svg?height=300&width=300",
        },
        bannerImage: "/placeholder.svg?height=400&width=1200",
        signupLink: "https://forms.gle/disec-signup",
        backgroundGuidePdf: "/guides/disec-background-guide.pdf",
        committeeSize: "30-35 delegates",
        difficulty: "Advanced",
    },
]

// Departments
export interface DepartmentMember {
    name: string
    position: string
    image: string
    email: string
}

export interface Department {
    id: string
    name: string
    description: string
    bannerImage: string
    team: DepartmentMember[]
}

export const departments: Department[] = [
    {
        id: "logistics",
        name: "Logistics",
        description:
            "Ensuring a seamless conference experience through meticulous planning and coordination of all operational aspects.",
        bannerImage: "/placeholder.svg?height=300&width=1200",
        team: [
            {
                name: "Emily Thompson",
                position: "Director of Logistics",
                image: "/placeholder.svg?height=200&width=200",
                email: "logistics@wesmun.org",
            },
            {
                name: "Michael Chen",
                position: "Assistant Director",
                image: "/placeholder.svg?height=200&width=200",
                email: "logistics.assistant@wesmun.org",
            },
            {
                name: "Sarah Johnson",
                position: "Logistics Coordinator",
                image: "/placeholder.svg?height=200&width=200",
                email: "logistics.coord@wesmun.org",
            },
        ],
    },
    {
        id: "finance",
        name: "Finance",
        description: "Managing financial operations and budgeting with fiscal responsibility and transparency.",
        bannerImage: "/placeholder.svg?height=300&width=1200",
        team: [
            {
                name: "David Kim",
                position: "Director of Finance",
                image: "/placeholder.svg?height=200&width=200",
                email: "finance@wesmun.org",
            },
            {
                name: "Jessica Lee",
                position: "Finance Manager",
                image: "/placeholder.svg?height=200&width=200",
                email: "finance.manager@wesmun.org",
            },
        ],
    },
    {
        id: "marketing",
        name: "Marketing & Communications",
        description:
            "Leading marketing efforts, managing social media, outreach, and promotional campaigns to grow WESMUN's presence.",
        bannerImage: "/placeholder.svg?height=300&width=1200",
        team: [
            {
                name: "Sophia Martinez",
                position: "Director of Marketing",
                image: "/placeholder.svg?height=200&width=200",
                email: "marketing@wesmun.org",
            },
            {
                name: "Alex Rivera",
                position: "Social Media Manager",
                image: "/placeholder.svg?height=200&width=200",
                email: "social@wesmun.org",
            },
            {
                name: "Emma Wilson",
                position: "Content Creator",
                image: "/placeholder.svg?height=200&width=200",
                email: "content@wesmun.org",
            },
        ],
    },
    {
        id: "technology",
        name: "Technology",
        description:
            "Overseeing all technical aspects of the conference, from registration systems to virtual platforms and IT support.",
        bannerImage: "/placeholder.svg?height=300&width=1200",
        team: [
            {
                name: "Ryan Patel",
                position: "Director of Technology",
                image: "/placeholder.svg?height=200&width=200",
                email: "tech@wesmun.org",
            },
            {
                name: "Kevin Zhang",
                position: "Systems Administrator",
                image: "/placeholder.svg?height=200&width=200",
                email: "sysadmin@wesmun.org",
            },
        ],
    },
    {
        id: "delegate-affairs",
        name: "Delegate Affairs",
        description:
            "Ensuring all delegates have an exceptional experience through comprehensive support and communication.",
        bannerImage: "/placeholder.svg?height=300&width=1200",
        team: [
            {
                name: "Olivia Brown",
                position: "Director of Delegate Affairs",
                image: "/placeholder.svg?height=200&width=200",
                email: "delegates@wesmun.org",
            },
            {
                name: "Marcus Taylor",
                position: "Delegate Services Coordinator",
                image: "/placeholder.svg?height=200&width=200",
                email: "delegate.services@wesmun.org",
            },
            {
                name: "Priya Sharma",
                position: "Accommodations Coordinator",
                image: "/placeholder.svg?height=200&width=200",
                email: "accommodations@wesmun.org",
            },
        ],
    },
    {
        id: "academic",
        name: "Academic Affairs",
        description: "Coordinating all academic aspects including committee topics, background guides, and chair training.",
        bannerImage: "/placeholder.svg?height=300&width=1200",
        team: [
            {
                name: "Thomas Anderson",
                position: "Director of Academic Affairs",
                image: "/placeholder.svg?height=200&width=200",
                email: "academic@wesmun.org",
            },
            {
                name: "Isabella Garcia",
                position: "Research Coordinator",
                image: "/placeholder.svg?height=200&width=200",
                email: "research@wesmun.org",
            },
            {
                name: "James Park",
                position: "Chair Training Coordinator",
                image: "/placeholder.svg?height=200&width=200",
                email: "training@wesmun.org",
            },
        ],
    },
]

// Deprecated Department Heads for backward compatibility
export interface DepartmentHead {
    id: string
    name: string
    position: string
    department: string
    image: string
    bio: string
    email: string
}

export const departmentHeads: DepartmentHead[] = [
    {
        id: "logistics",
        name: "Emily Thompson",
        position: "Director of Logistics",
        department: "Logistics",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Emily oversees all logistical operations for WESMUN, ensuring a seamless conference experience for all delegates and staff.",
        email: "logistics@wesmun.org",
    },
    {
        id: "finance",
        name: "David Kim",
        position: "Director of Finance",
        department: "Finance",
        image: "/placeholder.svg?height=300&width=300",
        bio: "David manages the financial operations and budgeting for WESMUN, ensuring fiscal responsibility and transparency.",
        email: "finance@wesmun.org",
    },
    {
        id: "marketing",
        name: "Sophia Martinez",
        position: "Director of Marketing",
        department: "Marketing & Communications",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Sophia leads our marketing efforts, managing social media, outreach, and promotional campaigns to grow WESMUN's presence.",
        email: "marketing@wesmun.org",
    },
    {
        id: "technology",
        name: "Ryan Patel",
        position: "Director of Technology",
        department: "Technology",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Ryan oversees all technical aspects of the conference, from registration systems to virtual platforms and IT support.",
        email: "tech@wesmun.org",
    },
    {
        id: "delegate-affairs",
        name: "Olivia Brown",
        position: "Director of Delegate Affairs",
        department: "Delegate Affairs",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Olivia ensures that all delegates have an exceptional experience, managing communications, accommodations, and delegate services.",
        email: "delegates@wesmun.org",
    },
    {
        id: "academic",
        name: "Thomas Anderson",
        position: "Director of Academic Affairs",
        department: "Academic Affairs",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Thomas coordinates all academic aspects of the conference, including committee topics, background guides, and chair training.",
        email: "academic@wesmun.org",
    },
]

// FAQs
export interface FAQ {
    id: string
    question: string
    answer: string
    category: "General" | "Registration" | "Committees" | "Logistics"
}

export const faqs: FAQ[] = [
    {
        id: "what-is-mun",
        question: "What is Model United Nations?",
        answer:
            "Model United Nations (MUN) is an educational simulation where students role-play as delegates to the United Nations and simulate UN committees. Participants research countries, investigate international issues, debate, deliberate, consult, and develop solutions to world problems.",
        category: "General",
    },
    {
        id: "experience-required",
        question: "Do I need prior MUN experience to attend?",
        answer:
            "No! WESMUN welcomes delegates of all experience levels. We offer committees ranging from beginner to advanced difficulty, and our team provides comprehensive background guides and support to help first-time delegates succeed.",
        category: "General",
    },
    {
        id: "registration-cost",
        question: "How much does registration cost?",
        answer:
            "Early bird registration is $45 per delegate (until February 1st), and regular registration is $60 per delegate. Group discounts are available for schools bringing 10+ delegates. Registration includes all conference materials, meals, and social events.",
        category: "Registration",
    },
    {
        id: "registration-deadline",
        question: "When is the registration deadline?",
        answer:
            "The final registration deadline is March 1st, 2025. However, we encourage early registration as committee spots are limited and fill up quickly. Early bird pricing ends February 1st, 2025.",
        category: "Registration",
    },
    {
        id: "committee-assignment",
        question: "How are committee assignments made?",
        answer:
            "Committee assignments are made based on your preferences indicated during registration, your experience level, and availability. We do our best to accommodate first preferences, but cannot guarantee specific committee placements.",
        category: "Committees",
    },
    {
        id: "country-assignment",
        question: "Can I choose which country I represent?",
        answer:
            "You can indicate country preferences during registration, and we'll do our best to accommodate them. Final country assignments will be sent out two weeks before the conference along with your background guide.",
        category: "Committees",
    },
    {
        id: "dress-code",
        question: "What is the dress code?",
        answer:
            "Western business attire is required for all committee sessions. This typically means suits or blazers with dress pants/skirts for delegates. Casual attire is acceptable for social events. Specific guidelines will be provided in your delegate handbook.",
        category: "Logistics",
    },
    {
        id: "accommodation",
        question: "Is accommodation provided?",
        answer:
            "WESMUN does not provide accommodation, but we have partnered with several local hotels offering discounted rates for conference attendees. A list of recommended hotels will be sent upon registration confirmation.",
        category: "Logistics",
    },
    {
        id: "meals-provided",
        question: "Are meals provided during the conference?",
        answer:
            "Yes! Your registration includes lunch on all three days of the conference, as well as snacks and refreshments during breaks. Dietary restrictions and preferences can be indicated during registration.",
        category: "Logistics",
    },
    {
        id: "awards",
        question: "Are there awards given at WESMUN?",
        answer:
            "Yes! We recognize outstanding delegates with awards including Best Delegate, Outstanding Delegate, and Honorable Mention in each committee. Awards are based on research, diplomacy, speaking ability, and overall contribution to committee debate.",
        category: "General",
    },
]

// What We Offer
export interface Offering {
    id: string
    title: string
    description: string
    icon: string
}

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

// Sign Up Page Content
export const signUpPageContent = {
    title: "Register for WESMUN 2025",
    description: "Join us for an unforgettable Model UN experience. Choose your registration type below.",
    earlyBirdDeadline: "2025-02-01T23:59:59", // February 1st, 2025 at 11:59 PM
    registrationTypes: [
        {
            id: "individual",
            name: "Individual Delegate",
            price: "$60",
            earlyBirdPrice: "$45",
            description: "Perfect for individual students looking to attend WESMUN",
            features: [
                "Access to all committee sessions",
                "Conference materials and background guides",
                "Lunch on all three days",
                "Social events and activities",
                "Certificate of participation",
                "Eligibility for awards",
            ],
            signupLink: "https://forms.gle/individual-delegate-signup",
        },
        {
            id: "school-group",
            name: "School Group (10+ delegates)",
            price: "$50 per delegate",
            earlyBirdPrice: "$40 per delegate",
            description: "Discounted rate for schools bringing 10 or more delegates",
            features: [
                "All individual delegate benefits",
                "Group discount pricing",
                "Dedicated faculty advisor support",
                "Priority committee placement",
                "Group photo opportunity",
                "School recognition at ceremonies",
            ],
            signupLink: "https://forms.gle/school-group-signup",
        },
    ],
    importantDates: [
        {date: "February 1, 2025", event: "Early Bird Registration Deadline"},
        {date: "March 1, 2025", event: "Final Registration Deadline"},
        {date: "March 10, 2025", event: "Country Assignments Released"},
        {date: "March 15-17, 2025", event: "WESMUN 2025 Conference"},
    ],
}

// Export all data as a single object for convenience
export const wesmunData = {
    siteConfig,
    navigationLinks,
    secretaryGeneralLetter,
    committees,
    departmentHeads,
    faqs,
    signUpPageContent,
    offerings,
    departments,
}

export const contactInfo = siteConfig.contact
export default wesmunData
