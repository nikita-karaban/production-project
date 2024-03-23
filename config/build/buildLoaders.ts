// eslint-disable-next-line import/no-named-as-default
import webpack from 'webpack';

import {buildCssLoader} from './loaders/buildCssLoader';
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

    const babelLoader = {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['en', 'ru'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    const cssLoader = buildCssLoader(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [babelLoader, typescriptLoader, cssLoader, svgLoader, fileLoader];
}
