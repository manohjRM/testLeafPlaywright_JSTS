import { chromium } from "@playwright/test";
import loginSalesForce from "./loginSalesForce.json";

async function getAccessToken(){
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const apiRequestContext = browserContext.request;

    const generatingToken = await apiRequestContext.post(loginSalesForce.token_url,{
        headers:loginSalesForce.headers,
        form:loginSalesForce.form
    });

    const generatingTokenJSON = await generatingToken.json();
    console.log(generatingTokenJSON);
    
    return{
        accessToken :generatingTokenJSON.access_token,
        inst_url : generatingTokenJSON.instance_url
    }
}

export {getAccessToken}
