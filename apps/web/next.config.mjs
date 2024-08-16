import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "seeklogo.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "cdn.dummyjson.com" },
      { hostname: "static-assets-web.flixcart.com" },
      { hostname: "img.icons8.com" },
    ],
  },
};

export default nextConfig;
