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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwind-styled-components */ \"./node_modules/tailwind-styled-components/dist/index.js\");\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/map */ \"./pages/components/map.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\nflex-1\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\nflex h-screen flex-col\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Confirm = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var _query = router.query, pickup1 = _query.pickup, dropoff1 = _query.dropoff;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), pickupCoordinates = ref[0], setPickupCoordinates = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), dropoffCoordinates = ref1[0], setDropoffCoordinates = ref1[1];\n    var getPickupCoordinates = function() {\n        var pickup = \"Santa Monica\";\n        fetch(\"https://api.mapbox.com/geocoding/v5/mapbox.places/\".concat(pickup, \".json?\") + new URLSearchParams({\n            access_token: \"pk.eyJ1IjoiYmNyYWRkb2NrMjkiLCJhIjoiY2t2bG82ZnhkZGcxODJwbW5mdjRuNmFlNSJ9.FTd8KksdZAOWLVhJlEmuJA\",\n            limit: 1\n        })).then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            setPickupCoordinates(data.features[0].center);\n        });\n    };\n    var getDropoffCoordinates = function() {\n        var dropoff = \"Los Angeles\";\n        fetch(\"https://api.mapbox.com/geocoding/v5/mapbox.places/\".concat(dropoff, \".json?\") + new URLSearchParams({\n            access_token: \"pk.eyJ1IjoiYmNyYWRkb2NrMjkiLCJhIjoiY2t2bG82ZnhkZGcxODJwbW5mdjRuNmFlNSJ9.FTd8KksdZAOWLVhJlEmuJA\",\n            limit: 1\n        })).then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            console.log(\"Dropoff\");\n            setDropoffCoordinates(data.features[0].center);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getPickupCoordinates();\n        getDropoffCoordinates();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {\n        __source: {\n            fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/confirm.js\",\n            lineNumber: 52,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/confirm.js\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            \"pickupCoordinates=\",\n            pickupCoordinates,\n            \"dropoffCoordinates=\",\n            dropoffCoordinates,\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RideContainer, {\n                __source: {\n                    fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/confirm.js\",\n                    lineNumber: 56,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Ride Selector Confirm Button\"\n            })\n        ]\n    }));\n};\n_s(Confirm, \"5X2ARnJik3y0g1bU87N8qJA0E/A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Confirm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Confirm);\nvar RideContainer = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div(_templateObject());\n_c1 = RideContainer;\nvar Wrapper = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div(_templateObject1());\n_c2 = Wrapper;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Confirm\");\n$RefreshReg$(_c1, \"RideContainer\");\n$RefreshReg$(_c2, \"Wrapper\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZmlybS5qcz8yYTNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHcgZnJvbSBcInRhaWx3aW5kLXN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgTWFwIGZyb20gJy4vY29tcG9uZW50cy9tYXAnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcblxuY29uc3QgQ29uZmlybSA9ICgpID0+IHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgeyBwaWNrdXAsIGRyb3BvZmYgfSA9IHJvdXRlci5xdWVyeTtcblxuICAgIGNvbnN0IFtwaWNrdXBDb29yZGluYXRlcywgc2V0UGlja3VwQ29vcmRpbmF0ZXNdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2Ryb3BvZmZDb29yZGluYXRlcywgc2V0RHJvcG9mZkNvb3JkaW5hdGVzXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgZ2V0UGlja3VwQ29vcmRpbmF0ZXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBpY2t1cCA9IFwiU2FudGEgTW9uaWNhXCI7XG4gICAgICAgIGZldGNoKGBodHRwczovL2FwaS5tYXBib3guY29tL2dlb2NvZGluZy92NS9tYXBib3gucGxhY2VzLyR7cGlja3VwfS5qc29uP2AgKyBcbiAgICAgICAgICAgIG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICAgICAgICAgIGFjY2Vzc190b2tlbjogXCJway5leUoxSWpvaVltTnlZV1JrYjJOck1qa2lMQ0poSWpvaVkydDJiRzgyWm5oa1pHY3hPREp3Ylc1bWRqUnVObUZsTlNKOS5GVGQ4S2tzZFpBT1dMVmhKbEVtdUpBXCIsXG4gICAgICAgICAgICAgICAgbGltaXQ6IDFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHNldFBpY2t1cENvb3JkaW5hdGVzKGRhdGEuZmVhdHVyZXNbMF0uY2VudGVyKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RHJvcG9mZkNvb3JkaW5hdGVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkcm9wb2ZmID0gXCJMb3MgQW5nZWxlc1wiO1xuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9nZW9jb2RpbmcvdjUvbWFwYm94LnBsYWNlcy8ke2Ryb3BvZmZ9Lmpzb24/YCArIFxuICAgICAgICAgICAgbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgICAgICAgICAgYWNjZXNzX3Rva2VuOiBcInBrLmV5SjFJam9pWW1OeVlXUmtiMk5yTWpraUxDSmhJam9pWTJ0MmJHODJabmhrWkdjeE9ESndiVzVtZGpSdU5tRmxOU0o5LkZUZDhLa3NkWkFPV0xWaEpsRW11SkFcIixcbiAgICAgICAgICAgICAgICBsaW1pdDogMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEcm9wb2ZmXCIpXG4gICAgICAgICAgICAgICAgc2V0RHJvcG9mZkNvb3JkaW5hdGVzKGRhdGEuZmVhdHVyZXNbMF0uY2VudGVyKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0UGlja3VwQ29vcmRpbmF0ZXMoKTtcbiAgICAgICAgZ2V0RHJvcG9mZkNvb3JkaW5hdGVzKCk7XG4gICAgfSwgW10pXG5cbiAgICBcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgICA8TWFwIC8+XG4gICAgICAgICAgICAgICAgcGlja3VwQ29vcmRpbmF0ZXM9e3BpY2t1cENvb3JkaW5hdGVzfVxuICAgICAgICAgICAgICAgIGRyb3BvZmZDb29yZGluYXRlcz17ZHJvcG9mZkNvb3JkaW5hdGVzfVxuICAgICAgICAgICAgPFJpZGVDb250YWluZXI+XG4gICAgICAgICAgICAgICAgUmlkZSBTZWxlY3RvclxuICAgICAgICAgICAgICAgIENvbmZpcm0gQnV0dG9uXG5cbiAgICAgICAgICAgIDwvUmlkZUNvbnRhaW5lcj5cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybTtcblxuY29uc3QgUmlkZUNvbnRhaW5lciA9IHR3LmRpdmBcbmZsZXgtMVxuYFxuXG5jb25zdCBXcmFwcGVyID0gdHcuZGl2YFxuZmxleCBoLXNjcmVlbiBmbGV4LWNvbFxuYCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidHciLCJNYXAiLCJ1c2VSb3V0ZXIiLCJDb25maXJtIiwicm91dGVyIiwicXVlcnkiLCJwaWNrdXAiLCJkcm9wb2ZmIiwicGlja3VwQ29vcmRpbmF0ZXMiLCJzZXRQaWNrdXBDb29yZGluYXRlcyIsImRyb3BvZmZDb29yZGluYXRlcyIsInNldERyb3BvZmZDb29yZGluYXRlcyIsImdldFBpY2t1cENvb3JkaW5hdGVzIiwiZmV0Y2giLCJVUkxTZWFyY2hQYXJhbXMiLCJhY2Nlc3NfdG9rZW4iLCJsaW1pdCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZmVhdHVyZXMiLCJjZW50ZXIiLCJnZXREcm9wb2ZmQ29vcmRpbmF0ZXMiLCJjb25zb2xlIiwibG9nIiwiV3JhcHBlciIsIlJpZGVDb250YWluZXIiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/confirm.js\n");

/***/ })

});