define(['jquery', 'angular', 'moment', 'PNotify'], function (jquery, angular, moment, PNotify) {
    'use strict';

    var $ = jquery;
    global.jQuery = $;
    global.$ = $;
    jQuery = $;
    window.jQuery = $;
    window.$ = $;
    global.moment = moment;
    global.PNotify = PNotify;


    // Plugin
    require("../../vendors/bootstrap/dist/js/bootstrap.min.js");
    require("../../vendors/nprogress/nprogress.js");
    require("../../vendors/bootstrap-progressbar/bootstrap-progressbar.min.js");



    //left mune scrollbar
    require('../../vendors/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js');
    // require("../../node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js");

    global.echarts = require("../../vendors/echarts/dist/echarts.min.js");
    // global.echarts = require("../../node_modules/echarts/dist/echarts.min.js");

    require("../../vendors/iCheck/icheck.min.js");
    // require("../../node_modules/icheck/icheck.min.js");

    require("../../vendors/skycons/skycons.js");
    // require("../../node_modules/skycons/skycons.js");

    require("../../vendors/bootstrap-daterangepicker/daterangepicker.js");
    // require("../../node_modules/bootstrap-daterangepicker/daterangepicker.js");

    require('../../vendors/blockUI/jquery.blockUI.js');
    // require("../../node_modules/block-ui/jquery.blockUI.js");

    require('../../vendors/select2/dist/js/select2.full.min.js');
    // require("../../node_modules/select2/dist/js/select2.full.min.js");

    require('../../vendors/jquery.tagsinput/src/jquery.tagsinput.js');
    // require("../../node_modules/jquery-tags-input/dist/jquery.tagsinput.min.js");

    require('../../vendors/parsleyjs/dist/parsley.min.js');
    // require("../../node_modules/parsleyjs/dist/parsley.min.js");

    require('../../vendors/datatables.net/js/jquery.dataTables.min.js');
    // require("../../node_modules/datatables.net/js/jquery.dataTables.js");

    require('../../vendors/datatables.net-bs/js/dataTables.bootstrap.min.js');
    // require("../../node_modules/datatables.net-bs/js/dataTables.bootstrap.js");

    require('../../vendors/ion.rangeSlider/js/ion.rangeSlider.min.js');
    // require("../../node_modules/ion-rangeslider/js/ion.rangeSlider.min.js");

    require('../../vendors/jquery-slimscroll/jquery.slimscroll.min.js');
    // require("../../node_modules/jquery-slimscroll/jquery.slimscroll.min.js");

    require('../../vendors/pnotify/dist/pnotify.js');
    // require("../../node_modules/pnotify/dist/pnotify.js");

    require('../../vendors/sweetalert2/dist/sweetalert2.js');
    // require("../../node_modules/sweetalert2/dist/sweetalert2.min.js");

    require('../../vendors/bootstrap-switch/dist/js/bootstrap-switch.min.js');
    // require("../../node_modules/bootstrap-switch/dist/js/bootstrap-switch.min.js");

    // 這一個有問題
    require('../../vendors/mjolnic-bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js');

    require('../../vendors/jquery.inputmask/dist/min/jquery.inputmask.bundle.min.js');
    // require("../../node_modules/jquery.inputmask/dist/jquery.inputmask.bundle.js");


    require('../../vendors/jquery-knob/dist/jquery.knob.min.js');
    // require("../../node_modules/jquery-knob/dist/jquery.knob.min.js");

    require('../../vendors/cropper/dist/cropper.min.js');
    // require("../../node_modules/cropper/dist/cropper.min.js");

    // require('promise-finally');
    require("../../node_modules/promise-finally/dist/promise-finally.js");

    var layer = require('../../vendors/layer/build/layer.js');
    layer.config({
        path: false
    });
    // var layer = require("../../node_modules/layer/layer.min.js");
    // layer.config({
    //     path: false
    // });
    // util
    require("../config/util.js");


    // angular
    require("../../vendors/angular-route/angular-route.min.js");
    // require("../../node_modules/angular-route/angular-route.min.js");

    require("../../vendors/angular-datatables/dist/angular-datatables.min.js");
    // require("../../node_modules/angular-datatables/dist/angular-datatables.min.js");

    // angular.module('pokemon', ['ngRoute', 'datatables']);
    angular.module('bluetech', ['ngRoute', 'datatables']);


    return angular;
});