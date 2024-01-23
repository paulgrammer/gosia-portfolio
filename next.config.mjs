/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en-US", "pl"],
    defaultLocale: "en-US",
    localeDetection: false,
  },
  trailingSlash: false,
};

export default nextConfig;
