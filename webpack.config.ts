import path from 'node:path';
import webpack from 'webpack';

import {buildWebpackConfig} from './config/build/buildWebpackConfig';
import {BuildEnvironment, BuildPath} from './config/build/types/config';

export default (environment: BuildEnvironment): webpack.Configuration => {
    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        css: path.resolve(__dirname, 'src', 'app', 'css', 'root.scss'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = environment.mode || 'development';
    const isDevelopment = mode === 'development';
    const PORT = environment.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev: isDevelopment,
        port: PORT,
    });

    return config;
};
