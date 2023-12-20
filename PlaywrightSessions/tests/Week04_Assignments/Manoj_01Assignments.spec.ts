import {expect, test} from '@playwright/test';

test('Merge Contacts', async ({page, context})=>{
    page.goto('http://leaftaps.com/opentaps/control/login');
    const username = 'Demosalesmanager';
    const password = 'crmsfa';

    //login to the app
    await page.locator('#username').fill(username);
    await page.locator('#password').fill(password);
    await page.locator('[type="submit"]').click();
    await page.waitForLoadState('load');

    //Navigate to the CRM page
    await page.locator('#button').click();
    await page.waitForLoadState('load');

    //Navigate to the Contacts page
    await page.getByRole('link', {name: 'Contacts'}).click();

    //Navigate to the merge contact page
    await page.locator('//a[text()="Merge Contacts"]').click();

    //Select the first contact from Widget of From Contact
    const [fromContactPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('a img[alt="Lookup"]').first().click(),
        await page.waitForLoadState('load')
    ]);

    //Select the First Resulting Contact
    await fromContactPage.locator('tbody tr td div a').first().click();

    //Select the first contact from Widget of To Contact
    const [toContactPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('a img[alt="Lookup"]').last().click(),
        await page.waitForLoadState('load')
    ]);

    //Select the Second Resulting Contact
    await toContactPage.locator('.x-grid3-row').nth(1).locator('tbody tr td div a').first().click();
    // await toContactPage.locator('tbody tr td div a').first().click();

    //Declaring for the accepting the alert
    page.on('dialog', async dialog =>{
        dialog.accept();
    })

    //Merging the contact
    await page.getByRole('link', {name: 'Merge', exact: true}).click();
    await page.waitForLoadState('load');
    console.log(await page.title());
    
    //Verify the title of the contact page
    await expect(page).toHaveTitle(/[^View Contact]/);
})