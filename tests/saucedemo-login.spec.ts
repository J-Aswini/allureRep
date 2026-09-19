import { test, expect } from '../src/fixtures';
import { users } from '../src/data/credentials';

test('standard user can log in and view products', async ({ loginAs }) => {
  const inventoryPage = await loginAs(users.standard);

  await expect(inventoryPage.page).toHaveURL(/\/inventory\.html$/);
  await expect(inventoryPage.pageTitle).toHaveText('Products');
});
