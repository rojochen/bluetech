const webpack = require("webpack"),
    path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    pkg = require("./package.json"),
    banner = pkg.description + '\n' +
    '@version v' + pkg.version + '\n' +
    '@link ' + pkg.homepage + '\n' +
    '@license MIT License, http://www.opensource.org/licenses/MIT';
console.log(pkg);
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
        libraryTarget: "umd2", // defined with AMD defined method
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
                            sourceMaps: false
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
                            sourceMaps: false
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
        new ExtractTextPlugin({
            filename: "../css/bluetech.min.css",
            disable: false,
            allChunks: true
        }),
        new webpack.LoaderOptionsPlugin({
            include: /\.min\.js$/,
            minimize: true
        }),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-tw/),
        new webpack.BannerPlugin(banner)
    ]

}