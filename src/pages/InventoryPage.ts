import type { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly pageTitle: Locator;
  readonly inventoryList: Locator;
  readonly shoppingCartLink: Locator;
  readonly shoppingCartBadge: Locator;

  constructor(page: Page) {
    super(page);

    this.pageTitle = page.getByTestId('title');
    this.inventoryList = page.locator('.inventory_list');
    this.shoppingCartLink = page.locator('.shopping_cart_link');
    this.shoppingCartBadge = page.locator('.shopping_cart_badge');
  }

  async waitForLoaded() {
    await this.pageTitle.waitFor({ state: 'visible' });
  }

  async addItemToCart(itemName: string) {
    const addToCartButton = this.page.getByRole('button', {
      name: new RegExp(`add to cart.*${itemName}`, 'i'),
    });

    await addToCartButton.click();
  }
}
