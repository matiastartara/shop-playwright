import { test, expect } from '@playwright/test';
import { HomePage } from '@pages/HomePage';
import { LoginPage } from '@pages/LoginPage'


test.describe('Login test', () => {

  test('Invalid login test', async ({ page }) => {
    const home = new HomePage(page);
    const login = new LoginPage(page);
    await home.goto();
    await home.clickOnSignIn();
    await login.login('user@bad.com', '111');

    await expect(login.errorLoginMsg).toBeVisible();
    await expect(login.errorLoginMsg).toHaveText('Invalid email or password');
  });
})

