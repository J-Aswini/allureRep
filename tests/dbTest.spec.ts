import { test, expect } from '@playwright/test';
import {pool} from '../src/utils/db.utils'


test('db testing', async ({ page }) => {
  await page.goto('https://www.automationexercise.com');

const result = await pool.query('select * from products')
const row = result.rows
console.log(row)
for(const product of row ){
await expect(page.locator('.single-products').getByText(product.product_name).first()).toBeVisible()
}
});