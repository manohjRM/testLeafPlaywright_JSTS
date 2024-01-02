import {test} from '@playwright/test'
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';

test('Invalid Login testLeaf', async({page})=>{

    const loginPage = new LoginPage(page);
    await loginPage.navigateTo('http://leaftaps.com/opentaps/control/login');
    await loginPage.login('DemoSalesmanager1','Welcome@123');
    await loginPage.isLoginErrorDisplayed();
    console.log(await loginPage.getTitle());
})

test('Verify home page', async({page})=>{
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo('http://leaftaps.com/opentaps/control/login');
    await loginPage.login('Demosalesmanager','crmsfa');
    await loginPage.isLoginErrorDisplayed();
    await homePage.verifyHomePage();
    console.log(await homePage.getTitle()); 
})