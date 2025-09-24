import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.naukri.com/nlogin/login');
  await page.getByPlaceholder('Enter Email ID / Username').click();
  await page.getByPlaceholder('Enter Email ID / Username').fill('nitinkumarsuccess@gmail.com');
  await page.getByPlaceholder('Enter Password').click();
  await page.getByPlaceholder('Enter Password').fill('Nitink@1995');
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await page.getByRole('link', { name: 'View profile' }).click();
  await page.locator('em').filter({ hasText: 'editOneTheme' }).click();
  await page.getByPlaceholder('Enter Your Name').click();
  await page.getByPlaceholder('Enter Your Name').fill('Nitinkumar N');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
});