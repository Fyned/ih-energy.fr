import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const basePath = './public/images';

const conversions = [
  // About images
  { src: 'team.png', dest: 'about/team.webp' },
  { src: 'artisan-work.png', dest: 'about/artisan-work.webp' },
  { src: 'france-map.png', dest: 'about/france-map.webp' },

  // Service images
  { src: 'isolation.png', dest: 'services/isolation.webp' },
  { src: 'chauffage.png', dest: 'services/chauffage.webp' },
  { src: 'photovoltaique.png', dest: 'services/photovoltaique.webp' },
  { src: 'chauffe-eau.png', dest: 'services/chauffe-eau.webp' },
  { src: 'vmc.png', dest: 'services/vmc.webp' },

  // Blog images
  { src: 'aides-2024.png', dest: 'blog/aides-2024.webp' },
  { src: 'pompe-chaleur-guide.png', dest: 'blog/pompe-chaleur-guide.webp' },
  { src: 'isolation-combles.png', dest: 'blog/isolation-combles.webp' },
  { src: 'dpe-location.png', dest: 'blog/dpe-location.webp' },
  { src: 'panneaux-solaires.png', dest: 'blog/panneaux-solaires.webp' },

  // Hero images
  { src: 'home-hero.png', dest: 'hero/home-hero.webp' },
];

async function convertImages() {
  for (const { src, dest } of conversions) {
    const srcPath = path.join(basePath, src);
    const destPath = path.join(basePath, dest);

    if (!fs.existsSync(srcPath)) {
      console.log(`⚠️ Skip: ${src} not found`);
      continue;
    }

    try {
      await sharp(srcPath)
        .webp({ quality: 85 })
        .toFile(destPath);

      const srcSize = fs.statSync(srcPath).size;
      const destSize = fs.statSync(destPath).size;
      const savings = ((1 - destSize / srcSize) * 100).toFixed(1);

      console.log(`✅ ${src} → ${dest} (${savings}% smaller)`);

      // Delete original PNG
      fs.unlinkSync(srcPath);
    } catch (err) {
      console.error(`❌ Error converting ${src}:`, err.message);
    }
  }

  console.log('\n✨ Done!');
}

convertImages();
