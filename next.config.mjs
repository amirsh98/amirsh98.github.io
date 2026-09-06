/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/jamshidpour.github.io",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
