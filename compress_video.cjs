const ffmpeg = require('ffmpeg-static');
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const dir = 'public/images';
const threshold = 20 * 1024 * 1024; // 20 MB

const files = fs.readdirSync(dir);

files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isFile() && (file.endsWith('.mp4') || file.endsWith('.MOV') || file.endsWith('.mov')) && stats.size > threshold) {
        console.log(`Compressing ${file} (${(stats.size / (1024 * 1024)).toFixed(2)} MB)...`);
        
        const tempOutput = filePath + '.tmp.mp4';
        const result = spawnSync(ffmpeg, [
            '-i', filePath,
            '-vcodec', 'libx264',
            '-crf', '30', // More aggressive compression
            '-preset', 'faster',
            '-acodec', 'aac', // Ensure audio is compressed too
            '-b:a', '128k',
            '-y', // Overwrite output
            tempOutput
        ], { stdio: 'inherit' });

        if (result.status === 0) {
            const newStats = fs.statSync(tempOutput);
            console.log(`Success! New size: ${(newStats.size / (1024 * 1024)).toFixed(2)} MB`);
            
            // Rename temp back to original
            fs.unlinkSync(filePath);
            fs.renameSync(tempOutput, filePath);
        } else {
            console.error(`Failed to compress ${file}`);
            if (fs.existsSync(tempOutput)) fs.unlinkSync(tempOutput);
        }
    }
});
