// Sign Up Page Content
export const signUpPageContent = {
    title: "Register for WESMUN 2026",
    description: "Join us for an unforgettable Model UN experience. Choose your registration type below.",
    earlyBirdDeadline: "2026-02-01T23:59:59",
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
} as const
