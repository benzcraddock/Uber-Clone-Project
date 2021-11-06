"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/confirm",{

/***/ "./pages/confirm.js":
/*!**************************!*\
  !*** ./pages/confirm.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwind-styled-components */ \"./node_modules/tailwind-styled-components/dist/index.js\");\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/map */ \"./pages/components/map.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\nflex-1\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\nflex h-screen flex-col\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Confirm = function() {\n    _s();\n    var getPickupCoordinates = function() {\n        var location = \"Santa Monica\";\n        fetch(\"https://api.mapbox.com/geocoding/v5/mapbox.places/\".concat(location, \".json?\") + new URLSearchParams({\n            access_token: \"pk.eyJ1IjoiYmNyYWRkb2NrMjkiLCJhIjoiY2t2bG82ZnhkZGcxODJwbW5mdjRuNmFlNSJ9.FTd8KksdZAOWLVhJlEmuJA\",\n            limit: 1\n        })).then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            console.log(data.features[0].center);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getPickupCoordinates();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {\n        __source: {\n            fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/confirm.js\",\n            lineNumber: 28,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/confirm.js\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RideContainer, {\n                __source: {\n                    fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/confirm.js\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Ride Selector Confirm Button\"\n            })\n        ]\n    }));\n};\n_s(Confirm, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Confirm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Confirm);\nvar RideContainer = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div(_templateObject());\n_c1 = RideContainer;\nvar Wrapper = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div(_templateObject1());\n_c2 = Wrapper;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Confirm\");\n$RefreshReg$(_c1, \"RideContainer\");\n$RefreshReg$(_c2, \"Wrapper\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb25maXJtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDRztBQUNUOzs7Ozs7Ozs7Ozs7OztRQXNDTCxDQUU3Qjs7Ozs7Ozs7O1FBRXVCLENBRXZCOzs7Ozs7OztBQTFDQSxHQUFLLENBQUNJLE9BQU8sR0FBRyxRQUNoQixHQURzQixDQUFDOztJQUVuQixHQUFLLENBQUNDLG9CQUFvQixHQUFHLFFBQ2pDLEdBRHVDLENBQUM7UUFDaEMsR0FBSyxDQUFDQyxRQUFRLEdBQUcsQ0FBYztRQUMvQkMsS0FBSyxDQUFFLENBQWtELG9EQUFXLE1BQU0sQ0FBZkQsUUFBUSxFQUFDLENBQU0sV0FDdEUsR0FBRyxDQUFDRSxlQUFlLENBQUMsQ0FBQztZQUNqQkMsWUFBWSxFQUFFLENBQWdHO1lBQzlHQyxLQUFLLEVBQUUsQ0FBQztRQUNaLENBQUMsR0FFQUMsSUFBSSxDQUFDQyxRQUFRLENBQVJBLFFBQVE7WUFBSUEsTUFBTSxDQUFOQSxRQUFRLENBQUNDLElBQUk7V0FDOUJGLElBQUksQ0FBQ0csUUFBUSxDQUFSQSxJQUFJLEVBQUksQ0FBQztZQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDRyxRQUFRLENBQUMsQ0FBQyxFQUFFQyxNQUFNO1FBQ3ZDLENBQUM7SUFDVCxDQUFDO0lBR0RqQixnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNiSSxvQkFBb0I7SUFDeEIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUdMLE1BQU0sdUVBQ0RjLE9BQU87Ozs7Ozs7O2lGQUNIaEIsdURBQUc7Ozs7Ozs7O2lGQUNIaUIsYUFBYTs7Ozs7OzswQkFBQyxDQUlmOzs7O0FBR1osQ0FBQztHQWhDS2hCLE9BQU87S0FBUEEsT0FBTztBQWtDYiwrREFBZUEsT0FBTyxFQUFDO0FBRXZCLEdBQUssQ0FBQ2dCLGFBQWEsR0FBR2xCLHFFQUFNO01BQXRCa0IsYUFBYTtBQUluQixHQUFLLENBQUNELE9BQU8sR0FBR2pCLHFFQUFNO01BQWhCaUIsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb25maXJtLmpzPzJhM2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR3IGZyb20gXCJ0YWlsd2luZC1zdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IE1hcCBmcm9tICcuL2NvbXBvbmVudHMvbWFwJztcblxuY29uc3QgQ29uZmlybSA9ICgpID0+IHtcblxuICAgIGNvbnN0IGdldFBpY2t1cENvb3JkaW5hdGVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IFwiU2FudGEgTW9uaWNhXCI7XG4gICAgICAgIGZldGNoKGBodHRwczovL2FwaS5tYXBib3guY29tL2dlb2NvZGluZy92NS9tYXBib3gucGxhY2VzLyR7bG9jYXRpb259Lmpzb24/YCArIFxuICAgICAgICAgICAgbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgICAgICAgICAgYWNjZXNzX3Rva2VuOiBcInBrLmV5SjFJam9pWW1OeVlXUmtiMk5yTWpraUxDSmhJam9pWTJ0MmJHODJabmhrWkdjeE9ESndiVzVtZGpSdU5tRmxOU0o5LkZUZDhLa3NkWkFPV0xWaEpsRW11SkFcIixcbiAgICAgICAgICAgICAgICBsaW1pdDogMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5mZWF0dXJlc1swXS5jZW50ZXIpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldFBpY2t1cENvb3JkaW5hdGVzKCk7XG4gICAgfSwgW10pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgICAgPE1hcCAvPlxuICAgICAgICAgICAgPFJpZGVDb250YWluZXI+XG4gICAgICAgICAgICAgICAgUmlkZSBTZWxlY3RvclxuICAgICAgICAgICAgICAgIENvbmZpcm0gQnV0dG9uXG5cbiAgICAgICAgICAgIDwvUmlkZUNvbnRhaW5lcj5cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybTtcblxuY29uc3QgUmlkZUNvbnRhaW5lciA9IHR3LmRpdmBcbmZsZXgtMVxuYFxuXG5jb25zdCBXcmFwcGVyID0gdHcuZGl2YFxuZmxleCBoLXNjcmVlbiBmbGV4LWNvbFxuYCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInR3IiwiTWFwIiwiQ29uZmlybSIsImdldFBpY2t1cENvb3JkaW5hdGVzIiwibG9jYXRpb24iLCJmZXRjaCIsIlVSTFNlYXJjaFBhcmFtcyIsImFjY2Vzc190b2tlbiIsImxpbWl0IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZmVhdHVyZXMiLCJjZW50ZXIiLCJXcmFwcGVyIiwiUmlkZUNvbnRhaW5lciIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/confirm.js\n");

/***/ })

});