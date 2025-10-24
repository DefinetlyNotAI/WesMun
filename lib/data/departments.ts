import {Department} from "@/lib/types";

// Departments
export const departments: Department[] = [
    {
        id: "secretariat",
        name: "Secretariat",
        description:
            "Overseeing overall conference operations, including executive decision-making, strategic planning, and coordination between departments.",
        bannerImage: "/placeholder.svg?height=300&width=1200",
        email: "secretariat@wesmun.com",
        team: [
            {name: "Hatim Saeed", position: "Secretary General (SG)", image: "/placeholder.svg?height=200&width=200"},
            {name: "Mishal Irfan", position: "Secretary General (SG)", image: "/placeholder.svg?height=200&width=200"},
            {
                name: "Arsalan Ali",
                position: "Deputy Secretary General (DSG)",
                image: "/placeholder.svg?height=200&width=200"
            },
            {
                name: "Joan Qais",
                position: "Deputy Secretary General (DSG)",
                image: "/placeholder.svg?height=200&width=200"
            },
        ],
    },
    {
        id: "it",
        name: "IT",
        description:
            "Overseeing all technical infrastructure and support, ensuring smooth digital operations throughout the conference.",
        bannerImage: "/placeholder.svg?height=300&width=1200",
        email: "it@wesmun.com",
        team: [
            {name: "Shahm Najeeb", position: "Head Director of IT", image: "/placeholder.svg?height=200&width=200"},
            {name: "Zayed Munir", position: "Assistant Director of IT", image: "/placeholder.svg?height=200&width=200"},
        ],
    },
    {
        id: "logistics",
        name: "Logistics",
        description:
            "Ensuring a seamless conference experience through meticulous planning and coordination of all operational aspects.",
        bannerImage: "/placeholder.svg?height=300&width=1200",
        email: "logistics@wesmun.com",
        team: [
            {
                name: "Issa Al Amoody",
                position: "Head Director of Logistics",
                image: "/placeholder.svg?height=200&width=200"
            },
            {
                name: "Dania Suliman Osman",
                position: "Head Director of Logistics",
                image: "/placeholder.svg?height=200&width=200"
            },
            {
                name: "Harib Abdalla Yousif",
                position: "Assistant Director of Logistics",
                image: "/placeholder.svg?height=200&width=200"
            },
            {
                name: "Hamdan Rashid",
                position: "Assistant Director of Logistics",
                image: "/placeholder.svg?height=200&width=200"
            },
            {
                name: "Zain Al Barbawi",
                position: "Assistant Director of Logistics",
                image: "/placeholder.svg?height=200&width=200"
            },
        ],
    },
    {
        id: "security",
        name: "Security",
        description:
            "Maintaining safety and security for all participants, venues, and events throughout the conference.",
        bannerImage: "/placeholder.svg?height=300&width=1200",
        team: [
            {
                name: "Ahmed Abdalla",
                position: "Head Director of Security",
                image: "/placeholder.svg?height=200&width=200"
            },
            {name: "Haya Emad", position: "Head Director of Security", image: "/placeholder.svg?height=200&width=200"},
            {
                name: "Abdullah Mennad",
                position: "Head Director of Security",
                image: "/placeholder.svg?height=200&width=200"
            },
            {
                name: "Dana Ali",
                position: "Assistant Director of Security",
                image: "/placeholder.svg?height=200&width=200"
            },
            {
                name: "Dalia Momen",
                position: "Assistant Director of Security",
                image: "/placeholder.svg?height=200&width=200"
            },
        ],
    },
    {
        id: "chief-of-staff",
        name: "Chief of Staff",
        description:
            "Supporting executive operations, coordinating between departments, and ensuring strategic goals are implemented.",
        bannerImage: "/placeholder.svg?height=300&width=1200",
        email: "chiefofstaff@wesmun.com",
        team: [
            {name: "Karma Abdalrahman", position: "Chief of Staff", image: "/placeholder.svg?height=200&width=200"},
            {name: "Joan Juma Alzaghol", position: "Chief of Staff", image: "/placeholder.svg?height=200&width=200"},
            {name: "Lara Elgharably", position: "Chief of Staff", image: "/placeholder.svg?height=200&width=200"},
            {name: "Hannah Althea", position: "Chief of Staff", image: "/placeholder.svg?height=200&width=200"},
            {name: "Hamza Mohammed", position: "Chief of Staff", image: "/placeholder.svg?height=200&width=200"},
        ],
    },
    {
        id: "hospitality",
        name: "Hospitality",
        description:
            "Providing welcoming, comfortable, and organized environments for all delegates and guests during the conference.",
        bannerImage: "/placeholder.svg?height=300&width=1200",
        email: "hospitality@wesmun.com",
        team: [
            {
                name: "Shafana Shahriar",
                position: "Director of Hospitality",
                image: "/placeholder.svg?height=200&width=200"
            },
            {name: "Lina Hayder", position: "Director of Hospitality", image: "/placeholder.svg?height=200&width=200"},
            {
                name: "Monzir Mohamed Adam Sabiel",
                position: "Director of Hospitality",
                image: "/placeholder.svg?height=200&width=200"
            },
            {name: "Ali Ehsan", position: "Director of Hospitality", image: "/placeholder.svg?height=200&width=200"},
            {
                name: "Samia Tarique",
                position: "Director of Hospitality",
                image: "/placeholder.svg?height=200&width=200"
            },
        ],
    },
    {
        id: "media",
        name: "Media",
        description:
            "Managing conference media coverage, communications, and content creation for internal and external audiences.",
        bannerImage: "/placeholder.svg?height=300&width=1200",
        email: "media@wesmun.com",
        team: [
            {name: "Layla Elewa", position: "Director of Media", image: "/placeholder.svg?height=200&width=200"},
            {name: "Aon Alaa Thunebat", position: "Director of Media", image: "/placeholder.svg?height=200&width=200"},
            {name: "Lana Doghmosh", position: "Director of Media", image: "/placeholder.svg?height=200&width=200"},
        ],
    },
    {
        id: "finance",
        name: "Finance",
        description: "Managing financial operations and budgeting with fiscal responsibility and transparency.",
        bannerImage: "/placeholder.svg?height=300&width=1200",
        email: "finance@wesmun.com",
        team: [
            {name: "Arham Khan", position: "Director of Finance", image: "/placeholder.svg?height=200&width=200"},
            {name: "Mariya Taiyeb", position: "Director of Finance", image: "/placeholder.svg?height=200&width=200"},
        ],
    },
    {
        id: "public-relations",
        name: "Public Relations",
        description: "Handling outreach, communications, and representation of WESMUN externally.",
        bannerImage: "/placeholder.svg?height=300&width=1200",
        email: "pr@wesmun.com",
        team: [
            {
                name: "Ahmad Kabir",
                position: "Director of Public Relations",
                image: "/placeholder.svg?height=200&width=200"
            },
            {
                name: "Soha Shamsher",
                position: "Director of Public Relations",
                image: "/placeholder.svg?height=200&width=200"
            },
        ],
    },
]

export const DepartmentText = {
    PAGE_TITLE: "Our Departments",
    PAGE_SUBTITLE: "Meet the dedicated teams leading WESMUN 2026 to excellence",
    PLACEHOLDER_IMAGE: "/placeholder.svg",
} as const
