//API 1: GET All Products List
// //API 2: POST To All Products List
import {test, expect, request} from '@playwright/test';

test('get the product list', async ({request}) => {
    const response = await request.get('https://automationexercise.com/api/productsList');
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data).toHaveProperty('products')
    expect(data.products.length).toBe(34);
})

test('POST product lists returns 405', async ({request}) => {
    const response = await request.post('https://automationexercise.com/api/productsList');
    expect (response.status()).toBe(200);
    const message = await response.json();
    expect (message.responseCode).toBe(405);
    expect (message.message).toBe('This request method is not supported.');

})


