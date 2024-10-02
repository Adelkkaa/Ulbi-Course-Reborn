import path from "path";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import webpack from "webpack";

const config = (env: BuildEnv): webpack.Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }
  
  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000
  
  
  return buildWebpackConfig({
    mode: mode,
    paths,
    isDev,
    port: PORT
  })
}

export default config;