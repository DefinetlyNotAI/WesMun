// Sign Up Page Content
export const signUpPageContent = {
    title: "Register for WESMUN 2026",
    description: "Join us for an unforgettable Model UN experience. Choose your registration type below.",
    earlyBirdDeadline: "2026-02-01T23:59:59",
    features: [
        "15 dynamic committees led by engaging and practiced chairs",
        "Lavish buffet featuring 20 dishes from 5 cuisines - a feast for everyone",
        "Vibrant social night featuring live Indian dhol performances and energetic dabke dances",
        "Every delegates receives a FREE tote bag packed with all the essentials needed plus more for the event"
    ],
    registrationTypes: [
        {
            id: "individual",
            name: "Individual Delegate",
            price: "$60",
            earlyBirdPrice: "$45",
            description: "Perfect for individual students looking to attend WESMUN",
            signupLink: "https://forms.gle/individual-delegate-signup",
        },
        {
            id: "school-group",
            name: "School Group (10+ delegates)",
            price: "$50 per delegate",
            earlyBirdPrice: "$40 per delegate",
            description: "Discounted rate for schools bringing 10 or more delegates",
            signupLink: "https://forms.gle/school-group-signup",
        },
    ],
}

export const SignUpText = {
    PAGE_TITLE: "Register for WESMUN 2026",
    PAGE_SUBTITLE: "Choose your registration type and secure your spot at this year's conference",
    PERKS_TITLE: "Perks Included",
    PERKS_DESCRIPTION:
        "Full conference access, materials, meals, social events, certificate of participation, and eligibility for awards.",
    EARLY_BIRD_LABEL: "Early Bird Price",
    REGULAR_PRICE_LABEL: "Regular Price",
    HELP_TEXT: "Need help choosing? Check out our FAQs or contact us directly",
    VIEW_FAQS: "View FAQs",
    CONTACT_US: "Contact Us",
    REGISTER_NOW: "Register Now",
    FEATURES_TITLE: "Why Join Us"
} as const
