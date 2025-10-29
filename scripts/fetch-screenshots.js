import fs from 'fs';
import path from 'path';
import https from 'https';

const outDir = path.resolve(process.cwd(), 'public', 'project-screens');
const projectsPath = path.resolve(process.cwd(), 'scripts', 'projects.json');

if (!fs.existsSync(projectsPath)) {
  console.error('projects.json not found at', projectsPath);
  process.exit(1);
}

const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf-8'));

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode && res.statusCode >= 400) {
        reject(new Error(`Failed to fetch ${url}, status ${res.statusCode}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve()));
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

(async () => {
  for (const p of projects) {
    try {
      const slug = p.slug;
      const outFile = path.join(outDir, `${slug}.png`);
      // thum.io public API
      const screenshotUrl = `https://image.thum.io/get/width/1200/crop/800/${encodeURIComponent(p.url)}`;
      console.log('Fetching', p.url, '→', outFile);
      await download(screenshotUrl, outFile);
      console.log('Saved', outFile);
    } catch (err) {
      console.error('Error fetching', p.url, err.message || err);
    }
  }
  console.log('Done fetching screenshots.');
})();
