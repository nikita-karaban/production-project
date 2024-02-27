/** @type {import('prettier').Config} */
const config = {
    printWidth: 120,
    tabWidth: 4,
    singleQuote: true,
    bracketSpacing: false,
    quoteProps: 'consistent',
    overrides: [
        {
            files: ['*.{yml,yaml}', './public/static/feed-templates/*', 'package.json', 'package-lock.json'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};

module.exports = config;
