webpackHotUpdate("static\\development\\pages\\main.js",{

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


/***/ })

})
//# sourceMappingURL=main.js.c0735148dda4bf6cbaa5.hot-update.js.map