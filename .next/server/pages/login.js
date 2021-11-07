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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"provider\": () => (/* binding */ provider),\n/* harmony export */   \"auth\": () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, firebase_app__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, firebase_app__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDaYcuBzh3uEbTKfpu5mtj3MLilzO8OE10\",\n    authDomain: \"uber-clone-project-d355b.firebaseapp.com\",\n    projectId: \"uber-clone-project-d355b\",\n    storageBucket: \"uber-clone-project-d355b.appspot.com\",\n    messagingSenderId: \"894117248784\",\n    appId: \"1:894117248784:web:eedada1e60ab72da622f95\",\n    measurementId: \"G-WCKW4MZKVK\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_1__.initializeApp)(firebaseConfig);\nconst provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthProvider();\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)();\n// export so other files have access to firebase app, google provider, and authentication\n\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyRDtBQUNmO0FBRzVDLEVBQXdDO0FBQ3hDLEtBQUssQ0FBQ0csY0FBYyxHQUFHLENBQUM7SUFDdEJDLE1BQU0sRUFBRSxDQUF5QztJQUNqREMsVUFBVSxFQUFFLENBQTBDO0lBQ3REQyxTQUFTLEVBQUUsQ0FBMEI7SUFDckNDLGFBQWEsRUFBRSxDQUFzQztJQUNyREMsaUJBQWlCLEVBQUUsQ0FBYztJQUNqQ0MsS0FBSyxFQUFFLENBQTJDO0lBQ2xEQyxhQUFhLEVBQUUsQ0FBYztBQUMvQixDQUFDO0FBRUQsRUFBc0I7QUFDdEIsS0FBSyxDQUFDQyxHQUFHLEdBQUdULDJEQUFhLENBQUNDLGNBQWM7QUFDeEMsS0FBSyxDQUFDUyxRQUFRLEdBQUcsR0FBRyxDQUFDWiw2REFBa0I7QUFDdkMsS0FBSyxDQUFDYSxJQUFJLEdBQUdaLHNEQUFPO0FBRXBCLEVBQXlGO0FBQzFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdWJlci1uZXh0LWNsb25lLy4vZmlyZWJhc2UuanM/NGQ5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb29nbGVBdXRoUHJvdmlkZXIsIGdldEF1dGggfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5cblxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lEYVljdUJ6aDN1RWJUS2ZwdTVtdGozTUxpbHpPOE9FMTBcIixcbiAgYXV0aERvbWFpbjogXCJ1YmVyLWNsb25lLXByb2plY3QtZDM1NWIuZmlyZWJhc2VhcHAuY29tXCIsXG4gIHByb2plY3RJZDogXCJ1YmVyLWNsb25lLXByb2plY3QtZDM1NWJcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJ1YmVyLWNsb25lLXByb2plY3QtZDM1NWIuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiODk0MTE3MjQ4Nzg0XCIsXG4gIGFwcElkOiBcIjE6ODk0MTE3MjQ4Nzg0OndlYjplZWRhZGExZTYwYWI3MmRhNjIyZjk1XCIsXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1XQ0tXNE1aS1ZLXCJcbn07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuY29uc3QgcHJvdmlkZXIgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG5jb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xuXG4vLyBleHBvcnQgc28gb3RoZXIgZmlsZXMgaGF2ZSBhY2Nlc3MgdG8gZmlyZWJhc2UgYXBwLCBnb29nbGUgcHJvdmlkZXIsIGFuZCBhdXRoZW50aWNhdGlvblxuZXhwb3J0IHsgYXBwLCBwcm92aWRlciwgYXV0aCB9OyJdLCJuYW1lcyI6WyJHb29nbGVBdXRoUHJvdmlkZXIiLCJnZXRBdXRoIiwiaW5pdGlhbGl6ZUFwcCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsInByb3ZpZGVyIiwiYXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwind-styled-components */ \"tailwind-styled-components\");\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_5__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_5__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n// import router to route from google sign in to next page\n\n// popup for email login\n\n// google provider\n\nconst Login = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_5__.auth, (user)=>{\n            if (user) {\n                router.push('/');\n            }\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {\n        __source: {\n            fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/login.js\",\n            lineNumber: 23,\n            columnNumber: 9\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UberLogo, {\n                src: \"https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg\",\n                __source: {\n                    fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/login.js\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                },\n                __self: undefined\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeadImage, {\n                src: \"https://i.ibb.co/CsV9RYZ/login-image.png\",\n                __source: {\n                    fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/login.js\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                },\n                __self: undefined\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Title, {\n                __source: {\n                    fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/login.js\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                },\n                __self: undefined,\n                children: \"Login to access your account\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SignInButton, {\n                onClick: ()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithPopup)(_firebase__WEBPACK_IMPORTED_MODULE_5__.auth, _firebase__WEBPACK_IMPORTED_MODULE_5__.provider)\n                ,\n                __source: {\n                    fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/login.js\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                },\n                __self: undefined,\n                children: \"Sign in with Google\"\n            })\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\nconst Wrapper = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`\nflex flex-col h-screen bg-gray-200 p-4\n`;\nconst SignInButton = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().button)`\nbg-black text-white text-center py-4 mt-8 self-center w-full \n`;\nconst UberLogo = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`\nh-20 w-auto object-contain self-start\n`;\nconst Title = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`\ntext-5xl pt-4 text-gray-500\n`;\nconst HeadImage = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`\nobject-contain w-full \n`;\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDRztBQUUzQyxFQUEwRDtBQUNuQjtBQUN2QyxFQUF3QjtBQUMyQztBQUNuRSxFQUFrQjtBQUMwQjtBQUU1QyxLQUFLLENBQUNRLEtBQUssT0FBUyxDQUFDO0lBQ2pCLEtBQUssQ0FBQ0MsTUFBTSxHQUFHTixzREFBUztJQUV4QkYsZ0RBQVMsS0FBTyxDQUFDO1FBQ2JJLGlFQUFrQixDQUFDQywyQ0FBSSxHQUFFSSxJQUFJLEdBQUksQ0FBQztZQUM5QixFQUFFLEVBQUVBLElBQUksRUFBRSxDQUFDO2dCQUNQRCxNQUFNLENBQUNFLElBQUksQ0FBQyxDQUFHO1lBQ25CLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sdUVBQ0RDLE9BQU87Ozs7Ozs7O2lGQUNIQyxRQUFRO2dCQUFDQyxHQUFHLEVBQUMsQ0FBNkQ7Ozs7Ozs7O2lGQUMxRUMsU0FBUztnQkFBQ0QsR0FBRyxFQUFDLENBQTBDOzs7Ozs7OztpRkFDeERFLEtBQUs7Ozs7Ozs7MEJBQUMsQ0FBNEI7O2lGQUNsQ0MsWUFBWTtnQkFBQ0MsT0FBTyxNQUFRZCw4REFBZSxDQUFDRSwyQ0FBSSxFQUFFQywrQ0FBUTs7Ozs7Ozs7MEJBQUcsQ0FFOUQ7Ozs7QUFHWixDQUFDO0FBRUQsaUVBQWVDLEtBQUssRUFBQztBQUVyQixLQUFLLENBQUNJLE9BQU8sR0FBR1YsdUVBQU0sQ0FBQztBQUd2QixLQUFLLENBQUNlLFlBQVksR0FBR2YsRUFBRSxDQUFDa0IsTUFBTSxDQUFDO0FBRy9CO0FBR0EsS0FBSyxDQUFDSixLQUFLLEdBQUdkLEVBQUUsQ0FBQ2lCLEdBQUcsQ0FBQztBQUdyQixLQUFLLENBQUNKLFNBQVMsR0FBR2IsRUFBRSxDQUFDbUIsR0FBRyxDQUFDLHdCQUV6QiIsInNvdXJjZXMiOlsid2VicGFjazovL3ViZXItbmV4dC1jbG9uZS8uL3BhZ2VzL2xvZ2luLmpzPzgxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR3IGZyb20gXCJ0YWlsd2luZC1zdHlsZWQtY29tcG9uZW50c1wiO1xuXG4vLyBpbXBvcnQgcm91dGVyIHRvIHJvdXRlIGZyb20gZ29vZ2xlIHNpZ24gaW4gdG8gbmV4dCBwYWdlXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG4vLyBwb3B1cCBmb3IgZW1haWwgbG9naW5cbmltcG9ydCB7IHNpZ25JbldpdGhQb3B1cCwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XG4vLyBnb29nbGUgcHJvdmlkZXJcbmltcG9ydCB7IGF1dGgsIHByb3ZpZGVyIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCB1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgICAgPFViZXJMb2dvIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vODRzdGdqcS91YmVyLXRlY2hub2xvZ2llcy1uZXctMjAyMTgxMTQuanBnXCIgLz5cbiAgICAgICAgICAgIDxIZWFkSW1hZ2Ugc3JjPVwiaHR0cHM6Ly9pLmliYi5jby9Dc1Y5UllaL2xvZ2luLWltYWdlLnBuZ1wiLz5cbiAgICAgICAgICAgIDxUaXRsZT5Mb2dpbiB0byBhY2Nlc3MgeW91ciBhY2NvdW50PC9UaXRsZT5cbiAgICAgICAgICAgIDxTaWduSW5CdXR0b24gb25DbGljaz17KCkgPT4gc2lnbkluV2l0aFBvcHVwKGF1dGgsIHByb3ZpZGVyKX0+XG4gICAgICAgICAgICAgICAgU2lnbiBpbiB3aXRoIEdvb2dsZVxuICAgICAgICAgICAgPC9TaWduSW5CdXR0b24+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuXG5jb25zdCBXcmFwcGVyID0gdHcuZGl2YFxuZmxleCBmbGV4LWNvbCBoLXNjcmVlbiBiZy1ncmF5LTIwMCBwLTRcbmBcbmNvbnN0IFNpZ25JbkJ1dHRvbiA9IHR3LmJ1dHRvbmBcbmJnLWJsYWNrIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgcHktNCBtdC04IHNlbGYtY2VudGVyIHctZnVsbCBcbmBcbmNvbnN0IFViZXJMb2dvID0gdHcuaW1nYFxuaC0yMCB3LWF1dG8gb2JqZWN0LWNvbnRhaW4gc2VsZi1zdGFydFxuYFxuY29uc3QgVGl0bGUgPSB0dy5kaXZgXG50ZXh0LTV4bCBwdC00IHRleHQtZ3JheS01MDBcbmBcbmNvbnN0IEhlYWRJbWFnZSA9IHR3LmltZ2Bcbm9iamVjdC1jb250YWluIHctZnVsbCBcbmAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ0dyIsInVzZVJvdXRlciIsInNpZ25JbldpdGhQb3B1cCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImF1dGgiLCJwcm92aWRlciIsIkxvZ2luIiwicm91dGVyIiwidXNlciIsInB1c2giLCJXcmFwcGVyIiwiVWJlckxvZ28iLCJzcmMiLCJIZWFkSW1hZ2UiLCJUaXRsZSIsIlNpZ25JbkJ1dHRvbiIsIm9uQ2xpY2siLCJkaXYiLCJidXR0b24iLCJpbWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n");

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