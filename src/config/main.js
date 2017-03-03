const $ = require("jquery");
const moment = require("moment");
const PNotify = require("PNotify");

require("jquery-mousewheel");

global.jQuery = $;
global.$ = $;

window.jQuery = $;
window.$ = $;
global.moment = moment;
global.PNotify = PNotify;


require("../../vendors/bootstrap/dist/js/bootstrap.min.js");
require("../../vendors/nprogress/nprogress.js");
require("../../vendors/bootstrap-progressbar/bootstrap-progressbar.min.js");

//left mune scrollbar
require('datatables.net');
require("datatables.net-bs");
require("../../vendors/jquery-mousewheel/jquery.mousewheel.min.js");
require("../../vendors/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js");
require("../../vendors/iCheck/icheck.js");
require("../../vendors/skycons/skycons.js");
require("../../vendors/bootstrap-daterangepicker/daterangepicker.js");
require('../../vendors/blockUI/jquery.blockUI.js');
require('../../vendors/select2/dist/js/select2.full.min.js');
require('../../vendors/jquery.tagsinput/src/jquery.tagsinput.js');
require('../../vendors/parsleyjs/dist/parsley.min.js');
require('../../vendors/ion.rangeSlider/js/ion.rangeSlider.min.js');
require('../../vendors/jquery-slimscroll/jquery.slimscroll.min.js');
require('../../vendors/pnotify/dist/pnotify.js');
require('../../vendors/sweetalert2/dist/sweetalert2.js');
require('../../vendors/bootstrap-switch/dist/js/bootstrap-switch.min.js');
require('../../vendors/jquery.inputmask/dist/min/jquery.inputmask.bundle.min.js');
require('../../vendors/jquery-knob/dist/jquery.knob.min.js');
require('../../vendors/cropper/dist/cropper.min.js');
require("../../vendors/promise-finally/Main.js");

require('./style.js');



const layer = require('../../vendors/layer/build/layer.js');
layer.config({
    path: false
});

// util
require("../config/util.js");

export default "bluetech";