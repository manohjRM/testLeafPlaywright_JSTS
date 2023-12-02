import {chromium, test} from '@playwright/test';

test("To launch the salesforce app", async() => {
    const browser = await chromium.launch({headless: false});
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    const url = 'https://login.salesforce.com/';
    await page.goto(url);
    console.log(page.url())
    console.log(await page.title())
})