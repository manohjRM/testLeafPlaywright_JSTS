import { chromium } from "@playwright/test";
import loginSalesForce from "./loginSalesForce.json";
import dotenv from "dotenv";

dotenv.config();

async function getAccessToken(){
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const apiRequestContext = browserContext.request;

    const generatingToken = await apiRequestContext.post(loginSalesForce.token_url,{
        headers:loginSalesForce.headers,
        form:{
            "grant_type": loginSalesForce.form.grant_type,
            "client_id": process.env.SF_ClientId as string,
            "client_secret": process.env.SF_ClientSecret as string,
            "username": loginSalesForce.form.username,
            "password": loginSalesForce.form.password
        }
    });

    const generatingTokenJSON = await generatingToken.json();
    console.log(generatingTokenJSON);
    
    return{
        accessToken :generatingTokenJSON.access_token,
        inst_url : generatingTokenJSON.instance_url
    }
}

export {getAccessToken}
