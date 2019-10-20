/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/customize-controls.js":
/*!*****************************************!*\
  !*** ./assets/js/customize-controls.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * Scripts for working with customizer control actions\n *\n * @package   Rootstrap\n * @author    Sky Shabatura\n * @copyright Copyright (c) 2019, Sky Shabatura\n * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html\n */\n\n/**\n * Main Rootstrap Class\n */\nvar RootstrapDevices =\n/*#__PURE__*/\nfunction () {\n  function RootstrapDevices() {\n    _classCallCheck(this, RootstrapDevices);\n\n    // define api attribute\n    this.api = wp.customize; // if wp.customize is not defined, return\n\n    if (!this.api) return false; // define registered devices\n\n    this.devices = rootstrapData.devices;\n  }\n  /**\n   * Get list of device names\n   */\n\n\n  _createClass(RootstrapDevices, [{\n    key: \"getDeviceList\",\n    value: function getDeviceList() {\n      return Object.keys(this.devices);\n    }\n    /**\n     * Get a device id from a specified width\n     */\n\n  }, {\n    key: \"getDevice\",\n    value: function getDevice(width) {\n      var device = false;\n\n      for (var _i = 0, _Object$entries = Object.entries(this.devices); _i < _Object$entries.length; _i++) {\n        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),\n            name = _Object$entries$_i[0],\n            data = _Object$entries$_i[1];\n\n        if (!name || !data) continue;\n        var min = parseInt(data.min, 10) ? parseInt(data.min, 10) : 0;\n        var max = parseInt(data.max, 10) ? parseInt(data.max, 10) : 9999;\n        if (width >= min && width <= max) device = name;\n        return false;\n      }\n\n      return device;\n    }\n    /**\n     * Get the device id that matches the current preview screen width\n     */\n\n  }, {\n    key: \"getCurrentDevice\",\n    value: function getCurrentDevice() {\n      return getDevice(this.getPreviewWidth());\n    }\n    /**\n     * Get the current preview screen width\n     */\n\n  }, {\n    key: \"getPreviewWidth\",\n    value: function getPreviewWidth() {\n      var iframe = document.querySelector(\"#customize-preview iframe\");\n      var iframeDoc = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document;\n      return iframeDoc.body.offsetWidth();\n    }\n  }]);\n\n  return RootstrapDevices;\n}();\n/**\n * Create our Rootstrap Instance on customize ready\n */\n\n\nwp.customize.bind('ready', function () {\n  var rootstrapDevices = new RootstrapDevices();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VzdG9taXplLWNvbnRyb2xzLmpzPzQwNzMiXSwibmFtZXMiOlsiUm9vdHN0cmFwRGV2aWNlcyIsImFwaSIsIndwIiwiY3VzdG9taXplIiwiZGV2aWNlcyIsInJvb3RzdHJhcERhdGEiLCJPYmplY3QiLCJrZXlzIiwid2lkdGgiLCJkZXZpY2UiLCJlbnRyaWVzIiwibmFtZSIsImRhdGEiLCJtaW4iLCJwYXJzZUludCIsIm1heCIsImdldERldmljZSIsImdldFByZXZpZXdXaWR0aCIsImlmcmFtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlmcmFtZURvYyIsImNvbnRlbnREb2N1bWVudCIsImNvbnRlbnRXaW5kb3ciLCJib2R5Iiwib2Zmc2V0V2lkdGgiLCJiaW5kIiwicm9vdHN0cmFwRGV2aWNlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0FBU0E7OztJQUdNQSxnQjs7O0FBRUYsOEJBQWM7QUFBQTs7QUFDVjtBQUNBLFNBQUtDLEdBQUwsR0FBV0MsRUFBRSxDQUFDQyxTQUFkLENBRlUsQ0FJVjs7QUFDQSxRQUFJLENBQUUsS0FBS0YsR0FBWCxFQUFpQixPQUFPLEtBQVAsQ0FMUCxDQU9WOztBQUNBLFNBQUtHLE9BQUwsR0FBZUMsYUFBYSxDQUFDRCxPQUE3QjtBQUNIO0FBR0Q7Ozs7Ozs7b0NBR2dCO0FBQ1osYUFBT0UsTUFBTSxDQUFDQyxJQUFQLENBQWEsS0FBS0gsT0FBbEIsQ0FBUDtBQUNIO0FBR0Q7Ozs7Ozs4QkFHV0ksSyxFQUFRO0FBQ2YsVUFBSUMsTUFBTSxHQUFHLEtBQWI7O0FBQ0EseUNBQTJCSCxNQUFNLENBQUNJLE9BQVAsQ0FBZ0IsS0FBS04sT0FBckIsQ0FBM0IscUNBQTREO0FBQUE7QUFBQSxZQUFoRE8sSUFBZ0Q7QUFBQSxZQUExQ0MsSUFBMEM7O0FBRXhELFlBQUksQ0FBQ0QsSUFBRCxJQUFTLENBQUNDLElBQWQsRUFBcUI7QUFDckIsWUFBSUMsR0FBRyxHQUFLQyxRQUFRLENBQUVGLElBQUksQ0FBQ0MsR0FBUCxFQUFZLEVBQVosQ0FBVixHQUErQkMsUUFBUSxDQUFFRixJQUFJLENBQUNDLEdBQVAsRUFBWSxFQUFaLENBQXZDLEdBQXlELENBQW5FO0FBQ0EsWUFBSUUsR0FBRyxHQUFLRCxRQUFRLENBQUVGLElBQUksQ0FBQ0csR0FBUCxFQUFZLEVBQVosQ0FBVixHQUErQkQsUUFBUSxDQUFFRixJQUFJLENBQUNHLEdBQVAsRUFBWSxFQUFaLENBQXZDLEdBQXlELElBQW5FO0FBRUEsWUFBSVAsS0FBSyxJQUFJSyxHQUFULElBQWdCTCxLQUFLLElBQUlPLEdBQTdCLEVBQ0lOLE1BQU0sR0FBR0UsSUFBVDtBQUNBLGVBQU8sS0FBUDtBQUNQOztBQUVELGFBQU9GLE1BQVA7QUFDSDtBQUdEOzs7Ozs7dUNBR21CO0FBQ2YsYUFBT08sU0FBUyxDQUFFLEtBQUtDLGVBQUwsRUFBRixDQUFoQjtBQUNIO0FBR0Q7Ozs7OztzQ0FHa0I7QUFDZCxVQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QiwyQkFBdkIsQ0FBYjtBQUNBLFVBQUlDLFNBQVMsR0FBSUgsTUFBTSxDQUFDSSxlQUFSLEdBQTJCSixNQUFNLENBQUNJLGVBQWxDLEdBQW9ESixNQUFNLENBQUNLLGFBQVAsQ0FBcUJKLFFBQXpGO0FBQ0EsYUFBT0UsU0FBUyxDQUFDRyxJQUFWLENBQWVDLFdBQWYsRUFBUDtBQUNIOzs7OztBQUtMOzs7OztBQUdBdkIsRUFBRSxDQUFDQyxTQUFILENBQWF1QixJQUFiLENBQWtCLE9BQWxCLEVBQTJCLFlBQU07QUFDN0IsTUFBTUMsZ0JBQWdCLEdBQUcsSUFBSTNCLGdCQUFKLEVBQXpCO0FBQ0gsQ0FGRCIsImZpbGUiOiIuL2Fzc2V0cy9qcy9jdXN0b21pemUtY29udHJvbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNjcmlwdHMgZm9yIHdvcmtpbmcgd2l0aCBjdXN0b21pemVyIGNvbnRyb2wgYWN0aW9uc1xuICpcbiAqIEBwYWNrYWdlICAgUm9vdHN0cmFwXG4gKiBAYXV0aG9yICAgIFNreSBTaGFiYXR1cmFcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE5LCBTa3kgU2hhYmF0dXJhXG4gKiBAbGljZW5zZSAgIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9vbGQtbGljZW5zZXMvZ3BsLTIuMC5odG1sXG4gKi9cblxuLyoqXG4gKiBNYWluIFJvb3RzdHJhcCBDbGFzc1xuICovXG5jbGFzcyBSb290c3RyYXBEZXZpY2VzIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBkZWZpbmUgYXBpIGF0dHJpYnV0ZVxuICAgICAgICB0aGlzLmFwaSA9IHdwLmN1c3RvbWl6ZTtcblxuICAgICAgICAvLyBpZiB3cC5jdXN0b21pemUgaXMgbm90IGRlZmluZWQsIHJldHVyblxuICAgICAgICBpZiggISB0aGlzLmFwaSApIHJldHVybiBmYWxzZTtcblxuICAgICAgICAvLyBkZWZpbmUgcmVnaXN0ZXJlZCBkZXZpY2VzXG4gICAgICAgIHRoaXMuZGV2aWNlcyA9IHJvb3RzdHJhcERhdGEuZGV2aWNlcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEdldCBsaXN0IG9mIGRldmljZSBuYW1lc1xuICAgICAqL1xuICAgIGdldERldmljZUxpc3QoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyggdGhpcy5kZXZpY2VzICk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBkZXZpY2UgaWQgZnJvbSBhIHNwZWNpZmllZCB3aWR0aFxuICAgICAqL1xuICAgIGdldERldmljZSggd2lkdGggKSB7XG4gICAgICAgIHZhciBkZXZpY2UgPSBmYWxzZTtcbiAgICAgICAgZm9yIChjb25zdCBbbmFtZSwgZGF0YV0gb2YgT2JqZWN0LmVudHJpZXMoIHRoaXMuZGV2aWNlcyApICkge1xuXG4gICAgICAgICAgICBpZiggIW5hbWUgfHwgIWRhdGEgKSBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciBtaW4gPSAoIHBhcnNlSW50KCBkYXRhLm1pbiwgMTAgKSApID8gcGFyc2VJbnQoIGRhdGEubWluLCAxMCApOiAwO1xuICAgICAgICAgICAgdmFyIG1heCA9ICggcGFyc2VJbnQoIGRhdGEubWF4LCAxMCApICkgPyBwYXJzZUludCggZGF0YS5tYXgsIDEwICk6IDk5OTk7XG5cbiAgICAgICAgICAgIGlmKCB3aWR0aCA+PSBtaW4gJiYgd2lkdGggPD0gbWF4IClcbiAgICAgICAgICAgICAgICBkZXZpY2UgPSBuYW1lO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZXZpY2U7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRldmljZSBpZCB0aGF0IG1hdGNoZXMgdGhlIGN1cnJlbnQgcHJldmlldyBzY3JlZW4gd2lkdGhcbiAgICAgKi9cbiAgICBnZXRDdXJyZW50RGV2aWNlKCkge1xuICAgICAgICByZXR1cm4gZ2V0RGV2aWNlKCB0aGlzLmdldFByZXZpZXdXaWR0aCgpICk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgcHJldmlldyBzY3JlZW4gd2lkdGhcbiAgICAgKi9cbiAgICBnZXRQcmV2aWV3V2lkdGgoKSB7XG4gICAgICAgIHZhciBpZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1c3RvbWl6ZS1wcmV2aWV3IGlmcmFtZVwiKTtcbiAgICAgICAgdmFyIGlmcmFtZURvYyA9IChpZnJhbWUuY29udGVudERvY3VtZW50KSA/IGlmcmFtZS5jb250ZW50RG9jdW1lbnQgOiBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgICAgICAgcmV0dXJuIGlmcmFtZURvYy5ib2R5Lm9mZnNldFdpZHRoKClcbiAgICB9XG5cbn1cblxuXG4vKipcbiAqIENyZWF0ZSBvdXIgUm9vdHN0cmFwIEluc3RhbmNlIG9uIGN1c3RvbWl6ZSByZWFkeVxuICovXG53cC5jdXN0b21pemUuYmluZCgncmVhZHknLCAoKSA9PiB7XG4gICAgY29uc3Qgcm9vdHN0cmFwRGV2aWNlcyA9IG5ldyBSb290c3RyYXBEZXZpY2VzKCk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/js/customize-controls.js\n");

/***/ }),

/***/ "./assets/scss/customize-controls.scss":
/*!*********************************************!*\
  !*** ./assets/scss/customize-controls.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9jdXN0b21pemUtY29udHJvbHMuc2Nzcz9jZjc0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vYXNzZXRzL3Njc3MvY3VzdG9taXplLWNvbnRyb2xzLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/scss/customize-controls.scss\n");

/***/ }),

/***/ 0:
/*!*************************************************************************************!*\
  !*** multi ./assets/js/customize-controls.js ./assets/scss/customize-controls.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/sky/Repos/skyshab/rootstrap-devices/assets/js/customize-controls.js */"./assets/js/customize-controls.js");
module.exports = __webpack_require__(/*! /Users/sky/Repos/skyshab/rootstrap-devices/assets/scss/customize-controls.scss */"./assets/scss/customize-controls.scss");


/***/ })

/******/ });