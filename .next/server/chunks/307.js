"use strict";
exports.id = 307;
exports.ids = [307];
exports.modules = {

/***/ 4307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gk": () => (/* binding */ apiSlice),
/* harmony export */   "dU": () => (/* binding */ useCustomContactMutation)
/* harmony export */ });
/* unused harmony exports useRegisterUserMutation, useQuickHireMutation */
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

if (process.env.APP_env === "development") {
    var api_origin = "https://api.droomwork.io";
} else {
    api_origin = "http://api.droomwork.io";
// api_origin = 'http://localhost:3000'
}
if (false) { var Token; }
const apiSlice = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "api",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "https://api.droomwork.io",
        _mode: "cors",
        get mode () {
            return this._mode;
        },
        set mode (value){
            this._mode = value;
        },
        prepareHeaders: (headers)=>{
            headers.set("Authorization", `Bearer ${Token}`, "Access-Control-Allow-Origin", "*");
            headers.set("Content-type", "application/json");
            headers.set("Accept", "application/json");
            headers.set("Cache-Control", "no-cache");
            headers.set("Pragma", "no-cache");
            headers.set("Expires", "0");
            // headers.set('mode', 'cors');
            return headers;
        }
    }),
    tagTypes: [
        "Custom",
        "Register",
        "Hire"
    ],
    endpoints: (builder)=>({
            customContact: builder.mutation({
                query: (initialName)=>({
                        url: "api/v1/comp/customContact",
                        method: "POST",
                        body: initialName,
                        headers: {
                            "Content-Type": "application/json; charset=utf-8"
                        }
                    })
                ,
                // transformResponse : (response, meta, arg ) => response.data,
                invalidatesTags: [
                    "Custom"
                ]
            }),
            registerUser: builder.mutation({
                query: (newUser)=>({
                        url: "api/v1/all/register",
                        method: "POST",
                        body: newUser,
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                ,
                // transformResponse : (response, meta, arg ) => response.data,
                invalidatesTags: [
                    "Register"
                ]
            }),
            quickHire: builder.mutation({
                query: (hireName)=>({
                        url: "api/v1/comp/quickHire",
                        method: "POST",
                        body: hireName,
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                ,
                // transformResponse : (response, meta, arg ) => response.data,
                invalidatesTags: [
                    "Hire"
                ]
            })
        })
});
const { useCustomContactMutation , useRegisterUserMutation , useQuickHireMutation  } = apiSlice;


/***/ })

};
;