/* eslint-env node */
/* global __dirname, console, require, module */
const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '../dist/spa');
const index = path.join(outDir, 'index.html');
const fallback = path.join(outDir, '404.html');
const cnamePath = path.join(outDir, 'CNAME');

if (fs.existsSync(index)) {
  fs.copyFileSync(index, fallback);
  console.log('Copied index.html to 404.html for SPA fallback.');

  fs.writeFileSync(cnamePath, 'khalidibnfkih.dev');
  console.log('Created CNAME file for custom domain.');
} else {
  console.error('index.html not found in dist/spa');
}
