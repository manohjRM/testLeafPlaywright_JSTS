import {test, expect, BrowserContext} from '@playwright/test';

test('Handle the new window', async ({page, context})=>{
    const url = 'https://login.salesforce.com/';
    const username = 'manofjoy0506@gmail.com';
    const password = 'Welcome@123';

    //Login to https://login.salesforce.com
    await page.goto(url);
    await page.waitForLoadState('load');
    await page.locator('#username').fill(username)
    await page.locator('#password').fill(password);
    await page.locator('#Login').click();

    //Open the app launcher menu
    let mobilePageButton =  page.locator('[title="Learn More"]');
    try {
        await expect(mobilePageButton).toBeVisible({timeout: 150000});
    } catch (error) {
        console.log("The page is not loaded")
        console.log(error);
        await page.waitForLoadState('load');
        await page.reload();
        await expect(mobilePageButton).toBeVisible();
    }

    const [mobilePage] = await Promise.all([
        context.waitForEvent('page'),
        // page.locator('tileHelp').filter({hasText: 'Mobile Publisher'}).locator('[title="Learn More"]').click()
        page.locator('[title="Learn More"]').click()
    ])

    await mobilePage.getByRole('button', {name: 'Confirm'}).click();
    const mobilePageTitle = await mobilePage.title();
    console.log(mobilePage.url());
    await page.waitForLoadState('load');
    console.log(mobilePageTitle);
    
})