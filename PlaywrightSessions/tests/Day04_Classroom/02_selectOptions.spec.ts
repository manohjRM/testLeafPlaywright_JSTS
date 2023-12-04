import {chromium, test} from '@playwright/test';

test('To create the new lead', async () =>{
    //Launch the browser
    const browser = await chromium.launch({headless: false});
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();

    //goto the app link
    await page.goto('http://leaftaps.com/opentaps/control/main');
    //getByLable
    const uname = page.getByLabel('username');
    //using attribute
    const pwd = page.locator('[name="PASSWORD"]');
    await uname.fill("Demosalesmanager");
    await pwd.fill('crmsfa');
    //using classname
    await page.locator('.decorativeSubmit').click();
    await page.waitForLoadState('load');
    //Navigate to the CRM page
    const crm = await page.locator('#button').innerText();
    console.log(crm)
    //getByText
    await page.getByText(crm).click();
    await page.waitForLoadState('load');
    await page.getByRole('link', { name: 'Leads' }).click();
    await page.waitForLoadState('load');
    await page.getByRole('link', {name:'Create Lead'}).click();
    await page.waitForLoadState('load');
    await page.locator('#createLeadForm_companyName').fill('Power Tech');
    await page.locator('#createLeadForm_firstName').fill('Power');
    await page.locator('#createLeadForm_lastName').fill('Tech');

    //Choose 'Computer Software' from the Industry dropdown using value
    await page.selectOption('#createLeadForm_industryEnumId', {label: 'Computer Software'});
    //Choose 'Partnership' from the Ownership dropdown using index
    await page.selectOption('#createLeadForm_ownershipEnumId', {value: 'OWN_PARTNERSHIP'});
    //Choose 'Direct Mail' from the Source dropdown using option
    await page.selectOption('#createLeadForm_dataSourceId', {index: 3});

    await page.locator('.smallSubmit').click();
    const status = await page.locator('#viewLead_statusId_sp').innerText();//getting the status of the lead
    console.log(status);//print the status of the lead
    await page.waitForTimeout(5000);
})