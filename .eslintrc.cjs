// eslint-disable-next-line no-undef
module.exports = {
    "extends":
    [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures":
        {
            "jsx": true
        },
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "plugins":
    [
        "react",
        "@stylistic"
    ],
    "rules":
    {
        "@stylistic/brace-style": [ "error", "allman" , { allowSingleLine: false } ],
        "@stylistic/comma-dangle": [ "error", "never" ],
        "@stylistic/function-call-spacing": [ "error", "never" ],
        "@stylistic/jsx-sort-props": [ 1 ],
        "@stylistic/max-len": [ "error", { code: 100 } ],
        "@stylistic/semi": [ "error", "always" ],
        "@typescript-eslint/naming-convention":
        [
            "error",
            {
                "custom":
                {
                    "match": true,
                    "regex": "^(F|I|P|T|S)[A-Z][a-zA-Z]+$|^T$"
                },
                "format": [ "PascalCase" ],
                "selector": "typeLike"
            }
        ],
        "@typescript-eslint/no-unused-vars":
        [
            "error",
            {
                "argsIgnorePattern": "^_"
            }
        ],
        "brace-style":
        [
            "error",
            "allman",
            { "allowSingleLine": true }
        ],
        // Enforce naming convention for variables to be in PascalCase
        "camelcase": ["error", { "properties": "always" }],
        "react/jsx-sort-props":
        [
            "error",
            {
                "ignoreCase": true
            }
        ],
        "sort-imports":
        [
            "error",
            {
                "ignoreCase": false,
                "ignoreDeclarationSort": false,
                "ignoreMemberSort": false,
                "memberSyntaxSortOrder":
                [
                    "none",
                    "all",
                    "multiple",
                    "single"
                ]
            }
        ]
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};
