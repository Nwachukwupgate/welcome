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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stepper */ \"./components/mainPage/formStep/stepper.js\");\n/* harmony import */ var _StepperControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StepperControl */ \"./components/mainPage/formStep/StepperControl.js\");\n/* harmony import */ var _steps_SelectFrameworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./steps/SelectFrameworks */ \"./components/mainPage/formStep/steps/SelectFrameworks.js\");\n/* harmony import */ var _steps_SelectLast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./steps/SelectLast */ \"./components/mainPage/formStep/steps/SelectLast.js\");\n/* harmony import */ var _steps_SelectLevel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./steps/SelectLevel */ \"./components/mainPage/formStep/steps/SelectLevel.js\");\n/* harmony import */ var _steps_SelectLanguages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./steps/SelectLanguages */ \"./components/mainPage/formStep/steps/SelectLanguages.js\");\n/* harmony import */ var _steps_success__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./steps/success */ \"./components/mainPage/formStep/steps/success.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MajorForm() {\n    var _this = this;\n    _s();\n    // const [startPoint, setstartPoint] = useState(0);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentStep = ref[0], setCurrentStep = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var userRegData = router.asPath.slice(10);\n        if (userRegData.startsWith(\"welcome\")) {\n            var parameters = new URLSearchParams(userRegData);\n            var userToken = parameters.get(\"welcome\");\n            var checkFullReg = parameters.get(\"isFullyReg\") //\n            ;\n            console.log(checkFullReg, \"checkFullReg\");\n            if (checkFullReg == null) {\n                setCurrentStep(1);\n            } else {\n                setstartPoint(5);\n            }\n        }\n        if (true) {\n            window.localStorage.setItem(\"userToken\", JSON.stringify(userToken));\n            var checkToken = localStorage.getItem(\"userToken\");\n        }\n        history.replaceState(null, \"\", location.href.split(\"?\")[0]);\n        if (checkToken == \"undefined\" || checkToken == null || checkToken == \"\") {\n            router.push(\"/\");\n        }\n    }, []);\n    console.log(startPoint, \"startPoint\");\n    // const [currentStep, setCurrentStep] = useState(startPoint)\n    var steps = [\n        \"Select Level\",\n        \"Select Language\",\n        \"Select Framework\",\n        \"Personal Detail\",\n        \"Success\"\n    ];\n    var displayStep = function(step) {\n        switch(step){\n            case 1:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_steps_SelectLevel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    currentStep: currentStep,\n                    steps: steps,\n                    handleClick: handleClick\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 49,\n                    columnNumber: 20\n                }, _this);\n            case 2:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_steps_SelectLanguages__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    currentStep: currentStep,\n                    steps: steps,\n                    handleClick: handleClick\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 55,\n                    columnNumber: 20\n                }, _this);\n            case 3:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_steps_SelectFrameworks__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    currentStep: currentStep,\n                    steps: steps,\n                    handleClick: handleClick\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 62,\n                    columnNumber: 20\n                }, _this);\n            case 4:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_steps_SelectLast__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    currentStep: currentStep,\n                    steps: steps,\n                    handleClick: handleClick\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 69,\n                    columnNumber: 20\n                }, _this);\n            case 5:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_steps_success__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    currentStep: currentStep,\n                    steps: steps,\n                    handleClick: handleClick\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 75,\n                    columnNumber: 20\n                }, _this);\n            default:\n        }\n    };\n    var handleClick = function(direction) {\n        var newStep = currentStep;\n        direction === \"next\" ? newStep++ : newStep--;\n        // steps are within bounds\n        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"md:w-3/5 mx-auto shadow-xl rounded-2xl pb-2 bg-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container horizontal mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stepper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        steps: steps,\n                        currentStep: currentStep\n                    }, void 0, false, {\n                        fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 96,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-10 p-10\",\n                    children: displayStep(currentStep)\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 104,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n            lineNumber: 94,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(MajorForm, \"/ZagFVqfjbbwUjTLs+O4/CuQ4vk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter\n    ];\n});\n_c = MajorForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MajorForm);\nvar _c;\n$RefreshReg$(_c, \"MajorForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5QYWdlL2Zvcm1TdGVwL21ham9yRm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQThDO0FBQ1g7QUFDVTtBQUNTO0FBQ1Y7QUFDRTtBQUNRO0FBQ1o7QUFDSDs7QUFFdkMsU0FBU1csU0FBUyxHQUFHOzs7SUFDckIsbURBQW1EO0lBQ25ELElBQXNDVixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBWmpELFdBWWtCLEdBQW9CQSxHQUFXLEdBQS9CLEVBWmxCLGNBWWtDLEdBQUlBLEdBQVcsR0FBZjtJQUNsQyxJQUFNYSxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFDdEJSLGdEQUFTLENBQUMsV0FBSztRQUNYLElBQU1hLFdBQVcsR0FBR0QsTUFBTSxDQUFDRSxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDM0MsSUFBR0YsV0FBVyxDQUFDRyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUM7WUFDcEMsSUFBTUMsVUFBVSxHQUFHLElBQUlDLGVBQWUsQ0FBQ0wsV0FBVyxDQUFDO1lBQ25ELElBQUlNLFNBQVMsR0FBR0YsVUFBVSxDQUFDRyxHQUFHLENBQUMsU0FBUyxDQUFDO1lBQ3pDLElBQUlDLFlBQVksR0FBR0osVUFBVSxDQUFDRyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUU7WUFBRjtZQUN4REUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFlBQVksRUFBQyxjQUFjLENBQUM7WUFDL0IsSUFBR0EsWUFBWSxJQUFJLElBQUksRUFBQztnQkFBQ1YsY0FBYyxDQUFDLENBQUMsQ0FBQzthQUFDLE1BQUk7Z0JBQy9DYSxhQUFhLENBQUMsQ0FBQyxDQUFDO2FBQUM7U0FDakI7UUFDRCxJQUFJLElBQTZCLEVBQUU7WUFDL0JDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsV0FBVyxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1YsU0FBUyxDQUFDLENBQUM7WUFDbkUsSUFBSVcsVUFBVSxHQUFHSixZQUFZLENBQUNLLE9BQU8sQ0FBQyxXQUFXLENBQUM7U0FDckQ7UUFDRkMsT0FBTyxDQUFDQyxZQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRUMsUUFBUSxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFHTixVQUFVLElBQUksV0FBVyxJQUFJQSxVQUFVLElBQUksSUFBSSxJQUFJQSxVQUFVLElBQUksRUFBRSxFQUFDO1lBQ3JFbEIsTUFBTSxDQUFDeUIsSUFBSSxDQUFFLEdBQUMsQ0FBRTtTQUNqQjtLQUVILEVBQUUsRUFBRSxDQUFDO0lBQ1JmLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZSxVQUFVLEVBQUMsWUFBWSxDQUFDO0lBQ2xDLDZEQUE2RDtJQUU3RCxJQUFNQyxLQUFLLEdBQUc7UUFDVixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsU0FBUztLQUNaO0lBRUQsSUFBTUMsV0FBVyxHQUFHLFNBQUNDLElBQUksRUFBSztRQUMxQixPQUFPQSxJQUFJO1lBQ1AsS0FBSyxDQUFDO2dCQUNOLHFCQUFPLDhEQUFDcEMsMERBQVc7b0JBQ2ZLLFdBQVcsRUFBSUEsV0FBVztvQkFDMUI2QixLQUFLLEVBQUVBLEtBQUs7b0JBQ1pHLFdBQVcsRUFBSUEsV0FBVzs7Ozs7eUJBQ3hCO1lBQ04sS0FBSyxDQUFDO2dCQUNOLHFCQUFPLDhEQUFDcEMsOERBQWU7b0JBQ3ZCSSxXQUFXLEVBQ05BLFdBQVc7b0JBQ1o2QixLQUFLLEVBQUVBLEtBQUs7b0JBQ1pHLFdBQVcsRUFBSUEsV0FBVzs7Ozs7eUJBQ3hCO1lBQ04sS0FBSyxDQUFDO2dCQUNOLHFCQUFPLDhEQUFDdkMsK0RBQWM7b0JBQ3RCTyxXQUFXLEVBQ05BLFdBQVc7b0JBQ1o2QixLQUFLLEVBQUVBLEtBQUs7b0JBQ1pHLFdBQVcsRUFBSUEsV0FBVzs7Ozs7eUJBQ3hCO1lBQ04sS0FBSyxDQUFDO2dCQUNOLHFCQUFPLDhEQUFDdEMseURBQVU7b0JBQ2RNLFdBQVcsRUFBSUEsV0FBVztvQkFDMUI2QixLQUFLLEVBQUVBLEtBQUs7b0JBQ1pHLFdBQVcsRUFBSUEsV0FBVzs7Ozs7eUJBQ3hCO1lBQ04sS0FBSyxDQUFDO2dCQUNOLHFCQUFPLDhEQUFDbkMsc0RBQVc7b0JBQ2ZHLFdBQVcsRUFBSUEsV0FBVztvQkFDMUI2QixLQUFLLEVBQUVBLEtBQUs7b0JBQ1pHLFdBQVcsRUFBSUEsV0FBVzs7Ozs7eUJBQ3hCO1lBQ04sUUFBUTtTQUNYO0tBQ0o7SUFFRCxJQUFNQSxXQUFXLEdBQUUsU0FBQ0MsU0FBUyxFQUFLO1FBQzlCLElBQUlDLE9BQU8sR0FBR2xDLFdBQVc7UUFFekJpQyxTQUFTLEtBQUssTUFBTSxHQUFHQyxPQUFPLEVBQUUsR0FBR0EsT0FBTyxFQUFFLENBQUM7UUFDN0MsMEJBQTBCO1FBRTFCQSxPQUFPLEdBQUcsQ0FBQyxJQUFJQSxPQUFPLElBQUlMLEtBQUssQ0FBQ00sTUFBTSxJQUFJbEMsY0FBYyxDQUFDaUMsT0FBTyxDQUFDO0tBQ3BFO0lBQ0gscUJBQ0U7a0JBQ0ksNEVBQUNFLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLHNEQUFzRDs7OEJBRWpFLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsMkJBQTJCOzhCQUN0Qyw0RUFBQzlDLGdEQUFXO3dCQUNac0MsS0FBSyxFQUFFQSxLQUFLO3dCQUNaN0IsV0FBVyxFQUFJQSxXQUFXOzs7Ozs0QkFDeEI7Ozs7O3dCQUNBOzhCQUdOLDhEQUFDb0MsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLFlBQVk7OEJBQ3RCUCxXQUFXLENBQUM5QixXQUFXLENBQUM7Ozs7O3dCQUN2Qjs7Ozs7O2dCQVVKO3FCQUNQLENBQ0o7Q0FDRjtHQTVHUUQsU0FBUzs7UUFHSEQsa0RBQVM7OztBQUhmQyxLQUFBQSxTQUFTO0FBOEdsQiwrREFBZUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21haW5QYWdlL2Zvcm1TdGVwL21ham9yRm9ybS5qcz9kYjc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBTdGVwcGVyUGFnZSBmcm9tICcuL3N0ZXBwZXInXG5pbXBvcnQgU3RlcHBlckNvbnRyb2wgZnJvbSAnLi9TdGVwcGVyQ29udHJvbCdcbmltcG9ydCBTZWxlY3RMYW5ndWFnZSBmcm9tICcuL3N0ZXBzL1NlbGVjdEZyYW1ld29ya3MnO1xuaW1wb3J0IFNlbGVjdExhc3QgZnJvbSAnLi9zdGVwcy9TZWxlY3RMYXN0JztcbmltcG9ydCBTZWxlY3RMZXZlbCBmcm9tICcuL3N0ZXBzL1NlbGVjdExldmVsJztcbmltcG9ydCBTZWxlY3RMYW5ndWFnZXMgZnJvbSAnLi9zdGVwcy9TZWxlY3RMYW5ndWFnZXMnO1xuaW1wb3J0IFN1Y2Nlc3NQYWdlIGZyb20gJy4vc3RlcHMvc3VjY2Vzcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZnVuY3Rpb24gTWFqb3JGb3JtKCkge1xuLy8gY29uc3QgW3N0YXJ0UG9pbnQsIHNldHN0YXJ0UG9pbnRdID0gdXNlU3RhdGUoMCk7XG5jb25zdCBbY3VycmVudFN0ZXAsIHNldEN1cnJlbnRTdGVwXSA9IHVzZVN0YXRlKDApXG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIHVzZUVmZmVjdCgoKSA9PntcbiAgICAgICAgY29uc3QgdXNlclJlZ0RhdGEgPSByb3V0ZXIuYXNQYXRoLnNsaWNlKDEwKVxuICAgICAgICBpZih1c2VyUmVnRGF0YS5zdGFydHNXaXRoKCd3ZWxjb21lJykpe1xuICAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IG5ldyBVUkxTZWFyY2hQYXJhbXModXNlclJlZ0RhdGEpXG4gICAgICAgICB2YXIgdXNlclRva2VuID0gcGFyYW1ldGVycy5nZXQoJ3dlbGNvbWUnKVxuICAgICAgICAgdmFyIGNoZWNrRnVsbFJlZyA9IHBhcmFtZXRlcnMuZ2V0KCdpc0Z1bGx5UmVnJykvL1xuY29uc29sZS5sb2coY2hlY2tGdWxsUmVnLCdjaGVja0Z1bGxSZWcnKVxuICAgICAgICAgaWYoY2hlY2tGdWxsUmVnID09IG51bGwpe3NldEN1cnJlbnRTdGVwKDEpfWVsc2V7XG4gICAgICAgICBzZXRzdGFydFBvaW50KDUpfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJUb2tlbicsIEpTT04uc3RyaW5naWZ5KHVzZXJUb2tlbikpXG4gICAgICAgICAgICB2YXIgY2hlY2tUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclRva2VuXCIpXG4gICAgICAgIH1cbiAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBcIlwiLCBsb2NhdGlvbi5ocmVmLnNwbGl0KFwiP1wiKVswXSlcbiAgICAgICBpZihjaGVja1Rva2VuID09ICd1bmRlZmluZWQnIHx8IGNoZWNrVG9rZW4gPT0gbnVsbCB8fCBjaGVja1Rva2VuID09ICcnKXtcbiAgICAgICAgIHJvdXRlci5wdXNoKGAvYClcbiAgICAgICB9XG4gIFxuICAgIH0sIFtdKVxuICBjb25zb2xlLmxvZyhzdGFydFBvaW50LCdzdGFydFBvaW50JylcbiAgICAvLyBjb25zdCBbY3VycmVudFN0ZXAsIHNldEN1cnJlbnRTdGVwXSA9IHVzZVN0YXRlKHN0YXJ0UG9pbnQpXG5cbiAgICBjb25zdCBzdGVwcyA9IFtcbiAgICAgICAgXCJTZWxlY3QgTGV2ZWxcIixcbiAgICAgICAgXCJTZWxlY3QgTGFuZ3VhZ2VcIixcbiAgICAgICAgXCJTZWxlY3QgRnJhbWV3b3JrXCIsXG4gICAgICAgIFwiUGVyc29uYWwgRGV0YWlsXCIsXG4gICAgICAgIFwiU3VjY2Vzc1wiXG4gICAgXTtcblxuICAgIGNvbnN0IGRpc3BsYXlTdGVwID0gKHN0ZXApID0+IHtcbiAgICAgICAgc3dpdGNoKHN0ZXApIHtcbiAgICAgICAgICAgIGNhc2UgMTogXG4gICAgICAgICAgICByZXR1cm4gPFNlbGVjdExldmVsIFxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGVwID0ge2N1cnJlbnRTdGVwfVxuICAgICAgICAgICAgICAgIHN0ZXBzPXtzdGVwc31cbiAgICAgICAgICAgICAgICBoYW5kbGVDbGljayA9IHtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgY2FzZSAyOiBcbiAgICAgICAgICAgIHJldHVybiA8U2VsZWN0TGFuZ3VhZ2VzIFxuICAgICAgICAgICAgY3VycmVudFN0ZXAgPSBcbiAgICAgICAgICAgICAgICB7Y3VycmVudFN0ZXB9XG4gICAgICAgICAgICAgICAgc3RlcHM9e3N0ZXBzfVxuICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrID0ge2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBjYXNlIDM6IFxuICAgICAgICAgICAgcmV0dXJuIDxTZWxlY3RMYW5ndWFnZSBcbiAgICAgICAgICAgIGN1cnJlbnRTdGVwID0gXG4gICAgICAgICAgICAgICAge2N1cnJlbnRTdGVwfVxuICAgICAgICAgICAgICAgIHN0ZXBzPXtzdGVwc31cbiAgICAgICAgICAgICAgICBoYW5kbGVDbGljayA9IHtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgY2FzZSA0OiBcbiAgICAgICAgICAgIHJldHVybiA8U2VsZWN0TGFzdCBcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RlcCA9IHtjdXJyZW50U3RlcH1cbiAgICAgICAgICAgICAgICBzdGVwcz17c3RlcHN9XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2sgPSB7aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIGNhc2UgNTogXG4gICAgICAgICAgICByZXR1cm4gPFN1Y2Nlc3NQYWdlIFxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGVwID0ge2N1cnJlbnRTdGVwfVxuICAgICAgICAgICAgICAgIHN0ZXBzPXtzdGVwc31cbiAgICAgICAgICAgICAgICBoYW5kbGVDbGljayA9IHtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0oZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGxldCBuZXdTdGVwID0gY3VycmVudFN0ZXA7XG5cbiAgICAgICAgZGlyZWN0aW9uID09PSBcIm5leHRcIiA/IG5ld1N0ZXArKyA6IG5ld1N0ZXAtLTtcbiAgICAgICAgLy8gc3RlcHMgYXJlIHdpdGhpbiBib3VuZHNcblxuICAgICAgICBuZXdTdGVwID4gMCAmJiBuZXdTdGVwIDw9IHN0ZXBzLmxlbmd0aCAmJiBzZXRDdXJyZW50U3RlcChuZXdTdGVwKVxuICAgIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctMy81IG14LWF1dG8gc2hhZG93LXhsIHJvdW5kZWQtMnhsIHBiLTIgYmctd2hpdGVcIj5cbiAgICAgICAgICAgIHsvKiBTdGVwcGVyICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgaG9yaXpvbnRhbCBtdC01XCI+XG4gICAgICAgICAgICAgICAgPFN0ZXBwZXJQYWdlIFxuICAgICAgICAgICAgICAgIHN0ZXBzPXtzdGVwc31cbiAgICAgICAgICAgICAgICBjdXJyZW50U3RlcCA9IHtjdXJyZW50U3RlcH0gXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogZGlzcGxheSBjb21wb25lbnQgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIHAtMTBcIj5cbiAgICAgICAgICAgICAgICB7ZGlzcGxheVN0ZXAoY3VycmVudFN0ZXApfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBOYXZpZ2F0aW9uIGNvbnRyb2xzICovfVxuICAgICAgICAgICAgey8qIHtjdXJyZW50U3RlcCAhPT0gc3RlcHMubGVuZ3RoICYmIFxuICAgICAgICAgICAgICAgIDxTdGVwcGVyQ29udHJvbCBcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RlcCA9IHtjdXJyZW50U3RlcH1cbiAgICAgICAgICAgICAgICBzdGVwcz17c3RlcHN9XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2sgPSB7aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH0gKi99XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1ham9yRm9ybSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU3RlcHBlclBhZ2UiLCJTdGVwcGVyQ29udHJvbCIsIlNlbGVjdExhbmd1YWdlIiwiU2VsZWN0TGFzdCIsIlNlbGVjdExldmVsIiwiU2VsZWN0TGFuZ3VhZ2VzIiwiU3VjY2Vzc1BhZ2UiLCJ1c2VSb3V0ZXIiLCJNYWpvckZvcm0iLCJjdXJyZW50U3RlcCIsInNldEN1cnJlbnRTdGVwIiwicm91dGVyIiwidXNlclJlZ0RhdGEiLCJhc1BhdGgiLCJzbGljZSIsInN0YXJ0c1dpdGgiLCJwYXJhbWV0ZXJzIiwiVVJMU2VhcmNoUGFyYW1zIiwidXNlclRva2VuIiwiZ2V0IiwiY2hlY2tGdWxsUmVnIiwiY29uc29sZSIsImxvZyIsInNldHN0YXJ0UG9pbnQiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImNoZWNrVG9rZW4iLCJnZXRJdGVtIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsImxvY2F0aW9uIiwiaHJlZiIsInNwbGl0IiwicHVzaCIsInN0YXJ0UG9pbnQiLCJzdGVwcyIsImRpc3BsYXlTdGVwIiwic3RlcCIsImhhbmRsZUNsaWNrIiwiZGlyZWN0aW9uIiwibmV3U3RlcCIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/mainPage/formStep/majorForm.js\n");

/***/ })

});