"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/stepForm",{

/***/ "./components/mainPage/formStep/steps/success.js":
/*!*******************************************************!*\
  !*** ./components/mainPage/formStep/steps/success.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SuccessPage() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), applyEmail = ref[0], setApplyEmail = ref[1];\n    // http://localhost:3000/register?applyUrl=https://grnh.se/8633017d1us   //normally applyurl\n    // http://localhost:3000/register?applyUrl=mailto:integrations_engineer_8716d7893us@fern.greenhouse.io?body=%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%20-%20The%20We%20Work%20Remotely%20Team%20%0A%20weworkremotely.com&amp;subject=Application%20for%20Presales%20%2F%20Solutions%20Engineer%20at%20WINGSPAN\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (true) {\n            var checkApplyUrl = localStorage.getItem(\"applyUrl\");\n            if (checkApplyUrl) var applyUrl = JSON.parse(localStorage.getItem(\"applyUrl\"));\n        }\n        if (applyUrl !== undefined && applyUrl !== null) {\n            if (applyUrl.startsWith(\"mailto\")) {\n                var regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9_-]+)/gi // The actual regex\n                ;\n                var matches = regex.exec(applyUrl);\n                setApplyEmail(matches[1]);\n                localStorage.removeItem(\"applyUrl\");\n            } else {\n                var timer = setTimeout(function() {\n                    // window.open (applyUrl, '_ blank')\n                    router.push(applyUrl);\n                    localStorage.removeItem(\"applyUrl\");\n                }, 5000);\n                return function() {\n                    return clearTimeout(timer);\n                };\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto lg:basis-3/6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"images/athlete-training-outdoors.svg\"\n                    }, void 0, false, {\n                        fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/steps/success.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/steps/success.js\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto lg:basis-3/6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center text-[#001935] font-extrabold drop-shadow-lg shadow-black text-4xl lg:text-left \",\n                                children: \"Success!\"\n                            }, void 0, false, {\n                                fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/steps/success.js\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, this),\n                            applyEmail !== \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-md\",\n                                children: [\n                                    \" Kindly send your CV to \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-bold flex\",\n                                        children: applyEmail\n                                    }, void 0, false, {\n                                        fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/steps/success.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 68\n                                    }, this),\n                                    \" to apply for the job\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/steps/success.js\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, this),\n                            applyEmail == \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-bold text-lg\",\n                                        children: \" Your Details have been taken, you will be contacted for an interview session by our team not too long.\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/steps/success.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 22\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-500\",\n                                        children: \"Upon completion of the next stage, you would have no need to search for contract jobs.Companies will rather apply to you. Thank you!\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/steps/success.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"inline-flex justify-center w-fit px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/steps/success.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/steps/success.js\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/steps/success.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/steps/success.js\",\n                    lineNumber: 47,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/steps/success.js\",\n            lineNumber: 41,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(SuccessPage, \"BXhgyBHC4itEpsQqgVgXP6MOElg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SuccessPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SuccessPage);\nvar _c;\n$RefreshReg$(_c, \"SuccessPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5QYWdlL2Zvcm1TdGVwL3N0ZXBzL3N1Y2Nlc3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBK0M7QUFDbkI7QUFDVzs7QUFLdkMsU0FBU0ssV0FBVyxHQUFHOztJQUN2QixJQUFNQyxNQUFNLEdBQUdGLHNEQUFTLEVBQUU7SUFDMUIsSUFBb0NILEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFUaEQsVUFTaUIsR0FBbUJBLEdBQVksR0FBL0IsRUFUakIsYUFTZ0MsR0FBSUEsR0FBWSxHQUFoQjtJQUNoQyw0RkFBNEY7SUFFNUYsdVVBQXVVO0lBQ25VQyxnREFBUyxDQUFDLFdBQUs7UUFDZixJQUFJLElBQTZCLEVBQUM7WUFDOUIsSUFBTU8sYUFBYSxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDdEQsSUFBR0YsYUFBYSxFQUNoQixJQUFJRyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSixZQUFZLENBQUNDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM5RDtRQUNELElBQUdDLFFBQVEsS0FBSUcsU0FBUyxJQUFJSCxRQUFRLEtBQUksSUFBSSxFQUFFO1lBQzlDLElBQUdBLFFBQVEsQ0FBQ0ksVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFDO2dCQUNqQyxJQUFJQyxLQUFLLHlEQUF5RCxtQkFBbUI7Z0JBQXBCO2dCQUNqRSxJQUFJQyxPQUFPLEdBQUdELEtBQUssQ0FBQ0UsSUFBSSxDQUFDUCxRQUFRLENBQUM7Z0JBQ2xDSixhQUFhLENBQUNVLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekJSLFlBQVksQ0FBQ1UsVUFBVSxDQUFDLFVBQVUsQ0FBQzthQUVsQyxNQUFJO2dCQUNMLElBQU1DLEtBQUssR0FBR0MsVUFBVSxDQUFDLFdBQU07b0JBQy9CLG9DQUFvQztvQkFDcENoQixNQUFNLENBQUNpQixJQUFJLENBQUNYLFFBQVEsQ0FBQztvQkFDckJGLFlBQVksQ0FBQ1UsVUFBVSxDQUFDLFVBQVUsQ0FBQztpQkFDbEMsRUFBRSxJQUFJLENBQUM7Z0JBQ1AsT0FBTzsyQkFBTUksWUFBWSxDQUFDSCxLQUFLLENBQUM7aUJBQUE7YUFDaEM7U0FFQTtLQUVBLEVBQUUsRUFBRSxDQUFDO0lBQ1IscUJBQ0U7a0JBQ0ksNEVBQUNJLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLGtFQUFrRTs7OEJBQzdFLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsc0JBQXNCOzhCQUNqQyw0RUFBQ0MsS0FBRzt3QkFBQ0MsR0FBRyxFQUFDLHNDQUFzQzs7Ozs7NEJBQUc7Ozs7O3dCQUVoRDs4QkFFTiw4REFBQ0gsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHNCQUFzQjs4QkFDakMsNEVBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyx5QkFBeUI7OzBDQUNwQyw4REFBQ0csR0FBQztnQ0FBQ0gsU0FBUyxFQUFDLDhGQUE4RjswQ0FBQyxVQUFROzs7OztvQ0FBSTs0QkFDdkhuQixVQUFVLEtBQUssRUFBRSxrQkFDbEIsOERBQUNzQixHQUFDO2dDQUFDSCxTQUFTLEVBQUMsU0FBUzs7b0NBQUMsMEJBQXdCO2tEQUFBLDhEQUFDSSxNQUFJO3dDQUFDSixTQUFTLEVBQUMsZ0JBQWdCO2tEQUFFbkIsVUFBVTs7Ozs7NENBQVE7b0NBQUEsdUJBQXFCOzs7Ozs7b0NBQUk7NEJBRTNIQSxVQUFVLElBQUksRUFBRSxrQkFDaEI7O2tEQUNBLDhEQUFDc0IsR0FBQzt3Q0FBQ0gsU0FBUyxFQUFDLG1CQUFtQjtrREFBQyx5R0FBdUc7Ozs7OzRDQUFJO2tEQUM3SSw4REFBQ0csR0FBQzt3Q0FBQ0gsU0FBUyxFQUFDLGVBQWU7a0RBQUMsc0lBQW9JOzs7Ozs0Q0FBSTs7NENBQ2pLOzBDQUdKLDhEQUFDdkIsa0RBQUk7Z0NBQUM0QixJQUFJLEVBQUMsR0FBRzswQ0FDViw0RUFBQ0MsR0FBQztvQ0FBQ04sU0FBUyxFQUFDLHNPQUFzTzs4Q0FBQyxNQUFJOzs7Ozt3Q0FBSTs7Ozs7b0NBQ3pQOzs7Ozs7NEJBQ0w7Ozs7O3dCQUNKOzs7Ozs7Z0JBRUo7cUJBQ1AsQ0FDSjtDQUNGO0dBN0RRckIsV0FBVzs7UUFDTEQsa0RBQVM7OztBQURmQyxLQUFBQSxXQUFXO0FBK0RwQiwrREFBZUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21haW5QYWdlL2Zvcm1TdGVwL3N0ZXBzL3N1Y2Nlc3MuanM/NmE3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cblxuXG5cbmZ1bmN0aW9uIFN1Y2Nlc3NQYWdlKCkge1xuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbmNvbnN0IFthcHBseUVtYWlsLCBzZXRBcHBseUVtYWlsXSA9IHVzZVN0YXRlKCcnKVxuLy8gaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlZ2lzdGVyP2FwcGx5VXJsPWh0dHBzOi8vZ3JuaC5zZS84NjMzMDE3ZDF1cyAgIC8vbm9ybWFsbHkgYXBwbHl1cmxcblxuLy8gaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlZ2lzdGVyP2FwcGx5VXJsPW1haWx0bzppbnRlZ3JhdGlvbnNfZW5naW5lZXJfODcxNmQ3ODkzdXNAZmVybi5ncmVlbmhvdXNlLmlvP2JvZHk9JTBBJTBBJTBBJTBBJTBBJTBBJTBBJTBBJTBBJTBBJTBBJTBBJTBBJTBBJTBBJTBBJTBBJTBBJTBBJTBBJTBBJTBBJTIwLSUyMFRoZSUyMFdlJTIwV29yayUyMFJlbW90ZWx5JTIwVGVhbSUyMCUwQSUyMHdld29ya3JlbW90ZWx5LmNvbSZhbXA7c3ViamVjdD1BcHBsaWNhdGlvbiUyMGZvciUyMFByZXNhbGVzJTIwJTJGJTIwU29sdXRpb25zJTIwRW5naW5lZXIlMjBhdCUyMFdJTkdTUEFOXG4gICAgdXNlRWZmZWN0KCgpID0+e1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgICAgY29uc3QgY2hlY2tBcHBseVVybCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXBwbHlVcmxcIilcbiAgICAgICAgaWYoY2hlY2tBcHBseVVybCApXG4gICAgICAgIHZhciBhcHBseVVybCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhcHBseVVybFwiKSlcbiAgICB9XG4gICAgaWYoYXBwbHlVcmwgIT09dW5kZWZpbmVkICYmIGFwcGx5VXJsICE9PW51bGwgKXtcbiAgICBpZihhcHBseVVybC5zdGFydHNXaXRoKFwibWFpbHRvXCIpKXtcbiAgICB2YXIgcmVnZXggPSAvKFthLXpBLVowLTkuXy1dK0BbYS16QS1aMC05Ll8tXStcXC5bYS16QS1aMC05Xy1dKykvZ2kgLy8gVGhlIGFjdHVhbCByZWdleFxuICAgIHZhciBtYXRjaGVzID0gcmVnZXguZXhlYyhhcHBseVVybClcbiAgICBzZXRBcHBseUVtYWlsKG1hdGNoZXNbMV0pXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhcHBseVVybFwiKVxuICAgICAgICAgICAgXG4gICAgfWVsc2V7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyB3aW5kb3cub3BlbiAoYXBwbHlVcmwsICdfIGJsYW5rJylcbiAgICByb3V0ZXIucHVzaChhcHBseVVybClcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImFwcGx5VXJsXCIpXG4gICAgfSwgNTAwMCk7XG4gICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgfVxuICAgICBcbiAgICB9XG4gICBcbiAgICB9LCBbXSlcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS00IGxnOmZsZXgtcm93IGxnOml0ZW1zLWNlbnRlciBsZzpzcGFjZS14LTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBsZzpiYXNpcy0zLzZcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9hdGhsZXRlLXRyYWluaW5nLW91dGRvb3JzLnN2Z1wiIC8+XG4gICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiaW1hZ2VzL3dhdGNoLnN2Z1wiIGNsYXNzPVwidy1mdWxsXCIgYWx0PVwid2F0aCBpbGx1c3RyYXRpb25cIiBsb2FkaW5nPVwibGF6eVwiIHdpZHRoPVwiMzIwXCIgaGVpZ2h0PVwiMjgwXCIgLz4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGxnOmJhc2lzLTMvNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1bIzAwMTkzNV0gZm9udC1leHRyYWJvbGQgZHJvcC1zaGFkb3ctbGcgc2hhZG93LWJsYWNrIHRleHQtNHhsIGxnOnRleHQtbGVmdCBcIj5TdWNjZXNzITwvcD5cbiAgICAgICAgICAgICAgICAgICAge2FwcGx5RW1haWwgIT09ICcnICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tZFwiPiBLaW5kbHkgc2VuZCB5b3VyIENWIHRvIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBmbGV4XCI+e2FwcGx5RW1haWx9PC9zcGFuPiB0byBhcHBseSBmb3IgdGhlIGpvYjwvcD4gXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHthcHBseUVtYWlsID09ICcnICYmIChcbiAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZ1wiPiBZb3VyIERldGFpbHMgaGF2ZSBiZWVuIHRha2VuLCB5b3Ugd2lsbCBiZSBjb250YWN0ZWQgZm9yIGFuIGludGVydmlldyBzZXNzaW9uIGJ5IG91ciB0ZWFtIG5vdCB0b28gbG9uZy48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5VcG9uIGNvbXBsZXRpb24gb2YgdGhlIG5leHQgc3RhZ2UsIHlvdSB3b3VsZCBoYXZlIG5vIG5lZWQgdG8gc2VhcmNoIGZvciBjb250cmFjdCBqb2JzLkNvbXBhbmllcyB3aWxsIHJhdGhlciBhcHBseSB0byB5b3UuIFRoYW5rIHlvdSE8L3A+XG4gICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGp1c3RpZnktY2VudGVyIHctZml0IHB4LTUgcHktMiBmb250LXNlbWlib2xkIHRleHQtZ3JheS0xMDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIHRyYW5zZm9ybSBiZy1bIzAwMTkzNV0gcm91bmRlZC1tZCBob3ZlcjpiZy13aGl0ZSBob3Zlcjp0ZXh0LVsjMDAxOTM1XSBob3Zlcjpib3JkZXItMiBob3Zlcjpib3JkZXItc29saWQgaG92ZXI6Ym9yZGVyLVsjMDAxOTM1XVwiPkhvbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1Y2Nlc3NQYWdlIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwidXNlUm91dGVyIiwiU3VjY2Vzc1BhZ2UiLCJyb3V0ZXIiLCJhcHBseUVtYWlsIiwic2V0QXBwbHlFbWFpbCIsImNoZWNrQXBwbHlVcmwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXBwbHlVcmwiLCJKU09OIiwicGFyc2UiLCJ1bmRlZmluZWQiLCJzdGFydHNXaXRoIiwicmVnZXgiLCJtYXRjaGVzIiwiZXhlYyIsInJlbW92ZUl0ZW0iLCJ0aW1lciIsInNldFRpbWVvdXQiLCJwdXNoIiwiY2xlYXJUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwicCIsInNwYW4iLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/mainPage/formStep/steps/success.js\n");

/***/ })

});