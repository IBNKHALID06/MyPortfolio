/* eslint configuration */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2023: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    project: undefined,
  },
  settings: {
    react: { version: 'detect' },
  },
  plugins: ['@typescript-eslint','react','react-hooks','import'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'import/order': ['warn', { 'newlines-between': 'always', groups: ['builtin','external','internal','parent','sibling','index'], alphabetize: { order: 'asc', caseInsensitive: true } }],
  },
  ignorePatterns: ['dist','node_modules','*.config.js','*.config.cjs','*.d.ts']
};
