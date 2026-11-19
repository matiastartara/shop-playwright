import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly password: Locator;
    readonly submitButton: Locator;
    readonly errorLoginMsg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('[data-test="email"]');
        this.password = page.locator('[data-test="password"]');
        this.submitButton = page.locator('[data-test="login-submit"]');
        this.errorLoginMsg = page.locator('[data-test="login-error"]');
    }

    async goto() {
        await this.page.goto('/auth/login');
    }

    async login(email: string, passwd: string) {
        await this.emailInput.fill(email);
        await this.password.fill(passwd);
        await this.submitButton.click();
    }
}