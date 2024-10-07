module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.app.json', './tsconfig.node.json'],
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'import/extensions': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['warn'],
    'prettier/prettier': 'error',
    'no-console': ['error'],
    'no-unused-vars': ['error'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.{ts,tsx}',
          '**/*.spec.{ts,tsx}',
          '**/vite.config.ts',
          '**/vitest.config.ts',
          '**/testing/**/*',
        ],
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          { pattern: 'react', group: 'builtin', position: 'before' },
          { pattern: 'react-dom', group: 'builtin', position: 'before' },
          { pattern: 'react-router-dom', group: 'builtin', position: 'before' },
          { pattern: '@/hooks/**', group: 'internal', position: 'after' },
          { pattern: '@/utils/**', group: 'internal', position: 'after' },
          { pattern: '@/constants/**', group: 'internal', position: 'after' },
          { pattern: '@/components/**', group: 'internal', position: 'after' },
          { pattern: '@/styles/**', group: 'internal', position: 'after' },
          { pattern: './**/*.css', group: 'internal', position: 'after' },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-router-dom'],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/prefer-default-export': ['off'],
  },
  overrides: [
    {
      files: ['src/main.tsx'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    alias: {
      map: [['@', './src']],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  },
  ignorePatterns: [
    '.eslintrc.cjs',
    '*.config.*',
    '/src/components/ui/*', // This refers to the Shadcn's component folder
  ],
};
