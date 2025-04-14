import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the dist/js directory if it doesn't exist
if (!fs.existsSync(path.join(__dirname, 'dist', 'js'))) {
  fs.mkdirSync(path.join(__dirname, 'dist', 'js'), { recursive: true });
}

// Copy the TypeScript-generated JavaScript files to the dist/js directory
const sourceDir = path.join(__dirname, 'dist', 'js');
const files = fs.readdirSync(sourceDir);

console.log('Copying TypeScript-generated JavaScript files to dist/js directory...');
files.forEach(file => {
  if (file.endsWith('.js')) {
    console.log(`Copying ${file}...`);
    const sourceFile = path.join(sourceDir, file);
    const destFile = path.join(__dirname, 'dist', 'js', file);
    fs.copyFileSync(sourceFile, destFile);
  }
});

console.log('Build completed successfully!');
