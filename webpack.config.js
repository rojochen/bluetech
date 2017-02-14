var webpack = require("webpack");
var path = require('path');
// var DashboardPlugin = require("webpack-dashboard/plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    cache: true,
    devtool: 'eval',
    entry: {
        bluetech: __dirname + "/src/config/main.js",
        style: __dirname + "/src/config/style.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        library: 'bluetech',
        libraryTarget: "amd", // defined with AMD defined method
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|vendors)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(png|gif)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [{
                        loader: 'css-loader',
                        query: {
                            modules: false,
                            sourceMaps: true
                        }
                    }, "sass-loader"]
                })
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [{
                        loader: 'css-loader',
                        query: {
                            modules: false,
                            sourceMaps: true
                        }
                    }, "sass-loader"]
                })
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [{
                        loader: 'css-loader',
                        query: {
                            modules: false,
                            sourceMaps: true
                        },
                        loader: 'sass-loader'
                    }]
                })
            },
            {
                test: /\.(jpg|woff|svg|ttf|eot)([\?]?.*)$/,
                loader: "file-loader?name=css/img/[name].[ext]"
            },
            {
                test: /[\/\\]angular\.js$/,
                loader: "exports-loader?window.angular"
            },
            {
                test: /pnotify.*\.js$/,
                loader: "imports-loader?define=>false,global=>window"
            }
        ]
    },
    resolve: {
        modules: [
            "vendors"
        ],
        extensions: [".js", ".json", ".jsx", ".css"],
        alias: {
            angular: 'angular/angular',
            'angular-route': 'angular-route/angular-route.min',
            "angular-datatables": "angular-datatables/dist/angular-datatables",
            bootstrap: 'bootstrap/dist/js/bootstrap.min',
            'bootstrap-switch': 'bootstrap-switch/dist/js/bootstrap-switch.min',
            'bootstrap-progressbar': 'bootstrap-progressbar/bootstrap-progressbar',
            cropper: 'cropper/dist/cropper.min',
            daterangepicker: "bootstrap-daterangepicker/daterangepicker",
            "datatables.net": 'datatables.net-bs/js/dataTables.bootstrap',
            echarts: 'echarts/dist/echarts.min',
            'iCheck': 'iCheck/icheck.min',
            'ion.rangeSlider': 'ion.rangeSlider/js/ion.rangeSlider.min',
            jquery: 'jquery/dist/jquery.min',
            'jquery.blockUI': 'blockUI/jquery.blockUI',
            'jquery.tagsinput': 'jquery.tagsinput/src/jquery.tagsinput',
            'jquery-slimscroll': 'jquery-slimscroll/jquery.slimscroll.min',
            'jquery-knob': 'jquery-knob/dist/jquery.knob.min',
            'jquery.inputmask': 'jquery.inputmask/dist/min/jquery.inputmask.bundle.min',
            nprogress: 'nprogress/nprogress',
            moment: 'moment/moment',
            'mjolnic-bootstrap-colorpicker': 'mjolnic-bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min',
            PNotify: 'pnotify/dist/pnotify',
            "promise-finally": "promise-finally/Main",
            skycons: 'skycons/skycons',
            select2: 'select2/dist/js/select2.full.min',
            sweetalert2: 'sweetalert2/dist/sweetalert2',
            parsleyjs: 'parsleyjs/dist/parsley.min',
            'jquery-mousewheel': 'jquery-mousewheel/jquery.mousewheel.min'
        }
    },
    plugins: [
        new webpack.optimize.DedupePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin({
            filename: "css/bluetech.css",
            disable: false,
            allChunks: true
        }), new webpack.optimize.UglifyJsPlugin({
            beautify: true,
            minimize: true,
            sourceMap: true,
            compress: {
                drop_console: true
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad']
            }
        })
    ]

}