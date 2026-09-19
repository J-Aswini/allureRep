import { test, expect } from '../src/fixtures';
import { users } from '../src/data/credentials';

test.describe('Inventory interactions', () => {
  test('standard user can add a product to cart', async ({ loginAs }) => {
    const inventoryPage = await loginAs(users.standard);

    await inventoryPage.addItemToCart('Sauce Labs Backpack');

    await expect(inventoryPage.shoppingCartBadge).toHaveText('1');
  });
});
