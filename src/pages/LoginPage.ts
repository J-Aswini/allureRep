import type { Locator, Page } from '@playwright/test';
import type { UserCredentials } from '../data/credentials';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.usernameInput = page.getByTestId('username');
    this.passwordInput = page.getByTestId('password');
    this.loginButton = page.getByTestId('login-button');
    this.errorMessage = page.getByTestId('error');
  }

  async goto() {
    await this.open('/');
  }

  async login(credentials: UserCredentials) {
    await this.usernameInput.fill(credentials.username);
    await this.passwordInput.fill(credentials.password);
    await this.loginButton.click();
  }
}
