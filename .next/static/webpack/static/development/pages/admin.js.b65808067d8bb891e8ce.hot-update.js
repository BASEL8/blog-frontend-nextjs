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
var _jsxFileName = "/Users/baselmunawwar/Desktop/nextjs/firstApp/components/admin/analysers/BlogAnalyser.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      data = _useState[0],
      setData = _useState[1];

  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_2__["getCookie"])('token');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_actions_admin__WEBPACK_IMPORTED_MODULE_1__["getBlogsDateData"])(token).then(function (res) {
      if (res.error) {
        return console.log(res.error);
      }

      setData(res);
    });
  }, []);
  console.log(data);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "blogs chart");
});

/***/ })

})
//# sourceMappingURL=admin.js.b65808067d8bb891e8ce.hot-update.js.map