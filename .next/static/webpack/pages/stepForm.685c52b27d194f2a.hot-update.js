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

/***/ "./components/mainPage/formStep/majorForm.js":
/*!***************************************************!*\
  !*** ./components/mainPage/formStep/majorForm.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stepper */ \"./components/mainPage/formStep/stepper.js\");\n/* harmony import */ var _StepperControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StepperControl */ \"./components/mainPage/formStep/StepperControl.js\");\n/* harmony import */ var _steps_SelectFrameworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./steps/SelectFrameworks */ \"./components/mainPage/formStep/steps/SelectFrameworks.js\");\n/* harmony import */ var _steps_SelectLast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./steps/SelectLast */ \"./components/mainPage/formStep/steps/SelectLast.js\");\n/* harmony import */ var _steps_SelectLevel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./steps/SelectLevel */ \"./components/mainPage/formStep/steps/SelectLevel.js\");\n/* harmony import */ var _steps_SelectLanguages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./steps/SelectLanguages */ \"./components/mainPage/formStep/steps/SelectLanguages.js\");\n/* harmony import */ var _steps_success__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./steps/success */ \"./components/mainPage/formStep/steps/success.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MajorForm() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), startPoint = ref[0], setstartPoint = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var userRegData = router.asPath.slice(10);\n        if (userRegData.startsWith(\"welcome\")) {\n            var parameters = new URLSearchParams(userRegData);\n            var userToken = parameters.get(\"welcome\");\n            var checkFullReg = parameters.get(\"isFullyReg\") //\n            ;\n            if (checkFullReg == null) {\n                setstartPoint(1);\n            } else {\n                setstartPoint(5);\n            }\n        }\n        if (true) {\n            window.localStorage.setItem(\"userToken\", JSON.stringify(userToken));\n            var checkToken = localStorage.getItem(\"userToken\");\n        }\n        history.replaceState(null, \"\", location.href.split(\"?\")[0]);\n        if (checkToken == \"undefined\" || checkToken == null || checkToken == \"\") {\n            router.push(\"/\");\n        }\n    }, []);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(startPoint), currentStep = ref1[0], setCurrentStep = ref1[1];\n    var steps = [\n        \"Select Level\",\n        \"Select Language\",\n        \"Select Framework\",\n        \"Personal Detail\",\n        \"Success\"\n    ];\n    var displayStep = function(step) {\n        switch(step){\n            case 1:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_steps_SelectLevel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    currentStep: currentStep,\n                    steps: steps,\n                    handleClick: handleClick\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 50,\n                    columnNumber: 20\n                }, _this);\n            case 2:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_steps_SelectLanguages__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    currentStep: currentStep,\n                    steps: steps,\n                    handleClick: handleClick\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 56,\n                    columnNumber: 20\n                }, _this);\n            case 3:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_steps_SelectFrameworks__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    currentStep: currentStep,\n                    steps: steps,\n                    handleClick: handleClick\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 63,\n                    columnNumber: 20\n                }, _this);\n            case 4:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_steps_SelectLast__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    currentStep: currentStep,\n                    steps: steps,\n                    handleClick: handleClick\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 70,\n                    columnNumber: 20\n                }, _this);\n            case 5:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_steps_success__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    currentStep: currentStep,\n                    steps: steps,\n                    handleClick: handleClick\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 76,\n                    columnNumber: 20\n                }, _this);\n            default:\n        }\n    };\n    var handleClick = function(direction) {\n        var newStep = currentStep;\n        direction === \"next\" ? newStep++ : newStep--;\n        // steps are within bounds\n        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"md:w-3/5 mx-auto shadow-xl rounded-2xl pb-2 bg-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container horizontal mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stepper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        steps: steps,\n                        currentStep: currentStep\n                    }, void 0, false, {\n                        fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                        lineNumber: 98,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 97,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-10 p-10\",\n                    children: displayStep(currentStep)\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 105,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n            lineNumber: 95,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(MajorForm, \"On69JQCHverCOKjl0FddmpVdyuA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter\n    ];\n});\n_c = MajorForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MajorForm);\nvar _c;\n$RefreshReg$(_c, \"MajorForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5QYWdlL2Zvcm1TdGVwL21ham9yRm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQThDO0FBQ1g7QUFDVTtBQUNTO0FBQ1Y7QUFDRTtBQUNRO0FBQ1o7QUFDSDs7QUFFdkMsU0FBU1csU0FBUyxHQUFHOzs7SUFDckIsSUFBb0NWLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFYL0MsVUFXaUIsR0FBbUJBLEdBQVcsR0FBOUIsRUFYakIsYUFXZ0MsR0FBSUEsR0FBVyxHQUFmO0lBQ2hDLElBQU1hLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUN0QlIsZ0RBQVMsQ0FBQyxXQUFLO1FBQ1gsSUFBTWEsV0FBVyxHQUFHRCxNQUFNLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUMzQyxJQUFHRixXQUFXLENBQUNHLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBQztZQUNwQyxJQUFNQyxVQUFVLEdBQUcsSUFBSUMsZUFBZSxDQUFDTCxXQUFXLENBQUM7WUFDbkQsSUFBSU0sU0FBUyxHQUFHRixVQUFVLENBQUNHLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDekMsSUFBSUMsWUFBWSxHQUFHSixVQUFVLENBQUNHLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRTtZQUFGO1lBRS9DLElBQUdDLFlBQVksSUFBSSxJQUFJLEVBQUM7Z0JBQUNWLGFBQWEsQ0FBQyxDQUFDLENBQUM7YUFDakQsTUFBSTtnQkFDUUEsYUFBYSxDQUFDLENBQUMsQ0FBQzthQUNoQjtTQUNKO1FBQ0QsSUFBSSxJQUE2QixFQUFFO1lBQy9CVyxNQUFNLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFdBQVcsRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNQLFNBQVMsQ0FBQyxDQUFDO1lBQ25FLElBQUlRLFVBQVUsR0FBR0osWUFBWSxDQUFDSyxPQUFPLENBQUMsV0FBVyxDQUFDO1NBQ3JEO1FBQ0ZDLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUVDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBR04sVUFBVSxJQUFJLFdBQVcsSUFBSUEsVUFBVSxJQUFJLElBQUksSUFBSUEsVUFBVSxJQUFJLEVBQUUsRUFBQztZQUNyRWYsTUFBTSxDQUFDc0IsSUFBSSxDQUFFLEdBQUMsQ0FBRTtTQUNqQjtLQUVILEVBQUUsRUFBRSxDQUFDO0lBRU4sSUFBc0NuQyxJQUFvQixHQUFwQkEsK0NBQVEsQ0FBQ1csVUFBVSxDQUFDLEVBcEM5RCxXQW9Dc0IsR0FBb0JYLElBQW9CLEdBQXhDLEVBcEN0QixjQW9Dc0MsR0FBSUEsSUFBb0IsR0FBeEI7SUFFbEMsSUFBTXNDLEtBQUssR0FBRztRQUNWLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixTQUFTO0tBQ1o7SUFFRCxJQUFNQyxXQUFXLEdBQUcsU0FBQ0MsSUFBSSxFQUFLO1FBQzFCLE9BQU9BLElBQUk7WUFDUCxLQUFLLENBQUM7Z0JBQ04scUJBQU8sOERBQUNsQywwREFBVztvQkFDZjhCLFdBQVcsRUFBSUEsV0FBVztvQkFDMUJFLEtBQUssRUFBRUEsS0FBSztvQkFDWkcsV0FBVyxFQUFJQSxXQUFXOzs7Ozt5QkFDeEI7WUFDTixLQUFLLENBQUM7Z0JBQ04scUJBQU8sOERBQUNsQyw4REFBZTtvQkFDdkI2QixXQUFXLEVBQ05BLFdBQVc7b0JBQ1pFLEtBQUssRUFBRUEsS0FBSztvQkFDWkcsV0FBVyxFQUFJQSxXQUFXOzs7Ozt5QkFDeEI7WUFDTixLQUFLLENBQUM7Z0JBQ04scUJBQU8sOERBQUNyQywrREFBYztvQkFDdEJnQyxXQUFXLEVBQ05BLFdBQVc7b0JBQ1pFLEtBQUssRUFBRUEsS0FBSztvQkFDWkcsV0FBVyxFQUFJQSxXQUFXOzs7Ozt5QkFDeEI7WUFDTixLQUFLLENBQUM7Z0JBQ04scUJBQU8sOERBQUNwQyx5REFBVTtvQkFDZCtCLFdBQVcsRUFBSUEsV0FBVztvQkFDMUJFLEtBQUssRUFBRUEsS0FBSztvQkFDWkcsV0FBVyxFQUFJQSxXQUFXOzs7Ozt5QkFDeEI7WUFDTixLQUFLLENBQUM7Z0JBQ04scUJBQU8sOERBQUNqQyxzREFBVztvQkFDZjRCLFdBQVcsRUFBSUEsV0FBVztvQkFDMUJFLEtBQUssRUFBRUEsS0FBSztvQkFDWkcsV0FBVyxFQUFJQSxXQUFXOzs7Ozt5QkFDeEI7WUFDTixRQUFRO1NBQ1g7S0FDSjtJQUVELElBQU1BLFdBQVcsR0FBRSxTQUFDQyxTQUFTLEVBQUs7UUFDOUIsSUFBSUMsT0FBTyxHQUFHUCxXQUFXO1FBRXpCTSxTQUFTLEtBQUssTUFBTSxHQUFHQyxPQUFPLEVBQUUsR0FBR0EsT0FBTyxFQUFFLENBQUM7UUFDN0MsMEJBQTBCO1FBRTFCQSxPQUFPLEdBQUcsQ0FBQyxJQUFJQSxPQUFPLElBQUlMLEtBQUssQ0FBQ00sTUFBTSxJQUFJUCxjQUFjLENBQUNNLE9BQU8sQ0FBQztLQUNwRTtJQUNILHFCQUNFO2tCQUNJLDRFQUFDRSxLQUFHO1lBQUNDLFNBQVMsRUFBQyxzREFBc0Q7OzhCQUVqRSw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLDJCQUEyQjs4QkFDdEMsNEVBQUM1QyxnREFBVzt3QkFDWm9DLEtBQUssRUFBRUEsS0FBSzt3QkFDWkYsV0FBVyxFQUFJQSxXQUFXOzs7Ozs0QkFDeEI7Ozs7O3dCQUNBOzhCQUdOLDhEQUFDUyxLQUFHO29CQUFDQyxTQUFTLEVBQUMsWUFBWTs4QkFDdEJQLFdBQVcsQ0FBQ0gsV0FBVyxDQUFDOzs7Ozt3QkFDdkI7Ozs7OztnQkFVSjtxQkFDUCxDQUNKO0NBQ0Y7R0E3R1ExQixTQUFTOztRQUVIRCxrREFBUzs7O0FBRmZDLEtBQUFBLFNBQVM7QUErR2xCLCtEQUFlQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWFpblBhZ2UvZm9ybVN0ZXAvbWFqb3JGb3JtLmpzP2RiNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFN0ZXBwZXJQYWdlIGZyb20gJy4vc3RlcHBlcidcbmltcG9ydCBTdGVwcGVyQ29udHJvbCBmcm9tICcuL1N0ZXBwZXJDb250cm9sJ1xuaW1wb3J0IFNlbGVjdExhbmd1YWdlIGZyb20gJy4vc3RlcHMvU2VsZWN0RnJhbWV3b3Jrcyc7XG5pbXBvcnQgU2VsZWN0TGFzdCBmcm9tICcuL3N0ZXBzL1NlbGVjdExhc3QnO1xuaW1wb3J0IFNlbGVjdExldmVsIGZyb20gJy4vc3RlcHMvU2VsZWN0TGV2ZWwnO1xuaW1wb3J0IFNlbGVjdExhbmd1YWdlcyBmcm9tICcuL3N0ZXBzL1NlbGVjdExhbmd1YWdlcyc7XG5pbXBvcnQgU3VjY2Vzc1BhZ2UgZnJvbSAnLi9zdGVwcy9zdWNjZXNzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5mdW5jdGlvbiBNYWpvckZvcm0oKSB7XG5jb25zdCBbc3RhcnRQb2ludCwgc2V0c3RhcnRQb2ludF0gPSB1c2VTdGF0ZSgxKTtcbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgdXNlRWZmZWN0KCgpID0+e1xuICAgICAgICBjb25zdCB1c2VyUmVnRGF0YSA9IHJvdXRlci5hc1BhdGguc2xpY2UoMTApXG4gICAgICAgIGlmKHVzZXJSZWdEYXRhLnN0YXJ0c1dpdGgoJ3dlbGNvbWUnKSl7XG4gICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh1c2VyUmVnRGF0YSlcbiAgICAgICAgIHZhciB1c2VyVG9rZW4gPSBwYXJhbWV0ZXJzLmdldCgnd2VsY29tZScpXG4gICAgICAgICB2YXIgY2hlY2tGdWxsUmVnID0gcGFyYW1ldGVycy5nZXQoJ2lzRnVsbHlSZWcnKS8vXG5cbiAgICAgICAgIGlmKGNoZWNrRnVsbFJlZyA9PSBudWxsKXtzZXRzdGFydFBvaW50KDEpXG59ZWxzZXtcbiAgICAgICAgICAgICBzZXRzdGFydFBvaW50KDUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlclRva2VuJywgSlNPTi5zdHJpbmdpZnkodXNlclRva2VuKSlcbiAgICAgICAgICAgIHZhciBjaGVja1Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyVG9rZW5cIilcbiAgICAgICAgfVxuICAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIGxvY2F0aW9uLmhyZWYuc3BsaXQoXCI/XCIpWzBdKVxuICAgICAgIGlmKGNoZWNrVG9rZW4gPT0gJ3VuZGVmaW5lZCcgfHwgY2hlY2tUb2tlbiA9PSBudWxsIHx8IGNoZWNrVG9rZW4gPT0gJycpe1xuICAgICAgICAgcm91dGVyLnB1c2goYC9gKVxuICAgICAgIH1cbiAgXG4gICAgfSwgW10pXG5cbiAgICBjb25zdCBbY3VycmVudFN0ZXAsIHNldEN1cnJlbnRTdGVwXSA9IHVzZVN0YXRlKHN0YXJ0UG9pbnQpXG5cbiAgICBjb25zdCBzdGVwcyA9IFtcbiAgICAgICAgXCJTZWxlY3QgTGV2ZWxcIixcbiAgICAgICAgXCJTZWxlY3QgTGFuZ3VhZ2VcIixcbiAgICAgICAgXCJTZWxlY3QgRnJhbWV3b3JrXCIsXG4gICAgICAgIFwiUGVyc29uYWwgRGV0YWlsXCIsXG4gICAgICAgIFwiU3VjY2Vzc1wiXG4gICAgXTtcblxuICAgIGNvbnN0IGRpc3BsYXlTdGVwID0gKHN0ZXApID0+IHtcbiAgICAgICAgc3dpdGNoKHN0ZXApIHtcbiAgICAgICAgICAgIGNhc2UgMTogXG4gICAgICAgICAgICByZXR1cm4gPFNlbGVjdExldmVsIFxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGVwID0ge2N1cnJlbnRTdGVwfVxuICAgICAgICAgICAgICAgIHN0ZXBzPXtzdGVwc31cbiAgICAgICAgICAgICAgICBoYW5kbGVDbGljayA9IHtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgY2FzZSAyOiBcbiAgICAgICAgICAgIHJldHVybiA8U2VsZWN0TGFuZ3VhZ2VzIFxuICAgICAgICAgICAgY3VycmVudFN0ZXAgPSBcbiAgICAgICAgICAgICAgICB7Y3VycmVudFN0ZXB9XG4gICAgICAgICAgICAgICAgc3RlcHM9e3N0ZXBzfVxuICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrID0ge2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBjYXNlIDM6IFxuICAgICAgICAgICAgcmV0dXJuIDxTZWxlY3RMYW5ndWFnZSBcbiAgICAgICAgICAgIGN1cnJlbnRTdGVwID0gXG4gICAgICAgICAgICAgICAge2N1cnJlbnRTdGVwfVxuICAgICAgICAgICAgICAgIHN0ZXBzPXtzdGVwc31cbiAgICAgICAgICAgICAgICBoYW5kbGVDbGljayA9IHtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgY2FzZSA0OiBcbiAgICAgICAgICAgIHJldHVybiA8U2VsZWN0TGFzdCBcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RlcCA9IHtjdXJyZW50U3RlcH1cbiAgICAgICAgICAgICAgICBzdGVwcz17c3RlcHN9XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2sgPSB7aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIGNhc2UgNTogXG4gICAgICAgICAgICByZXR1cm4gPFN1Y2Nlc3NQYWdlIFxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGVwID0ge2N1cnJlbnRTdGVwfVxuICAgICAgICAgICAgICAgIHN0ZXBzPXtzdGVwc31cbiAgICAgICAgICAgICAgICBoYW5kbGVDbGljayA9IHtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0oZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGxldCBuZXdTdGVwID0gY3VycmVudFN0ZXA7XG5cbiAgICAgICAgZGlyZWN0aW9uID09PSBcIm5leHRcIiA/IG5ld1N0ZXArKyA6IG5ld1N0ZXAtLTtcbiAgICAgICAgLy8gc3RlcHMgYXJlIHdpdGhpbiBib3VuZHNcblxuICAgICAgICBuZXdTdGVwID4gMCAmJiBuZXdTdGVwIDw9IHN0ZXBzLmxlbmd0aCAmJiBzZXRDdXJyZW50U3RlcChuZXdTdGVwKVxuICAgIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctMy81IG14LWF1dG8gc2hhZG93LXhsIHJvdW5kZWQtMnhsIHBiLTIgYmctd2hpdGVcIj5cbiAgICAgICAgICAgIHsvKiBTdGVwcGVyICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgaG9yaXpvbnRhbCBtdC01XCI+XG4gICAgICAgICAgICAgICAgPFN0ZXBwZXJQYWdlIFxuICAgICAgICAgICAgICAgIHN0ZXBzPXtzdGVwc31cbiAgICAgICAgICAgICAgICBjdXJyZW50U3RlcCA9IHtjdXJyZW50U3RlcH0gXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogZGlzcGxheSBjb21wb25lbnQgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIHAtMTBcIj5cbiAgICAgICAgICAgICAgICB7ZGlzcGxheVN0ZXAoY3VycmVudFN0ZXApfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBOYXZpZ2F0aW9uIGNvbnRyb2xzICovfVxuICAgICAgICAgICAgey8qIHtjdXJyZW50U3RlcCAhPT0gc3RlcHMubGVuZ3RoICYmIFxuICAgICAgICAgICAgICAgIDxTdGVwcGVyQ29udHJvbCBcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RlcCA9IHtjdXJyZW50U3RlcH1cbiAgICAgICAgICAgICAgICBzdGVwcz17c3RlcHN9XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2sgPSB7aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH0gKi99XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1ham9yRm9ybSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU3RlcHBlclBhZ2UiLCJTdGVwcGVyQ29udHJvbCIsIlNlbGVjdExhbmd1YWdlIiwiU2VsZWN0TGFzdCIsIlNlbGVjdExldmVsIiwiU2VsZWN0TGFuZ3VhZ2VzIiwiU3VjY2Vzc1BhZ2UiLCJ1c2VSb3V0ZXIiLCJNYWpvckZvcm0iLCJzdGFydFBvaW50Iiwic2V0c3RhcnRQb2ludCIsInJvdXRlciIsInVzZXJSZWdEYXRhIiwiYXNQYXRoIiwic2xpY2UiLCJzdGFydHNXaXRoIiwicGFyYW1ldGVycyIsIlVSTFNlYXJjaFBhcmFtcyIsInVzZXJUb2tlbiIsImdldCIsImNoZWNrRnVsbFJlZyIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiY2hlY2tUb2tlbiIsImdldEl0ZW0iLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwibG9jYXRpb24iLCJocmVmIiwic3BsaXQiLCJwdXNoIiwiY3VycmVudFN0ZXAiLCJzZXRDdXJyZW50U3RlcCIsInN0ZXBzIiwiZGlzcGxheVN0ZXAiLCJzdGVwIiwiaGFuZGxlQ2xpY2siLCJkaXJlY3Rpb24iLCJuZXdTdGVwIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/mainPage/formStep/majorForm.js\n");

/***/ })

});