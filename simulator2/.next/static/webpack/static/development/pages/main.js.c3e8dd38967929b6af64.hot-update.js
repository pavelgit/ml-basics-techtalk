webpackHotUpdate("static\\development\\pages\\main.js",{

/***/ "./source/loss-plot.js":
/*!*****************************!*\
  !*** ./source/loss-plot.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../source/basic-perceptron-model */ "./source/basic-perceptron-model.js");
/* harmony import */ var react_plotly_js_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-plotly.js/factory */ "./node_modules/react-plotly.js/factory.js");
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



/***/ })

})
//# sourceMappingURL=main.js.c3e8dd38967929b6af64.hot-update.js.map