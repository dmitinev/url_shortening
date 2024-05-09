module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-undef': ['warn'],
    'no-console': ['warn'],
    'no-unused-vars': ['warn'],
    'prettier/prettier': ['off', { endOfLine: 'auto' }],
    '@typescript-eslint/no-var-requires': ['warn'],
    'react/react-in-tsx-scope': 'off',
    'no-empty-pattern': 'off',
    'react/prop-types': 'off',
  },
};
