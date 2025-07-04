module.exports = {
  root: true,
  parserOptions: {
    parser: {
      ts: '@typescript-eslint/parser'
    }
  },
  env: {
    node: true,
    browser: true
  },
  extends: ['plugin:vue/vue3-recommended'],
  rules: {
    'no-trailing-spaces': ['warn'],
    'prefer-promise-reject-errors': 'off',
    'vue/no-v-html': 'off',
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['error', 'Error']
      }
    ],
    'max-len': [
      'error',
      {
        code: 150,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true
      }
    ],
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'semi': ['error', 'never'],
    'vue/no-multiple-template-root': 0,
    'vue/html-indent': ['error', 2],
    'vue/script-indent': ['error', 2],
    'vue/max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true,
        tabWidth: 2,
        comments: 120,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true,
        ignorePattern: '^\\s*const\\s.+=\\s*require\\s*\\(',
        ignoreHTMLTextContents: true,
        ignoreHTMLAttributeValues: true,
        ignoreStrings: true
      }
    ],
    'vue/multi-word-component-names': 'off',
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true
      }
    ],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: true,
      ignores: []
    }],
    'vue/component-api-style': ['error',
      ['script-setup', 'composition']
    ],
    'vue/html-closing-bracket-newline': 'error',
    'vue/padding-lines-in-component-definition': [
      'error',
      {
        betweenOptions: 'always'
      }
    ],
    'vue/component-tags-order': ['error', {
      order: [['script', 'template'], 'style']
    }]
  },
  plugins: ['prettier'],
  overrides: [
    {
      files: ['components/**/**/*.vue'],
      rules: { 'vue/multi-word-component-names': 'off' }
    }
  ]
}