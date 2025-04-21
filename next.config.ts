import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src//i18n/request.ts");
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["placehold.co", "placehold.co/160x160", "via.placeholder.com/400x250"],
  },
};

export default withNextIntl(nextConfig);
