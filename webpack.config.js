var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    cache: true,
    devtool: 'eval',
    entry: {
        bluetech: "./src/config/main.js",
        style: "./src/config/style.js"
    },
    output: {
        path: "./dist/js",
        filename: "[name].js",
        library: 'bluetech',
    },
    resolve: {
        modulesDirectories: ['vendors'],
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
        },
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            // {
            //     test: /\.js$/,
            //     exclude: /(node_modules|vendors)/,
            //     loader: 'babel-loader',
            //     query: {
            //         presets: ['es2015']
            //     }
            // },
            {
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
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery',
            'root.jQuery': 'jquery',
            'global.jQuery': 'jquery',
            'global.$': 'jquery',
            'window.$': 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({
            debug: true,
            minimize: false,
            sourceMap: true,
            output: {
                comments: true
            },
            compressor: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new ExtractTextPlugin("../css/bluetech.css", {
            allChunks: true
        })
    ]
};