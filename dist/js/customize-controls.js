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

eval("function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * Scripts for working with customizer control actions\n *\n * @package   Rootstrap\n * @author    Sky Shabatura\n * @copyright Copyright (c) 2019, Sky Shabatura\n * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html\n */\n\n/**\n * Main Rootstrap Class\n */\nvar RootstrapDevices =\n/*#__PURE__*/\nfunction () {\n  function RootstrapDevices() {\n    _classCallCheck(this, RootstrapDevices);\n\n    // define api attribute\n    this.api = wp.customize; // if wp.customize is not defined, return\n\n    if (!this.api) return false; // define registered devices\n\n    this.devices = rootstrapDataDevices;\n  }\n  /**\n   * Get list of device names\n   */\n\n\n  _createClass(RootstrapDevices, [{\n    key: \"getDeviceList\",\n    value: function getDeviceList() {\n      return Object.keys(this.devices);\n    }\n    /**\n     * Get a device id from a specified width\n     */\n\n  }, {\n    key: \"getDevice\",\n    value: function getDevice(width) {\n      var device = false;\n\n      for (var _i = 0, _Object$entries = Object.entries(this.devices); _i < _Object$entries.length; _i++) {\n        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),\n            name = _Object$entries$_i[0],\n            data = _Object$entries$_i[1];\n\n        if (!name || !data) continue;\n        var min = parseInt(data.min, 10) ? parseInt(data.min, 10) : 0;\n        var max = parseInt(data.max, 10) ? parseInt(data.max, 10) : 9999;\n        if (width >= min && width <= max) device = name;\n        return false;\n      }\n\n      return device;\n    }\n    /**\n     * Get the device id that matches the current preview screen width\n     */\n\n  }, {\n    key: \"getCurrentDevice\",\n    value: function getCurrentDevice() {\n      return getDevice(this.getPreviewWidth());\n    }\n    /**\n     * Get the current preview screen width\n     */\n\n  }, {\n    key: \"getPreviewWidth\",\n    value: function getPreviewWidth() {\n      var iframe = document.querySelector(\"#customize-preview iframe\");\n      var iframeDoc = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document;\n      return iframeDoc.body.offsetWidth();\n    }\n  }]);\n\n  return RootstrapDevices;\n}();\n/**\n * Create our Rootstrap Instance on customize ready\n */\n\n\nwp.customize.bind('ready', function () {\n  var rootstrapDevices = new RootstrapDevices();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VzdG9taXplLWNvbnRyb2xzLmpzPzQwNzMiXSwibmFtZXMiOlsiUm9vdHN0cmFwRGV2aWNlcyIsImFwaSIsIndwIiwiY3VzdG9taXplIiwiZGV2aWNlcyIsInJvb3RzdHJhcERhdGFEZXZpY2VzIiwiT2JqZWN0Iiwia2V5cyIsIndpZHRoIiwiZGV2aWNlIiwiZW50cmllcyIsIm5hbWUiLCJkYXRhIiwibWluIiwicGFyc2VJbnQiLCJtYXgiLCJnZXREZXZpY2UiLCJnZXRQcmV2aWV3V2lkdGgiLCJpZnJhbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpZnJhbWVEb2MiLCJjb250ZW50RG9jdW1lbnQiLCJjb250ZW50V2luZG93IiwiYm9keSIsIm9mZnNldFdpZHRoIiwiYmluZCIsInJvb3RzdHJhcERldmljZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQVNBOzs7SUFHTUEsZ0I7OztBQUVGLDhCQUFjO0FBQUE7O0FBQ1Y7QUFDQSxTQUFLQyxHQUFMLEdBQVdDLEVBQUUsQ0FBQ0MsU0FBZCxDQUZVLENBSVY7O0FBQ0EsUUFBSSxDQUFFLEtBQUtGLEdBQVgsRUFBaUIsT0FBTyxLQUFQLENBTFAsQ0FPVjs7QUFDQSxTQUFLRyxPQUFMLEdBQWVDLG9CQUFmO0FBQ0g7QUFHRDs7Ozs7OztvQ0FHZ0I7QUFDWixhQUFPQyxNQUFNLENBQUNDLElBQVAsQ0FBYSxLQUFLSCxPQUFsQixDQUFQO0FBQ0g7QUFHRDs7Ozs7OzhCQUdXSSxLLEVBQVE7QUFDZixVQUFJQyxNQUFNLEdBQUcsS0FBYjs7QUFDQSx5Q0FBMkJILE1BQU0sQ0FBQ0ksT0FBUCxDQUFnQixLQUFLTixPQUFyQixDQUEzQixxQ0FBNEQ7QUFBQTtBQUFBLFlBQWhETyxJQUFnRDtBQUFBLFlBQTFDQyxJQUEwQzs7QUFFeEQsWUFBSSxDQUFDRCxJQUFELElBQVMsQ0FBQ0MsSUFBZCxFQUFxQjtBQUNyQixZQUFJQyxHQUFHLEdBQUtDLFFBQVEsQ0FBRUYsSUFBSSxDQUFDQyxHQUFQLEVBQVksRUFBWixDQUFWLEdBQStCQyxRQUFRLENBQUVGLElBQUksQ0FBQ0MsR0FBUCxFQUFZLEVBQVosQ0FBdkMsR0FBeUQsQ0FBbkU7QUFDQSxZQUFJRSxHQUFHLEdBQUtELFFBQVEsQ0FBRUYsSUFBSSxDQUFDRyxHQUFQLEVBQVksRUFBWixDQUFWLEdBQStCRCxRQUFRLENBQUVGLElBQUksQ0FBQ0csR0FBUCxFQUFZLEVBQVosQ0FBdkMsR0FBeUQsSUFBbkU7QUFFQSxZQUFJUCxLQUFLLElBQUlLLEdBQVQsSUFBZ0JMLEtBQUssSUFBSU8sR0FBN0IsRUFDSU4sTUFBTSxHQUFHRSxJQUFUO0FBQ0EsZUFBTyxLQUFQO0FBQ1A7O0FBRUQsYUFBT0YsTUFBUDtBQUNIO0FBR0Q7Ozs7Ozt1Q0FHbUI7QUFDZixhQUFPTyxTQUFTLENBQUUsS0FBS0MsZUFBTCxFQUFGLENBQWhCO0FBQ0g7QUFHRDs7Ozs7O3NDQUdrQjtBQUNkLFVBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLDJCQUF2QixDQUFiO0FBQ0EsVUFBSUMsU0FBUyxHQUFJSCxNQUFNLENBQUNJLGVBQVIsR0FBMkJKLE1BQU0sQ0FBQ0ksZUFBbEMsR0FBb0RKLE1BQU0sQ0FBQ0ssYUFBUCxDQUFxQkosUUFBekY7QUFDQSxhQUFPRSxTQUFTLENBQUNHLElBQVYsQ0FBZUMsV0FBZixFQUFQO0FBQ0g7Ozs7O0FBS0w7Ozs7O0FBR0F2QixFQUFFLENBQUNDLFNBQUgsQ0FBYXVCLElBQWIsQ0FBa0IsT0FBbEIsRUFBMkIsWUFBTTtBQUM3QixNQUFNQyxnQkFBZ0IsR0FBRyxJQUFJM0IsZ0JBQUosRUFBekI7QUFDSCxDQUZEIiwiZmlsZSI6Ii4vYXNzZXRzL2pzL2N1c3RvbWl6ZS1jb250cm9scy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU2NyaXB0cyBmb3Igd29ya2luZyB3aXRoIGN1c3RvbWl6ZXIgY29udHJvbCBhY3Rpb25zXG4gKlxuICogQHBhY2thZ2UgICBSb290c3RyYXBcbiAqIEBhdXRob3IgICAgU2t5IFNoYWJhdHVyYVxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTksIFNreSBTaGFiYXR1cmFcbiAqIEBsaWNlbnNlICAgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL29sZC1saWNlbnNlcy9ncGwtMi4wLmh0bWxcbiAqL1xuXG4vKipcbiAqIE1haW4gUm9vdHN0cmFwIENsYXNzXG4gKi9cbmNsYXNzIFJvb3RzdHJhcERldmljZXMge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIGRlZmluZSBhcGkgYXR0cmlidXRlXG4gICAgICAgIHRoaXMuYXBpID0gd3AuY3VzdG9taXplO1xuXG4gICAgICAgIC8vIGlmIHdwLmN1c3RvbWl6ZSBpcyBub3QgZGVmaW5lZCwgcmV0dXJuXG4gICAgICAgIGlmKCAhIHRoaXMuYXBpICkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vIGRlZmluZSByZWdpc3RlcmVkIGRldmljZXNcbiAgICAgICAgdGhpcy5kZXZpY2VzID0gcm9vdHN0cmFwRGF0YURldmljZXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBHZXQgbGlzdCBvZiBkZXZpY2UgbmFtZXNcbiAgICAgKi9cbiAgICBnZXREZXZpY2VMaXN0KCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoIHRoaXMuZGV2aWNlcyApO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0IGEgZGV2aWNlIGlkIGZyb20gYSBzcGVjaWZpZWQgd2lkdGhcbiAgICAgKi9cbiAgICBnZXREZXZpY2UoIHdpZHRoICkge1xuICAgICAgICB2YXIgZGV2aWNlID0gZmFsc2U7XG4gICAgICAgIGZvciAoY29uc3QgW25hbWUsIGRhdGFdIG9mIE9iamVjdC5lbnRyaWVzKCB0aGlzLmRldmljZXMgKSApIHtcblxuICAgICAgICAgICAgaWYoICFuYW1lIHx8ICFkYXRhICkgY29udGludWU7XG4gICAgICAgICAgICB2YXIgbWluID0gKCBwYXJzZUludCggZGF0YS5taW4sIDEwICkgKSA/IHBhcnNlSW50KCBkYXRhLm1pbiwgMTAgKTogMDtcbiAgICAgICAgICAgIHZhciBtYXggPSAoIHBhcnNlSW50KCBkYXRhLm1heCwgMTAgKSApID8gcGFyc2VJbnQoIGRhdGEubWF4LCAxMCApOiA5OTk5O1xuXG4gICAgICAgICAgICBpZiggd2lkdGggPj0gbWluICYmIHdpZHRoIDw9IG1heCApXG4gICAgICAgICAgICAgICAgZGV2aWNlID0gbmFtZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGV2aWNlO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkZXZpY2UgaWQgdGhhdCBtYXRjaGVzIHRoZSBjdXJyZW50IHByZXZpZXcgc2NyZWVuIHdpZHRoXG4gICAgICovXG4gICAgZ2V0Q3VycmVudERldmljZSgpIHtcbiAgICAgICAgcmV0dXJuIGdldERldmljZSggdGhpcy5nZXRQcmV2aWV3V2lkdGgoKSApO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjdXJyZW50IHByZXZpZXcgc2NyZWVuIHdpZHRoXG4gICAgICovXG4gICAgZ2V0UHJldmlld1dpZHRoKCkge1xuICAgICAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXN0b21pemUtcHJldmlldyBpZnJhbWVcIik7XG4gICAgICAgIHZhciBpZnJhbWVEb2MgPSAoaWZyYW1lLmNvbnRlbnREb2N1bWVudCkgPyBpZnJhbWUuY29udGVudERvY3VtZW50IDogaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gICAgICAgIHJldHVybiBpZnJhbWVEb2MuYm9keS5vZmZzZXRXaWR0aCgpXG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBDcmVhdGUgb3VyIFJvb3RzdHJhcCBJbnN0YW5jZSBvbiBjdXN0b21pemUgcmVhZHlcbiAqL1xud3AuY3VzdG9taXplLmJpbmQoJ3JlYWR5JywgKCkgPT4ge1xuICAgIGNvbnN0IHJvb3RzdHJhcERldmljZXMgPSBuZXcgUm9vdHN0cmFwRGV2aWNlcygpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/js/customize-controls.js\n");

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