(() => {
var exports = {};
exports.id = 881;
exports.ids = [881];
exports.modules = {

/***/ 1060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadClutch = (callback)=>{
    const existingScript = document.getElementById("clutchReviews");
    if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://widget.clutch.co/static/js/widget.js";
        script.id = "clutchReviews";
        document.body.appendChild(script);
        script.onload = ()=>{
            if (callback) callback();
        };
    }
    if (existingScript && callback) callback();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadClutch);
{}{}

/***/ }),

/***/ 6676:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ ExtraServices)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9217);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const containerVariant = {
    hidden: {
        y: 10,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 3,
            delay: 0.3
        }
    }
};
const scrollTo = ()=>{
    document.getElementById("form").scrollIntoView({
        behavior: "smooth",
        inline: "nearest"
    });
};
const ExtraServices = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container m-auto px-6 md:px-12 lg:px-6",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                className: "pb-20",
                initial: "hidden",
                whileInView: "visible",
                // variants={containerVariant}
                viewport: {
                    once: true,
                    amount: 0.5
                },
                transition: {
                    staggerChildren: 0.5
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                        variants: containerVariant,
                        initial: "hidden",
                        whileInView: "visible",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_title__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            title: "Our Expertise"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.section, {
                        className: "dark:bg-gray-900 lg:pt-12 lg:py-12 lg:flex lg:justify-center",
                        variants: containerVariant,
                        initial: "hidden",
                        whileInView: "visible",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bg-white dark:bg-gray-800 lg:w-10/12 lg:mx-8 lg:flex lg:shadow-lg lg:rounded-lg",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "lg:w-1/2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-64 bg-cover lg:rounded-lg lg:h-full",
                                        style: {
                                            backgroundImage: `url('https://customerthink.com/wp-content/uploads/banking-finance-sector-.png')`
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "max-w-xl w-xl px-6 py-12 lg:max-w-5xl lg:w-5xl lg:w-1/2 text-center lg:text-justify",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                            className: "text-2xl font-bold text-gray-800 dark:text-white md:text-3xl",
                                            children: [
                                                "Build A ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-[#F49038]",
                                                    children: "Banking & Finance Product"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-4 text-gray-600 dark:text-gray-400",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex text-base text-body-color mb-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mr-2 text-base text-primary flex items-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 18 18",
                                                                    className: "fill-current",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"
                                                                    })
                                                                })
                                                            }),
                                                            "Digital banking platforms"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex text-base text-body-color mb-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mr-2 text-base text-primary flex items-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 18 18",
                                                                    className: "fill-current",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"
                                                                    })
                                                                })
                                                            }),
                                                            "Blockchain-based finance products"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex text-base text-body-color mb-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mr-2 text-base text-primary flex items-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 18 18",
                                                                    className: "fill-current",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"
                                                                    })
                                                                })
                                                            }),
                                                            "Web3 finance solutions"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex text-base text-body-color mb-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mr-2 text-base text-primary flex items-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 18 18",
                                                                    className: "fill-current",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"
                                                                    })
                                                                })
                                                            }),
                                                            "Trading, crowdfunding, loans, investment & money transaction platforms."
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-8",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "w-fit px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]",
                                                "aria-label": "coming soon",
                                                title: "coming soon",
                                                onClick: scrollTo,
                                                children: "Start Now"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.section, {
                        className: "dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center",
                        variants: containerVariant,
                        initial: "hidden",
                        whileInView: "visible",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bg-white dark:bg-gray-800 flex flex-col lg:w-10/12 lg:mx-8 lg:flex-row lg:shadow-lg lg:rounded-lg",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "lg:w-1/2 lg:order-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-64 bg-cover lg:rounded-lg lg:h-full",
                                        style: {
                                            backgroundImage: `url('https://nurseweek.com/wp-content/uploads/2021/08/branding-in-malaysia-doctors.jpeg')`
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "max-w-xl w-xl px-6 py-12 lg:max-w-5xl lg:w-5xl lg:w-1/2 text-center lg:text-justify lg:order-1",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                            className: "text-2xl font-bold text-gray-800 dark:text-white md:text-3xl",
                                            children: [
                                                "Build A ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-[#F49038]",
                                                    children: "Healthcare/Medical Solution"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-4 text-gray-600 dark:text-gray-400",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex text-base text-body-color mb-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mr-2 text-base text-primary flex items-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 18 18",
                                                                    className: "fill-current",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"
                                                                    })
                                                                })
                                                            }),
                                                            "Electronic health record solution."
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex text-base text-body-color mb-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mr-2 text-base text-primary flex items-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 18 18",
                                                                    className: "fill-current",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"
                                                                    })
                                                                })
                                                            }),
                                                            "Online consultation/on Demand Medicine Solution"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex text-base text-body-color mb-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mr-2 text-base text-primary flex items-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 18 18",
                                                                    className: "fill-current",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"
                                                                    })
                                                                })
                                                            }),
                                                            "Medical CRM/Billing Software"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex text-base text-body-color mb-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mr-2 text-base text-primary flex items-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 18 18",
                                                                    className: "fill-current",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"
                                                                    })
                                                                })
                                                            }),
                                                            "Medical Diagnosis/Retail Product"
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-8",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "w-fit px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]",
                                                "aria-label": "coming soon",
                                                title: "coming soon",
                                                onClick: scrollTo,
                                                children: "Start Now"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.section, {
                        className: "dark:bg-gray-900 lg:pt-12 lg:py-12 lg:flex lg:justify-center",
                        variants: containerVariant,
                        initial: "hidden",
                        whileInView: "visible",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bg-white dark:bg-gray-800 lg:w-10/12 lg:mx-8 lg:flex lg:shadow-lg lg:rounded-lg",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "lg:w-1/2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-64 bg-cover lg:rounded-lg lg:h-full",
                                        style: {
                                            backgroundImage: `url('https://cdn.corporatefinanceinstitute.com/assets/real-estate.jpeg')`
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "max-w-xl w-xl px-6 py-12 lg:max-w-5xl lg:w-5xl lg:w-1/2 text-center lg:text-justify",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                            className: "text-2xl font-bold text-gray-800 dark:text-white md:text-3xl",
                                            children: [
                                                "Build A ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-[#F49038]",
                                                    children: "Real Estate Product"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-4 text-gray-600 dark:text-gray-400",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex text-base text-body-color mb-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mr-2 text-base text-primary flex items-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 18 18",
                                                                    className: "fill-current",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"
                                                                    })
                                                                })
                                                            }),
                                                            "Digitalization of company operations"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex text-base text-body-color mb-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mr-2 text-base text-primary flex items-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 18 18",
                                                                    className: "fill-current",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"
                                                                    })
                                                                })
                                                            }),
                                                            "Real estate virtual tour app"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex text-base text-body-color mb-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mr-2 text-base text-primary flex items-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 18 18",
                                                                    className: "fill-current",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"
                                                                    })
                                                                })
                                                            }),
                                                            "Real estate crowdfunding platforms"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex text-base text-body-color mb-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mr-2 text-base text-primary flex items-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 18 18",
                                                                    className: "fill-current",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"
                                                                    })
                                                                })
                                                            }),
                                                            "Property valuation applications"
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-8",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "w-fit px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]",
                                                "aria-label": "coming soon",
                                                title: "coming soon",
                                                onClick: scrollTo,
                                                children: "Start Now"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.section, {
                        className: "dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center",
                        variants: containerVariant,
                        initial: "hidden",
                        whileInView: "visible",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bg-white dark:bg-gray-800 flex flex-col lg:w-10/12 lg:mx-8 lg:flex-row lg:shadow-lg lg:rounded-lg",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "lg:w-1/2 lg:order-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-64 bg-cover lg:rounded-lg lg:h-full",
                                        style: {
                                            backgroundImage: `url('https://1069gouniradio.com/wp-content/uploads/2021/08/e-learning.png')`
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "max-w-xl w-xl px-6 py-12 lg:max-w-5xl lg:w-5xl lg:w-1/2 text-center lg:text-justify lg:order-1",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                            className: "text-2xl font-bold text-gray-800 dark:text-white md:text-3xl",
                                            children: [
                                                "Build An ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-[#F49038]",
                                                    children: "Edtech Product"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-4 text-gray-600 dark:text-gray-400",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex text-base text-body-color mb-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mr-2 text-base text-primary flex items-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 18 18",
                                                                    className: "fill-current",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"
                                                                    })
                                                                })
                                                            }),
                                                            "Digitalize solutions to cover core activities involved in teaching and learning."
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex text-base text-body-color mb-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mr-2 text-base text-primary flex items-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 18 18",
                                                                    className: "fill-current",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"
                                                                    })
                                                                })
                                                            }),
                                                            "Seamless integration with learning management systems (LMS) and school information systems (SIS)"
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-8",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "w-fit px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]",
                                                "aria-label": "coming soon",
                                                title: "coming soon",
                                                onClick: scrollTo,
                                                children: "Start Now"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.section, {
                        className: "dark:bg-gray-900 lg:pt-12 lg:py-12 lg:flex lg:justify-center",
                        variants: containerVariant,
                        initial: "hidden",
                        whileInView: "visible",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bg-white dark:bg-gray-800 lg:w-10/12 lg:mx-8 lg:flex lg:shadow-lg lg:rounded-lg",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "lg:w-1/2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-64 bg-cover lg:rounded-lg lg:h-full",
                                        style: {
                                            backgroundImage: `url('https://www.azonano.com/images/Article_Images/ImageForArticle_595(1).jpg')`
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "max-w-xl w-xl px-6 py-12 lg:max-w-5xl lg:w-5xl lg:w-1/2 text-center lg:text-justify",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                            className: "text-2xl font-bold text-gray-800 dark:text-white md:text-3xl",
                                            children: [
                                                "Build A ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-[#F49038]",
                                                    children: "Tranportation Product"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-4 text-gray-600 dark:text-gray-400",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex text-base text-body-color mb-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mr-2 text-base text-primary flex items-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 18 18",
                                                                    className: "fill-current",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"
                                                                    })
                                                                })
                                                            }),
                                                            "Online booking platform"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex text-base text-body-color mb-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mr-2 text-base text-primary flex items-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 18 18",
                                                                    className: "fill-current",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"
                                                                    })
                                                                })
                                                            }),
                                                            "Cloud-based scheduling solutions"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex text-base text-body-color mb-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mr-2 text-base text-primary flex items-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 18 18",
                                                                    className: "fill-current",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"
                                                                    })
                                                                })
                                                            }),
                                                            "Car rental and car sharing apps"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex text-base text-body-color mb-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mr-2 text-base text-primary flex items-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 18 18",
                                                                    className: "fill-current",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"
                                                                    })
                                                                })
                                                            }),
                                                            "Food delivery apps"
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-8",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                className: "w-fit px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]",
                                                "aria-label": "coming soon",
                                                title: "coming soon",
                                                onClick: scrollTo,
                                                children: "Start Now"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.section, {
                        className: "dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center",
                        variants: containerVariant,
                        initial: "hidden",
                        whileInView: "visible",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bg-white dark:bg-gray-800 flex flex-col lg:w-10/12 lg:mx-8 lg:flex-row lg:shadow-lg lg:rounded-lg",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "lg:w-1/2 lg:order-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "h-64 bg-cover lg:rounded-lg lg:h-full",
                                        style: {
                                            backgroundImage: `url('https://miro.medium.com/max/1100/1*6Iv5MsU-tFcbiSiSlVwHBQ.jpeg')`
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "max-w-xl w-xl px-6 py-12 lg:max-w-5xl lg:w-5xl lg:w-1/2 text-center lg:text-justify lg:order-1",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                            className: "text-2xl font-bold text-gray-800 dark:text-white md:text-3xl",
                                            children: [
                                                "Build An ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-[#F49038]",
                                                    children: "Ecommerce/Retail Product"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-4 text-gray-600 dark:text-gray-400",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex text-base text-body-color mb-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mr-2 text-base text-primary flex items-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 18 18",
                                                                    className: "fill-current",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"
                                                                    })
                                                                })
                                                            }),
                                                            "Voice search chatbot and integration solutions"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex text-base text-body-color mb-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mr-2 text-base text-primary flex items-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 18 18",
                                                                    className: "fill-current",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"
                                                                    })
                                                                })
                                                            }),
                                                            "AI powered solutions"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex text-base text-body-color mb-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mr-2 text-base text-primary flex items-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 18 18",
                                                                    className: "fill-current",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"
                                                                    })
                                                                })
                                                            }),
                                                            "Sales and supply management apps"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex text-base text-body-color mb-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mr-2 text-base text-primary flex items-center",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    width: "18",
                                                                    height: "18",
                                                                    viewBox: "0 0 18 18",
                                                                    className: "fill-current",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M4.36064 17.6344C4.13564 17.6344 3.91064 17.5781 3.71376 17.4375C3.34814 17.1844 3.15126 16.7344 3.23564 16.2844L3.99501 11.5031L0.70439 8.09998C0.395015 7.7906 0.282515 7.31248 0.42314 6.8906C0.563765 6.46873 0.901265 6.18748 1.32314 6.1031L5.90751 5.37185L7.96064 1.01248C8.15751 0.618726 8.55126 0.365601 8.97314 0.365601C9.42314 0.365601 9.78876 0.618726 9.98564 1.01248L12.095 5.34373L16.6794 6.07498C17.1013 6.13123 17.4388 6.4406 17.5794 6.86248C17.72 7.28435 17.6075 7.76248 17.2981 8.07185L13.9794 11.475L14.7669 16.2844C14.8513 16.7344 14.6544 17.1844 14.2888 17.4375C13.9513 17.6906 13.5013 17.7187 13.1075 17.5219L9.00126 15.2719L4.89501 17.5219C4.72626 17.6062 4.55751 17.6344 4.36064 17.6344ZM1.40752 7.42498L4.81064 10.9125C4.97939 11.0812 5.06376 11.3344 5.00751 11.5875L4.22001 16.4531C4.19189 16.5656 4.27626 16.6219 4.30439 16.65C4.36064 16.7062 4.41689 16.6781 4.44501 16.65L8.66376 14.3437C8.88876 14.2312 9.14189 14.2312 9.36689 14.3437L13.5856 16.6219C13.6138 16.6219 13.6419 16.65 13.7263 16.6219C13.7544 16.5937 13.8106 16.5375 13.8106 16.425L13.0231 11.5312C12.995 11.2781 13.0513 11.0531 13.22 10.8562L16.595 7.36873C16.6794 7.28435 16.6513 7.19998 16.6513 7.14373C16.6513 7.1156 16.595 7.03123 16.5388 7.03123L11.8138 6.29998C11.5606 6.27185 11.3638 6.1031 11.2513 5.8781L9.14189 1.43435C9.11376 1.34998 9.05751 1.34998 9.00126 1.34998C8.97314 1.34998 8.91689 1.3781 8.86064 1.43435L6.75126 5.90623C6.63876 6.13123 6.44189 6.29998 6.18876 6.3281L1.49189 7.08748C1.40752 7.08748 1.37939 7.17185 1.37939 7.19998C1.35127 7.2281 1.32314 7.3406 1.40752 7.42498Z"
                                                                    })
                                                                })
                                                            }),
                                                            "ERP accounting and waehouse management systems"
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-8",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "w-fit px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]",
                                                "aria-label": "coming soon",
                                                title: "coming soon",
                                                onClick: scrollTo,
                                                children: "Start Now"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4219:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FormField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9217);
/* harmony import */ var reactWrapper_redux_apiSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4307);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_5__]);
react_toastify__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
    var api_origin = "http://127.0.0.1:3333";
} else {
    api_origin = "https://api.droomwork.io";
// api_origin = 'http://localhost:3000'
}
function FormField() {
    const [customContact, { data , isSuccess , isError , error , isLoading  }] = (0,reactWrapper_redux_apiSlice__WEBPACK_IMPORTED_MODULE_3__/* .useCustomContactMutation */ .dU)();
    const { 0: individual_Name , 1: setIndividual_Name  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: company_Name , 1: setCompany_Name  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: country , 1: setCountry  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: website , 1: setWebsite  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: attachement , 1: setAttachement  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: fileName , 1: setFileName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: isPending , 1: setIsPending  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleChange = (event)=>{
        setAttachement(event.target.files[0]);
        setFileName(event.target.files[0].name);
    };
    const cancelFile = (e)=>{
        e.preventDefault();
        setFileName("");
    };
    // const Submit = async (data: IAuthLoginForm) => {
    //     await register(data).unwrap().then((response) => {
    //       // Handle the response here
    //       console.log(response)
    //     }).catch((error) => {
    //       // Handle the error here
    //       console.log(error)})
    //    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        var formdata = new FormData();
        formdata.append("individual_name", individual_Name);
        formdata.append("company_name", company_Name);
        formdata.append("email", email);
        formdata.append("message", message);
        formdata.append("country", country);
        formdata.append("website", website);
        formdata.append("attachement", attachement);
        setIsPending(true);
        await fetch(`${api_origin}/api/v1/comp/customContact`, {
            mode: "cors",
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                individual_name: individual_Name,
                company_name: company_Name,
                email: email,
                message: message,
                country: country,
                website: website,
                attachement: attachement,
                userId: Math.random().toString(36).slice(2)
            })
        }).then((res)=>res.json()
        ).then((post)=>{
            // setPosts((posts) => [post, ...posts]);
            console.log("this is the post full", post);
            if (post.status == true) {
                setIndividual_Name("");
                setCompany_Name();
                setEmail("");
                setCountry("");
                setWebsite("");
                setMessage("");
                setFileName("");
                setIsPending(false);
                react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(post.message);
            } else {
                // toast.error(post.error.message)
                react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(post.message);
            }
        }).catch((err)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(err.message);
            console.log("this is d main", err.message);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container m-auto px-6 md:px-12 lg:px-6",
                id: "form",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_title__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        title: "Contact Us To Build The Right Product With Right Team"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-10 sm:mt-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-5 md:mt-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                    onSubmit: handleSubmit,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "shadow overflow-hidden sm:rounded-md",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "px-4 py-5 bg-white sm:p-6 grid justify-items-center",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "grid gap-y-8 w-full lg:w-3/5",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            name: "Name",
                                                            id: "Name",
                                                            autoComplete: "given-name",
                                                            placeholder: "Name",
                                                            value: individual_Name,
                                                            onChange: (e)=>setIndividual_Name(e.target.value)
                                                            ,
                                                            className: "focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base rounded-md p-2 border-2 border-solid border-gray-300 text-black"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            name: "Company Name",
                                                            id: "Company Name",
                                                            autoComplete: "given-name",
                                                            placeholder: "Company Name",
                                                            value: company_Name,
                                                            onChange: (e)=>setCompany_Name(e.target.value)
                                                            ,
                                                            className: "focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base rounded-md p-2 border-2 border-solid border-gray-300 text-black"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            name: "email-address",
                                                            id: "email-address",
                                                            autoComplete: "email",
                                                            placeholder: "Company Mail",
                                                            value: email,
                                                            onChange: (e)=>setEmail(e.target.value)
                                                            ,
                                                            className: "focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border-gray-300 rounded-md p-2 border-2 border-solid text-black"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                htmlFor: "country",
                                                                className: "block text-base font-medium text-gray-700",
                                                                children: "Country"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                id: "country",
                                                                name: "country",
                                                                autoComplete: "country-name",
                                                                className: "mt-1 block w-full py-2 px-3 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-black-500 focus:border-black-500 sm:text-base p-2 border-2 border-solid",
                                                                value: country,
                                                                onChange: (e)=>setCountry(e.target.value)
                                                                ,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Afghanistan",
                                                                        children: "Afghanistan"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "\xc5land Islands",
                                                                        children: "\xc5land Islands"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Albania",
                                                                        children: "Albania"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Algeria",
                                                                        children: "Algeria"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "American Samoa",
                                                                        children: "American Samoa"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Andorra",
                                                                        children: "Andorra"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Angola",
                                                                        children: "Angola"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Anguilla",
                                                                        children: "Anguilla"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Antarctica",
                                                                        children: "Antarctica"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Antigua and Barbuda",
                                                                        children: "Antigua and Barbuda"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Argentina",
                                                                        children: "Argentina"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Armenia",
                                                                        children: "Armenia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Aruba",
                                                                        children: "Aruba"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Australia",
                                                                        children: "Australia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Austria",
                                                                        children: "Austria"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Azerbaijan",
                                                                        children: "Azerbaijan"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Bahamas",
                                                                        children: "Bahamas"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Bahrain",
                                                                        children: "Bahrain"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Bangladesh",
                                                                        children: "Bangladesh"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Barbados",
                                                                        children: "Barbados"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Belarus",
                                                                        children: "Belarus"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Belgium",
                                                                        children: "Belgium"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Belize",
                                                                        children: "Belize"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Benin",
                                                                        children: "Benin"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Bermuda",
                                                                        children: "Bermuda"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Bhutan",
                                                                        children: "Bhutan"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Bolivia",
                                                                        children: "Bolivia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Bosnia and Herzegovina",
                                                                        children: "Bosnia and Herzegovina"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Botswana",
                                                                        children: "Botswana"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Bouvet Island",
                                                                        children: "Bouvet Island"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Brazil",
                                                                        children: "Brazil"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "British Indian Ocean Territory",
                                                                        children: "British Indian Ocean Territory"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Brunei Darussalam",
                                                                        children: "Brunei Darussalam"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Bulgaria",
                                                                        children: "Bulgaria"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Burkina Faso",
                                                                        children: "Burkina Faso"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Burundi",
                                                                        children: "Burundi"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Cambodia",
                                                                        children: "Cambodia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Cameroon",
                                                                        children: "Cameroon"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Canada",
                                                                        children: "Canada"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Cape Verde",
                                                                        children: "Cape Verde"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Cayman Islands",
                                                                        children: "Cayman Islands"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Central African Republic",
                                                                        children: "Central African Republic"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Chad",
                                                                        children: "Chad"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Chile",
                                                                        children: "Chile"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "China",
                                                                        children: "China"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Christmas Island",
                                                                        children: "Christmas Island"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Cocos (Keeling) Islands",
                                                                        children: "Cocos (Keeling) Islands"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Colombia",
                                                                        children: "Colombia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Comoros",
                                                                        children: "Comoros"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Congo",
                                                                        children: "Congo"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Congo, The Democratic Republic of The",
                                                                        children: "Congo, The Democratic Republic of The"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Cook Islands",
                                                                        children: "Cook Islands"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Costa Rica",
                                                                        children: "Costa Rica"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Cote D'ivoire",
                                                                        children: "Cote D'ivoire"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Croatia",
                                                                        children: "Croatia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Cuba",
                                                                        children: "Cuba"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Cyprus",
                                                                        children: "Cyprus"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Czech Republic",
                                                                        children: "Czech Republic"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Denmark",
                                                                        children: "Denmark"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Djibouti",
                                                                        children: "Djibouti"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Dominica",
                                                                        children: "Dominica"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Dominican Republic",
                                                                        children: "Dominican Republic"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Ecuador",
                                                                        children: "Ecuador"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Egypt",
                                                                        children: "Egypt"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "El Salvador",
                                                                        children: "El Salvador"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Equatorial Guinea",
                                                                        children: "Equatorial Guinea"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Eritrea",
                                                                        children: "Eritrea"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Estonia",
                                                                        children: "Estonia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Ethiopia",
                                                                        children: "Ethiopia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Falkland Islands (Malvinas)",
                                                                        children: "Falkland Islands (Malvinas)"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Faroe Islands",
                                                                        children: "Faroe Islands"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Fiji",
                                                                        children: "Fiji"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Finland",
                                                                        children: "Finland"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "France",
                                                                        children: "France"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "French Guiana",
                                                                        children: "French Guiana"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "French Polynesia",
                                                                        children: "French Polynesia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "French Southern Territories",
                                                                        children: "French Southern Territories"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Gabon",
                                                                        children: "Gabon"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Gambia",
                                                                        children: "Gambia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Georgia",
                                                                        children: "Georgia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Germany",
                                                                        children: "Germany"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Ghana",
                                                                        children: "Ghana"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Gibraltar",
                                                                        children: "Gibraltar"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Greece",
                                                                        children: "Greece"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Greenland",
                                                                        children: "Greenland"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Grenada",
                                                                        children: "Grenada"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Guadeloupe",
                                                                        children: "Guadeloupe"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Guam",
                                                                        children: "Guam"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Guatemala",
                                                                        children: "Guatemala"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Guernsey",
                                                                        children: "Guernsey"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Guinea",
                                                                        children: "Guinea"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Guinea-bissau",
                                                                        children: "Guinea-bissau"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Guyana",
                                                                        children: "Guyana"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Haiti",
                                                                        children: "Haiti"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Heard Island and Mcdonald Islands",
                                                                        children: "Heard Island and Mcdonald Islands"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Holy See (Vatican City State)",
                                                                        children: "Holy See (Vatican City State)"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Honduras",
                                                                        children: "Honduras"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Hong Kong",
                                                                        children: "Hong Kong"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Hungary",
                                                                        children: "Hungary"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Iceland",
                                                                        children: "Iceland"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "India",
                                                                        children: "India"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Indonesia",
                                                                        children: "Indonesia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Iran, Islamic Republic of",
                                                                        children: "Iran, Islamic Republic of"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Iraq",
                                                                        children: "Iraq"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Ireland",
                                                                        children: "Ireland"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Isle of Man",
                                                                        children: "Isle of Man"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Israel",
                                                                        children: "Israel"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Italy",
                                                                        children: "Italy"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Jamaica",
                                                                        children: "Jamaica"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Japan",
                                                                        children: "Japan"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Jersey",
                                                                        children: "Jersey"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Jordan",
                                                                        children: "Jordan"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Kazakhstan",
                                                                        children: "Kazakhstan"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Kenya",
                                                                        children: "Kenya"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Kiribati",
                                                                        children: "Kiribati"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Korea, Democratic People's Republic of",
                                                                        children: "Korea, Democratic People's Republic of"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Korea, Republic of",
                                                                        children: "Korea, Republic of"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Kuwait",
                                                                        children: "Kuwait"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Kyrgyzstan",
                                                                        children: "Kyrgyzstan"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Lao People's Democratic Republic",
                                                                        children: "Lao People's Democratic Republic"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Latvia",
                                                                        children: "Latvia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Lebanon",
                                                                        children: "Lebanon"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Lesotho",
                                                                        children: "Lesotho"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Liberia",
                                                                        children: "Liberia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Libyan Arab Jamahiriya",
                                                                        children: "Libyan Arab Jamahiriya"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Liechtenstein",
                                                                        children: "Liechtenstein"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Lithuania",
                                                                        children: "Lithuania"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Luxembourg",
                                                                        children: "Luxembourg"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Macao",
                                                                        children: "Macao"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Macedonia, The Former Yugoslav Republic of",
                                                                        children: "Macedonia, The Former Yugoslav Republic of"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Madagascar",
                                                                        children: "Madagascar"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Malawi",
                                                                        children: "Malawi"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Malaysia",
                                                                        children: "Malaysia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Maldives",
                                                                        children: "Maldives"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Mali",
                                                                        children: "Mali"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Malta",
                                                                        children: "Malta"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Marshall Islands",
                                                                        children: "Marshall Islands"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Martinique",
                                                                        children: "Martinique"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Mauritania",
                                                                        children: "Mauritania"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Mauritius",
                                                                        children: "Mauritius"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Mayotte",
                                                                        children: "Mayotte"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Mexico",
                                                                        children: "Mexico"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Micronesia, Federated States of",
                                                                        children: "Micronesia, Federated States of"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Moldova, Republic of",
                                                                        children: "Moldova, Republic of"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Monaco",
                                                                        children: "Monaco"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Mongolia",
                                                                        children: "Mongolia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Montenegro",
                                                                        children: "Montenegro"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Montserrat",
                                                                        children: "Montserrat"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Morocco",
                                                                        children: "Morocco"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Mozambique",
                                                                        children: "Mozambique"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Myanmar",
                                                                        children: "Myanmar"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Namibia",
                                                                        children: "Namibia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Nauru",
                                                                        children: "Nauru"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Nepal",
                                                                        children: "Nepal"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Netherlands",
                                                                        children: "Netherlands"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Netherlands Antilles",
                                                                        children: "Netherlands Antilles"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "New Caledonia",
                                                                        children: "New Caledonia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "New Zealand",
                                                                        children: "New Zealand"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Nicaragua",
                                                                        children: "Nicaragua"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Niger",
                                                                        children: "Niger"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Nigeria",
                                                                        children: "Nigeria"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Niue",
                                                                        children: "Niue"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Norfolk Island",
                                                                        children: "Norfolk Island"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Northern Mariana Islands",
                                                                        children: "Northern Mariana Islands"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Norway",
                                                                        children: "Norway"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Oman",
                                                                        children: "Oman"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Pakistan",
                                                                        children: "Pakistan"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Palau",
                                                                        children: "Palau"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Palestinian Territory, Occupied",
                                                                        children: "Palestinian Territory, Occupied"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Panama",
                                                                        children: "Panama"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Papua New Guinea",
                                                                        children: "Papua New Guinea"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Paraguay",
                                                                        children: "Paraguay"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Peru",
                                                                        children: "Peru"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Philippines",
                                                                        children: "Philippines"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Pitcairn",
                                                                        children: "Pitcairn"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Poland",
                                                                        children: "Poland"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Portugal",
                                                                        children: "Portugal"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Puerto Rico",
                                                                        children: "Puerto Rico"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Qatar",
                                                                        children: "Qatar"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Reunion",
                                                                        children: "Reunion"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Romania",
                                                                        children: "Romania"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Russian Federation",
                                                                        children: "Russian Federation"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Rwanda",
                                                                        children: "Rwanda"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Saint Helena",
                                                                        children: "Saint Helena"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Saint Kitts and Nevis",
                                                                        children: "Saint Kitts and Nevis"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Saint Lucia",
                                                                        children: "Saint Lucia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Saint Pierre and Miquelon",
                                                                        children: "Saint Pierre and Miquelon"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Saint Vincent and The Grenadines",
                                                                        children: "Saint Vincent and The Grenadines"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Samoa",
                                                                        children: "Samoa"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "San Marino",
                                                                        children: "San Marino"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Sao Tome and Principe",
                                                                        children: "Sao Tome and Principe"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Saudi Arabia",
                                                                        children: "Saudi Arabia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Senegal",
                                                                        children: "Senegal"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Serbia",
                                                                        children: "Serbia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Seychelles",
                                                                        children: "Seychelles"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Sierra Leone",
                                                                        children: "Sierra Leone"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Singapore",
                                                                        children: "Singapore"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Slovakia",
                                                                        children: "Slovakia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Slovenia",
                                                                        children: "Slovenia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Solomon Islands",
                                                                        children: "Solomon Islands"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Somalia",
                                                                        children: "Somalia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "South Africa",
                                                                        children: "South Africa"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "South Georgia and The South Sandwich Islands",
                                                                        children: "South Georgia and The South Sandwich Islands"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Spain",
                                                                        children: "Spain"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Sri Lanka",
                                                                        children: "Sri Lanka"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Sudan",
                                                                        children: "Sudan"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Suriname",
                                                                        children: "Suriname"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Svalbard and Jan Mayen",
                                                                        children: "Svalbard and Jan Mayen"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Swaziland",
                                                                        children: "Swaziland"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Sweden",
                                                                        children: "Sweden"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Switzerland",
                                                                        children: "Switzerland"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Syrian Arab Republic",
                                                                        children: "Syrian Arab Republic"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Taiwan",
                                                                        children: "Taiwan"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Tajikistan",
                                                                        children: "Tajikistan"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Tanzania, United Republic of",
                                                                        children: "Tanzania, United Republic of"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Thailand",
                                                                        children: "Thailand"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Timor-leste",
                                                                        children: "Timor-leste"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Togo",
                                                                        children: "Togo"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Tokelau",
                                                                        children: "Tokelau"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Tonga",
                                                                        children: "Tonga"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Trinidad and Tobago",
                                                                        children: "Trinidad and Tobago"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Tunisia",
                                                                        children: "Tunisia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Turkey",
                                                                        children: "Turkey"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Turkmenistan",
                                                                        children: "Turkmenistan"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Turks and Caicos Islands",
                                                                        children: "Turks and Caicos Islands"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Tuvalu",
                                                                        children: "Tuvalu"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Uganda",
                                                                        children: "Uganda"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Ukraine",
                                                                        children: "Ukraine"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "United Arab Emirates",
                                                                        children: "United Arab Emirates"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "United Kingdom",
                                                                        children: "United Kingdom"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "United States",
                                                                        children: "United States"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "United States Minor Outlying Islands",
                                                                        children: "United States Minor Outlying Islands"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Uruguay",
                                                                        children: "Uruguay"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Uzbekistan",
                                                                        children: "Uzbekistan"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Vanuatu",
                                                                        children: "Vanuatu"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Venezuela",
                                                                        children: "Venezuela"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Viet Nam",
                                                                        children: "Viet Nam"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Virgin Islands, British",
                                                                        children: "Virgin Islands, British"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Virgin Islands, U.S.",
                                                                        children: "Virgin Islands, U.S."
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Wallis and Futuna",
                                                                        children: "Wallis and Futuna"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Western Sahara",
                                                                        children: "Western Sahara"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Yemen",
                                                                        children: "Yemen"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Zambia",
                                                                        children: "Zambia"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                        value: "Zimbabwe",
                                                                        children: "Zimbabwe"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                htmlFor: "company-website",
                                                                className: "block text-base font-medium text-gray-700",
                                                                children: "Website"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "mt-1 flex rounded-md shadow-sm",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "inline-flex items-center px-3 rounded-l-md border-2 border-solid border-r-0 border-gray-300 bg-gray-50 text-gray-600 text-sm",
                                                                        children: "http://"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        type: "text",
                                                                        name: "company-website",
                                                                        id: "company-website",
                                                                        className: "focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-base border-2 border-solid p-2.5 border-gray-300",
                                                                        placeholder: "www.example.com (optional)",
                                                                        value: website,
                                                                        onChange: (e)=>setWebsite(e.target.value)
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                            className: " form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none ",
                                                            id: "exampleFormControlTextarea1",
                                                            rows: "3",
                                                            placeholder: "Your message",
                                                            value: message,
                                                            onChange: (e)=>setMessage(e.target.value)
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                className: "block text-base font-base text-gray-700",
                                                                children: "File"
                                                            }),
                                                            fileName === "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "space-y-1 text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            className: "mx-auto h-12 w-12 text-gray-400",
                                                                            stroke: "currentColor",
                                                                            fill: "none",
                                                                            viewBox: "0 0 48 48",
                                                                            "aria-hidden": "true",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
                                                                                strokeWidth: 2,
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "flex text-sm text-gray-600",
                                                                            children: [
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                                    htmlFor: "file-upload",
                                                                                    className: "relative cursor-pointer bg-white rounded-md font-medium text-[#f49038] hover:text-[#f49038] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#f49038]",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            children: "Upload Job Description"
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            id: "file-upload",
                                                                                            name: "file-upload",
                                                                                            type: "file",
                                                                                            onChange: (e)=>handleChange(e)
                                                                                            ,
                                                                                            className: "sr-only"
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    className: "pl-1",
                                                                                    children: "or drag and drop"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: ".doc, .pnt less than 10MB"
                                                                        })
                                                                    ]
                                                                })
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "Attached file"
                                                                        }),
                                                                        " ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "font-bold",
                                                                            children: fileName
                                                                        }),
                                                                        "  ",
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-red-600 cursor-pointer",
                                                                            onClick: cancelFile,
                                                                            children: "X"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "shadow overflow-hidden sm:rounded-md",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "px-4 py-5 bg-white space-y-6 sm:p-6",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("fieldset", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "mt-4 space-y-4",
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "flex items-start",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: "flex items-center h-5",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                            id: "comments",
                                                                                            name: "comments",
                                                                                            type: "checkbox",
                                                                                            className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-600 rounded"
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "ml-3 text-base",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                                                htmlFor: "comments",
                                                                                                className: "font-medium text-gray-700",
                                                                                                children: "Sign"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                className: "text-gray-500",
                                                                                                children: "I will like to send a non disclosure form."
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "px-4 py-3 bg-gray-50 text-right sm:px-6",
                                                                    children: [
                                                                        !isPending && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            className: "inline-flex justify-center px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]",
                                                                            onClick: handleSubmit,
                                                                            children: "Submit"
                                                                        }),
                                                                        isPending && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                            className: "inline-flex justify-center px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]",
                                                                            onClick: handleSubmit,
                                                                            children: "Submiting..."
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9956:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _clutch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1060);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const containerVariant = {
    hidden: {
        y: 50,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 3,
            delay: 0.3
        }
    }
};
const imageVariant = {
    hidden: {
        x: 10,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 3,
            delay: 0.3
        }
    }
};
const HomeHero = ()=>{
    const { 0: loaded , 1: setLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_clutch__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(()=>{
            setLoaded(true);
        });
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
            className: "pt-36 pb-20 md:pt-[7.5rem]",
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                once: true,
                amount: 0.5
            },
            transition: {
                staggerChildren: 0.5
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container m-auto px-6 md:px-12 lg:px-6",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "lg:flex lg:items-center lg:gap-x-16",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                            className: "space-y-8 lg:w-7/12",
                            variants: containerVariant,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: " font-bold text-gray-900 text-6xl md:text-6xl",
                                    children: " Build Custom Software"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-gray-600 lg:w-11/12",
                                    children: "Whether fully end to end outsourcing, dedicated team or outstaffing of vetted engineers, we are here to see you through"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "block text-gray-600",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "mr-2",
                                            children: "Custom Development"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "mr-2 p-1 border-x border-solid border-black",
                                            children: "Dedicated Team"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Staff Augumentation"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "grid grid-cols-3 space-x-4 md:space-x-6 md:flex",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        "aria-label": "add to slack",
                                        href: "#",
                                        className: "p-4 border border-gray-200 rounded-md hover:border-cyan-400 hover:shadow-lg",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex justify-center space-x-4",
                                            children: loaded ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "clutch-widget",
                                                "data-nofollow": "true",
                                                "data-url": "https://widget.clutch.co",
                                                "data-widget-type": "2",
                                                "data-height": "45",
                                                "data-clutchcompany-id": "1969898"
                                            }) : ""
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        "\uD83D\uDD25\uD83C\uDF1F",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Quick Reach :"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "https://wa.me/message/SEPR4C43ZJGSO1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                target: "_blank",
                                                className: "font-semibold text-gray-700",
                                                children: " Whatsapp"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                            hidden: true,
                            className: "lg:block lg:w-5/12",
                            variants: imageVariant,
                            whileHover: {
                                scale: 1.2,
                                transition: {
                                    duration: 1
                                }
                            },
                            whileTap: {
                                scale: 0.9
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "images/watch.svg",
                                className: "w-full",
                                alt: "wath illustration",
                                loading: "lazy",
                                width: "320",
                                height: "280"
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeHero);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const LogoCompany = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container m-auto px-6 md:px-12 lg:px-6",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative py-8 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative z-[1] container m-auto px-6 md:px-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "m-auto text-center md:w-8/12 lg:w-6/12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    className: "text-2xl text-white font-bold md:text-4xl",
                                    children: [
                                        "Our Clients ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sky-400",
                                            children: "are"
                                        }),
                                        " happy companies you know"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "m-auto mt-16 md:w-11/12 lg:w-8/12 xl:w-8/12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-wrap justify-center gap-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "images/clients/nairaman-PhotoRoom.png",
                                                className: "contrast-0 transition group-hover:contrast-100",
                                                loading: "lazy",
                                                alt: "logo nairamerics"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "images/clients/cinfores(1)-PhotoRoom(1).png",
                                                className: "contrast-0 transition group-hover:contrast-100",
                                                loading: "lazy",
                                                alt: "logo cinfores"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "images/clients/treepzs-PhotoRoom.png",
                                                className: "contrast-0 transition group-hover:contrast-100",
                                                loading: "lazy",
                                                alt: "logo treepz"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "images/clients/pennecklogo.png",
                                                className: "contrast-0 transition group-hover:contrast-100",
                                                loading: "lazy",
                                                alt: "logo penneck"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "images/clients/gmh.png",
                                                className: "contrast-0 transition group-hover:contrast-100",
                                                loading: "lazy",
                                                alt: "God made homes"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "images/clients/automatic.svg",
                                                className: "contrast-0 transition group-hover:contrast-100",
                                                loading: "lazy",
                                                alt: "logo automatic"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "images/clients/cornelhealth.png",
                                                className: "contrast-0 transition group-hover:contrast-100",
                                                loading: "lazy",
                                                alt: "logo automatic"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        "aria-hidden": "true",
                        className: "absolute h-full inset-0 flex items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            "aria-hidden": "true",
                            className: "bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        "aria-hidden": "true",
                        className: "absolute inset-0 w-full h-full bg-[#020314] opacity-90"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogoCompany);


/***/ }),

/***/ 8192:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_awesome_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6318);
/* harmony import */ var react_awesome_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2702);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_4__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, swiper__WEBPACK_IMPORTED_MODULE_6__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_4__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, swiper__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import Carousel from 'nuka-carousel';











const containerVariant = {
    hidden: {
        y: 20,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 3,
            delay: 0.3
        }
    }
};
const MiniTestimony = ()=>{
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            id: 1,
            name: "Mr. Chris",
            company: "Manager,Pfxnet",
            buildContent: "We had our platform, pfxnet Nigerian foremost property monoline profit system built by droomwork from ground up. They are excellent in delivery and we can recommend them to anyone.",
            imgFile: "images/IMG-20220927-WA0011.jpg"
        },
        {
            id: 2,
            name: "Mr. Dotun Brown",
            company: "Nuthoop",
            buildContent: "I have had the opportunity of working with droomwork limited in the development of our web portal. The development team has been on point in terms of meeting our companys acceptance criteria and delivering value. I reckon they are fast growing indigenous software company to work with",
            imgFile: "images/dotunBrown.jpg"
        }
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "pb-20",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                className: "bg-white dark:bg-gray-800 w-full mx-auto p-8 flex justify-center",
                initial: "hidden",
                whileInView: "visible",
                variants: containerVariant,
                viewport: {
                    once: true,
                    amount: 0.5
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-11/12 p-2 shadow-xl rounded-xl bg-black md:w-8/12 lg:w-6/12",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
                        modules: [
                            swiper__WEBPACK_IMPORTED_MODULE_6__.Navigation,
                            swiper__WEBPACK_IMPORTED_MODULE_6__.Pagination,
                            swiper__WEBPACK_IMPORTED_MODULE_6__.Scrollbar,
                            swiper__WEBPACK_IMPORTED_MODULE_6__.A11y,
                            swiper__WEBPACK_IMPORTED_MODULE_6__.Autoplay
                        ],
                        // spaceBetween={50}
                        // slidesPerView={3}
                        // navigation
                        pagination: {
                            clickable: true
                        },
                        autoplay: {
                            delay: 7000,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false
                        },
                        // scrollbar={{ draggable: true }}
                        onSwiper: (swiper)=>console.log(swiper)
                        ,
                        onSlideChange: ()=>console.log("slide change")
                        ,
                        loop: true,
                        children: state && state.map((items)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex md:items-start flex-col md:flex-row items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    className: "block relative",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        alt: "profil",
                                                        src: items.imgFile,
                                                        className: "mx-auto object-cover rounded-full h-24 w-24 "
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col mt-1.5 items-center justify-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "font-semibold text-[#f49038] mr-2 text-lg",
                                                            children: items.name
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-gray-300 text-md mr-2",
                                                            children: items.company
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-full px-4 py-1.5 lg:px-0 lg:py-0 md:w-4/6",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "text-gray-300 dark:text-white w-full md:w-5/6 m-auto text-left text-lg md:text-xl",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "font-bold text-[#f49038]",
                                                        children: "\u201C"
                                                    }),
                                                    items.buildContent,
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "font-bold text-[#f49038]",
                                                        children: "\u201D"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }, items.id)
                        )
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiniTestimony);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ modal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-player/lazy"
const lazy_namespaceObject = require("react-player/lazy");
var lazy_default = /*#__PURE__*/__webpack_require__.n(lazy_namespaceObject);
;// CONCATENATED MODULE: ./components/mainPage/homePage/modal.js



const ModalTestimony = ({ setShowModal  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container m-auto px-6 md:px-12 lg:px-6",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "fixed inset-0 z-50 overflow-y-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "fixed inset-0 w-full h-full bg-black opacity-40",
                        onClick: ()=>setShowModal(false)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center min-h-screen px-4 py-8",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative w-full max-w-3xl mx-auto bg-white rounded-md shadow-lg",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center justify-between p-4 border-b",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "text-lg font-medium text-gray-800",
                                            children: "Testimonial Video"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "p-2 text-gray-400 rounded-md hover:bg-gray-100",
                                            onClick: ()=>setShowModal(false)
                                            ,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "w-5 h-5 mx-auto",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fillRule: "evenodd",
                                                    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                                    clipRule: "evenodd"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "space-y-2 p-4 mt-3 text-[15.5px] leading-relaxed text-gray-500",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((lazy_default()), {
                                        url: "https://www.youtube.com/watch?v=KLFK7cY5nvk",
                                        width: "100%",
                                        height: "27rem"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const modal = (ModalTestimony);


/***/ }),

/***/ 7792:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const containerVariant = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 3,
            delay: 0.3
        }
    }
};
const scrollTo = ()=>{
    document.getElementById("form").scrollIntoView({
        behavior: "smooth",
        inline: "nearest"
    });
};
const ServicesSection = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            className: "pb-20",
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                once: true,
                amount: 0.1
            },
            variants: containerVariant,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container m-auto px-6 md:px-12 lg:px-6",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    className: "pt:2 md:pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-wrap md:mx-8",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mb-4 flex justify-center w-full md:w-1/2 xl:w-1/5 px-2 md:px-4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-fit h-fit mt-7 p-1 border-l-4 border-solid border-black",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex gap-x-2 ml-1.5 text-2xl font-bold md:flex-col",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: "Our"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: "Services"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full md:w-1/2 xl:w-2/5 px-2 md:px-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-white rounded-lg overflow-hidden mb-10",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "images/Custom-Software-Development.jpg",
                                                alt: "image",
                                                className: "w-full"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "p-4 sm:p-9 md:p-7 xl:p-4 text-left",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#",
                                                            className: " font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary ",
                                                            children: "Custom Software Build"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-base text-body-color leading-relaxed mb-7",
                                                        children: "With our carefully crafted software engineering process, we turn clients idea into product that users will love."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "w-fit px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935] cursor-pointer",
                                                        "aria-label": "coming soon",
                                                        title: "coming soon",
                                                        onClick: scrollTo,
                                                        children: "View Details"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full md:w-1/2 xl:w-2/5 px-2 md:px-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-white rounded-lg overflow-hidden mb-10",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "images/team.webp",
                                                alt: "image",
                                                className: "w-full"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "p-4 sm:p-9 md:p-7 xl:p-4 text-left",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#",
                                                            className: " font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary ",
                                                            children: "Dedicated Team"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-base text-body-color leading-relaxed mb-7",
                                                        children: "Our inhouse profesional engineers integrates very closely with your internal team to deliver value just as an inhouse team."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "w-fit px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935] cursor-pointer",
                                                        "aria-label": "coming soon",
                                                        title: "coming soon",
                                                        onClick: scrollTo,
                                                        children: "View Details"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServicesSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const StackLogo = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "pb-20",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container m-auto px-6 md:px-12 lg:px-6",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative py-8 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-8",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "relative z-[1] container m-auto px-6 md:px-12",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "m-auto text-center md:w-8/12 lg:w-6/12",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: "text-2xl text-white font-bold md:text-4xl",
                                        children: [
                                            "We intentionally leverage ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-[#F49038]",
                                                children: "standard development"
                                            }),
                                            " frameworks for the build of our client\u2019s products"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "m-auto mt-16 md:w-11/12 lg:w-8/12 xl:w-9/12",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-wrap justify-center gap-6",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "images/clients/solidity.png",
                                                    className: "contrast-0 transition group-hover:contrast-100",
                                                    loading: "lazy",
                                                    alt: "logo solidity"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "images/clients/javaa.png",
                                                    className: "contrast-0 transition group-hover:contrast-100",
                                                    loading: "lazy",
                                                    alt: "logo javaa"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "images/clients/reac.png",
                                                    className: "contrast-0 transition group-hover:contrast-100",
                                                    loading: "lazy",
                                                    alt: "logo react"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "images/clients/React-native.png",
                                                    className: "contrast-0 transition group-hover:contrast-100",
                                                    loading: "lazy",
                                                    alt: "logo react native"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "images/clients/kotlin.png",
                                                    className: "contrast-0 transition group-hover:contrast-100",
                                                    loading: "lazy",
                                                    alt: "logo kotlin"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "images/clients/flutter.png",
                                                    className: "contrast-0 transition group-hover:contrast-100",
                                                    loading: "lazy",
                                                    alt: "logo flutter"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "images/clients/nodejs.png",
                                                    className: "contrast-0 transition group-hover:contrast-100",
                                                    loading: "lazy",
                                                    alt: "logo node"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "images/clients/python.png",
                                                    className: "contrast-0 transition group-hover:contrast-100",
                                                    loading: "lazy",
                                                    alt: "logo python"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "images/clients/vuejs.png",
                                                    className: "contrast-0 transition group-hover:contrast-100",
                                                    loading: "lazy",
                                                    alt: "logo vuejs"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            "aria-hidden": "true",
                            className: "absolute h-full inset-0 flex items-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                "aria-hidden": "true",
                                className: "bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            "aria-hidden": "true",
                            className: "absolute inset-0 w-full h-full bg-[#020314] opacity-90"
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StackLogo);


/***/ }),

/***/ 6426:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4695);
/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nuka_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5800);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9217);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_7__, swiper_react__WEBPACK_IMPORTED_MODULE_8__]);
([swiper__WEBPACK_IMPORTED_MODULE_7__, swiper_react__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









// Import Swiper styles





const SuccessCase = ()=>{
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            id: 1,
            type: "Real Estate",
            buildTopic: "Digitalizing Company Operations",
            stleTopic: "Real Estate",
            buildContent: "Digitalization of all companies operational records to facilitate for more efficient workflow amongst department, promote a remote first work culture and enable data visualization and analytics for smarter business decisions.",
            imgFile: "images/Blue Illustration Laptop Hello Circle Sticker.png",
            country: "NGA",
            company: "God Made Homes Luxury"
        },
        {
            id: 2,
            type: "Retail and E-commerce",
            buildTopic: "Digital Transformation of Sales Funnel",
            stleTopic: "Retail and E-commerce",
            buildContent: "Leveraging tech and the power of multiple user channels to reach out to clients through AI powered intelligent systems to accelerate sales.",
            imgFile: "images/nativeFood.png",
            country: "Germany",
            company: "Nuthoop"
        },
        {
            id: 3,
            type: "Fintech",
            buildTopic: "POS field Officers Tracking",
            stleTopic: "Fintech",
            buildContent: "Track locations, time to visit, work updates of all POS field officers across all bank branches and location",
            imgFile: "images/pos.png",
            country: "NGA",
            company: "Zenith Bank"
        }
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "pb-20",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_title__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    title: "Our Portfolio"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container m-auto px-6 md:px-12 lg:px-6",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_8__.Swiper, {
                        // install Swiper modules
                        modules: [
                            swiper__WEBPACK_IMPORTED_MODULE_7__.Navigation,
                            swiper__WEBPACK_IMPORTED_MODULE_7__.Pagination,
                            swiper__WEBPACK_IMPORTED_MODULE_7__.Scrollbar,
                            swiper__WEBPACK_IMPORTED_MODULE_7__.A11y,
                            swiper__WEBPACK_IMPORTED_MODULE_7__.Autoplay
                        ],
                        // spaceBetween={50}
                        // slidesPerView={3}
                        navigation: true,
                        pagination: {
                            clickable: true
                        },
                        autoplay: {
                            delay: 4000,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false
                        },
                        // scrollbar={{ draggable: true }}
                        onSwiper: (swiper)=>console.log(swiper)
                        ,
                        onSlideChange: ()=>console.log("slide change")
                        ,
                        loop: true,
                        children: state && state.map((items)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_8__.SwiperSlide, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mb-0 lg:max-w-lg lg:pr-8 xl:pr-6",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex flex-col items-start mb-6 text-center md:mb-16 lg:mb-6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-[#001935]",
                                                            children: items.type
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "mb-5 text-left font-sans font-bold tracking-tight text-gray-900 sm:text-4xl md:text-left",
                                                        children: [
                                                            items.buildTopic,
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                className: "hidden md:block"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "text-left mb-5 text-base text-gray-700 md:text-lg md:text-left",
                                                        children: [
                                                            items.buildContent,
                                                            " in ",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: "font-semibold",
                                                                children: [
                                                                    " ",
                                                                    items.country,
                                                                    " "
                                                                ]
                                                            }),
                                                            "."
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-left mb-5 text-base text-gray-700 md:text-lg md:text-left",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-[#F49038]",
                                                            children: items.company
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full",
                                                src: items.imgFile,
                                                alt: ""
                                            })
                                        })
                                    ]
                                }, items.id)
                            }, items.id)
                        )
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SuccessCase);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6440:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5800);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9217);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_6__]);
framer_motion__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const containerVariant = {
    hidden: {
        y: 20,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 3,
            delay: 0.3
        }
    }
};
const TestimonialPage = ({ setShowModal  })=>{
    const x = -50;
    const y = -50;
    const transformStyle = {
        transform: `translate(${x}%, ${y}%)`
    };
    // var cleft = 100;
    // var ctop = 100;
    // var ctrans = 'translate('+cleft+'px, '+ctop+'px)';
    // var css = {
    //     transform: ctrans 
    // }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
            className: "container m-auto px-6 md:px-12 lg:px-6",
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                once: true,
                amount: 0.5
            },
            variants: containerVariant,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-white dark:bg-gray-800 w-full mx-auto p-4 md:p-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_title__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        title: "Testimonials"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center md:items-start flex-col md:flex-row justify-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full md:w-2/3 self-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-left text-lg md:text-2xl",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "font-bold text-[#f49038]",
                                                children: "\u201C"
                                            }),
                                            "I needed to add more value to my customers by digitalizing nediscare but i had a big setback because i lacked the technical skills, but droomwork came to my rescue and right now i have increase the retention rate and acquisition of customers got easier.",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "font-bold text-[#f49038]",
                                                children: "\u201D"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex mt-8 items-center justify-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                className: "block relative",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    alt: "profil",
                                                    src: "images/IMG-20220927-WA0009.jpg",
                                                    className: "object-cover rounded-full h-12 w-12 "
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "font-semibold text-[#f49038] ml-2 text-lg",
                                                        children: "Nediscare"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-gray-400 text-md ml-2",
                                                        children: "C.E.0 Nediscare"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "block relative",
                                onClick: ()=>setShowModal(true)
                                ,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        alt: "profil",
                                        src: "images/IMG-20220927-WA0009.jpg",
                                        className: "mx-auto object-cover rounded-lg h-96 w-96 block "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPlay,
                                        shake: true,
                                        size: "4x",
                                        className: "absolute top-1/2 left-2/4 text-white h-20",
                                        style: transformStyle
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestimonialPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7830:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9217);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const containerVariant = {
    hidden: {
        y: 20,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 3,
            delay: 0.3
        }
    }
};
const UniquePage = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "pb-20",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                className: "container m-auto px-4 md:px-12 lg:px-6",
                initial: "hidden",
                whileInView: "visible",
                viewport: {
                    once: true,
                    amount: 0.1
                },
                variants: containerVariant,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "py-16 px-2 text-center md:px-8 bg-[#f3f4f6]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_title__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            title: "Our Engineering Process"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container m-auto px-2 text-gray-500 md:px-12 xl:px-0",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid lg:grid-cols-6 gap-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "lg:col-span-2",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "h-full flex flex-col justify-between bg-white rounded-xl shadow-lg px-8 space-y-4 py-12 sm:px-12 lg:px-8",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex justify-center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "images/idea.jpg",
                                                        alt: "illustration",
                                                        loading: "lazy",
                                                        width: "260"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "text-2xl font-semibold text-cyan-900",
                                                    children: "Idea Discussion and Delivery Estimation"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex justify-center",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: " list-disc text-left",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "Problem Understanding"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "Requirement Gathering"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "Research"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "Approximate Estimation"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "lg:col-span-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "h-full flex flex-col justify-between bg-white rounded-xl shadow-lg px-8 py-12 sm:px-12 lg:px-8",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "space-y-4 mb-6",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex justify-center",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "images/plan.jpg",
                                                            alt: "illustration",
                                                            loading: "lazy",
                                                            width: "300"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "text-2xl font-semibold text-cyan-900",
                                                        children: "Planning"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex justify-center",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            className: " list-disc text-left",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Information Architecture"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Tech Stack and Architecture"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Development Plan"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "lg:col-span-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "h-full flex flex-col justify-between bg-white rounded-xl shadow-lg px-8 py-12 sm:px-12 lg:px-8",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "space-y-4 mb-6",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex justify-center",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "images/9933427_4300580.jpg",
                                                            alt: "illustration",
                                                            loading: "lazy",
                                                            width: "170"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "text-2xl font-semibold text-cyan-900",
                                                        children: "Design"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex justify-center",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            className: " list-disc text-left",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Identity Deign"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Wireframe"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Prototype"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "UI Mockup"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "lg:col-span-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "h-full flex flex-col justify-between bg-white rounded-xl shadow-lg px-8 py-12 sm:px-12 lg:px-8",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "space-y-4 mb-6",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex justify-center",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "images/coding.jpg",
                                                            alt: "illustration",
                                                            loading: "lazy",
                                                            width: "170"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "text-2xl font-semibold text-cyan-900",
                                                        children: "Coding"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex justify-center",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                            className: " list-disc text-left",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: "Website Layout"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "lg:col-span-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "h-full flex flex-col justify-between bg-white rounded-xl shadow-lg px-8 py-12 sm:px-12 lg:px-8",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "space-y-4 mb-6",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex justify-center",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "images/team.jpg",
                                                            alt: "illustration",
                                                            loading: "lazy",
                                                            width: "210"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "text-2xl font-semibold text-cyan-900",
                                                        children: "Testing"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex justify-center",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            className: " list-disc text-left",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Testing Autoation"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Useability Testing"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Security Checks"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "lg:col-span-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "h-full flex flex-col justify-between bg-white rounded-xl shadow-lg px-8 py-12 sm:px-12 lg:px-8",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "space-y-4 mb-6",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex justify-center",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: "images/deploy.jpg",
                                                            alt: "illustration",
                                                            loading: "lazy",
                                                            width: "190"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "text-2xl font-semibold text-cyan-900",
                                                        children: "Deployment and Maintenance"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex justify-center",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                            className: " list-disc text-left",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Your complete source code and build files"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "Project Reviews"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "User feedback"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: "1 Month free Maintenance/Support"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UniquePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2702:
/***/ ((module) => {

"use strict";

/** @type {import('next').NextConfig} */ const nextConfig = {
    reactStrictMode: true,
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true
    }
};
module.exports = nextConfig;


/***/ }),

/***/ 2949:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Build),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_mainPage_homePage_homeHero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9956);
/* harmony import */ var components_mainPage_homePage_sevices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7792);
/* harmony import */ var components_mainPage_homePage_extraServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6676);
/* harmony import */ var components_mainPage_homePage_successCase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6426);
/* harmony import */ var components_mainPage_homePage_unique__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7830);
/* harmony import */ var components_mainPage_homePage_testimonial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6440);
/* harmony import */ var components_mainPage_homePage_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1207);
/* harmony import */ var components_mainPage_homePage_miniTestimony__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8192);
/* harmony import */ var components_mainPage_homePage_logo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7702);
/* harmony import */ var components_mainPage_homePage_stackLogo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5070);
/* harmony import */ var components_mainPage_homePage_homeBlog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3098);
/* harmony import */ var components_mainPage_homePage_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4219);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_mainPage_homePage_homeHero__WEBPACK_IMPORTED_MODULE_3__, components_mainPage_homePage_sevices__WEBPACK_IMPORTED_MODULE_4__, components_mainPage_homePage_extraServices__WEBPACK_IMPORTED_MODULE_5__, components_mainPage_homePage_successCase__WEBPACK_IMPORTED_MODULE_6__, components_mainPage_homePage_unique__WEBPACK_IMPORTED_MODULE_7__, components_mainPage_homePage_testimonial__WEBPACK_IMPORTED_MODULE_8__, components_mainPage_homePage_miniTestimony__WEBPACK_IMPORTED_MODULE_10__, components_mainPage_homePage_form__WEBPACK_IMPORTED_MODULE_14__]);
([components_mainPage_homePage_homeHero__WEBPACK_IMPORTED_MODULE_3__, components_mainPage_homePage_sevices__WEBPACK_IMPORTED_MODULE_4__, components_mainPage_homePage_extraServices__WEBPACK_IMPORTED_MODULE_5__, components_mainPage_homePage_successCase__WEBPACK_IMPORTED_MODULE_6__, components_mainPage_homePage_unique__WEBPACK_IMPORTED_MODULE_7__, components_mainPage_homePage_testimonial__WEBPACK_IMPORTED_MODULE_8__, components_mainPage_homePage_miniTestimony__WEBPACK_IMPORTED_MODULE_10__, components_mainPage_homePage_form__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















// import MappedCases from 'components/mainPage/homePage/mappedCases';
if (process.env.APP_env === "development") {
    var api_origin = "https://api.droomwork.io";
} else {
    api_origin = "http://api.droomwork.io";
// api_origin = 'http://localhost:3000'
}
if (false) { var Token; }
function Build({ blogData  }) {
    // export default function Build() {
    const { 0: showModal , 1: setShowModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Droomwork"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Get qualified and reliable developers & designers around the world with hourly rates ranging from $8 - $193 to jump on your project within 48hrs."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "images/droomlogo.svg"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: "images/featuredImage.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,600&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        async: true,
                        src: "https://www.googletagmanager.com/gtag/js?id=G-J4W91HKYYX"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        children: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                  });
              `
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_mainPage_homePage_homeHero__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_mainPage_homePage_sevices__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_mainPage_homePage_extraServices__WEBPACK_IMPORTED_MODULE_5__/* .ExtraServices */ .U, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_mainPage_homePage_successCase__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_mainPage_homePage_unique__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_mainPage_homePage_testimonial__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                setShowModal: setShowModal
            }),
            showModal ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_mainPage_homePage_modal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                setShowModal: setShowModal
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_mainPage_homePage_miniTestimony__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_mainPage_homePage_logo__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_mainPage_homePage_stackLogo__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_mainPage_homePage_homeBlog__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                shortBlog: blogData
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_mainPage_homePage_form__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
        ]
    });
};
async function getStaticProps() {
    const response = await fetch(`${api_origin}/api/v1/admin/getBlogPosts`, {
        headers: {
            "Accept": "application/json",
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
            Accept: "application/json; charset=UTF-8",
            "Authorization": `Bearer ${Token}`,
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    });
    // const data = await JSON.stringify(response.data)
    const data = await response.json();
    // const data = datat.data.data
    return {
        props: {
            blogData: data
        },
        revalidate: 10
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 6466:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 4335:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 4695:
/***/ ((module) => {

"use strict";
module.exports = require("nuka-carousel");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6318:
/***/ ((module) => {

"use strict";
module.exports = require("react-awesome-slider");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,307,674], () => (__webpack_exec__(2949)));
module.exports = __webpack_exports__;

})();