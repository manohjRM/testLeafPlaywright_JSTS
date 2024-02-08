import { expect, devices, chromium } from '@playwright/test';
import {test} from '../../DelayMethods/retry-logic';



test('test', async ({page}) => {

    await page.goto("https://login.salesforce.com/");
    await page.delayedFill("#username","ranjini.r@testleaf.com");
    await page.delayedFill("#password","Testleaf$1234")
    await page.clickAndDelay("Login")
    
    const appLauncherLocator = page.locator(".slds-icon-waffle")

    await appLauncherLocator.click()

    const viewAllLocator = page.getByLabel("View All Applications")
    await viewAllLocator.click()
  
});