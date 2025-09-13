import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
      {
        source: "/config.yml",
        destination: "/admin/config.yml",
      },
    ];
  },
};

export default nextConfig;
