import webpack from "webpack";

export const buildResolvers = (): webpack.ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: ["node_modules", "src"],
    mainFiles: ["index"],
    alias: {}
  };
};
