import { test as base, expect as baseExpect } from '@playwright/test';
import { users, type UserCredentials } from '../data/credentials';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';

type AuthFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  standardUser: UserCredentials;
  loginAs: (credentials?: UserCredentials) => Promise<InventoryPage>;
};

export const test = base.extend<AuthFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },

  standardUser: async ({}, use) => {
    await use(users.standard);
  },

  loginAs: async ({ page }, use) => {
    await use(async (credentials: UserCredentials = users.standard) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.login(credentials);

      const inventoryPage = new InventoryPage(page);
      await inventoryPage.waitForLoaded();
      return inventoryPage;
    });
  },
});

export const expect = baseExpect;
