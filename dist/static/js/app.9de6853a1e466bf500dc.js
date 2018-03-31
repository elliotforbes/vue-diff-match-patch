webpackJsonp([1],{

/***/ "40sN":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("RGNi")
}
var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("RePM"),
  /* template */
  __webpack_require__("OdSi"),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-a648563c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "N+ha":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Demo__ = __webpack_require__("p6Ua");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Demo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Demo__);



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  render: h => h(__WEBPACK_IMPORTED_MODULE_1__Demo___default.a)
});

/***/ }),

/***/ "OdSi":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "chart"
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.innerHtml)
    }
  })])
},staticRenderFns: []}

/***/ }),

/***/ "RGNi":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "RePM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"c3\"");
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Chart',
  props: ['type', 'data', 'axes', 'axis', 'padding', 'tooltip', 'legend'],
  data: function () {
    return {
      id: null,
      innerHtml: null
    };
  },
  mounted: function () {
    let chart = __WEBPACK_IMPORTED_MODULE_0_c3___default.a.generate({
      data: this.data,
      axis: this.axis,
      padding: this.padding,
      tooltip: this.tooltip,
      legend: this.legend
    });
    console.log(chart.element);
    this.innerHtml = chart.element;
  }
});

/***/ }),

/***/ "XLAr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Chart__ = __webpack_require__("40sN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Chart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Chart__);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Demo',
  data: function () {
    return {
      data1: {
        columns: [['data1', 300, 100, 250, 150, 300, 150, 500], ['data2', 100, 200, 150, 50, 100, 250, 300]]
      },
      data2: {
        columns: [['data1', 300, 100, 250, 150, 300, 150, 500], ['data2', 100, 200, 150, 50, 100, 250, 300]],
        type: 'bar'
      }
    };
  },
  components: {
    'chart': __WEBPACK_IMPORTED_MODULE_0__components_Chart___default.a
  }
});

/***/ }),

/***/ "cQWs":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h2', [_vm._v("Demo")]), _vm._v(" "), _c('chart', {
    attrs: {
      "data": _vm.data1
    }
  }), _vm._v(" "), _c('chart', {
    attrs: {
      "data": _vm.data2
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ "p6Ua":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("N+ha")
}
var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("XLAr"),
  /* template */
  __webpack_require__("cQWs"),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5dc4cfe0",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

},["NHnr"]);