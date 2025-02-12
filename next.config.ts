import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    KINDE_SITE_URL:
      process.env.NODE_ENV === "development"
        ? process.env.KINDE_SITE_URL ?? "http://localhost:3000"
        : process.env.KINDE_SITE_URL ??
          `https://${process.env.VERCEL_BRANCH_URL}`,
    KINDE_POST_LOGOUT_REDIRECT_URL:
      process.env.KINDE_POST_LOGOUT_REDIRECT_URL ??
      `https://${process.env.VERCEL_BRANCH_URL}`,
  },
};

export default nextConfig;
