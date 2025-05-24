import {test, expect, request} from '@playwright/test';

test('get the product list', async ({request}) => {
    const response = await request.post('https://automationexercise.com/api/searchProduct', {
        form:{
            search_product: 'top' // the docs implies form-style, not JSON-style.
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data).toHaveProperty('products');
});

test('POST To Search Product without search_product parameter', async ({request}) => {
    const response = await request.post('https://automationexercise.com/api/searchProduct', {
        form:{},
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect (data.responseCode).toBe(400);
    expect (data.message).toBe('Bad request, search_product parameter is missing in POST request.');
});

    