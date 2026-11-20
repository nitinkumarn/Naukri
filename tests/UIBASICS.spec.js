const { test, expect } = require('@playwright/test');
const fs = require('fs');

test('Naukri Login', async ({ browser }) => {
  test.setTimeout(120000);
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
  await page.waitForSelector('button.waves-effect.waves-light.btn-large.btn-block.btn-bold.blue-btn.textTransform[type="submit"]', { state: 'visible', timeout: 60000 });
  await page.locator('button.waves-effect.waves-light.btn-large.btn-block.btn-bold.blue-btn.textTransform[type="submit"]').click();

  // Wait for profile link after login
  await page.waitForSelector('a[href="/mnjuser/profile"]:has-text("View profile")', { state: 'visible', timeout: 60000 });
  await page.locator('a[href="/mnjuser/profile"]:has-text("View profile")').click();

  // Handle file upload for resume
  const fileChooserPromise = page.waitForEvent('filechooser');
  await page.locator("input[value='Update resume']").click();
  const fileChooser = await fileChooserPromise;
  // Using resume file from the tests directory
  await fileChooser.setFiles(__dirname + '/Nitinkumar_Resume.pdf');
  
  // Wait for and verify the success message
  await page.waitForSelector('text=Success', { state: 'visible', timeout: 30000 });
  const successMessage = await page.locator('text=Resume has been successfully uploaded.').textContent();
  console.log('Resume upload status:', successMessage);
  
  // Add assertion to verify success
  expect(successMessage).toBe('Resume has been successfully uploaded.');

  // Open Basic Details edit using the same stable pattern as Ds Naukri Login.
  const editBasicDetails = page.locator('[class*="edit"]:visible').first();
  await editBasicDetails.waitFor({ state: 'visible', timeout: 60000 });
  await editBasicDetails.click();

  const nameField = page.getByRole('textbox', { name: /Name/i }).first();
  await nameField.waitFor({ state: 'attached', timeout: 60000 });
  await nameField.waitFor({ state: 'visible', timeout: 60000 });
  await nameField.fill('Nitinkumar N');

  const saveButton = page.getByRole('button', { name: 'Save', exact: true }).last();
  await saveButton.waitFor({ state: 'attached', timeout: 30000 });
  await saveButton.waitFor({ state: 'visible', timeout: 30000 });
  await saveButton.click();

  await expect(nameField).toHaveValue('Nitinkumar N', { timeout: 30000 });
  console.log("Naukri Login & update Successful");
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
  test.setTimeout(120000);
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.naukri.com/nlogin/login", {
    waitUntil: 'domcontentloaded',
  });

  await page.locator('#usernameField').waitFor({ state: 'visible', timeout: 60000 });
  await page.locator('#usernameField').fill("deepikabu1998@gmail.com");

  await page.locator('#passwordField').waitFor({ state: 'visible', timeout: 60000 });
  await page.locator('#passwordField').fill("DeepikaUmesh@098");

  const loginButton = page.getByRole('button', { name: 'Login', exact: true });
  await loginButton.waitFor({ state: 'visible', timeout: 60000 });
  await loginButton.click();

  const profileLink = page.locator('a[href="/mnjuser/profile"]:visible').first();
  await profileLink.waitFor({ state: 'visible', timeout: 60000 });
  await profileLink.click();

  const editBasicDetails = page.locator('[class*="edit"]:visible').first();
  await editBasicDetails.waitFor({ state: 'visible', timeout: 60000 });
  await editBasicDetails.click();

  const nameField = page.getByRole('textbox', { name: /Name/i }).first();
  await nameField.waitFor({ state: 'visible', timeout: 30000 });
  await nameField.fill('Deepika B U');

  await page.locator('#saveBasicDetailsBtn').waitFor({ state: 'visible', timeout: 30000 });
  await page.locator('#saveBasicDetailsBtn').click();

  await expect(page.locator('#name')).toHaveValue('Deepika B U', { timeout: 30000 });
  console.log("D's Naukri Login & update Successful");
});