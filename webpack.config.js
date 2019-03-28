/* eslint-env node */
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: require('path').resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "./",
        library: "MyLibrary",
        libraryTarget: "umd"
    },
    resolve: {
        extensions: ['.js', ".c", ".cpp"]
    },
    module: {
        rules: [
            {
                test: /\.(c|cpp)$/,
                use: {
                    loader: 'cpp-wasm-loader'
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()]
}