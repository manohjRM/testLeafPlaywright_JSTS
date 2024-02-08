import {test as baseTest} from '@playwright/test';

export const test = baseTest.extend({
    page:async({page}, use, testInfo)=>{
        page.delayedFill = async(selector:string, value:string)=>{
            if(testInfo.retry){
                await page.waitForTimeout(3000);
            }
            await page.fill(selector, value);
        }

        page.clickAndDelay = async(selector:string)=>{
            await page.click(selector);
            if(testInfo.retry){
                await page.waitForTimeout(3000);
            }
            
        }
        await use(page);
    }
    
})