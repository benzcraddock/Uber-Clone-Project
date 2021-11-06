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

/***/ "./pages/components/map.js":
/*!*********************************!*\
  !*** ./pages/components/map.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwind-styled-components */ \"./node_modules/tailwind-styled-components/dist/index.js\");\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mapbox_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !mapbox-gl */ \"./node_modules/mapbox-gl/dist/mapbox-gl.js\");\n/* harmony import */ var _mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mapbox_gl__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    flex-1\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\n(_mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default().accessToken) = 'pk.eyJ1IjoiYmNyYWRkb2NrMjkiLCJhIjoiY2t2bG82ZnhkZGcxODJwbW5mdjRuNmFlNSJ9.FTd8KksdZAOWLVhJlEmuJA';\nvar Map = function() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var map = new (_mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default().Map)({\n            container: \"map\",\n            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',\n            center: [\n                -99.29011,\n                39.39172\n            ],\n            zoom: 3\n        });\n    }, []);\n    var addToMap = function(map) {\n        var marker1 = new (_mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default().Marker)().setLngLat([\n            12.554729,\n            55.70651\n        ]).addTo(map);\n    };\n    addToMap(map);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Wrapper, {\n        id: \"map\",\n        __source: {\n            fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/components/map.js\",\n            lineNumber: 28,\n            columnNumber: 9\n        },\n        __self: _this\n    }));\n};\n_s(Map, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n/** Map Styling */ var Wrapper = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div(_templateObject());\n_c1 = Wrapper;\nvar _c, _c1;\n$RefreshReg$(_c, \"Map\");\n$RefreshReg$(_c1, \"Wrapper\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL21hcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QztBQUNHO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7O1FBaUNWLENBRXZCOzs7Ozs7OztBQWpDQUcsK0RBQW9CLEdBQUcsQ0FBZ0c7QUFFdkgsR0FBSyxDQUFDRSxHQUFHLEdBQUcsUUFDWixHQURrQixDQUFDOztJQUNmSixnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNiLEdBQUssQ0FBQ0ssR0FBRyxHQUFHLEdBQUcsQ0FBQ0gsdURBQVksQ0FBQyxDQUFDO1lBQzVCSSxTQUFTLEVBQUUsQ0FBSztZQUNoQkMsS0FBSyxFQUFFLENBQW1EO1lBQzFEQyxNQUFNLEVBQUUsQ0FBQztpQkFBQyxRQUFRO2dCQUFFLFFBQVE7WUFBQSxDQUFDO1lBQzdCQyxJQUFJLEVBQUUsQ0FBQztRQUNQLENBQUM7SUFDUCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBSUwsR0FBSyxDQUFDQyxRQUFRLEdBQUcsUUFBUSxDQUFQTCxHQUFHLEVBQUssQ0FBQztRQUN2QixHQUFLLENBQUNNLE9BQU8sR0FBRyxHQUFHLENBQUNULDBEQUFlLEdBQ2xDVyxTQUFTLENBQUMsQ0FBQztZQUFBLFNBQVM7WUFBRSxRQUFRO1FBQUEsQ0FBQyxFQUMvQkMsS0FBSyxDQUFDVCxHQUFHO0lBQ2QsQ0FBQztJQUVESyxRQUFRLENBQUNMLEdBQUc7SUFFWixNQUFNLHNFQUNEVSxPQUFPO1FBQUNDLEVBQUUsRUFBQyxDQUFLOzs7Ozs7OztBQUd6QixDQUFDO0dBeEJLWixHQUFHO0tBQUhBLEdBQUc7QUEwQlQsK0RBQWVBLEdBQUcsRUFBQztBQUVuQixFQUFrQixpQkFDbEIsR0FBSyxDQUFDVyxPQUFPLEdBQUdkLHFFQUFNO01BQWhCYyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvbWFwLmpzPzBiMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0dyBmcm9tIFwidGFpbHdpbmQtc3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBtYXBib3hnbCBmcm9tIFwiIW1hcGJveC1nbFwiO1xuXG5tYXBib3hnbC5hY2Nlc3NUb2tlbiA9ICdway5leUoxSWpvaVltTnlZV1JrYjJOck1qa2lMQ0poSWpvaVkydDJiRzgyWm5oa1pHY3hPREp3Ylc1bWRqUnVObUZsTlNKOS5GVGQ4S2tzZFpBT1dMVmhKbEVtdUpBJztcblxuY29uc3QgTWFwID0gKCkgPT4ge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xuICAgICAgICAgIGNvbnRhaW5lcjogXCJtYXBcIixcbiAgICAgICAgICBzdHlsZTogJ21hcGJveDovL3N0eWxlcy9kcmFrb3NpL2NrdmN3cTNyd2R3NDMxNG8zaTJobzh0cGgnLFxuICAgICAgICAgIGNlbnRlcjogWy05OS4yOTAxMSwgMzkuMzkxNzJdLFxuICAgICAgICAgIHpvb206IDMsXG4gICAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgXG5cbiAgICBjb25zdCBhZGRUb01hcCA9IChtYXApID0+IHtcbiAgICAgICAgY29uc3QgbWFya2VyMSA9IG5ldyBtYXBib3hnbC5NYXJrZXIoKVxuICAgICAgICAuc2V0TG5nTGF0KFsxMi41NTQ3MjksIDU1LjcwNjUxXSlcbiAgICAgICAgLmFkZFRvKG1hcCk7XG4gICAgfVxuXG4gICAgYWRkVG9NYXAobWFwKTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcHBlciBpZD0nbWFwJz5cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwO1xuXG4vKiogTWFwIFN0eWxpbmcgKi9cbmNvbnN0IFdyYXBwZXIgPSB0dy5kaXZgXG4gICAgZmxleC0xXG5gIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidHciLCJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwiTWFwIiwibWFwIiwiY29udGFpbmVyIiwic3R5bGUiLCJjZW50ZXIiLCJ6b29tIiwiYWRkVG9NYXAiLCJtYXJrZXIxIiwiTWFya2VyIiwic2V0TG5nTGF0IiwiYWRkVG8iLCJXcmFwcGVyIiwiaWQiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/map.js\n");

/***/ })

});