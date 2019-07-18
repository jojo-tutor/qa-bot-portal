module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "globals": {
        "document": "readOnly",
        "window": "readOnly"
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-one-expression-per-line": 0,
        "linebreak-style": 0,
        "react/forbid-prop-types": 0,
        "no-param-reassign": 0
    },
    "settings": {
        "import/resolver": {
          "node": {
            "moduleDirectory": [
              "./node_modules",
              "./src"
            ]
          }
        }
    }
};
