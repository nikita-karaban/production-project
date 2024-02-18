import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from 'webpack';
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths: path, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: path.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: isDev ? '[name].css' : 'style.[hash:6].css',
            chunkFilename: isDev ? '[id].css' : '[id].[hash:6].css',
        }),
    
    ]
}
