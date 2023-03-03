"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 9685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: external "typed.js"
const external_typed_js_namespaceObject = require("typed.js");
var external_typed_js_default = /*#__PURE__*/__webpack_require__.n(external_typed_js_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/blog/blogHero/BlogHero.js



const Content = ()=>{
    const el = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        const typed = new (external_typed_js_default())(el.current, {
            strings: [
                "Businesses",
                "Startups",
                "HR's"
            ],
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true,
            loopCount: Infinity
        });
        // Destropying
        return ()=>{
            typed.destroy();
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "px-4 pb-16 pt-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-30 lg:pb-24",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "grid gap-5 row-gap-8 lg:grid-cols-2",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col justify-center space-y-5 text-5xl lg:text-7xl font-bold text-center lg:text-left",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "School"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                "For ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-[#F49038] italic text-[2.5rem] lg:text-7xl",
                                    ref: el
                                }),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                "and ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-[#F49038] italic text-[2.5rem] lg:text-7xl",
                                    children: "Developers "
                                }),
                                " "
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "object-cover w-full h-56 rounded shadow-lg sm:h-96",
                        src: "images/home-c17fe990d (1).png?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                        alt: "Blog image"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const BlogHero = (Content);

;// CONCATENATED MODULE: ./components/blog/titleText/TopPost.js

const TopPost = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "text-gray-600 body-font",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container px-5 py-4 mx-auto",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-wrap w-full mb-4 flex-col items-center text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900",
                            children: "Droomwork Top Post"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "lg:w-1/2 w-full leading-relaxed text-gray-500",
                            children: "The Droomwork Blog is the top hub for developers, executives, and entrepreneurs, featuring key technology updates, freelancer resources, and management insights."
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const titleText_TopPost = (TopPost);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/blog/blogSection/BlogSection.js


const Blog = ({ shortBlog  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-4 lg:pb-20",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full",
            children: shortBlog && shortBlog.data.data.slice(0, 3).map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: `/blog/${post.slug}`,
                    passHref: true,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "min-h-full overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: post.featured_image_link,
                                className: "object-cover w-full h-64",
                                alt: post.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "p-5 border border-t-0 min-h-full",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "mb-3 text-xs font-semibold tracking-wide uppercase",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: `/blog/${post.slug}`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700",
                                                    "aria-label": "Category",
                                                    title: post.title,
                                                    children: post.category_id
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "text-gray-600",
                                                children: [
                                                    "\u2014 ",
                                                    post.created_at
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: `/blog/${post.slug}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            "aria-label": "Category",
                                            title: post.title,
                                            className: "inline-block mb-3 text-2xl font-bold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-700",
                                            children: post.title
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "mb-2 text-gray-700",
                                        children: [
                                            post.meta_description.length < 150 ? post.meta_description : post.meta_description.substring(0, 150),
                                            "...."
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: `/blog/${post.slug}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            "aria-label": "",
                                            className: "inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800",
                                            children: "Read more"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }, post.id)
            )
        })
    });
};
/* harmony default export */ const BlogSection = (Blog);

;// CONCATENATED MODULE: ./components/blog/category/Category.js

const Feature = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mt-4",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: "max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "relative inline-block",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            viewBox: "0 0 52 24",
                                            fill: "currentColor",
                                            className: "absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("pattern", {
                                                        id: "903f4a9e-7ac3-441c-9613-04c15fcc0a14",
                                                        x: "0",
                                                        y: "0",
                                                        width: ".135",
                                                        height: ".30",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                            cx: "1",
                                                            cy: "1",
                                                            r: ".7"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                    fill: "url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)",
                                                    width: "52",
                                                    height: "24"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "relative",
                                            children: "Explore"
                                        })
                                    ]
                                }),
                                " ",
                                "More Topics"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-base text-gray-700 md:text-lg",
                            children: "Ready to brush up on something new? We've got more to read right this way"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: "w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16",
                                        stroke: "currentColor",
                                        viewBox: "0 0 52 52",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                                            strokeWidth: "3",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            fill: "none",
                                            points: "29 13 14 29 25 29 23 39 38 23 27 23"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "mb-2 font-semibold leading-5",
                                    children: "Technical HR"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: "w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16",
                                        stroke: "currentColor",
                                        viewBox: "0 0 52 52",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                                            strokeWidth: "3",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            fill: "none",
                                            points: "29 13 14 29 25 29 23 39 38 23 27 23"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "mb-2 font-semibold leading-5",
                                    children: "Remote Work"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: "w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16",
                                        stroke: "currentColor",
                                        viewBox: "0 0 52 52",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                                            strokeWidth: "3",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            fill: "none",
                                            points: "29 13 14 29 25 29 23 39 38 23 27 23"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "mb-2 font-semibold leading-5",
                                    children: "Custom Build"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: "w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16",
                                        stroke: "currentColor",
                                        viewBox: "0 0 52 52",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                                            strokeWidth: "3",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            fill: "none",
                                            points: "29 13 14 29 25 29 23 39 38 23 27 23"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                    className: "mb-2 font-semibold leading-5",
                                    children: "Programming"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Category = (Feature);

;// CONCATENATED MODULE: ./components/blog/titleText/AllPost.js

const AllPost = ()=>{
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("section", {
            className: "text-gray-600 body-font",
            children: /*#__PURE__*/ _jsx("div", {
                className: "container px-5 py-4 mx-auto",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "flex flex-wrap w-full mb-4 flex-col items-center text-center",
                    children: [
                        /*#__PURE__*/ _jsx("h1", {
                            className: "sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900",
                            children: "Pitchfork Kickstarter Taxidermy"
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            className: "lg:w-1/2 w-full leading-relaxed text-gray-500",
                            children: "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table."
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const titleText_AllPost = ((/* unused pure expression or super */ null && (AllPost)));

;// CONCATENATED MODULE: ./components/blog/fullBlog/AllBlog.js


const AllBlog_Blog = ({ fullBlog  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-4 lg:pb-20",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full",
            children: fullBlog && fullBlog.data.data.slice(3).map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: `/blog/${post.slug}`,
                    passHref: true,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "min-h-full overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: post.featured_image_link,
                                className: "object-cover w-full h-64",
                                alt: post.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "p-5 border border-t-0 min-h-full",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "mb-3 text-xs font-semibold tracking-wide uppercase",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: `/blog/${post.slug}`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700",
                                                    "aria-label": "Category",
                                                    title: post.title,
                                                    children: post.category_id
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "text-gray-600",
                                                children: [
                                                    "\u2014 ",
                                                    post.created_at
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: `/blog/${post.slug}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            "aria-label": "Category",
                                            title: post.title,
                                            className: "inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700",
                                            children: post.title
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "mb-2 text-gray-700",
                                        children: [
                                            post.meta_description.length < 150 ? post.meta_description : post.meta_description.substring(0, 150),
                                            "...."
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: `/blog/${post.slug}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            "aria-label": "",
                                            className: "inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800",
                                            children: "Read more"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }, post.id)
            )
        })
    });
};
/* harmony default export */ const AllBlog = (AllBlog_Blog);

;// CONCATENATED MODULE: ./pages/blog/index.js









if (process.env.APP_env === "development") {
    var api_origin = "https://api.droomwork.io";
} else {
    api_origin = "http://api.droomwork.io";
// api_origin = 'http://localhost:3000'
}
if (false) { var Token; }
function Home({ blogData  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Droomwork"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: " Get qualified and reliable developers & designers around the world with hourly rates ranging from $8 - $193 to jump on your project within 48hrs."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "images/droomlogo.svg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "images/featuredImage.png"
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
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BlogHero, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(titleText_TopPost, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(BlogSection, {
                shortBlog: blogData
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Category, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(AllBlog, {
                fullBlog: blogData
            })
        ]
    });
};
async function getStaticProps() {
    const response = await fetch(`${api_origin}/api/v1/admin/getBlogPosts`, {
        headers: {
            "Accept": "application/json",
            "User-Agent": "*",
            "Authorization": `Bearer ${Token}`,
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    });
    // const data = await JSON.stringify(response.data)
    const data = await response.json();
    // const data = datat.data.data
    // console.log(data)
    return {
        props: {
            blogData: data
        },
        revalidate: 10
    };
}


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,675], () => (__webpack_exec__(9685)));
module.exports = __webpack_exports__;

})();