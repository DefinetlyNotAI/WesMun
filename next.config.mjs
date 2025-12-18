// next.config.mjs
/** @type {import('next').NextConfig} */
const securityHeaders = [
    {
        key: "Content-Security-Policy",
        value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' https://fonts.gstatic.com data:;
      connect-src 'self';
      img-src 'self' data:;
    `.replace(/\s{2,}/g, " ").trim(),
    },
];

// noinspection JSUnusedGlobalSymbols
const nextConfig = {
    env: {
        GIT_COMMIT_HASH: process.env.VERCEL_GIT_COMMIT_SHA || "local",
        GIT_BRANCH: process.env.VERCEL_GIT_COMMIT_REF || "local",
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: securityHeaders,
            },
        ];
    },
    // Redirect /index.html to / to avoid duplicate-index issues
    async redirects() {
        return [
            {
                source: '/index.html',
                destination: '/',
                permanent: true,
            },
        ]
    }
};

export default nextConfig;