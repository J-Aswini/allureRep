import { test, expect } from '../src/fixtures';
import { users } from '../src/data/credentials';

test('locked out user sees the access error', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login(users.lockedOut);

  await expect(loginPage.errorMessage).toContainText('locked out');
  await expect(loginPage.page).toHaveURL('https://www.saucedemo.com/');
});