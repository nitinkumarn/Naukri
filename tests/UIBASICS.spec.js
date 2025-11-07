const { test, expect } = require('@playwright/test');
const fs = require('fs');

test('Naukri Login', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.naukri.com/nlogin/login");

  // Wait for username field to be visible
  await page.waitForSelector('#usernameField', { state: 'visible', timeout: 60000 });
  await page.locator('#usernameField').fill("nitinkumarsuccess@gmail.com");

  // Wait for password field to be visible
  await page.waitForSelector('#passwordField', { state: 'visible', timeout: 60000 });
  await page.locator('#passwordField').fill("Nitink@1995");

  // Wait for login button to be enabled
  await page.waitForSelector('button.waves-effect.waves-light.btn-large.btn-block.btn-bold.blue-btn.textTransform[type=\"submit\"]', { state: 'visible', timeout: 60000 });
  await page.locator('button.waves-effect.waves-light.btn-large.btn-block.btn-bold.blue-btn.textTransform[type=\"submit\"]').click();

  // Wait for profile link after login
  await page.waitForSelector('a[href="/mnjuser/profile"]:has-text("View profile")', { state: 'visible', timeout: 60000 });
  await page.locator('a[href="/mnjuser/profile"]:has-text("View profile")').click();

  // Handle file upload for resume
  const fileChooserPromise = page.waitForEvent('filechooser');
  await page.locator("input[value='Update resume']").click();
  const fileChooser = await fileChooserPromise;
  // Using resume file from the tests directory
  await fileChooser.setFiles(__dirname + '/Nitinkumar_resume.pdf');
  
  // Wait for and verify the success message
  await page.waitForSelector('text=Success', { state: 'visible', timeout: 30000 });
  const successMessage = await page.locator('text=Resume has been successfully uploaded.').textContent();
  console.log('Resume upload status:', successMessage);
  
  // Add assertion to verify success
  expect(successMessage).toBe('Resume has been successfully uploaded.');

  await page.locator('[class="icon edit "]').click();
  await page.locator('#name').fill('Nitinkumar N');
  await page.locator('#saveBasicDetailsBtn').click();
  await console.log("Naukri Login & update Successful");
}, 120000); // Set test timeout to 2 minutes

// test('Page First PlayWright Test', async ({ page }) => {
//   await page.goto("https://google.com");
//   console.log(await page.title());
//   await expect(page).toHaveTitle("Google");

//   // Capture full-page screenshot with date and time
//   const date = new Date();
//   const formattedDate = date.toISOString().replace(/:/g, '-'); // Replace colons to avoid issues in filenames
//   await page.screenshot({ path: `screenshot-${formattedDate}.png`, fullPage: true });
// });

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
});