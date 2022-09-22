/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addToList": () => (/* binding */ addToList),
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "removeFromList": () => (/* binding */ removeFromList),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "todo": () => (/* binding */ todo)
/* harmony export */ });


const projectList = [];

const project = name => {
  name = name;
  const todo = [];
  return { name, todo };
};

const addProject = project => projectList.push(project);
const removeProject = index => projectList.splice(index, 1);

const todo = (title, description, dueDate, priority) => {
  title = title;
  description = description;
  dueDate = dueDate;
  priority = priority;
  return { title, description, dueDate, priority };
};

const addToList = (todo, todoList) => todoList.push(todo);
const removeFromList = (index, todoList) => todoList.splice(index, 1);




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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");



const defaultProject = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.project)('Default folder');
(0,_todo__WEBPACK_IMPORTED_MODULE_0__.addProject)(defaultProject);

let defaultTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.todo)('Default todo', 'Making a default todo list', '', '');

const defaultProjectFolder = document.createElement('div');
const body = document.querySelector('body');
(0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToList)(defaultTodo, _todo__WEBPACK_IMPORTED_MODULE_0__.projectList[0].todo);
console.table(_todo__WEBPACK_IMPORTED_MODULE_0__.projectList);
console.table(_todo__WEBPACK_IMPORTED_MODULE_0__.projectList[0]);
console.table(_todo__WEBPACK_IMPORTED_MODULE_0__.projectList[0].todo);
defaultProjectFolder.textContent = _todo__WEBPACK_IMPORTED_MODULE_0__.projectList[0].name;

body.appendChild(defaultProjectFolder);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBOztBQVVFOzs7Ozs7O1VDaENGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOYTtBQVNHOztBQUVoQix1QkFBdUIsOENBQU87QUFDOUIsaURBQVU7O0FBRVYsa0JBQWtCLDJDQUFJOztBQUV0QjtBQUNBO0FBQ0EsZ0RBQVMsY0FBYyxzREFBbUI7QUFDMUMsY0FBYyw4Q0FBVztBQUN6QixjQUFjLGlEQUFjO0FBQzVCLGNBQWMsc0RBQW1CO0FBQ2pDLG1DQUFtQyxzREFBbUI7O0FBRXREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcHJvamVjdExpc3QgPSBbXTtcblxuY29uc3QgcHJvamVjdCA9IG5hbWUgPT4ge1xuICBuYW1lID0gbmFtZTtcbiAgY29uc3QgdG9kbyA9IFtdO1xuICByZXR1cm4geyBuYW1lLCB0b2RvIH07XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0ID0gcHJvamVjdCA9PiBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuY29uc3QgcmVtb3ZlUHJvamVjdCA9IGluZGV4ID0+IHByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7XG5cbmNvbnN0IHRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICB0aXRsZSA9IHRpdGxlO1xuICBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICBkdWVEYXRlID0gZHVlRGF0ZTtcbiAgcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9O1xufTtcblxuY29uc3QgYWRkVG9MaXN0ID0gKHRvZG8sIHRvZG9MaXN0KSA9PiB0b2RvTGlzdC5wdXNoKHRvZG8pO1xuY29uc3QgcmVtb3ZlRnJvbUxpc3QgPSAoaW5kZXgsIHRvZG9MaXN0KSA9PiB0b2RvTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXG5leHBvcnQge1xuICB0b2RvLFxuICBwcm9qZWN0LFxuICBwcm9qZWN0TGlzdCxcbiAgYWRkVG9MaXN0LFxuICByZW1vdmVGcm9tTGlzdCxcbiAgYWRkUHJvamVjdCxcbiAgcmVtb3ZlUHJvamVjdCxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCB7XG4gIHRvZG8sXG4gIHByb2plY3QsXG4gIHByb2plY3RMaXN0LFxuICBhZGRUb0xpc3QsXG4gIHJlbW92ZUZyb21MaXN0LFxuICBhZGRQcm9qZWN0LFxuICByZW1vdmVQcm9qZWN0LFxufSBmcm9tICcuL3RvZG8nO1xuXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3QoJ0RlZmF1bHQgZm9sZGVyJyk7XG5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcblxubGV0IGRlZmF1bHRUb2RvID0gdG9kbygnRGVmYXVsdCB0b2RvJywgJ01ha2luZyBhIGRlZmF1bHQgdG9kbyBsaXN0JywgJycsICcnKTtcblxuY29uc3QgZGVmYXVsdFByb2plY3RGb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5hZGRUb0xpc3QoZGVmYXVsdFRvZG8sIHByb2plY3RMaXN0WzBdLnRvZG8pO1xuY29uc29sZS50YWJsZShwcm9qZWN0TGlzdCk7XG5jb25zb2xlLnRhYmxlKHByb2plY3RMaXN0WzBdKTtcbmNvbnNvbGUudGFibGUocHJvamVjdExpc3RbMF0udG9kbyk7XG5kZWZhdWx0UHJvamVjdEZvbGRlci50ZXh0Q29udGVudCA9IHByb2plY3RMaXN0WzBdLm5hbWU7XG5cbmJvZHkuYXBwZW5kQ2hpbGQoZGVmYXVsdFByb2plY3RGb2xkZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9