/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n  margin: 0;\r\n  color: white;\r\n  background-color: #ffffff;\r\n}\r\nheader {\r\n  display: flex;\r\n  position: fixed;\r\n  inset: 0px 0px auto;\r\n  align-items: center;\r\n  padding: 0px 250px;\r\n  margin: auto;\r\n  backdrop-filter: blur(3px);\r\n  background-color: #ffffffb2;\r\n  z-index: 80;\r\n}\r\nfooter {\r\n  height: 400px;\r\n  background-color: #222;\r\n  width: 100%;\r\n}\r\n#home-wrapper {\r\n  position: relative;\r\n  z-index: 1;\r\n  text-align: center;\r\n  margin: 100px 230px;\r\n}\r\n.home-title {\r\n  font-size: 44px;\r\n  margin: 0px;\r\n}\r\n#home-img-wrapper {\r\n  display: flex;\r\n  height: 300px;\r\n  justify-content: center;\r\n  margin: 100px 0px 0px 0px;\r\n}\r\n.home-img {\r\n  margin: 0px 20px 0px 20px;\r\n  border-radius: 20px;\r\n  box-shadow: 10px 10px #0000003b;\r\n  max-width: 512px;\r\n}\r\n.header-btn {\r\n  width: 120px;\r\n  height: 40px;\r\n  margin: 0px 10px;\r\n  background: none;\r\n  border: none;\r\n  color: #3a2323;\r\n  font-size: 24px;\r\n}\r\n.number {\r\n  color: #3a2323;\r\n  font-size: 24px;\r\n  margin-left: auto;\r\n  margin-right: 30px;\r\n}\r\n.logo {\r\n  height: 60px;\r\n}\r\n.background-img {\r\n  filter: blur(10px);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  max-width: -moz-available;\r\n  height: 1050px;\r\n}\r\n\r\n.item {\r\n  padding: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  box-shadow: 4px -4px #00000012;\r\n}\r\n.item-name {\r\n  margin: 0px;\r\n  font-size: 24px;\r\n}\r\n.item-cost {\r\n  margin: 0;\r\n  font-size: 24px;\r\n}\r\n.item-ingredients {\r\n  margin: 0px;\r\n  font-size: 15px;\r\n  color: #aad6aa;\r\n}\r\n.item-name-wrapper {\r\n  display: flex;\r\n}\r\n#menu-wrapper {\r\n  background-color: rgba(255, 255, 255, 0);\r\n  width: 80%;\r\n  height: 1200px;\r\n  margin: auto;\r\n  border: none;\r\n  border-radius: 60px;\r\n  display: flex;\r\n}\r\n.menu-card {\r\n  background-color: #262322;\r\n  height: 760px;\r\n  width: 33%;\r\n  border-top: 3px solid #ffffff;\r\n  border-bottom: 3px solid #ffffff;\r\n  box-shadow: 6px 5px #0000005c;\r\n  z-index: 1;\r\n}\r\n.title-card {\r\n  text-align: center;\r\n  margin: 10px 0px;\r\n  padding-bottom: 10px;\r\n}\r\n#title {\r\n  font-size: 24px;\r\n  margin: 0;\r\n}\r\n#cost {\r\n  margin: 0;\r\n}\r\n#content {\r\n  height: 900px;\r\n  background-color: rgb(255, 255, 255);\r\n  padding: 40px;\r\n  margin: 60px 0px 10px 0px;\r\n}\r\n#home:hover,\r\n#menu:hover,\r\n#about:hover {\r\n  background-color: rgba(0, 0, 0, 0.105);\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n}\r\n#about-wrapper {\r\n  position: relative;\r\n  margin: 100px 350px;\r\n  background-color: #262322;\r\n  padding: 10px;\r\n  border-top: 3px solid #ffffff;\r\n  border-bottom: 3px solid #ffffff;\r\n  box-shadow: 6px 5px #0000005c;\r\n}\r\n.about-title {\r\n  font-size: 26px;\r\n  margin: 10px 0px;\r\n  text-align: center;\r\n}\r\n.about-text {\r\n  font-size: 18px;\r\n  margin: 40px 20px;\r\n  box-shadow: 0px -4px #00000012;\r\n  padding: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 1280px) {\r\n  .item-ingredients {\r\n    font-size: 12px;\r\n  }\r\n  .item-name {\r\n    font-size: 20px;\r\n  }\r\n  .item-cost {\r\n    font-size: 20px;\r\n  }\r\n  header {\r\n    padding: 0px 50px;\r\n  }\r\n  #about-wrapper {\r\n    margin: 100px 150px;\r\n  }\r\n  #home-wrapper {\r\n    margin: 100px 0px;\r\n  }\r\n  .home-img {\r\n    height: 240px;\r\n  }\r\n}\r\n@media only screen and (max-width: 1050px) {\r\n  #menu-wrapper {\r\n    width: 90%;\r\n  }\r\n}\r\n@media only screen and (max-width: 950px) {\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawAbout: () => (/* binding */ drawAbout)\n/* harmony export */ });\nfunction drawAbout() {\r\n  const aboutWrapper = document.createElement(\"div\");\r\n  aboutWrapper.id = \"about-wrapper\";\r\n  document.getElementById(\"content\").appendChild(aboutWrapper);\r\n\r\n  const aboutTitle = document.createElement(\"p\");\r\n  aboutTitle.className = \"about-title\";\r\n  aboutTitle.innerText = \"About Us\";\r\n  document.getElementById(\"about-wrapper\").appendChild(aboutTitle);\r\n\r\n  const aboutText1 = document.createElement(\"p\");\r\n  aboutText1.className = \"about-text\";\r\n  aboutText1.innerText =\r\n    \"Welcome to Valentino, where passion meets pizza! Since our opening in 1997, we’ve been committed to bringing the authentic flavors of Italy right to your table. Our story began with a simple goal: to create a warm, welcoming place where friends and family can gather to enjoy great food made with love.\";\r\n  document.getElementById(\"about-wrapper\").appendChild(aboutText1);\r\n\r\n  const aboutText2 = document.createElement(\"p\");\r\n  aboutText2.className = \"about-text\";\r\n  aboutText2.innerText =\r\n    \"Whether you're craving a classic Margherita, a loaded Meat Lover’s, or a unique specialty pie, we’ve got something for everyone. And it’s not just pizza – our menu features a variety of mouthwatering appetizers, fresh salads, and homemade desserts, perfect for any occasion.\";\r\n  document.getElementById(\"about-wrapper\").appendChild(aboutText2);\r\n\r\n  const aboutText3 = document.createElement(\"p\");\r\n  aboutText3.className = \"about-text\";\r\n  aboutText3.innerText =\r\n    \"We’re more than just a pizzeria – we’re a part of the community. Whether you're dining in, taking out, or enjoying delivery, our team is dedicated to providing you with exceptional service and a memorable experience every time.\";\r\n  document.getElementById(\"about-wrapper\").appendChild(aboutText3);\r\n\r\n  const aboutText4 = document.createElement(\"p\");\r\n  aboutText4.className = \"about-text\";\r\n  aboutText4.innerText =\r\n    \"Thank you for making Valentino your go-to place for great pizza. We can’t wait to serve you!\";\r\n  document.getElementById(\"about-wrapper\").appendChild(aboutText4);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawHome: () => (/* binding */ drawHome)\n/* harmony export */ });\nfunction drawHome() {\r\n  const home = document.createElement(\"div\");\r\n  home.id = \"home-wrapper\";\r\n  document.getElementById(\"content\").appendChild(home);\r\n\r\n  const homeTitle = document.createElement(\"p\");\r\n  homeTitle.className = \"home-title\";\r\n  homeTitle.innerText = \"The best pizza in Borlänge.\";\r\n  document.getElementById(\"home-wrapper\").appendChild(homeTitle);\r\n\r\n  const homeText = document.createElement(\"p\");\r\n  homeText.className = \"home-text\";\r\n  homeText.innerText = \"Experience great dining at an affordable price.\";\r\n  document.getElementById(\"home-wrapper\").appendChild(homeText);\r\n\r\n  const homeImgWrapper = document.createElement(\"div\");\r\n  homeImgWrapper.id = \"home-img-wrapper\";\r\n  document.getElementById(\"home-wrapper\").appendChild(homeImgWrapper);\r\n\r\n  const homeImg1 = document.createElement(\"img\");\r\n  homeImg1.src = \"https://i.imgur.com/BVbormN.png\";\r\n  homeImg1.className = \"home-img\";\r\n  document.getElementById(\"home-img-wrapper\").appendChild(homeImg1);\r\n\r\n  const homeImg2 = document.createElement(\"img\");\r\n  homeImg2.src = \"https://i.imgur.com/r9MkhDx.png\";\r\n  homeImg2.className = \"home-img\";\r\n  document.getElementById(\"home-img-wrapper\").appendChild(homeImg2);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\r\n\r\n\r\n\r\nconst buttons = document.getElementsByClassName(\"header-btn\");\r\nfor (let i = 0; i < buttons.length; i++) {\r\n  const element = buttons[i];\r\n  element.addEventListener(\"click\", () => loadContent(element.id));\r\n}\r\nfunction unloadContent() {\r\n  if (document.getElementById(\"menu-wrapper\")) {\r\n    const element = document.getElementById(\"menu-wrapper\");\r\n    element.remove();\r\n  } else if (document.getElementById(\"home-wrapper\")) {\r\n    const element = document.getElementById(\"home-wrapper\");\r\n    element.remove();\r\n  } else if (document.getElementById(\"about-wrapper\")) {\r\n    const element = document.getElementById(\"about-wrapper\");\r\n    element.remove();\r\n  }\r\n}\r\n//Draws homescreen on load.\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_2__.drawHome)();\r\n\r\nfunction loadContent(button) {\r\n  switch (button) {\r\n    case \"home\":\r\n      unloadContent();\r\n      (0,_home_js__WEBPACK_IMPORTED_MODULE_2__.drawHome)();\r\n      break;\r\n    case \"menu\":\r\n      unloadContent();\r\n      (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.drawMenu)();\r\n      break;\r\n    case \"about\":\r\n      unloadContent();\r\n      (0,_about_js__WEBPACK_IMPORTED_MODULE_3__.drawAbout)();\r\n      break;\r\n    default:\r\n      console.log(\"Error. Button ID Not Found.\");\r\n      break;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawMenu: () => (/* binding */ drawMenu)\n/* harmony export */ });\n/* harmony import */ var _prices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prices.js */ \"./src/prices.js\");\n\r\n\r\nfunction drawMenu() {\r\n  const menu = document.createElement(\"div\");\r\n  menu.id = \"menu-wrapper\";\r\n  document.getElementById(\"content\").appendChild(menu);\r\n\r\n  for (let i = 0; i < _prices_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i++) {\r\n    const element = _prices_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i];\r\n    if (!document.getElementById(element.category)) {\r\n      const menuCard = document.createElement(\"div\");\r\n      menuCard.id = element.category;\r\n      menuCard.className = \"menu-card\";\r\n      document.getElementById(\"menu-wrapper\").appendChild(menuCard);\r\n\r\n      const titleCard = document.createElement(\"div\");\r\n      titleCard.id = `${element.category}-title`;\r\n      titleCard.className = \"title-card\";\r\n      document.getElementById(element.category).appendChild(titleCard);\r\n\r\n      const title = document.createElement(\"p\");\r\n      title.id = \"title\";\r\n      title.innerText = element.category;\r\n      document.getElementById(`${element.category}-title`).appendChild(title);\r\n\r\n      createItem(element, i);\r\n    } else {\r\n      createItem(element, i);\r\n    }\r\n  }\r\n  function createItem(element, i) {\r\n    const item = document.createElement(\"div\");\r\n    item.id = `item${i}`;\r\n    item.className = \"item\";\r\n    document.getElementById(element.category).appendChild(item);\r\n\r\n    const itemWrapper = document.createElement(\"div\");\r\n    itemWrapper.id = `item-wrapper${i}`;\r\n    itemWrapper.className = \"item-wrapper\";\r\n    document.getElementById(`item${i}`).appendChild(itemWrapper);\r\n\r\n    const itemName = document.createElement(\"p\");\r\n    itemName.className = \"item-name\";\r\n    itemName.innerText = element.name;\r\n    document.getElementById(`item-wrapper${i}`).appendChild(itemName);\r\n\r\n    const itemIngredients = document.createElement(\"p\");\r\n    itemIngredients.className = \"item-ingredients\";\r\n    itemIngredients.innerText = element.ingredients;\r\n    document.getElementById(`item-wrapper${i}`).appendChild(itemIngredients);\r\n\r\n    const itemCost = document.createElement(\"p\");\r\n    itemCost.className = \"item-cost\";\r\n    itemCost.innerText = `${element.price} kr`;\r\n    document.getElementById(`item${i}`).appendChild(itemCost);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/prices.js":
/*!***********************!*\
  !*** ./src/prices.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\r\n  {\r\n    name: \"Margarita\",\r\n    price: 90,\r\n    ingredients: \"cheese, tomato sauce\",\r\n    category: \"Priceclass 1\",\r\n  },\r\n  {\r\n    name: \"Al Tonno\",\r\n    price: 95,\r\n    ingredients: \"tuna, onion\",\r\n    category: \"Priceclass 1\",\r\n  },\r\n  {\r\n    name: \"Al Funghi\",\r\n    price: 95,\r\n    ingredients: \"mushrooms\",\r\n    category: \"Priceclass 1\",\r\n  },\r\n  {\r\n    name: \"Bologna\",\r\n    price: 95,\r\n    ingredients: \"ground beef\",\r\n    category: \"Priceclass 1\",\r\n  },\r\n  {\r\n    name: \"Calzone\",\r\n    price: 90,\r\n    ingredients: \"ham\",\r\n    category: \"Priceclass 1\",\r\n  },\r\n  {\r\n    name: \"Vesuvio\",\r\n    price: 95,\r\n    ingredients: \"ham\",\r\n    category: \"Priceclass 1\",\r\n  },\r\n  {\r\n    name: \"Bussola\",\r\n    price: 100,\r\n    ingredients: \"ham, shrimp\",\r\n    category: \"Priceclass 1\",\r\n  },\r\n  {\r\n    name: \"Hawaii\",\r\n    price: 95,\r\n    ingredients: \"pineapple, ham\",\r\n    category: \"Priceclass 1\",\r\n  },\r\n  {\r\n    name: \"Capricciosa\",\r\n    price: 95,\r\n    ingredients: \"ham, mushrooms\",\r\n    category: \"Priceclass 1\",\r\n  },\r\n  {\r\n    name: \"Balanzone\",\r\n    price: 100,\r\n    ingredients: \"bacon, onion, red pepper\",\r\n    category: \"Priceclass 1\",\r\n  },\r\n  {\r\n    name: \"Romana\",\r\n    price: 120,\r\n    ingredients: \"ham, muchrooms, shrimp\",\r\n    category: \"Priceclass 2\",\r\n  },\r\n  {\r\n    name: \"Quattro\",\r\n    price: 125,\r\n    ingredients: \"ham, shrimp, mushrooms, olives\",\r\n    category: \"Priceclass 2\",\r\n  },\r\n  {\r\n    name: \"Pepperoni\",\r\n    price: 120,\r\n    ingredients: \"pepperoni, mozarella, tomatos\",\r\n    category: \"Priceclass 2\",\r\n  },\r\n  {\r\n    name: \"Milan\",\r\n    price: 130,\r\n    ingredients: \"salami, bacon, red peppers\",\r\n    category: \"Priceclass 2\",\r\n  },\r\n  {\r\n    name: \"Chicken Pizza\",\r\n    price: 120,\r\n    ingredients: \"chicken, curry\",\r\n    category: \"Priceclass 2\",\r\n  },\r\n  {\r\n    name: \"Kebabpizza\",\r\n    price: 130,\r\n    ingredients: \"kebab, onion, fefferoni\",\r\n    category: \"Priceclass 2\",\r\n  },\r\n  {\r\n    name: \"Kebabpizza 2\",\r\n    price: 130,\r\n    ingredients: \"kebab, vegetables\",\r\n    category: \"Priceclass 2\",\r\n  },\r\n  {\r\n    name: \"kebabpizza 3\",\r\n    price: 130,\r\n    ingredients: \"kebab, fries, vegetables\",\r\n    category: \"Priceclass 2\",\r\n  },\r\n  {\r\n    name: \"Al Capone\",\r\n    price: 120,\r\n    ingredients: \"pork, mushrooms, tomato, gorgonzola\",\r\n    category: \"Priceclass 2\",\r\n  },\r\n  {\r\n    name: \"CaoCao\",\r\n    price: 120,\r\n    ingredients: \"pork, onion, red pepper, bearnaise\",\r\n    category: \"Priceclass 2\",\r\n  },\r\n  {\r\n    name: \"Leafsteak\",\r\n    price: 140,\r\n    ingredients: \"vegetables, bearnaise\",\r\n    category: \"A La Carte\",\r\n  },\r\n  {\r\n    name: \"Schnitzel\",\r\n    price: 150,\r\n    ingredients: \"vegetable, truffelsauce\",\r\n    category: \"A La Carte\",\r\n  },\r\n  {\r\n    name: \"Chickenfilet\",\r\n    price: 130,\r\n    ingredients: \"vegetables, currysauce\",\r\n    category: \"A La Carte\",\r\n  },\r\n  {\r\n    name: \"Steak with onion\",\r\n    price: 170,\r\n    ingredients: \"vegetables, red wine sauce\",\r\n    category: \"A La Carte\",\r\n  },\r\n  {\r\n    name: \"Pasta Bolognese\",\r\n    price: 120,\r\n    ingredients: \"meatsauce\",\r\n    category: \"A La Carte\",\r\n  },\r\n  {\r\n    name: \"Pasta Carbonara\",\r\n    price: 120,\r\n    ingredients: \"ham, red pepper, onion\",\r\n    category: \"A La Carte\",\r\n  },\r\n  {\r\n    name: \"Kebab Wrap\",\r\n    price: 100,\r\n    ingredients: \"kebab, vegetables\",\r\n    category: \"A La Carte\",\r\n  },\r\n  {\r\n    name: \"Cicken Salad\",\r\n    price: 120,\r\n    ingredients: \"chicken, vegetables, egg\",\r\n    category: \"A La Carte\",\r\n  },\r\n  {\r\n    name: \"Hamburger 90g\",\r\n    price: 100,\r\n    ingredients: \"fries\",\r\n    category: \"A La Carte\",\r\n  },\r\n  {\r\n    name: \"Hamburger 150g\",\r\n    price: 120,\r\n    ingredients: \"fries\",\r\n    category: \"A La Carte\",\r\n  },\r\n]);\r\n\n\n//# sourceURL=webpack://restaurant/./src/prices.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;