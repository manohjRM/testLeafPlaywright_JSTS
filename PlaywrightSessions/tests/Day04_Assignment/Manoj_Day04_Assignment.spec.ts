import {chromium, expect, test} from '@playwright/test';
/*
Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab 
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the CompanyName 
9. Click Save and Verify Leads name created
*/
test("To Create Lead", async({page}) => {
    const url = 'https://login.salesforce.com/';
    await page.goto(url);
    await page.waitForLoadState('load');
    await page.locator('#username').fill("manofjoy0506@gmail.com")
    await page.locator('#password').fill('Welcome@123');
    await page.locator('#Login').click();
    await page.goto('https://softworkstechnologies-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home');
    await page.getByRole('button', { name: 'App Launcher' }).click();
    // await page.getByRole('button', {name: 'View All' });
    await page.waitForLoadState('domcontentloaded');
    await page.getByLabel('View All Applications').click();
    await page.waitForTimeout(5000);
    await page.getByRole("link", {name: 'Sales'}).click();
    // await page.locator('text=Sales').click();
    await page.waitForTimeout(5000);
    await page.getByRole("link", {name: 'Leads'}).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'New' }).click();
    await page.waitForLoadState('load');
    await page.getByRole('option', { name: 'Mr.' }).locator('span').nth(1).click();
    await page.getByPlaceholder('First Name').click();
    await page.getByPlaceholder('First Name').fill('Manoj Kumar');
    await page.getByPlaceholder('First Name').press('Tab');
    await page.getByPlaceholder('Last Name').fill('Manian');
    await page.getByPlaceholder('Last Name').press('Tab');
    await page.getByLabel('*Company').click();
    await page.getByLabel('*Company').fill('Power Tech');
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    const leadName = await page.locator('lightning-formatted-name').innerText();
    console.log(leadName);
})

/*
test('test', async ({ page }) => {
  await page.goto('https://login.salesforce.com/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('manofjoy0506@gmail.com');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('Welcome@123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.goto('https://softworkstechnologies-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home');
  await page.getByRole('button', { name: 'App Launcher' }).click();
  await page.getByLabel('View All Applications').click();
  await page.getByRole('link', { name: 'Sales', exact: true }).click();
  await page.getByRole('link', { name: 'Leads' }).click();
  await page.getByRole('button', { name: 'New' }).click();
  await page.getByLabel('Salutation, --None--').click();
  await page.getByRole('option', { name: 'Mr.' }).locator('span').nth(1).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Manoj Kumar');
  await page.getByPlaceholder('First Name').press('Tab');
  await page.getByPlaceholder('Last Name').fill('Manian');
  await page.getByPlaceholder('Last Name').press('Tab');
  await page.getByLabel('*Company').click();
  await page.getByLabel('*Company').fill('Power Tech');
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('lightning-formatted-name').click();
});
*/