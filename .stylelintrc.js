// @ts-check

/** @type {import('stylelint').Config} */
const config = {
    extends: ['stylelint-config-standard-scss', 'stylelint-config-sass-guidelines', 'stylelint-config-prettier-scss'],
    plugins: ['stylelint-order'],
    reportInvalidScopeDisables: true,
    reportNeedlessDisables: true,
    rules: {
        'alpha-value-notation': null,
        'color-function-notation': null,
        'declaration-block-no-redundant-longhand-properties': [true, {ignoreShorthands: ['flex-flow']}],
        'declaration-property-value-no-unknown': [true, {ignoreProperties: {'/.+/': '/\\$/'}}],
        'hue-degree-notation': 'number',
        'max-nesting-depth': 3,
        'order/order': [
            [
                'custom-properties',
                'dollar-variables',
                {
                    type: 'at-rule',
                    name: 'extend',
                },
                {
                    type: 'at-rule',
                    name: 'include',
                    hasBlock: false,
                },
                'declarations',
                {
                    type: 'at-rule',
                    name: 'include',
                    hasBlock: true,
                },
                'rules',
            ],
        ],
        'order/properties-alphabetical-order': true,
        'property-no-unknown': [true, {ignoreSelectors: ':export'}],
        'selector-class-pattern': '^[a-zA-Z\\-\\d_]+$',
        'selector-combinator-disallowed-list': ['>', '+', '~', '*'],
        'selector-max-universal': 0,
        'selector-pseudo-class-no-unknown': [true, {ignorePseudoClasses: ['global', 'local', 'export']}],
    },
    overrides: [
        {
            files: ['reset.scss'],
            rules: {'selector-max-universal': 1},
        },
    ],
};

module.exports = config;
