import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginImport from 'eslint-plugin-import-x';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default tseslint.config(
    {
        ignores: [
            'dist/**',
            'build/**',
            'node_modules/**',
            'webpack.config.js',
            'webpack.dev.config.js',
            'webpack.prod.config.js',
        ],

        files: ['**/*.{ts}'],

        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2020,
            },
        },
        plugins: {
            import: eslintPluginImport,
        },
        rules: {
            'no-debugger': 'off',
            'no-console': 'off',
            'class-methods-use-this': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
        },
    },

    js.configs.recommended,

    ...tseslint.configs.recommended,

    eslintPluginPrettierRecommended
);
