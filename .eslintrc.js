module.exports = {
  env: {
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   project: './tsconfig.eslint.json',
  // },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/semi': ['error', 'never'],
    'import/extensions': 0,
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 120,
        semi: false,
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
