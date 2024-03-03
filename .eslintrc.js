// eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
const globals = require('globals');

const config = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    ignorePatterns: ['!.prettierrc.js', '!.stylelintrc.js'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended',
        'plugin:promise/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/all',
        'plugin:react/jsx-runtime',
        'plugin:i18next/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'simple-import-sort', 'i18next'],
    settings: {
        'import/resolver': {
            typescript: true,
        },
        'react': {
            version: 'detect',
        },
    },
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'indent': [2, 4],
        'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', '.tsx']}],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'generic',
            },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                format: ['StrictPascalCase'],
                selector: 'typeAlias',
                suffix: ['Type'],
            },
            {
                format: ['StrictPascalCase'],
                selector: 'enum',
                suffix: ['Enum'],
            },
        ],
        '@typescript-eslint/no-explicit-any': 'error', // 'warn' in @typescript-eslint/recommended
        '@typescript-eslint/no-non-null-assertion': 'error', // 'warn' in @typescript-eslint/recommended
        '@typescript-eslint/no-shadow': [
            'error',
            {
                hoist: 'all',
            },
        ],
        '@typescript-eslint/no-unused-vars': 'off', // typescript noUnusedLocals
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/padding-line-between-statements': [
            'error',
            {blankLine: 'always', prev: '*', next: ['interface', 'type']},
            {blankLine: 'always', prev: ['interface', 'type'], next: '*'},
            {blankLine: 'always', prev: '*', next: 'multiline-block-like'},
            {blankLine: 'always', prev: 'multiline-block-like', next: '*'},
            {blankLine: 'any', prev: '*', next: 'case'},
            {blankLine: 'any', prev: 'case', next: '*'},
        ],
        'accessor-pairs': 'error',
        'block-scoped-var': 'error',
        'consistent-return': 'error',
        'consistent-this': 'error',
        'curly': 'error',
        'default-case': 'error',
        'dot-notation': 'error',
        'eqeqeq': ['error', 'smart'],
        'func-names': 'error',
        'func-style': ['error', 'declaration'],
        'guard-for-in': 'warn',
        'import/first': 'error',
        'import/namespace': 'off', // too slow (checked with TIMING=1)
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error', // 'warn' in import/recommended
        'init-declarations': 'error',
        'max-len': ['error', {code: 120, ignoreComments: true}],
        'lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: true,
            },
        ],
        'max-depth': 'error',
        'max-nested-callbacks': 'error',
        'max-params': ['error', 5],
        'max-statements': ['error', 20],
        'new-cap': 'error',
        'newline-after-var': 'error',
        'no-alert': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-catch-shadow': 'error',
        'no-console': 'off', // TODO: enable
        'no-div-regex': 'error',
        'no-else-return': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-implicit-coercion': 'error',
        'no-implied-eval': 'error',
        'no-inner-declarations': ['error', 'both'],
        'no-irregular-whitespace': [
            'error',
            {
                skipStrings: false,
            },
        ],
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'error',
        'no-multi-str': 'error',
        'no-native-reassign': 'error',
        'no-negated-in-lhs': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-wrappers': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': [
            'error',
            {
                props: true,
            },
        ],
        'no-proto': 'error',
        'no-restricted-globals': ['warn', ...Object.keys(globals.browser).filter((key) => key !== 'window')],
        'no-return-assign': ['error', 'always'],
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-sync': 'error',
        'no-throw-literal': 'error',
        'no-undef-init': 'error',
        'no-unneeded-ternary': 'error',
        'no-unused-expressions': 'error',
        'no-useless-call': 'error',
        'no-void': 'error',
        'object-shorthand': 'error',
        'one-var': ['error', 'never'],
        'operator-assignment': 'error',
        'prefer-destructuring': [
            'error',
            {
                AssignmentExpression: {
                    object: false,
                },
            },
        ],
        'prefer-reflect': 'error',
        'promise/always-return': 'off',
        'radix': 'error',
        'react/forbid-component-props': 'off',
        'react/jsx-max-depth': [
            'error',
            {
                max: 7,
            },
        ],
        'react/jsx-no-bind': 'off',
        'react/jsx-no-leaked-render': 'off', // https://github.com/jsx-eslint/eslint-plugin-react/issues/3292
        'react/jsx-no-literals': 'off',
        'react/jsx-sort-props': 'error',
        'react/jsx-uses-react': 'off',
        'react/no-set-state': 'off',
        'react/no-unused-prop-types': 'off',
        'react/prop-types': 'off',
        'react/require-optimization': 'off',
        'react/state-in-constructor': 'off',
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // Side effect imports.
                    ['^\\u0000'],
                    // Packages. Things that start with a letter (or digit or underscore), or `@` followed by a letter.
                    ['^@?\\w'],
                    // Absolute imports. Anything not matched in another group.
                    ['^'],
                    // Relative imports. Anything that starts with two dots.
                    ['^\\.\\.'],
                    // Relative imports in the same folder. Anything that starts with a dot, and styles at the end.
                    ['^\\.', '^\\./.*\\.scss$'],
                ],
            },
        ],
        'sort-vars': 'error',
        'spaced-comment': 'error',
        'strict': 'error',
        'i18next/no-literal-string': ['error', {markupOnly: true}],
    },
    overrides: [
        {
            files: ['src/**/*.d.ts'],
            rules: {
                'camelcase': 'off',
                'init-declarations': 'off',
            },
        },
        {
            files: ['webpack.config.ts'],
            rules: {
                'import/no-default-export': 'off',
                'import/no-named-as-default': 'off',
            },
        },
        {
            files: ['.prettierrc.js', '.stylelintrc.js'],
            rules: {
                'no-undef': 'off',
            },
        },
    ],
    globals: {
        __IS_DEV__: true,
    },
};

// eslint-disable-next-line no-undef
module.exports = config;
