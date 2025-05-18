import { test, expect } from '@playwright/test';
import {signupForm} from '../pages/signupForm';

test('sign up process with name and email', async ({ page }) => {
  const signUpPage = new signupForm(page);
  await signUpPage.toPage();

  const randomEmail = `user${Date.now()}@DavidTesting.com`;
  await signUpPage.signup('TestUser', randomEmail);

  expect(await signUpPage.isAccountInfoFormVisible()).toBeTruthy();
});