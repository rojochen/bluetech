const webpack = require("webpack");
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const nodeEnvironment = process.env.NODE_ENV;

const config = {
    cache: true,
    devtool: 'eval',
    entry: {
        bluetech: `${__dirname}/src/config/main.js`,
        style: `${__dirname}/src/config/style.js`
    },
    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: "[name].js",
        library: 'bluetech',
        libraryTarget: "umd", // defined with AMD defined method
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
                loader: 'url?limit=100000'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style',
                    loader: [{
                        loader: 'css',
                        query: {
                            modules: false,
                            sourceMaps: true
                        }
                    }, "sass"]
                })
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style',
                    loader: [{
                        loader: 'css',
                        query: {
                            modules: false,
                            sourceMaps: true
                        }
                    }, "sass"]
                })
            },
            {
                test: /\.(jpg|woff|svg|ttf|png|eot)([\?]?.*)$/,
                loader: "file?name=../css/img/[name].[ext]"
            },
            {
                test: /[\/\\]angular\.js$/,
                loader: "exports?window.angular"
            },
            {
                test: /pnotify.*\.js$/,
                loader: "imports?define=>false,global=>window"
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

    ]

}


switch (nodeEnvironment) {
    case 'production':
        config.devtool = 'eval';
        config.plugins.push(
            new ExtractTextPlugin({
                filename: "../css/bluetech.min.css",
                disable: false,
                allChunks: true
            }), new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                sourceMap: false,
                // 删除所有的注释
                comments: false,
                compress: {
                    // 在UglifyJs删除没有用到的代码时不输出警告
                    warnings: false,
                    drop_console: true,
                    // 内嵌定义了但是只用到一次的变量
                    collapse_vars: true,
                    reduce_vars: true,
                },
                mangle: {
                    except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad']
                }
            })
        );
        config.plugins.push(
            new webpack.LoaderOptionsPlugin({
                minimize: true
            })
        );
        config.plugins.push(
            new ImageminPlugin({
                disable: process.env.NODE_ENV !== 'production', // Disable during development
                pngquant: {
                    quality: '95-100'
                }
            })
        );
        config.plugins.push(new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-tw/));
        config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
            name: "bluetech",
            // (Give the chunk a different name)
            minChunks: Infinity,
            children: true,
            async: true,
            // (with more entries, this ensures that no other module
            //  goes into the vendor chunk)
        }));
        break;

    case 'test':
        config.entry = './index.js';
        break;

    case 'development':
        config.entry = ['./index.js', 'webpack/hot/dev-server'];
        config.devtool = 'source-map';
        break;

    default:
        console.warn('Unknown or Undefigned Node Environment. Please refer to package.json for available build commands.');
}

module.exports = config;