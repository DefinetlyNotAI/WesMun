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

const nextConfig = {
    images: {
        localPatterns: [
            {
                // Match any file in the public folder and allow query strings (required in Next.js 16+)
                pathname: "/:path*",
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
};

export default nextConfig;