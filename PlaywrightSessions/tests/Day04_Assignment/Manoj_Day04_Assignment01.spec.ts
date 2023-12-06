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
    //Login to https://login.salesforce.com
    await page.goto(url);
    await page.waitForLoadState('load');
    await page.locator('#username').fill("manofjoy0506@gmail.com")
    await page.locator('#password').fill('Welcome@123');
    await page.locator('#Login').click();
    //Lanch the app menu
    await page.getByRole('button', { name: 'App Launcher' }).click();
    // await page.getByRole('button', {name: 'View All' });
    await page.waitForLoadState('load');
    await page.getByLabel('View All Applications').click();
    // await page.getByRole("link", {name: /Sales/}).click();
    //Navigate to the sales module
    await page.locator('//p[text()="Sales"]').click();
    await page.waitForLoadState('load');
    await page.locator('//a/span[text()="Leads"]').click();
    await page.waitForLoadState('load');
    //Navigate to the create new lead form
    await page.getByRole('button', { name: 'New' }).click();
    await page.waitForLoadState('load');
    await page.locator("//label[text()='Salutation']//following::button[1]").click();
    await page.getByRole('option', { name: 'Mr.' }).click();
    await page.locator('//label[text()="First Name"]//following::input[1]').fill('Manoj Kumar');
    await page.locator('//label[text()="Last Name"]//following::input[1]').fill('R Manian');
    await page.locator('//label[text()="Company"]//following::input[1]').fill('Power Tech');
    await page.locator('[name="SaveEdit"]').click();
    //Get the Lead name
    const leadName = await page.locator('lightning-formatted-name').innerText();
    console.log(leadName);
    //Verify the Lead name
    expect(leadName).toBe('Mr. Manoj Kumar Manian');
});