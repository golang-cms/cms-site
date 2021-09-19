(() => {
var exports = {};
exports.id = 14;
exports.ids = [14];
exports.modules = {

/***/ 2934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPostsBySlug": () => (/* binding */ getPostsBySlug),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7051);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8689);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_layout_onepirate_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3785);
/* harmony import */ var _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(840);
/* harmony import */ var _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);










const Index = ({
  posts
}) => {
  var _posts$, _posts$2, _posts$3, _posts$4, _posts$5;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [(_posts$ = posts[0]) !== null && _posts$ !== void 0 && _posts$.translations[0].head ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: html_react_parser__WEBPACK_IMPORTED_MODULE_0___default()((_posts$2 = posts[0]) === null || _posts$2 === void 0 ? void 0 : _posts$2.translations[0].head)
    }) : "", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("section", {
      className: (_styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_6___default().contentSection),
      dangerouslySetInnerHTML: {
        __html: (_posts$3 = posts[0]) === null || _posts$3 === void 0 ? void 0 : _posts$3.translations[0].content
      }
    }), (_posts$4 = posts[0]) !== null && _posts$4 !== void 0 && _posts$4.translations[0].javascript ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
      id: "post-added",
      children: [" ", (_posts$5 = posts[0]) === null || _posts$5 === void 0 ? void 0 : _posts$5.translations[0].javascript, " "]
    }) : ""]
  });
};

const getPostsBySlug = async slug => {
  const res = await fetch(`${"https://cms-api-content-api-cms-zt1983811.cloud.okteto.net"}/v1/posts?slug=${slug}`);
  let posts = await res.json();
  return posts;
};
const getStaticProps = async () => {
  const posts = await getPostsBySlug("home");
  return {
    props: {
      posts
    }
  };
};

Index.getLayout = (page, siteConfig) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_src_components_layout_onepirate_Layout__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
  props: siteConfig,
  children: [" ", page, " "]
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

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
var __webpack_exports__ = __webpack_require__.X(0, [52,280,785], () => (__webpack_exec__(2934)));
module.exports = __webpack_exports__;

})();