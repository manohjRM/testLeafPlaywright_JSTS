import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage{
    async verifyHomePage(){
        await this.page?.getByRole('link', { name: 'CRM/SFA' }).click();
        await this.page?.waitForLoadState('load');
        let pageTitle = await this.getTitle();
        expect(pageTitle).toContain('My Home');
    }
}