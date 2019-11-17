webpackHotUpdate("static/development/pages/admin.js",{

/***/ "./actions/admin.js":
/*!**************************!*\
  !*** ./actions/admin.js ***!
  \**************************/
/*! exports provided: getData, getBlogsDateData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlogsDateData", function() { return getBlogsDateData; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./actions/auth.js");



var getData = function getData(token) {
  console.log("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/admin/data"));
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/admin/data"), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (res) {
    Object(_auth__WEBPACK_IMPORTED_MODULE_2__["handleResponse"])(res);
    return res.json();
  })["catch"](function (error) {
    return error;
  });
};
var getBlogsDateData = function getBlogsDateData(token, month_) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/admin/data/blogs/").concat(month_), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (res) {
    Object(_auth__WEBPACK_IMPORTED_MODULE_2__["handleResponse"])(res);
    return res.json();
  })["catch"](function (error) {
    return error;
  });
};

/***/ })

})
//# sourceMappingURL=admin.js.9cbc67c662e06bd32ff7.hot-update.js.map