import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        turbopack: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: "",
                pathname: "/images/**",
            },
        ],
    },
};

export default nextConfig;
