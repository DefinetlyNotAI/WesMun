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
      img-src 'self' https: blob: data:;
    `.replace(/\s{2,}/g, " ").trim(),
    },
];

// noinspection JSUnusedGlobalSymbols
const nextConfig = {
    env: {
        GIT_COMMIT_HASH: process.env.VERCEL_GIT_COMMIT_SHA || "local",
        GIT_BRANCH: process.env.VERCEL_GIT_COMMIT_REF || "local",
    },
    // Modern JavaScript targeting - no legacy polyfills
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    // Image optimization
    images: {
        formats: ['image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 31536000,
        qualities: [60, 75, 90],
        localPatterns: [
            {
                pathname: '/img/**',
                search: '',
            },
            {
                pathname: '/placeholder.svg',
                search: '**',
            },
            {
                pathname: '/**',
                search: '',
            },
        ],
        // Allow optimizing external images from https hosts (adjust hostname list as needed)
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '/**',
            },
        ],
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
    },
    // Fallback rewrite: if /com/banner/* is requested and no static file exists, serve a placeholder
    async rewrites() {
        return {
            fallback: [
                {
                    source: '/com/banner/:path*',
                    destination: '/img/placeholder.webp', // ensure this file exists in public/img/placeholder.webp
                },
            ],
        };
    },
};

export default nextConfig;