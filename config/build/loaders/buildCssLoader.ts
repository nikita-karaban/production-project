import webpack from 'webpack';

export function buildCssLoader(isDev: boolean): webpack.RuleSetRule {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            {
                loader: 'style-loader',
                options: {attributes: {class: 'my-css-module'}},
            },
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    sourceMap: isDev,
                    modules: {
                        namedExport: true,
                        exportLocalsConvention: 'dashesOnly',
                        localIdentName: isDev ? '[local]----[hash:6]' : '[hash:6]',
                        auto: (resourcePath: string) => !resourcePath.endsWith('root.scss'),
                    },
                },
            },
            // Compiles Sass to CSS
            {loader: 'sass-loader', options: {sourceMap: isDev}},
            {
                loader: 'sass-resources-loader',
                options: {
                    hoistUseStatements: true,
                    resources: ['src/app/css/var/var.scss'],
                },
            },
        ],
    };
}
