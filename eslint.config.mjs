import nextConfig from 'eslint-config-next';
import eslintConfigPrettier from 'eslint-config-prettier';
import cssModulesPlugin from 'eslint-plugin-css-modules';

const config = [
  ...nextConfig,
  eslintConfigPrettier,
  // CSS Modules Plugin
  {
    plugins: {
      'css-modules': cssModulesPlugin,
    },
    rules: {
      'css-modules/no-unused-class': 'warn',
      'css-modules/no-undef-class': 'error',
    },
  },
  // Disable unused class warning for shared CSS modules
  {
    files: ['**/app/**/page.tsx', '**/app/**/loading.tsx', '**/StarRating/*.tsx'],
    rules: {
      'css-modules/no-unused-class': 'off',
    },
  },
  // TypeScript rules (applied to TS/TSX files only)
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/no-non-null-assertion': 'warn',
    },
  },
  // React rules
  {
    files: ['**/*.jsx', '**/*.tsx'],
    rules: {
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-no-useless-fragment': 'error',
      'react/hook-use-state': 'warn',
    },
  },
  // General JavaScript rules
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-nested-ternary': 'warn',
      'no-unneeded-ternary': 'error',
    },
  },
];

export default config;
