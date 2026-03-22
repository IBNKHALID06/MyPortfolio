/* eslint-env node */
/* global __dirname, console */
const fs = require("fs");
const path = require("path");

const outDir = path.resolve(__dirname, "../dist/spa");
const index = path.join(outDir, "index.html");
const fallback = path.join(outDir, "404.html");
const cnamePath = path.join(outDir, "CNAME");
const customDomain = process.env.CUSTOM_DOMAIN;

if (fs.existsSync(index)) {
  fs.copyFileSync(index, fallback);
  console.log("Copied index.html to 404.html for SPA fallback.");

  if (customDomain && typeof customDomain === "string") {
    fs.writeFileSync(cnamePath, customDomain.trim());
    console.log(`Created CNAME file for custom domain: ${customDomain}`);
  } else {
    if (fs.existsSync(cnamePath)) fs.rmSync(cnamePath);
    console.log("No CUSTOM_DOMAIN provided. Skipping CNAME creation.");
  }
} else {
  console.error("index.html not found in dist/spa");
}
