import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInButton = page.locator('[data-test="nav-sign-in"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async clickOnSignIn() {
    await this.signInButton.click();
  }
}
