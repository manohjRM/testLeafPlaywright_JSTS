import {test, expect} from '@playwright/test';
import loginSalesForce from "./loginSalesForce.json";
import {getAccessToken} from "./auth_helper.spec";

let access_token: any;
let instance_url: any;
let dashboardID: any;

test('Get access token', async ()=>{
    const authDetails = await getAccessToken();
    access_token = authDetails.accessToken;
    instance_url = authDetails.inst_url;
})

test("Create Dashboard", async({page, request}) => {

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

    await page.locator('one-app-launcher-modal input.slds-input').fill('Dashboards');
    await page.locator('p mark').click();
    await page.waitForLoadState('load');

    await page.locator('div[title="New Dashboard"]').click();
    // await page.waitForLoadState('load');
    await page.waitForTimeout(30000);

    // const dashboardFrame = page.frame({url:'https://softworkstechnologies-dev-ed.develop.lightning.force.com/desktopDashboards/dashboardApp.app?dashboardId=newDashboard_1703481658821&displayMode=edit&networkId=000000000000000&userId=0055j00000BSI8dAAH' });
    const dashboardFrame = page.frameLocator('[title="dashboard"]').first();

    await dashboardFrame?.locator('#dashboardNameInput').fill('Manoj\'s Dashboard');
    await dashboardFrame?.locator('#dashboardDescriptionInput').fill('Dashboard for sales')
    await dashboardFrame?.locator('#submitBtn').click();
    await page.waitForLoadState('load');

    await page.waitForTimeout(30000);

    let dashboardName = await dashboardFrame?.locator('.dashboard-properties div span').first().innerText();

    expect(dashboardName).toContain('Manoj\'s Dashboard');
});

test('Get the dashboards', async({request})=>{
    const dashboardResponse = await request.get(`${instance_url}/services/data/v59.0/sobjects/Dashboard`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`
        }
    }
    );
    const dlashboardBody = await dashboardResponse.json();
    let firstRecentItem = dlashboardBody.recentItems[0];
    dashboardID = firstRecentItem.Id;
});

test('Delete the dashboards', async({request})=>{
    const dashboardResponse = await request.delete(`${instance_url}/services/data/v59.0/sobjects/Dashboard/${dashboardID}`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`
        }
    }
    );
    
    expect(dashboardResponse.status()).toBe(204);
})