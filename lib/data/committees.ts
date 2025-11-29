import {Committee} from "@/lib/types";
import {signupBaseUrl} from "@/lib/data/signup";


// Committees
export const committees: Committee[] = [
    {
        id: "unicef",
        name: "United Nations International Children's Emergency Fund",
        abbreviation: "UNICEF (JR)",
        description: "UNICEF focuses on protecting children's rights, ensuring access to education, and responding to humanitarian crises worldwide.",
        detailedDescription: "UNICEF works globally to promote and protect the rights and well-being of every child, especially those affected by conflict, poverty, or displacement. Delegates will explore the intersection between geopolitics, humanitarian aid, and children’s welfare in the modern world.",
        topics: [
            "Addressing the impact of geopolitical conflicts, sanctions, and occupations on children’s rights and access to aid.",
            "Addressing how global challenges such as climate change, natural disasters, and pandemics affect children’s health and well-being."
        ],
        chair1: {name: "Wasiq Nabeel", image: "/placeholder.svg?height=300&width=300"},
        chair2: {name: "Ahmed Saad", image: "/placeholder.svg?height=300&width=300"},
        chair3: {name: "Zeina Islam", image: "/placeholder.svg?height=300&width=300"},
        bannerImage: "/banners/unicef.svg",
        signupLink: {
            internal: `${signupBaseUrl.internal}?COMMITTEE=TYPE`,
            external: `${signupBaseUrl.external}?COMMITTEE=TYPE`
        },
        backgroundGuidePdf: "/guides/unicef.pdf",
        committeeSize: "35-45 delegates",
        difficulty: "Beginner"
    },
    {
        id: "who",
        name: "World Health Organization",
        abbreviation: "WHO",
        description: "The WHO coordinates global health initiatives, focusing on preventing disease, promoting health, and responding to international health crises.",
        detailedDescription: "Delegates will examine the ethics of health aid, digital influence, and manipulation in global health. The WHO committee challenges participants to navigate political, technological, and humanitarian dimensions of healthcare.",
        topics: [
            "Discussing the weaponization of health aid and its role in political influence and conditional assistance during global health crises.",
            "Addressing digital warfare and psychological manipulation and their impact on global mental health through information control."
        ],
        chair1: {name: "William Bryant", image: "/placeholder.svg?height=300&width=300"},
        chair2: {name: "Hussam El Haj", image: "/placeholder.svg?height=300&width=300"},
        chair3: {name: "Habiba Mohamed", image: "/placeholder.svg?height=300&width=300"},
        bannerImage: "/banners/who.svg",
        signupLink: {
            internal: `${signupBaseUrl.internal}?COMMITTEE=TYPE`,
            external: `${signupBaseUrl.external}?COMMITTEE=TYPE`
        },
        backgroundGuidePdf: "/guides/who.pdf",
        committeeSize: "25-30 delegates",
        difficulty: "Beginner"
    },
    {
        id: "unhrc",
        name: "United Nations Human Rights Council",
        abbreviation: "UNHRC",
        description: "The UNHRC works to promote and protect human rights globally through dialogue, monitoring, and recommendations.",
        detailedDescription: "Delegates in UNHRC will explore how nations can uphold human rights amid modern security concerns and technological developments. This committee examines where ethics meet surveillance and state power.",
        topics: [
            "Maintaining a balance between national security and human rights in counterterrorism efforts and sanctioned regions.",
            "Overseeing emerging technologies to stop the misuse of AI and government surveillance."
        ],
        chair1: {name: "Aaradhya Vij", image: "/placeholder.svg?height=300&width=300"},
        chair2: {name: "Imani Karabu", image: "/placeholder.svg?height=300&width=300"},
        chair3: {name: "Ayten Toeima", image: "/placeholder.svg?height=300&width=300"},
        bannerImage: "/banners/unhrc.svg",
        signupLink: {
            internal: `${signupBaseUrl.internal}?COMMITTEE=TYPE`,
            external: `${signupBaseUrl.external}?COMMITTEE=TYPE`
        },
        backgroundGuidePdf: "/guides/unhrc.pdf",
        committeeSize: "30-35 delegates",
        difficulty: "Beginner"
    },
    {
        id: "ga3",
        name: "General Assembly Third Committee (SOCHUM)",
        abbreviation: "GA3",
        description: "GA3 handles social, humanitarian, and cultural issues including human rights, equality, and social development.",
        detailedDescription: "This committee explores the human side of global politics. Delegates will address exploitation, conflict, and human rights abuses through multilateral negotiation.",
        topics: [
            "Combating Human Trafficking and Modern Slavery in Transnational Networks.",
            "Addressing Human Rights Violations Arising from Geopolitical Conflicts."
        ],
        chair1: {name: "Manthan Gulat", image: "/placeholder.svg?height=300&width=300"},
        chair2: {name: "Oshian", image: "/placeholder.svg?height=300&width=300"},
        chair3: {name: "Tasnime Zermout", image: "/placeholder.svg?height=300&width=300"},
        bannerImage: "/banners/ga3.svg",
        signupLink: {
            internal: `${signupBaseUrl.internal}?COMMITTEE=TYPE`,
            external: `${signupBaseUrl.external}?COMMITTEE=TYPE`
        },
        backgroundGuidePdf: "/guides/ga3.pdf",
        committeeSize: "40-50 delegates",
        difficulty: "Beginner"
    },
    {
        id: "f1",
        name: "Formula 1 Committee",
        abbreviation: "F1",
        description: "A dynamic, debate-driven committee that simulates governance and ethical discussions within the Formula 1 world.",
        detailedDescription: "Delegates will analyze decision-making and fairness in the world’s most elite motorsport. They will assess safety, competitiveness, and consistency through structured policy debate.",
        topics: [
            "Evaluating the Role of Sprint Races in Formula 1: Considering Whether to Retain, Modify, or Discontinue Them in Light of Competitive Balance, Safety, and Fan Engagement.",
            "Ensuring Consistency in Driver Penalties: Weighing the Pursuit of Fairness Against the Complex and Variable Nature of Racing Incidents."
        ],
        chair1: {name: "Adham Hamdy", image: "/placeholder.svg?height=300&width=300"},
        chair2: {name: "Omar Moamen", image: "/placeholder.svg?height=300&width=300"},
        chair3: {name: "Rayyan Chams", image: "/placeholder.svg?height=300&width=300"},
        bannerImage: "/banners/f1.svg",
        signupLink: {
            internal: `${signupBaseUrl.internal}?COMMITTEE=TYPE`,
            external: `${signupBaseUrl.external}?COMMITTEE=TYPE`
        },
        backgroundGuidePdf: "/guides/f1.pdf",
        committeeSize: "20-25 delegates",
        difficulty: "Beginner"
    },

    // Intermediate
    {
        id: "ga1",
        name: "General Assembly First Committee (DISEC)",
        abbreviation: "GA1",
        description: "GA1 focuses on international peace and security, disarmament, and the regulation of weapons and defense technologies.",
        detailedDescription: "Delegates in GA1 will debate the future of warfare, automation, and global defense compliance. The committee will focus on how new technologies reshape conflict and deterrence.",
        topics: [
            "Addressing the challenges and risks posed by autonomous defense systems capable of mass destruction.",
            "Strengthening verification mechanisms to ensure compliance with nuclear non-proliferation treaties."
        ],
        chair1: {name: "Leen Elgharably", image: "/placeholder.svg?height=300&width=300"},
        chair2: {name: "Khalid Ashraf", image: "/placeholder.svg?height=300&width=300"},
        chair3: {name: "Rahul Girish", image: "/placeholder.svg?height=300&width=300"},
        bannerImage: "/banners/ga1.svg",
        signupLink: {
            internal: `${signupBaseUrl.internal}?COMMITTEE=TYPE`,
            external: `${signupBaseUrl.external}?COMMITTEE=TYPE`
        },
        backgroundGuidePdf: "/guides/ga1.pdf",
        committeeSize: "35 delegates",
        difficulty: "Intermediate"
    },
    {
        id: "arab-league",
        name: "Arab League",
        abbreviation: "AR",
        description: "A regional intergovernmental organization representing the Arab world, focused on unity, stability, and development.",
        detailedDescription: "The Arab League committee addresses critical regional issues affecting Arab states. Delegates will discuss information integrity, water scarcity, and political stability in the Middle East.",
        topics: [
            "Addressing resource scarcity and water security as growing threats to regional stability and unity.",
            "Discussing the external interference of information within Arab media networks."
        ],
        chair1: {name: "Layal Melhem", image: "/placeholder.svg?height=300&width=300"},
        chair2: {name: "Nadine Tabche", image: "/placeholder.svg?height=300&width=300"},
        chair3: {name: "Fatima Hatem", image: "/placeholder.svg?height=300&width=300"},
        bannerImage: "/banners/arab-league.svg",
        signupLink: {
            internal: `${signupBaseUrl.internal}?COMMITTEE=TYPE`,
            external: `${signupBaseUrl.external}?COMMITTEE=TYPE`
        },
        backgroundGuidePdf: "/guides/arab-league.pdf",
        committeeSize: "30 delegates",
        difficulty: "Intermediate"
    },
    {
        id: "unodc",
        name: "United Nations Office on Drugs and Crime",
        abbreviation: "UNODC",
        description: "UNODC works to combat drugs, crime, corruption, and terrorism through international cooperation and legal frameworks.",
        detailedDescription: "Delegates will engage with modern issues of crime, addiction, and digital networks. The committee aims to create solutions to safeguard vulnerable populations and promote justice.",
        topics: [
            "Addressing the challenges faced by individuals who use substances, including homelessness, violence, and the impact of drug distribution.",
            "Addressing the causes of cybercrime and terrorism financing through digital and financial networks."
        ],
        chair1: {name: "Kabeer Anil", image: "/placeholder.svg?height=300&width=300"},
        chair2: {name: "Amaan Anas Mohtasham", image: "/placeholder.svg?height=300&width=300"},
        chair3: {name: "Ayia Waleed", image: "/placeholder.svg?height=300&width=300"},
        bannerImage: "/banners/unodc.svg",
        signupLink: {
            internal: `${signupBaseUrl.internal}?COMMITTEE=TYPE`,
            external: `${signupBaseUrl.external}?COMMITTEE=TYPE`
        },
        backgroundGuidePdf: "/guides/unodc.pdf",
        committeeSize: "25-30 delegates",
        difficulty: "Intermediate"
    },
    {
        id: "unw",
        name: "United Nations Women",
        abbreviation: "UNW",
        description: "UN Women advocates for gender equality and the empowerment of women globally.",
        detailedDescription: "Delegates will discuss feminism’s political dynamics and the evolving digital landscape for women’s rights. The committee tackles equality beyond slogans — through geopolitics and data.",
        topics: [
            "Examining Feminism as a Geopolitical Tool and the Westernization of Gender Equality Narratives.",
            "Discussing the challenges caused by Digital oppression of Women in the age of AI."
        ],
        chair1: {name: "Anthony Sami", image: "/placeholder.svg?height=300&width=300"},
        chair2: {name: "Drishti Lohana", image: "/placeholder.svg?height=300&width=300"},
        chair3: {name: "Kamilia Akbar", image: "/placeholder.svg?height=300&width=300"},
        bannerImage: "/banners/unw.svg",
        signupLink: {
            internal: `${signupBaseUrl.internal}?COMMITTEE=TYPE`,
            external: `${signupBaseUrl.external}?COMMITTEE=TYPE`
        },
        backgroundGuidePdf: "/guides/unw.pdf",
        committeeSize: "30 delegates",
        difficulty: "Intermediate"
    },
    {
        id: "ecosoc",
        name: "Economic and Social Council",
        abbreviation: "ECOSOC",
        description: "ECOSOC coordinates the UN’s economic, social, and development activities across the globe.",
        detailedDescription: "Delegates will explore strategies to reduce inequality, strengthen cooperation, and fight transnational crime to secure global stability.",
        topics: [
            "Addressing global economic inequality to strengthen international stability.",
            "Combating transnational organized crime to protect global security and development."
        ],
        chair1: {name: "Lara Mazen", image: "/placeholder.svg?height=300&width=300"},
        chair2: {name: "Omar El Houssaini", image: "/placeholder.svg?height=300&width=300"},
        chair3: {name: "Lynn Hassan", image: "/placeholder.svg?height=300&width=300"},
        bannerImage: "/banners/ecosoc.svg",
        signupLink: {
            internal: `${signupBaseUrl.internal}?COMMITTEE=TYPE`,
            external: `${signupBaseUrl.external}?COMMITTEE=TYPE`
        },
        backgroundGuidePdf: "/guides/ecosoc.pdf",
        committeeSize: "30 delegates",
        difficulty: "Intermediate"
    },

    // Advanced
    {
        id: "unoosa",
        name: "United Nations Office for Outer Space Affairs",
        abbreviation: "UNOOSA",
        description: "UNOOSA promotes international cooperation in the peaceful use and exploration of outer space.",
        detailedDescription: "Delegates will debate the governance of space as a shared domain. Topics include cybersecurity threats to satellites and militarization of orbit.",
        topics: [
            "Addressing cybersecurity threats to Global satellite and space infrastructure.",
            "Regulating military and commercial expansion in outer space."
        ],
        chair1: {name: "Alishba Ahmed", image: "/placeholder.svg?height=300&width=300"},
        chair2: {name: "Rohith John", image: "/placeholder.svg?height=300&width=300"},
        chair3: {name: "Shohaima Akhtar", image: "/placeholder.svg?height=300&width=300"},
        bannerImage: "/banners/unoosa.svg",
        signupLink: {
            internal: `${signupBaseUrl.internal}?COMMITTEE=TYPE`,
            external: `${signupBaseUrl.external}?COMMITTEE=TYPE`
        },
        backgroundGuidePdf: "/guides/unoosa.pdf",
        committeeSize: "20 delegates",
        difficulty: "Advanced"
    },
    {
        id: "unsc",
        name: "United Nations Security Council",
        abbreviation: "UNSC",
        description: "UNSC maintains international peace and security and has the authority to make binding resolutions.",
        detailedDescription: "A fast-paced and high-stakes committee dealing with global crises, security, and conflict intervention. Delegates must balance diplomacy, strategy, and realism.",
        topics: [
            "Assessing the Security implications of private military and security companies.",
            "Protecting international peace amid transnational terrorism and extremist networks."
        ],
        chair1: {name: "Mishall Shahid", image: "/placeholder.svg?height=300&width=300"},
        chair2: {name: "Adithya Rajesh", image: "/placeholder.svg?height=300&width=300"},
        chair3: {name: "Antony Michael", image: "/placeholder.svg?height=300&width=300"},
        bannerImage: "/banners/unsc.svg",
        signupLink: {
            internal: `${signupBaseUrl.internal}?COMMITTEE=TYPE`,
            external: `${signupBaseUrl.external}?COMMITTEE=TYPE`
        },
        backgroundGuidePdf: "/guides/unsc.pdf",
        committeeSize: "15 delegates",
        difficulty: "Advanced"
    },
    {
        id: "pbc",
        name: "Peacebuilding Commission",
        abbreviation: "PBC",
        description: "The PBC supports peace efforts in countries emerging from conflict and coordinates international aid for stability.",
        detailedDescription: "Delegates will tackle interference, AI ethics, and the complex post-conflict rebuilding process. The PBC demands diplomacy with long-term vision.",
        topics: [
            "Preventing foreign interference and proxy influence in post-conflict states.",
            "Examining the ethical and security challenges of using artificial intelligence in peacekeeping."
        ],
        chair1: {name: "Qurratulain Azza Kazmi", image: "/placeholder.svg?height=300&width=300"},
        chair2: {name: "Eshal Khan", image: "/placeholder.svg?height=300&width=300"},
        chair3: {name: "Dhruv Hitesh", image: "/placeholder.svg?height=300&width=300"},
        bannerImage: "/banners/pbc.svg",
        signupLink: {
            internal: `${signupBaseUrl.internal}?COMMITTEE=TYPE`,
            external: `${signupBaseUrl.external}?COMMITTEE=TYPE`
        },
        backgroundGuidePdf: "/guides/pbc.pdf",
        committeeSize: "20 delegates",
        difficulty: "Advanced"
    },
    {
        id: "interpol",
        name: "INTERPOL",
        abbreviation: "INTERPOL",
        description: "CLASSIFIED",
        detailedDescription: "CLASSIFIED INFORMATION",
        topics: ["CLASSIFIED INFORMATION"],
        chair1: {name: "Ram Prasad", image: "/placeholder.svg?height=300&width=300"},
        chair2: {name: "Joshua John Ligo", image: "/placeholder.svg?height=300&width=300"},
        chair3: {name: "Dua Ghani", image: "/placeholder.svg?height=300&width=300"},
        bannerImage: "/banners/interpol.svg",
        signupLink: {
            internal: `${signupBaseUrl.internal}?COMMITTEE=TYPE`,
            external: `${signupBaseUrl.external}?COMMITTEE=TYPE`
        },
        backgroundGuidePdf: "/guides/interpol.pdf",
        committeeSize: "CLASSIFIED",
        difficulty: "Advanced"
    },
    {
        id: "hcc",
        name: "Historical Crisis Committee",
        abbreviation: "HCC",
        description: "CLASSIFIED",
        detailedDescription: "CLASSIFIED INFORMATION",
        topics: ["CLASSIFIED INFORMATION"],
        chair1: {name: "Eyad Samara", image: "/placeholder.svg?height=300&width=300"},
        chair2: {name: "Hamza Mohamad", image: "/placeholder.svg?height=300&width=300"},
        chair3: {name: "Rawan Helali", image: "/placeholder.svg?height=300&width=300"},
        bannerImage: "/banners/hcc.svg",
        signupLink: {
            internal: `${signupBaseUrl.internal}?COMMITTEE=TYPE`,
            external: `${signupBaseUrl.external}?COMMITTEE=TYPE`
        },
        backgroundGuidePdf: "/guides/hcc.pdf",
        committeeSize: "CLASSIFIED",
        difficulty: "Advanced"
    }
];

export const CommitteeDetailPage = {
    BACK_BUTTON: "Back to Committees",
    COMMITTEE_LEADERSHIP_TITLE: "Committee Leadership",
    CHAIR_LABEL: "Chair",
    VICE_CHAIR_LABEL: "Vice Chair",
    ABOUT_COMMITTEE_TITLE: "About This Committee",
    TOPICS_TITLE: "Topics for Debate",
    DOWNLOAD_BG_GUIDE: "Download Background Guide",
    APPLY_BUTTON: {
        INTERNAL: "Apply via Internal Delegate Form",
        EXTERNAL: "Apply via External Delegate Link"
    },
    PLACEHOLDER_IMAGE: "/placeholder.svg",
} as const

export const CommitteeText = {
    PAGE_TITLE: "Our Committees",
    PAGE_SUBTITLE: "Choose from six diverse committees, each tackling critical global issues",
    TOPICS_TITLE: "Topics for Debate",
    CHAIR_LABEL: "Chair",
    VICE_CHAIR_LABEL: "Vice Chair",
    PLACEHOLDER_IMAGE: "/placeholder.svg",
} as const
