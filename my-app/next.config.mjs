/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.mux.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
