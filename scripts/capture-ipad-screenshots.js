const { chromium } = require("playwright");
const fs = require("fs");

const output = "ipad-screenshots";
fs.mkdirSync(output, { recursive: true });

const pause = (ms = 450) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1032, height: 1376 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    colorScheme: "light",
    locale: "en-GB"
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4173/index.html", { waitUntil: "networkidle" });
  await pause(700);

  const shot = async name => {
    await page.screenshot({ path: `${output}/${name}.png`, fullPage: false });
  };

  await page.locator('button[data-subject="Space"]').click();
  await pause();
  await shot("01-home-ipad-2064x2752");

  await page.locator('.nav-item[data-screen="exploreScreen"]').click();
  await pause();
  await shot("02-explore-ipad-2064x2752");

  await page.locator('.nav-item[data-screen="homeScreen"]').click();
  await page.locator("#startButton").click();
  await pause();
  await shot("03-lesson-ipad-2064x2752");

  await page.locator("#sourceButton").click();
  await pause();
  await shot("04-sources-ipad-2064x2752");
  await page.locator("#closeSheet").click();
  await pause(250);

  await page.locator("#nextButton").click();
  await pause(250);
  await page.locator("#nextButton").click();
  await pause(250);
  await page.locator("#nextButton").click();
  await pause(350);
  await page.locator(".answer").first().click();
  await pause(250);
  await page.locator("#finishButton").click();
  await pause();
  await shot("05-complete-ipad-2064x2752");

  await browser.close();
})();
