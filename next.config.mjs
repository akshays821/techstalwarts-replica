/** @type {import('next').NextConfig} */
const nextConfig = {
  // Stabilizes the filesystem watcher and intentionally triggers fallback to Webpack.
  // Next.js cannot use Turbopack if custom Webpack configuration is provided.
  // This helps prevent "Ghost Turbopack" and resolves chokidar watcher conflicts.
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
  turbopack: {},
};

export default nextConfig;