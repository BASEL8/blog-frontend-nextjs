webpackHotUpdate("static/development/pages/admin.js",{

/***/ "./components/admin/analysers/TagsAnalyser.jsx":
/*!*****************************************************!*\
  !*** ./components/admin/analysers/TagsAnalyser.jsx ***!
  \*****************************************************/
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
/* harmony import */ var _actions_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/tag */ "./actions/tag.js");
/* harmony import */ var _actions_admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions/admin */ "./actions/admin.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions/auth */ "./actions/auth.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var color_hash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! color-hash */ "./node_modules/color-hash/lib/color-hash.js");
/* harmony import */ var color_hash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(color_hash__WEBPACK_IMPORTED_MODULE_13__);



var _jsxFileName = "/Users/baselmunawwar/Desktop/nextjs/firstApp/components/admin/analysers/TagsAnalyser.jsx";

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
  var colorHash = new color_hash__WEBPACK_IMPORTED_MODULE_13___default.a();
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
    Object(_actions_tag__WEBPACK_IMPORTED_MODULE_4__["getTags"])().then(function (tags) {
      if (tags.error) {
        return console.log(tags.error);
      }

      return tags;
    }).then(function (tags) {
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
      lineNumber: 52
    },
    __self: this
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "demo-simple-select-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
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
      lineNumber: 70
    },
    __self: this
  }, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(function (month, i) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: i,
      value: i + 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, month);
  }))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "demo-simple-select-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
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
      lineNumber: 81
    },
    __self: this
  }, Array(10).fill('').map(function (month, i) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: i,
      value: 2019 + i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, 2019 + i);
  }))));
});

/***/ }),

/***/ "./node_modules/color-hash/lib/bkdr-hash.js":
/*!**************************************************!*\
  !*** ./node_modules/color-hash/lib/bkdr-hash.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * BKDR Hash (modified version)
 *
 * @param {String} str string to hash
 * @returns {Number}
 */
var BKDRHash = function(str) {
    var seed = 131;
    var seed2 = 137;
    var hash = 0;
    // make hash more sensitive for short string like 'a', 'b', 'c'
    str += 'x';
    // Note: Number.MAX_SAFE_INTEGER equals 9007199254740991
    var MAX_SAFE_INTEGER = parseInt(9007199254740991 / seed2);
    for(var i = 0; i < str.length; i++) {
        if(hash > MAX_SAFE_INTEGER) {
            hash = parseInt(hash / seed2);
        }
        hash = hash * seed + str.charCodeAt(i);
    }
    return hash;
};

module.exports = BKDRHash;


/***/ }),

/***/ "./node_modules/color-hash/lib/color-hash.js":
/*!***************************************************!*\
  !*** ./node_modules/color-hash/lib/color-hash.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BKDRHash = __webpack_require__(/*! ./bkdr-hash */ "./node_modules/color-hash/lib/bkdr-hash.js");

/**
 * Convert RGB Array to HEX
 *
 * @param {Array} RGBArray - [R, G, B]
 * @returns {String} 6 digits hex starting with #
 */
var RGB2HEX = function(RGBArray) {
    var hex = '#';
    RGBArray.forEach(function(value) {
        if (value < 16) {
            hex += 0;
        }
        hex += value.toString(16);
    });
    return hex;
};

/**
 * Convert HSL to RGB
 *
 * @see {@link http://zh.wikipedia.org/wiki/HSL和HSV色彩空间} for further information.
 * @param {Number} H Hue ∈ [0, 360)
 * @param {Number} S Saturation ∈ [0, 1]
 * @param {Number} L Lightness ∈ [0, 1]
 * @returns {Array} R, G, B ∈ [0, 255]
 */
var HSL2RGB = function(H, S, L) {
    H /= 360;

    var q = L < 0.5 ? L * (1 + S) : L + S - L * S;
    var p = 2 * L - q;

    return [H + 1/3, H, H - 1/3].map(function(color) {
        if(color < 0) {
            color++;
        }
        if(color > 1) {
            color--;
        }
        if(color < 1/6) {
            color = p + (q - p) * 6 * color;
        } else if(color < 0.5) {
            color = q;
        } else if(color < 2/3) {
            color = p + (q - p) * 6 * (2/3 - color);
        } else {
            color = p;
        }
        return Math.round(color * 255);
    });
};

/**
 * Color Hash Class
 *
 * @class
 */
var ColorHash = function(options) {
    options = options || {};

    var LS = [options.lightness, options.saturation].map(function(param) {
        param = param || [0.35, 0.5, 0.65]; // note that 3 is a prime
        return Object.prototype.toString.call(param) === '[object Array]' ? param.concat() : [param];
    });

    this.L = LS[0];
    this.S = LS[1];

    this.hash = options.hash || BKDRHash;
};

/**
 * Returns the hash in [h, s, l].
 * Note that H ∈ [0, 360); S ∈ [0, 1]; L ∈ [0, 1];
 *
 * @param {String} str string to hash
 * @returns {Array} [h, s, l]
 */
ColorHash.prototype.hsl = function(str) {
    var H, S, L;
    var hash = this.hash(str);

    H = hash % 359; // note that 359 is a prime
    hash = parseInt(hash / 360);
    S = this.S[hash % this.S.length];
    hash = parseInt(hash / this.S.length);
    L = this.L[hash % this.L.length];

    return [H, S, L];
};

/**
 * Returns the hash in [r, g, b].
 * Note that R, G, B ∈ [0, 255]
 *
 * @param {String} str string to hash
 * @returns {Array} [r, g, b]
 */
ColorHash.prototype.rgb = function(str) {
    var hsl = this.hsl(str);
    return HSL2RGB.apply(this, hsl);
};

/**
 * Returns the hash in hex
 *
 * @param {String} str string to hash
 * @returns {String} hex with #
 */
ColorHash.prototype.hex = function(str) {
    var rgb = this.rgb(str);
    return RGB2HEX(rgb);
};

module.exports = ColorHash;


/***/ })

})
//# sourceMappingURL=admin.js.b11d25358727649fe159.hot-update.js.map