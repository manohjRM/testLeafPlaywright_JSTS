import { test, expect, devices, chromium } from '@playwright/test';

test.use({
  ...devices['iPad Mini']
})

test('test', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
      ...devices['iPhone 14 Pro']
  })
  await page.goto('https://www.google.com/');
  await page.locator('.SDkEP, #mib').isVisible({timeout: 5000});
  await page.locator('.SDkEP, #mib').click();
  await page.locator('.SDkEP, #mib').fill('testleaf');
  await page.keyboard.press('Enter');
  let testleaf = page.locator("getByRole('link', { name: 'Testleaf: Selenium Training' })").innerText();
  expect(testleaf).toContain('Testleaf');
});