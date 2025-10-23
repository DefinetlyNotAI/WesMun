import {Department} from "@/lib/types";

// Departments
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

export const DepartmentText = {
    PAGE_TITLE: "Our Departments",
    PAGE_SUBTITLE: "Meet the dedicated teams leading WESMUN 2025 to excellence",
    PLACEHOLDER_IMAGE: "/placeholder.svg",
} as const
