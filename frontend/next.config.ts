import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Todas las solicitudes a /api/*
        destination: "http://localhost:5000/api/:path*", // Redirige al backend
      },
    ];
  },
};

export default nextConfig;