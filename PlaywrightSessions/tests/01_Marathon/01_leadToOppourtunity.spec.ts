import {test, expect} from '@playwright/test';

test('Verify Lead Creation and Conversion to Opportunity', async ({page})=>{
    const url = 'https://login.salesforce.com/';
    const username = 'manofjoy0506@gmail.com';
    const password = 'Welcome@123';
    const leadSalutation = 'Mr.';
    const leadFirstname = 'Kevin';
    const leadLastName = 'Martin';
    const leadCompany = 'Mozilla';
    const opportunityName = 'Mozilla-success';

    //Login to https://login.salesforce.com
    await page.goto(url);
    await page.waitForLoadState('load');
    await page.locator('#username').fill(username)
    await page.locator('#password').fill(password);
    await page.locator('#Login').click();

    //Open the app launcher menu
    let eleAppLaunch =  page.locator('button .slds-icon-waffle');
    await expect(eleAppLaunch).toBeVisible({timeout: 150000});
    await eleAppLaunch.click();
    await page.waitForLoadState('load');

    //Click the view all link text
    let viewAll = page.locator('//button[text()="View All"]');
    await expect(viewAll).toBeVisible({timeout: 150000});
    await viewAll.click();

    //Search the "marketing" option
    await page.locator('one-app-launcher-modal input.slds-input').fill('Marketing');
    await page.locator('one-app-launcher-app-tile').first().click();
    await page.waitForLoadState('load');

    //Navigate to Leads page
    await page.getByRole('link', {name: 'Leads'}).click();

    //Create New lead
    await page.getByRole('button', {name: 'New'}).click();
    await page.waitForLoadState('load');
    await page.locator("//label[text()='Salutation']//following::button[1]").click();

    //Populate the leads form and submit
    await page.getByRole('option', { name: leadSalutation }).click();
    await page.locator('//label[text()="First Name"]//following::input[1]').fill(leadFirstname);
    await page.locator('//label[text()="Last Name"]//following::input[1]').fill(leadLastName);
    await page.locator('//label[text()="Company"]//following::input[1]').fill(leadCompany);
    await page.locator('[name="SaveEdit"]').click();

    //Get the Lead name
    const leadName = await page.locator('lightning-formatted-name').innerText();
    console.log(leadName);

    //Verify the Lead name
    let expectLeadName = `${leadSalutation} ${leadFirstname} ${leadLastName}`
    expect(leadName).toBe(expectLeadName);

    //Open the form to convert the lead to opportunity
    await page.locator('lightning-button-menu.menu-button-item').click();
    await page.locator('//span[text()="Convert"]').click();
    // await page.getByRole('link', {name: 'Convert'}).click();

    //Convert from lead to opportunity
    const eleOpportunity = page.locator('.slds-form-element__control').filter({hasText: "Opportunity"});
    // await eleOpportunity.locator('.createPanel button').click();
    await eleOpportunity.locator('.createPanelCollapsed').click();
    const eleInputOpportunity = eleOpportunity.locator('.createPanelExpanded input');
    await eleInputOpportunity.click();
    await eleInputOpportunity.clear();
    await eleInputOpportunity.fill(opportunityName);
    // await page.getByRole('button', {name: 'Convert'}).click();
    await page.locator('//button[text()="Convert"]').click();

    //Verfiy the success message "Your lead has been converted"
    const confirmMsg = await page.locator('.panel .header h2').innerText();
    expect(confirmMsg).toBe("Your lead has been converted");

    //Navigate to leads tab and verify the records is not available
    await page.getByRole('button', {name: 'Go to Leads'}).click();
    // await page.getByRole('button', {name: "List View"}).click();
    try {
        let flag:any = await expect(page.locator('//button[text()="List View"]')).toBeVisible();
        if (flag==true){
            await page.locator('//button[text()="List View"]').click();
        }
    } catch (error) {
        console.log("Already in list view");
    }

    //Search in list view
    await page.locator('[name="Lead-search-input"]').fill(`${leadFirstname} ${leadLastName}`);
    await page.keyboard.press('Enter');
    //Confirm no items displayed
    await expect(page.getByText('No items to display.')).toBeVisible();

    //Navigate to opportunities tab and verify the converted record present
    await page.getByRole('link', {name: 'Opportunities'}).click();
    //Search for the record under opportunities
    await page.locator('[name="Opportunity-search-input"]').fill(opportunityName);
    await page.keyboard.press('Enter');
    //Verify the record present in the opportunities
    const opportunityNameCheck =  await page.locator('.slds-table--edit_container table tbody th').first().innerText();
    expect(opportunityNameCheck).toBe(opportunityName);
})