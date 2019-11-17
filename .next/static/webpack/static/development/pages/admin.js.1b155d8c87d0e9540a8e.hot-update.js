webpackHotUpdate("static/development/pages/admin.js",{

/***/ "./actions/admin.js":
/*!**************************!*\
  !*** ./actions/admin.js ***!
  \**************************/
/*! exports provided: getData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./actions/auth.js");



var getData = function getData(token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/admin/data"), {
    method: 'GET',
    headers: {
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (res) {
    Object(_auth__WEBPACK_IMPORTED_MODULE_2__["handleResponse"])(res);
    return res.json();
  })["catch"](function (error) {
    return error;
  });
};

/***/ }),

/***/ "./components/admin/BlogData.jsx":
/*!***************************************!*\
  !*** ./components/admin/BlogData.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/admin */ "./actions/admin.js");
var _jsxFileName = "/Users/baselmunawwar/Desktop/nextjs/firstApp/components/admin/BlogData.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "blogData");
});

/***/ })

})
//# sourceMappingURL=admin.js.1b155d8c87d0e9540a8e.hot-update.js.map