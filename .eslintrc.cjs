module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'standard-with-typescript',
  overrides: [

  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  rules: {
    "comma-dangle": [2, "always"],
    "@typescript-eslint/comma-dangle": [2, "always"],
    "array-comma-dangle": [2, "always"],
    "@typescript-eslint/array-comma-dangle": [2, "always"],
    "array-bracket-spacing": [2, "always"],
    "@typescript-eslint/array-bracket-spacing": [2, "always"],
    "semi": [2, "always"],
    "@typescript-eslint/semi": [2, "always"],
  },
};
