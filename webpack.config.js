var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    cache: true,
    devtool: 'eval',
    entry: {
        app: "./src/config/main.js",
        style: "./src/config/style.js"
    },
    output: {
        path: "./dist/js",
        filename: "[name].js",
        library: 'bluetech',
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        alias: {
            'angular': 'angular/angular',
            'jquery': 'jquery/dist/jquery.min',
            'moment': 'moment/src/moment',
            'PNotify': 'pnotify/dist/pnotify'
        },
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.(png|gif)$/,
            loader: 'url-loader?limit=100000'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css?minimize!sass")
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style", "css?minimize!sass")
        }, {
            test: /\.(jpg|woff|svg|ttf|eot)([\?]?.*)$/,
            loader: "file-loader?name=../css/img/[name].[ext]"
        }, {
            test: /[\/\\]angular\.js$/,
            loader: "exports?window.angular"
        }, {
            test: /pnotify.*\.js$/,
            loader: "imports?define=>false,global=>window"
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'root.jQuery': 'jquery',
            'global.jQuery': 'jquery',
            'global.$': 'jquery',
            'window.$': 'jquery',
            'angular': 'angular'
        }),
        new webpack.optimize.UglifyJsPlugin({
            debug: true,
            minimize: true,
            sourceMap: true,
            output: {
                comments: false
            },
            compressor: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new ExtractTextPlugin("../css/main.css", {
            allChunks: true
        })
    ]
};