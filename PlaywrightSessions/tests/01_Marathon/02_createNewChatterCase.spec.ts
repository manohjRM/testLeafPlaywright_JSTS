import {test, expect} from '@playwright/test';

test('Create and verify a New Case in Chatter', async ({page})=>{
    const url = 'https://login.salesforce.com/';
    const username = 'manofjoy0506@gmail.com';
    const password = 'Welcome@123';
    const leadSalutation = 'Mr.';
    const leadFirstname = 'Kevin';
    const leadLastName = 'Martin';
    const leadCompany = 'Mozilla';

    //Login to https://login.salesforce.com
    await page.goto(url);
    await page.waitForLoadState('load');
    await page.locator('#username').fill(username)
    await page.locator('#password').fill(password);
    await page.locator('#Login').click();

    //Open the app launcher menu
    let eleAppLaunch =  page.locator('div.slds-icon-waffle');
    try {
        await expect(eleAppLaunch).toBeVisible();
        
        await eleAppLaunch.click();
    } catch (error) {
        console.log("The page is not loaded")
        console.log(error);
        await page.waitForLoadState('load');
        await page.reload();
        await expect(eleAppLaunch).toBeVisible();
        await eleAppLaunch.click();
    }

    //Click the view all link text
    let viewAll = page.locator('//button[text()="View All"]');
    await expect(viewAll).toBeVisible({timeout: 150000});
    await viewAll.click();

    //Search the "Service" option
    await page.locator('one-app-launcher-modal input.slds-input').fill('Service');
    await page.locator('one-app-launcher-app-tile').first().click();
    await page.waitForLoadState('load');
    
    //Navigate to Cases page
    await page.getByRole('link', {name: 'Cases'}).click();
    await page.waitForLoadState('load');

    //Create New lead
    await page.getByRole('button', {name: 'New', exact: true}).click();
    await page.waitForLoadState('load');

    //Search for the contacts and create new contact
    await page.locator('[placeholder="Search Contacts..."]').click();
    await page.waitForLoadState('load');
    await page.locator('[title="New Contact"]').click();
    await page.locator('//span[text()="Salutation"]//following::a[1]').click();
    await page.getByRole('menuitemradio', { name: leadSalutation }).click();
    await page.locator('//span[text()="First Name"]//following::input[1]').fill(leadFirstname);
    await page.locator('//span[text()="Last Name"]//following::input[1]').fill(leadLastName);
    await page.locator('button[title="Save"]').click();
    await page.waitForLoadState('load');

    //Verifying the success message on creating new contact
    // await expect(page.locator('[aria-label="Success"]')).toBeVisible();

    //Search for the accounts and create new account
    // await page.locator('[placeholder="Search Accounts..."]').click();
    await page.getByRole('combobox', { name: 'Account Name' }).click();
    await page.waitForLoadState('load');
    await page.locator('[title="New Account"]').click();
    await page.locator('//span[text()="Account Name"]//following::input[1]').fill(leadCompany);
    await page.locator('//span[text()="Account Number"]//following::input[1]').fill('960886254');
    await page.locator('//span[text()="Rating"]//following::a[1]').click();
    await page.getByRole('menuitemradio', { name: 'Hot' }).click();
    await page.locator('button[title="Save"]').click();
    await page.waitForLoadState('load');

    //Verifying the success message on creating new account
    // await expect(page.locator('[aria-label="Success"]')).toBeVisible();

    //Creating new case
    await page.locator('//label[text()="Status"]//following::button[1]').click();
    await page.getByRole('option', { name: 'New' }).click();
    await page.locator('//label[text()="Priority"]//following::button[1]').click();
    await page.getByRole('option', { name: 'High' }).click();
    await page.locator('//label[text()="Case Origin"]//following::button[1]').click();
    await page.getByRole('option', { name: 'Email' }).click();
    await page.locator('//label[text()="Subject"]//following::input[1]').fill('Product Return Request');
    await page.locator('//label[text()="Description"]//following::textarea[1]').fill('Requesting a return for a defective product');
    await page.locator('button[name="SaveEdit"]').click();
    await page.waitForLoadState('load');

    //Verifying the success message on creating new case
    // await expect(page.locator('[aria-label="Success"]')).toBeVisible();

    //Edit status of the status
    await page.locator('[title="Edit Status"]').click();
    await page.waitForLoadState('load');

    //Save the case with escalated status
    await page.locator('//label[text()="Status"]//following::button[1]').click();
    await page.getByRole('option', { name: 'Escalated' }).click();
    await page.locator('[name="SaveEdit"]').click();
    await page.waitForLoadState('load');

    //Sharing the update
    let update = 'Case got escaleted';
    await page.waitForTimeout(7000);
    // await page.locator('[title="Share an update..."]').click();
    // await page.getByRole('tabpanel', {name: "Share an update..."}).click({clickCount: 2});
    await page.locator('section[role="tabpanel"]').filter({hasText: 'Share an update...'}).first().click();
    await page.waitForTimeout(5000);
    await page.locator('[role="textbox"]').fill(update);
    await page.getByRole('button', {name: 'Share'}).click();
    await page.waitForLoadState('load');

    //Giving like for the new feed in the case
    // await page.locator('.inFeed div button').first().click();
    await page.locator('a').filter({ hasText: 'Actions for this Feed Item' }).first().click();
    await page.getByRole('menuitem', { name: 'Like on Chatter' }).click();
    await page.waitForLoadState('load');

    //Verifying the success message on the sharing the update
    const successText = await page.locator('[aria-label="Success"]').innerText();
    console.log(successText);
    
    expect(successText).toContain('Post was liked.');

    //Navigating to Chatter
    await page.getByRole('link', {name: 'Chatter'}).click();
    await page.waitForLoadState('load');

    //Verifying shared message under chatter
    const updateActual = await page.locator('.forceChatterFeedItem .oneApp').first().innerText();
    console.log(updateActual);
    
    expect(updateActual).toBe(update);
})