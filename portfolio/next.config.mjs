import { withNextVideo } from "next-video/process";
import createMDX from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.mux.com",
        port: "",
        pathname: "**"
      },
    ],
  },
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  // threejs packages -> installation instructions: https://docs.pmnd.rs/react-three-fiber/getting-started/installation
  transpilePackages: ["three"],
};

// hello

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

// Merge MDX config with Next.js config
export default withNextVideo(withMDX(nextConfig));