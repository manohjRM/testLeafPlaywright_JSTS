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
    // await page.getByRole('button', { name: 'App Launcher' }).click();
    await page.reload();
    let eleAppLaunch =  page.locator('button .slds-icon-waffle');
    await expect(eleAppLaunch).toBeVisible({timeout: 150000});
    await eleAppLaunch.click();
    // await page.getByRole('button', {name: 'View All' });
    await page.waitForLoadState('load');
    let viewAll = page.locator('//button[text()="View All"]');
    await expect(viewAll).toBeVisible({timeout: 150000});
    await viewAll.click();

    //Navigate to the Individuals module
    await page.getByRole('link', {name: /Individuals/i}).click();
    ////a//p[text()="Individuals"]
    await page.waitForLoadState('load');
    await page.locator('//span[contains(text(),"Individuals") or contains(text(),"Recently Viewed")]//following::span[text()="More"]//preceding::one-app-nav-bar-menu-button[1]').click();
    await page.waitForLoadState('load');

    //Navigate to the create new individual form
    await page.locator('//a//span[text()="New Individual"]').click();
    await page.waitForLoadState('load');
    await page.locator('//span[text()="Salutation"]//following::a[1]').click();
    await page.getByRole('menuitemradio', { name: 'Mr.' }).click();
    // await page.locator('//span[text()="First Name"]//following::input[1]').fill('Manoj Kumar');
    await page.locator('//span[text()="Last Name"]//following::input[1]').fill('R Manian');
    await page.locator('//button[@title="Save"]').click();

    //Verify the individual name
    expect(page.getByText('Mr. Manoj Kumar Manian')).toBeVisible;
});