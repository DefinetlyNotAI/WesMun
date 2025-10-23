import {Committee} from "@/lib/types";


// Committees
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

export const CommitteeDetailPage = {
    BACK_BUTTON: "Back to Committees",
    COMMITTEE_LEADERSHIP_TITLE: "Committee Leadership",
    CHAIR_LABEL: "Chair",
    VICE_CHAIR_LABEL: "Vice Chair",
    ABOUT_COMMITTEE_TITLE: "About This Committee",
    TOPICS_TITLE: "Topics for Debate",
    DOWNLOAD_BG_GUIDE: "Download Background Guide",
    APPLY_BUTTON: "Apply to This Committee",
    PLACEHOLDER_IMAGE: "/placeholder.svg",
} as const

export const CommitteeText = {
    PAGE_TITLE: "Our Committees",
    PAGE_SUBTITLE: "Choose from six diverse committees, each tackling critical global issues",
    ABOUT_TITLE: "About This Committee",
    TOPICS_TITLE: "Topics for Debate",
    LEADERSHIP_TITLE: "Committee Leadership",
    CHAIR_LABEL: "Chair",
    VICE_CHAIR_LABEL: "Vice Chair",
    DOWNLOAD_GUIDE: "Download Guide",
    APPLY_NOW: "Apply Now",
    PLACEHOLDER_IMAGE: "/placeholder.svg",
} as const
