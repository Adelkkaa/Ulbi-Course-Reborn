import webpack from 'webpack';
import { BuildOptions } from './types/config';

export const buildResolvers = (options: BuildOptions): webpack.ResolveOptions => ({
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
        '@': options.paths.src,
    },
    fallback: {
        'react/jsx-runtime': 'react/jsx-runtime.js',
        'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
    },

});
