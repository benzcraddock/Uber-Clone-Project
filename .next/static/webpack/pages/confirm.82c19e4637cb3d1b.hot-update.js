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

/***/ "./pages/components/RideSelector.js":
/*!******************************************!*\
  !*** ./pages/components/RideSelector.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwind-styled-components */ \"./node_modules/tailwind-styled-components/dist/index.js\");\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_carList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/carList */ \"./pages/data/carList.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\nflex-1 overflow-y-scroll\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\ntext-gray-500 text-center text-xs py-2 border-b\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\noverflow-y-scroll\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\nflex p-4 items-center\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\nh-14 mr-4\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\nflex-1\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\nfont-medium\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\ntext-xs text-blue-500\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = _taggedTemplateLiteral([\n        \"\\ntext-sm\\n\"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\nvar RideSelector = function() {\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {\n        __source: {\n            fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/components/RideSelector.js\",\n            lineNumber: 7,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Title, {\n                __source: {\n                    fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/components/RideSelector.js\",\n                    lineNumber: 8,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Choose a ride, or swipe up for more\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CarList, {\n                __source: {\n                    fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/components/RideSelector.js\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: _data_carList__WEBPACK_IMPORTED_MODULE_3__.carList.map(function(car, index) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Car, {\n                        __source: {\n                            fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/components/RideSelector.js\",\n                            lineNumber: 11,\n                            columnNumber: 21\n                        },\n                        __self: _this1,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CarImage, {\n                                src: car.imgUrl,\n                                __source: {\n                                    fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/components/RideSelector.js\",\n                                    lineNumber: 12,\n                                    columnNumber: 25\n                                },\n                                __self: _this1\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CarDetails, {\n                                __source: {\n                                    fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/components/RideSelector.js\",\n                                    lineNumber: 13,\n                                    columnNumber: 29\n                                },\n                                __self: _this1,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Service, {\n                                        __source: {\n                                            fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/components/RideSelector.js\",\n                                            lineNumber: 14,\n                                            columnNumber: 33\n                                        },\n                                        __self: _this1,\n                                        children: car.service\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Time, {\n                                        __source: {\n                                            fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/components/RideSelector.js\",\n                                            lineNumber: 15,\n                                            columnNumber: 33\n                                        },\n                                        __self: _this1,\n                                        children: \"5 min away\"\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Price, {\n                                __source: {\n                                    fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/components/RideSelector.js\",\n                                    lineNumber: 17,\n                                    columnNumber: 25\n                                },\n                                __self: _this1,\n                                children: \"$24.00\"\n                            })\n                        ]\n                    }, index);\n                })\n            })\n        ]\n    }));\n};\n_c = RideSelector;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RideSelector);\nvar Wrapper = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div(_templateObject());\n_c1 = Wrapper;\nvar Title = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div(_templateObject1());\n_c2 = Title;\nvar CarList = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div(_templateObject2());\n_c3 = CarList;\nvar Car = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div(_templateObject3());\n_c4 = Car;\nvar CarImage = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().img(_templateObject4());\n_c5 = CarImage;\nvar CarDetails = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div(_templateObject5());\n_c6 = CarDetails;\nvar Service = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div(_templateObject6());\n_c7 = Service;\nvar Time = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div(_templateObject7());\n_c8 = Time;\nvar Price = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div(_templateObject8());\n_c9 = Price;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n$RefreshReg$(_c, \"RideSelector\");\n$RefreshReg$(_c1, \"Wrapper\");\n$RefreshReg$(_c2, \"Title\");\n$RefreshReg$(_c3, \"CarList\");\n$RefreshReg$(_c4, \"Car\");\n$RefreshReg$(_c5, \"CarImage\");\n$RefreshReg$(_c6, \"CarDetails\");\n$RefreshReg$(_c7, \"Service\");\n$RefreshReg$(_c8, \"Time\");\n$RefreshReg$(_c9, \"Price\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1JpZGVTZWxlY3Rvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBQ2tCO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7O1FBeUJsQixDQUV2Qjs7Ozs7Ozs7O1FBQ3FCLENBRXJCOzs7Ozs7Ozs7UUFDdUIsQ0FFdkI7Ozs7Ozs7OztRQUNtQixDQUVuQjs7Ozs7Ozs7O1FBQ3dCLENBRXhCOzs7Ozs7Ozs7UUFDMEIsQ0FFMUI7Ozs7Ozs7OztRQUN1QixDQUV2Qjs7Ozs7Ozs7O1FBQ29CLENBRXBCOzs7Ozs7Ozs7UUFDcUIsQ0FFckI7Ozs7Ozs7QUFqREEsR0FBSyxDQUFDRyxZQUFZLEdBQUcsUUFDckIsR0FEMkIsQ0FBQzs7SUFDeEIsTUFBTSx1RUFDREMsT0FBTzs7Ozs7Ozs7aUZBQ0hDLEtBQUs7Ozs7Ozs7MEJBQUMsQ0FBbUM7O2lGQUN6Q0MsT0FBTzs7Ozs7OzswQkFDRkosc0RBQVcsQ0FBQyxRQUFRLENBQVBNLEdBQUcsRUFBRUMsS0FBSztrQ0FDckIsTUFBTSx5REFBTEMsR0FBRzs7Ozs7Ozs7aUdBQ0NDLFFBQVE7Z0NBQUNDLEdBQUcsRUFBRUosR0FBRyxDQUFDSyxNQUFNOzs7Ozs7OztrR0FDcEJDLFVBQVU7Ozs7Ozs7O3lHQUNOQyxPQUFPOzs7Ozs7O2tEQUFFUCxHQUFHLENBQUNRLE9BQU87O3lHQUNwQkMsSUFBSTs7Ozs7OztrREFBQyxDQUFVOzs7O2lHQUV2QkMsS0FBSzs7Ozs7OzswQ0FBQyxDQUFNOzs7dUJBTlBULEtBQUs7Ozs7O0FBYW5DLENBQUM7S0FuQktOLFlBQVk7QUFxQmxCLCtEQUFlQSxZQUFZO0FBRTNCLEdBQUssQ0FBQ0MsT0FBTyxHQUFHSCxxRUFBTTtNQUFoQkcsT0FBTztBQUdiLEdBQUssQ0FBQ0MsS0FBSyxHQUFHSixxRUFBTTtNQUFkSSxLQUFLO0FBR1gsR0FBSyxDQUFDQyxPQUFPLEdBQUdMLHFFQUFNO01BQWhCSyxPQUFPO0FBR2IsR0FBSyxDQUFDSSxHQUFHLEdBQUdULHFFQUFNO01BQVpTLEdBQUc7QUFHVCxHQUFLLENBQUNDLFFBQVEsR0FBR1YscUVBQU07TUFBakJVLFFBQVE7QUFHZCxHQUFLLENBQUNHLFVBQVUsR0FBR2IscUVBQU07TUFBbkJhLFVBQVU7QUFHaEIsR0FBSyxDQUFDQyxPQUFPLEdBQUdkLHFFQUFNO01BQWhCYyxPQUFPO0FBR2IsR0FBSyxDQUFDRSxJQUFJLEdBQUdoQixxRUFBTTtNQUFiZ0IsSUFBSTtBQUdWLEdBQUssQ0FBQ0MsS0FBSyxHQUFHakIscUVBQU07TUFBZGlCLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9SaWRlU2VsZWN0b3IuanM/MjRjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHcgZnJvbSBcInRhaWx3aW5kLXN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBjYXJMaXN0IH0gZnJvbSAnLi4vZGF0YS9jYXJMaXN0JztcblxuY29uc3QgUmlkZVNlbGVjdG9yID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgICAgPFRpdGxlPkNob29zZSBhIHJpZGUsIG9yIHN3aXBlIHVwIGZvciBtb3JlPC9UaXRsZT5cbiAgICAgICAgICAgIDxDYXJMaXN0PlxuICAgICAgICAgICAgICAgIHsgY2FyTGlzdC5tYXAoKGNhciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENhciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJJbWFnZSBzcmM9e2Nhci5pbWdVcmx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhckRldGFpbHM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXJ2aWNlPntjYXIuc2VydmljZX08L1NlcnZpY2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaW1lPjUgbWluIGF3YXk8L1RpbWU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJEZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNlPiQyNC4wMDwvUHJpY2U+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9DYXJMaXN0PlxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSaWRlU2VsZWN0b3JcblxuY29uc3QgV3JhcHBlciA9IHR3LmRpdmBcbmZsZXgtMSBvdmVyZmxvdy15LXNjcm9sbFxuYFxuY29uc3QgVGl0bGUgPSB0dy5kaXZgXG50ZXh0LWdyYXktNTAwIHRleHQtY2VudGVyIHRleHQteHMgcHktMiBib3JkZXItYlxuYFxuY29uc3QgQ2FyTGlzdCA9IHR3LmRpdmBcbm92ZXJmbG93LXktc2Nyb2xsXG5gXG5jb25zdCBDYXIgPSB0dy5kaXZgXG5mbGV4IHAtNCBpdGVtcy1jZW50ZXJcbmBcbmNvbnN0IENhckltYWdlID0gdHcuaW1nYFxuaC0xNCBtci00XG5gXG5jb25zdCBDYXJEZXRhaWxzID0gdHcuZGl2YFxuZmxleC0xXG5gXG5jb25zdCBTZXJ2aWNlID0gdHcuZGl2YFxuZm9udC1tZWRpdW1cbmBcbmNvbnN0IFRpbWUgPSB0dy5kaXZgXG50ZXh0LXhzIHRleHQtYmx1ZS01MDBcbmBcbmNvbnN0IFByaWNlID0gdHcuZGl2YFxudGV4dC1zbVxuYCJdLCJuYW1lcyI6WyJSZWFjdCIsInR3IiwiY2FyTGlzdCIsIlJpZGVTZWxlY3RvciIsIldyYXBwZXIiLCJUaXRsZSIsIkNhckxpc3QiLCJtYXAiLCJjYXIiLCJpbmRleCIsIkNhciIsIkNhckltYWdlIiwic3JjIiwiaW1nVXJsIiwiQ2FyRGV0YWlscyIsIlNlcnZpY2UiLCJzZXJ2aWNlIiwiVGltZSIsIlByaWNlIiwiZGl2IiwiaW1nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/RideSelector.js\n");

/***/ })

});