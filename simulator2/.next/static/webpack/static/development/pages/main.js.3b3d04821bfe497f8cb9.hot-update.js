webpackHotUpdate("static\\development\\pages\\main.js",{

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
      var lineY = this.getClassificationLineY(0);
      var distanceToLine = Math.abs(x - this.k * (y - lineY));
      return this.evaluateActivation(distanceToLine);
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

/***/ })

})
//# sourceMappingURL=main.js.3b3d04821bfe497f8cb9.hot-update.js.map