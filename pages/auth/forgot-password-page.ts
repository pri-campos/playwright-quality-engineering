import { expect, type Page, type Locator } from '@playwright/test';

export class ForgotPasswordPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly resetButton: Locator;
  readonly headerTitle: Locator;

  constructor(page: Page) {
    this.page = page;

    this.headerTitle = page.getByRole('heading', { name: /reset password/i });
    this.usernameInput = page.getByPlaceholder('Username');
    this.resetButton = page.getByRole('button', { name: /reset password/i });
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/requestPasswordResetCode/i);
    await expect(this.headerTitle).toBeVisible();
    await expect(this.usernameInput).toBeVisible();
    await expect(this.resetButton).toBeVisible();
  }
}
