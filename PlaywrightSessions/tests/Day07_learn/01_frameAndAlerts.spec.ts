import {test} from '@playwright/test';
/*
import { test, chromium } from "@playwright/test";

test("Handle frames using frame object",async ({page}) => {
    await page.goto("https://leafground.com/frame.xhtml");
    const frame = page.frame({url:'https://leafground.com/default.xhtml'});
    console.log(frame);
    
    await frame?.waitForSelector("button#Click");
    await frame?.click('button#Click')
    
    await page.waitForTimeout(5000);

    //To get the frame count
    const allFrames = page.frames();
    page.mainFrame()
    console.log(`No. of frames present ${allFrames.length}`);
    
    await allFrames[4].click('button#Click');

    await page.waitForTimeout(5000);
})

test.only("Handle frames using frameLocator",async ({page}) => {

    await page.goto("https://leafground.com/frame.xhtml");
    //Using frameLocator 
    //Locating the first
    const frameLocator = page.frameLocator('iframe').first();
    await frameLocator.locator('#Click').click();
    await page.waitForTimeout(5000);
    //Text: Click Me (Inside Nested frame)
    const cardLocator = page.locator(".card").filter({hasText:' Click Me (Inside Nested frame)'});
    const frameButton = cardLocator.frameLocator('iframe');
    frameButton.frameLocator('iframe').locator('#Click').click();
    await page.waitForTimeout(5000);
})
*/

test('Handle iframes', async({page})=>{
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm');
    const frame = page.frame({name: 'iframeResult'});
    page.on('dialog', async dialog => {
        dialog.accept();
    })
    await frame?.locator('button').filter({hasText: 'Try it'}).click();
    console.log("Try it button clicked under the frame");

    let confirmText = await frame?.locator('#demo').innerText();
    console.log(confirmText);
    

})