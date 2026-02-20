import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/docs/:path*.mdx',
        destination: '/llms.mdx/docs/:path*',
      },
      {
        source: '/v5/:path*.mdx',
        destination: '/llms.mdx/v5/:path*',
      },
    ];
  },
  images: {
    domains: [
      "www.makeitanimated.dev",
      "rn-primitives.vercel.app",
      "github.com",
      "pbs.twimg.com",
      "i.ytimg.com",
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default withMDX(nextConfig);
