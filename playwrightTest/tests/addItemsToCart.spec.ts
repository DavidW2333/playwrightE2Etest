import {test, expect} from '@playwright/test';
import { products } from '../pages/products';


test('verify products in cart', async ({page}) => {


    const productPage = new products(page);
    await productPage.toPage();

    await productPage.addProductToCarts();
    await productPage.continueShopping();
    await productPage.gotoCart();

    expect(productPage.isProdInCart()).toBe(true);


    



})