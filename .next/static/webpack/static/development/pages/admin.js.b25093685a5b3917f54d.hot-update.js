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
/* harmony import */ var _material_ui_icons_LocalOfferSharp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/LocalOfferSharp */ "./node_modules/@material-ui/icons/LocalOfferSharp.js");
/* harmony import */ var _material_ui_icons_LocalOfferSharp__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalOfferSharp__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_CategorySharp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/CategorySharp */ "./node_modules/@material-ui/icons/CategorySharp.js");
/* harmony import */ var _material_ui_icons_CategorySharp__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CategorySharp__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_PeopleAltSharp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/PeopleAltSharp */ "./node_modules/@material-ui/icons/PeopleAltSharp.js");
/* harmony import */ var _material_ui_icons_PeopleAltSharp__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PeopleAltSharp__WEBPACK_IMPORTED_MODULE_14__);
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
      lineNumber: 41
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_material_ui_icons_Image__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    primary: "Blogs",
    secondary: blogs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_material_ui_icons_PeopleAltSharp__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    primary: "Users",
    secondary: users,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_material_ui_icons_LocalOfferSharp__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    primary: "Tags",
    secondary: tags,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(_material_ui_icons_CategorySharp__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    primary: "Categories",
    secondary: categories,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })));
});

/***/ }),

/***/ "./node_modules/@material-ui/icons/PeopleAltSharp.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/icons/PeopleAltSharp.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  fillRule: "evenodd",
  d: "M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z",
  clipRule: "evenodd"
}), _react.default.createElement("circle", {
  cx: "9",
  cy: "8",
  r: "4",
  fillRule: "evenodd",
  clipRule: "evenodd"
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zM9 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z",
  clipRule: "evenodd"
})), 'PeopleAltSharp');

exports.default = _default;

/***/ })

})
//# sourceMappingURL=admin.js.b25093685a5b3917f54d.hot-update.js.map