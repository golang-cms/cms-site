"use strict";
(() => {
var exports = {};
exports.id = 333;
exports.ids = [333];
exports.modules = {

/***/ 7439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);




function createMarkup(content) {
  return {
    __html: content
  };
}

const Post = ({
  post
}) => {
  var _post$translations, _post$translations$;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
      children: post === null || post === void 0 ? void 0 : post.title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
      dangerouslySetInnerHTML: createMarkup(post === null || post === void 0 ? void 0 : (_post$translations = post.translations) === null || _post$translations === void 0 ? void 0 : (_post$translations$ = _post$translations[0]) === null || _post$translations$ === void 0 ? void 0 : _post$translations$.content)
    })]
  });
}; // This function gets called at build time


async function getStaticPaths() {
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [{
      params: {
        id: "1"
      }
    }, {
      params: {
        id: "2"
      }
    }],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: false
  };
} // This also gets called at build time

async function getStaticProps({
  params
}) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://cms-api-content-api-cms-zt1983811.cloud.okteto.net/v1/posts/${params.id}`);
  const post = await res.json(); // Pass post data to the page via props

  return {
    props: {
      post
    },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7439));
module.exports = __webpack_exports__;

})();