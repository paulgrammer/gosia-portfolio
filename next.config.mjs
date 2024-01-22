/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "preline.co",
        port: "",
        pathname: "/assets/img/mockups/**",
      },
    ],
  },
};

export default nextConfig;
