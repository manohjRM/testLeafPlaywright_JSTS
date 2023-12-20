import {expect, test} from '@playwright/test';
import exp from 'constants';
import path from "path";

test('SalesForce -Accounts (upload files)', async ({page})=>{
    const url = 'https://login.salesforce.com/';

    //Login to https://login.salesforce.com
    await page.goto(url);
    await page.waitForLoadState('load');
    await page.locator('#username').fill("manofjoy0506@gmail.com")
    await page.locator('#password').fill('Welcome@123');
    await page.locator('#Login').click();

    //Click on toggle menu button from the left corner
    //Lanch the app menu
    let eleAppLaunch =  page.locator('div.slds-icon-waffle');
    try {
        await expect(eleAppLaunch).toBeVisible({timeout: 120000});
        await eleAppLaunch.click();
    } catch (error) {
        console.log("The page is not loaded")
        console.log(error);
        await page.waitForLoadState('load');
        await page.reload();
        await expect(eleAppLaunch).toBeVisible({timeout: 120000});
        await eleAppLaunch.click();
    }
    await page.waitForLoadState('load');
    let viewAll = page.locator('[aria-label="View All Applications"]');
    await expect(viewAll).toBeVisible({timeout: 120000});
    await viewAll.click();
    await page.waitForLoadState('load');

    //Search for Accounts and click the Accounts link
    await page.locator('one-app-launcher-modal input.slds-input').fill('Accounts');
    await page.locator('p mark').click();
    await page.waitForLoadState('load');

    //Select the first account
    await page.locator('table[role="grid"] tbody tr th span a').first().click();
    await page.waitForLoadState('load')

    const uploadFile = 'Salesforce-Chatter.pdf';

    //Upload the file
    await page.locator('lightning-primitive-input-file label span, [title="Upload Files"]').first().setInputFiles([path.join(__dirname, 'Salesforce-Chatter.pdf')]);

    await page.waitForTimeout(60000);

    await page.waitForSelector('//button//span[text()="Done"]');

    await page.getByRole('button', {name: 'Done'}).click();

    //Verify the uploaded file name
    const fileName = page.locator('.filerow [data-aura-class="uiOutputText"]').first();

    expect(fileName).toContainText('Salesforce-Chatter');
})