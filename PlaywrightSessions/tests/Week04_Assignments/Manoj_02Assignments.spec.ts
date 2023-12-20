import {expect, test} from '@playwright/test';

test('ServiceNow -Ordering Mobile(Frames)', async ({page})=>{

    //Login to snow instance
    await page.goto('https://dev228499.service-now.com/');
    const username = 'admin';
    const password = 'sD!A3pdL8eW*';

    await page.locator('#user_name').fill(username);
    await page.locator('#user_password').fill(password);

    await page.locator('#sysverb_login').click();
    await page.waitForLoadState('load');

    //Navigate to the Service catalog
    await page.getByPlaceholder('Filter').fill('Service Catalog', {timeout: 15000});
    await page.waitForTimeout(2000);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);

    //Switch to service catalog frame
    const serviceCatalog = page.frame('gsft_main');

    //Select the Mobiles
    await serviceCatalog?.locator('h2').filter({hasText: 'Mobiles'}).click({timeout: 7500});

    //Select the Apple mobile
    await serviceCatalog?.getByRole('link', {name:'Apple iPhone 13 pro'}).click();

    //Fill up the order form
    // await serviceCatalog?.getByLabel('Yes').check();
    await serviceCatalog?.locator('.radio-label').filter({hasText: 'Yes'}).click();

    await serviceCatalog?.locator('.sc-content-pad').fill('9876543210');

    await serviceCatalog?.selectOption('select[class*="form-control cat_item_option"]', {value: 'unlimited'});

    // await serviceCatalog?.getByLabel('Sierra Blue').check();
    await serviceCatalog?.locator('.radio-label').filter({hasText: 'Sierra Blue'}).click();

    // await serviceCatalog?.getByLabel('512 GB [add $300.00]').check();
    await serviceCatalog?.locator('.radio-label').filter({hasText: '512 GB [add $300.00]'}).click();

    await serviceCatalog?.getByRole('button', {name: 'Order Now'}).click();
    await page.waitForLoadState('load');

    //Verify the success message
    const confirmText = await serviceCatalog?.locator('span[aria-live="assertive"]').innerText({timeout: 8000});

    expect(confirmText).toBe('Thank you, your request has been submitted');

})