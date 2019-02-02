module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:react/recommended'
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'arrow-parens': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'no-shadow': 'off'
  },
  env: {
    'browser': true,
    'node': true
  }
};
