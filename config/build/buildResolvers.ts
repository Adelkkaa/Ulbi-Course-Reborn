import webpack from 'webpack';

export const buildResolvers = (): webpack.ResolveOptions => ({
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: ['node_modules', 'src'],
    mainFiles: ['index'],
    alias: {},
});
