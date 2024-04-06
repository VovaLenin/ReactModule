/* eslint-disable comma-dangle */
module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["standard", "prettier", "plugin:prettier/recommended"],
    overrides: [
        {
            env: {
                node: true
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script"
            }
        }
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react", "prettier"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                semi: true,
                singleQuote: false,
                trailingComma: "none",
                tabWidth: 4
                // ... все остальные настройки Prettier, если есть
            }
        ]
    }
};
