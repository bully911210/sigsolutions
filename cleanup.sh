#!/bin/bash

# Files and directories to remove
echo "Removing redundant files and directories..."

# Remove build and source directories
rm -rf dist/
rm -rf src/
rm -rf assets/
rm -rf public/
rm -rf .git_disabled/

# Remove redundant HTML files
rm -f index-minimal.html
rm -f index-redirect.html
rm -f redirect.html

# Remove build configuration files
rm -f build.js
rm -f vite.config.js
rm -f vite.config.ts
rm -f tsconfig.json
rm -f tsconfig.node.json
rm -f postcss.config.js
rm -f tailwind.config.js
rm -f .eslintrc.cjs
rm -f mime-fix.js
rm -f website_checklist.txt
rm -f vite.svg
rm -f placeholder.svg

# Remove deployment configuration files that are not needed for GitHub Pages
rm -f netlify.toml
rm -f vercel.json
rm -f web.config
rm -f _headers

# Remove package files
rm -f package.json
rm -f package-lock.json

echo "Cleanup complete!"
