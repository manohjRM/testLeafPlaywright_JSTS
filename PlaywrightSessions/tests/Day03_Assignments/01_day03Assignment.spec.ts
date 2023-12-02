import {test, chromium} from '@playwright/test';

test('Login to the Salesforce app', async()=>{
    //launch the browser
    const browser = await chromium.launch({headless: false});
    const browserContext = await browser.newContext();
    //create new page for the browser
    const page = await browserContext.newPage();
    //login to the application
    const url = 'https://login.salesforce.com/';
    await page.goto(url);
    await page.waitForLoadState('load');
    //click, clear and fill the fields
    const uname = page.locator('#username');
    uname.clear();
    await uname.fill("manofjoy0506@gmail.com")
    const pwd = page.locator('#password');
    await pwd.click();
    pwd.clear();
    await pwd.fill('Welcome@123');
    await page.locator('#Login').click();
    //wait for the page state to load
    await page.waitForLoadState('load');
    await page.waitForTimeout(5000);
    //print page url
    console.log(page.url())
    //print page title
    console.log(await page.title())
})