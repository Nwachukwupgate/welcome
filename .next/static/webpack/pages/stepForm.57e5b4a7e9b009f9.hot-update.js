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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stepper */ \"./components/mainPage/formStep/stepper.js\");\n/* harmony import */ var _StepperControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StepperControl */ \"./components/mainPage/formStep/StepperControl.js\");\n/* harmony import */ var _steps_SelectFrameworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./steps/SelectFrameworks */ \"./components/mainPage/formStep/steps/SelectFrameworks.js\");\n/* harmony import */ var _steps_SelectLast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./steps/SelectLast */ \"./components/mainPage/formStep/steps/SelectLast.js\");\n/* harmony import */ var _steps_SelectLevel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./steps/SelectLevel */ \"./components/mainPage/formStep/steps/SelectLevel.js\");\n/* harmony import */ var _steps_SelectLanguages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./steps/SelectLanguages */ \"./components/mainPage/formStep/steps/SelectLanguages.js\");\n/* harmony import */ var _steps_success__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./steps/success */ \"./components/mainPage/formStep/steps/success.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MajorForm() {\n    var _this = this;\n    _s();\n    // const [startPoint, setstartPoint] = useState(0);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentStep = ref[0], setCurrentStep = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var userRegData = router.asPath.slice(10);\n        if (userRegData.startsWith(\"welcome\")) {\n            var parameters = new URLSearchParams(userRegData);\n            var userToken = parameters.get(\"welcome\");\n            var checkFullReg = parameters.get(\"isFullyReg\") //\n            ;\n            console.log(checkFullReg, \"checkFullReg\");\n            if (checkFullReg == null) {\n                setCurrentStep(1);\n            } else {\n                setCurrentStep(5);\n            }\n        }\n        if (true) {\n            window.localStorage.setItem(\"userToken\", JSON.stringify(userToken));\n            var checkToken = localStorage.getItem(\"userToken\");\n        }\n        history.replaceState(null, \"\", location.href.split(\"?\")[0]);\n        if (checkToken == \"undefined\" || checkToken == null || checkToken == \"\") {\n            router.push(\"/\");\n        }\n    }, []);\n    console.log(currentStep, \"CurrentStep\");\n    // const [currentStep, setCurrentStep] = useState(startPoint)\n    var steps = [\n        \"Select Level\",\n        \"Select Language\",\n        \"Select Framework\",\n        \"Personal Detail\",\n        \"Success\"\n    ];\n    var displayStep = function(step) {\n        switch(step){\n            case 1:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_steps_SelectLevel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    currentStep: currentStep,\n                    steps: steps,\n                    handleClick: handleClick\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 49,\n                    columnNumber: 20\n                }, _this);\n            case 2:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_steps_SelectLanguages__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    currentStep: currentStep,\n                    steps: steps,\n                    handleClick: handleClick\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 55,\n                    columnNumber: 20\n                }, _this);\n            case 3:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_steps_SelectFrameworks__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    currentStep: currentStep,\n                    steps: steps,\n                    handleClick: handleClick\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 62,\n                    columnNumber: 20\n                }, _this);\n            case 4:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_steps_SelectLast__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    currentStep: currentStep,\n                    steps: steps,\n                    handleClick: handleClick\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 69,\n                    columnNumber: 20\n                }, _this);\n            case 5:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_steps_success__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    currentStep: currentStep,\n                    steps: steps,\n                    handleClick: handleClick\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 75,\n                    columnNumber: 20\n                }, _this);\n            default:\n        }\n    };\n    var handleClick = function(direction) {\n        var newStep = currentStep;\n        direction === \"next\" ? newStep++ : newStep--;\n        // steps are within bounds\n        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"md:w-3/5 mx-auto shadow-xl rounded-2xl pb-2 bg-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container horizontal mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stepper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        steps: steps,\n                        currentStep: currentStep\n                    }, void 0, false, {\n                        fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 96,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-10 p-10\",\n                    children: displayStep(currentStep)\n                }, void 0, false, {\n                    fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n                    lineNumber: 104,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/fenibo/Desktop/Droomwork/welcomeNext/components/mainPage/formStep/majorForm.js\",\n            lineNumber: 94,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(MajorForm, \"/ZagFVqfjbbwUjTLs+O4/CuQ4vk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter\n    ];\n});\n_c = MajorForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MajorForm);\nvar _c;\n$RefreshReg$(_c, \"MajorForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW5QYWdlL2Zvcm1TdGVwL21ham9yRm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQThDO0FBQ1g7QUFDVTtBQUNTO0FBQ1Y7QUFDRTtBQUNRO0FBQ1o7QUFDSDs7QUFFdkMsU0FBU1csU0FBUyxHQUFHOzs7SUFDckIsbURBQW1EO0lBQ25ELElBQXNDVixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBWmpELFdBWWtCLEdBQW9CQSxHQUFXLEdBQS9CLEVBWmxCLGNBWWtDLEdBQUlBLEdBQVcsR0FBZjtJQUNsQyxJQUFNYSxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFDdEJSLGdEQUFTLENBQUMsV0FBSztRQUNYLElBQU1hLFdBQVcsR0FBR0QsTUFBTSxDQUFDRSxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDM0MsSUFBR0YsV0FBVyxDQUFDRyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUM7WUFDcEMsSUFBTUMsVUFBVSxHQUFHLElBQUlDLGVBQWUsQ0FBQ0wsV0FBVyxDQUFDO1lBQ25ELElBQUlNLFNBQVMsR0FBR0YsVUFBVSxDQUFDRyxHQUFHLENBQUMsU0FBUyxDQUFDO1lBQ3pDLElBQUlDLFlBQVksR0FBR0osVUFBVSxDQUFDRyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUU7WUFBRjtZQUN4REUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFlBQVksRUFBQyxjQUFjLENBQUM7WUFDL0IsSUFBR0EsWUFBWSxJQUFJLElBQUksRUFBQztnQkFBQ1YsY0FBYyxDQUFDLENBQUMsQ0FBQzthQUFDLE1BQUk7Z0JBQzVDQSxjQUFjLENBQUMsQ0FBQyxDQUFDO2FBQUM7U0FDckI7UUFDRCxJQUFJLElBQTZCLEVBQUU7WUFDL0JhLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsV0FBVyxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1QsU0FBUyxDQUFDLENBQUM7WUFDbkUsSUFBSVUsVUFBVSxHQUFHSixZQUFZLENBQUNLLE9BQU8sQ0FBQyxXQUFXLENBQUM7U0FDckQ7UUFDRkMsT0FBTyxDQUFDQyxZQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRUMsUUFBUSxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFHTixVQUFVLElBQUksV0FBVyxJQUFJQSxVQUFVLElBQUksSUFBSSxJQUFJQSxVQUFVLElBQUksRUFBRSxFQUFDO1lBQ3JFakIsTUFBTSxDQUFDd0IsSUFBSSxDQUFFLEdBQUMsQ0FBRTtTQUNqQjtLQUVILEVBQUUsRUFBRSxDQUFDO0lBQ1JkLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYixXQUFXLEVBQUMsYUFBYSxDQUFDO0lBQ3BDLDZEQUE2RDtJQUU3RCxJQUFNMkIsS0FBSyxHQUFHO1FBQ1YsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLFNBQVM7S0FDWjtJQUVELElBQU1DLFdBQVcsR0FBRyxTQUFDQyxJQUFJLEVBQUs7UUFDMUIsT0FBT0EsSUFBSTtZQUNQLEtBQUssQ0FBQztnQkFDTixxQkFBTyw4REFBQ2xDLDBEQUFXO29CQUNmSyxXQUFXLEVBQUlBLFdBQVc7b0JBQzFCMkIsS0FBSyxFQUFFQSxLQUFLO29CQUNaRyxXQUFXLEVBQUlBLFdBQVc7Ozs7O3lCQUN4QjtZQUNOLEtBQUssQ0FBQztnQkFDTixxQkFBTyw4REFBQ2xDLDhEQUFlO29CQUN2QkksV0FBVyxFQUNOQSxXQUFXO29CQUNaMkIsS0FBSyxFQUFFQSxLQUFLO29CQUNaRyxXQUFXLEVBQUlBLFdBQVc7Ozs7O3lCQUN4QjtZQUNOLEtBQUssQ0FBQztnQkFDTixxQkFBTyw4REFBQ3JDLCtEQUFjO29CQUN0Qk8sV0FBVyxFQUNOQSxXQUFXO29CQUNaMkIsS0FBSyxFQUFFQSxLQUFLO29CQUNaRyxXQUFXLEVBQUlBLFdBQVc7Ozs7O3lCQUN4QjtZQUNOLEtBQUssQ0FBQztnQkFDTixxQkFBTyw4REFBQ3BDLHlEQUFVO29CQUNkTSxXQUFXLEVBQUlBLFdBQVc7b0JBQzFCMkIsS0FBSyxFQUFFQSxLQUFLO29CQUNaRyxXQUFXLEVBQUlBLFdBQVc7Ozs7O3lCQUN4QjtZQUNOLEtBQUssQ0FBQztnQkFDTixxQkFBTyw4REFBQ2pDLHNEQUFXO29CQUNmRyxXQUFXLEVBQUlBLFdBQVc7b0JBQzFCMkIsS0FBSyxFQUFFQSxLQUFLO29CQUNaRyxXQUFXLEVBQUlBLFdBQVc7Ozs7O3lCQUN4QjtZQUNOLFFBQVE7U0FDWDtLQUNKO0lBRUQsSUFBTUEsV0FBVyxHQUFFLFNBQUNDLFNBQVMsRUFBSztRQUM5QixJQUFJQyxPQUFPLEdBQUdoQyxXQUFXO1FBRXpCK0IsU0FBUyxLQUFLLE1BQU0sR0FBR0MsT0FBTyxFQUFFLEdBQUdBLE9BQU8sRUFBRSxDQUFDO1FBQzdDLDBCQUEwQjtRQUUxQkEsT0FBTyxHQUFHLENBQUMsSUFBSUEsT0FBTyxJQUFJTCxLQUFLLENBQUNNLE1BQU0sSUFBSWhDLGNBQWMsQ0FBQytCLE9BQU8sQ0FBQztLQUNwRTtJQUNILHFCQUNFO2tCQUNJLDRFQUFDRSxLQUFHO1lBQUNDLFNBQVMsRUFBQyxzREFBc0Q7OzhCQUVqRSw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLDJCQUEyQjs4QkFDdEMsNEVBQUM1QyxnREFBVzt3QkFDWm9DLEtBQUssRUFBRUEsS0FBSzt3QkFDWjNCLFdBQVcsRUFBSUEsV0FBVzs7Ozs7NEJBQ3hCOzs7Ozt3QkFDQTs4QkFHTiw4REFBQ2tDLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxZQUFZOzhCQUN0QlAsV0FBVyxDQUFDNUIsV0FBVyxDQUFDOzs7Ozt3QkFDdkI7Ozs7OztnQkFVSjtxQkFDUCxDQUNKO0NBQ0Y7R0E1R1FELFNBQVM7O1FBR0hELGtEQUFTOzs7QUFIZkMsS0FBQUEsU0FBUztBQThHbEIsK0RBQWVBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluUGFnZS9mb3JtU3RlcC9tYWpvckZvcm0uanM/ZGI3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU3RlcHBlclBhZ2UgZnJvbSAnLi9zdGVwcGVyJ1xuaW1wb3J0IFN0ZXBwZXJDb250cm9sIGZyb20gJy4vU3RlcHBlckNvbnRyb2wnXG5pbXBvcnQgU2VsZWN0TGFuZ3VhZ2UgZnJvbSAnLi9zdGVwcy9TZWxlY3RGcmFtZXdvcmtzJztcbmltcG9ydCBTZWxlY3RMYXN0IGZyb20gJy4vc3RlcHMvU2VsZWN0TGFzdCc7XG5pbXBvcnQgU2VsZWN0TGV2ZWwgZnJvbSAnLi9zdGVwcy9TZWxlY3RMZXZlbCc7XG5pbXBvcnQgU2VsZWN0TGFuZ3VhZ2VzIGZyb20gJy4vc3RlcHMvU2VsZWN0TGFuZ3VhZ2VzJztcbmltcG9ydCBTdWNjZXNzUGFnZSBmcm9tICcuL3N0ZXBzL3N1Y2Nlc3MnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmZ1bmN0aW9uIE1ham9yRm9ybSgpIHtcbi8vIGNvbnN0IFtzdGFydFBvaW50LCBzZXRzdGFydFBvaW50XSA9IHVzZVN0YXRlKDApO1xuY29uc3QgW2N1cnJlbnRTdGVwLCBzZXRDdXJyZW50U3RlcF0gPSB1c2VTdGF0ZSgwKVxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICB1c2VFZmZlY3QoKCkgPT57XG4gICAgICAgIGNvbnN0IHVzZXJSZWdEYXRhID0gcm91dGVyLmFzUGF0aC5zbGljZSgxMClcbiAgICAgICAgaWYodXNlclJlZ0RhdGEuc3RhcnRzV2l0aCgnd2VsY29tZScpKXtcbiAgICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVzZXJSZWdEYXRhKVxuICAgICAgICAgdmFyIHVzZXJUb2tlbiA9IHBhcmFtZXRlcnMuZ2V0KCd3ZWxjb21lJylcbiAgICAgICAgIHZhciBjaGVja0Z1bGxSZWcgPSBwYXJhbWV0ZXJzLmdldCgnaXNGdWxseVJlZycpLy9cbmNvbnNvbGUubG9nKGNoZWNrRnVsbFJlZywnY2hlY2tGdWxsUmVnJylcbiAgICAgICAgIGlmKGNoZWNrRnVsbFJlZyA9PSBudWxsKXtzZXRDdXJyZW50U3RlcCgxKX1lbHNle1xuICAgICAgICAgICAgc2V0Q3VycmVudFN0ZXAoNSl9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlclRva2VuJywgSlNPTi5zdHJpbmdpZnkodXNlclRva2VuKSlcbiAgICAgICAgICAgIHZhciBjaGVja1Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyVG9rZW5cIilcbiAgICAgICAgfVxuICAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIGxvY2F0aW9uLmhyZWYuc3BsaXQoXCI/XCIpWzBdKVxuICAgICAgIGlmKGNoZWNrVG9rZW4gPT0gJ3VuZGVmaW5lZCcgfHwgY2hlY2tUb2tlbiA9PSBudWxsIHx8IGNoZWNrVG9rZW4gPT0gJycpe1xuICAgICAgICAgcm91dGVyLnB1c2goYC9gKVxuICAgICAgIH1cbiAgXG4gICAgfSwgW10pXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRTdGVwLCdDdXJyZW50U3RlcCcpXG4gICAgLy8gY29uc3QgW2N1cnJlbnRTdGVwLCBzZXRDdXJyZW50U3RlcF0gPSB1c2VTdGF0ZShzdGFydFBvaW50KVxuXG4gICAgY29uc3Qgc3RlcHMgPSBbXG4gICAgICAgIFwiU2VsZWN0IExldmVsXCIsXG4gICAgICAgIFwiU2VsZWN0IExhbmd1YWdlXCIsXG4gICAgICAgIFwiU2VsZWN0IEZyYW1ld29ya1wiLFxuICAgICAgICBcIlBlcnNvbmFsIERldGFpbFwiLFxuICAgICAgICBcIlN1Y2Nlc3NcIlxuICAgIF07XG5cbiAgICBjb25zdCBkaXNwbGF5U3RlcCA9IChzdGVwKSA9PiB7XG4gICAgICAgIHN3aXRjaChzdGVwKSB7XG4gICAgICAgICAgICBjYXNlIDE6IFxuICAgICAgICAgICAgcmV0dXJuIDxTZWxlY3RMZXZlbCBcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RlcCA9IHtjdXJyZW50U3RlcH1cbiAgICAgICAgICAgICAgICBzdGVwcz17c3RlcHN9XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2sgPSB7aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIGNhc2UgMjogXG4gICAgICAgICAgICByZXR1cm4gPFNlbGVjdExhbmd1YWdlcyBcbiAgICAgICAgICAgIGN1cnJlbnRTdGVwID0gXG4gICAgICAgICAgICAgICAge2N1cnJlbnRTdGVwfVxuICAgICAgICAgICAgICAgIHN0ZXBzPXtzdGVwc31cbiAgICAgICAgICAgICAgICBoYW5kbGVDbGljayA9IHtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgY2FzZSAzOiBcbiAgICAgICAgICAgIHJldHVybiA8U2VsZWN0TGFuZ3VhZ2UgXG4gICAgICAgICAgICBjdXJyZW50U3RlcCA9IFxuICAgICAgICAgICAgICAgIHtjdXJyZW50U3RlcH1cbiAgICAgICAgICAgICAgICBzdGVwcz17c3RlcHN9XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2sgPSB7aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIGNhc2UgNDogXG4gICAgICAgICAgICByZXR1cm4gPFNlbGVjdExhc3QgXG4gICAgICAgICAgICAgICAgY3VycmVudFN0ZXAgPSB7Y3VycmVudFN0ZXB9XG4gICAgICAgICAgICAgICAgc3RlcHM9e3N0ZXBzfVxuICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrID0ge2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBjYXNlIDU6IFxuICAgICAgICAgICAgcmV0dXJuIDxTdWNjZXNzUGFnZSBcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RlcCA9IHtjdXJyZW50U3RlcH1cbiAgICAgICAgICAgICAgICBzdGVwcz17c3RlcHN9XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2sgPSB7aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9KGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBsZXQgbmV3U3RlcCA9IGN1cnJlbnRTdGVwO1xuXG4gICAgICAgIGRpcmVjdGlvbiA9PT0gXCJuZXh0XCIgPyBuZXdTdGVwKysgOiBuZXdTdGVwLS07XG4gICAgICAgIC8vIHN0ZXBzIGFyZSB3aXRoaW4gYm91bmRzXG5cbiAgICAgICAgbmV3U3RlcCA+IDAgJiYgbmV3U3RlcCA8PSBzdGVwcy5sZW5ndGggJiYgc2V0Q3VycmVudFN0ZXAobmV3U3RlcClcbiAgICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTMvNSBteC1hdXRvIHNoYWRvdy14bCByb3VuZGVkLTJ4bCBwYi0yIGJnLXdoaXRlXCI+XG4gICAgICAgICAgICB7LyogU3RlcHBlciAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGhvcml6b250YWwgbXQtNVwiPlxuICAgICAgICAgICAgICAgIDxTdGVwcGVyUGFnZSBcbiAgICAgICAgICAgICAgICBzdGVwcz17c3RlcHN9XG4gICAgICAgICAgICAgICAgY3VycmVudFN0ZXAgPSB7Y3VycmVudFN0ZXB9IFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIGRpc3BsYXkgY29tcG9uZW50ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBwLTEwXCI+XG4gICAgICAgICAgICAgICAge2Rpc3BsYXlTdGVwKGN1cnJlbnRTdGVwKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogTmF2aWdhdGlvbiBjb250cm9scyAqL31cbiAgICAgICAgICAgIHsvKiB7Y3VycmVudFN0ZXAgIT09IHN0ZXBzLmxlbmd0aCAmJiBcbiAgICAgICAgICAgICAgICA8U3RlcHBlckNvbnRyb2wgXG4gICAgICAgICAgICAgICAgY3VycmVudFN0ZXAgPSB7Y3VycmVudFN0ZXB9XG4gICAgICAgICAgICAgICAgc3RlcHM9e3N0ZXBzfVxuICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrID0ge2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWpvckZvcm0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlN0ZXBwZXJQYWdlIiwiU3RlcHBlckNvbnRyb2wiLCJTZWxlY3RMYW5ndWFnZSIsIlNlbGVjdExhc3QiLCJTZWxlY3RMZXZlbCIsIlNlbGVjdExhbmd1YWdlcyIsIlN1Y2Nlc3NQYWdlIiwidXNlUm91dGVyIiwiTWFqb3JGb3JtIiwiY3VycmVudFN0ZXAiLCJzZXRDdXJyZW50U3RlcCIsInJvdXRlciIsInVzZXJSZWdEYXRhIiwiYXNQYXRoIiwic2xpY2UiLCJzdGFydHNXaXRoIiwicGFyYW1ldGVycyIsIlVSTFNlYXJjaFBhcmFtcyIsInVzZXJUb2tlbiIsImdldCIsImNoZWNrRnVsbFJlZyIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImNoZWNrVG9rZW4iLCJnZXRJdGVtIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsImxvY2F0aW9uIiwiaHJlZiIsInNwbGl0IiwicHVzaCIsInN0ZXBzIiwiZGlzcGxheVN0ZXAiLCJzdGVwIiwiaGFuZGxlQ2xpY2siLCJkaXJlY3Rpb24iLCJuZXdTdGVwIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/mainPage/formStep/majorForm.js\n");

/***/ })

});