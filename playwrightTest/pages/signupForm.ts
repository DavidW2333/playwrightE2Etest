import { Page } from "@playwright/test";
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
        return await this.page.locator('h2:has-text("Enter Account Information")').isVisible();
      }

    


}