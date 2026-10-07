/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Portrait + certificates all live under /public/images and are served statically.
    // next/image works out of the box for them.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
