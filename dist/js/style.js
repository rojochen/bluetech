/*!
 * Admin is a free to use Bootstrap admin template base on gentelella admin
 * @version v0.2.3
 * @link [object Object]
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("bluetech", [], factory);
	else if(typeof exports === 'object')
		exports["bluetech"] = factory();
	else
		root["bluetech"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
/******/ })
/************************************************************************/
/******/ (Array(36).concat([
/* 36 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/css/layer/default/layer.css\n// module id = 36\n// module chunks = 2\n\n//# sourceURL=webpack:///./src/css/layer/default/layer.css?");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css\n// module id = 37\n// module chunks = 2\n\n//# sourceURL=webpack:///./vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css?");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./vendors/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css\n// module id = 38\n// module chunks = 2\n\n//# sourceURL=webpack:///./vendors/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css?");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./vendors/bootstrap/dist/css/bootstrap.min.css\n// module id = 39\n// module chunks = 2\n\n//# sourceURL=webpack:///./vendors/bootstrap/dist/css/bootstrap.min.css?");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./vendors/cropper/dist/cropper.min.css\n// module id = 40\n// module chunks = 2\n\n//# sourceURL=webpack:///./vendors/cropper/dist/cropper.min.css?");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./vendors/datatables.net-bs/css/dataTables.bootstrap.min.css\n// module id = 41\n// module chunks = 2\n\n//# sourceURL=webpack:///./vendors/datatables.net-bs/css/dataTables.bootstrap.min.css?");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./vendors/datatables.net-buttons-bs/css/buttons.bootstrap.min.css\n// module id = 42\n// module chunks = 2\n\n//# sourceURL=webpack:///./vendors/datatables.net-buttons-bs/css/buttons.bootstrap.min.css?");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./vendors/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.min.css\n// module id = 43\n// module chunks = 2\n\n//# sourceURL=webpack:///./vendors/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.min.css?");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./vendors/datatables.net-responsive-bs/css/responsive.bootstrap.min.css\n// module id = 44\n// module chunks = 2\n\n//# sourceURL=webpack:///./vendors/datatables.net-responsive-bs/css/responsive.bootstrap.min.css?");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./vendors/datatables.net-scroller-bs/css/scroller.bootstrap.min.css\n// module id = 45\n// module chunks = 2\n\n//# sourceURL=webpack:///./vendors/datatables.net-scroller-bs/css/scroller.bootstrap.min.css?");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./vendors/google-code-prettify/bin/prettify.min.css\n// module id = 46\n// module chunks = 2\n\n//# sourceURL=webpack:///./vendors/google-code-prettify/bin/prettify.min.css?");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./vendors/iCheck/skins/flat/green.css\n// module id = 47\n// module chunks = 2\n\n//# sourceURL=webpack:///./vendors/iCheck/skins/flat/green.css?");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./vendors/ion.rangeSlider/css/ion.rangeSlider.css\n// module id = 48\n// module chunks = 2\n\n//# sourceURL=webpack:///./vendors/ion.rangeSlider/css/ion.rangeSlider.css?");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./vendors/ion.rangeSlider/css/ion.rangeSlider.skinFlat.css\n// module id = 49\n// module chunks = 2\n\n//# sourceURL=webpack:///./vendors/ion.rangeSlider/css/ion.rangeSlider.skinFlat.css?");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./vendors/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css\n// module id = 50\n// module chunks = 2\n\n//# sourceURL=webpack:///./vendors/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css?");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./vendors/normalize-css/normalize.css\n// module id = 51\n// module chunks = 2\n\n//# sourceURL=webpack:///./vendors/normalize-css/normalize.css?");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./vendors/nprogress/nprogress.css\n// module id = 52\n// module chunks = 2\n\n//# sourceURL=webpack:///./vendors/nprogress/nprogress.css?");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./vendors/pnotify/dist/pnotify.buttons.css\n// module id = 53\n// module chunks = 2\n\n//# sourceURL=webpack:///./vendors/pnotify/dist/pnotify.buttons.css?");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./vendors/pnotify/dist/pnotify.css\n// module id = 54\n// module chunks = 2\n\n//# sourceURL=webpack:///./vendors/pnotify/dist/pnotify.css?");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./vendors/select2/dist/css/select2.min.css\n// module id = 55\n// module chunks = 2\n\n//# sourceURL=webpack:///./vendors/select2/dist/css/select2.min.css?");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./vendors/starrr/dist/starrr.css\n// module id = 56\n// module chunks = 2\n\n//# sourceURL=webpack:///./vendors/starrr/dist/starrr.css?");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./vendors/sweetalert2/dist/sweetalert2.min.css\n// module id = 57\n// module chunks = 2\n\n//# sourceURL=webpack:///./vendors/sweetalert2/dist/sweetalert2.min.css?");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./vendors/switchery/dist/switchery.min.css\n// module id = 58\n// module chunks = 2\n\n//# sourceURL=webpack:///./vendors/switchery/dist/switchery.min.css?");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/scss/custom.scss\n// module id = 59\n// module chunks = 2\n\n//# sourceURL=webpack:///./src/scss/custom.scss?");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./vendors/font-awesome/scss/font-awesome.scss\n// module id = 60\n// module chunks = 2\n\n//# sourceURL=webpack:///./vendors/font-awesome/scss/font-awesome.scss?");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(39);\n__webpack_require__(60);\n__webpack_require__(52);\n\n__webpack_require__(47);\n__webpack_require__(37);\n__webpack_require__(46);\n__webpack_require__(55);\n__webpack_require__(58);\n__webpack_require__(56);\n__webpack_require__(51);\n__webpack_require__(48);\n__webpack_require__(49);\n// require(\"../../vendors/mjolnic-bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css\");\n__webpack_require__(40);\n__webpack_require__(54);\n__webpack_require__(53);\n//require(\"../../vendors/pnotify/dist/pnotify.nonblock.css\");\n__webpack_require__(41);\n__webpack_require__(42);\n__webpack_require__(43);\n__webpack_require__(44);\n__webpack_require__(45);\n__webpack_require__(38);\n__webpack_require__(57);\n__webpack_require__(36);\n//  var layer= require('../../vendors/layer/build/layer.js');\n\n// require('../../vendors/ng-table/dist/ng-table.css');\n\n\n//left mune scrollbar\n__webpack_require__(50);\n\n__webpack_require__(59);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/config/style.js\n// module id = 61\n// module chunks = 2\n\n//# sourceURL=webpack:///./src/config/style.js?");

/***/ })
/******/ ]));
});