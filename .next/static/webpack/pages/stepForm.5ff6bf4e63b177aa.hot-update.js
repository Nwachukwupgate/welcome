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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SuccessPage() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), applyEmail = ref[0], setApplyEmail = ref[1];\n    // http://localhost:3000/register?applyUrl=https://grnh.se/8633017d1us   //normally applyurl\n    // http://localhost:3000/register?applyUrl=mailto:integrations_engineer_8716d7893us@fern.greenhouse.io?body=%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%20-%20The%20We%20Work%20Remotely%20Team%20%0A%20weworkremotely.com&amp;subject=Application%20for%20Presales%20%2F%20Solutions%20Engineer%20at%20WINGSPAN\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (true) {\n            var _$checkApplyUrl = localStorage.getItem(\"applyUrl\");\n            var applyUrl = JSON.parse(localStorage.getItem(\"applyUrl\"));\n        }\n        if (checkApplyUrl !== undefined && applyUrl !== null) {\n            if (applyUrl.startsWith(\"mailto\")) {\n                var regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9_-]+)/gi // The actual regex\n                ;\n                var matches = regex.exec(applyUrl);\n                setApplyEmail(matches[1]);\n                localStorage.removeItem(\"applyUrl\");\n            } else {\n                var timer = setTimeout(function() {\n                    // window.open (applyUrl, '_ blank')\n                    router.push(applyUrl);\n                    localStorage.removeItem(\"applyUrl\");\n                }, 5000);\n                return function() {\n                    return clearTimeout(timer);\n                };\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto lg:basis-3/6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"images/athlete-training-outdoors.svg\"\n                    }, void 0, false, {\n                        fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/steps/success.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/steps/success.js\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto lg:basis-3/6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center text-[#001935] font-extrabold drop-shadow-lg shadow-black text-4xl lg:text-left \",\n                                children: \"Success!\"\n                            }, void 0, false, {\n                                fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/steps/success.js\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, this),\n                            applyEmail !== \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-md\",\n                                children: [\n                                    \" Kindly send your CV to \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-bold flex\",\n                                        children: applyEmail\n                                    }, void 0, false, {\n                                        fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/steps/success.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 68\n                                    }, this),\n                                    \" to apply for the job\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/steps/success.js\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, this),\n                            applyEmail == \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-bold text-lg\",\n                                        children: \" Your Details have been taken, you will be contacted for an interview session by our team not too long.\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/steps/success.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 22\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-500\",\n                                        children: \"Upon completion of the next stage, you would have no need to search for contract jobs.Companies will rather apply to you. Thank you!\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/steps/success.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"inline-flex justify-center w-fit px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/steps/success.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/steps/success.js\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/steps/success.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/steps/success.js\",\n                    lineNumber: 47,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/steps/success.js\",\n            lineNumber: 41,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(SuccessPage, \"BXhgyBHC4itEpsQqgVgXP6MOElg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SuccessPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SuccessPage);\nvar _c;\n$RefreshReg$(_c, \"SuccessPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5QYWdlL2Zvcm1TdGVwL3N0ZXBzL3N1Y2Nlc3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBK0M7QUFDbkI7QUFDVzs7QUFLdkMsU0FBU0ssV0FBVyxHQUFHOztJQUN2QixJQUFNQyxNQUFNLEdBQUdGLHNEQUFTLEVBQUU7SUFDMUIsSUFBb0NILEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFUaEQsVUFTaUIsR0FBbUJBLEdBQVksR0FBL0IsRUFUakIsYUFTZ0MsR0FBSUEsR0FBWSxHQUFoQjtJQUNoQyw0RkFBNEY7SUFFNUYsdVVBQXVVO0lBQ25VQyxnREFBUyxDQUFDLFdBQUs7UUFDZixJQUFJLElBQTZCLEVBQUM7WUFDOUIsSUFBTU8sZUFBYSxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFFdEQsSUFBSUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0osWUFBWSxDQUFDQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDOUQ7UUFDRCxJQUFHRixhQUFhLEtBQUlNLFNBQVMsSUFBSUgsUUFBUSxLQUFJLElBQUksRUFBRTtZQUNuRCxJQUFHQSxRQUFRLENBQUNJLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBQztnQkFDakMsSUFBSUMsS0FBSyx5REFBeUQsbUJBQW1CO2dCQUFwQjtnQkFDakUsSUFBSUMsT0FBTyxHQUFHRCxLQUFLLENBQUNFLElBQUksQ0FBQ1AsUUFBUSxDQUFDO2dCQUNsQ0osYUFBYSxDQUFDVSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCUixZQUFZLENBQUNVLFVBQVUsQ0FBQyxVQUFVLENBQUM7YUFFbEMsTUFBSTtnQkFDTCxJQUFNQyxLQUFLLEdBQUdDLFVBQVUsQ0FBQyxXQUFNO29CQUMvQixvQ0FBb0M7b0JBQ3BDaEIsTUFBTSxDQUFDaUIsSUFBSSxDQUFDWCxRQUFRLENBQUM7b0JBQ3JCRixZQUFZLENBQUNVLFVBQVUsQ0FBQyxVQUFVLENBQUM7aUJBQ2xDLEVBQUUsSUFBSSxDQUFDO2dCQUNQLE9BQU87MkJBQU1JLFlBQVksQ0FBQ0gsS0FBSyxDQUFDO2lCQUFBO2FBQ2hDO1NBRUE7S0FFQSxFQUFFLEVBQUUsQ0FBQztJQUNSLHFCQUNFO2tCQUNJLDRFQUFDSSxLQUFHO1lBQUNDLFNBQVMsRUFBQyxrRUFBa0U7OzhCQUM3RSw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHNCQUFzQjs4QkFDakMsNEVBQUNDLEtBQUc7d0JBQUNDLEdBQUcsRUFBQyxzQ0FBc0M7Ozs7OzRCQUFHOzs7Ozt3QkFFaEQ7OEJBRU4sOERBQUNILEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxzQkFBc0I7OEJBQ2pDLDRFQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMseUJBQXlCOzswQ0FDcEMsOERBQUNHLEdBQUM7Z0NBQUNILFNBQVMsRUFBQyw4RkFBOEY7MENBQUMsVUFBUTs7Ozs7b0NBQUk7NEJBQ3ZIbkIsVUFBVSxLQUFLLEVBQUUsa0JBQ2xCLDhEQUFDc0IsR0FBQztnQ0FBQ0gsU0FBUyxFQUFDLFNBQVM7O29DQUFDLDBCQUF3QjtrREFBQSw4REFBQ0ksTUFBSTt3Q0FBQ0osU0FBUyxFQUFDLGdCQUFnQjtrREFBRW5CLFVBQVU7Ozs7OzRDQUFRO29DQUFBLHVCQUFxQjs7Ozs7O29DQUFJOzRCQUUzSEEsVUFBVSxJQUFJLEVBQUUsa0JBQ2hCOztrREFDQSw4REFBQ3NCLEdBQUM7d0NBQUNILFNBQVMsRUFBQyxtQkFBbUI7a0RBQUMseUdBQXVHOzs7Ozs0Q0FBSTtrREFDN0ksOERBQUNHLEdBQUM7d0NBQUNILFNBQVMsRUFBQyxlQUFlO2tEQUFDLHNJQUFvSTs7Ozs7NENBQUk7OzRDQUNqSzswQ0FHSiw4REFBQ3ZCLGtEQUFJO2dDQUFDNEIsSUFBSSxFQUFDLEdBQUc7MENBQ1YsNEVBQUNDLEdBQUM7b0NBQUNOLFNBQVMsRUFBQyxzT0FBc087OENBQUMsTUFBSTs7Ozs7d0NBQUk7Ozs7O29DQUN6UDs7Ozs7OzRCQUNMOzs7Ozt3QkFDSjs7Ozs7O2dCQUVKO3FCQUNQLENBQ0o7Q0FDRjtHQTdEUXJCLFdBQVc7O1FBQ0xELGtEQUFTOzs7QUFEZkMsS0FBQUEsV0FBVztBQStEcEIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluUGFnZS9mb3JtU3RlcC9zdGVwcy9zdWNjZXNzLmpzPzZhN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5cblxuXG5mdW5jdGlvbiBTdWNjZXNzUGFnZSgpIHtcbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5jb25zdCBbYXBwbHlFbWFpbCwgc2V0QXBwbHlFbWFpbF0gPSB1c2VTdGF0ZSgnJylcbi8vIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWdpc3Rlcj9hcHBseVVybD1odHRwczovL2dybmguc2UvODYzMzAxN2QxdXMgICAvL25vcm1hbGx5IGFwcGx5dXJsXG5cbi8vIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWdpc3Rlcj9hcHBseVVybD1tYWlsdG86aW50ZWdyYXRpb25zX2VuZ2luZWVyXzg3MTZkNzg5M3VzQGZlcm4uZ3JlZW5ob3VzZS5pbz9ib2R5PSUwQSUwQSUwQSUwQSUwQSUwQSUwQSUwQSUwQSUwQSUwQSUwQSUwQSUwQSUwQSUwQSUwQSUwQSUwQSUwQSUwQSUwQSUyMC0lMjBUaGUlMjBXZSUyMFdvcmslMjBSZW1vdGVseSUyMFRlYW0lMjAlMEElMjB3ZXdvcmtyZW1vdGVseS5jb20mYW1wO3N1YmplY3Q9QXBwbGljYXRpb24lMjBmb3IlMjBQcmVzYWxlcyUyMCUyRiUyMFNvbHV0aW9ucyUyMEVuZ2luZWVyJTIwYXQlMjBXSU5HU1BBTlxuICAgIHVzZUVmZmVjdCgoKSA9PntcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICAgIGNvbnN0IGNoZWNrQXBwbHlVcmwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFwcGx5VXJsXCIpXG4gICAgICAgXG4gICAgICAgIHZhciBhcHBseVVybCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhcHBseVVybFwiKSlcbiAgICB9XG4gICAgaWYoY2hlY2tBcHBseVVybCAhPT11bmRlZmluZWQgJiYgYXBwbHlVcmwgIT09bnVsbCApe1xuICAgIGlmKGFwcGx5VXJsLnN0YXJ0c1dpdGgoXCJtYWlsdG9cIikpe1xuICAgIHZhciByZWdleCA9IC8oW2EtekEtWjAtOS5fLV0rQFthLXpBLVowLTkuXy1dK1xcLlthLXpBLVowLTlfLV0rKS9naSAvLyBUaGUgYWN0dWFsIHJlZ2V4XG4gICAgdmFyIG1hdGNoZXMgPSByZWdleC5leGVjKGFwcGx5VXJsKVxuICAgIHNldEFwcGx5RW1haWwobWF0Y2hlc1sxXSlcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImFwcGx5VXJsXCIpXG4gICAgICAgICAgICBcbiAgICB9ZWxzZXtcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vIHdpbmRvdy5vcGVuIChhcHBseVVybCwgJ18gYmxhbmsnKVxuICAgIHJvdXRlci5wdXNoKGFwcGx5VXJsKVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYXBwbHlVcmxcIilcbiAgICB9LCA1MDAwKTtcbiAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcilcbiAgICB9XG4gICAgIFxuICAgIH1cbiAgIFxuICAgIH0sIFtdKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTQgbGc6ZmxleC1yb3cgbGc6aXRlbXMtY2VudGVyIGxnOnNwYWNlLXgtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGxnOmJhc2lzLTMvNlwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2F0aGxldGUtdHJhaW5pbmctb3V0ZG9vcnMuc3ZnXCIgLz5cbiAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9XCJpbWFnZXMvd2F0Y2guc3ZnXCIgY2xhc3M9XCJ3LWZ1bGxcIiBhbHQ9XCJ3YXRoIGlsbHVzdHJhdGlvblwiIGxvYWRpbmc9XCJsYXp5XCIgd2lkdGg9XCIzMjBcIiBoZWlnaHQ9XCIyODBcIiAvPiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbGc6YmFzaXMtMy82XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LVsjMDAxOTM1XSBmb250LWV4dHJhYm9sZCBkcm9wLXNoYWRvdy1sZyBzaGFkb3ctYmxhY2sgdGV4dC00eGwgbGc6dGV4dC1sZWZ0IFwiPlN1Y2Nlc3MhPC9wPlxuICAgICAgICAgICAgICAgICAgICB7YXBwbHlFbWFpbCAhPT0gJycgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW1kXCI+IEtpbmRseSBzZW5kIHlvdXIgQ1YgdG8gPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIGZsZXhcIj57YXBwbHlFbWFpbH08L3NwYW4+IHRvIGFwcGx5IGZvciB0aGUgam9iPC9wPiBcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAge2FwcGx5RW1haWwgPT0gJycgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWxnXCI+IFlvdXIgRGV0YWlscyBoYXZlIGJlZW4gdGFrZW4sIHlvdSB3aWxsIGJlIGNvbnRhY3RlZCBmb3IgYW4gaW50ZXJ2aWV3IHNlc3Npb24gYnkgb3VyIHRlYW0gbm90IHRvbyBsb25nLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPlVwb24gY29tcGxldGlvbiBvZiB0aGUgbmV4dCBzdGFnZSwgeW91IHdvdWxkIGhhdmUgbm8gbmVlZCB0byBzZWFyY2ggZm9yIGNvbnRyYWN0IGpvYnMuQ29tcGFuaWVzIHdpbGwgcmF0aGVyIGFwcGx5IHRvIHlvdS4gVGhhbmsgeW91ITwvcD5cbiAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXgganVzdGlmeS1jZW50ZXIgdy1maXQgcHgtNSBweS0yIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTEwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgdHJhbnNmb3JtIGJnLVsjMDAxOTM1XSByb3VuZGVkLW1kIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtWyMwMDE5MzVdIGhvdmVyOmJvcmRlci0yIGhvdmVyOmJvcmRlci1zb2xpZCBob3Zlcjpib3JkZXItWyMwMDE5MzVdXCI+SG9tZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3VjY2Vzc1BhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJTdWNjZXNzUGFnZSIsInJvdXRlciIsImFwcGx5RW1haWwiLCJzZXRBcHBseUVtYWlsIiwiY2hlY2tBcHBseVVybCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhcHBseVVybCIsIkpTT04iLCJwYXJzZSIsInVuZGVmaW5lZCIsInN0YXJ0c1dpdGgiLCJyZWdleCIsIm1hdGNoZXMiLCJleGVjIiwicmVtb3ZlSXRlbSIsInRpbWVyIiwic2V0VGltZW91dCIsInB1c2giLCJjbGVhclRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJwIiwic3BhbiIsImhyZWYiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/mainPage/formStep/steps/success.js\n");

/***/ })

});