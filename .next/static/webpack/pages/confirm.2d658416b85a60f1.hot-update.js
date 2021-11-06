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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwind-styled-components */ \"./node_modules/tailwind-styled-components/dist/index.js\");\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/map */ \"./pages/components/map.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\nflex-1\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\nflex h-screen flex-col\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Confirm = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), pickupCoordinates = ref[0], setPickupCoordinates = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), dropoffCoordinates = ref1[0], setDropoffCoordinates = ref1[1];\n    var getPickupCoordinates = function() {\n        var pickup = \"Santa Monica\";\n        fetch(\"https://api.mapbox.com/geocoding/v5/mapbox.places/\".concat(pickup, \".json?\") + new URLSearchParams({\n            access_token: \"pk.eyJ1IjoiYmNyYWRkb2NrMjkiLCJhIjoiY2t2bG82ZnhkZGcxODJwbW5mdjRuNmFlNSJ9.FTd8KksdZAOWLVhJlEmuJA\",\n            limit: 1\n        })).then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            console.log(data.features[0].center);\n            setPickupCoordinates();\n        });\n    };\n    var getDropoffCoordinates = function() {\n        var dropoff = \"Los Angeles\";\n        fetch(\"https://api.mapbox.com/geocoding/v5/mapbox.places/\".concat(dropoff, \".json?\") + new URLSearchParams({\n            access_token: \"pk.eyJ1IjoiYmNyYWRkb2NrMjkiLCJhIjoiY2t2bG82ZnhkZGcxODJwbW5mdjRuNmFlNSJ9.FTd8KksdZAOWLVhJlEmuJA\",\n            limit: 1\n        })).then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            console.log(\"Dropoff\");\n            console.log(data.features[0].center);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getPickupCoordinates();\n        getDropoffCoordinates();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {\n        __source: {\n            fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/confirm.js\",\n            lineNumber: 47,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/confirm.js\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RideContainer, {\n                __source: {\n                    fileName: \"/Users/benjamincraddock/Desktop/Projects/Uber-Clone-Project/pages/confirm.js\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Ride Selector Confirm Button\"\n            })\n        ]\n    }));\n};\n_s(Confirm, \"+LEyGcWQNptLZsq+7PrDWMz5Y4M=\");\n_c = Confirm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Confirm);\nvar RideContainer = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div(_templateObject());\n_c1 = RideContainer;\nvar Wrapper = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div(_templateObject1());\n_c2 = Wrapper;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Confirm\");\n$RefreshReg$(_c1, \"RideContainer\");\n$RefreshReg$(_c2, \"Wrapper\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb25maXJtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0Q7QUFDUDtBQUNUOzs7Ozs7Ozs7Ozs7OztRQXlETCxDQUU3Qjs7Ozs7Ozs7O1FBRXVCLENBRXZCOzs7Ozs7OztBQTdEQSxHQUFLLENBQUNLLE9BQU8sR0FBRyxRQUNoQixHQURzQixDQUFDOztJQUVuQixHQUFLLENBQTZDSCxHQUFVLEdBQVZBLCtDQUFRLElBQW5ESSxpQkFBaUIsR0FBMEJKLEdBQVUsS0FBbENLLG9CQUFvQixHQUFJTCxHQUFVO0lBQzVELEdBQUssQ0FBK0NBLElBQVUsR0FBVkEsK0NBQVEsSUFBckRNLGtCQUFrQixHQUEyQk4sSUFBVSxLQUFuQ08scUJBQXFCLEdBQUlQLElBQVU7SUFFOUQsR0FBSyxDQUFDUSxvQkFBb0IsR0FBRyxRQUNqQyxHQUR1QyxDQUFDO1FBQ2hDLEdBQUssQ0FBQ0MsTUFBTSxHQUFHLENBQWM7UUFDN0JDLEtBQUssQ0FBRSxDQUFrRCxvREFBUyxNQUFNLENBQWJELE1BQU0sRUFBQyxDQUFNLFdBQ3BFLEdBQUcsQ0FBQ0UsZUFBZSxDQUFDLENBQUM7WUFDakJDLFlBQVksRUFBRSxDQUFnRztZQUM5R0MsS0FBSyxFQUFFLENBQUM7UUFDWixDQUFDLEdBRUFDLElBQUksQ0FBQ0MsUUFBUSxDQUFSQSxRQUFRO1lBQUlBLE1BQU0sQ0FBTkEsUUFBUSxDQUFDQyxJQUFJO1dBQzlCRixJQUFJLENBQUNHLFFBQVEsQ0FBUkEsSUFBSSxFQUFJLENBQUM7WUFDWEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQ0csUUFBUSxDQUFDLENBQUMsRUFBRUMsTUFBTTtZQUNuQ2hCLG9CQUFvQjtRQUN4QixDQUFDO0lBQ1QsQ0FBQztJQUVELEdBQUssQ0FBQ2lCLHFCQUFxQixHQUFHLFFBQ2xDLEdBRHdDLENBQUM7UUFDakMsR0FBSyxDQUFDQyxPQUFPLEdBQUcsQ0FBYTtRQUM3QmIsS0FBSyxDQUFFLENBQWtELG9EQUFVLE1BQU0sQ0FBZGEsT0FBTyxFQUFDLENBQU0sV0FDckUsR0FBRyxDQUFDWixlQUFlLENBQUMsQ0FBQztZQUNqQkMsWUFBWSxFQUFFLENBQWdHO1lBQzlHQyxLQUFLLEVBQUUsQ0FBQztRQUNaLENBQUMsR0FFQUMsSUFBSSxDQUFDQyxRQUFRLENBQVJBLFFBQVE7WUFBSUEsTUFBTSxDQUFOQSxRQUFRLENBQUNDLElBQUk7V0FDOUJGLElBQUksQ0FBQ0csUUFBUSxDQUFSQSxJQUFJLEVBQUksQ0FBQztZQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFTO1lBQ3JCRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDRyxRQUFRLENBQUMsQ0FBQyxFQUFFQyxNQUFNO1FBQ3ZDLENBQUM7SUFDVCxDQUFDO0lBRUR0QixnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNiUyxvQkFBb0I7UUFDcEJjLHFCQUFxQjtJQUN6QixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBR0wsTUFBTSx1RUFDREUsT0FBTzs7Ozs7Ozs7aUZBQ0h0Qix1REFBRzs7Ozs7Ozs7aUZBQ0h1QixhQUFhOzs7Ozs7OzBCQUFDLENBSWY7Ozs7QUFHWixDQUFDO0dBbkRLdEIsT0FBTztLQUFQQSxPQUFPO0FBcURiLCtEQUFlQSxPQUFPLEVBQUM7QUFFdkIsR0FBSyxDQUFDc0IsYUFBYSxHQUFHeEIscUVBQU07TUFBdEJ3QixhQUFhO0FBSW5CLEdBQUssQ0FBQ0QsT0FBTyxHQUFHdkIscUVBQU07TUFBaEJ1QixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbmZpcm0uanM/MmEzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR3IGZyb20gXCJ0YWlsd2luZC1zdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IE1hcCBmcm9tICcuL2NvbXBvbmVudHMvbWFwJztcblxuY29uc3QgQ29uZmlybSA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtwaWNrdXBDb29yZGluYXRlcywgc2V0UGlja3VwQ29vcmRpbmF0ZXNdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbZHJvcG9mZkNvb3JkaW5hdGVzLCBzZXREcm9wb2ZmQ29vcmRpbmF0ZXNdID0gdXNlU3RhdGUoKTtcblxuICAgIGNvbnN0IGdldFBpY2t1cENvb3JkaW5hdGVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwaWNrdXAgPSBcIlNhbnRhIE1vbmljYVwiO1xuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9nZW9jb2RpbmcvdjUvbWFwYm94LnBsYWNlcy8ke3BpY2t1cH0uanNvbj9gICsgXG4gICAgICAgICAgICBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NfdG9rZW46IFwicGsuZXlKMUlqb2lZbU55WVdSa2IyTnJNamtpTENKaElqb2lZMnQyYkc4MlpuaGtaR2N4T0RKd2JXNW1kalJ1Tm1GbE5TSjkuRlRkOEtrc2RaQU9XTFZoSmxFbXVKQVwiLFxuICAgICAgICAgICAgICAgIGxpbWl0OiAxXG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmZlYXR1cmVzWzBdLmNlbnRlcilcbiAgICAgICAgICAgICAgICBzZXRQaWNrdXBDb29yZGluYXRlcygpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGdldERyb3BvZmZDb29yZGluYXRlcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZHJvcG9mZiA9IFwiTG9zIEFuZ2VsZXNcIjtcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLm1hcGJveC5jb20vZ2VvY29kaW5nL3Y1L21hcGJveC5wbGFjZXMvJHtkcm9wb2ZmfS5qc29uP2AgKyBcbiAgICAgICAgICAgIG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICAgICAgICAgIGFjY2Vzc190b2tlbjogXCJway5leUoxSWpvaVltTnlZV1JrYjJOck1qa2lMQ0poSWpvaVkydDJiRzgyWm5oa1pHY3hPREp3Ylc1bWRqUnVObUZsTlNKOS5GVGQ4S2tzZFpBT1dMVmhKbEVtdUpBXCIsXG4gICAgICAgICAgICAgICAgbGltaXQ6IDFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcG9mZlwiKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZmVhdHVyZXNbMF0uY2VudGVyKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRQaWNrdXBDb29yZGluYXRlcygpO1xuICAgICAgICBnZXREcm9wb2ZmQ29vcmRpbmF0ZXMoKTtcbiAgICB9LCBbXSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgICA8TWFwIC8+XG4gICAgICAgICAgICA8UmlkZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICBSaWRlIFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgQ29uZmlybSBCdXR0b25cblxuICAgICAgICAgICAgPC9SaWRlQ29udGFpbmVyPlxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maXJtO1xuXG5jb25zdCBSaWRlQ29udGFpbmVyID0gdHcuZGl2YFxuZmxleC0xXG5gXG5cbmNvbnN0IFdyYXBwZXIgPSB0dy5kaXZgXG5mbGV4IGgtc2NyZWVuIGZsZXgtY29sXG5gIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ0dyIsIk1hcCIsIkNvbmZpcm0iLCJwaWNrdXBDb29yZGluYXRlcyIsInNldFBpY2t1cENvb3JkaW5hdGVzIiwiZHJvcG9mZkNvb3JkaW5hdGVzIiwic2V0RHJvcG9mZkNvb3JkaW5hdGVzIiwiZ2V0UGlja3VwQ29vcmRpbmF0ZXMiLCJwaWNrdXAiLCJmZXRjaCIsIlVSTFNlYXJjaFBhcmFtcyIsImFjY2Vzc190b2tlbiIsImxpbWl0IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZmVhdHVyZXMiLCJjZW50ZXIiLCJnZXREcm9wb2ZmQ29vcmRpbmF0ZXMiLCJkcm9wb2ZmIiwiV3JhcHBlciIsIlJpZGVDb250YWluZXIiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/confirm.js\n");

/***/ })

});