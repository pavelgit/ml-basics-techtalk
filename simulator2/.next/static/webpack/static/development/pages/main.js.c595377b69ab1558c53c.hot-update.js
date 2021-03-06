webpackHotUpdate("static\\development\\pages\\main.js",{

/***/ "./pages/main.js":
/*!***********************!*\
  !*** ./pages/main.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _source_data_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../source/data-provider */ "./source/data-provider.js");
/* harmony import */ var _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source/basic-perceptron-model */ "./source/basic-perceptron-model.js");
/* harmony import */ var react_plotly_js_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-plotly.js/factory */ "./node_modules/react-plotly.js/factory.js");
/* harmony import */ var react_plotly_js_factory__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_plotly_js_factory__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _source_float_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../source/float-slider */ "./source/float-slider.js");
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
    key: "generateModelEvaluationData",
    value: function generateModelEvaluationData() {
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
        showscale: false,
        contours: {
          coloring: 'heatmap'
        }
      };
    }
  }, {
    key: "redrawClassificationLine",
    value: function redrawClassificationLine() {
      this.plotLayout.shapes[0] = this.getClassificationLineShape();
      this.forceUpdate();
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
      var _this2 = this;

      if (!this.state.isClient) {
        return null;
      }

      var Plot = react_plotly_js_factory__WEBPACK_IMPORTED_MODULE_3___default()(Plotly);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Plot, {
        data: [_source_data_provider__WEBPACK_IMPORTED_MODULE_1__["irisSetosaPlotData"], _source_data_provider__WEBPACK_IMPORTED_MODULE_1__["irisVersicolorPlotData"]],
        layout: this.plotLayout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_source_float_slider__WEBPACK_IMPORTED_MODULE_4__["default"], {
        rangeLimit: 10,
        value: _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_2__["default"].k,
        onChange: function onChange(value) {
          _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_2__["default"].k = value;

          _this2.redrawClassificationLine();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "K=", _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_2__["default"].k), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_source_float_slider__WEBPACK_IMPORTED_MODULE_4__["default"], {
        rangeLimit: 10,
        value: _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_2__["default"].b,
        onChange: function onChange(value) {
          _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_2__["default"].b = value;

          _this2.redrawClassificationLine();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "b=", _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_2__["default"].b), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Loss=", _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_2__["default"].evaluateLoss()));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/main")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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
      return this.evaluateActivation(this.getClassificationLineY(x) - y);
    }
  }, {
    key: "evaluateCost",
    value: function evaluateCost(x, y, category) {
      return Math.pow(this.evaluate(x, y) - category, 2);
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
var iris2 = __webpack_require__(/*! ./iris2 */ "./source/iris2.json");

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

/***/ "./source/plot-data.js":
false

})
//# sourceMappingURL=main.js.c595377b69ab1558c53c.hot-update.js.map