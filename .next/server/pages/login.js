"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"provider\": () => (/* binding */ provider),\n/* harmony export */   \"auth\": () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, firebase_app__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, firebase_app__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n// Import the functions you need from the SDKs you need\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDaYcuBzh3uEbTKfpu5mtj3MLilzO8OE10\",\n    authDomain: \"uber-clone-project-d355b.firebaseapp.com\",\n    projectId: \"uber-clone-project-d355b\",\n    storageBucket: \"uber-clone-project-d355b.appspot.com\",\n    messagingSenderId: \"894117248784\",\n    appId: \"1:894117248784:web:eedada1e60ab72da622f95\",\n    measurementId: \"G-WCKW4MZKVK\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_1__.initializeApp)(firebaseConfig);\nconst provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthProvider();\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)();\n\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyRDtBQUUzRCxFQUF1RDtBQUNYO0FBQzVDLEVBQTREO0FBQzVELEVBQWlFO0FBRWpFLEVBQXdDO0FBQ3hDLEVBQW1FO0FBQ25FLEtBQUssQ0FBQ0csY0FBYyxHQUFHLENBQUM7SUFDdEJDLE1BQU0sRUFBRSxDQUF5QztJQUNqREMsVUFBVSxFQUFFLENBQTBDO0lBQ3REQyxTQUFTLEVBQUUsQ0FBMEI7SUFDckNDLGFBQWEsRUFBRSxDQUFzQztJQUNyREMsaUJBQWlCLEVBQUUsQ0FBYztJQUNqQ0MsS0FBSyxFQUFFLENBQTJDO0lBQ2xEQyxhQUFhLEVBQUUsQ0FBYztBQUMvQixDQUFDO0FBRUQsRUFBc0I7QUFDdEIsS0FBSyxDQUFDQyxHQUFHLEdBQUdULDJEQUFhLENBQUNDLGNBQWM7QUFDeEMsS0FBSyxDQUFDUyxRQUFRLEdBQUcsR0FBRyxDQUFDWiw2REFBa0I7QUFDdkMsS0FBSyxDQUFDYSxJQUFJLEdBQUdaLHNEQUFPO0FBRVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91YmVyLW5leHQtY2xvbmUvLi9maXJlYmFzZS5qcz80ZDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvb2dsZUF1dGhQcm92aWRlciwgZ2V0QXV0aCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnXG5cbi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG4vLyBUT0RPOiBBZGQgU0RLcyBmb3IgRmlyZWJhc2UgcHJvZHVjdHMgdGhhdCB5b3Ugd2FudCB0byB1c2Vcbi8vIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3dlYi9zZXR1cCNhdmFpbGFibGUtbGlicmFyaWVzXG5cbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cbi8vIEZvciBGaXJlYmFzZSBKUyBTREsgdjcuMjAuMCBhbmQgbGF0ZXIsIG1lYXN1cmVtZW50SWQgaXMgb3B0aW9uYWxcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5RGFZY3VCemgzdUViVEtmcHU1bXRqM01MaWx6TzhPRTEwXCIsXG4gIGF1dGhEb21haW46IFwidWJlci1jbG9uZS1wcm9qZWN0LWQzNTViLmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwidWJlci1jbG9uZS1wcm9qZWN0LWQzNTViXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwidWJlci1jbG9uZS1wcm9qZWN0LWQzNTViLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjg5NDExNzI0ODc4NFwiLFxuICBhcHBJZDogXCIxOjg5NDExNzI0ODc4NDp3ZWI6ZWVkYWRhMWU2MGFiNzJkYTYyMmY5NVwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctV0NLVzRNWktWS1wiXG59O1xuXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbmNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xuY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcblxuZXhwb3J0IHsgYXBwLCBwcm92aWRlciwgYXV0aCB9OyJdLCJuYW1lcyI6WyJHb29nbGVBdXRoUHJvdmlkZXIiLCJnZXRBdXRoIiwiaW5pdGlhbGl6ZUFwcCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsInByb3ZpZGVyIiwiYXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwind-styled-components */ \"tailwind-styled-components\");\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_5__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_5__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst Login = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {\n        __source: {\n            fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/login.js\",\n            lineNumber: 14,\n            columnNumber: 9\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UberLogo, {\n                src: \"https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg\",\n                __source: {\n                    fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/login.js\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                },\n                __self: undefined\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeadImage, {\n                src: \"https://i.ibb.co/CsV9RYZ/login-image.png\",\n                __source: {\n                    fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/login.js\",\n                    lineNumber: 16,\n                    columnNumber: 13\n                },\n                __self: undefined\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Title, {\n                __source: {\n                    fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/login.js\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                },\n                __self: undefined,\n                children: \"Login to access your account\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SignInButton, {\n                __source: {\n                    fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/login.js\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                },\n                __self: undefined,\n                children: \"Sign in with Google\"\n            })\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\nconst Wrapper = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`\nflex flex-col h-screen bg-gray-200 p-4\n`;\nconst SignInButton = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().button)`\nbg-black text-white text-center py-4 mt-8 self-center w-full \n`;\nconst UberLogo = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`\nh-20 w-auto object-contain self-start\n`;\nconst Title = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`\ntext-5xl pt-4 text-gray-500\n`;\nconst HeadImage = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`\nobject-contain w-full \n`;\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDRztBQUNKO0FBQzRCO0FBQ3ZCO0FBRzVDLEtBQUssQ0FBQ1EsS0FBSyxPQUFTLENBQUM7SUFFakIsS0FBSyxDQUFDQyxNQUFNLEdBQUdOLHNEQUFTO0lBRXhCRiw0Q0FBUztJQUNULE1BQU0sdUVBQ0RTLE9BQU87Ozs7Ozs7O2lGQUNIQyxRQUFRO2dCQUFDQyxHQUFHLEVBQUMsQ0FBNkQ7Ozs7Ozs7O2lGQUMxRUMsU0FBUztnQkFBQ0QsR0FBRyxFQUFDLENBQTBDOzs7Ozs7OztpRkFDeERFLEtBQUs7Ozs7Ozs7MEJBQUMsQ0FBNEI7O2lGQUNsQ0MsWUFBWTs7Ozs7OzswQkFBQyxDQUFtQjs7OztBQUc3QyxDQUFDO0FBRUQsaUVBQWVQLEtBQUssRUFBQztBQUVyQixLQUFLLENBQUNFLE9BQU8sR0FBR1IsdUVBQU0sQ0FBQztBQUd2QixLQUFLLENBQUNhLFlBQVksR0FBR2IsRUFBRSxDQUFDZSxNQUFNLENBQUM7QUFHL0I7QUFHQSxLQUFLLENBQUNILEtBQUssR0FBR1osRUFBRSxDQUFDYyxHQUFHLENBQUM7QUFHckIsS0FBSyxDQUFDSCxTQUFTLEdBQUdYLEVBQUUsQ0FBQ2dCLEdBQUcsQ0FBQyx3QkFFekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91YmVyLW5leHQtY2xvbmUvLi9wYWdlcy9sb2dpbi5qcz84MWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0dyBmcm9tIFwidGFpbHdpbmQtc3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHNpZ25JbldpdGhQb3B1cCwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XG5pbXBvcnQgeyBhdXRoLCBwcm92aWRlciB9IGZyb20gJy4uL2ZpcmViYXNlJztcblxuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICB1c2VFZmZlY3RcbiAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICAgIDxVYmVyTG9nbyBzcmM9XCJodHRwczovL2kuaWJiLmNvLzg0c3RnanEvdWJlci10ZWNobm9sb2dpZXMtbmV3LTIwMjE4MTE0LmpwZ1wiIC8+XG4gICAgICAgICAgICA8SGVhZEltYWdlIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vQ3NWOVJZWi9sb2dpbi1pbWFnZS5wbmdcIi8+XG4gICAgICAgICAgICA8VGl0bGU+TG9naW4gdG8gYWNjZXNzIHlvdXIgYWNjb3VudDwvVGl0bGU+XG4gICAgICAgICAgICA8U2lnbkluQnV0dG9uPlNpZ24gaW4gd2l0aCBHb29nbGU8L1NpZ25JbkJ1dHRvbj5cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG5cbmNvbnN0IFdyYXBwZXIgPSB0dy5kaXZgXG5mbGV4IGZsZXgtY29sIGgtc2NyZWVuIGJnLWdyYXktMjAwIHAtNFxuYFxuY29uc3QgU2lnbkluQnV0dG9uID0gdHcuYnV0dG9uYFxuYmctYmxhY2sgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBweS00IG10LTggc2VsZi1jZW50ZXIgdy1mdWxsIFxuYFxuY29uc3QgVWJlckxvZ28gPSB0dy5pbWdgXG5oLTIwIHctYXV0byBvYmplY3QtY29udGFpbiBzZWxmLXN0YXJ0XG5gXG5jb25zdCBUaXRsZSA9IHR3LmRpdmBcbnRleHQtNXhsIHB0LTQgdGV4dC1ncmF5LTUwMFxuYFxuY29uc3QgSGVhZEltYWdlID0gdHcuaW1nYFxub2JqZWN0LWNvbnRhaW4gdy1mdWxsIFxuYCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInR3IiwidXNlUm91dGVyIiwic2lnbkluV2l0aFBvcHVwIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiYXV0aCIsInByb3ZpZGVyIiwiTG9naW4iLCJyb3V0ZXIiLCJXcmFwcGVyIiwiVWJlckxvZ28iLCJzcmMiLCJIZWFkSW1hZ2UiLCJUaXRsZSIsIlNpZ25JbkJ1dHRvbiIsImRpdiIsImJ1dHRvbiIsImltZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "tailwind-styled-components":
/*!*********************************************!*\
  !*** external "tailwind-styled-components" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("tailwind-styled-components");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();