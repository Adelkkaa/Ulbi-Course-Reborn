import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import webpack from "webpack";

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  return {
    mode: "development",
    entry: options.paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: options.paths.build,
      clean: true,
    },
    module: buildLoaders(),
    resolve: buildResolvers(),
    plugins: buildPlugins(options),
  };
};
