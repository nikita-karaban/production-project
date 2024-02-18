import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      {
        loader: "style-loader",
        options: { attributes: { class: "my-css-module" } },
      },
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          sourceMap: isDev,
          modules: {
            namedExport: true,
            exportLocalsConvention: "dashesOnly",
            localIdentName: isDev ? "[local]----[hash:6]" : "[hash:6]",
            auto: (resourcePath: string) => {
              return !resourcePath.endsWith("root.scss");
            },
          },
        },
      },
      // Compiles Sass to CSS
      { loader: "sass-loader", options: { sourceMap: isDev } },
      {
        loader: "sass-resources-loader",
        options: {
          hoistUseStatements: true,
          resources: ["src/css/var/var.scss"],
        },
      },
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriptLoader, cssLoader];
}
