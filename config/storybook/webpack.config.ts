import path from 'path';
import webpack, {RuleSetRule} from 'webpack';

import {buildCssLoader} from '../build/loaders/buildCssLoader';
import {BuildPath} from '../build/types/config';

export default function storybookWebpackConfig({config}: {config: webpack.Configuration}): webpack.Configuration {
    const paths: BuildPath = {
        build: '',
        html: '',
        entry: '',
        css: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve?.modules?.push(paths.src);
    config.resolve?.modules?.push('.ts', '.tsx');

    if (config.module && config.module.rules) {
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module.rules.map((rule) => {
            if (/svg/.test((rule as RuleSetRule).test as string)) {
                return {...(rule as RuleSetRule), exclude: /\.svg$/i};
            }

            return rule;
        }) as Array<webpack.RuleSetRule>;

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
    }

    config.module?.rules?.push(buildCssLoader(true));

    return config;
}
