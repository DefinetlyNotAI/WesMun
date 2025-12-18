// Sign Up Page Content
export const signupBaseUrl = {
    internal: "https://docs.google.com/forms/d/e/1FAIpQLSfbGvbvb7Um6DLoHWCLYRN9pdgRZQ7yfCtiR9OIlW9TAHNu9w/viewform",
    external: "https://docs.google.com/forms/d/e/1FAIpQLSfOPO1rDcaC9m32TTtKGICWrcd8zjcF_sn0GvbbvIQsS9hZTA/viewform"
};

export const signUpPageContent = {
    title: "Register for WESMUN 2026",
    description: "Join us for an unforgettable Model UN experience. Choose your registration type below.",
    earlyBirdDeadline: "2026-01-01T23:59:59",
    features: [
        "15 dynamic committees led by engaging and practiced chairs",
        "Lavish buffet featuring 20 dishes from 5 cuisines - a feast for everyone",
        "Vibrant social night featuring live Indian dhol performances and energetic dabke dances",
        "Every delegates receives a FREE tote bag packed with all the essentials needed plus more for the event"
    ],
    registrationTypes: [
        {
            id: "internal",
            name: "Internal Delegate",
            price: "250 AED",
            earlyBirdPrice: "220 AED",
            description: "For Wesgreen students attending the MUN",
            perksDescription:
                "Full conference access, materials, meals, social events, certificate of participation, and eligibility for awards.",

            signupLink: signupBaseUrl.internal,
        },
        {
            id: "external",
            name: "External Delegate",
            price: "250 AED",
            earlyBirdPrice: "220 AED",
            description: "For students from other schools attending the MUN",
            perksDescription:
                "Full conference access, materials, meals, social events, certificate of participation, and eligibility for awards.",

            signupLink: signupBaseUrl.external,
        },
        {
            id: "team-member",
            name: "WESMUN Team Member",
            price: "165 AED",
            description: "For students who are part of the WESMUN organizing team",
            perksDescription:
                "Full conference access, materials, meals, social events, certificate of participation, and eligibility for awards.",

        },
        {
            id: "chair",
            name: "Committee Chair",
            price: "180 AED",
            description: "For students chairing committees at WESMUN 2026",
            perksDescription:
                "Full conference access, materials, meals, social events, certificate of participation, and Shield.",

        }
    ],
}

export const SignUpText = {
    PAGE_TITLE: "Register for WESMUN 2026",
    PAGE_SUBTITLE: "Choose your registration type and secure your spot at this year's conference",
    PERKS_TITLE: "Perks Included",
    EARLY_BIRD_LABEL: "Early Bird Price",
    REGULAR_PRICE_LABEL: "Regular Price",
    HELP_TEXT: "Need help choosing? Check out our FAQs or contact us directly",
    VIEW_FAQS: "View FAQs",
    CONTACT_US: "Contact Us",
    REGISTER_NOW: "Register Now",
    FEATURES_TITLE: "Why Join Us",
    VIEW_PAYMENT_INSTRUCTIONS: "View Payment Instructions"
} as const

// Define the content
export const paymentInstructions: Record<"internal" | "external", string[]> = {
    internal: [
        "Open GEMS Connect App",
        "Tap on Activities",
        "Tap on School Activities",
        "Pay for the role you had registered for",
        "Send the proof of payment to {{ finance@wesmun.com }}",
    ],
    external: [
        "Check your email regarding bank details to pay via bank transfer",
        "Once paid, send proof of payment to {{ finance@wesmun.com }}",
    ],
};
