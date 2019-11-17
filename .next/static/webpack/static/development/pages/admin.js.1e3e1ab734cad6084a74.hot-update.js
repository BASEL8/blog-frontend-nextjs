webpackHotUpdate("static/development/pages/admin.js",{

/***/ "./components/admin/analysers/TagsAnalyser.jsx":
/*!*****************************************************!*\
  !*** ./components/admin/analysers/TagsAnalyser.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/tag */ "./actions/tag.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/auth */ "./actions/auth.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");


var _jsxFileName = "/Users/baselmunawwar/Desktop/nextjs/firstApp/components/admin/analysers/TagsAnalyser.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(11),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      month_ = _React$useState2[0],
      setMonth = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(2019),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      year_ = _React$useState4[0],
      setYear = _React$useState4[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    date: [],
    data: []
  }),
      chartDataThisMonth = _useState[0],
      setChartDataThisMonth = _useState[1];

  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_4__["getCookie"])('token');
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Object(_actions_tag__WEBPACK_IMPORTED_MODULE_3__["getTags"])(token).then(function (res) {
      if (res.error) {
        return console.log(res.error);
      }

      console.log(res);

      if (res.data !== undefined) {}
    });
  }, [month_, year_]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_5__["Line"], {
    data: {
      labels: chartDataThisMonth.date,
      datasets: [{
        label: 'Tags dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 1,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chartDataThisMonth.data
      }]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "demo-simple-select-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "chose Month"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__["default"], {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: month_,
    onChange: function onChange(event) {
      return setMonth(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(event.target.value));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(function (month, i) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: i,
      value: i + 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, month);
  }))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "demo-simple-select-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "chose Month"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_10__["default"], {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: year_,
    onChange: function onChange(event) {
      return setYear(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(event.target.value));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, Array(10).fill('').map(function (month, i) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: i,
      value: 2019 + i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, 2019 + i);
  }))));
});

/***/ })

})
//# sourceMappingURL=admin.js.1e3e1ab734cad6084a74.hot-update.js.map