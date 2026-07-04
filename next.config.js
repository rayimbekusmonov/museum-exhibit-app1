/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Using local /public/assets images referenced as plain <img> for
    // simplicity/portability. Switch to next/image if you want automatic
    // optimization once real photos are in place.
    unoptimized: true
  }
};

module.exports = nextConfig;
