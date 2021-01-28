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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/robot.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/robot.js":
/*!***************************************!*\
  !*** ./app/javascript/packs/robot.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/loivd/study/v3_robot/app/javascript/packs/robot.js: Support for the experimental syntax 'jsx' isn't currently enabled (1:1):\n\n> 1 | <template>\n    | ^\n  2 |   <div>\n  3 |       <label>Please ask a yes or no question.\n  4 |         For example: Is the sky blue? </label>\n\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\n    at Parser._raise (/home/loivd/study/v3_robot/node_modules/@babel/parser/lib/index.js:748:17)\n    at Parser.raiseWithData (/home/loivd/study/v3_robot/node_modules/@babel/parser/lib/index.js:741:17)\n    at Parser.expectOnePlugin (/home/loivd/study/v3_robot/node_modules/@babel/parser/lib/index.js:9116:18)\n    at Parser.parseExprAtom (/home/loivd/study/v3_robot/node_modules/@babel/parser/lib/index.js:10569:22)\n    at Parser.parseExprSubscripts (/home/loivd/study/v3_robot/node_modules/@babel/parser/lib/index.js:10150:23)\n    at Parser.parseUpdate (/home/loivd/study/v3_robot/node_modules/@babel/parser/lib/index.js:10130:21)\n    at Parser.parseMaybeUnary (/home/loivd/study/v3_robot/node_modules/@babel/parser/lib/index.js:10119:17)\n    at Parser.parseExprOps (/home/loivd/study/v3_robot/node_modules/@babel/parser/lib/index.js:9989:23)\n    at Parser.parseMaybeConditional (/home/loivd/study/v3_robot/node_modules/@babel/parser/lib/index.js:9963:23)\n    at Parser.parseMaybeAssign (/home/loivd/study/v3_robot/node_modules/@babel/parser/lib/index.js:9926:21)\n    at Parser.parseExpressionBase (/home/loivd/study/v3_robot/node_modules/@babel/parser/lib/index.js:9871:23)\n    at allowInAnd (/home/loivd/study/v3_robot/node_modules/@babel/parser/lib/index.js:9865:39)\n    at Parser.allowInAnd (/home/loivd/study/v3_robot/node_modules/@babel/parser/lib/index.js:11541:16)\n    at Parser.parseExpression (/home/loivd/study/v3_robot/node_modules/@babel/parser/lib/index.js:9865:17)\n    at Parser.parseStatementContent (/home/loivd/study/v3_robot/node_modules/@babel/parser/lib/index.js:11807:23)\n    at Parser.parseStatement (/home/loivd/study/v3_robot/node_modules/@babel/parser/lib/index.js:11676:17)");

/***/ })

/******/ });
//# sourceMappingURL=robot-daf97d6dbaad67910af6.js.map