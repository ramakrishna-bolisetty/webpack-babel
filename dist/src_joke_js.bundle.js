"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["src_joke_js"],{

/***/ "./src/joke.js":
/*!*********************!*\
  !*** ./src/joke.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\nfunction generateJoke() {\n  var config = {\n    headers: {\n      Accept: 'application/json'\n    }\n  };\n  axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('https://icanhazdadjoke.com', config).then(function (res) {\n    document.getElementById('joke').innerHTML = res.data.joke;\n  });\n  console.log('gerenatejoke is called');\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateJoke);\n\n//# sourceURL=webpack://webpack-demo/./src/joke.js?");

/***/ })

}]);