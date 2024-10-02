import webpack from "webpack";

export const buildLoaders = (): webpack.ModuleOptions => {

    const tsLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      }

      const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      }

    return {
        rules: [tsLoader, sassLoader]
    }

}