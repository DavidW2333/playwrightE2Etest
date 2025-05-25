import {test, expect, request} from '@playwright/test';
const random = Math.random().toString(36).slice(2, 5);
const myEmail = `david+${random}@testing.com`;
const password = 'PASSWORD';

test('POST To Create/Register User Account', async ({request}) => {
    const response = await request.post('https://automationexercise.com/api/createAccount', {
        form: {
            name: 'David',
            email: myEmail,
            password: 'password',
            firstname: 'David',
            lastname: 'WANG',
            address1: 'address1, address2',
            country: 'NZ',
            zipcode: '0000',
            state: 'NZ',
            city: 'AKL',
            mobile_number: '021111123',
        


        },
        headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
        }

    })

    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data.responseCode).toBe(201)
    expect(data.message).toBe('User created!')
})

test('POST To Verify Login with valid details', async ({request}) => {
    const response = await request.post('https://automationexercise.com/api/verifyLogin', {
        form: {
            email: myEmail,
            password: password
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    
    });

    expect(response.status()).toBe(200);
    const data = await response.json()
    expect(data.message).toBe('User exists!');

});

test('POST To Verify Login without password parameter', async ({request}) => {
    const response = await request.post('https://automationexercise.com/api/verifyLogin', {
        form: {
            email: 'david@test.com',
             
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    
    });

    expect(response.status()).toBe(200);
    const data = await response.json()
    expect(data.message).toBe('Bad request, email or password parameter is missing in POST request.');

});

test(' PUT METHOD To Update User Account', async({request}) => {
    const response = await request.put('https://automationexercise.com/api/updateAccount', {
        form:{
            name: 'David',
            email: myEmail,
            password: password,
            firstname: 'David',
            lastname: 'WANG',
            address1: 'address1, address2',
            country: 'NZ',
            zipcode: '0000',
            state: 'NZ',
            city: 'AKL',
            mobile_number: '021111123',

        },
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data.responseCode).toBe(200);
    expect(data.message).toBe('User updated!')
})

test('DELETE METHOD To Delete User Account', async({request}) => {
    const response = await request.delete('https://automationexercise.com/api/deleteAccount', {
        form: {
            email: myEmail,
            password: password
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }

    })

    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data.responseCode).toBe(200);
    expect(data.message).toBe("Account deleted!");
})

test('DELETE To Verify Login', async ({request}) => {
    const response = await request.delete('https://automationexercise.com/api/verifyLogin');
    expect(response.status()).toBe(200);
    const data = await response.json()
    expect(data.message).toBe('This request method is not supported.')
})










