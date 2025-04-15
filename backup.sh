#!/bin/bash

# Create a backup directory
mkdir -p backup

# Copy essential files to the backup directory
cp index.html backup/
cp styles.css backup/
cp script.js backup/
cp favicon.png backup/
cp favicon.ico backup/
cp .nojekyll backup/
cp CNAME backup/
cp 404.html backup/
cp robots.txt backup/
cp .gitignore backup/
cp .gitattributes backup/

echo "Backup complete!"
