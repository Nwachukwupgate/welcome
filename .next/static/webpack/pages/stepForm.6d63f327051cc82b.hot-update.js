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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stepper */ \"./components/mainPage/formStep/stepper.js\");\n/* harmony import */ var _StepperControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StepperControl */ \"./components/mainPage/formStep/StepperControl.js\");\n/* harmony import */ var _steps_SelectFrameworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./steps/SelectFrameworks */ \"./components/mainPage/formStep/steps/SelectFrameworks.js\");\n/* harmony import */ var _steps_SelectLast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./steps/SelectLast */ \"./components/mainPage/formStep/steps/SelectLast.js\");\n/* harmony import */ var _steps_SelectLevel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./steps/SelectLevel */ \"./components/mainPage/formStep/steps/SelectLevel.js\");\n/* harmony import */ var _steps_SelectLanguages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./steps/SelectLanguages */ \"./components/mainPage/formStep/steps/SelectLanguages.js\");\n/* harmony import */ var _steps_success__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./steps/success */ \"./components/mainPage/formStep/steps/success.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MajorForm() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), startPoint = ref[0], setstartPoint = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var userRegData = router.asPath.slice(10);\n        if (userRegData.startsWith(\"welcome\")) {\n            var parameters = new URLSearchParams(userRegData);\n            var userToken = parameters.get(\"welcome\");\n            var checkFullReg = parameters.get(\"isFullyReg\") //\n            ;\n            console.log(checkFullReg, \"checkFullReg\");\n            if (checkFullReg == null) {\n                setstartPoint(1);\n            } else {\n                setstartPoint(5);\n            }\n        }\n        if (true) {\n            window.localStorage.setItem(\"userToken\", JSON.stringify(userToken));\n            var checkToken = localStorage.getItem(\"userToken\");\n        }\n        history.replaceState(null, \"\", location.href.split(\"?\")[0]);\n        if (checkToken == \"undefined\" || checkToken == null || checkToken == \"\") {\n            router.push(\"/\");\n        }\n    }, []);\n    console.log(startPoint, \"startPoint\");\n    // const [currentStep, setCurrentStep] = useState(startPoint)\n    var steps = [\n        \"Select Level\",\n        \"Select Language\",\n        \"Select Framework\",\n        \"Personal Detail\",\n        \"Success\"\n    ];\n    var displayStep = function(step) {\n        switch(step){\n            case 1:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_steps_SelectLevel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    currentStep: currentStep,\n                    steps: steps,\n                    handleClick: handleClick\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 48,\n                    columnNumber: 20\n                }, _this);\n            case 2:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_steps_SelectLanguages__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    currentStep: currentStep,\n                    steps: steps,\n                    handleClick: handleClick\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 54,\n                    columnNumber: 20\n                }, _this);\n            case 3:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_steps_SelectFrameworks__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    currentStep: currentStep,\n                    steps: steps,\n                    handleClick: handleClick\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 61,\n                    columnNumber: 20\n                }, _this);\n            case 4:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_steps_SelectLast__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    currentStep: currentStep,\n                    steps: steps,\n                    handleClick: handleClick\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 68,\n                    columnNumber: 20\n                }, _this);\n            case 5:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_steps_success__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    currentStep: currentStep,\n                    steps: steps,\n                    handleClick: handleClick\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 74,\n                    columnNumber: 20\n                }, _this);\n            default:\n        }\n    };\n    var handleClick = function(direction) {\n        var newStep = currentStep;\n        direction === \"next\" ? newStep++ : newStep--;\n        // steps are within bounds\n        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"md:w-3/5 mx-auto shadow-xl rounded-2xl pb-2 bg-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container horizontal mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stepper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        steps: steps,\n                        currentStep: currentStep\n                    }, void 0, false, {\n                        fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                        lineNumber: 96,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 95,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-10 p-10\",\n                    children: displayStep(currentStep)\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 103,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n            lineNumber: 93,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(MajorForm, \"/ZagFVqfjbbwUjTLs+O4/CuQ4vk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter\n    ];\n});\n_c = MajorForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MajorForm);\nvar _c;\n$RefreshReg$(_c, \"MajorForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5QYWdlL2Zvcm1TdGVwL21ham9yRm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQThDO0FBQ1g7QUFDVTtBQUNTO0FBQ1Y7QUFDRTtBQUNRO0FBQ1o7QUFDSDs7QUFFdkMsU0FBU1csU0FBUyxHQUFHOzs7SUFDckIsSUFBb0NWLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFYL0MsVUFXaUIsR0FBbUJBLEdBQVcsR0FBOUIsRUFYakIsYUFXZ0MsR0FBSUEsR0FBVyxHQUFmO0lBQ2hDLElBQU1hLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUN0QlIsZ0RBQVMsQ0FBQyxXQUFLO1FBQ1gsSUFBTWEsV0FBVyxHQUFHRCxNQUFNLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUMzQyxJQUFHRixXQUFXLENBQUNHLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBQztZQUNwQyxJQUFNQyxVQUFVLEdBQUcsSUFBSUMsZUFBZSxDQUFDTCxXQUFXLENBQUM7WUFDbkQsSUFBSU0sU0FBUyxHQUFHRixVQUFVLENBQUNHLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDekMsSUFBSUMsWUFBWSxHQUFHSixVQUFVLENBQUNHLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRTtZQUFGO1lBQ3hERSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsWUFBWSxFQUFDLGNBQWMsQ0FBQztZQUMvQixJQUFHQSxZQUFZLElBQUksSUFBSSxFQUFDO2dCQUFDVixhQUFhLENBQUMsQ0FBQyxDQUFDO2FBQUMsTUFBSTtnQkFDOUNBLGFBQWEsQ0FBQyxDQUFDLENBQUM7YUFBQztTQUNqQjtRQUNELElBQUksSUFBNkIsRUFBRTtZQUMvQmEsTUFBTSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxXQUFXLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDVCxTQUFTLENBQUMsQ0FBQztZQUNuRSxJQUFJVSxVQUFVLEdBQUdKLFlBQVksQ0FBQ0ssT0FBTyxDQUFDLFdBQVcsQ0FBQztTQUNyRDtRQUNGQyxPQUFPLENBQUNDLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFQyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUdOLFVBQVUsSUFBSSxXQUFXLElBQUlBLFVBQVUsSUFBSSxJQUFJLElBQUlBLFVBQVUsSUFBSSxFQUFFLEVBQUM7WUFDckVqQixNQUFNLENBQUN3QixJQUFJLENBQUUsR0FBQyxDQUFFO1NBQ2pCO0tBRUgsRUFBRSxFQUFFLENBQUM7SUFDUmQsT0FBTyxDQUFDQyxHQUFHLENBQUNiLFVBQVUsRUFBQyxZQUFZLENBQUM7SUFDbEMsNkRBQTZEO0lBRTdELElBQU0yQixLQUFLLEdBQUc7UUFDVixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsU0FBUztLQUNaO0lBRUQsSUFBTUMsV0FBVyxHQUFHLFNBQUNDLElBQUksRUFBSztRQUMxQixPQUFPQSxJQUFJO1lBQ1AsS0FBSyxDQUFDO2dCQUNOLHFCQUFPLDhEQUFDbEMsMERBQVc7b0JBQ2ZtQyxXQUFXLEVBQUlBLFdBQVc7b0JBQzFCSCxLQUFLLEVBQUVBLEtBQUs7b0JBQ1pJLFdBQVcsRUFBSUEsV0FBVzs7Ozs7eUJBQ3hCO1lBQ04sS0FBSyxDQUFDO2dCQUNOLHFCQUFPLDhEQUFDbkMsOERBQWU7b0JBQ3ZCa0MsV0FBVyxFQUNOQSxXQUFXO29CQUNaSCxLQUFLLEVBQUVBLEtBQUs7b0JBQ1pJLFdBQVcsRUFBSUEsV0FBVzs7Ozs7eUJBQ3hCO1lBQ04sS0FBSyxDQUFDO2dCQUNOLHFCQUFPLDhEQUFDdEMsK0RBQWM7b0JBQ3RCcUMsV0FBVyxFQUNOQSxXQUFXO29CQUNaSCxLQUFLLEVBQUVBLEtBQUs7b0JBQ1pJLFdBQVcsRUFBSUEsV0FBVzs7Ozs7eUJBQ3hCO1lBQ04sS0FBSyxDQUFDO2dCQUNOLHFCQUFPLDhEQUFDckMseURBQVU7b0JBQ2RvQyxXQUFXLEVBQUlBLFdBQVc7b0JBQzFCSCxLQUFLLEVBQUVBLEtBQUs7b0JBQ1pJLFdBQVcsRUFBSUEsV0FBVzs7Ozs7eUJBQ3hCO1lBQ04sS0FBSyxDQUFDO2dCQUNOLHFCQUFPLDhEQUFDbEMsc0RBQVc7b0JBQ2ZpQyxXQUFXLEVBQUlBLFdBQVc7b0JBQzFCSCxLQUFLLEVBQUVBLEtBQUs7b0JBQ1pJLFdBQVcsRUFBSUEsV0FBVzs7Ozs7eUJBQ3hCO1lBQ04sUUFBUTtTQUNYO0tBQ0o7SUFFRCxJQUFNQSxXQUFXLEdBQUUsU0FBQ0MsU0FBUyxFQUFLO1FBQzlCLElBQUlDLE9BQU8sR0FBR0gsV0FBVztRQUV6QkUsU0FBUyxLQUFLLE1BQU0sR0FBR0MsT0FBTyxFQUFFLEdBQUdBLE9BQU8sRUFBRSxDQUFDO1FBQzdDLDBCQUEwQjtRQUUxQkEsT0FBTyxHQUFHLENBQUMsSUFBSUEsT0FBTyxJQUFJTixLQUFLLENBQUNPLE1BQU0sSUFBSUMsY0FBYyxDQUFDRixPQUFPLENBQUM7S0FDcEU7SUFDSCxxQkFDRTtrQkFDSSw0RUFBQ0csS0FBRztZQUFDQyxTQUFTLEVBQUMsc0RBQXNEOzs4QkFFakUsOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQywyQkFBMkI7OEJBQ3RDLDRFQUFDOUMsZ0RBQVc7d0JBQ1pvQyxLQUFLLEVBQUVBLEtBQUs7d0JBQ1pHLFdBQVcsRUFBSUEsV0FBVzs7Ozs7NEJBQ3hCOzs7Ozt3QkFDQTs4QkFHTiw4REFBQ00sS0FBRztvQkFBQ0MsU0FBUyxFQUFDLFlBQVk7OEJBQ3RCVCxXQUFXLENBQUNFLFdBQVcsQ0FBQzs7Ozs7d0JBQ3ZCOzs7Ozs7Z0JBVUo7cUJBQ1AsQ0FDSjtDQUNGO0dBM0dRL0IsU0FBUzs7UUFFSEQsa0RBQVM7OztBQUZmQyxLQUFBQSxTQUFTO0FBNkdsQiwrREFBZUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21haW5QYWdlL2Zvcm1TdGVwL21ham9yRm9ybS5qcz9kYjc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBTdGVwcGVyUGFnZSBmcm9tICcuL3N0ZXBwZXInXG5pbXBvcnQgU3RlcHBlckNvbnRyb2wgZnJvbSAnLi9TdGVwcGVyQ29udHJvbCdcbmltcG9ydCBTZWxlY3RMYW5ndWFnZSBmcm9tICcuL3N0ZXBzL1NlbGVjdEZyYW1ld29ya3MnO1xuaW1wb3J0IFNlbGVjdExhc3QgZnJvbSAnLi9zdGVwcy9TZWxlY3RMYXN0JztcbmltcG9ydCBTZWxlY3RMZXZlbCBmcm9tICcuL3N0ZXBzL1NlbGVjdExldmVsJztcbmltcG9ydCBTZWxlY3RMYW5ndWFnZXMgZnJvbSAnLi9zdGVwcy9TZWxlY3RMYW5ndWFnZXMnO1xuaW1wb3J0IFN1Y2Nlc3NQYWdlIGZyb20gJy4vc3RlcHMvc3VjY2Vzcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZnVuY3Rpb24gTWFqb3JGb3JtKCkge1xuY29uc3QgW3N0YXJ0UG9pbnQsIHNldHN0YXJ0UG9pbnRdID0gdXNlU3RhdGUoMCk7XG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIHVzZUVmZmVjdCgoKSA9PntcbiAgICAgICAgY29uc3QgdXNlclJlZ0RhdGEgPSByb3V0ZXIuYXNQYXRoLnNsaWNlKDEwKVxuICAgICAgICBpZih1c2VyUmVnRGF0YS5zdGFydHNXaXRoKCd3ZWxjb21lJykpe1xuICAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IG5ldyBVUkxTZWFyY2hQYXJhbXModXNlclJlZ0RhdGEpXG4gICAgICAgICB2YXIgdXNlclRva2VuID0gcGFyYW1ldGVycy5nZXQoJ3dlbGNvbWUnKVxuICAgICAgICAgdmFyIGNoZWNrRnVsbFJlZyA9IHBhcmFtZXRlcnMuZ2V0KCdpc0Z1bGx5UmVnJykvL1xuY29uc29sZS5sb2coY2hlY2tGdWxsUmVnLCdjaGVja0Z1bGxSZWcnKVxuICAgICAgICAgaWYoY2hlY2tGdWxsUmVnID09IG51bGwpe3NldHN0YXJ0UG9pbnQoMSl9ZWxzZXtcbiAgICAgICAgIHNldHN0YXJ0UG9pbnQoNSl9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlclRva2VuJywgSlNPTi5zdHJpbmdpZnkodXNlclRva2VuKSlcbiAgICAgICAgICAgIHZhciBjaGVja1Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyVG9rZW5cIilcbiAgICAgICAgfVxuICAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIGxvY2F0aW9uLmhyZWYuc3BsaXQoXCI/XCIpWzBdKVxuICAgICAgIGlmKGNoZWNrVG9rZW4gPT0gJ3VuZGVmaW5lZCcgfHwgY2hlY2tUb2tlbiA9PSBudWxsIHx8IGNoZWNrVG9rZW4gPT0gJycpe1xuICAgICAgICAgcm91dGVyLnB1c2goYC9gKVxuICAgICAgIH1cbiAgXG4gICAgfSwgW10pXG4gIGNvbnNvbGUubG9nKHN0YXJ0UG9pbnQsJ3N0YXJ0UG9pbnQnKVxuICAgIC8vIGNvbnN0IFtjdXJyZW50U3RlcCwgc2V0Q3VycmVudFN0ZXBdID0gdXNlU3RhdGUoc3RhcnRQb2ludClcblxuICAgIGNvbnN0IHN0ZXBzID0gW1xuICAgICAgICBcIlNlbGVjdCBMZXZlbFwiLFxuICAgICAgICBcIlNlbGVjdCBMYW5ndWFnZVwiLFxuICAgICAgICBcIlNlbGVjdCBGcmFtZXdvcmtcIixcbiAgICAgICAgXCJQZXJzb25hbCBEZXRhaWxcIixcbiAgICAgICAgXCJTdWNjZXNzXCJcbiAgICBdO1xuXG4gICAgY29uc3QgZGlzcGxheVN0ZXAgPSAoc3RlcCkgPT4ge1xuICAgICAgICBzd2l0Y2goc3RlcCkge1xuICAgICAgICAgICAgY2FzZSAxOiBcbiAgICAgICAgICAgIHJldHVybiA8U2VsZWN0TGV2ZWwgXG4gICAgICAgICAgICAgICAgY3VycmVudFN0ZXAgPSB7Y3VycmVudFN0ZXB9XG4gICAgICAgICAgICAgICAgc3RlcHM9e3N0ZXBzfVxuICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrID0ge2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBjYXNlIDI6IFxuICAgICAgICAgICAgcmV0dXJuIDxTZWxlY3RMYW5ndWFnZXMgXG4gICAgICAgICAgICBjdXJyZW50U3RlcCA9IFxuICAgICAgICAgICAgICAgIHtjdXJyZW50U3RlcH1cbiAgICAgICAgICAgICAgICBzdGVwcz17c3RlcHN9XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2sgPSB7aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIGNhc2UgMzogXG4gICAgICAgICAgICByZXR1cm4gPFNlbGVjdExhbmd1YWdlIFxuICAgICAgICAgICAgY3VycmVudFN0ZXAgPSBcbiAgICAgICAgICAgICAgICB7Y3VycmVudFN0ZXB9XG4gICAgICAgICAgICAgICAgc3RlcHM9e3N0ZXBzfVxuICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrID0ge2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBjYXNlIDQ6IFxuICAgICAgICAgICAgcmV0dXJuIDxTZWxlY3RMYXN0IFxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGVwID0ge2N1cnJlbnRTdGVwfVxuICAgICAgICAgICAgICAgIHN0ZXBzPXtzdGVwc31cbiAgICAgICAgICAgICAgICBoYW5kbGVDbGljayA9IHtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgY2FzZSA1OiBcbiAgICAgICAgICAgIHJldHVybiA8U3VjY2Vzc1BhZ2UgXG4gICAgICAgICAgICAgICAgY3VycmVudFN0ZXAgPSB7Y3VycmVudFN0ZXB9XG4gICAgICAgICAgICAgICAgc3RlcHM9e3N0ZXBzfVxuICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrID0ge2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPShkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgbGV0IG5ld1N0ZXAgPSBjdXJyZW50U3RlcDtcblxuICAgICAgICBkaXJlY3Rpb24gPT09IFwibmV4dFwiID8gbmV3U3RlcCsrIDogbmV3U3RlcC0tO1xuICAgICAgICAvLyBzdGVwcyBhcmUgd2l0aGluIGJvdW5kc1xuXG4gICAgICAgIG5ld1N0ZXAgPiAwICYmIG5ld1N0ZXAgPD0gc3RlcHMubGVuZ3RoICYmIHNldEN1cnJlbnRTdGVwKG5ld1N0ZXApXG4gICAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0zLzUgbXgtYXV0byBzaGFkb3cteGwgcm91bmRlZC0yeGwgcGItMiBiZy13aGl0ZVwiPlxuICAgICAgICAgICAgey8qIFN0ZXBwZXIgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBob3Jpem9udGFsIG10LTVcIj5cbiAgICAgICAgICAgICAgICA8U3RlcHBlclBhZ2UgXG4gICAgICAgICAgICAgICAgc3RlcHM9e3N0ZXBzfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGVwID0ge2N1cnJlbnRTdGVwfSBcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBkaXNwbGF5IGNvbXBvbmVudCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgcC0xMFwiPlxuICAgICAgICAgICAgICAgIHtkaXNwbGF5U3RlcChjdXJyZW50U3RlcCl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIE5hdmlnYXRpb24gY29udHJvbHMgKi99XG4gICAgICAgICAgICB7Lyoge2N1cnJlbnRTdGVwICE9PSBzdGVwcy5sZW5ndGggJiYgXG4gICAgICAgICAgICAgICAgPFN0ZXBwZXJDb250cm9sIFxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGVwID0ge2N1cnJlbnRTdGVwfVxuICAgICAgICAgICAgICAgIHN0ZXBzPXtzdGVwc31cbiAgICAgICAgICAgICAgICBoYW5kbGVDbGljayA9IHtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfSAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFqb3JGb3JtIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTdGVwcGVyUGFnZSIsIlN0ZXBwZXJDb250cm9sIiwiU2VsZWN0TGFuZ3VhZ2UiLCJTZWxlY3RMYXN0IiwiU2VsZWN0TGV2ZWwiLCJTZWxlY3RMYW5ndWFnZXMiLCJTdWNjZXNzUGFnZSIsInVzZVJvdXRlciIsIk1ham9yRm9ybSIsInN0YXJ0UG9pbnQiLCJzZXRzdGFydFBvaW50Iiwicm91dGVyIiwidXNlclJlZ0RhdGEiLCJhc1BhdGgiLCJzbGljZSIsInN0YXJ0c1dpdGgiLCJwYXJhbWV0ZXJzIiwiVVJMU2VhcmNoUGFyYW1zIiwidXNlclRva2VuIiwiZ2V0IiwiY2hlY2tGdWxsUmVnIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiY2hlY2tUb2tlbiIsImdldEl0ZW0iLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwibG9jYXRpb24iLCJocmVmIiwic3BsaXQiLCJwdXNoIiwic3RlcHMiLCJkaXNwbGF5U3RlcCIsInN0ZXAiLCJjdXJyZW50U3RlcCIsImhhbmRsZUNsaWNrIiwiZGlyZWN0aW9uIiwibmV3U3RlcCIsImxlbmd0aCIsInNldEN1cnJlbnRTdGVwIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/mainPage/formStep/majorForm.js\n");

/***/ })

});