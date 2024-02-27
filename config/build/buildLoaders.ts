// eslint-disable-next-line import/no-named-as-default
import webpack from 'webpack';

import {BuildOptions} from './types/config';

export function buildLoaders({isDev}: BuildOptions): Array<webpack.RuleSetRule> {
    const fileNameMask = isDev ? '[name]-[md5:hash:hex:7].[ext]' : '[md5:hash:hex:7].[ext]';

    const svgLoader = {
        // regular svg rule
        test: /\.svg$/,
        // .map.svg files are special. IDS inside of them are present country regions.
        // To prevent id cutting by svgr, there is a separate rule below
        use: ['@svgr/webpack'], // svgr by default cuts all svgs and attrs from svg-files
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {name: fileNameMask, limit: 0},
            },
        ],
    };

    const cssLoader = {
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

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [typescriptLoader, cssLoader, svgLoader, fileLoader];
}
