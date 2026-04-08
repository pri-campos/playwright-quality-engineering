import { test } from '@playwright/test';
import { LoginPage } from '@pages/auth/login-page';
import { ForgotPasswordPage } from '@pages/auth/forgot-password-page';
import { DashboardPage } from '@pages/dashboard/dashboard-page';
import { getAdminCredentials } from '@data/credentials/auth';

test.describe('Login', () => {
  const admin = getAdminCredentials();

  test(
    'should login successfully with valid credentials',
    { tag: ['@smoke', '@auth'] },
    async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.goto();
      await loginPage.expectLoaded();
      await loginPage.expectPasswordMasked();
      await loginPage.expectCsrfTokenPresent();

      await loginPage.login(admin.username, admin.password);

      const dashboardPage = new DashboardPage(page);
      await dashboardPage.expectLoaded();
    },
  );

  test(
    'should show error for invalid credentials',
    { tag: ['@smoke', '@auth', '@negative'] },
    async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.goto();
      await loginPage.login(admin.username, 'senha-invalida');

      await loginPage.expectInvalidCredentialsMessage();
    },
  );

  test(
    'should navigate to forgot password flow',
    { tag: ['@smoke', '@auth'] },
    async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.goto();
      await loginPage.clickForgotPassword();

      const forgotPasswordPage = new ForgotPasswordPage(page);
      await forgotPasswordPage.expectLoaded();
    },
  );
});
