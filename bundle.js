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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Eczar/Eczar-VariableFont_wght.ttf */ "./src/Eczar/Eczar-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Eczar';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n:root {\n  --grey: #58565665;\n  --light-grey: #d1ccccfa;\n  --pink: rgb(197, 93, 142);\n}\nbody {\n  color: var(--light-grey);\n  font-family: 'Eczar', Arial, Helvetica, sans-serif;\n  margin: 0;\n  padding: 0;\n}\n#container {\n  max-height: 100vh;\n  background: rgba(20, 20, 20, 0.945);\n  display: grid;\n  grid-template-rows: 1fr 8fr;\n  grid-template-columns: 1fr 4fr;\n  text-align: center;\n}\nnav {\n  grid-column: span 2;\n  font-size: 2rem;\n}\n#project {\n  min-width: 250px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-right: 2px solid var(--pink);\n}\n#todo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#todo-list-form {\n  padding: 5px;\n  margin-left: 20px;\n  display: flex;\n  flex-direction: column;\n  border: 2px solid var(--pink);\n  background-color: var(--grey);\n  border-radius: 10px;\n  justify-content: space-around;\n  align-items: center;\n  height: 250px;\n  width: 250px;\n  position: relative;\n}\n#new-project {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 5px;\n}\n#new-project > input {\n  width: 120px;\n  margin-left: 10px;\n  border: none;\n}\n#new-project > button {\n  width: 100px;\n  height: 20px;\n  padding-left: 10px;\n}\n#projects-list > div {\n  border-bottom: 2px solid var(--pink);\n  padding-bottom: 5px;\n  margin-top: 15px;\n}\n\n#projects-list > div:hover {\n  box-shadow: 0px 7px 5px -3px var(--pink);\n  cursor: pointer;\n}\n\n.hidden {\n  display: none;\n}\n\n.todos {\n  display: flex;\n  justify-content: space-between;\n  min-width: 600px;\n  border: 1px solid var(--pink);\n  padding: 10px;\n  margin-bottom: 5px;\n  border-radius: 1rem;\n}\n.todos > div:first-child {\n  width: 300px;\n}\n.todos > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 5px;\n}\n\nbutton {\n  background: var(--grey);\n  color: var(--light-grey);\n  border: none;\n  border-radius: 4px;\n}\n\n#exit-form {\n  position: absolute;\n  top: 5px;\n  left: 235px;\n}\n\n.select-project {\n  margin-right: 5px;\n  max-width: 100px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,4CAA6C;AAC/C;AACA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,yBAAyB;AAC3B;AACA;EACE,wBAAwB;EACxB,kDAAkD;EAClD,SAAS;EACT,UAAU;AACZ;AACA;EACE,iBAAiB;EACjB,mCAAmC;EACnC,aAAa;EACb,2BAA2B;EAC3B,8BAA8B;EAC9B,kBAAkB;AACpB;AACA;EACE,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mCAAmC;AACrC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,6BAA6B;EAC7B,mBAAmB;EACnB,6BAA6B;EAC7B,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,QAAQ;AACV;AACA;EACE,YAAY;EACZ,iBAAiB;EACjB,YAAY;AACd;AACA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,oCAAoC;EACpC,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,wCAAwC;EACxC,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,gBAAgB;EAChB,6BAA6B;EAC7B,aAAa;EACb,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,uBAAuB;EACvB,wBAAwB;EACxB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB","sourcesContent":["@font-face {\n  font-family: 'Eczar';\n  src: url(./Eczar/Eczar-VariableFont_wght.ttf);\n}\n:root {\n  --grey: #58565665;\n  --light-grey: #d1ccccfa;\n  --pink: rgb(197, 93, 142);\n}\nbody {\n  color: var(--light-grey);\n  font-family: 'Eczar', Arial, Helvetica, sans-serif;\n  margin: 0;\n  padding: 0;\n}\n#container {\n  max-height: 100vh;\n  background: rgba(20, 20, 20, 0.945);\n  display: grid;\n  grid-template-rows: 1fr 8fr;\n  grid-template-columns: 1fr 4fr;\n  text-align: center;\n}\nnav {\n  grid-column: span 2;\n  font-size: 2rem;\n}\n#project {\n  min-width: 250px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-right: 2px solid var(--pink);\n}\n#todo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#todo-list-form {\n  padding: 5px;\n  margin-left: 20px;\n  display: flex;\n  flex-direction: column;\n  border: 2px solid var(--pink);\n  background-color: var(--grey);\n  border-radius: 10px;\n  justify-content: space-around;\n  align-items: center;\n  height: 250px;\n  width: 250px;\n  position: relative;\n}\n#new-project {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 5px;\n}\n#new-project > input {\n  width: 120px;\n  margin-left: 10px;\n  border: none;\n}\n#new-project > button {\n  width: 100px;\n  height: 20px;\n  padding-left: 10px;\n}\n#projects-list > div {\n  border-bottom: 2px solid var(--pink);\n  padding-bottom: 5px;\n  margin-top: 15px;\n}\n\n#projects-list > div:hover {\n  box-shadow: 0px 7px 5px -3px var(--pink);\n  cursor: pointer;\n}\n\n.hidden {\n  display: none;\n}\n\n.todos {\n  display: flex;\n  justify-content: space-between;\n  min-width: 600px;\n  border: 1px solid var(--pink);\n  padding: 10px;\n  margin-bottom: 5px;\n  border-radius: 1rem;\n}\n.todos > div:first-child {\n  width: 300px;\n}\n.todos > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 5px;\n}\n\nbutton {\n  background: var(--grey);\n  color: var(--light-grey);\n  border: none;\n  border-radius: 4px;\n}\n\n#exit-form {\n  position: absolute;\n  top: 5px;\n  left: 235px;\n}\n\n.select-project {\n  margin-right: 5px;\n  max-width: 100px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
  formSubmit.textContent = 'Submit';
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
      (0,_todo__WEBPACK_IMPORTED_MODULE_1__.addToStorage)();
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




/***/ }),

/***/ "./src/Eczar/Eczar-VariableFont_wght.ttf":
/*!***********************************************!*\
  !*** ./src/Eczar/Eczar-VariableFont_wght.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ec340c81dceacb797fd5.ttf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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

(0,_projectSection__WEBPACK_IMPORTED_MODULE_3__.addToProjectUI)(_todo__WEBPACK_IMPORTED_MODULE_1__.projectList);
(0,_todoSection__WEBPACK_IMPORTED_MODULE_2__.addFormBtn)();
const firstProject = document.querySelector('.select-project');

if (firstProject) {
  firstProject.click();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TEY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBYTtBQUNRO0FBU0w7QUFNTztBQUMyQjs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhDQUFPOztBQUUvQixJQUFJLGlEQUFVO0FBQ2QsSUFBSSwrREFBYyxDQUFDLDhDQUFXO0FBQzlCO0FBQ0E7QUFDQSxDQUFDOztBQUVELCtEQUFjLENBQUMsOENBQVc7QUFDMUIsd0RBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9TZWN0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0VjemFyL0VjemFyLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdFY3phcic7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcbjpyb290IHtcXG4gIC0tZ3JleTogIzU4NTY1NjY1O1xcbiAgLS1saWdodC1ncmV5OiAjZDFjY2NjZmE7XFxuICAtLXBpbms6IHJnYigxOTcsIDkzLCAxNDIpO1xcbn1cXG5ib2R5IHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG4gIGZvbnQtZmFtaWx5OiAnRWN6YXInLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuI2NvbnRhaW5lciB7XFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjAsIDIwLCAyMCwgMC45NDUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxubmF2IHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbiNwcm9qZWN0IHtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1waW5rKTtcXG59XFxuI3RvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jdG9kby1saXN0LWZvcm0ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXBpbmspO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuI25ldy1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDVweDtcXG59XFxuI25ldy1wcm9qZWN0ID4gaW5wdXQge1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbiNuZXctcHJvamVjdCA+IGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcbiNwcm9qZWN0cy1saXN0ID4gZGl2IHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1waW5rKTtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4jcHJvamVjdHMtbGlzdCA+IGRpdjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHZhcigtLXBpbmspO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWluLXdpZHRoOiA2MDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXBpbmspO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcbi50b2RvcyA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICB3aWR0aDogMzAwcHg7XFxufVxcbi50b2RvcyA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmV5KTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuI2V4aXQtZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDVweDtcXG4gIGxlZnQ6IDIzNXB4O1xcbn1cXG5cXG4uc2VsZWN0LXByb2plY3Qge1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBtYXgtd2lkdGg6IDEwMHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLDRDQUE2QztBQUMvQztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixrREFBa0Q7RUFDbEQsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFFBQVE7QUFDVjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnRWN6YXInO1xcbiAgc3JjOiB1cmwoLi9FY3phci9FY3phci1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcbn1cXG46cm9vdCB7XFxuICAtLWdyZXk6ICM1ODU2NTY2NTtcXG4gIC0tbGlnaHQtZ3JleTogI2QxY2NjY2ZhO1xcbiAgLS1waW5rOiByZ2IoMTk3LCA5MywgMTQyKTtcXG59XFxuYm9keSB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuICBmb250LWZhbWlseTogJ0VjemFyJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbiNjb250YWluZXIge1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIwLCAyMCwgMjAsIDAuOTQ1KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbm5hdiB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4jcHJvamVjdCB7XFxuICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tcGluayk7XFxufVxcbiN0b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3RvZG8tbGlzdC1mb3JtIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1waW5rKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogMjUwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbiNuZXctcHJvamVjdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiA1cHg7XFxufVxcbiNuZXctcHJvamVjdCA+IGlucHV0IHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4jbmV3LXByb2plY3QgPiBidXR0b24ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG4jcHJvamVjdHMtbGlzdCA+IGRpdiB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcGluayk7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuI3Byb2plY3RzLWxpc3QgPiBkaXY6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCB2YXIoLS1waW5rKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kb3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1pbi13aWR0aDogNjAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1waW5rKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG4udG9kb3MgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG4udG9kb3MgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JleSk7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbiNleGl0LWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1cHg7XFxuICBsZWZ0OiAyMzVweDtcXG59XFxuXFxuLnNlbGVjdC1wcm9qZWN0IHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgbWF4LXdpZHRoOiAxMDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3RMaXN0LCByZW1vdmVQcm9qZWN0LCBhZGRQcm9qZWN0IH0gZnJvbSAnLi90b2RvJztcbmltcG9ydCB7IGRlbGV0ZVRvZG9MaXN0LCBjcmVhdGVUb2RvLCBjcmVhdGVUaXRsZSB9IGZyb20gJy4vdG9kb1NlY3Rpb24nO1xubGV0IGluZGV4ID0gMDtcblxuY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzLWxpc3QnKTtcblxuY29uc3QgcmVtb3ZlQnV0dG9ucyA9ICgpID0+IHtcbiAgd2hpbGUgKHByb2plY3RzTGlzdC5maXJzdENoaWxkKSB7XG4gICAgcHJvamVjdHNMaXN0LnJlbW92ZUNoaWxkKHByb2plY3RzTGlzdC5maXJzdENoaWxkKTtcbiAgfVxuICBpbmRleCA9IDA7XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0QnRucyA9IHByb2plY3RzID0+IHtcbiAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICBjb25zdCBwcm9qZWN0QnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RCdG5zLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnV0dG9ucycpO1xuICAgIHByb2plY3RCdG5zLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcbiAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC1wcm9qZWN0Jyk7XG4gICAgcHJvamVjdEl0ZW0udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlbW92ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlLXByb2plY3QnKTtcbiAgICByZW1vdmVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIHByb2plY3RCdG5zLmFwcGVuZENoaWxkKHByb2plY3RJdGVtKTtcbiAgICBwcm9qZWN0QnRucy5hcHBlbmRDaGlsZChyZW1vdmVQcm9qZWN0QnRuKTtcbiAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bnMpO1xuICAgIGluZGV4Kys7XG4gIH0pO1xufTtcblxuY29uc3QgcmVtb3ZlUHJvamVjdEl0ZW0gPSAoKSA9PiB7XG4gIGNvbnN0IHJlbW92ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlLXByb2plY3QnKTtcbiAgcmVtb3ZlQnRucy5mb3JFYWNoKHJlbW92ZUJ0biA9PiB7XG4gICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmVtb3ZlUHJvamVjdChyZW1vdmVCdG4ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSk7XG4gICAgICBhZGRUb1Byb2plY3RVSShwcm9qZWN0TGlzdCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxubGV0IHNlbGVjdGVkUHJvamVjdEluZGV4ID0gMDtcbmxldCBzZWxlY3RlZFByb2plY3Q7XG5jb25zdCBzZWxlY3RQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCBzZWxlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdC1wcm9qZWN0Jyk7XG4gIHNlbGVjdEJ0bnMuZm9yRWFjaChzZWxlY3RCdG4gPT4ge1xuICAgIHNlbGVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGVjdGVkUHJvamVjdEluZGV4ID0gc2VsZWN0QnRuLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgICBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0TGlzdFtzZWxlY3RlZFByb2plY3RJbmRleF07XG4gICAgICBkZWxldGVUb2RvTGlzdCgpO1xuICAgICAgY3JlYXRlVG9kbyhzZWxlY3RlZFByb2plY3QudG9kbyk7XG4gICAgICBjcmVhdGVUaXRsZSgpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGFkZFRvUHJvamVjdFVJID0gcHJvamVjdHMgPT4ge1xuICByZW1vdmVCdXR0b25zKCk7XG4gIGFkZFByb2plY3RCdG5zKHByb2plY3RzKTtcbiAgcmVtb3ZlUHJvamVjdEl0ZW0oKTtcbiAgc2VsZWN0UHJvamVjdCgpO1xufTtcbmV4cG9ydCB7IGFkZFRvUHJvamVjdFVJLCBzZWxlY3RlZFByb2plY3RJbmRleCwgc2VsZWN0ZWRQcm9qZWN0IH07XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdExpc3QnKSA9PSBudWxsKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlzdCcsICdbXScpO1xufVxuY29uc3QgcHJvamVjdExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0TGlzdCcpKTtcbmNvbnN0IHByb2plY3QgPSBuYW1lID0+IHtcbiAgbmFtZSA9IG5hbWU7XG4gIGNvbnN0IHRvZG8gPSBbXTtcbiAgcmV0dXJuIHsgbmFtZSwgdG9kbyB9O1xufTtcblxuY29uc3QgYWRkVG9TdG9yYWdlID0gKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xufTtcblxuY29uc3QgYWRkUHJvamVjdCA9IHByb2plY3QgPT4ge1xuICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuICBhZGRUb1N0b3JhZ2UoKTtcbn07XG5jb25zdCByZW1vdmVQcm9qZWN0ID0gaW5kZXggPT4ge1xuICBwcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICBhZGRUb1N0b3JhZ2UoKTtcbn07XG5cbmNvbnN0IHRvZG8gPSAoZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gIGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIGR1ZURhdGUgPSBkdWVEYXRlO1xuICBwcmlvcml0eSA9IHByaW9yaXR5O1xuICByZXR1cm4geyBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfTtcbn07XG5cbmNvbnN0IGFkZFRvTGlzdCA9ICh0b2RvLCB0b2RvTGlzdCkgPT4ge1xuICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xuICBhZGRUb1N0b3JhZ2UoKTtcbn07XG5jb25zdCByZW1vdmVGcm9tTGlzdCA9IChpbmRleCwgdG9kb0xpc3QpID0+IHtcbiAgdG9kb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgYWRkVG9TdG9yYWdlKCk7XG59O1xuXG5leHBvcnQge1xuICB0b2RvLFxuICBwcm9qZWN0LFxuICBwcm9qZWN0TGlzdCxcbiAgYWRkVG9MaXN0LFxuICByZW1vdmVGcm9tTGlzdCxcbiAgYWRkUHJvamVjdCxcbiAgcmVtb3ZlUHJvamVjdCxcbiAgYWRkVG9TdG9yYWdlLFxufTtcbiIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCB7IHNlbGVjdGVkUHJvamVjdEluZGV4LCBzZWxlY3RlZFByb2plY3QgfSBmcm9tICcuL3Byb2plY3RTZWN0aW9uJztcbmltcG9ydCB7IGFkZFRvTGlzdCwgcHJvamVjdExpc3QsIHRvZG8sIGFkZFRvU3RvcmFnZSB9IGZyb20gJy4vdG9kbyc7XG5jb25zdCB0b2RvRm9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8nKTtcblxuY29uc3QgY3JlYXRlRnJvbSA9ICgpID0+IHtcbiAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIHRvZG9Gb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kby1saXN0LWZvcm0nKTtcblxuICBjb25zdCBmb3JtRXhpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBmb3JtRXhpdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIGZvcm1FeGl0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZXhpdC1mb3JtJyk7XG4gIGZvcm1FeGl0LnRleHRDb250ZW50ID0gJ1gnO1xuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChmb3JtRXhpdCk7XG4gIHRvZG9Gb2xkZXIuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuICBmb3JtRXhpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICByZW1vdmVGb3JtKCk7XG4gICAgYWRkRm9ybUJ0bigpO1xuICB9KTtcblxuICAvL2Zvcm0gdGV4dCBpbnB1dFxuICBjb25zdCBmb3JtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0ZXh0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0ZXh0TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24nKTtcbiAgdGV4dExhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcbiAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGV4dElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJyk7XG4gIHRleHRJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGZvcm1UZXh0LmFwcGVuZENoaWxkKHRleHRMYWJlbCk7XG4gIGZvcm1UZXh0LmFwcGVuZENoaWxkKHRleHRJbnB1dCk7XG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGZvcm1UZXh0KTtcblxuICAvL2Zvcm0gZGF0ZSBpbnB1dFxuICBjb25zdCBmb3JtRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGF0ZScpO1xuICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRGF0ZSc7XG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlJyk7XG4gIGZvcm1EYXRlLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gIGZvcm1EYXRlLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGZvcm1EYXRlKTtcblxuICAvL2Zvcm0gc2VsZWN0IGlucHV0XG4gIGNvbnN0IGZvcm1TZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc2VsZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBzZWxlY3RMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuICBzZWxlY3RMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG4gIGNvbnN0IHNlbGVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHNlbGVjdElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcbiAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcbiAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTG93JztcbiAgY29uc3QgbWlkUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgbWlkUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdtZWRpdW0nKTtcbiAgbWlkUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcbiAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICBzZWxlY3RJbnB1dC5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XG4gIHNlbGVjdElucHV0LmFwcGVuZENoaWxkKG1pZFByaW9yaXR5KTtcbiAgc2VsZWN0SW5wdXQuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcbiAgZm9ybVNlbGVjdC5hcHBlbmRDaGlsZChzZWxlY3RMYWJlbCk7XG4gIGZvcm1TZWxlY3QuYXBwZW5kQ2hpbGQoc2VsZWN0SW5wdXQpO1xuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChmb3JtU2VsZWN0KTtcblxuICAvL2Zvcm0gc3VibWl0IGJ1dHRvblxuICBjb25zdCBmb3JtU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGZvcm1TdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBmb3JtU3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGZvcm1TdWJtaXQpO1xuICB0b2RvRm9sZGVyLmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcbiAgdG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCBpc0Zvcm1WYWxpZCA9IHRvZG9Gb3JtLmNoZWNrVmFsaWRpdHkoKTtcbiAgICBpZiAoaXNGb3JtVmFsaWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJlbW92ZUZvcm0oKTtcbiAgICAgIGxldCB0YXNrID0gdGV4dElucHV0LnZhbHVlO1xuICAgICAgbGV0IGRhdGUgPSBkYXRlSW5wdXQudmFsdWU7XG4gICAgICBsZXQgcHJpb3JpdHkgPSBzZWxlY3RJbnB1dC52YWx1ZTtcbiAgICAgIGxldCBuZXdUb2RvID0gdG9kbyh0YXNrLCBkYXRlLCBwcmlvcml0eSk7XG4gICAgICBhZGRUb0xpc3QobmV3VG9kbywgcHJvamVjdExpc3Rbc2VsZWN0ZWRQcm9qZWN0SW5kZXhdLnRvZG8pO1xuICAgICAgY3JlYXRlVG9kbyhzZWxlY3RlZFByb2plY3QudG9kbyk7XG4gICAgICBhZGRGb3JtQnRuKCk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vdG9kbyBsaXN0XG5sZXQgaW5kZXggPSAwO1xuY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1saXN0Jyk7XG5cbmNvbnN0IGRlbGV0ZVRvZG9MaXN0ID0gKCkgPT4ge1xuICB3aGlsZSAodG9kb0xpc3QuZmlyc3RDaGlsZCkge1xuICAgIHRvZG9MaXN0LnJlbW92ZUNoaWxkKHRvZG9MaXN0LmZpcnN0Q2hpbGQpO1xuICB9XG4gIGluZGV4ID0gMDtcbn07XG5cbmNvbnN0IGNyZWF0ZVRvZG8gPSBwcm9qZWN0ID0+IHtcbiAgZGVsZXRlVG9kb0xpc3QoKTtcbiAgY29uc3QgYWxsVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kb3MnKTtcbiAgaWYgKGFsbFRvZG9zLmxlbmd0aCA+IDApIHtcbiAgICBpbmRleCA9IGFsbFRvZG9zLmxlbmd0aDtcbiAgfVxuICBwcm9qZWN0LmZvckVhY2godG9kbyA9PiB7XG4gICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2Rvcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XG4gICAgdG9kb3MuY2xhc3NMaXN0LmFkZCgndG9kb3MnKTtcblxuICAgIGNvbnN0IHRvZG9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb1RleHQudGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgIHRvZG9zLmFwcGVuZENoaWxkKHRvZG9UZXh0KTtcblxuICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0RhdGUudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG4gICAgdG9kb3MuYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gdG9kby5wcmlvcml0eTtcbiAgICB0b2Rvcy5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHkpO1xuXG4gICAgY29uc3QgZGVsZXRlVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZVRvZG9CdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICBkZWxldGVUb2RvQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS10b2RvJyk7XG4gICAgdG9kb3MuYXBwZW5kQ2hpbGQoZGVsZXRlVG9kb0J0bik7XG5cbiAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2Rvcyk7XG4gICAgaW5kZXgrKztcbiAgfSk7XG4gIGRlbGV0ZVRvZG9JdGVtKCk7XG59O1xuXG5jb25zdCByZW1vdmVUb2RvID0gaW5kZXggPT4ge1xuICBzZWxlY3RlZFByb2plY3QudG9kby5zcGxpY2UoaW5kZXgsIDEpO1xufTtcblxuY29uc3QgZGVsZXRlVG9kb0l0ZW0gPSAoKSA9PiB7XG4gIGNvbnN0IGRlbGV0ZVRvZG9CdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS10b2RvJyk7XG4gIGRlbGV0ZVRvZG9CdG5zLmZvckVhY2goZGVsZXRlVG9kb0J0biA9PiB7XG4gICAgZGVsZXRlVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlbW92ZVRvZG8oZGVsZXRlVG9kb0J0bi5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKTtcbiAgICAgIGFkZFRvU3RvcmFnZSgpO1xuICAgICAgY3JlYXRlVG9kbyhzZWxlY3RlZFByb2plY3QudG9kbyk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgYWRkRm9ybUJ0biA9ICgpID0+IHtcbiAgY29uc3QgY3JlYXRlRm9ybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjcmVhdGVGb3JtQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgY3JlYXRlRm9ybUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NyZWF0ZS1mb3JtJyk7XG4gIGNyZWF0ZUZvcm1CdG4udGV4dENvbnRlbnQgPSAnQWRkIFRvZG8nO1xuICB0b2RvRm9sZGVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvcm1CdG4pO1xuICBjcmVhdGVGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGNyZWF0ZUZyb20oKTtcbiAgICByZW1vdmVGb3JtQnRuKCk7XG4gIH0pO1xufTtcblxuY29uc3QgcmVtb3ZlRm9ybUJ0biA9ICgpID0+IHtcbiAgY29uc3QgZm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtZm9ybScpO1xuICB0b2RvRm9sZGVyLnJlbW92ZUNoaWxkKGZvcm1CdG4pO1xufTtcbmNvbnN0IHJlbW92ZUZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHRvZG9Gb3JtTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1saXN0LWZvcm0nKTtcbiAgdG9kb0ZvbGRlci5yZW1vdmVDaGlsZCh0b2RvRm9ybU1vZGFsKTtcbn07XG5cbi8vVG9kbyBUaXRsZVxuY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG5jb25zdCBjcmVhdGVUaXRsZSA9ICgpID0+IHtcbiAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gc2VsZWN0ZWRQcm9qZWN0Lm5hbWU7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVGcm9tLFxuICBhZGRGb3JtQnRuLFxuICByZW1vdmVGb3JtQnRuLFxuICB0b2RvRm9sZGVyLFxuICBkZWxldGVUb2RvTGlzdCxcbiAgY3JlYXRlVG9kbyxcbiAgY3JlYXRlVGl0bGUsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtcbiAgdG9kbyxcbiAgcHJvamVjdCxcbiAgcHJvamVjdExpc3QsXG4gIGFkZFRvTGlzdCxcbiAgcmVtb3ZlRnJvbUxpc3QsXG4gIGFkZFByb2plY3QsXG4gIHJlbW92ZVByb2plY3QsXG59IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQge1xuICBjcmVhdGVGcm9tLFxuICBhZGRGb3JtQnRuLFxuICByZW1vdmVGb3JtQnRuLFxuICB0b2RvRm9sZGVyLFxufSBmcm9tICcuL3RvZG9TZWN0aW9uJztcbmltcG9ydCB7IGFkZFRvUHJvamVjdFVJIH0gZnJvbSAnLi9wcm9qZWN0U2VjdGlvbic7XG5cbmNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEJ0bicpO1xubmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gIGNvbnN0IGlzRm9ybVZhbGlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0JykuY2hlY2tWYWxpZGl0eSgpO1xuICBpZiAoaXNGb3JtVmFsaWQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xuICAgIGxldCBjcmVhdGVQcm9qZWN0ID0gcHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSk7XG5cbiAgICBhZGRQcm9qZWN0KGNyZWF0ZVByb2plY3QpO1xuICAgIGFkZFRvUHJvamVjdFVJKHByb2plY3RMaXN0KTtcbiAgICBwcm9qZWN0TmFtZS52YWx1ZSA9ICcnO1xuICB9XG59KTtcblxuYWRkVG9Qcm9qZWN0VUkocHJvamVjdExpc3QpO1xuYWRkRm9ybUJ0bigpO1xuY29uc3QgZmlyc3RQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdC1wcm9qZWN0Jyk7XG5cbmlmIChmaXJzdFByb2plY3QpIHtcbiAgZmlyc3RQcm9qZWN0LmNsaWNrKCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=