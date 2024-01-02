
/**
1. Create a class BasePage with the following functionalities:
>> A constructor that accepts a Playwright Page object.
>> A method navigateTo(url: string) to navigate to a given URL.
>> A method getTitle() to get the current page title.
 
2. Extend the BasePage class to the derived class
 
>> LoginPage: With additional methods login(username: string, password: string) to perform a login, and isLoginErrorDisplayed() to check if an error message is displayed after login attempts.
>> HomePage: With an additional method verifyHomePage() that checks the title of the page
 
3. Write a Test Case: Using Playwright’s test runner, write a test script leafTaps.spec.ts that does the following:
 
>> Use the HomePage object to navigate to the home page and verify the title.
>> Use the LoginPage object to navigate to the login page, perform a login attempt with invalid credentials, and verify that the login error is displayed.
 
- Deliverables
1. A TypeScript file BasePage.ts for the base page object class.
2. TypeScript files for the specific page objects (HomePage.ts and LoginPage.ts).
3. A test script leafTaps.spec.ts that uses the page objects to run a test case.
*/

import { Browser, BrowserContext, chromium, Page, expect } from "@playwright/test";

//import {Browser, BrowserContext, chromium, Page} from 'playwright' export class BaseTest { browser: Browser|null = null; page: Page|null = null; async setup(){ this.browser = await chromium.launch(); } async teardown(){ if(this.page){ await this.page.close(); } if(this.browser){ await this.browser.close(); } } }

export class BasePage{

    // page: Page|null = null;
    public page: Page;

    constructor(page:Page){
        this.page = page;
    }
    async navigateTo(url:string){
        await this.page?.goto(url);
    }
    async getTitle(){
        return await this.page?.title();
    }
}