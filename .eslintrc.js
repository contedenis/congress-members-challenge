module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "airbnb",
    "airbnb/hooks"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks"
  ],
  "rules": {
    "react/jsx-filename-extension": 0,
    "react/forbid-prop-types": 0,
    "no-shadow": 0,
    "no-underscore-dangle": 0,
    "react/no-array-index-key": 0,
    "import/prefer-default-export": "off",
    "linebreak-style": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};