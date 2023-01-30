module.exports = {
    root: true,
    parser: '@babel/eslint-parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
    },
    extends: [
        '@ecomfe/eslint-config',
        '@ecomfe/eslint-config/vue',
        '@ecomfe/eslint-config/typescript',
    ],
    rules: {},
};
