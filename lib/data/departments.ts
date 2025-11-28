import {Department} from "@/lib/types";

// Departments
export const departments: Department[] = [
    {
        id: "secretariat",
        name: "Secretariat",
        description:
            "Overseeing overall conference operations, including executive decision-making, strategic planning, and coordination between departments.",
        bannerImage: "/img/dep/sg-group.webp",
        email: "secretariat@wesmun.com",
        team: [
            {name: "Mishal Irfan", position: "Secretary General"},
            {name: "Hatim Saeed", position: "Secretary General"},
            {
                name: "Joan Qais",
                position: "Deputy Secretary General",
            },
            {
                name: "Arsalan Ali",
                position: "Deputy Secretary General",
            },
        ],
    },
    {
        id: "it",
        name: "IT",
        description:
            "Overseeing all technical infrastructure and support, ensuring smooth digital operations throughout the conference.",
        bannerImage: "/img/dep/it.webp",
        email: "it@wesmun.com",
        team: [
            {name: "Shahm Najeeb", position: "Head Director of IT"},
        ],
    },
    {
        id: "logistics",
        name: "Logistics",
        description:
            "Ensuring a seamless conference experience through meticulous planning and coordination of all operational aspects.",
        bannerImage: "/img/dep/logistics.webp",
        email: "logistics@wesmun.com",
        team: [
            {
                name: "Issa Al Amoody",
                position: "Head Director of Logistics",
            },
            {
                name: "Dania Suliman Osman",
                position: "Head Director of Logistics",
            },
            {
                name: "Harib Abdalla Yousif",
                position: "Assistant Director of Logistics",
            },
            {
                name: "Hamdan Rashid",
                position: "Assistant Director of Logistics",
            },
            {
                name: "Zain Al Barbawi",
                position: "Assistant Director of Logistics",
            },
        ],
    },
    {
        id: "security",
        name: "Security",
        description:
            "Maintaining safety and security for all participants, venues, and events throughout the conference.",
        bannerImage: "/img/dep/security.webp",
        email: "security@wesmun.com",
        team: [
            {
                name: "Ahmed Abdalla",
                position: "Head Director of Security",
            },
            {name: "Haya Emad", position: "Head Director of Security"},
            {
                name: "Abdullah Mennad",
                position: "Head Director of Security",
            },
            {
                name: "Dana Ali",
                position: "Assistant Director of Security",
            },
            {
                name: "Dalia Momen",
                position: "Assistant Director of Security",
            },
        ],
    },
    {
        id: "chief-of-staff",
        name: "Chief of Staff",
        description:
            "Supporting executive operations, coordinating between departments, and ensuring strategic goals are implemented.",
        bannerImage: "/img/dep/cos.webp",
        email: "chiefofstaff@wesmun.com",
        team: [
            {name: "Karma Abdalrahman", position: "Chief of Staff"},
            {name: "Joan Juma Alzaghol", position: "Chief of Staff"},
            {name: "Lara Elgharably", position: "Chief of Staff"},
            {name: "Hannah Althea", position: "Chief of Staff"},
            {name: "Hamza Mohammed", position: "Chief of Staff"},
        ],
    },
    {
        id: "hospitality",
        name: "Hospitality",
        description:
            "Providing welcoming, comfortable, and organized environments for all delegates and guests during the conference.",
        bannerImage: "/img/dep/hospitality.webp",
        email: "hospitality@wesmun.com",
        team: [
            {
                name: "Shafana Shahriar",
                position: "Director of Hospitality",
            },
            {name: "Lina Hayder", position: "Director of Hospitality"},
            {
                name: "Monzir Mohamed Adam Sabiel",
                position: "Director of Hospitality",
            },
            {name: "Ali Ehsan", position: "Director of Hospitality"},
            {
                name: "Samia Tarique",
                position: "Director of Hospitality",
            },
        ],
    },
    {
        id: "media",
        name: "Media",
        description:
            "Managing conference media coverage, communications, and content creation for internal and external audiences.",
        bannerImage: "/img/dep/media.webp",
        email: "media@wesmun.com",
        team: [
            {name: "Layla Elewa", position: "Director of Media"},
            {name: "Aon Alaa Thunebat", position: "Director of Media"},
            {name: "Lana Doghmosh", position: "Director of Media"},
        ],
    },
    {
        id: "finance",
        name: "Finance",
        description: "Managing financial operations and budgeting with fiscal responsibility and transparency.",
        bannerImage: "/img/dep/finance.webp",
        email: "finance@wesmun.com",
        team: [
            {name: "Arham Khan", position: "Director of Finance"},
            {name: "Mahnoor Iftikhar", position: "Director of Finance"},
        ],
    },
    {
        id: "public-relations",
        name: "Public Relations",
        description: "Handling outreach, communications, and representation of WESMUN externally.",
        bannerImage: "/img/dep/pr.webp",
        email: "pr@wesmun.com",
        team: [
            {
                name: "Ahmad Kabir",
                position: "Director of Public Relations",
            },
            {
                name: "Soha Shamsher",
                position: "Director of Public Relations",
            },
        ],
    },
]

export const DepartmentText = {
    PAGE_TITLE: "Our Departments",
    PAGE_SUBTITLE: "Meet the dedicated teams leading WESMUN 2026 to excellence",
    PLACEHOLDER_IMAGE: "/img/dep/group-photo.webp",
} as const
