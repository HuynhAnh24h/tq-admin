// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // Bỏ qua thư mục build
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      react.configs.flat.recommended,       // React rules cơ bản
      reactHooks.configs.flat.recommended,  // Quy tắc cho Hooks
      reactRefresh.configs.vite,            // Hỗ trợ Vite Fast Refresh
    ],
    languageOptions: {
      parser: tseslint.parser, // Parser cho TypeScript
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json', // để bật type-aware linting
      },
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect', // tự động nhận version React
      },
    },
  },
])
