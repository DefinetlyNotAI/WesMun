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

export interface CommitteeDetailPageClientProps {
    committee: Committee
}

export interface Params {
    params: { id: string }
}

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

// FAQs
export interface FAQ {
    id: string
    question: string
    answer: string
    category: "General" | "Registration" | "Committees" | "Logistics"
}

// Site Configuration (e.g. footer) and Main page
export interface Offering {
    id: string
    title: string
    description: string
    icon: string
}

// Contact Information
export interface ContactInfo {
    email: string;
    phone: string;
    address: string;
    socialMedia: { instagram: string; twitter: string; facebook: string; linkedin: string; tiktok: string }
}
