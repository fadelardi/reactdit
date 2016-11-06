module.exports = {
    "plugins": ["react"],
    "extends": ["eslint:recommended","plugin:react/recommended"],
    "rules": {
      "react/prop-types": 0,
      "semi": 2
    },
    "parserOptions": {
       "ecmaVersion": 5,
       "ecmaFeatures": {
         "jsx": true
       }
    },
    "globals": {
      "require": false,
      "describe": false,
      "it": false
    }
};
