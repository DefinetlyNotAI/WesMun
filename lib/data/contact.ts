import {ContactInfo} from "@/lib/types";
import {siteConfig} from "@/lib/data/meta";

// Contact Information
export const contactInfo: ContactInfo = siteConfig.contact

export const ContactText = {
    PAGE_TITLE: "Get In Touch",
    PAGE_SUBTITLE: "Have questions? We're here to help. Reach out to us through any of the channels below",
    SOCIAL_TITLE: "Connect on Social Media",
    SOCIAL_FOLLOW: "Follow us for updates, announcements, and behind-the-scenes content",
    INSTAGRAM_LABEL: "Instagram",
    TIKTOK_LABEL: "TikTok",
} as const
