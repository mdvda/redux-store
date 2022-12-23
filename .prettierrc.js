module.exports = {
    tabWidth: 4,
    printWidth: 140,
    singleQuote: true,
    trailingComma: 'es5',
    arrowParens: 'always',
    endOfLine: 'auto',
    bracketSpacing: true,
    semi: true,
    overrides: [
        {
            files: ['*.json', '*.yml', '*.yaml'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
