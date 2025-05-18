import {Page} from '@playwright/test';
export class products{
    constructor(private page: Page){}

    async toPage(){
        await this.page.goto('https://www.automationexercise.com/products');

    }

    async addProductToCarts(){
    //await this.page.hover('.product-overlay:first-child');
    await this.page.waitForSelector('.features_items .product-image-wrapper');
    const firstItem = this.page.locator('.features_items .product-image-wrapper').first()
    await firstItem.hover()
    await this.page.waitForTimeout(200);
    //await firstItem.locator('a[data-product-id="1"]').click();

    //const addItemBtn = this.page.locator('.product-overlay a.add-to-cart');
    const addItemBtn = firstItem.locator('.product-overlay').locator('a.add-to-cart');
    await addItemBtn.scrollIntoViewIfNeeded(); //the heading is covering the add to cart button 

    await addItemBtn.click();
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




