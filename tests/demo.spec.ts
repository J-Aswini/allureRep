import { test, expect } from '../src/fixtures';

test('login page renders the expected form', async ({ loginPage }) => {
  await loginPage.goto();

  await expect(loginPage.usernameInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
  await expect(loginPage.loginButton).toBeVisible();
});
