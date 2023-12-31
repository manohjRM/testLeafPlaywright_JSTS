import { test } from "@playwright/test";
import loginSalesForce from "./loginSalesForce.json";
import dotenv from "dotenv";

dotenv.config();

let access_token: any;
let instance_url: any;

test('Get Access token from Salesforce app',async ({request}) => {
    
    const generatingToken = await request.post(loginSalesForce.token_url,{
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
    //console.log(generatingTokenJSON);
    access_token = `Bearer ${generatingTokenJSON.access_token}`;
    instance_url = generatingTokenJSON.instance_url;
    console.log(access_token);
    console.log(instance_url);
    
})