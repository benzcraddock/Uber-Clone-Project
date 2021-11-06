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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwind-styled-components */ \"./node_modules/tailwind-styled-components/dist/index.js\");\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/map */ \"./pages/components/map.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_RideSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/RideSelector */ \"./pages/components/RideSelector.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\nflex h-screen flex-col\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\nflex-1 flex flex-col h-1/2\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\nborder-t-2\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\nbg-black text-white my-4 mx-4 py-4 text-center text-xl rounded-lg\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\nh-12 cursor-pointer\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Confirm = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var _query = router.query, pickup1 = _query.pickup, dropoff1 = _query.dropoff;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), pickupCoordinates = ref[0], setPickupCoordinates = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), dropoffCoordinates = ref1[0], setDropoffCoordinates = ref1[1];\n    var getPickupCoordinates = function(pickup) {\n        fetch(\"https://api.mapbox.com/geocoding/v5/mapbox.places/\".concat(pickup, \".json?\") + new URLSearchParams({\n            access_token: \"pk.eyJ1IjoiYmNyYWRkb2NrMjkiLCJhIjoiY2t2bG82ZnhkZGcxODJwbW5mdjRuNmFlNSJ9.FTd8KksdZAOWLVhJlEmuJA\",\n            limit: 1\n        })).then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            setPickupCoordinates(data.features[0].center);\n        });\n    };\n    var getDropoffCoordinates = function(dropoff) {\n        fetch(\"https://api.mapbox.com/geocoding/v5/mapbox.places/\".concat(dropoff, \".json?\") + new URLSearchParams({\n            access_token: \"pk.eyJ1IjoiYmNyYWRkb2NrMjkiLCJhIjoiY2t2bG82ZnhkZGcxODJwbW5mdjRuNmFlNSJ9.FTd8KksdZAOWLVhJlEmuJA\",\n            limit: 1\n        })).then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            console.log(\"Dropoff\");\n            setDropoffCoordinates(data.features[0].center);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getPickupCoordinates(pickup1);\n        getDropoffCoordinates(dropoff1);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {\n        __source: {\n            fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/confirm.js\",\n            lineNumber: 49,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                pickupCoordinates: pickupCoordinates,\n                dropoffCoordinates: dropoffCoordinates,\n                __source: {\n                    fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/confirm.js\",\n                    lineNumber: 50,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                href: \"/\",\n                __source: {\n                    fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/confirm.js\",\n                    lineNumber: 55,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BackButton, {\n                    src: \"https://img.icons8.com/ios-filled/50/000000/left.png\",\n                    __source: {\n                        fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/confirm.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RideContainer, {\n                __source: {\n                    fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/confirm.js\",\n                    lineNumber: 59,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_RideSelector__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        __source: {\n                            fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/confirm.js\",\n                            lineNumber: 60,\n                            columnNumber: 17\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ConfirmButtonContainer, {\n                        __source: {\n                            fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/confirm.js\",\n                            lineNumber: 61,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ConfirmButton, {\n                            __source: {\n                                fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/confirm.js\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            },\n                            __self: _this,\n                            children: \"Confirm UberX\"\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Confirm, \"5X2ARnJik3y0g1bU87N8qJA0E/A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Confirm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Confirm);\nvar Wrapper = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div(_templateObject());\n_c1 = Wrapper;\nvar RideContainer = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div(_templateObject1());\n_c2 = RideContainer;\nvar ConfirmButtonContainer = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div(_templateObject2());\n_c3 = ConfirmButtonContainer;\nvar ConfirmButton = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div(_templateObject3());\n_c4 = ConfirmButton;\nvar BackButton = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().img(_templateObject4());\n_c5 = BackButton;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Confirm\");\n$RefreshReg$(_c1, \"Wrapper\");\n$RefreshReg$(_c2, \"RideContainer\");\n$RefreshReg$(_c3, \"ConfirmButtonContainer\");\n$RefreshReg$(_c4, \"ConfirmButton\");\n$RefreshReg$(_c5, \"BackButton\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUFLcEIsQ0FBQztHQTdESzdCLE9BQU87O1FBRU1ILGtEQUFTOzs7S0FGdEJHLE9BQU87QUErRGIsK0RBQWVBLE9BQU8sRUFBQztBQUd2QixHQUFLLENBQUN1QixPQUFPLEdBQUc1QixxRUFBTTtNQUFoQjRCLE9BQU87QUFJYixHQUFLLENBQUNJLGFBQWEsR0FBR2hDLHFFQUFNO01BQXRCZ0MsYUFBYTtBQUluQixHQUFLLENBQUNDLHNCQUFzQixHQUFHakMscUVBQU07TUFBL0JpQyxzQkFBc0I7QUFJNUIsR0FBSyxDQUFDQyxhQUFhLEdBQUdsQyxxRUFBTTtNQUF0QmtDLGFBQWE7QUFHbkIsR0FBSyxDQUFDSixVQUFVLEdBQUc5QixxRUFBTTtNQUFuQjhCLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29uZmlybS5qcz8yYTNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHcgZnJvbSBcInRhaWx3aW5kLXN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgTWFwIGZyb20gJy4vY29tcG9uZW50cy9tYXAnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCBSaWRlU2VsZWN0b3IgZnJvbSAnLi9jb21wb25lbnRzL1JpZGVTZWxlY3Rvcic7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IENvbmZpcm0gPSAoKSA9PiB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IHBpY2t1cCwgZHJvcG9mZiB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gICAgY29uc3QgW3BpY2t1cENvb3JkaW5hdGVzLCBzZXRQaWNrdXBDb29yZGluYXRlc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbZHJvcG9mZkNvb3JkaW5hdGVzLCBzZXREcm9wb2ZmQ29vcmRpbmF0ZXNdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBnZXRQaWNrdXBDb29yZGluYXRlcyA9IChwaWNrdXApID0+IHtcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLm1hcGJveC5jb20vZ2VvY29kaW5nL3Y1L21hcGJveC5wbGFjZXMvJHtwaWNrdXB9Lmpzb24/YCArIFxuICAgICAgICAgICAgbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgICAgICAgICAgYWNjZXNzX3Rva2VuOiBcInBrLmV5SjFJam9pWW1OeVlXUmtiMk5yTWpraUxDSmhJam9pWTJ0MmJHODJabmhrWkdjeE9ESndiVzVtZGpSdU5tRmxOU0o5LkZUZDhLa3NkWkFPV0xWaEpsRW11SkFcIixcbiAgICAgICAgICAgICAgICBsaW1pdDogMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UGlja3VwQ29vcmRpbmF0ZXMoZGF0YS5mZWF0dXJlc1swXS5jZW50ZXIpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBnZXREcm9wb2ZmQ29vcmRpbmF0ZXMgPSAoZHJvcG9mZikgPT4ge1xuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9nZW9jb2RpbmcvdjUvbWFwYm94LnBsYWNlcy8ke2Ryb3BvZmZ9Lmpzb24/YCArIFxuICAgICAgICAgICAgbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgICAgICAgICAgYWNjZXNzX3Rva2VuOiBcInBrLmV5SjFJam9pWW1OeVlXUmtiMk5yTWpraUxDSmhJam9pWTJ0MmJHODJabmhrWkdjeE9ESndiVzVtZGpSdU5tRmxOU0o5LkZUZDhLa3NkWkFPV0xWaEpsRW11SkFcIixcbiAgICAgICAgICAgICAgICBsaW1pdDogMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEcm9wb2ZmXCIpXG4gICAgICAgICAgICAgICAgc2V0RHJvcG9mZkNvb3JkaW5hdGVzKGRhdGEuZmVhdHVyZXNbMF0uY2VudGVyKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0UGlja3VwQ29vcmRpbmF0ZXMocGlja3VwKTtcbiAgICAgICAgZ2V0RHJvcG9mZkNvb3JkaW5hdGVzKGRyb3BvZmYpO1xuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgICA8TWFwXG4gICAgICAgICAgICAgICAgcGlja3VwQ29vcmRpbmF0ZXM9e3BpY2t1cENvb3JkaW5hdGVzfVxuICAgICAgICAgICAgICAgIGRyb3BvZmZDb29yZGluYXRlcz17ZHJvcG9mZkNvb3JkaW5hdGVzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsvKiogTGluayBmb3IgQmFjayBidXR0b24gdG8gZ28gYmFjayB0byBTRUFSQ0ggcGFnZSAqL31cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cbiAgICAgICAgICAgICAgICA8QmFja0J1dHRvbiBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy1maWxsZWQvNTAvMDAwMDAwL2xlZnQucG5nXCIgLz5cbiAgICAgICAgICAgICAgICB7LyoqIGxpbmsgdGhlIGJhY2sgYnV0dG9uICovfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxSaWRlQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxSaWRlU2VsZWN0b3IgLz5cbiAgICAgICAgICAgICAgICA8Q29uZmlybUJ1dHRvbkNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPENvbmZpcm1CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtIFViZXJYXG4gICAgICAgICAgICAgICAgICAgIDwvQ29uZmlybUJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0NvbmZpcm1CdXR0b25Db250YWluZXI+XG4gICAgICAgICAgICA8L1JpZGVDb250YWluZXI+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpcm07XG5cblxuY29uc3QgV3JhcHBlciA9IHR3LmRpdmBcbmZsZXggaC1zY3JlZW4gZmxleC1jb2xcbmBcblxuY29uc3QgUmlkZUNvbnRhaW5lciA9IHR3LmRpdmBcbmZsZXgtMSBmbGV4IGZsZXgtY29sIGgtMS8yXG5gXG5cbmNvbnN0IENvbmZpcm1CdXR0b25Db250YWluZXIgPSB0dy5kaXZgXG5ib3JkZXItdC0yXG5gXG5cbmNvbnN0IENvbmZpcm1CdXR0b24gPSB0dy5kaXZgXG5iZy1ibGFjayB0ZXh0LXdoaXRlIG15LTQgbXgtNCBweS00IHRleHQtY2VudGVyIHRleHQteGwgcm91bmRlZC1sZ1xuYFxuY29uc3QgQmFja0J1dHRvbiA9IHR3LmltZ2BcbmgtMTIgY3Vyc29yLXBvaW50ZXJcbmAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInR3IiwiTWFwIiwidXNlUm91dGVyIiwiUmlkZVNlbGVjdG9yIiwiTGluayIsIkNvbmZpcm0iLCJyb3V0ZXIiLCJxdWVyeSIsInBpY2t1cCIsImRyb3BvZmYiLCJwaWNrdXBDb29yZGluYXRlcyIsInNldFBpY2t1cENvb3JkaW5hdGVzIiwiZHJvcG9mZkNvb3JkaW5hdGVzIiwic2V0RHJvcG9mZkNvb3JkaW5hdGVzIiwiZ2V0UGlja3VwQ29vcmRpbmF0ZXMiLCJmZXRjaCIsIlVSTFNlYXJjaFBhcmFtcyIsImFjY2Vzc190b2tlbiIsImxpbWl0IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJmZWF0dXJlcyIsImNlbnRlciIsImdldERyb3BvZmZDb29yZGluYXRlcyIsImNvbnNvbGUiLCJsb2ciLCJXcmFwcGVyIiwiaHJlZiIsIkJhY2tCdXR0b24iLCJzcmMiLCJSaWRlQ29udGFpbmVyIiwiQ29uZmlybUJ1dHRvbkNvbnRhaW5lciIsIkNvbmZpcm1CdXR0b24iLCJkaXYiLCJpbWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/confirm.js\n");

/***/ })

});