import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: __dirname },
  images: { qualities: [75] },
  async redirects() {
    // Old WordPress URLs with no page of their own here.
    return [
      { source: "/sample-page", destination: "/", permanent: true },
      { source: "/hello-world", destination: "/", permanent: true },
      { source: "/category/:path*", destination: "/", permanent: true },
      { source: "/author/:path*", destination: "/", permanent: true },
      { source: "/feed", destination: "/", permanent: true },
      { source: "/comments/feed", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
