//API 3: Get All Brands List
import {test, expect, request} from '@playwright/test';

test('get the product list', async ({request}) => {
    const response = await request.get('https://automationexercise.com/api/brandsList');
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data).toHaveProperty('brands')
})

test('put product lists returns 405', async ({request}) => {
    const response = await request.put('https://automationexercise.com/api/brandsList');
    expect (response.status()).toBe(200);
    const message = await response.json();
    expect (message.responseCode).toBe(405);
    expect (message.message).toBe('This request method is not supported.');
})