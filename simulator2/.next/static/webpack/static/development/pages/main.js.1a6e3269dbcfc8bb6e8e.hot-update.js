webpackHotUpdate("static\\development\\pages\\main.js",{

/***/ "./source/plot-data.js":
/*!*****************************!*\
  !*** ./source/data-provider.js ***!
  \*****************************/
/*! exports provided: irisSetosaPlotData, irisVersicolorPlotData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "irisSetosaPlotData", function() { return irisSetosa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "irisVersicolorPlotData", function() { return irisVersicolor; });
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


/***/ })

})
//# sourceMappingURL=main.js.1a6e3269dbcfc8bb6e8e.hot-update.js.map