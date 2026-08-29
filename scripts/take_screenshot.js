const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

async function main() {
  const browserPath = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
    ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    : 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

  const browser = await puppeteer.launch({
    executablePath: browserPath,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1536,960'],
    defaultViewport: { width: 1536, height: 960, deviceScaleFactor: 1.5 }
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
  
  // If preloader Skip button exists, click it and wait for fade out
  try {
    const skipBtn = await page.$('button[title="Skip Intro"]');
    if (skipBtn) {
      await skipBtn.click();
      await new Promise((r) => setTimeout(r, 1200));
    }
  } catch (e) {}

  // Wait a bit for ThreeJS, shaders, and animations to settle
  await new Promise((r) => setTimeout(r, 2000));

  const outputDir = path.resolve('C:\\Users\\User\\.gemini\\antigravity-ide\\brain\\9bdfe94b-3bf7-47a2-be9c-e8a4d19a6bb8');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = path.join(outputDir, 'current_hero.png');
  await page.screenshot({ path: outputPath, fullPage: false });

  console.log('Screenshot saved to:', outputPath);
  await browser.close();
}

main().catch(err => {
  console.error('Error taking screenshot:', err);
  process.exit(1);
});
