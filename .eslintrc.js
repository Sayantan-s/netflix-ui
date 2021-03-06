module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        browser: true,
        amd: true,
        node: true
    },
    plugins: [
        "react"
    ],
    extends:['eslint:recommended',  "plugin:react/recommended"],
    rules: {
        'prettier/prettier': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off'
    }
};
