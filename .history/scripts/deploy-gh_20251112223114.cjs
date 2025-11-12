#!/usr/bin/env node
/* eslint-env node */
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

function run(cmd, opts = {}) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: "inherit", ...opts });
}

function getRepoName() {
  try {
    const url = execSync("git remote get-url origin", { encoding: "utf8" }).trim();
    // Handles formats: https://github.com/user/repo.git or git@github.com:user/repo.git
    const match = url.match(/[:\/]([^\/]+)\/(.+?)(?:\.git)?$/);
    if (!match) return null;
    return match[2];
  } catch (e) {
    return null;
  }
}

function main() {
  const repoArg = process.argv[2];
  const repoName = repoArg || getRepoName();
  if (!repoName) {
    console.error("Could not determine repo name. Pass it as an argument: node scripts/deploy-gh.cjs <repo-name>");
    process.exit(1);
  }

  const projectRoot = path.resolve(__dirname, "..");
  process.chdir(projectRoot);

  // Ensure install (optional; comment out if you prefer manual installs)
  // run("pnpm install");

  // Build with BASE_PATH for GitHub Pages repo deployments
  const isUserOrOrgSite = /\.github\.io$/i.test(repoName);
  const hasCustomDomain = !!process.env.CUSTOM_DOMAIN;
  // On GitHub Pages with a custom domain, assets should live at root
  process.env.BASE_PATH = (isUserOrOrgSite || hasCustomDomain) ? "/" : `/${repoName}/`;
  console.log(`Using BASE_PATH=${process.env.BASE_PATH}`);

  // If you have a custom domain, set CUSTOM_DOMAIN env var before running this script
  // e.g. PowerShell: $env:CUSTOM_DOMAIN="example.com"; node scripts/deploy-gh.cjs

  run("pnpm build:client");

  // Deploy the dist/spa folder to gh-pages branch
  if (!fs.existsSync(path.join(projectRoot, "dist", "spa"))) {
    console.error("dist/spa not found. Build step may have failed.");
    process.exit(1);
  }

  run("npx gh-pages -d dist/spa");
  const pathSuffix = isUserOrOrgSite ? "/" : `/${repoName}/`;
  console.log("Deployment to GitHub Pages complete.\nOpen: https://<your-username>.github.io" + pathSuffix);
}

main();
