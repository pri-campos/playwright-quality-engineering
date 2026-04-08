import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly forgotPasswordLink: Locator;
  readonly csrfTokenInput: Locator;
  readonly invalidCredentialsAlert: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.forgotPasswordLink = page.getByText('Forgot your password?');
    this.csrfTokenInput = page.locator('input[name="_token"]');

    this.invalidCredentialsAlert = page.getByText('Invalid credentials');
  }

  async goto() {
    await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`);
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async submit() {
    await this.loginButton.click();
  }

  async login(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.submit();
  }

  async clickForgotPassword() {
    await this.forgotPasswordLink.click();
  }

  async expectLoaded() {
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  async expectPasswordMasked() {
    await expect(this.passwordInput).toHaveAttribute('type', 'password');
  }

  async expectCsrfTokenPresent() {
    await expect(this.csrfTokenInput).toHaveAttribute('type', 'hidden');
    await expect(this.csrfTokenInput).toHaveAttribute('name', '_token');
  }

  async expectInvalidCredentialsMessage() {
    await expect(this.invalidCredentialsAlert).toBeVisible();
  }
}
