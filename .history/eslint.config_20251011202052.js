// Flat ESLint config for ESLint v9+
import js from '@eslint/js';
import globals from 'globals';
import * as tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';

export default [
  js.configs.recommended,
  // Use recommended configs from @typescript-eslint
  // (eslint-plugin exports configs under .configs)
  ...(tseslint.configs.recommended || []),
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
  parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      import: importPlugin,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'import/order': ['warn', { 'newlines-between': 'always', groups: ['builtin','external','internal','parent','sibling','index'], alphabetize: { order: 'asc', caseInsensitive: true } }],
    },
    settings: {
      react: { version: 'detect' },
    },
  },
  {
    ignores: [
      'dist',
      'node_modules',
      '*.config.js',
      '*.config.cjs',
      '*.d.ts',
      'pnpm-lock.yaml'
    ],
  },
];
