/**
 * Playwright screenshot fetcher
 * Usage: install playwright (or playwright-chromium) and run `node ./scripts/fetch-screenshots-playwright.js`
 * Recommended: npm i -D playwright
 */
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';

const projectsPath = path.resolve(process.cwd(), 'scripts', 'projects.json');
const outDir = path.resolve(process.cwd(), 'public', 'project-screens');

if (!fs.existsSync(projectsPath)) {
  console.error('projects.json not found at', projectsPath);
  process.exit(1);
}

const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf-8'));
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  for (const p of projects) {
    try {
      const page = await context.newPage();
      console.log(`Navigating to ${p.url}`);
      const response = await page.goto(p.url, { waitUntil: 'networkidle', timeout: 30000 });
      if (!response || response.status() >= 400) {
        console.warn(`Warning: got status ${response?.status() || 'no response'} for ${p.url}`);
      }
      // allow some rendering time for lazy-loaded images/scripts
      await page.waitForTimeout(1000);

      const slug = p.slug;
      const outFile = path.join(outDir, `${slug}.png`);
      await page.screenshot({ path: outFile, fullPage: false });
      console.log('Saved', outFile);
      await page.close();
    } catch (err) {
      console.error('Error capturing', p.url, err.message || err);
    }
  }
  await browser.close();
  console.log('Done fetching screenshots with Playwright.');
})();
