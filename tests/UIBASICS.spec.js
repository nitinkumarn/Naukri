const { test, expect } = require('@playwright/test');
const fs = require('fs');

test('Naukri Login', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.naukri.com/nlogin/login");
  await page.locator('#usernameField').fill("nitinkumarsuccess@gmail.com");
  await page.locator('#passwordField').fill("Nitink@1995");
  await page.locator('button.waves-effect.waves-light.btn-large.btn-block.btn-bold.blue-btn.textTransform[type="submit"]').click();
  await page.locator('[href="/mnjuser/profile"]').click();
  await page.locator('[class="icon edit "]').click();
  await page.locator('#name').fill('Nitinkumar N');
  await page.locator('#saveBasicDetailsBtn').click();
  await console.log("Naukri Login & update Successful");

  // Capture full-page screenshot with date and time
  const date = new Date();
  const formattedDate = date.toISOString().replace(/:/g, '-'); // Replace colons to avoid issues in filenames
  await page.screenshot({ path: `screenshot-${formattedDate}.png`, fullPage: true });
});

test('Page First PlayWright Test', async ({ page }) => {
  await page.goto("https://google.com");
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");

  // Capture full-page screenshot with date and time
  const date = new Date();
  const formattedDate = date.toISOString().replace(/:/g, '-'); // Replace colons to avoid issues in filenames
  await page.screenshot({ path: `screenshot-${formattedDate}.png`, fullPage: true });
});

test('Ds Naukri Login', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.naukri.com/nlogin/login");
  await page.locator('#usernameField').fill("deepikabu1998@gmail.com");
  await page.locator('#passwordField').fill("DeepikaUmesh@098");
  await page.locator('button.waves-effect.waves-light.btn-large.btn-block.btn-bold.blue-btn.textTransform[type="submit"]').click();
  await page.locator('[href="/mnjuser/profile"]').click();
  await page.locator('[class="icon edit "]').click();
  await page.locator('#name').fill('Deepika B U');
  await page.locator('#saveBasicDetailsBtn').click();
  await console.log("D's Naukri Login & update Successful");

  // Capture full-page screenshot with date and time
  const date = new Date();
  const formattedDate = date.toISOString().replace(/:/g, '-'); // Replace colons to avoid issues in filenames
  await page.screenshot({ path: `screenshot-${formattedDate}.png`, fullPage: true });
});