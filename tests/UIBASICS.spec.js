const { test, expect } = require('@playwright/test');

test('Naukri Login', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  // Close all pop-ups
  page.on('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.dismiss();
  });

  await page.goto("https://www.naukri.com/nlogin/login");
  await page.locator('//input[@placeholder="Enter your active Email ID / Username"]').fill("nitinkumarsuccess@gmail.com");
  await page.locator('#passwordField').fill("Nitink@1995");
  await page.locator('//button[normalize-space()="Login"]').click();
  await page.locator('[href="/mnjuser/profile"]').click();
  await page.locator('[class="icon edit "]').click();
  await page.locator('#name').fill('Nitinkumar N');
  await page.locator('#saveBasicDetailsBtn').click();
});

test('Page First PlayWright Test', async ({ page }) => {
  await page.goto("https://google.com");
  console.log(await page.title());
  await expect(page).toHaveTitle("Google");
});

test('Naukri Another Login', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  // Close all pop-ups
  page.on('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.dismiss();
  });

  await page.goto("https://www.naukri.com");
  await page.locator('a.nI-gNb-lg-rg__login').click();
  await page.locator('//input[@placeholder="Enter your active Email ID / Username"]').fill("nitinkumarsuccess@gmail.com");
  await page.locator('//input[@placeholder="Enter your password"]').fill("Nitink@1995");
  await page.locator('//button[normalize-space()="Login"]').click();
  await page.locator('[href="/mnjuser/profile"]').click();
  await page.locator('[class="icon edit "]').click();
  await page.locator('#name').fill('Nitinkumar N');
  await page.locator('#saveBasicDetailsBtn').click();
});