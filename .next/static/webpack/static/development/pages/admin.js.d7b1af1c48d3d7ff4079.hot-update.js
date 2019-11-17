webpackHotUpdate("static/development/pages/admin.js",{

/***/ "./components/admin/analysers/BlogAnalyser.jsx":
/*!*****************************************************!*\
  !*** ./components/admin/analysers/BlogAnalyser.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../actions/admin */ "./actions/admin.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/auth */ "./actions/auth.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
var _jsxFileName = "/Users/baselmunawwar/Desktop/nextjs/firstApp/components/admin/analysers/BlogAnalyser.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    date: [],
    data: []
  }),
      SelectedChartData = _useState2[0],
      setSelectedChartData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    date: [],
    data: []
  }),
      chartDataThisMonth = _useState3[0],
      setChartDataThisMonth = _useState3[1];

  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_2__["getCookie"])('token');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_actions_admin__WEBPACK_IMPORTED_MODULE_1__["getBlogsDateData"])(token).then(function (res) {
      if (res.error) {
        return console.log(res.error);
      }

      console.log(res.data);
      setData(res.data);
      setChartDataThisMonth({
        date: res.data.sort(function (a, b) {
          return a._id.day > b._id.day ? 1 : b._id.day > a._id.day ? -1 : 0;
        }).map(function (_ref, i) {
          var _id = _ref._id;
          return _id.day;
        }),
        data: res.data.sort(function (a, b) {
          return a._id.day > b.last_nom ? 1 : b._id.day > a._id.day ? -1 : 0;
        }).map(function (_ref2, i) {
          var count = _ref2.count;
          return count;
        })
      });
      setSelectedChartData({
        date: res.data.sort(function (a, b) {
          return a._id.day > b._id.day ? 1 : b._id.day > a._id.day ? -1 : 0;
        }).map(function (_ref3, i) {
          var _id = _ref3._id;
          return _id.day;
        }),
        data: res.data.sort(function (a, b) {
          return a._id.day > b.last_nom ? 1 : b._id.day > a._id.day ? -1 : 0;
        }).map(function (_ref4, i) {
          var count = _ref4.count;
          return count;
        })
      }); //setChartDataThisYear(res.data.sort((a,b) => (a._id.day > b._id.day) ? 1 : ((b._id.day > a._id.day) ? -1 : 0)).map(({_id},i)=>_id.day))
      //setChartDataAll(res.data.sort((a,b) => (a._id.day > b._id.day) ? 1 : ((b._id.day > a._id.day) ? -1 : 0)).map(({_id},i)=>_id.day))
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__["Line"], {
    data: {
      labels: SelectedChartData.date,
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
        data: SelectedChartData.data
      }]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "This Month"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "This Year"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "all Time"));
});

/***/ })

})
//# sourceMappingURL=admin.js.d7b1af1c48d3d7ff4079.hot-update.js.map