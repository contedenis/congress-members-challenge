module.exports = {
    "env": {
      "browser": true,
      "es6": true
    },
    "extends": "airbnb",
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
      "react"
    ],
    "rules": {
      "react/jsx-filename-extension": 0,
      "react/forbid-prop-types": 0,
      "no-shadow": 0,
      "no-underscore-dangle": 0,
      "react/no-array-index-key": 0,
      "import/prefer-default-export": "off",
      "linebreak-style": 0
    }
  };