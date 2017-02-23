const webpack = require("webpack"),
    path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    pkg = require("./package.json"),
    banner = pkg.description + '\n' +
    '@version v' + pkg.version + '\n' +
    '@link ' + pkg.homepage + '\n' +
    '@license MIT License, http://www.opensource.org/licenses/MIT';
module.exports = {
    cache: true,
    devtool: 'source-map',
    entry: {
        "bluetech": `${__dirname}/src/config/main.js`,
        "bluetech.min": `${__dirname}/src/config/main.js`,
        "style": `${__dirname}/src/config/style.js`
    },
    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: "[name].js",
        library: 'bluetech',
        libraryTarget: "umd", // defined with AMD defined method
        umdNamedDefine: true
    },
    resolveLoader: {
        // 讓loader不用打
        moduleExtensions: ['-loader']
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|vendors)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(png|gif)$/,
                use: 'url?limit=100000'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style',
                    loader: [{
                        loader: 'css',
                        query: {
                            modules: false,
                            sourceMaps: false
                        }
                    }, "sass"]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style',
                    loader: [{
                        loader: 'css',
                        query: {
                            modules: false,
                            sourceMaps: false
                        }
                    }, "sass"]
                })
            },
            {
                test: /\.(jpg|woff|svg|ttf|png|eot)([\?]?.*)$/,
                use: "file?name=../css/img/[name].[ext]"
            },
            {
                test: /[\/\\]angular\.js$/,
                use: "exports?window.angular"
            },
            {
                test: /pnotify.*\.js$/,
                use: "imports?define=>false,global=>window"
            }
        ]
    },
    //禁止显示webpack的build.js太大的提示
    performance: {
        hints: false
    },
    target: "web",
    resolve: {
        modules: [
            "vendors"
        ],
        extensions: [".js", ".json", ".jsx", ".css"],
        alias: {
            angular: 'angular/angular',
            jquery: 'jquery/dist/jquery.min',
            moment: 'moment/moment',
            PNotify: 'pnotify/dist/pnotify',
            'jquery-mousewheel': 'jquery-mousewheel/jquery.mousewheel.min',
            "datatables.net": "datatables.net/js/jquery.dataTables.js",
            "datatables.net-bs": "datatables.net-bs/js/dataTables.bootstrap"
        }
    },
    externals: {
        "angular": {
            root: 'angular',
            amd: 'angular',
            commonjs2: 'angular',
            commonjs: 'angular'
        }
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "../css/bluetech.min.css",
            disable: false,
            allChunks: true
        }),
        // new webpack.LoaderOptionsPlugin({
        //     minimize: true
        // }),
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        }),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-tw/),
        new webpack.BannerPlugin(banner)
    ]

}