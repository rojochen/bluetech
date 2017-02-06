var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    cache: true,
    devtool: 'eval',
    entry: {
        app: "./src/config/main.js"
    },
    output: {
        libraryTarget: 'umd',
        umdNamedDefine: true,
        publicPath: "assets/js/",
        filename: "[name].js",
        chunkFilename: "chunk.[id].js",
        library: 'pokemon',
    },
    module: {

    }
};