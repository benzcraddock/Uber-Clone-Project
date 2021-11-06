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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwind-styled-components */ \"./node_modules/tailwind-styled-components/dist/index.js\");\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/map */ \"./pages/components/map.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\nflex-1\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\nflex h-screen flex-col\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Confirm = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var _query = router.query, pickup1 = _query.pickup, dropoff1 = _query.dropoff;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), pickupCoordinates = ref[0], setPickupCoordinates = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), dropoffCoordinates = ref1[0], setDropoffCoordinates = ref1[1];\n    var getPickupCoordinates = function(pickup) {\n        fetch(\"https://api.mapbox.com/geocoding/v5/mapbox.places/\".concat(pickup, \".json?\") + new URLSearchParams({\n            access_token: \"pk.eyJ1IjoiYmNyYWRkb2NrMjkiLCJhIjoiY2t2bG82ZnhkZGcxODJwbW5mdjRuNmFlNSJ9.FTd8KksdZAOWLVhJlEmuJA\",\n            limit: 1\n        })).then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            setPickupCoordinates(data.features[0].center);\n        });\n    };\n    var getDropoffCoordinates = function(dropoff) {\n        fetch(\"https://api.mapbox.com/geocoding/v5/mapbox.places/\".concat(dropoff, \".json?\") + new URLSearchParams({\n            access_token: \"pk.eyJ1IjoiYmNyYWRkb2NrMjkiLCJhIjoiY2t2bG82ZnhkZGcxODJwbW5mdjRuNmFlNSJ9.FTd8KksdZAOWLVhJlEmuJA\",\n            limit: 1\n        })).then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            console.log(\"Dropoff\");\n            setDropoffCoordinates(data.features[0].center);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getPickupCoordinates(pickup1);\n        getDropoffCoordinates(dropoff1);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {\n        __source: {\n            fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/confirm.js\",\n            lineNumber: 47,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                pickupCoordinates: pickupCoordinates,\n                dropoffCoordinates: dropoffCoordinates,\n                __source: {\n                    fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/confirm.js\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RideContainer, {\n                __source: {\n                    fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/confirm.js\",\n                    lineNumber: 52,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RideSelector, {\n                    __source: {\n                        fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/confirm.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    },\n                    __self: _this\n                })\n            })\n        ]\n    }));\n};\n_s(Confirm, \"5X2ARnJik3y0g1bU87N8qJA0E/A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Confirm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Confirm);\nvar RideContainer = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div(_templateObject());\n_c1 = RideContainer;\nvar Wrapper = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div(_templateObject1());\n_c2 = Wrapper;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Confirm\");\n$RefreshReg$(_c1, \"RideContainer\");\n$RefreshReg$(_c2, \"Wrapper\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb25maXJtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNQO0FBQ1Q7QUFDSzs7Ozs7Ozs7Ozs7Ozs7UUE2RFYsQ0FFN0I7Ozs7Ozs7OztRQUV1QixDQUV2Qjs7Ozs7Ozs7QUFqRUEsR0FBSyxDQUFDTSxPQUFPLEdBQUcsUUFDaEIsR0FEc0IsQ0FBQzs7SUFFbkIsR0FBSyxDQUFDQyxNQUFNLEdBQUdGLHNEQUFTO0lBQ3hCLEdBQUssQ0FBdUJFLE1BQVksR0FBWkEsTUFBTSxDQUFDQyxLQUFLLEVBQWhDQyxPQUFNLEdBQWNGLE1BQVksQ0FBaENFLE1BQU0sRUFBRUMsUUFBTyxHQUFLSCxNQUFZLENBQXhCRyxPQUFPO0lBRXZCLEdBQUssQ0FBNkNSLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQXREUyxpQkFBaUIsR0FBMEJULEdBQVksS0FBcENVLG9CQUFvQixHQUFJVixHQUFZO0lBQzlELEdBQUssQ0FBK0NBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQXhEVyxrQkFBa0IsR0FBMkJYLElBQVksS0FBckNZLHFCQUFxQixHQUFJWixJQUFZO0lBRWhFLEdBQUssQ0FBQ2Esb0JBQW9CLEdBQUcsUUFBUSxDQUFQTixNQUFNLEVBQUssQ0FBQztRQUN0Q08sS0FBSyxDQUFFLENBQWtELG9EQUFTLE1BQU0sQ0FBYlAsTUFBTSxFQUFDLENBQU0sV0FDcEUsR0FBRyxDQUFDUSxlQUFlLENBQUMsQ0FBQztZQUNqQkMsWUFBWSxFQUFFLENBQWdHO1lBQzlHQyxLQUFLLEVBQUUsQ0FBQztRQUNaLENBQUMsR0FFQUMsSUFBSSxDQUFDQyxRQUFRLENBQVJBLFFBQVE7WUFBSUEsTUFBTSxDQUFOQSxRQUFRLENBQUNDLElBQUk7V0FDOUJGLElBQUksQ0FBQ0csUUFBUSxDQUFSQSxJQUFJLEVBQUksQ0FBQztZQUNYWCxvQkFBb0IsQ0FBQ1csSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFFQyxNQUFNO1FBQ2hELENBQUM7SUFDVCxDQUFDO0lBRUQsR0FBSyxDQUFDQyxxQkFBcUIsR0FBRyxRQUFRLENBQVBoQixPQUFPLEVBQUssQ0FBQztRQUN4Q00sS0FBSyxDQUFFLENBQWtELG9EQUFVLE1BQU0sQ0FBZE4sT0FBTyxFQUFDLENBQU0sV0FDckUsR0FBRyxDQUFDTyxlQUFlLENBQUMsQ0FBQztZQUNqQkMsWUFBWSxFQUFFLENBQWdHO1lBQzlHQyxLQUFLLEVBQUUsQ0FBQztRQUNaLENBQUMsR0FFQUMsSUFBSSxDQUFDQyxRQUFRLENBQVJBLFFBQVE7WUFBSUEsTUFBTSxDQUFOQSxRQUFRLENBQUNDLElBQUk7V0FDOUJGLElBQUksQ0FBQ0csUUFBUSxDQUFSQSxJQUFJLEVBQUksQ0FBQztZQUNYSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFTO1lBQ3JCZCxxQkFBcUIsQ0FBQ1MsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxFQUFFQyxNQUFNO1FBQ2pELENBQUM7SUFDVCxDQUFDO0lBRUR4QixnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNiYyxvQkFBb0IsQ0FBQ04sT0FBTTtRQUMzQmlCLHFCQUFxQixDQUFDaEIsUUFBTztJQUNqQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSx1RUFDRG1CLE9BQU87Ozs7Ozs7O2lGQUNIekIsdURBQUc7Z0JBQ0FPLGlCQUFpQixFQUFFQSxpQkFBaUI7Z0JBQ3BDRSxrQkFBa0IsRUFBRUEsa0JBQWtCOzs7Ozs7OztpRkFFekNpQixhQUFhOzs7Ozs7OytGQUNUQyxZQUFZOzs7Ozs7Ozs7OztBQVE3QixDQUFDO0dBdkRLekIsT0FBTzs7UUFFTUQsa0RBQVM7OztLQUZ0QkMsT0FBTztBQXlEYiwrREFBZUEsT0FBTyxFQUFDO0FBRXZCLEdBQUssQ0FBQ3dCLGFBQWEsR0FBRzNCLHFFQUFNO01BQXRCMkIsYUFBYTtBQUluQixHQUFLLENBQUNELE9BQU8sR0FBRzFCLHFFQUFNO01BQWhCMEIsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb25maXJtLmpzPzJhM2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0dyBmcm9tIFwidGFpbHdpbmQtc3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBNYXAgZnJvbSAnLi9jb21wb25lbnRzL21hcCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuXG5jb25zdCBDb25maXJtID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBwaWNrdXAsIGRyb3BvZmYgfSA9IHJvdXRlci5xdWVyeTtcblxuICAgIGNvbnN0IFtwaWNrdXBDb29yZGluYXRlcywgc2V0UGlja3VwQ29vcmRpbmF0ZXNdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2Ryb3BvZmZDb29yZGluYXRlcywgc2V0RHJvcG9mZkNvb3JkaW5hdGVzXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgZ2V0UGlja3VwQ29vcmRpbmF0ZXMgPSAocGlja3VwKSA9PiB7XG4gICAgICAgIGZldGNoKGBodHRwczovL2FwaS5tYXBib3guY29tL2dlb2NvZGluZy92NS9tYXBib3gucGxhY2VzLyR7cGlja3VwfS5qc29uP2AgKyBcbiAgICAgICAgICAgIG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICAgICAgICAgIGFjY2Vzc190b2tlbjogXCJway5leUoxSWpvaVltTnlZV1JrYjJOck1qa2lMQ0poSWpvaVkydDJiRzgyWm5oa1pHY3hPREp3Ylc1bWRqUnVObUZsTlNKOS5GVGQ4S2tzZFpBT1dMVmhKbEVtdUpBXCIsXG4gICAgICAgICAgICAgICAgbGltaXQ6IDFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHNldFBpY2t1cENvb3JkaW5hdGVzKGRhdGEuZmVhdHVyZXNbMF0uY2VudGVyKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RHJvcG9mZkNvb3JkaW5hdGVzID0gKGRyb3BvZmYpID0+IHtcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLm1hcGJveC5jb20vZ2VvY29kaW5nL3Y1L21hcGJveC5wbGFjZXMvJHtkcm9wb2ZmfS5qc29uP2AgKyBcbiAgICAgICAgICAgIG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICAgICAgICAgIGFjY2Vzc190b2tlbjogXCJway5leUoxSWpvaVltTnlZV1JrYjJOck1qa2lMQ0poSWpvaVkydDJiRzgyWm5oa1pHY3hPREp3Ylc1bWRqUnVObUZsTlNKOS5GVGQ4S2tzZFpBT1dMVmhKbEVtdUpBXCIsXG4gICAgICAgICAgICAgICAgbGltaXQ6IDFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcG9mZlwiKVxuICAgICAgICAgICAgICAgIHNldERyb3BvZmZDb29yZGluYXRlcyhkYXRhLmZlYXR1cmVzWzBdLmNlbnRlcik7XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldFBpY2t1cENvb3JkaW5hdGVzKHBpY2t1cCk7XG4gICAgICAgIGdldERyb3BvZmZDb29yZGluYXRlcyhkcm9wb2ZmKTtcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgICAgPE1hcFxuICAgICAgICAgICAgICAgIHBpY2t1cENvb3JkaW5hdGVzPXtwaWNrdXBDb29yZGluYXRlc31cbiAgICAgICAgICAgICAgICBkcm9wb2ZmQ29vcmRpbmF0ZXM9e2Ryb3BvZmZDb29yZGluYXRlc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UmlkZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8UmlkZVNlbGVjdG9yPlxuXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvUmlkZVNlbGVjdG9yPlxuXG4gICAgICAgICAgICA8L1JpZGVDb250YWluZXI+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpcm07XG5cbmNvbnN0IFJpZGVDb250YWluZXIgPSB0dy5kaXZgXG5mbGV4LTFcbmBcblxuY29uc3QgV3JhcHBlciA9IHR3LmRpdmBcbmZsZXggaC1zY3JlZW4gZmxleC1jb2xcbmAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInR3IiwiTWFwIiwidXNlUm91dGVyIiwiQ29uZmlybSIsInJvdXRlciIsInF1ZXJ5IiwicGlja3VwIiwiZHJvcG9mZiIsInBpY2t1cENvb3JkaW5hdGVzIiwic2V0UGlja3VwQ29vcmRpbmF0ZXMiLCJkcm9wb2ZmQ29vcmRpbmF0ZXMiLCJzZXREcm9wb2ZmQ29vcmRpbmF0ZXMiLCJnZXRQaWNrdXBDb29yZGluYXRlcyIsImZldGNoIiwiVVJMU2VhcmNoUGFyYW1zIiwiYWNjZXNzX3Rva2VuIiwibGltaXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImZlYXR1cmVzIiwiY2VudGVyIiwiZ2V0RHJvcG9mZkNvb3JkaW5hdGVzIiwiY29uc29sZSIsImxvZyIsIldyYXBwZXIiLCJSaWRlQ29udGFpbmVyIiwiUmlkZVNlbGVjdG9yIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/confirm.js\n");

/***/ })

});