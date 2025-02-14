import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  typescript: {
    // TODO: Enable the check again. This is now to disable next.js checking node_modules type errors on building the app
    ignoreBuildErrors: true,
  },
}

export default nextConfig
