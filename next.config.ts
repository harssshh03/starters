import type { NextConfig } from "next"

import { site } from "./lib/site"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // starters.harssh.xyz/extension -> the Marketplace listing
      { source: "/extension", destination: site.marketplace, permanent: false },
    ]
  },
}

export default nextConfig
