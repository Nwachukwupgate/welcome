"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 7963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Details),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/blog/blogDetails/blogDetails.js

const BlogDetails = ({ postDetails: { title , content , authors_name , featured_image_link , category_id  }  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "mt-28 max-w-screen-lg mx-auto",
            style: {
                marginTop: "110px"
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-4 md:mb-0 w-full mx-auto relative",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "px-4 lg:px-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-4xl font-semibold text-gray-800 leading-tight",
                                        children: title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        className: "py-2 text-green-700 inline-flex items-center justify-center mb-2",
                                        children: category_id
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: featured_image_link,
                                className: "w-full object-cover lg:rounded"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col lg:flex-row lg:space-x-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "pb-6",
                                    dangerouslySetInnerHTML: {
                                        __html: content
                                    }
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm ",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "p-4 border-t border-b md:border md:rounded",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex py-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "images/droomlogo.png",
                                                    className: "h-10 w-10 rounded-full mr-2 object-cover"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: "font-semibold text-gray-700 text-sm",
                                                            children: [
                                                                " ",
                                                                authors_name,
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "font-semibold text-gray-600 text-xs",
                                                            children: " Editor "
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-gray-700 py-3",
                                            children: "Droomwork is the hub that houses the best freelancers, startups, HR, and businesses, the infrastructure, brings interconnectivity that matches everyone's needs."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            className: "px-2 py-1 inline-flex w-full lg:w-fit justify-center font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] border-2 border-solid border-[#001935]",
                                            children: [
                                                "Join Today",
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "bx bx-user-plus ml-2"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const blogDetails = (BlogDetails);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/blog/scrollProgress/ScrollProgress.js


const ScrollIndicator = ()=>{
    const { 0: scroll , 1: setScroll  } = (0,external_react_.useState)(0);
    const onScroll = ()=>{
        const Scrolled = document.documentElement.scrollTop;
        const MaxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const ScrollPercent = Scrolled / MaxHeight * 100;
        setScroll(ScrollPercent);
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", onScroll);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "sticky top-16 bg-black h-2 left-0 z-10 w-full",
        style: {
            position: "sticky",
            top: "76px"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "h-2 bg-green-500",
            style: {
                width: `${scroll}%`,
                backgroundColor: "green"
            }
        })
    });
};
/* harmony default export */ const ScrollProgress = (ScrollIndicator);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/blog/[slug].js





if (process.NEXT_PUBLIC_NODE_ENV === "development") {
    var api_origin = "http://localhost:3333";
} else {
    api_origin = "http://api.droomwork.io";
// api_origin = 'http://localhost:3000'
}
if (false) { var Token; }
function Details({ postDetails  }) {
    // console.log(postDetails,'segu ')
    // const router = {useRouter}
    // if(router.isFallback){
    //   return(
    //     <div role="status">
    //       <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#001935]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    //           <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    //           <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    //       </svg>
    //       <span className="sr-only">Loading...</span>
    //     </div>
    //   )
    // }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "images/droomlogo.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,600&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: postDetails !== undefined ? postDetails.title : "Droomwork"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Droomwork"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ScrollProgress, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(blogDetails, {
                postDetails: postDetails
            })
        ]
    });
};
async function getStaticProps(context) {
    const { params  } = context;
    // console.log("this is the slug", params.slug)
    const title = params.slug;
    const response = await fetch(`${api_origin}/api/v1/admin/getBlogPosts/${title}`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${Token}`,
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    });
    const post = await response.json();
    // deep nesting
    const data = post.data.data;
    // const data = JSON.parse(JSON.stringify(post?.data?.data))
    // const data = JSON.parse(JSON.stringify(dataPost))
    // console.log("this is ", post)
    return {
        props: {
            postDetails: data[0]
        },
        revalidate: 10
    };
}
async function getStaticPaths() {
    const response = await fetch(`${api_origin}/api/v1/admin/getBlogPosts`, {
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${Token}`,
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    });
    const data = await response.json();
    // console.log("the data", data)
    const paths = data.data.data.map((post)=>{
        // console.log(post)
        // console.log(post.slug)
        return {
            params: {
                slug: `${post.slug}`
            }
        };
    });
    return {
        paths,
        fallback: false
    };
}


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7963));
module.exports = __webpack_exports__;

})();