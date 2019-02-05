((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\main.js"],{

/***/ "./node_modules/object-assign/index.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/object-assign/index.js from dll-reference dll_b2d9fd95b535cd8bf589 ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_b2d9fd95b535cd8bf589 */ "dll-reference dll_b2d9fd95b535cd8bf589"))("./node_modules/object-assign/index.js");

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_b2d9fd95b535cd8bf589 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_b2d9fd95b535cd8bf589 */ "dll-reference dll_b2d9fd95b535cd8bf589"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_b2d9fd95b535cd8bf589 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_b2d9fd95b535cd8bf589 */ "dll-reference dll_b2d9fd95b535cd8bf589"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/react-plotly.js/factory.js":
/*!*************************************************!*\
  !*** ./node_modules/react-plotly.js/factory.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = plotComponentFactory;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// The naming convention is:
//   - events are attached as `'plotly_' + eventName.toLowerCase()`
//   - react props are `'on' + eventName`
var eventNames = ['AfterExport', 'AfterPlot', 'Animated', 'AnimatingFrame', 'AnimationInterrupted', 'AutoSize', 'BeforeExport', 'ButtonClicked', 'Click', 'ClickAnnotation', 'Deselect', 'DoubleClick', 'Framework', 'Hover', 'LegendClick', 'LegendDoubleClick', 'Relayout', 'Restyle', 'Redraw', 'Selected', 'Selecting', 'SliderChange', 'SliderEnd', 'SliderStart', 'Transitioning', 'TransitionInterrupted', 'Unhover'];

var updateEvents = ['plotly_restyle', 'plotly_redraw', 'plotly_relayout', 'plotly_doubleclick', 'plotly_animated'];

// Check if a window is available since SSR (server-side rendering)
// breaks unnecessarily if you try to use it server-side.
var isBrowser = typeof window !== 'undefined';

function plotComponentFactory(Plotly) {
  var PlotlyComponent = function (_Component) {
    _inherits(PlotlyComponent, _Component);

    function PlotlyComponent(props) {
      _classCallCheck(this, PlotlyComponent);

      var _this = _possibleConstructorReturn(this, (PlotlyComponent.__proto__ || Object.getPrototypeOf(PlotlyComponent)).call(this, props));

      _this.p = Promise.resolve();
      _this.resizeHandler = null;
      _this.handlers = {};

      _this.syncWindowResize = _this.syncWindowResize.bind(_this);
      _this.syncEventHandlers = _this.syncEventHandlers.bind(_this);
      _this.attachUpdateEvents = _this.attachUpdateEvents.bind(_this);
      _this.getRef = _this.getRef.bind(_this);
      _this.handleUpdate = _this.handleUpdate.bind(_this);
      _this.figureCallback = _this.figureCallback.bind(_this);
      return _this;
    }

    _createClass(PlotlyComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        this.p = this.p.then(function () {
          return Plotly.newPlot(_this2.el, {
            data: _this2.props.data,
            layout: _this2.props.layout,
            config: _this2.props.config,
            frames: _this2.props.frames
          });
        }).then(function () {
          return _this2.syncWindowResize(null, true);
        }).then(this.syncEventHandlers).then(this.attachUpdateEvents).then(function () {
          return _this2.figureCallback(_this2.props.onInitialized);
        }).catch(function (err) {
          console.error('Error while plotting:', err);
          return _this2.props.onError && _this2.props.onError(err);
        });
      }
    }, {
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps) {
        var _this3 = this;

        if (nextProps.revision !== void 0 && nextProps.revision === this.props.revision) {
          // if revision is set and unchanged, do nothing
          return;
        }

        var numPrevFrames = this.props.frames && this.props.frames.length ? this.props.frames.length : 0;
        var numNextFrames = nextProps.frames && nextProps.frames.length ? nextProps.frames.length : 0;
        if (nextProps.layout === this.props.layout && nextProps.data === this.props.data && nextProps.config === this.props.config && numNextFrames === numPrevFrames) {
          // prevent infinite loops when component is re-rendered after onUpdate
          // frames *always* changes identity so fall back to check length only :(
          return;
        }

        this.p = this.p.then(function () {
          return Plotly.react(_this3.el, {
            data: nextProps.data,
            layout: nextProps.layout,
            config: nextProps.config,
            frames: nextProps.frames
          });
        }).then(function () {
          return _this3.syncEventHandlers(nextProps);
        }).then(function () {
          return _this3.syncWindowResize(nextProps);
        }).then(function () {
          return _this3.figureCallback(nextProps.onUpdate);
        }).catch(function (err) {
          console.error('Error while plotting:', err);
          _this3.props.onError && _this3.props.onError(err);
        });
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.figureCallback(this.props.onPurge);

        if (this.resizeHandler && isBrowser) {
          window.removeEventListener('resize', this.resizeHandler);
          this.resizeHandler = null;
        }

        this.removeUpdateEvents();

        Plotly.purge(this.el);
      }
    }, {
      key: 'attachUpdateEvents',
      value: function attachUpdateEvents() {
        if (!this.el || !this.el.removeListener) return;

        for (var i = 0; i < updateEvents.length; i++) {
          this.el.on(updateEvents[i], this.handleUpdate);
        }
      }
    }, {
      key: 'removeUpdateEvents',
      value: function removeUpdateEvents() {
        if (!this.el || !this.el.removeListener) return;

        for (var i = 0; i < updateEvents.length; i++) {
          this.el.removeListener(updateEvents[i], this.handleUpdate);
        }
      }
    }, {
      key: 'handleUpdate',
      value: function handleUpdate() {
        this.figureCallback(this.props.onUpdate);
      }
    }, {
      key: 'figureCallback',
      value: function figureCallback(callback) {
        if (typeof callback === 'function') {
          var _el = this.el,
              data = _el.data,
              layout = _el.layout;

          var frames = this.el._transitionData ? this.el._transitionData._frames : null;
          var figure = { data: data, layout: layout, frames: frames }; // for extra clarity!
          callback(figure, this.el);
        }
      }
    }, {
      key: 'syncWindowResize',
      value: function syncWindowResize(propsIn, invoke) {
        var _this4 = this;

        var props = propsIn || this.props;
        if (!isBrowser) return;

        if (props.useResizeHandler && !this.resizeHandler) {
          this.resizeHandler = function () {
            return Plotly.Plots.resize(_this4.el);
          };
          window.addEventListener('resize', this.resizeHandler);
          if (invoke) {
            this.resizeHandler();
          }
        } else if (!props.useResizeHandler && this.resizeHandler) {
          window.removeEventListener('resize', this.resizeHandler);
          this.resizeHandler = null;
        }
      }
    }, {
      key: 'getRef',
      value: function getRef(el) {
        this.el = el;

        if (this.props.debug && isBrowser) {
          window.gd = this.el;
        }
      }

      // Attach and remove event handlers as they're added or removed from props:

    }, {
      key: 'syncEventHandlers',
      value: function syncEventHandlers(propsIn) {
        // Allow use of nextProps if passed explicitly:
        var props = propsIn || this.props;

        for (var i = 0; i < eventNames.length; i++) {
          var eventName = eventNames[i];
          var prop = props['on' + eventName];
          var hasHandler = !!this.handlers[eventName];

          if (prop && !hasHandler) {
            this.handlers[eventName] = prop;
            this.el.on('plotly_' + eventName.toLowerCase(), this.handlers[eventName]);
          } else if (!prop && hasHandler) {
            // Needs to be removed:
            this.el.removeListener('plotly_' + eventName.toLowerCase(), this.handlers[eventName]);
            delete this.handlers[eventName];
          }
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement('div', {
          id: this.props.divId,
          style: this.props.style,
          ref: this.getRef,
          className: this.props.className
        });
      }
    }]);

    return PlotlyComponent;
  }(_react.Component);

  PlotlyComponent.propTypes = {
    data: _propTypes2.default.arrayOf(_propTypes2.default.object),
    config: _propTypes2.default.object,
    layout: _propTypes2.default.object,
    frames: _propTypes2.default.arrayOf(_propTypes2.default.object),
    revision: _propTypes2.default.number,
    onInitialized: _propTypes2.default.func,
    onPurge: _propTypes2.default.func,
    onError: _propTypes2.default.func,
    onUpdate: _propTypes2.default.func,
    debug: _propTypes2.default.bool,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string,
    useResizeHandler: _propTypes2.default.bool,
    divId: _propTypes2.default.string
  };

  for (var i = 0; i < eventNames.length; i++) {
    PlotlyComponent.propTypes['on' + eventNames[i]] = _propTypes2.default.func;
  }

  PlotlyComponent.defaultProps = {
    debug: false,
    useResizeHandler: false,
    data: [],
    style: { position: 'relative', display: 'inline-block' }
  };

  return PlotlyComponent;
}
module.exports = exports['default'];
//# sourceMappingURL=factory.js.map

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_b2d9fd95b535cd8bf589 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_b2d9fd95b535cd8bf589 */ "dll-reference dll_b2d9fd95b535cd8bf589"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _source_data_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../source/data-provider */ "./source/data-provider.js");
/* harmony import */ var _source_basic_perceptron_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../source/basic-perceptron-model */ "./source/basic-perceptron-model.js");
/* harmony import */ var react_plotly_js_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-plotly.js/factory */ "./node_modules/react-plotly.js/factory.js");
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



/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/main', function() {
module.exports = __webpack_require__(/*! ./pages/main.js */"./pages/main.js");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_b2d9fd95b535cd8bf589":
/*!*******************************************!*\
  !*** external "dll_b2d9fd95b535cd8bf589" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_b2d9fd95b535cd8bf589;

/***/ })

},[[3,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=main.js.map