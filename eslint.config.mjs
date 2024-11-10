import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // Enforce single quotes for strings
      'quotes': ['error', 'single', { avoidEscape: true }],

      // Disallow semicolons as line terminators
      'semi': ['error', 'never'],

      // Enforce an empty line before return statements
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' }
      ],

      // Rules for consistent whitespace and empty lines
      'no-multiple-empty-lines': [
        'error',
        { max: 1, maxEOF: 1, maxBOF: 0 }
      ],
      'eol-last': ['error', 'always'], // Require newline at the end of files
      'space-before-function-paren': ['error', 'always'], // Space before function parenthesis
      'block-spacing': ['error', 'always'], // Space inside single-line blocks
      'key-spacing': ['error', { beforeColon: false, afterColon: true }], // Consistent key spacing
    },
  },
]
