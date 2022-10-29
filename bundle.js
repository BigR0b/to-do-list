/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --grey: #58565665;\n  --light-grey: #d1ccccfa;\n}\nbody {\n  margin: 0;\n  padding: 0;\n}\n#container {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 8fr;\n  grid-template-columns: 1fr 4fr;\n  text-align: center;\n}\nnav {\n  background: aquamarine;\n  grid-column: span 2;\n}\n#project {\n  background: antiquewhite;\n  min-width: 250px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-right: 2px solid var(--light-grey);\n}\n#todo {\n  background: coral;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#todo-list-form {\n  padding: 5px;\n  margin-left: 20px;\n  display: flex;\n  flex-direction: column;\n  border: 2px solid var(--grey);\n  background-color: var(--light-grey);\n  border-radius: 10px;\n  justify-content: space-around;\n  align-items: center;\n  height: 250px;\n  width: 250px;\n}\n#new-project {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 5px;\n}\n#new-project > input {\n  width: 120px;\n  border: none;\n  background: antiquewhite;\n}\n#new-project > button {\n  border: none;\n  width: 100px;\n  height: 20px;\n  padding-left: 10px;\n}\n#projects-list > div {\n  border-bottom: 2px solid var(--light-grey);\n  padding-bottom: 5px;\n  margin-top: 15px;\n}\n\n#projects-list > div:hover {\n  box-shadow: 0px 7px 5px -3px var(--grey);\n  cursor: pointer;\n}\n\n.hidden {\n  display: none;\n}\n\n.todos {\n  display: flex;\n  justify-content: space-between;\n  min-width: 600px;\n  border: 1px solid black;\n  padding: 10px;\n  margin-bottom: 5px;\n  border-radius: 1rem;\n}\n.todos > div:first-child {\n  width: 300px;\n}\n.todos > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 5px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,uBAAuB;AACzB;AACA;EACE,SAAS;EACT,UAAU;AACZ;AACA;EACE,aAAa;EACb,aAAa;EACb,2BAA2B;EAC3B,8BAA8B;EAC9B,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,yCAAyC;AAC3C;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mCAAmC;EACnC,mBAAmB;EACnB,6BAA6B;EAC7B,mBAAmB;EACnB,aAAa;EACb,YAAY;AACd;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,QAAQ;AACV;AACA;EACE,YAAY;EACZ,YAAY;EACZ,wBAAwB;AAC1B;AACA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,0CAA0C;EAC1C,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,wCAAwC;EACxC,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,gBAAgB;EAChB,uBAAuB;EACvB,aAAa;EACb,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb","sourcesContent":[":root {\n  --grey: #58565665;\n  --light-grey: #d1ccccfa;\n}\nbody {\n  margin: 0;\n  padding: 0;\n}\n#container {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 8fr;\n  grid-template-columns: 1fr 4fr;\n  text-align: center;\n}\nnav {\n  background: aquamarine;\n  grid-column: span 2;\n}\n#project {\n  background: antiquewhite;\n  min-width: 250px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-right: 2px solid var(--light-grey);\n}\n#todo {\n  background: coral;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#todo-list-form {\n  padding: 5px;\n  margin-left: 20px;\n  display: flex;\n  flex-direction: column;\n  border: 2px solid var(--grey);\n  background-color: var(--light-grey);\n  border-radius: 10px;\n  justify-content: space-around;\n  align-items: center;\n  height: 250px;\n  width: 250px;\n}\n#new-project {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 5px;\n}\n#new-project > input {\n  width: 120px;\n  border: none;\n  background: antiquewhite;\n}\n#new-project > button {\n  border: none;\n  width: 100px;\n  height: 20px;\n  padding-left: 10px;\n}\n#projects-list > div {\n  border-bottom: 2px solid var(--light-grey);\n  padding-bottom: 5px;\n  margin-top: 15px;\n}\n\n#projects-list > div:hover {\n  box-shadow: 0px 7px 5px -3px var(--grey);\n  cursor: pointer;\n}\n\n.hidden {\n  display: none;\n}\n\n.todos {\n  display: flex;\n  justify-content: space-between;\n  min-width: 600px;\n  border: 1px solid black;\n  padding: 10px;\n  margin-bottom: 5px;\n  border-radius: 1rem;\n}\n.todos > div:first-child {\n  width: 300px;\n}\n.todos > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 5px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/projectSection.js":
/*!*******************************!*\
  !*** ./src/projectSection.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToProjectUI": () => (/* binding */ addToProjectUI),
/* harmony export */   "selectedProject": () => (/* binding */ selectedProject),
/* harmony export */   "selectedProjectIndex": () => (/* binding */ selectedProjectIndex)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _todoSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoSection */ "./src/todoSection.js");


let index = 0;

const projectsList = document.querySelector('#projects-list');

const removeButtons = () => {
  while (projectsList.firstChild) {
    projectsList.removeChild(projectsList.firstChild);
  }
  index = 0;
};

const addProjectBtns = projects => {
  projects.forEach(project => {
    const projectBtns = document.createElement('div');
    projectBtns.classList.add('project-buttons');
    projectBtns.setAttribute('data-index', index);
    const projectItem = document.createElement('button');
    projectItem.classList.add('select-project');
    projectItem.textContent = project.name;
    const removeProjectBtn = document.createElement('button');
    removeProjectBtn.classList.add('remove-project');
    removeProjectBtn.textContent = 'X';
    projectBtns.appendChild(projectItem);
    projectBtns.appendChild(removeProjectBtn);
    projectsList.appendChild(projectBtns);
    index++;
  });
};

const removeProjectItem = () => {
  const removeBtns = document.querySelectorAll('.remove-project');
  removeBtns.forEach(removeBtn => {
    removeBtn.addEventListener('click', function () {
      (0,_todo__WEBPACK_IMPORTED_MODULE_0__.removeProject)(removeBtn.parentElement.getAttribute('data-index'));
      addToProjectUI(_todo__WEBPACK_IMPORTED_MODULE_0__.projectList);
    });
  });
};

let selectedProjectIndex = 0;
let selectedProject;
const selectProject = () => {
  const selectBtns = document.querySelectorAll('.select-project');
  selectBtns.forEach(selectBtn => {
    selectBtn.addEventListener('click', function () {
      selectedProjectIndex = selectBtn.parentElement.getAttribute('data-index');
      selectedProject = _todo__WEBPACK_IMPORTED_MODULE_0__.projectList[selectedProjectIndex];
      (0,_todoSection__WEBPACK_IMPORTED_MODULE_1__.deleteTodoList)();
      (0,_todoSection__WEBPACK_IMPORTED_MODULE_1__.createTodo)(selectedProject.todo);
      (0,_todoSection__WEBPACK_IMPORTED_MODULE_1__.createTitle)();
    });
  });
};

const addToProjectUI = projects => {
  removeButtons();
  addProjectBtns(projects);
  removeProjectItem();
  selectProject();
};



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addToList": () => (/* binding */ addToList),
/* harmony export */   "addToStorage": () => (/* binding */ addToStorage),
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "removeFromList": () => (/* binding */ removeFromList),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "todo": () => (/* binding */ todo)
/* harmony export */ });


if (localStorage.getItem('projectList') == null) {
  localStorage.setItem('projectList', '[]');
}
const projectList = JSON.parse(localStorage.getItem('projectList'));
const project = name => {
  name = name;
  const todo = [];
  return { name, todo };
};

const addToStorage = () => {
  localStorage.setItem('projectList', JSON.stringify(projectList));
};

const addProject = project => {
  projectList.push(project);
  addToStorage();
};
const removeProject = index => {
  projectList.splice(index, 1);
  addToStorage();
};

const todo = (description, dueDate, priority) => {
  description = description;
  dueDate = dueDate;
  priority = priority;
  return { description, dueDate, priority };
};

const addToList = (todo, todoList) => {
  todoList.push(todo);
  addToStorage();
};
const removeFromList = (index, todoList) => {
  todoList.splice(index, 1);
  addToStorage();
};




/***/ }),

/***/ "./src/todoSection.js":
/*!****************************!*\
  !*** ./src/todoSection.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addFormBtn": () => (/* binding */ addFormBtn),
/* harmony export */   "createFrom": () => (/* binding */ createFrom),
/* harmony export */   "createTitle": () => (/* binding */ createTitle),
/* harmony export */   "createTodo": () => (/* binding */ createTodo),
/* harmony export */   "deleteTodoList": () => (/* binding */ deleteTodoList),
/* harmony export */   "removeFormBtn": () => (/* binding */ removeFormBtn),
/* harmony export */   "todoFolder": () => (/* binding */ todoFolder)
/* harmony export */ });
/* harmony import */ var _projectSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectSection */ "./src/projectSection.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");



const todoFolder = document.querySelector('#todo');

const createFrom = () => {
  const todoForm = document.createElement('form');
  todoForm.setAttribute('id', 'todo-list-form');

  const formExit = document.createElement('button');
  formExit.setAttribute('type', 'button');
  formExit.setAttribute('id', 'exit-form');
  formExit.textContent = 'X';
  todoForm.appendChild(formExit);
  todoFolder.appendChild(todoForm);
  formExit.addEventListener('click', function () {
    removeForm();
    addFormBtn();
  });

  //form text input
  const formText = document.createElement('div');
  const textLabel = document.createElement('label');
  textLabel.setAttribute('for', 'description');
  textLabel.textContent = 'Description';
  const textInput = document.createElement('input');
  textInput.setAttribute('type', 'text');
  textInput.setAttribute('id', 'description');
  textInput.required = true;
  formText.appendChild(textLabel);
  formText.appendChild(textInput);
  todoForm.appendChild(formText);

  //form date input
  const formDate = document.createElement('div');
  const dateLabel = document.createElement('label');
  dateLabel.setAttribute('for', 'date');
  dateLabel.textContent = 'Date';
  const dateInput = document.createElement('input');
  dateInput.setAttribute('type', 'date');
  dateInput.setAttribute('id', 'date');
  formDate.appendChild(dateLabel);
  formDate.appendChild(dateInput);
  todoForm.appendChild(formDate);

  //form select input
  const formSelect = document.createElement('div');
  const selectLabel = document.createElement('label');
  selectLabel.setAttribute('for', 'priority');
  selectLabel.textContent = 'Priority';
  const selectInput = document.createElement('select');
  selectInput.setAttribute('id', 'priority');
  const lowPriority = document.createElement('option');
  lowPriority.setAttribute('value', 'low');
  lowPriority.textContent = 'Low';
  const midPriority = document.createElement('option');
  midPriority.setAttribute('value', 'medium');
  midPriority.textContent = 'Medium';
  const highPriority = document.createElement('option');
  highPriority.setAttribute('value', 'high');
  highPriority.textContent = 'High';
  selectInput.appendChild(lowPriority);
  selectInput.appendChild(midPriority);
  selectInput.appendChild(highPriority);
  formSelect.appendChild(selectLabel);
  formSelect.appendChild(selectInput);
  todoForm.appendChild(formSelect);

  //form submit button
  const formSubmit = document.createElement('button');
  formSubmit.setAttribute('type', 'submit');
  formSubmit.textContent = 'Select';
  todoForm.appendChild(formSubmit);
  todoFolder.appendChild(todoForm);
  todoForm.addEventListener('submit', function (e) {
    const isFormValid = todoForm.checkValidity();
    if (isFormValid) {
      e.preventDefault();
      removeForm();
      let task = textInput.value;
      let date = dateInput.value;
      let priority = selectInput.value;
      let newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.todo)(task, date, priority);
      (0,_todo__WEBPACK_IMPORTED_MODULE_1__.addToList)(newTodo, _todo__WEBPACK_IMPORTED_MODULE_1__.projectList[_projectSection__WEBPACK_IMPORTED_MODULE_0__.selectedProjectIndex].todo);
      createTodo(_projectSection__WEBPACK_IMPORTED_MODULE_0__.selectedProject.todo);
      addFormBtn();
    }
  });
};

//todo list
let index = 0;
const todoList = document.querySelector('#todo-list');

const deleteTodoList = () => {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
  index = 0;
};

const createTodo = project => {
  deleteTodoList();
  const allTodos = document.querySelectorAll('.todos');
  if (allTodos.length > 0) {
    index = allTodos.length;
  }
  project.forEach(todo => {
    const todos = document.createElement('div');
    todos.setAttribute('data-index', index);
    todos.classList.add('todos');

    const todoText = document.createElement('div');
    todoText.textContent = todo.description;
    todos.appendChild(todoText);

    const todoDate = document.createElement('div');
    todoDate.textContent = todo.dueDate;
    todos.appendChild(todoDate);

    const todoPriority = document.createElement('div');
    todoPriority.textContent = todo.priority;
    todos.appendChild(todoPriority);

    const deleteTodoBtn = document.createElement('button');
    deleteTodoBtn.textContent = 'Delete';
    deleteTodoBtn.classList.add('delete-todo');
    todos.appendChild(deleteTodoBtn);

    todoList.appendChild(todos);
    index++;
  });
  deleteTodoItem();
};

const removeTodo = index => {
  _projectSection__WEBPACK_IMPORTED_MODULE_0__.selectedProject.todo.splice(index, 1);
};

const deleteTodoItem = () => {
  const deleteTodoBtns = document.querySelectorAll('.delete-todo');
  deleteTodoBtns.forEach(deleteTodoBtn => {
    deleteTodoBtn.addEventListener('click', function () {
      removeTodo(deleteTodoBtn.parentElement.getAttribute('data-index'));
      createTodo(_projectSection__WEBPACK_IMPORTED_MODULE_0__.selectedProject.todo);
    });
  });
};

const addFormBtn = () => {
  const createFormBtn = document.createElement('button');
  createFormBtn.setAttribute('type', 'button');
  createFormBtn.setAttribute('id', 'create-form');
  createFormBtn.textContent = 'Add Todo';
  todoFolder.appendChild(createFormBtn);
  createFormBtn.addEventListener('click', function () {
    createFrom();
    removeFormBtn();
  });
};

const removeFormBtn = () => {
  const formBtn = document.querySelector('#create-form');
  todoFolder.removeChild(formBtn);
};
const removeForm = () => {
  const todoFormModal = document.querySelector('#todo-list-form');
  todoFolder.removeChild(todoFormModal);
};

//Todo Title
const todoTitle = document.querySelector('#title');
const createTitle = () => {
  todoTitle.textContent = _projectSection__WEBPACK_IMPORTED_MODULE_0__.selectedProject.name;
};




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _todoSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoSection */ "./src/todoSection.js");
/* harmony import */ var _projectSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectSection */ "./src/projectSection.js");






const newProjectBtn = document.querySelector('#projectBtn');
newProjectBtn.addEventListener('click', function (e) {
  const isFormValid = document.querySelector('#new-project').checkValidity();
  if (isFormValid) {
    e.preventDefault();
    let projectName = document.querySelector('#project-name');
    let createProject = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.project)(projectName.value);

    (0,_todo__WEBPACK_IMPORTED_MODULE_1__.addProject)(createProject);
    (0,_projectSection__WEBPACK_IMPORTED_MODULE_3__.addToProjectUI)(_todo__WEBPACK_IMPORTED_MODULE_1__.projectList);
    projectName.value = '';
  }
});

// let defaultProject = project('Default');
// addProject(defaultProject);
(0,_projectSection__WEBPACK_IMPORTED_MODULE_3__.addToProjectUI)(_todo__WEBPACK_IMPORTED_MODULE_1__.projectList);
(0,_todoSection__WEBPACK_IMPORTED_MODULE_2__.addFormBtn)();
const firstProject = document.querySelector('.select-project');

if (firstProject) {
  firstProject.click();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9TZWN0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tZ3JleTogIzU4NTY1NjY1O1xcbiAgLS1saWdodC1ncmV5OiAjZDFjY2NjZmE7XFxufVxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuI2NvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxubmF2IHtcXG4gIGJhY2tncm91bmQ6IGFxdWFtYXJpbmU7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG4jcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kOiBhbnRpcXVld2hpdGU7XFxuICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tbGlnaHQtZ3JleSk7XFxufVxcbiN0b2RvIHtcXG4gIGJhY2tncm91bmQ6IGNvcmFsO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jdG9kby1saXN0LWZvcm0ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyZXkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIHdpZHRoOiAyNTBweDtcXG59XFxuI25ldy1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDVweDtcXG59XFxuI25ldy1wcm9qZWN0ID4gaW5wdXQge1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogYW50aXF1ZXdoaXRlO1xcbn1cXG4jbmV3LXByb2plY3QgPiBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG4jcHJvamVjdHMtbGlzdCA+IGRpdiB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbGlnaHQtZ3JleSk7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuI3Byb2plY3RzLWxpc3QgPiBkaXY6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCB2YXIoLS1ncmV5KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kb3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1pbi13aWR0aDogNjAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG4udG9kb3MgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG4udG9kb3MgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsUUFBUTtBQUNWO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWdyZXk6ICM1ODU2NTY2NTtcXG4gIC0tbGlnaHQtZ3JleTogI2QxY2NjY2ZhO1xcbn1cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbiNjb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbm5hdiB7XFxuICBiYWNrZ3JvdW5kOiBhcXVhbWFyaW5lO1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuI3Byb2plY3Qge1xcbiAgYmFja2dyb3VuZDogYW50aXF1ZXdoaXRlO1xcbiAgbWluLXdpZHRoOiAyNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyZXkpO1xcbn1cXG4jdG9kbyB7XFxuICBiYWNrZ3JvdW5kOiBjb3JhbDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3RvZG8tbGlzdC1mb3JtIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogMjUwcHg7XFxufVxcbiNuZXctcHJvamVjdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiA1cHg7XFxufVxcbiNuZXctcHJvamVjdCA+IGlucHV0IHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IGFudGlxdWV3aGl0ZTtcXG59XFxuI25ldy1wcm9qZWN0ID4gYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuI3Byb2plY3RzLWxpc3QgPiBkaXYge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbiNwcm9qZWN0cy1saXN0ID4gZGl2OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggdmFyKC0tZ3JleSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG9zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtaW4td2lkdGg6IDYwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuLnRvZG9zID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuLnRvZG9zID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0TGlzdCwgcmVtb3ZlUHJvamVjdCwgYWRkUHJvamVjdCB9IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgeyBkZWxldGVUb2RvTGlzdCwgY3JlYXRlVG9kbywgY3JlYXRlVGl0bGUgfSBmcm9tICcuL3RvZG9TZWN0aW9uJztcbmxldCBpbmRleCA9IDA7XG5cbmNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cy1saXN0Jyk7XG5cbmNvbnN0IHJlbW92ZUJ1dHRvbnMgPSAoKSA9PiB7XG4gIHdoaWxlIChwcm9qZWN0c0xpc3QuZmlyc3RDaGlsZCkge1xuICAgIHByb2plY3RzTGlzdC5yZW1vdmVDaGlsZChwcm9qZWN0c0xpc3QuZmlyc3RDaGlsZCk7XG4gIH1cbiAgaW5kZXggPSAwO1xufTtcblxuY29uc3QgYWRkUHJvamVjdEJ0bnMgPSBwcm9qZWN0cyA9PiB7XG4gIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgY29uc3QgcHJvamVjdEJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0QnRucy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ1dHRvbnMnKTtcbiAgICBwcm9qZWN0QnRucy5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XG4gICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtcHJvamVjdCcpO1xuICAgIHByb2plY3RJdGVtLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgIGNvbnN0IHJlbW92ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZW1vdmVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1wcm9qZWN0Jyk7XG4gICAgcmVtb3ZlUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICBwcm9qZWN0QnRucy5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbSk7XG4gICAgcHJvamVjdEJ0bnMuYXBwZW5kQ2hpbGQocmVtb3ZlUHJvamVjdEJ0bik7XG4gICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKHByb2plY3RCdG5zKTtcbiAgICBpbmRleCsrO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlbW92ZVByb2plY3RJdGVtID0gKCkgPT4ge1xuICBjb25zdCByZW1vdmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZS1wcm9qZWN0Jyk7XG4gIHJlbW92ZUJ0bnMuZm9yRWFjaChyZW1vdmVCdG4gPT4ge1xuICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlbW92ZVByb2plY3QocmVtb3ZlQnRuLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpO1xuICAgICAgYWRkVG9Qcm9qZWN0VUkocHJvamVjdExpc3QpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmxldCBzZWxlY3RlZFByb2plY3RJbmRleCA9IDA7XG5sZXQgc2VsZWN0ZWRQcm9qZWN0O1xuY29uc3Qgc2VsZWN0UHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3Qgc2VsZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QtcHJvamVjdCcpO1xuICBzZWxlY3RCdG5zLmZvckVhY2goc2VsZWN0QnRuID0+IHtcbiAgICBzZWxlY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxlY3RlZFByb2plY3RJbmRleCA9IHNlbGVjdEJ0bi5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xuICAgICAgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdExpc3Rbc2VsZWN0ZWRQcm9qZWN0SW5kZXhdO1xuICAgICAgZGVsZXRlVG9kb0xpc3QoKTtcbiAgICAgIGNyZWF0ZVRvZG8oc2VsZWN0ZWRQcm9qZWN0LnRvZG8pO1xuICAgICAgY3JlYXRlVGl0bGUoKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRUb1Byb2plY3RVSSA9IHByb2plY3RzID0+IHtcbiAgcmVtb3ZlQnV0dG9ucygpO1xuICBhZGRQcm9qZWN0QnRucyhwcm9qZWN0cyk7XG4gIHJlbW92ZVByb2plY3RJdGVtKCk7XG4gIHNlbGVjdFByb2plY3QoKTtcbn07XG5leHBvcnQgeyBhZGRUb1Byb2plY3RVSSwgc2VsZWN0ZWRQcm9qZWN0SW5kZXgsIHNlbGVjdGVkUHJvamVjdCB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RMaXN0JykgPT0gbnVsbCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCAnW10nKTtcbn1cbmNvbnN0IHByb2plY3RMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdExpc3QnKSk7XG5jb25zdCBwcm9qZWN0ID0gbmFtZSA9PiB7XG4gIG5hbWUgPSBuYW1lO1xuICBjb25zdCB0b2RvID0gW107XG4gIHJldHVybiB7IG5hbWUsIHRvZG8gfTtcbn07XG5cbmNvbnN0IGFkZFRvU3RvcmFnZSA9ICgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3QgPSBwcm9qZWN0ID0+IHtcbiAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgYWRkVG9TdG9yYWdlKCk7XG59O1xuY29uc3QgcmVtb3ZlUHJvamVjdCA9IGluZGV4ID0+IHtcbiAgcHJvamVjdExpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgYWRkVG9TdG9yYWdlKCk7XG59O1xuXG5jb25zdCB0b2RvID0gKGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICBkdWVEYXRlID0gZHVlRGF0ZTtcbiAgcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgcmV0dXJuIHsgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH07XG59O1xuXG5jb25zdCBhZGRUb0xpc3QgPSAodG9kbywgdG9kb0xpc3QpID0+IHtcbiAgdG9kb0xpc3QucHVzaCh0b2RvKTtcbiAgYWRkVG9TdG9yYWdlKCk7XG59O1xuY29uc3QgcmVtb3ZlRnJvbUxpc3QgPSAoaW5kZXgsIHRvZG9MaXN0KSA9PiB7XG4gIHRvZG9MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gIGFkZFRvU3RvcmFnZSgpO1xufTtcblxuZXhwb3J0IHtcbiAgdG9kbyxcbiAgcHJvamVjdCxcbiAgcHJvamVjdExpc3QsXG4gIGFkZFRvTGlzdCxcbiAgcmVtb3ZlRnJvbUxpc3QsXG4gIGFkZFByb2plY3QsXG4gIHJlbW92ZVByb2plY3QsXG4gIGFkZFRvU3RvcmFnZSxcbn07XG4iLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgeyBzZWxlY3RlZFByb2plY3RJbmRleCwgc2VsZWN0ZWRQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0U2VjdGlvbic7XG5pbXBvcnQgeyBhZGRUb0xpc3QsIHByb2plY3RMaXN0LCB0b2RvIH0gZnJvbSAnLi90b2RvJztcbmNvbnN0IHRvZG9Gb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpO1xuXG5jb25zdCBjcmVhdGVGcm9tID0gKCkgPT4ge1xuICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgdG9kb0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICd0b2RvLWxpc3QtZm9ybScpO1xuXG4gIGNvbnN0IGZvcm1FeGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGZvcm1FeGl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgZm9ybUV4aXQuc2V0QXR0cmlidXRlKCdpZCcsICdleGl0LWZvcm0nKTtcbiAgZm9ybUV4aXQudGV4dENvbnRlbnQgPSAnWCc7XG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGZvcm1FeGl0KTtcbiAgdG9kb0ZvbGRlci5hcHBlbmRDaGlsZCh0b2RvRm9ybSk7XG4gIGZvcm1FeGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHJlbW92ZUZvcm0oKTtcbiAgICBhZGRGb3JtQnRuKCk7XG4gIH0pO1xuXG4gIC8vZm9ybSB0ZXh0IGlucHV0XG4gIGNvbnN0IGZvcm1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRleHRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHRleHRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbicpO1xuICB0ZXh0TGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdGV4dElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKTtcbiAgdGV4dElucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgZm9ybVRleHQuYXBwZW5kQ2hpbGQodGV4dExhYmVsKTtcbiAgZm9ybVRleHQuYXBwZW5kQ2hpbGQodGV4dElucHV0KTtcbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybVRleHQpO1xuXG4gIC8vZm9ybSBkYXRlIGlucHV0XG4gIGNvbnN0IGZvcm1EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkYXRlJyk7XG4gIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEYXRlJztcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUnKTtcbiAgZm9ybURhdGUuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgZm9ybURhdGUuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybURhdGUpO1xuXG4gIC8vZm9ybSBzZWxlY3QgaW5wdXRcbiAgY29uc3QgZm9ybVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzZWxlY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHNlbGVjdExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG4gIHNlbGVjdExhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcbiAgY29uc3Qgc2VsZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgc2VsZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xuICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuICBsb3dQcmlvcml0eS50ZXh0Q29udGVudCA9ICdMb3cnO1xuICBjb25zdCBtaWRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBtaWRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21lZGl1bScpO1xuICBtaWRQcmlvcml0eS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuICBoaWdoUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gIHNlbGVjdElucHV0LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcbiAgc2VsZWN0SW5wdXQuYXBwZW5kQ2hpbGQobWlkUHJpb3JpdHkpO1xuICBzZWxlY3RJbnB1dC5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuICBmb3JtU2VsZWN0LmFwcGVuZENoaWxkKHNlbGVjdExhYmVsKTtcbiAgZm9ybVNlbGVjdC5hcHBlbmRDaGlsZChzZWxlY3RJbnB1dCk7XG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGZvcm1TZWxlY3QpO1xuXG4gIC8vZm9ybSBzdWJtaXQgYnV0dG9uXG4gIGNvbnN0IGZvcm1TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZm9ybVN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIGZvcm1TdWJtaXQudGV4dENvbnRlbnQgPSAnU2VsZWN0JztcbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybVN1Ym1pdCk7XG4gIHRvZG9Gb2xkZXIuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuICB0b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnN0IGlzRm9ybVZhbGlkID0gdG9kb0Zvcm0uY2hlY2tWYWxpZGl0eSgpO1xuICAgIGlmIChpc0Zvcm1WYWxpZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmVtb3ZlRm9ybSgpO1xuICAgICAgbGV0IHRhc2sgPSB0ZXh0SW5wdXQudmFsdWU7XG4gICAgICBsZXQgZGF0ZSA9IGRhdGVJbnB1dC52YWx1ZTtcbiAgICAgIGxldCBwcmlvcml0eSA9IHNlbGVjdElucHV0LnZhbHVlO1xuICAgICAgbGV0IG5ld1RvZG8gPSB0b2RvKHRhc2ssIGRhdGUsIHByaW9yaXR5KTtcbiAgICAgIGFkZFRvTGlzdChuZXdUb2RvLCBwcm9qZWN0TGlzdFtzZWxlY3RlZFByb2plY3RJbmRleF0udG9kbyk7XG4gICAgICBjcmVhdGVUb2RvKHNlbGVjdGVkUHJvamVjdC50b2RvKTtcbiAgICAgIGFkZEZvcm1CdG4oKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy90b2RvIGxpc3RcbmxldCBpbmRleCA9IDA7XG5jb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWxpc3QnKTtcblxuY29uc3QgZGVsZXRlVG9kb0xpc3QgPSAoKSA9PiB7XG4gIHdoaWxlICh0b2RvTGlzdC5maXJzdENoaWxkKSB7XG4gICAgdG9kb0xpc3QucmVtb3ZlQ2hpbGQodG9kb0xpc3QuZmlyc3RDaGlsZCk7XG4gIH1cbiAgaW5kZXggPSAwO1xufTtcblxuY29uc3QgY3JlYXRlVG9kbyA9IHByb2plY3QgPT4ge1xuICBkZWxldGVUb2RvTGlzdCgpO1xuICBjb25zdCBhbGxUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvcycpO1xuICBpZiAoYWxsVG9kb3MubGVuZ3RoID4gMCkge1xuICAgIGluZGV4ID0gYWxsVG9kb3MubGVuZ3RoO1xuICB9XG4gIHByb2plY3QuZm9yRWFjaCh0b2RvID0+IHtcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9zLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcbiAgICB0b2Rvcy5jbGFzc0xpc3QuYWRkKCd0b2RvcycpO1xuXG4gICAgY29uc3QgdG9kb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvVGV4dC50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgdG9kb3MuYXBwZW5kQ2hpbGQodG9kb1RleHQpO1xuXG4gICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgICB0b2Rvcy5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XG5cbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5O1xuICAgIHRvZG9zLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eSk7XG5cbiAgICBjb25zdCBkZWxldGVUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlVG9kb0J0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgIGRlbGV0ZVRvZG9CdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXRvZG8nKTtcbiAgICB0b2Rvcy5hcHBlbmRDaGlsZChkZWxldGVUb2RvQnRuKTtcblxuICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9zKTtcbiAgICBpbmRleCsrO1xuICB9KTtcbiAgZGVsZXRlVG9kb0l0ZW0oKTtcbn07XG5cbmNvbnN0IHJlbW92ZVRvZG8gPSBpbmRleCA9PiB7XG4gIHNlbGVjdGVkUHJvamVjdC50b2RvLnNwbGljZShpbmRleCwgMSk7XG59O1xuXG5jb25zdCBkZWxldGVUb2RvSXRlbSA9ICgpID0+IHtcbiAgY29uc3QgZGVsZXRlVG9kb0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLXRvZG8nKTtcbiAgZGVsZXRlVG9kb0J0bnMuZm9yRWFjaChkZWxldGVUb2RvQnRuID0+IHtcbiAgICBkZWxldGVUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmVtb3ZlVG9kbyhkZWxldGVUb2RvQnRuLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpO1xuICAgICAgY3JlYXRlVG9kbyhzZWxlY3RlZFByb2plY3QudG9kbyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgYWRkRm9ybUJ0biA9ICgpID0+IHtcbiAgY29uc3QgY3JlYXRlRm9ybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjcmVhdGVGb3JtQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgY3JlYXRlRm9ybUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NyZWF0ZS1mb3JtJyk7XG4gIGNyZWF0ZUZvcm1CdG4udGV4dENvbnRlbnQgPSAnQWRkIFRvZG8nO1xuICB0b2RvRm9sZGVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvcm1CdG4pO1xuICBjcmVhdGVGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGNyZWF0ZUZyb20oKTtcbiAgICByZW1vdmVGb3JtQnRuKCk7XG4gIH0pO1xufTtcblxuY29uc3QgcmVtb3ZlRm9ybUJ0biA9ICgpID0+IHtcbiAgY29uc3QgZm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtZm9ybScpO1xuICB0b2RvRm9sZGVyLnJlbW92ZUNoaWxkKGZvcm1CdG4pO1xufTtcbmNvbnN0IHJlbW92ZUZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHRvZG9Gb3JtTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1saXN0LWZvcm0nKTtcbiAgdG9kb0ZvbGRlci5yZW1vdmVDaGlsZCh0b2RvRm9ybU1vZGFsKTtcbn07XG5cbi8vVG9kbyBUaXRsZVxuY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG5jb25zdCBjcmVhdGVUaXRsZSA9ICgpID0+IHtcbiAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gc2VsZWN0ZWRQcm9qZWN0Lm5hbWU7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVGcm9tLFxuICBhZGRGb3JtQnRuLFxuICByZW1vdmVGb3JtQnRuLFxuICB0b2RvRm9sZGVyLFxuICBkZWxldGVUb2RvTGlzdCxcbiAgY3JlYXRlVG9kbyxcbiAgY3JlYXRlVGl0bGUsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge1xuICB0b2RvLFxuICBwcm9qZWN0LFxuICBwcm9qZWN0TGlzdCxcbiAgYWRkVG9MaXN0LFxuICByZW1vdmVGcm9tTGlzdCxcbiAgYWRkUHJvamVjdCxcbiAgcmVtb3ZlUHJvamVjdCxcbn0gZnJvbSAnLi90b2RvJztcbmltcG9ydCB7XG4gIGNyZWF0ZUZyb20sXG4gIGFkZEZvcm1CdG4sXG4gIHJlbW92ZUZvcm1CdG4sXG4gIHRvZG9Gb2xkZXIsXG59IGZyb20gJy4vdG9kb1NlY3Rpb24nO1xuaW1wb3J0IHsgYWRkVG9Qcm9qZWN0VUkgfSBmcm9tICcuL3Byb2plY3RTZWN0aW9uJztcblxuY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0QnRuJyk7XG5uZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgY29uc3QgaXNGb3JtVmFsaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QnKS5jaGVja1ZhbGlkaXR5KCk7XG4gIGlmIChpc0Zvcm1WYWxpZCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG4gICAgbGV0IGNyZWF0ZVByb2plY3QgPSBwcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlKTtcblxuICAgIGFkZFByb2plY3QoY3JlYXRlUHJvamVjdCk7XG4gICAgYWRkVG9Qcm9qZWN0VUkocHJvamVjdExpc3QpO1xuICAgIHByb2plY3ROYW1lLnZhbHVlID0gJyc7XG4gIH1cbn0pO1xuXG4vLyBsZXQgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0KCdEZWZhdWx0Jyk7XG4vLyBhZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcbmFkZFRvUHJvamVjdFVJKHByb2plY3RMaXN0KTtcbmFkZEZvcm1CdG4oKTtcbmNvbnN0IGZpcnN0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QtcHJvamVjdCcpO1xuXG5pZiAoZmlyc3RQcm9qZWN0KSB7XG4gIGZpcnN0UHJvamVjdC5jbGljaygpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9