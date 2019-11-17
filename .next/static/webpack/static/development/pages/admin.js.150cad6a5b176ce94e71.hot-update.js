webpackHotUpdate("static/development/pages/admin.js",{

/***/ "./actions/category.js":
/*!*****************************!*\
  !*** ./actions/category.js ***!
  \*****************************/
/*! exports provided: createCategory, getCategories, getCategory, removeCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCategory", function() { return createCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategory", function() { return getCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCategory", function() { return removeCategory; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./actions/auth.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config.js");




var createCategory = function createCategory(category, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/category"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(category)
  }).then(function (res) {
    Object(_auth__WEBPACK_IMPORTED_MODULE_2__["handleResponse"])(res);
    return res.json();
  })["catch"](function (error) {
    return error;
  });
};
var getCategories = function getCategories() {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/categories"), {
    method: 'GET'
  }).then(function (res) {
    return res.json();
  })["catch"](function (error) {
    return error;
  });
};
var getCategory = function getCategory(slug) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/category/").concat(slug), {
    method: 'GET'
  }).then(function (res) {
    return res.json();
  })["catch"](function (error) {
    return error;
  });
};
var removeCategory = function removeCategory(slug, token, user) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["API"], "/category/").concat(slug), {
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

/***/ "./components/admin/analysers/CategoriesAnalyser.jsx":
/*!***********************************************************!*\
  !*** ./components/admin/analysers/CategoriesAnalyser.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/category */ "./actions/category.js");
/* harmony import */ var _actions_admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions/admin */ "./actions/admin.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions/auth */ "./actions/auth.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");



var _jsxFileName = "/Users/baselmunawwar/Desktop/nextjs/firstApp/components/admin/analysers/CategoriesAnalyser.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(11),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      month_ = _React$useState2[0],
      setMonth = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(2019),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      year_ = _React$useState4[0],
      setYear = _React$useState4[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      chartData = _useState[0],
      setChartData = _useState[1];

  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["getCookie"])('token');
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_actions_category__WEBPACK_IMPORTED_MODULE_4__["getCategories"])().then(function (tags) {
      if (tags.error) {
        return console.log(tags.error);
      }

      return tags;
    }).then(function (tags) {
      console.log(tags);

      if (tags) {
        Object(_actions_admin__WEBPACK_IMPORTED_MODULE_5__["getTagsData"])(token, month_, year_).then(function (res) {
          if (res.error) {
            console.log(res.error);
          } else {
            var result = [res, tags].reduce(function (a, b) {
              return a.map(function (c, i) {
                return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, c, b[i]);
              });
            });
            setChartData(result);
          }
        });
      }
    });
  }, [month_, year_]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_7__["Doughnut"], {
    data: {
      labels: chartData.map(function (_ref, i) {
        var name = _ref.name;
        return name;
      }),
      datasets: [{
        data: chartData.map(function (_ref2, i) {
          var count = _ref2.count;
          return count;
        }),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "demo-simple-select-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "chose Month"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: i,
      value: i + 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, month);
  }))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "demo-simple-select-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "chose Month"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
/* harmony import */ var _analysers_BlogAnalyser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./analysers/BlogAnalyser */ "./components/admin/analysers/BlogAnalyser.jsx");
/* harmony import */ var _analysers_TagsAnalyser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./analysers/TagsAnalyser */ "./components/admin/analysers/TagsAnalyser.jsx");
/* harmony import */ var _analysers_CategoriesAnalyser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./analysers/CategoriesAnalyser */ "./components/admin/analysers/CategoriesAnalyser.jsx");
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
      lineNumber: 25
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_SideList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_BlogData__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_analysers_BlogAnalyser__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
  }, __jsx(_analysers_TagsAnalyser__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_analysers_CategoriesAnalyser__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "xs=3")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "xs=3"))));
}

/***/ })

})
//# sourceMappingURL=admin.js.150cad6a5b176ce94e71.hot-update.js.map