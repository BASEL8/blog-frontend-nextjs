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
/* harmony import */ var _actions_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/admin */ "./actions/admin.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/esm/ListItemAvatar/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_icons_Image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Image */ "./node_modules/@material-ui/icons/Image.js");
/* harmony import */ var _material_ui_icons_Image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Image__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Work */ "./node_modules/@material-ui/icons/Work.js");
/* harmony import */ var _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_BeachAccess__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/BeachAccess */ "./node_modules/@material-ui/icons/BeachAccess.js");
/* harmony import */ var _material_ui_icons_BeachAccess__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BeachAccess__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/Users/baselmunawwar/Desktop/nextjs/firstApp/components/admin/BlogData.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    blogs: 0,
    users: 0,
    categories: 0,
    tags: 0
  }),
      data = _useState[0],
      setData = _useState[1];

  var blogs = data.blogs,
      users = data.users,
      categories = data.categories,
      tags = data.tags;
  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_2__["getCookie"])('token');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_actions_admin__WEBPACK_IMPORTED_MODULE_1__["getData"])(token).then(function (res) {
      if (res.error) {
        return console.log(res.error);
      }

      var blogs = res.blogs,
          users = res.users,
          categories = res.categories,
          tags = res.tags;
      setData({
        blogs: blogs,
        users: users,
        categories: categories,
        tags: tags
      });
    });
  }, []);
  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_material_ui_icons_Image__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    primary: "Blogs",
    secondary: blogs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    primary: "Work",
    secondary: "Jan 7, 2014",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_material_ui_icons_BeachAccess__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    primary: "Vacation",
    secondary: "July 20, 2014",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=admin.js.82758fdd363850f8be40.hot-update.js.map