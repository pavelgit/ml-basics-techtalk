webpackHotUpdate("static\\development\\pages\\main.js",{

/***/ "./source/basic-perceptron-model.js":
/*!******************************************!*\
  !*** ./source/basic-perceptron-model.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _source_plot_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../source/plot-data */ "./source/data-provider.js");
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
      return this.evaluate(x, y) - category;
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

      return _source_plot_data__WEBPACK_IMPORTED_MODULE_0__["trainingExamples"].reduce(function (acc, v) {
        return acc + _this.evaluateCost(v.x, v.y, v.category);
      }, 0);
    }
  }]);

  return BasicPerceptronModel;
}())());

/***/ }),

/***/ "./source/plot-data.js":
/*!*****************************!*\
  !*** ./source/data-provider.js ***!
  \*****************************/
/*! exports provided: irisSetosaPlotData, irisVersicolorPlotData, trainingExamples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "irisSetosaPlotData", function() { return irisSetosa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "irisVersicolorPlotData", function() { return irisVersicolor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trainingExamples", function() { return trainingData; });
var iris2 = __webpack_require__(/*! ./iris2 */ "./source/iris2.json");

var irisSetosa = {
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
var irisVersicolor = {
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
var trainingData = iris2.map(function (v) {
  return {
    x: x.petal_length,
    y: y.petal_width,
    category: v.species === 'Iris-setosa' ? 1 : 0
  };
});


/***/ })

})
//# sourceMappingURL=main.js.204fafc648d01dec39ef.hot-update.js.map