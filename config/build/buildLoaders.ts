import webpack from "webpack";

export const buildLoaders = (): webpack.ModuleOptions => {

    const tsLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      }

    return {
        rules: [tsLoader]
    }

}