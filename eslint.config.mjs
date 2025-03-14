import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylisticTs from '@stylistic/eslint-plugin-ts';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  {
    plugins: {
      '@stylistic/ts': stylisticTs,
    },
  },
  {
    rules: {
      semi: 'error',
      'prefer-const': 'error',
      '@stylistic/ts/quotes': ['error', 'single'],
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
