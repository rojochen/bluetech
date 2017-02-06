// var $ = require('../../vendors/jquery/dist/jquery.min.js');
define(['jquery', 'angular', 'moment', 'PNotify'], function (jquery, angular, moment, PNotify) {
    console.log(angular);

    var $ = jquery;
    global.jQuery = $;
    global.$ = $;
    jQuery = jquery;
    window.jQuery = $;
    window.$ = $;
    global.moment = moment;
    global.PNotify = PNotify;



    require('bootstrap')

    require('nprogress');

    require('bootstrap-progressbar');



    // Plugin

    //left mune scrollbar
    require('../../vendors/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js');

    global.echarts = require('echarts');
    require('iCheck');
    require('skycons');
    require('bootstrap-daterangepicker');
    require('../../vendors/blockUI/jquery.blockUI.js');
    require('../../vendors/select2/dist/js/select2.full.min.js');
    require('../../vendors/jquery.tagsinput/src/jquery.tagsinput.js');
    require('../../vendors/parsleyjs/dist/parsley.min.js');
    require('../../vendors/datatables.net/js/jquery.dataTables.min.js');
    require('../../vendors/datatables.net-bs/js/dataTables.bootstrap.min.js');
    require('../../vendors/ion.rangeSlider/js/ion.rangeSlider.min.js');
    require('../../vendors/jquery-slimscroll/jquery.slimscroll.min.js');
    require('../../vendors/pnotify/dist/pnotify.js');
    require('../../vendors/sweetalert2/dist/sweetalert2.js');
    require('../../vendors/bootstrap-switch/dist/js/bootstrap-switch.min.js');
    require('../../vendors/mjolnic-bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js');
    require('../../vendors/jquery.inputmask/dist/min/jquery.inputmask.bundle.min.js');
    require('../../vendors/jquery-knob/dist/jquery.knob.min.js');
    require('../../vendors/cropper/dist/cropper.min.js');
    require('promise-finally');
    // util
    require("../config/util.js");
    require('angular-route');
    require('angular-datatables');

    //layer
    var layer = require('../../vendors/layer/build/layer.js');
    layer.config({
        path: false
    });
    angular.module('pokemon', ['ngRoute', 'datatables']);

    return angular;
});