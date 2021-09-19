(() => {
var exports = {};
exports.id = 219;
exports.ids = [219];
exports.modules = {

/***/ 9741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPosts": () => (/* binding */ getPosts),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4651);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_layout_onepirate_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3785);
/* harmony import */ var _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(840);
/* harmony import */ var _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7051);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8689);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);











function createMarkup(content) {
  return {
    __html: content
  };
}

let posts;

const Page = ({
  post
}) => {
  var _post$translations$;

  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  console.log("locale is ", router.locale);

  if (router.isFallback) {
    // your loading indicator
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      children: "loading..."
    });
  } // console.log(post);


  const {
    0: render,
    1: setRender
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setRender(true);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: html_react_parser__WEBPACK_IMPORTED_MODULE_4___default()(post === null || post === void 0 ? void 0 : post.translations[0].head)
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("section", {
      className: (_styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_7___default().contentSection) // dangerouslySetInnerHTML={createMarkup(post?.content)}
      ,
      dangerouslySetInnerHTML: {
        __html: post === null || post === void 0 ? void 0 : post.translations[0].content
      }
    }), post !== null && post !== void 0 && (_post$translations$ = post.translations[0]) !== null && _post$translations$ !== void 0 && _post$translations$.javascript ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
      id: "slug-page-id",
      children: [" ", post === null || post === void 0 ? void 0 : post.translations[0].javascript, " "]
    }) : ""]
  });
};

Page.getLayout = (page, siteConfig) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_src_components_layout_onepirate_Layout__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    props: siteConfig,
    children: [" ", page, " "]
  });
};

const getPosts = async () => {
  if (posts) {// return posts;
  }

  const res = await fetch(`${"https://cms-api-content-api-cms-zt1983811.cloud.okteto.net"}/v1/posts`);
  posts = await res.json();
  return posts;
}; // This function gets called at build time

async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map(post => {
    return {
      params: {
        slug: post === null || post === void 0 ? void 0 : post.slug
      }
    };
  }); // console.log("============ get post", paths);

  return {
    paths: paths,
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: false
  };
} // This also gets called at build time

async function getStaticProps({
  params
}) {
  const posts = await getPosts();
  const post = posts.find(post => post.slug == params.slug);
  return {
    props: {
      post
    },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

/***/ }),

/***/ 840:
/***/ ((module) => {

// Exports
module.exports = {
	"contentSection": "Slug_contentSection__1OUJ-"
};


/***/ }),

/***/ 1731:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core");

/***/ }),

/***/ 2089:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Facebook");

/***/ }),

/***/ 1358:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ 4233:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Twitter");

/***/ }),

/***/ 4047:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/styles");

/***/ }),

/***/ 9137:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/system");

/***/ }),

/***/ 2958:
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/utils");

/***/ }),

/***/ 3536:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 7051:
/***/ ((module) => {

"use strict";
module.exports = require("html-react-parser");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8300:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 654:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 8689:
/***/ ((module) => {

"use strict";
module.exports = require("next/script");

/***/ }),

/***/ 4229:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2268:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 3857:
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ 3810:
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [52,280,920,785], () => (__webpack_exec__(9741)));
module.exports = __webpack_exports__;

})();