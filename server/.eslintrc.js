module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    "plugin:jsx-a11y/recommended",
    // 'prettier/react',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier', 'import', "jsx-a11y",
    "react-hooks"],
  rules: {
    // add your project-specific rules here
    "react/display-name": 0,
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": 0,
    'react/prop-types': 0,
    'no-undef': 0,
    'import/no-cycle': 2,
    "react/jsx-no-useless-fragment": [
      1,
      {
        "allowExpressions": true
      }
    ],
    "prefer-destructuring": [
      1,
      {
        "object": true,
        "array": false
      }
    ],
    "react/no-unstable-nested-components": [
      1,
      {
        "allowAsProps": true
      }
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
