import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com', // Replace with your allowed domain
        port: '', // Optional: specify if a non-standard port is used
        pathname: '/path/to/images/**', // Optional: restrict to specific paths
      },
};

export default nextConfig;
