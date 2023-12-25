import {test, expect} from '@playwright/test';
import loginSalesForce from "./loginSalesForce.json";
import {getAccessToken} from "./auth_helper.spec";

let access_token: any;
let instance_url: any;
let leadID: any;
const leadSalutation = 'Mr.';
const leadFirstname = 'Kevin';
const leadLastName = 'Martin';

test('Get access token', async ()=>{
    const authDetails = await getAccessToken();
    access_token = authDetails.accessToken;
    instance_url = authDetails.inst_url;
});

test('Create new lead', async({request})=>{
    const leadResponse = await request.post(`${instance_url}/services/data/v59.0/sobjects/Lead`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`
        },
        data:{
            "Salutation": leadSalutation,
            "lastName": leadLastName,
            "Company": "Rollce Roys"
        }
    });
    const leadBody = await leadResponse.json();
    leadID = leadBody.id;
    console.log(`Lead created: ${leadID}`);
    console.log(leadResponse.status());
})

test('Update new lead', async({request})=>{
    const leadResponse = await request.patch(`${instance_url}/services/data/v59.0/sobjects/Lead/${leadID}`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`
        },
        data:{
            "firstName": leadFirstname,
            "Title": "Senior QA",
        }
    });
    console.log(`Lead updated: ${leadID}`);
    console.log(leadResponse.status());
})

test("Delete Leads", async({page}) => {

    //Login to https://login.salesforce.com
    await page.goto(loginSalesForce.url);
    await page.waitForLoadState('load');
    await page.locator('#username').fill(loginSalesForce.username)
    await page.locator('#password').fill(loginSalesForce.password);
    await page.locator('#Login').click();

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

    await page.locator('one-app-launcher-modal input.slds-input').fill('Leads');
    await page.locator('p mark').click();
    await page.waitForLoadState('load');

    //Verify the Lead name
    let expectLeadName = `${leadFirstname} ${leadLastName}`

    let leadName =  page.locator('table[role] tbody tr th span a').filter({hasText: expectLeadName});
    await leadName.isVisible();
    await leadName.click();

    await page.waitForLoadState('load');

    await page.locator('lightning-button-menu.menu-button-item button').click();
    await page.locator('//span[text()="Delete"]').click();

    await page.getByRole('button', {name: 'Delete'}).click();

    await page.waitForTimeout(6000);

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

});