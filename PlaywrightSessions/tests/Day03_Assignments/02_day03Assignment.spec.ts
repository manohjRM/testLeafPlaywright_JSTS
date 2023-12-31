import {chromium, test} from '@playwright/test';

test('To create the new lead', async () =>{
    //Launch the browser
    const browser = await chromium.launch({headless: false});
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();

    //goto the app link
    await page.goto('http://leaftaps.com/opentaps/control/main');
    const username = page.locator('#username');
    const password = page.locator('#password');

    //login to the app
    await username.fill("Demosalesmanager");
    await password.fill('crmsfa');
    await page.locator('[type="submit"]').click();
    await page.waitForLoadState('load');

    //Navigate to the CRM page
    await page.locator('#button').click();
    await page.waitForLoadState('load');

    //Navigate to the Leads page
    await page.getByRole('link', { name: 'Leads' }).click();
    await page.waitForLoadState('load');

    //Navigate to the Create lead page
    await page.getByRole('link', {name:'Create Lead'}).click();
    await page.waitForLoadState('load');

    //Create new lead
    await page.locator('#createLeadForm_companyName').fill('Power Tech');
    await page.locator('#createLeadForm_firstName').fill('Power');
    await page.locator('#createLeadForm_lastName').fill('Tech');
    await page.locator('[value="Create Lead"]').click();

    await page.waitForTimeout(5000);
})