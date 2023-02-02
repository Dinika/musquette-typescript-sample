const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    context: path.join(__dirname, 'app'),
    entry: [
        './js/app.ts',
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        'template': path.resolve(__dirname, 'app/index.html'),
        'inject': 'body'
    })],
};