import type {Configuration as DevelopmentServerConfiguration} from 'webpack-dev-server';

import {BuildOptions} from './types/config';

export function buildDevServer(options: BuildOptions): DevelopmentServerConfiguration {
    return {
        port: options.port,
        open: false,
        historyApiFallback: true,
        hot: true,
    };
}
