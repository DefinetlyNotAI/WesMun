/** @type {import('next-sitemap').IConfig} */
export default {
    siteUrl: "https://www.wesmun.com",
    generateRobotsTxt: true,
    sitemapSize: 5000,

    transform: async (config, path) => {
        // Home
        if (path === "/") {
            return {
                loc: path,
                changefreq: "weekly",
                priority: 1.0,
                lastmod: new Date().toISOString(),
            };
        }

        // High-level static pages
        const weeklyStatic = [
            "/departments",
            "/faqs",
            "/committees",
            "/sign-up",
            "/contact",
        ];

        if (weeklyStatic.includes(path)) {
            return {
                loc: path,
                changefreq: "weekly",
                priority: 0.8,
                lastmod: new Date().toISOString(),
            };
        }

        // Committee pages
        if (path.startsWith("/committees/")) {
            return {
                loc: path,
                changefreq: "daily",
                priority: 0.7,
                lastmod: new Date().toISOString(),
            };
        }

        // Fallback
        return {
            loc: path,
            changefreq: "monthly",
            priority: 0.5,
            lastmod: new Date().toISOString(),
        };
    },
};
