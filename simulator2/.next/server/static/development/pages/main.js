module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/main.js":
/*!***********************!*\
  !*** ./pages/main.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _source_plot_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../source/plot-data */ "./source/plot-data.js");
/* harmony import */ var _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source/basic-perceptron-model */ "./source/basic-perceptron-model.js");
/* harmony import */ var react_plotly_js_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-plotly.js/factory */ "react-plotly.js/factory");
/* harmony import */ var react_plotly_js_factory__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_plotly_js_factory__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\work\\ml-basics-techtalk\\simulator2\\pages\\main.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Plot = react_plotly_js_factory__WEBPACK_IMPORTED_MODULE_3___default()(Plotly);

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "kSliderOptions", {
      sliderSteps: 100,
      maxValue: 10
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "plotLayout", {
      autosize: false,
      width: 1000,
      height: 1000,
      xaxis: {
        range: [0, 10]
      },
      yaxis: {
        range: [0, 10]
      }
    });

    return _this;
  }

  _createClass(_default, [{
    key: "generateModelEvaludationData",
    value: function generateModelEvaludationData() {
      var points = [];

      for (var y = 0; y < 10; y++) {
        for (var x = 0; x < 10; x++) {
          points.push({
            x: x,
            y: y,
            z: _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_2__["default"].evaluate(x, y)
          });
        }
      }

      return {
        x: points.map(function (p) {
          return p.x;
        }),
        y: points.map(function (p) {
          return p.y;
        }),
        z: points.map(function (p) {
          return p.z;
        }),
        type: 'contour',
        contours: {
          coloring: 'heatmap'
        }
      };
    }
  }, {
    key: "getKValue",
    value: function getKValue() {
      return Math.round(_source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_2__["default"].k / this.kSliderOptions.maxValue * this.kSliderOptions.sliderSteps);
    }
  }, {
    key: "onKChange",
    value: function onKChange(value) {
      _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_2__["default"].k = value / this.kSliderOptions.sliderSteps * this.kSliderOptions.maxValue;
    }
  }, {
    key: "rebuildLayout",
    value: function rebuildLayout() {
      this.plotLayout.shapes[0].x0 = -1000;
      this.plotLayout.shapes[0].y0 = this.plotLayout.shapes[0].x0 * this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Plot, {
        data: [_source_plot_data__WEBPACK_IMPORTED_MODULE_1__["irisSetosa"], _source_plot_data__WEBPACK_IMPORTED_MODULE_1__["irisVirginica"], this.generateModelEvaludationData()],
        layout: this.plotLayout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "range",
        min: -this.kSliderOptions.sliderSteps,
        max: this.kSliderOptions.sliderSteps,
        value: this.getKValue(),
        onChange: function onChange(e) {
          return _this2.onKChange(e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./source/basic-perceptron-model.js":
/*!******************************************!*\
  !*** ./source/basic-perceptron-model.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* harmony default export */ __webpack_exports__["default"] = (new (
/*#__PURE__*/
function () {
  function BasicPerceptronModel(trainingData) {
    _classCallCheck(this, BasicPerceptronModel);

    this.trainingData = trainingData;
    this.k = 0;
    this.b = 0;
  }

  _createClass(BasicPerceptronModel, [{
    key: "evaluateActivation",
    value: function evaluateActivation(v) {
      return v;
    }
  }, {
    key: "evaluate",
    value: function evaluate(x, y) {
      return this.evaluateActivation(this.k * x + y + this.b);
    }
  }, {
    key: "predict",
    value: function predict(x, y) {
      return Math.sign(this.evaluate(x, y));
    }
  }]);

  return BasicPerceptronModel;
}())());

/***/ }),

/***/ "./source/iris2.json":
/*!***************************!*\
  !*** ./source/iris2.json ***!
  \***************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, default */
/***/ (function(module) {

module.exports = [{"sepal_length":5.1,"sepal_width":3.5,"species":"Iris-setosa"},{"sepal_length":4.9,"sepal_width":3,"species":"Iris-setosa"},{"sepal_length":4.7,"sepal_width":3.2,"species":"Iris-setosa"},{"sepal_length":4.6,"sepal_width":3.1,"species":"Iris-setosa"},{"sepal_length":5,"sepal_width":3.6,"species":"Iris-setosa"},{"sepal_length":5.4,"sepal_width":3.9,"species":"Iris-setosa"},{"sepal_length":4.6,"sepal_width":3.4,"species":"Iris-setosa"},{"sepal_length":5,"sepal_width":3.4,"species":"Iris-setosa"},{"sepal_length":4.4,"sepal_width":2.9,"species":"Iris-setosa"},{"sepal_length":4.9,"sepal_width":3.1,"species":"Iris-setosa"},{"sepal_length":5.4,"sepal_width":3.7,"species":"Iris-setosa"},{"sepal_length":4.8,"sepal_width":3.4,"species":"Iris-setosa"},{"sepal_length":4.8,"sepal_width":3,"species":"Iris-setosa"},{"sepal_length":4.3,"sepal_width":3,"species":"Iris-setosa"},{"sepal_length":5.8,"sepal_width":4,"species":"Iris-setosa"},{"sepal_length":5.7,"sepal_width":4.4,"species":"Iris-setosa"},{"sepal_length":5.4,"sepal_width":3.9,"species":"Iris-setosa"},{"sepal_length":5.1,"sepal_width":3.5,"species":"Iris-setosa"},{"sepal_length":5.7,"sepal_width":3.8,"species":"Iris-setosa"},{"sepal_length":5.1,"sepal_width":3.8,"species":"Iris-setosa"},{"sepal_length":5.4,"sepal_width":3.4,"species":"Iris-setosa"},{"sepal_length":5.1,"sepal_width":3.7,"species":"Iris-setosa"},{"sepal_length":4.6,"sepal_width":3.6,"species":"Iris-setosa"},{"sepal_length":5.1,"sepal_width":3.3,"species":"Iris-setosa"},{"sepal_length":4.8,"sepal_width":3.4,"species":"Iris-setosa"},{"sepal_length":5,"sepal_width":3,"species":"Iris-setosa"},{"sepal_length":5,"sepal_width":3.4,"species":"Iris-setosa"},{"sepal_length":5.2,"sepal_width":3.5,"species":"Iris-setosa"},{"sepal_length":5.2,"sepal_width":3.4,"species":"Iris-setosa"},{"sepal_length":4.7,"sepal_width":3.2,"species":"Iris-setosa"},{"sepal_length":4.8,"sepal_width":3.1,"species":"Iris-setosa"},{"sepal_length":5.4,"sepal_width":3.4,"species":"Iris-setosa"},{"sepal_length":5.2,"sepal_width":4.1,"species":"Iris-setosa"},{"sepal_length":5.5,"sepal_width":4.2,"species":"Iris-setosa"},{"sepal_length":4.9,"sepal_width":3.1,"species":"Iris-setosa"},{"sepal_length":5,"sepal_width":3.2,"species":"Iris-setosa"},{"sepal_length":5.5,"sepal_width":3.5,"species":"Iris-setosa"},{"sepal_length":4.9,"sepal_width":3.1,"species":"Iris-setosa"},{"sepal_length":4.4,"sepal_width":3,"species":"Iris-setosa"},{"sepal_length":5.1,"sepal_width":3.4,"species":"Iris-setosa"},{"sepal_length":5,"sepal_width":3.5,"species":"Iris-setosa"},{"sepal_length":4.5,"sepal_width":2.3,"species":"Iris-setosa"},{"sepal_length":4.4,"sepal_width":3.2,"species":"Iris-setosa"},{"sepal_length":5,"sepal_width":3.5,"species":"Iris-setosa"},{"sepal_length":5.1,"sepal_width":3.8,"species":"Iris-setosa"},{"sepal_length":4.8,"sepal_width":3,"species":"Iris-setosa"},{"sepal_length":5.1,"sepal_width":3.8,"species":"Iris-setosa"},{"sepal_length":4.6,"sepal_width":3.2,"species":"Iris-setosa"},{"sepal_length":5.3,"sepal_width":3.7,"species":"Iris-setosa"},{"sepal_length":5,"sepal_width":3.3,"species":"Iris-setosa"},{"sepal_length":6.3,"sepal_width":3.3,"species":"Iris-virginica"},{"sepal_length":5.8,"sepal_width":2.7,"species":"Iris-virginica"},{"sepal_length":7.1,"sepal_width":3,"species":"Iris-virginica"},{"sepal_length":6.3,"sepal_width":2.9,"species":"Iris-virginica"},{"sepal_length":6.5,"sepal_width":3,"species":"Iris-virginica"},{"sepal_length":7.6,"sepal_width":3,"species":"Iris-virginica"},{"sepal_length":4.9,"sepal_width":2.5,"species":"Iris-virginica"},{"sepal_length":7.3,"sepal_width":2.9,"species":"Iris-virginica"},{"sepal_length":6.7,"sepal_width":2.5,"species":"Iris-virginica"},{"sepal_length":7.2,"sepal_width":3.6,"species":"Iris-virginica"},{"sepal_length":6.5,"sepal_width":3.2,"species":"Iris-virginica"},{"sepal_length":6.4,"sepal_width":2.7,"species":"Iris-virginica"},{"sepal_length":6.8,"sepal_width":3,"species":"Iris-virginica"},{"sepal_length":5.7,"sepal_width":2.5,"species":"Iris-virginica"},{"sepal_length":5.8,"sepal_width":2.8,"species":"Iris-virginica"},{"sepal_length":6.4,"sepal_width":3.2,"species":"Iris-virginica"},{"sepal_length":6.5,"sepal_width":3,"species":"Iris-virginica"},{"sepal_length":7.7,"sepal_width":3.8,"species":"Iris-virginica"},{"sepal_length":7.7,"sepal_width":2.6,"species":"Iris-virginica"},{"sepal_length":6,"sepal_width":2.2,"species":"Iris-virginica"},{"sepal_length":6.9,"sepal_width":3.2,"species":"Iris-virginica"},{"sepal_length":5.6,"sepal_width":2.8,"species":"Iris-virginica"},{"sepal_length":7.7,"sepal_width":2.8,"species":"Iris-virginica"},{"sepal_length":6.3,"sepal_width":2.7,"species":"Iris-virginica"},{"sepal_length":6.7,"sepal_width":3.3,"species":"Iris-virginica"},{"sepal_length":7.2,"sepal_width":3.2,"species":"Iris-virginica"},{"sepal_length":6.2,"sepal_width":2.8,"species":"Iris-virginica"},{"sepal_length":6.1,"sepal_width":3,"species":"Iris-virginica"},{"sepal_length":6.4,"sepal_width":2.8,"species":"Iris-virginica"},{"sepal_length":7.2,"sepal_width":3,"species":"Iris-virginica"},{"sepal_length":7.4,"sepal_width":2.8,"species":"Iris-virginica"},{"sepal_length":7.9,"sepal_width":3.8,"species":"Iris-virginica"},{"sepal_length":6.4,"sepal_width":2.8,"species":"Iris-virginica"},{"sepal_length":6.3,"sepal_width":2.8,"species":"Iris-virginica"},{"sepal_length":6.1,"sepal_width":2.6,"species":"Iris-virginica"},{"sepal_length":7.7,"sepal_width":3,"species":"Iris-virginica"},{"sepal_length":6.3,"sepal_width":3.4,"species":"Iris-virginica"},{"sepal_length":6.4,"sepal_width":3.1,"species":"Iris-virginica"},{"sepal_length":6,"sepal_width":3,"species":"Iris-virginica"},{"sepal_length":6.9,"sepal_width":3.1,"species":"Iris-virginica"},{"sepal_length":6.7,"sepal_width":3.1,"species":"Iris-virginica"},{"sepal_length":6.9,"sepal_width":3.1,"species":"Iris-virginica"},{"sepal_length":5.8,"sepal_width":2.7,"species":"Iris-virginica"},{"sepal_length":6.8,"sepal_width":3.2,"species":"Iris-virginica"},{"sepal_length":6.7,"sepal_width":3.3,"species":"Iris-virginica"},{"sepal_length":6.7,"sepal_width":3,"species":"Iris-virginica"},{"sepal_length":6.3,"sepal_width":2.5,"species":"Iris-virginica"},{"sepal_length":6.5,"sepal_width":3,"species":"Iris-virginica"},{"sepal_length":6.2,"sepal_width":3.4,"species":"Iris-virginica"},{"sepal_length":5.9,"sepal_width":3,"species":"Iris-virginica"}];

/***/ }),

/***/ "./source/plot-data.js":
/*!*****************************!*\
  !*** ./source/plot-data.js ***!
  \*****************************/
/*! exports provided: irisSetosa, irisVirginica */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "irisSetosa", function() { return irisSetosa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "irisVirginica", function() { return irisVirginica; });
var iris2 = __webpack_require__(/*! ./iris2 */ "./source/iris2.json");

var irisSetosa = {
  x: iris2.filter(function (v) {
    return v.species === 'Iris-setosa';
  }).map(function (v) {
    return v.sepal_length;
  }),
  y: iris2.filter(function (v) {
    return v.species === 'Iris-setosa';
  }).map(function (v) {
    return v.sepal_width;
  }),
  mode: 'markers',
  type: 'scatter'
};
var irisVirginica = {
  x: iris2.filter(function (v) {
    return v.species === 'Iris-virginica';
  }).map(function (v) {
    return v.sepal_length;
  }),
  y: iris2.filter(function (v) {
    return v.species === 'Iris-virginica';
  }).map(function (v) {
    return v.sepal_width;
  }),
  mode: 'markers',
  type: 'scatter'
};


/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/main.js */"./pages/main.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-plotly.js/factory":
/*!******************************************!*\
  !*** external "react-plotly.js/factory" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-plotly.js/factory");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map