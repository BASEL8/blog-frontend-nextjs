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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/tag */ "./actions/tag.js");
/* harmony import */ var _actions_admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions/admin */ "./actions/admin.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions/auth */ "./actions/auth.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");



var _jsxFileName = "/Users/baselmunawwar/Desktop/nextjs/firstApp/components/admin/analysers/TagsAnalyser.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(11),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      month_ = _React$useState2[0],
      setMonth = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(2019),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      year_ = _React$useState4[0],
      setYear = _React$useState4[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    date: [],
    data: []
  }),
      chartData = _useState[0],
      setChartData = _useState[1];

  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["getCookie"])('token');
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_actions_tag__WEBPACK_IMPORTED_MODULE_4__["getTags"])().then(function (tags) {
      if (tags.error) {
        return console.log(tags.error);
      }

      return tags;
    }).then(function (tags) {
      console.log(tags);

      if (tags) {
        Object(_actions_admin__WEBPACK_IMPORTED_MODULE_5__["getTagsData"])(token, month_, year_).then(function (res) {
          if (res.error) {
            console.log(res.error);
          } else {
            var result = [res, tags].reduce(function (a, b) {
              return a.map(function (c, i) {
                return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, c, b[i]);
              });
            });
            console.log(result);
          }
        });
      }
    });
  }, [month_, year_]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_7__["Doughnut"], {
    data: {
      labels: ['Red', 'Green', 'Yellow'],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "demo-simple-select-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "chose Month"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12__["default"], {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: month_,
    onChange: function onChange(event) {
      return setMonth(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(event.target.value));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(function (month, i) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: i,
      value: i + 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, month);
  }))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "demo-simple-select-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "chose Month"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12__["default"], {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: year_,
    onChange: function onChange(event) {
      return setYear(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(event.target.value));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, Array(10).fill('').map(function (month, i) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: i,
      value: 2019 + i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, 2019 + i);
  }))));
});

/***/ })

})
//# sourceMappingURL=admin.js.e97b207f28403b849b6d.hot-update.js.map