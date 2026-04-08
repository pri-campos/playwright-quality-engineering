import { expect, type Page, type Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly headerTitle: Locator;

  constructor(page: Page) {
    this.page = page;

    this.headerTitle = page.getByRole('heading', { name: /dashboard/i });
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/dashboard/i);
    await expect(this.headerTitle).toBeVisible();
  }
}
