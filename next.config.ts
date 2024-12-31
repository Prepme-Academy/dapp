import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.educare.school",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "getlogovector.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;
