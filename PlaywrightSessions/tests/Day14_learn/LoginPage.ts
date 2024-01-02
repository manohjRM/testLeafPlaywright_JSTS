import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{

    async login(username:string, password:string){
        await this.page?.locator('#username').fill(username);
        await this.page?.locator('#password').fill(password);
        await this.page?.getByRole('button', { name: 'Login' }).click();
        await this.page?.waitForTimeout(2000);
    }
    async isLoginErrorDisplayed(){
        let loginbtn = this.page?.getByRole('button', { name: 'Login' });
        if(await loginbtn?.isVisible()){
            console.log(`Error in login page`);
        }else{
            console.log(`Successfully logged in`);
            
        }
    }

}

//import { BaseTest } from "./baseTest"; class LaunchApp extends BaseTest{ async visitAndCheckTitle(url:string, expectedTitle:string){ if(!this.page) throw new Error("Page is not initialized"); await this.page.goto(url); const title = await this.page.title(); console.assert(title===expectedTitle,`Expected Title to be '${expectedTitle}',but found '${title}'`) } } (async()=>{ const test = new LaunchApp(); try{ await test.setup(); await test.visitAndCheckTitle('http://leaftaps.com/opentaps/control/main','Leaftaps - TestLeaf Automation Platform') console.log("Test passed"); } catch(error){ console.error("Test failed", error); } finally{ await test.teardown(); } })();