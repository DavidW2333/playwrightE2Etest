import {Page} from '@playwright/test';
export class products{
    constructor(private page: Page){}

    async toPage(){
        await this.page.goto('https://www.automationexercise.com/products');

    }

    async addProductToCarts(){
    await this.page.hover('.product-overlay:first-child');
    await this.page.click('a[data-product-id="1"]');
    await this.page.waitForSelector('#cartModal');
    }

    async continueShopping() {
        await this.page.click('button[data-dismiss="modal"]');
      }
    
      async gotoCart() {
        await this.page.click('a[href="/view_cart"]');
      }

      async isProdInCart() {
        return await this.page.locator('.cart_product').first().isVisible();
      }
    }




