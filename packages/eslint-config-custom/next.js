const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 */

module.exports = {
  extends: [
    'next/core-web-vitals',
    'turbo',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  parserOptions: {
    project
  },
  // settings: {
  //   "import/resolver": {
  //     typescript: {
  //       project,
  //     },
  //   },
  // },
  //ignorePatterns: ['node_modules/', 'dist/'],
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'object', 'type', 'index', 'sibling'],
        pathGroups: [
          {
            pattern: '{react,next}',
            group: 'external',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-native', 'builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false
        }
      }
    ],
    '@next/next/no-html-link-for-pages': 'off'
  }
};
