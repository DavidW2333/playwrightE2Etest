import { test, expect } from '@playwright/test';
import {signupForm} from '../pages/signupForm'

test('sign up process with name and email', async ({ page }) => {
  const signUpPage = new signupForm(page);
  await signUpPage.goto();

  const randomEmail = `user${Date.now()}@test.com`;
  await signUpPage.signup('TestUser', randomEmail);

  expect(await signUpPage.isAccountInfoFormVisible()).toBeTruthy();
});