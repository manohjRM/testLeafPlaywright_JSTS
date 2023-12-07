import {chromium, expect, test} from '@playwright/test';
/*
Assignment: 3 Create Individuals
Test Steps: 
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name
*/
test("To Create Individuals", async({page}) => {
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
    await page.locator('//button[text()="View All"]').click();

    //Navigate to the Individuals module
    await page.getByRole('link', {name: /Individuals/i}).click();
    //a//p[text()="Individuals"]
    await page.waitForLoadState('load');

    //Search with the last name
    await page.locator('[name="Individual-search-input"]').fill('Manian');
    await page.keyboard.press('Enter');

    //Open the individual record
    await page.locator('//tr[1]//th[@scope="row"]/span/a//following::a[1]').click();
    await page.getByRole('menuitem', { name: 'Edit'}).click();
    await page.locator('//span[text()="First Name"]//following::input[1]').clear();
    await page.locator('//span[text()="First Name"]//following::input[1]').fill('Manoj Kumar');
    await page.locator('//button[@title="Save"]').click();

    //Verify the individual name
    expect(page.getByText('Mr. Manoj Kumar Manian')).toBeVisible;
});