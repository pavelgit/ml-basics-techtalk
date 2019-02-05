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
/* harmony import */ var _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../source/basic-perceptron-model */ "./source/basic-perceptron-model.js");
/* harmony import */ var _source_float_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../source/float-slider */ "./source/float-slider.js");
/* harmony import */ var _source_iris_plot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../source/iris-plot */ "./source/iris-plot.js");
/* harmony import */ var _source_loss_plot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../source/loss-plot */ "./source/loss-plot.js");
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isClient: false
    });

    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_source_iris_plot__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_source_loss_plot__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_source_float_slider__WEBPACK_IMPORTED_MODULE_2__["default"], {
        rangeLimit: 100,
        value: _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_1__["default"].k,
        onChange: function onChange(value) {
          _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_1__["default"].k = value;

          _this2.forceUpdate();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "K=", _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_1__["default"].k), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_source_float_slider__WEBPACK_IMPORTED_MODULE_2__["default"], {
        rangeLimit: 100,
        value: _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_1__["default"].b,
        onChange: function onChange(value) {
          _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_1__["default"].b = value;

          _this2.forceUpdate();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "b=", _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_1__["default"].b), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Loss=", _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_1__["default"].evaluateLoss()));
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
/* harmony import */ var _data_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-provider */ "./source/data-provider.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/* harmony default export */ __webpack_exports__["default"] = (new (
/*#__PURE__*/
function () {
  function BasicPerceptronModel() {
    _classCallCheck(this, BasicPerceptronModel);

    this.k = 0;
    this.b = 0;
  }

  _createClass(BasicPerceptronModel, [{
    key: "evaluateActivation",
    value: function evaluateActivation(v) {
      return 1 / (1 + Math.exp(-v));
    }
  }, {
    key: "getClassificationLineY",
    value: function getClassificationLineY(x) {
      return this.k * x + this.b;
    }
  }, {
    key: "evaluate",
    value: function evaluate(x, y) {
      var distanceToLine = (x - this.k * (y - this.b)) / Math.sqrt(1 - this.k * this.k);
      console.log(distanceToLine);
      return this.evaluateActivation(distanceToLine);
    }
  }, {
    key: "evaluateCost",
    value: function evaluateCost(x, y, category) {
      return Math.abs(this.evaluate(x, y) - category);
    }
  }, {
    key: "predict",
    value: function predict(x, y) {
      return Math.sign(this.evaluate(x, y));
    }
  }, {
    key: "evaluateLoss",
    value: function evaluateLoss() {
      var _this = this;

      return _data_provider__WEBPACK_IMPORTED_MODULE_0__["trainingExamples"].reduce(function (acc, v) {
        return acc + _this.evaluateCost(v.x, v.y, v.category);
      }, 0);
    }
  }]);

  return BasicPerceptronModel;
}())());

/***/ }),

/***/ "./source/data-provider.js":
/*!*********************************!*\
  !*** ./source/data-provider.js ***!
  \*********************************/
/*! exports provided: irisSetosaPlotData, irisVersicolorPlotData, trainingExamples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "irisSetosaPlotData", function() { return irisSetosaPlotData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "irisVersicolorPlotData", function() { return irisVersicolorPlotData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trainingExamples", function() { return trainingExamples; });
var iris2 = [__webpack_require__(/*! ./iris2 */ "./source/iris2.json")[0]];
var irisSetosaPlotData = {
  x: iris2.filter(function (v) {
    return v.species === 'Iris-setosa';
  }).map(function (v) {
    return v.petal_length;
  }),
  y: iris2.filter(function (v) {
    return v.species === 'Iris-setosa';
  }).map(function (v) {
    return v.petal_width;
  }),
  name: 'Iris-setosa',
  mode: 'markers',
  type: 'scatter'
};
var irisVersicolorPlotData = {
  x: iris2.filter(function (v) {
    return v.species === 'Iris-versicolor';
  }).map(function (v) {
    return v.petal_length;
  }),
  y: iris2.filter(function (v) {
    return v.species === 'Iris-versicolor';
  }).map(function (v) {
    return v.petal_width;
  }),
  name: 'Iris-versicolor',
  mode: 'markers',
  type: 'scatter'
};
var trainingExamples = iris2.map(function (v) {
  return {
    x: v.petal_length,
    y: v.petal_width,
    category: v.species === 'Iris-setosa' ? 1 : 0
  };
});


/***/ }),

/***/ "./source/float-slider.js":
/*!********************************!*\
  !*** ./source/float-slider.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\work\\ml-basics-techtalk\\simulator2\\source\\float-slider.js";

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "sliderSteps", 1000);

    return _this;
  }

  _createClass(_default, [{
    key: "getValue",
    value: function getValue() {
      return Math.round(this.props.value / this.props.rangeLimit * this.sliderSteps);
    }
  }, {
    key: "onChange",
    value: function onChange(value) {
      this.props.onChange(value / this.sliderSteps * this.props.rangeLimit);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        style: {
          width: '100%'
        },
        type: "range",
        min: -this.sliderSteps,
        max: this.sliderSteps,
        value: this.getValue(),
        onChange: function onChange(e) {
          return _this2.onChange(e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      });
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(_default, "propTypes", {
  rangeLimit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});



/***/ }),

/***/ "./source/iris-plot.js":
/*!*****************************!*\
  !*** ./source/iris-plot.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _source_data_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../source/data-provider */ "./source/data-provider.js");
/* harmony import */ var _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source/basic-perceptron-model */ "./source/basic-perceptron-model.js");
/* harmony import */ var react_plotly_js_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-plotly.js/factory */ "react-plotly.js/factory");
/* harmony import */ var react_plotly_js_factory__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_plotly_js_factory__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\work\\ml-basics-techtalk\\simulator2\\source\\iris-plot.js";

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isClient: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "plotLayout", {
      autosize: false,
      width: 800,
      height: 800,
      xaxis: {
        range: [0, 10]
      },
      yaxis: {
        range: [0, 10]
      },
      shapes: []
    });

    return _this;
  }

  _createClass(_default, [{
    key: "getClassificationLineShape",
    value: function getClassificationLineShape() {
      var x0 = -10;
      var y0 = _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_2__["default"].getClassificationLineY(x0);
      var x1 = +10;
      var y1 = _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_2__["default"].getClassificationLineY(x1);
      return {
        type: 'line',
        x0: x0,
        y0: y0,
        x1: x1,
        y1: y1
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isClient: true
      });
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      this.plotLayout.shapes[0] = this.getClassificationLineShape();
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.isClient) {
        return null;
      }

      var Plot = react_plotly_js_factory__WEBPACK_IMPORTED_MODULE_3___default()(Plotly);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Plot, {
        data: [_source_data_provider__WEBPACK_IMPORTED_MODULE_1__["irisSetosaPlotData"], _source_data_provider__WEBPACK_IMPORTED_MODULE_1__["irisVersicolorPlotData"]],
        layout: this.plotLayout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      });
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./source/iris2.json":
/*!***************************!*\
  !*** ./source/iris2.json ***!
  \***************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, default */
/***/ (function(module) {

module.exports = [{"petal_length":1.4,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.4,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.3,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.5,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.4,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.7,"petal_width":0.4,"species":"Iris-setosa"},{"petal_length":1.4,"petal_width":0.3,"species":"Iris-setosa"},{"petal_length":1.5,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.4,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.5,"petal_width":0.1,"species":"Iris-setosa"},{"petal_length":1.5,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.6,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.4,"petal_width":0.1,"species":"Iris-setosa"},{"petal_length":1.1,"petal_width":0.1,"species":"Iris-setosa"},{"petal_length":1.2,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.5,"petal_width":0.4,"species":"Iris-setosa"},{"petal_length":1.3,"petal_width":0.4,"species":"Iris-setosa"},{"petal_length":1.4,"petal_width":0.3,"species":"Iris-setosa"},{"petal_length":1.7,"petal_width":0.3,"species":"Iris-setosa"},{"petal_length":1.5,"petal_width":0.3,"species":"Iris-setosa"},{"petal_length":1.7,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.5,"petal_width":0.4,"species":"Iris-setosa"},{"petal_length":1,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.7,"petal_width":0.5,"species":"Iris-setosa"},{"petal_length":1.9,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.6,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.6,"petal_width":0.4,"species":"Iris-setosa"},{"petal_length":1.5,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.4,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.6,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.6,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.5,"petal_width":0.4,"species":"Iris-setosa"},{"petal_length":1.5,"petal_width":0.1,"species":"Iris-setosa"},{"petal_length":1.4,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.5,"petal_width":0.1,"species":"Iris-setosa"},{"petal_length":1.2,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.3,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.5,"petal_width":0.1,"species":"Iris-setosa"},{"petal_length":1.3,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.5,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.3,"petal_width":0.3,"species":"Iris-setosa"},{"petal_length":1.3,"petal_width":0.3,"species":"Iris-setosa"},{"petal_length":1.3,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.6,"petal_width":0.6,"species":"Iris-setosa"},{"petal_length":1.9,"petal_width":0.4,"species":"Iris-setosa"},{"petal_length":1.4,"petal_width":0.3,"species":"Iris-setosa"},{"petal_length":1.6,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.4,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.5,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":1.4,"petal_width":0.2,"species":"Iris-setosa"},{"petal_length":4.7,"petal_width":1.4,"species":"Iris-versicolor"},{"petal_length":4.5,"petal_width":1.5,"species":"Iris-versicolor"},{"petal_length":4.9,"petal_width":1.5,"species":"Iris-versicolor"},{"petal_length":4,"petal_width":1.3,"species":"Iris-versicolor"},{"petal_length":4.6,"petal_width":1.5,"species":"Iris-versicolor"},{"petal_length":4.5,"petal_width":1.3,"species":"Iris-versicolor"},{"petal_length":4.7,"petal_width":1.6,"species":"Iris-versicolor"},{"petal_length":3.3,"petal_width":1,"species":"Iris-versicolor"},{"petal_length":4.6,"petal_width":1.3,"species":"Iris-versicolor"},{"petal_length":3.9,"petal_width":1.4,"species":"Iris-versicolor"},{"petal_length":3.5,"petal_width":1,"species":"Iris-versicolor"},{"petal_length":4.2,"petal_width":1.5,"species":"Iris-versicolor"},{"petal_length":4,"petal_width":1,"species":"Iris-versicolor"},{"petal_length":4.7,"petal_width":1.4,"species":"Iris-versicolor"},{"petal_length":3.6,"petal_width":1.3,"species":"Iris-versicolor"},{"petal_length":4.4,"petal_width":1.4,"species":"Iris-versicolor"},{"petal_length":4.5,"petal_width":1.5,"species":"Iris-versicolor"},{"petal_length":4.1,"petal_width":1,"species":"Iris-versicolor"},{"petal_length":4.5,"petal_width":1.5,"species":"Iris-versicolor"},{"petal_length":3.9,"petal_width":1.1,"species":"Iris-versicolor"},{"petal_length":4.8,"petal_width":1.8,"species":"Iris-versicolor"},{"petal_length":4,"petal_width":1.3,"species":"Iris-versicolor"},{"petal_length":4.9,"petal_width":1.5,"species":"Iris-versicolor"},{"petal_length":4.7,"petal_width":1.2,"species":"Iris-versicolor"},{"petal_length":4.3,"petal_width":1.3,"species":"Iris-versicolor"},{"petal_length":4.4,"petal_width":1.4,"species":"Iris-versicolor"},{"petal_length":4.8,"petal_width":1.4,"species":"Iris-versicolor"},{"petal_length":5,"petal_width":1.7,"species":"Iris-versicolor"},{"petal_length":4.5,"petal_width":1.5,"species":"Iris-versicolor"},{"petal_length":3.5,"petal_width":1,"species":"Iris-versicolor"},{"petal_length":3.8,"petal_width":1.1,"species":"Iris-versicolor"},{"petal_length":3.7,"petal_width":1,"species":"Iris-versicolor"},{"petal_length":3.9,"petal_width":1.2,"species":"Iris-versicolor"},{"petal_length":5.1,"petal_width":1.6,"species":"Iris-versicolor"},{"petal_length":4.5,"petal_width":1.5,"species":"Iris-versicolor"},{"petal_length":4.5,"petal_width":1.6,"species":"Iris-versicolor"},{"petal_length":4.7,"petal_width":1.5,"species":"Iris-versicolor"},{"petal_length":4.4,"petal_width":1.3,"species":"Iris-versicolor"},{"petal_length":4.1,"petal_width":1.3,"species":"Iris-versicolor"},{"petal_length":4,"petal_width":1.3,"species":"Iris-versicolor"},{"petal_length":4.4,"petal_width":1.2,"species":"Iris-versicolor"},{"petal_length":4.6,"petal_width":1.4,"species":"Iris-versicolor"},{"petal_length":4,"petal_width":1.2,"species":"Iris-versicolor"},{"petal_length":3.3,"petal_width":1,"species":"Iris-versicolor"},{"petal_length":4.2,"petal_width":1.3,"species":"Iris-versicolor"},{"petal_length":4.2,"petal_width":1.2,"species":"Iris-versicolor"},{"petal_length":4.2,"petal_width":1.3,"species":"Iris-versicolor"},{"petal_length":4.3,"petal_width":1.3,"species":"Iris-versicolor"},{"petal_length":3,"petal_width":1.1,"species":"Iris-versicolor"},{"petal_length":4.1,"petal_width":1.3,"species":"Iris-versicolor"}];

/***/ }),

/***/ "./source/loss-plot.js":
/*!*****************************!*\
  !*** ./source/loss-plot.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../source/basic-perceptron-model */ "./source/basic-perceptron-model.js");
/* harmony import */ var react_plotly_js_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-plotly.js/factory */ "react-plotly.js/factory");
/* harmony import */ var react_plotly_js_factory__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_plotly_js_factory__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\work\\ml-basics-techtalk\\simulator2\\source\\loss-plot.js";

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isClient: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "plotLayout", {
      autosize: false,
      width: 800,
      height: 800,
      xaxis: {
        range: [-10, 10]
      },
      yaxis: {
        range: [-10, 10]
      }
    });

    return _this;
  }

  _createClass(_default, [{
    key: "generateData",
    value: function generateData() {
      var points = [];
      /*for (let k = -100; k < 100; k++) {
        for (let b = -100; b < 100; b++) {
          basicPerceptronModel.k = k;
          basicPerceptronModel.b = b;
          points.push({ x:k, y:b, z: basicPerceptronModel.evaluateLoss() });
        }
      }*/

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
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isClient: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.isClient) {
        return null;
      }

      var Plot = react_plotly_js_factory__WEBPACK_IMPORTED_MODULE_2___default()(Plotly);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Plot, {
        data: [this.generateData()],
        layout: this.plotLayout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      });
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/main.js */"./pages/main.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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