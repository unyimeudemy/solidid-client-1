const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js', // Ensure you have an entry point
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Ensure extensions are included
        fallback: {
            "process": require.resolve("process/browser"),
            "path": require.resolve("path-browserify"),
            "buffer": require.resolve("buffer/"),
            "util": require.resolve("util/"),
            "stream": require.resolve("stream-browserify"),
            "assert": require.resolve("assert/"),
            "crypto": require.resolve("crypto-browserify"),
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
};
