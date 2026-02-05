import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const conversions = [
    {
        input: 'public/Gezin.png',
        output: 'public/Gezin.webp',
        width: 532,
        height: 400,
        quality: 85
    },
    {
        input: 'public/Werk.png',
        output: 'public/Werk.webp',
        width: 728,
        height: 611,
        quality: 85
    },
    {
        input: 'public/Profiel.png',
        output: 'public/Profiel.webp',
        quality: 85
    },
    {
        input: 'public/Hardlopen.png',
        output: 'public/Hardlopen.webp',
        width: 724,
        height: 654,
        quality: 85
    }
];

async function convertImages() {
    console.log('Starting image conversion to WebP...\n');

    for (const conversion of conversions) {
        try {
            const inputPath = join(__dirname, conversion.input);
            const outputPath = join(__dirname, conversion.output);

            let pipeline = sharp(inputPath);

            // Resize if dimensions specified
            if (conversion.width && conversion.height) {
                pipeline = pipeline.resize(conversion.width, conversion.height, {
                    fit: 'cover',
                    position: 'center'
                });
            }

            // Convert to WebP
            await pipeline
                .webp({ quality: conversion.quality })
                .toFile(outputPath);

            const stats = await sharp(outputPath).metadata();
            console.log(`✓ Converted ${conversion.input}`);
            console.log(`  → ${conversion.output} (${stats.width}x${stats.height})`);
            console.log('');
        } catch (error) {
            console.error(`✗ Error converting ${conversion.input}:`, error.message);
        }
    }

    console.log('Image conversion complete!');
}

convertImages();
