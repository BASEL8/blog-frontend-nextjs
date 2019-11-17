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
var _jsxFileName = "/Users/baselmunawwar/Desktop/nextjs/firstApp/components/admin/analysers/BlogAnalyser.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      chartData = _useState2[0],
      setChartData = _useState2[1];

  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_2__["getCookie"])('token');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_actions_admin__WEBPACK_IMPORTED_MODULE_1__["getBlogsDateData"])(token).then(function (res) {
      if (res.error) {
        return console.log(res.error);
      }

      setData(res.data);
      setChartData(data.sort(function (a, b) {
        return a._id.day > b._id.day ? 1 : b._id.day > a._id.day ? -1 : 0;
      }).map(function (_ref, i) {
        var _id = _ref._id;
        return _id.day;
      }));
    });
  }, []);
  console.log(data);
  return __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__["Line"], {
    data: {
      labels: {
        chartData: chartData
      },
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
        data: {
          chartData: chartData
        }
      }]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  });
});

/***/ })

})
//# sourceMappingURL=admin.js.45e7a640413c4bb0d2bd.hot-update.js.map