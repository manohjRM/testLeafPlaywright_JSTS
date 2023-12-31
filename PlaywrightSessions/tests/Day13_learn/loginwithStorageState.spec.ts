import fs from "fs";
import path from "path";
import {parse} from "csv-parse/sync";
import {test, expect} from "@playwright/test";

const records = parse(fs.readFileSync(path.join(__dirname, 'loginData.csv')),
    {
        columns: true,
        skip_empty_lines: true
    }
)

test.use({
    storageState: 'crd/loginStorage.json'
})

test("Login using autoLogin", async({page})=>{

    const url = 'https://softworkstechnologies-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home';

    //Login to https://login.salesforce.com
    await page.goto(url);

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

})