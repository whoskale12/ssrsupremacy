import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const basePath = join(__dirname, '..');

const filesToConvert = [
  // Keychain
  'public/keychain/keychain.jpeg',
  'public/keychain/detailkeychain.jpeg',
  'public/keychain/detailkeychain2.jpeg',
  
  // Black rabbit ssr
  'public/black rabbit ssr/kaoshitam.jpeg',
  'public/black rabbit ssr/frontview.jpeg',
  'public/black rabbit ssr/backview.jpeg',
  'public/black rabbit ssr/detailview.jpeg',
  
  // White rabbit
  'public/rabbitwhite/kaosputih.jpeg',
  
  // Black fuzzymonster
  'public/blackfuzzymonster/blackfuzzymonster.jpeg',
  'public/blackfuzzymonster/detail1.jpeg',
  'public/blackfuzzymonster/detail2.jpeg',
  
  // White fuzzymonster
  'public/whitefuzzymonster/detail1.jpeg',
  'public/whitefuzzymonster/detail2.jpeg',
  'public/whitefuzzymonster/detail3.jpeg',
];

async function convertToWebp(filePath) {
  try {
    const inputPath = join(basePath, filePath);
    const outputPath = inputPath.replace(/\.(jpeg|jpg|png)$/i, '.webp');
    
    await sharp(inputPath)
      .webp({ quality: 90 })
      .toFile(outputPath);
    
    console.log(`✓ Converted: ${filePath} → ${basename(outputPath)}`);
    
    // Delete original file
    await import('fs/promises').then(({ unlink }) => unlink(inputPath));
    console.log(`  Deleted original: ${basename(inputPath)}`);
    
    return true;
  } catch (error) {
    console.error(`✗ Error converting ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('Starting merch image conversion to WebP...\n');
  
  let convertedCount = 0;
  for (const filePath of filesToConvert) {
    const fullPath = join(basePath, filePath);
    try {
      await stat(fullPath);
      if (await convertToWebp(filePath)) {
        convertedCount++;
      }
    } catch (error) {
      console.log(`⊘ File not found: ${filePath}`);
    }
  }
  
  console.log(`\n✓ Conversion complete! ${convertedCount} files converted.`);
}

main();