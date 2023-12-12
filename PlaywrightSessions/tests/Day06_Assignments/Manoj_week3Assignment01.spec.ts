import {chromium, expect, test} from '@playwright/test';
/*
Assignment: Add new Sales account
Test Steps:
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Accounts tab 
5. Click on New button
6. Enter 'your name' as account name
7. Select Ownership as Public                                               
8. Click save and verify Account name 
*/
test("To add new account under sales", async({page}) => {
    const url = 'https://login.salesforce.com/';

    //Login to https://login.salesforce.com
    await page.goto(url);
    await page.waitForLoadState('load');
    await page.locator('#username').fill("manofjoy0506@gmail.com")
    await page.locator('#password').fill('Welcome@123');
    await page.locator('#Login').click();

    //Click on toggle menu button from the left corner
    //Lanch the app menu
    try {
        let eleAppLaunch =  page.locator('div.slds-icon-waffle');
        await expect(eleAppLaunch).toBeVisible({timeout: 120000});
        await eleAppLaunch.click();
    } catch (error) {
        console.log("The page is not loaded")
        console.log(error);
        await page.waitForLoadState('load');
        await page.reload();
    }
    await page.waitForLoadState('load');
    let viewAll = page.locator('[aria-label="View All Applications"]');
    await expect(viewAll).toBeVisible({timeout: 120000});
    await viewAll.click();
    await page.waitForLoadState('load');

    //click Sales from App Launcher
    await page.locator('//p[text()="Sales"]').click();
    await page.waitForLoadState('load');

    //Click on Accounts tab
    await page.locator('//a//span[text()="Accounts"]').click();
    await page.waitForLoadState('load');

    //Click on New button
    await page.locator('a[title="New"]').click();
    await page.locator('input[required]').fill('Manoj R M');

    //Select Ownership as Public
    await page.locator('[aria-label$="Ownership, --None--"]').click();
    await page.locator('[title="Public"]').click();

    //Click save and verify Account name 
    await page.locator('[name="SaveEdit"]').click();
    let accountName = await page.locator('.toastMessage a div[title]').innerText();
    console.log(accountName);
    
    expect(accountName).toBe("Manoj R M");
});