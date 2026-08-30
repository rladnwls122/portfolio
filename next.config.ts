import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The home directory above this project also holds a lockfile; pin the root here.
  turbopack: { root: path.resolve(".") },
};

export default nextConfig;
