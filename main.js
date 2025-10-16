/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* General reset */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: \"Segoe UI\", sans-serif;\n}\n\nbody {\n    background: linear-gradient(135deg, #fdfbfb, #ebedee);\n    color: #333;\n}\n\n/* Layout */\n.container {\n    display: flex;\n    height: 100vh;\n}\n\n/* Sidebar */\n.navigation-bar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 260px;\n    background: #ffffff;\n    border-right: 1px solid #e2e6ec;\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);\n}\n\n/* User Info */\n.top-bar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 30px;\n}\n\n.user-info {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.user-info i {\n    font-size: 22px;\n    color: #4e73df;\n}\n\n.user-name {\n    font-weight: 600;\n    font-size: 16px;\n    color: #2f3640;\n}\n\n/* Navigation Items */\n.nav-items ul {\n    list-style: none;\n}\n\n.nav-items li, .task-list button, .project-list > button {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 12px 14px;\n    border-radius: 10px;\n    cursor: pointer;\n    color: #444;\n    font-size: 15px;\n    transition: background 0.3s, color 0.3s, transform 0.2s;\n}\n\n.nav-items li i, .task-list button i, .project-list button i {\n    font-size: 16px;\n    color: #4e73df;\n    transition: color 0.3s;\n}\n\n.nav-items li:hover, .task-list button:hover, .project-list button:hover {\n    color: #4e73df;\n    font-size: 16px;\n    transform: translateX(3px);\n}\n\n/* Project Section */\n.project-list {\n    margin-top: 40px;\n}\n\n.project-list h3 {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    font-size: 14px;\n    color: #777;\n    font-weight: 600;\n    margin-bottom: 15px;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n}\n\n.project-list i {\n    color: #f6c23e;\n}\n\n.project-list ul {\n    list-style: none;\n}\n\n.project-list ul li {\n    padding: 8px 10px;\n    border-radius: 6px;\n    cursor: pointer;\n    font-size: 14px;\n    color: #333;\n    transition: background 0.3s, color 0.3s;\n}\n\n.project-list ul li:hover {\n    background: #f1f4ff;\n    color: #4e73df;\n}\n\n.project-list ul li.active {\n    background: #e8ecff;\n    font-weight: 600;\n    color: #4e73df;\n}\n\n.project-list button{\n    border: none;\n    background: none;\n}\n\n/* Project Form */\n.project-form {\n    display: none;\n    flex-direction: column;\n    gap: 10px;\n    margin-top: 12px;\n    padding: 12px;\n    background: #f8f9fc;\n    border: 1px solid #ddd;\n    border-radius: 8px;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);\n}\n\n.project-form input {\n    padding: 8px;\n    border-radius: 6px;\n    border: 1px solid #ccc;\n    outline: none;\n    font-size: 14px;\n    background: #fff;\n    color: #333;\n}\n\n.project-form input:focus {\n    border-color: #4e73df;\n    box-shadow: 0 0 0 2px rgba(78, 115, 223, 0.2);\n}\n\n.project-form-buttons {\n    display: flex;\n    justify-content: space-between;\n    gap: 10px;\n}\n\n#cancelProjectBtn, #saveProjectBtn {\n    flex: 1;\n    padding: 8px 0;\n    border: none;\n    border-radius: 6px;\n    font-weight: bold;\n    cursor: pointer;\n    font-size: 14px;\n}\n\n#cancelProjectBtn {\n    background: #666;\n    color: #fff;\n}\n\n#cancelProjectBtn:hover {\n    background: #555;\n}\n\n#saveProjectBtn {\n    background: #4e73df;\n    color: #fff;\n}\n\n#saveProjectBtn:hover {\n    background: #3b5fd1;\n}\n\n/* Main content */\n.main {\n    flex: 1;\n    padding: 40px;\n    background: #f9fafc;\n    position: relative;\n    overflow-y: auto; \n    height: 100vh;   \n    margin-left: 260px; \n}\n\n.main h2 {\n    font-size: 24px;\n    font-weight: 600;\n    color: #2f3640;\n    margin-bottom: 20px;\n}\n\n.today-view {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 12px;\n}\n\n.today-view h3 {\n    font-size: 20px;\n    font-weight: 600;\n    color: #2f3640;\n}\n\n.today-view p {\n    font-size: 16px;\n    color: #666;\n}\n\n/* Add Task Button */\n.today-view button {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    background: linear-gradient(135deg, #4e9af1, #4e73df);\n    padding: 9px 30px;\n    border: none;\n    border-radius: 8px;\n    box-shadow: 0px 4px 12px rgba(78, 115, 223, 0.25);\n    cursor: pointer;\n    transition: all 0.3s ease;\n    color: #fff;\n    font-weight: 600;\n    font-size: 15px;\n}\n\n.today-view button i {\n    font-size: 16px;\n}\n\n.today-view button:hover {\n    background: linear-gradient(135deg, #5aa5ff, #516bdf);\n    transform: scale(1);\n    box-shadow: 0px 6px 15px rgba(78, 115, 223, 0.35);\n}\n\n/* Form style */\n#taskForm {\n    display: none;\n    margin-top: 20px;\n    padding: 10px;\n    border: 1px solid #ccc;\n    background: #f9f9f9;\n    border-radius: 8px;\n    color: #2d2d2d;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);\n}\n\n/* Input fields */\n#taskForm input[type=\"text\"] {\n    width: 100%;\n    padding: 8px;\n    margin: 6px 0;\n    border: none;\n    border-radius: 6px;\n    outline: none;\n    background: #fff;\n    color: #3a3a3a;\n}\n\n/* Due date + priority below */\n.task-info {\n    display: flex;\n    gap: 10px;\n    margin-bottom: 15px;\n}\n\n.task-info input,\n.task-info select {\n    flex: 1;\n    padding: 10px;\n    border: 1px solid #ddd;\n    border-radius: 6px;\n    outline: none;\n    background: #fff;\n    color: #333;\n    font-size: 14px;\n}\n\n/* Form buttons */\n.form-buttons {\n    margin-top: 15px;\n    display: flex;\n    gap: 10px;\n}\n\n#taskForm button {\n    padding: 10px 20px;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    font-weight: bold;\n}\n\n#cancelBtn {\n    background: #444;\n    color: #fff;\n}\n\n#cancelBtn:hover {\n    background: #666;\n}\n\n.submitBtn {\n    background: #516bdf;\n    color: #fff;\n}\n\n.submitBtn:hover {\n    background: #516bdf;\n}\n\n.submitBtn:disabled , #saveProjectBtn:disabled {\n    opacity: 0.6;\n    cursor: not-allowed;\n    pointer-events: none;\n}\n\n.task-list{\n    display: none;\n}\n\n.task-list ul {\n    list-style: none;\n    padding: 0;\n}\n\n.task-item {\n    border-bottom: 1px solid #ddd;\n    padding: 12px;\n    margin-bottom: 10px;\n    position: relative;\n    padding-left: 14px;\n    border-left: 6px solid transparent;\n    border-radius: 6px;\n    background: #fff;\n    transition: background 0.3s, box-shadow 0.3s;\n}\n\n.task-item.high {\n    border-left-color: #e74c3c; \n}\n\n.task-item.medium {\n    border-left-color: #f39c12; \n}\n\n.task-item.low {\n    border-left-color: #f1c40f; \n}\n\n.task-item strong {\n    font-size: 16px;\n    color: #2f3640;\n}\n\n.task-item p {\n    margin: 5px 0;\n    color: #555;\n}\n\n.task-item small {\n    color: #777;\n    font-size: 12px;\n}\n\n.task-actions{\n    top: 10px;\n    right: 10px;\n    display: flex;\n    gap: 10px;\n}\n\n.task-actions i {\n    cursor: pointer;\n    color: #666;\n    font-size: 16px;\n    transition: color 0.3s;\n}\n\n.task-actions i:hover {\n    color: #4e73df;\n}\n\n.task-item.completed .task-content {\n    opacity: 0.6;\n    text-decoration: line-through;\n}\n\n.task-list li{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.task-list button{\n    display: none;\n    border: none;\n    background: none;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("{function createTodo(title, description, dueDate, priority) {\n    return {\n        title,\n        description,\n        dueDate,\n        priority,\n        completed: false, //default\n        toggleComplete() {\n            this.completed = !this.completed;\n        }\n    };\n}\n\nfunction createProject(title) {\n    return {\n        title: title,\n        todos: [],\n\n        addTodo(todo) {\n            this.todos.push(todo);\n        },\n        removeTodo(index) {\n            this.todos.splice(index, 1);\n        }\n    };\n}\n\nfunction createProjectManager() {\n    return {\n        projects: [],\n        addProject(project) {\n            this.projects.push(project);\n        },\n        removeProject(index) {\n            this.projects.splice(index, 1);\n        },\n        getProject(title) {\n            return this.projects.find(project => project.title === title);\n        }\n    };\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const addTaskBtns = document.querySelectorAll(\".show-form-btn\");\n    const todayView = document.querySelector(\".today-view\");\n    const taskForm = document.getElementById(\"taskForm\");\n    const cancelBtn = document.getElementById(\"cancelBtn\");\n    const taskListContainer = document.querySelector(\".task-list ul\");\n    const taskListBtn = document.querySelector(\".task-list button\");\n    const submitBtn = document.querySelector(\".submitBtn\");\n    const projectList = document.querySelector(\".project-list ul\");\n    const addProjectBtn = document.querySelector(\".project-list button\");\n    const projectForm = document.querySelector(\".project-form\");\n    const projectNameInput = document.querySelector(\".project-form input\");\n    const cancelProjectBtn = document.querySelector(\"#cancelProjectBtn\");\n    const saveProjectBtn = document.querySelector(\"#saveProjectBtn\");\n    const heading = document.querySelector(\".main h2\");\n\n    // Create project manager and default \"Today\" project\n    const projectManager = createProjectManager();\n\n    // Check if \"Today\" exists before creating it \n    let todayProject = projectManager.getProject(\"Today\");\n    if (!todayProject) {\n        todayProject = createProject(\"Today\");\n        projectManager.addProject(todayProject);\n    }\n\n    // Track the currently active project\n    let activeProject = todayProject;\n\n    //Function to handle form closing \n    function closeForm() {\n        taskForm.reset();\n        taskForm.style.display = \"none\";\n    }\n\n    //Function to render tasks for selected project\n    function renderTasks(project) {\n        taskListContainer.innerHTML = \"\"; // Clear existing tasks\n        if (!project) return;\n\n        project.todos.forEach((todo, todoIndex) => {\n            const li = document.createElement(\"li\");\n            li.classList.add(\"task-item\", todo.priority);\n            if (todo.completed) li.classList.add(\"completed\");\n\n            li.innerHTML = `\n            <div class=\"task-content\">\n                <strong>${todo.title}</strong>\n                <p>${todo.description}</p>\n                <small>Due: ${todo.dueDate || \"No date\"} | Priority: ${todo.priority}</small>\n            </div>\n            <div class=\"task-actions\">\n                <i class='fa fa-check' title=\"Mark Complete\"></i>\n                <i class='fa fa-edit' title=\"Edit Task\"></i>\n                <i class='fa fa-trash' title=\"Delete Task\"></i>\n            </div>\n            `;\n\n            //Functionality for task completion\n            li.querySelector(\".fa-check\").addEventListener(\"click\", () => {\n                todo.toggleComplete();\n                renderTasks(project);\n            })\n\n            //Functionality for deleting tasks\n            li.querySelector(\".fa-trash\").addEventListener(\"click\", () => {\n                project.removeTodo(todoIndex);\n                renderTasks(project);\n            })\n\n            taskListContainer.appendChild(li);\n        });\n    }\n\n    // Function to handle project switching logic\n    function switchProject(projectName) {\n        const selectedProject = projectManager.getProject(projectName);\n        if (!selectedProject) return;\n\n        // Update heading\n        heading.textContent = selectedProject.title;\n        activeProject = selectedProject;\n\n        // Update active class in sidebar\n        document.querySelectorAll(\".project-item\").forEach(item => item.classList.remove(\"active\"));\n        const newActiveItem = Array.from(projectList.children).find(item => item.dataset.title === projectName);\n        if (newActiveItem) {\n            newActiveItem.classList.add(\"active\");\n        }\n\n        closeForm(); // Close the task form when switching projects\n\n        if (projectName === \"Today\" && todayProject.todos.length === 0) {\n            todayView.style.display = \"flex\";\n            taskListBtn.style.display = \"none\"; \n            document.querySelector(\".task-list\").style.display = \"none\";\n        } else {\n            todayView.style.display = \"none\";\n            document.querySelector(\".task-list\").style.display = \"block\"; \n            taskListBtn.style.display = \"flex\"; \n        }\n        \n        renderTasks(selectedProject);\n    }\n\n    // Function to handle project switching (event listener delegate)\n    function handleProjectSwitch(e) {\n        const li = e.target.closest('.project-item');\n        if (!li) return; // Click wasn't on a project item      \n\n        // Handle project deletion\n        if (e.target.classList.contains('fa-trash')) {\n            const projectTitle = li.dataset.title;\n            const projectIndex = projectManager.projects.findIndex(project => project.title === projectTitle);\n\n            if (projectIndex !== -1) {\n                projectManager.removeProject(projectIndex);\n                renderProjects();\n\n                //If deleted project was active\n                if (activeProject.title === projectTitle) {\n                    if (projectManager.getProject(\"Today\")) {\n                        switchProject(\"Today\");\n                    } else if (projectManager.projects.length === 0) {\n                        taskListContainer.innerHTML = \"\";\n                        taskListBtn.style.display = \"none\";\n                        heading.textContent = \"Today\";\n                        todayView.style.display = \"flex\";\n                    } else {\n                        switchProject(projectManager.projects[0].title);\n                    }\n                }\n            }\n            return;\n        }\n        // Handle regular project switch (click on the li/span)\n        switchProject(li.dataset.title);\n    }\n\n    //Function to render projects\n    function renderProjects() {\n        projectList.innerHTML = \"\";  // Clear existing projects\n\n        projectManager.projects.forEach(project => {\n            const li = document.createElement(\"li\");\n            li.classList.add(\"project-item\");\n            li.dataset.title = project.title; // Use data attribute for title\n\n            // Set active class if it's the current active project\n            if (project.title === activeProject.title) {\n                li.classList.add(\"active\");\n            }\n\n            li.innerHTML = `\n            <span>${project.title}</span>\n            <i class='fa fa-trash' title=\"Delete Project\"></i>\n            `;\n\n            projectList.appendChild(li);\n        });\n    }\n\n    // --- EVENT LISTENERS ---\n\n    // Show form on \"Add Task\" click\n    addTaskBtns.forEach(btn => {\n        btn.addEventListener(\"click\", () => {\n            todayView.style.display = \"none\";     // hide welcome view\n            document.querySelector(\".task-list\").style.display = \"block\"; // show task list section\n            taskListBtn.style.display = \"none\";\n            taskForm.style.display = \"block\";     // show form\n\n            // Ensure the submit button is correctly disabled/enabled based on current input\n            const title = taskForm.querySelector(\".task-title\").value.trim();\n            submitBtn.disabled = !title;\n        });\n    });\n\n    // Hide form on \"Cancel\" click\n    cancelBtn.addEventListener(\"click\", () => {\n        closeForm();\n        switchProject(activeProject.title); \n    });\n\n    // Enable/disable submit button based on title input\n    taskForm.addEventListener(\"input\", () => {\n        const title = taskForm.querySelector(\".task-title\").value.trim();\n        submitBtn.disabled = !title;\n    });\n\n    // Handle task form submission\n    taskForm.addEventListener(\"submit\", (e) => {\n        e.preventDefault();\n\n        const title = taskForm.querySelector(\".task-title\").value.trim();\n        const description = taskForm.querySelector(\".task-description\").value.trim();\n        const dueDate = taskForm.querySelector(\".task-date\").value;\n        const priority = taskForm.querySelector(\".task-priority\").value;\n\n        if (!title) return; // safeguard\n\n        // Use the currently active project\n        const newTodo = createTodo(title, description, dueDate, priority);\n        activeProject.addTodo(newTodo);\n\n        renderTasks(activeProject);\n\n        // Clear inputs and disable button, but keep form open\n        taskForm.reset();\n        submitBtn.disabled = true;\n    });\n\n    //Handle project switching/deletion\n    projectList.addEventListener(\"click\", handleProjectSwitch);\n\n    //Function to open project creation form\n    addProjectBtn.addEventListener(\"click\", () => {\n        addProjectBtn.style.display = \"none\";\n        projectForm.style.display = \"flex\";\n        projectNameInput.focus();\n        saveProjectBtn.disabled = true; // Disable on opening\n    });\n\n    //Function to cancel project creation\n    function cancelProjectCreation() {\n        projectForm.reset();\n        projectForm.style.display = \"none\";\n        addProjectBtn.style.display = \"block\";\n    }\n\n    //Cancel project creation\n    cancelProjectBtn.addEventListener(\"click\", cancelProjectCreation);\n\n    // Enable/disable save button based on project title input\n    projectForm.addEventListener(\"input\", () => {\n        const title = projectNameInput.value.trim();\n        saveProjectBtn.disabled = !title;\n    });\n\n    //Handle project form submission\n    projectForm.addEventListener(\"submit\", (e) => {\n        e.preventDefault();\n\n        const projectName = projectNameInput.value.trim();\n        if (!projectName) return;\n\n        const newProject = createProject(projectName);\n        projectManager.addProject(newProject);\n\n        // Re-render all projects, switch to the new one, and update the view\n        activeProject = newProject;\n        renderProjects();\n        switchProject(projectName);\n\n        cancelProjectCreation();\n    })\n\n    // Render initial project list and tasks\n    renderProjects();\n    switchProject(\"Today\"); // Ensure \"Today\" is active and its tasks are shown\n});\n\n//# sourceURL=webpack://todo-list/./src/app.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n(0,_app_js__WEBPACK_IMPORTED_MODULE_1__.app)();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?\n}");

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