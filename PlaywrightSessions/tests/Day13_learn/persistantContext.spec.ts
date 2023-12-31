import fs from "fs";
import path from "path";
import {parse} from "csv-parse/sync";
import {test, chromium} from "@playwright/test";

const records = parse(fs.readFileSync(path.join(__dirname, 'loginData.csv')),
    {
        columns: true,
        skip_empty_lines: true
    }
)

test("Login using persistant context", async()=>{

    const userDataDir ='./myUserDataDir';
    const context = await chromium.launchPersistentContext(userDataDir,{
        headless:false
    })
    const page = await context.newPage();

    const url = 'https://login.salesforce.com/';

    //Login to https://login.salesforce.com
    await page.goto(url);
    await page.waitForLoadState('load');
    await page.locator('#username').fill(records[0].Username)
    await page.locator('#password').fill(records[0].Password);
    await page.locator('#Login').click();

    await page.close();
    await context.close();
})