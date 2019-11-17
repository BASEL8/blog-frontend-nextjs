webpackHotUpdate("static/development/pages/admin.js",{

/***/ "./components/admin/analysers/BlogAnalyser.jsx":
/*!*****************************************************!*\
  !*** ./components/admin/analysers/BlogAnalyser.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/admin */ "./actions/admin.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/auth */ "./actions/auth.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "/Users/baselmunawwar/Desktop/nextjs/firstApp/components/admin/analysers/BlogAnalyser.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(''),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      month = _React$useState2[0],
      setMonth = _React$useState2[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    date: [],
    data: []
  }),
      SelectedChartData = _useState2[0],
      setSelectedChartData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    date: [],
    data: []
  }),
      chartDataThisMonth = _useState3[0],
      setChartDataThisMonth = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    date: [],
    data: []
  }),
      chartDataThisYear = _useState4[0],
      setChartDataThisYear = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    date: [],
    data: []
  }),
      chartDataAllTimes = _useState5[0],
      setChartDataAllTimes = _useState5[1];

  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["getCookie"])('token');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_actions_admin__WEBPACK_IMPORTED_MODULE_2__["getBlogsDateData"])(token).then(function (res) {
      if (res.error) {
        return console.log(res.error);
      }

      console.log(res.data);
      setData(res.data);
      setChartDataThisMonth({
        date: res.data.sort(function (a, b) {
          return a._id.day > b._id.day ? 1 : b._id.day > a._id.day ? -1 : 0;
        }).map(function (_ref, i) {
          var _ref$_id = _ref._id,
              year = _ref$_id.year,
              month = _ref$_id.month,
              day = _ref$_id.day;
          return moment__WEBPACK_IMPORTED_MODULE_12___default()("".concat(year, "-").concat(month, "-").concat(day, "T00:00:00")).format('dddd');
        }),
        data: res.data.sort(function (a, b) {
          return a._id.day > b.last_nom ? 1 : b._id.day > a._id.day ? -1 : 0;
        }).map(function (_ref2, i) {
          var count = _ref2.count;
          return count;
        })
      });
      setChartDataThisYear({
        date: res.data.sort(function (a, b) {
          return a._id.day > b._id.day ? 1 : b._id.day > a._id.day ? -1 : 0;
        }).map(function (_ref3, i) {
          var _ref3$_id = _ref3._id,
              year = _ref3$_id.year,
              month = _ref3$_id.month,
              day = _ref3$_id.day;
          return moment__WEBPACK_IMPORTED_MODULE_12___default()("".concat(year, "-").concat(month, "-").concat(day, "T00:00:00")).format('MMMM');
        }),
        data: res.data.sort(function (a, b) {
          return a._id.day > b.last_nom ? 1 : b._id.day > a._id.day ? -1 : 0;
        }).map(function (_ref4, i) {
          var count = _ref4.count;
          return count;
        })
      });
      setSelectedChartData({
        date: res.data.sort(function (a, b) {
          return a._id.day > b._id.day ? 1 : b._id.day > a._id.day ? -1 : 0;
        }).map(function (_ref5, i) {
          var _ref5$_id = _ref5._id,
              year = _ref5$_id.year,
              month = _ref5$_id.month,
              day = _ref5$_id.day;
          return moment__WEBPACK_IMPORTED_MODULE_12___default()("".concat(year, "-").concat(month, "-").concat(day, "T00:00:00")).format('dddd');
        }),
        data: res.data.sort(function (a, b) {
          return a._id.day > b.last_nom ? 1 : b._id.day > a._id.day ? -1 : 0;
        }).map(function (_ref6, i) {
          var count = _ref6.count;
          return count;
        })
      });
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__["Line"], {
    data: {
      labels: chartDataThisYear.date,
      datasets: [{
        label: 'Blogs dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
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
        data: chartDataThisYear.data
      }]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "demo-simple-select-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Age"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_11__["default"], {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: month,
    onChange: setMonth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Ten"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Twenty"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Thirty"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Ten"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Twenty"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Thirty"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: 7,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Ten"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Twenty"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Thirty"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Ten"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: 11,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Twenty"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Thirty"))), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "This Year"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "all Time"));
});

/***/ })

})
//# sourceMappingURL=admin.js.f68a1a4cca1bc189440e.hot-update.js.map