webpackHotUpdate("static/development/pages/admin.js",{

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
var _jsxFileName = "/Users/baselmunawwar/Desktop/nextjs/firstApp/components/admin/BlogData.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "blogData");
});

/***/ }),

/***/ "./components/admin/index.jsx":
/*!************************************!*\
  !*** ./components/admin/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CenteredGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _SideList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SideList */ "./components/admin/SideList.jsx");
/* harmony import */ var _BlogData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BlogData */ "./components/admin/BlogData.jsx");
var _jsxFileName = "/Users/baselmunawwar/Desktop/nextjs/firstApp/components/admin/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  };
});
function CenteredGrid() {
  var classes = useStyles();
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_SideList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_BlogData__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "xs=6")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "xs=3")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "xs=3")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "xs=3")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "xs=3"))));
}

/***/ })

})
//# sourceMappingURL=admin.js.21a47c3d6471313e9f52.hot-update.js.map