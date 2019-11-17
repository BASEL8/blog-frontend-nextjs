webpackHotUpdate("static/development/pages/admin.js",{

/***/ "./actions/tag.js":
/*!************************!*\
  !*** ./actions/tag.js ***!
  \************************/
/*! exports provided: createTag, getTags, getTag, removeTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTag", function() { return createTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTags", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTag", function() { return getTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTag", function() { return removeTag; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./actions/auth.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config.js");




var createTag = function createTag(tag, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/tag"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(tag)
  }).then(function (res) {
    Object(_auth__WEBPACK_IMPORTED_MODULE_2__["handleResponse"])(res);
    return res.json();
  })["catch"](function (error) {
    return error;
  });
};
var getTags = function getTags() {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/tags"), {
    method: 'GET'
  }).then(function (res) {
    return res.json();
  })["catch"](function (error) {
    return error;
  });
};
var getTag = function getTag(slug) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/tag/").concat(slug), {
    method: 'GET'
  }).then(function (res) {
    return res.json();
  })["catch"](function (error) {
    return error;
  });
};
var removeTag = function removeTag(slug, token, user) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/tag/").concat(slug), {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(user)
  }).then(function (res) {
    Object(_auth__WEBPACK_IMPORTED_MODULE_2__["handleResponse"])(res);
    return res.json();
  })["catch"](function (error) {
    return error;
  });
};

/***/ }),

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
    getTagsData(token, month_, year_).then(function (res) {
      if (res.error) {
        return console.log(res.error);
      }

      console.log(res);

      if (res.data !== undefined) {
        setChartDataThisMonth({
          date: res.data.filter(function (_ref) {
            var month = _ref._id.month;
            return month === month_;
          }).sort(function (a, b) {
            return a._id.day > b._id.day ? 1 : b._id.day > a._id.day ? -1 : 0;
          }).map(function (_ref2, i) {
            var _ref2$_id = _ref2._id,
                year = _ref2$_id.year,
                month = _ref2$_id.month,
                day = _ref2$_id.day;
            return day;
          }),
          data: res.data.filter(function (_ref3) {
            var month = _ref3._id.month;
            return month === month_;
          }).sort(function (a, b) {
            return a._id.day > b.last_nom ? 1 : b._id.day > a._id.day ? -1 : 0;
          }).map(function (_ref4, i) {
            var count = _ref4.count;
            return count;
          })
        });
      }
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
      lineNumber: 41
    },
    __self: this
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "demo-simple-select-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
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
      lineNumber: 69
    },
    __self: this
  }, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(function (month, i) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: i,
      value: i + 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, month);
  }))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "demo-simple-select-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
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
      lineNumber: 80
    },
    __self: this
  }, Array(10).fill('').map(function (month, i) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: i,
      value: 2019 + i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, 2019 + i);
  }))));
});

/***/ })

})
//# sourceMappingURL=admin.js.48abcf7fb6c1ed049496.hot-update.js.map