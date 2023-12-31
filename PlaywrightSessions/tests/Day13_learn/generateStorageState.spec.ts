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



test("Login using without storage", async({page})=>{

    const url = 'https://login.salesforce.com/';

    await page.goto(url);
    await page.waitForLoadState('load');
    await page.locator('#username').fill(records[0].Username)
    await page.locator('#password').fill(records[0].Password);
    await page.locator('#Login').click();
    await page.context().storageState({path:'crd/loginStorage.json'})
})

