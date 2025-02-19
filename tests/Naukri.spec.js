const { test, expect } = require('@playwright/test');

test('Page PlayWright Test', async ({ browser }) => {
  // Create a new context with a large viewport size to maximize the browser window
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  // Navigate to Naukri Application
  await page.goto('https://www.naukri.com/');

  // Function to close popups
  async function closePopups(page) {
    const popupSelectors = [
      'div[class*="popup"] button[class*="close"]', // Example selector for popup close button
      'div[class*="modal"] button[class*="close"]', // Example selector for modal close button
      'svg.Bz112c.Bz112c-r9oPif', // Selector for Google Sign-in popup close button
      // Add more selectors as needed
    ];

    for (const selector of popupSelectors) {
      while (await page.isVisible(selector)) {
        await page.click(selector);
      }
    }
  }

  // Close any popups that appear
  await closePopups(page);

  // Select Login
  await page.click('#login_Layer');

  // Enter Credentials
  await page.fill('input[placeholder*="Username"]', 'nitinkumarsuccess@gmail.com');
  await page.fill('input[placeholder*="password"]', 'Nitink@1995');

  // Close any popups that appear
  await closePopups(page);

  // Select Login Button
  await page.click('button:text("Login")');

  // Verify Alert Message
  const alertMessage = await page.isVisible('div[class*="server-err"]');
  if (alertMessage) {
    const alertText = await page.textContent('div[class*="server-err"]');
    console.log('Alert Message:', alertText);
  }

  // Verify Logo is Present
  const logoIsPresent = await page.isVisible('img[alt="Naukri Logo"]:nth-of-type(1)');
  console.log('Logo is present:', logoIsPresent);

  
  await page.locator('[href="/mnjuser/profile"]').click();
  await page.locator('[class="icon edit "]').click();
  await page.locator('#name').fill('Nitinkumar N');
  await page.locator('#saveBasicDetailsBtn').click();
  await console.log("Naukri Login & update Successful");

  // Close the context and browser
  await context.close();
});