const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const playwright = require('eslint-plugin-playwright');
const prettier = require('eslint-plugin-prettier');
const eslintConfigPrettier = require('eslint-config-prettier');

module.exports = [
  {
    ignores: ['node_modules/**', 'playwright-report/**', 'test-results/**', 'eslint.config.js'],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{js,ts}'],
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },

  {
    files: ['tests/**/*.ts'],
    rules: {
      'playwright/expect-expect': 'off',
    },
  },

  {
    files: ['tests/**/*.ts', 'pages/**/*.ts'],
    ...playwright.configs['flat/recommended'],
    rules: {
      ...playwright.configs['flat/recommended'].rules,
      'playwright/no-force-option': 'warn',
      'playwright/no-wait-for-timeout': 'error',
      'playwright/expect-expect': 'off',
    },
  },

  eslintConfigPrettier,
];
