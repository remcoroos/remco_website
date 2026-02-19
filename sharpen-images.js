/**
 * Sharpen images script
 * Uses sharp's unsharp mask to subtly sharpen photos
 * ONLY sharpens - does NOT resize, reformat, or alter images in any other way
 * 
 * Originals are backed up to public/originals/ before processing
 */

import sharp from 'sharp';
import { copyFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

// Only the main content images - NOT favicons or icons
const IMAGES_TO_SHARPEN = [
    'Profiel.png',
    'Werk.png',
    'Gezin.png',
    'Hardlopen.png',
    'Wedstrijdzeilen.png',
    'share-image.jpg',
];

const PUBLIC_DIR = 'public';
const BACKUP_DIR = 'public/originals';

// Subtle sharpening settings - enough to make images crisp without artifacts
// sigma: controls the radius of sharpening (1.0 = subtle, 2.0+ = aggressive)
// flat: threshold for flat areas (higher = less sharpening in smooth areas)
// jagged: threshold for edges (higher = less sharpening at edges)
const SHARPEN_OPTIONS = {
    sigma: 1.0,
    flat: 1.0,
    jagged: 2.0,
};

async function run() {
    // Create backup directory
    if (!existsSync(BACKUP_DIR)) {
        await mkdir(BACKUP_DIR, { recursive: true });
        console.log(`📁 Created backup directory: ${BACKUP_DIR}/`);
    }

    for (const filename of IMAGES_TO_SHARPEN) {
        const inputPath = path.join(PUBLIC_DIR, filename);
        const backupPath = path.join(BACKUP_DIR, filename);

        if (!existsSync(inputPath)) {
            console.log(`⚠️  Skipping ${filename} - file not found`);
            continue;
        }

        // Backup original (only if not already backed up)
        if (!existsSync(backupPath)) {
            await copyFile(inputPath, backupPath);
            console.log(`💾 Backed up: ${filename} → originals/${filename}`);
        } else {
            console.log(`💾 Backup already exists for ${filename}, skipping backup`);
        }

        // Get original metadata
        const meta = await sharp(inputPath).metadata();
        console.log(`🔍 ${filename}: ${meta.width}x${meta.height} ${meta.format} ${meta.channels}ch`);

        // Sharpen and save back - preserving exact format and dimensions
        const image = sharp(inputPath);

        // Apply unsharp mask for sharpening
        image.sharpen(SHARPEN_OPTIONS);

        // Save in the same format with high quality
        if (meta.format === 'png') {
            await image.png({ quality: 100, compressionLevel: 6 }).toFile(inputPath + '.tmp');
        } else if (meta.format === 'jpeg') {
            await image.jpeg({ quality: 95, mozjpeg: true }).toFile(inputPath + '.tmp');
        }

        // Verify dimensions haven't changed
        const newMeta = await sharp(inputPath + '.tmp').metadata();
        if (newMeta.width !== meta.width || newMeta.height !== meta.height) {
            console.error(`❌ ERROR: Dimensions changed for ${filename}! Skipping.`);
            const { unlink } = await import('fs/promises');
            await unlink(inputPath + '.tmp');
            continue;
        }

        // Replace original with sharpened version
        await copyFile(inputPath + '.tmp', inputPath);
        const { unlink } = await import('fs/promises');
        await unlink(inputPath + '.tmp');

        // Compare file sizes
        const { stat } = await import('fs/promises');
        const origSize = (await stat(backupPath)).size;
        const newSize = (await stat(inputPath)).size;
        const diff = ((newSize - origSize) / origSize * 100).toFixed(1);

        console.log(`✅ Sharpened: ${filename} (${(origSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB, ${diff > 0 ? '+' : ''}${diff}%)`);
    }

    console.log('\n🎉 Done! All images sharpened. Originals backed up in public/originals/');
    console.log('To restore originals: cp public/originals/* public/');
}

run().catch(console.error);
