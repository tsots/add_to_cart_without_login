import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/add_to_cart_without_login",
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com", // This is enogh to render images from unsplash
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
