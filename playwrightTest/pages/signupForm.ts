import { Page } from "@playwright/test";
import { expect } from "@playwright/test";
export class signupForm{
    constructor(private page: Page) {}

    async toPage(){
        await this.page.goto('https://www.automationexercise.com/login');
    }

    async signup(name: string, email:string){
        await this.page.fill('input[data-qa="signup-name"]', name);
        await this.page.fill('input[data-qa="signup-email"]', email);
        await this.page.click('button[data-qa="signup-button"]');
    }

    async isAccountInfoFormVisible() {
         //await this.page.getByText('h2:has-text("Enter Account Information")').toBeVisible();
         return await this.page.isVisible('text=ENTER ACCOUNT INFORMATION');



      }

    


}