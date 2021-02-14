module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: ['plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'import/prefer-default-export': 'off',
        'no-unused-expressions': 'off',
    },
};
