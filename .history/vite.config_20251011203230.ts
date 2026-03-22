import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig(({ mode: _mode }) => {
  // Determine base path for assets. Priority:
  // 1. Explicit env override VITE_BASE_PATH
  // 2. If running in GitHub Actions for this repo, use '/MyPortfolio/' (GH Pages subfolder)
  // 3. Fallback to '/'
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
  const inferredBase = process.env.GITHUB_ACTIONS && repoName === 'MyPortfolio' ? '/MyPortfolio/' : '/';
  const base = process.env.VITE_BASE_PATH || inferredBase;
  return {
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: ["./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist/spa",
  },
  base,
  plugins: [react(), expressPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  };
});

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    configureServer(server) {
      const app = createServer();

      // Add Express app as middleware to Vite dev server
      server.middlewares.use(app);
    },
  };
}
