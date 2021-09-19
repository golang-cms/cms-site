"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app),
  "siteConfig": () => (/* binding */ siteConfig)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/script"
var script_ = __webpack_require__(8689);
var script_default = /*#__PURE__*/__webpack_require__.n(script_);
;// CONCATENATED MODULE: external "react-google-recaptcha-v3"
const external_react_google_recaptcha_v3_namespaceObject = require("react-google-recaptcha-v3");
// EXTERNAL MODULE: ./src/providers/siteConfig/siteConfigProvider.ts
var siteConfigProvider = __webpack_require__(6687);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp({
  Component,
  pageProps
}) {
  var _Component$getLayout;

  const getLayout = (_Component$getLayout = Component.getLayout) !== null && _Component$getLayout !== void 0 ? _Component$getLayout : page => page;
  return getLayout( /*#__PURE__*/jsx_runtime_.jsx(siteConfigProvider/* SiteConfigProvider */.F, {
    value: siteConfig,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_google_recaptcha_v3_namespaceObject.GoogleReCaptchaProvider, {
      reCaptchaKey: "6LfBTAgcAAAAAIoz9mmHs0onei9Q7rJd5r3Yz6mt",
      children: [/*#__PURE__*/jsx_runtime_.jsx((script_default()), {
        id: "app-page-id",
        strategy: "lazyOnload",
        children: `console.log('app page load')`
      }), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
    })
  }), siteConfig);
}
/*
type Props = AppProps & {
  Component: Page;
  javascript?: string;
};
function OldMyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page: any) => page);
  return getLayout(
    <SiteConfigProvider value={siteConfig}>
      <GoogleReCaptchaProvider reCaptchaKey={process.env.reCaptchaKey}>
        <Script strategy="lazyOnload">{`console.log('sssss')`}</Script>
        <Component {...pageProps} />
      </GoogleReCaptchaProvider>
    </SiteConfigProvider>
  );
}
*/


const siteConfig = {
  name: "SmartCodee",
  domain: "smartcodee.com",
  address: "1275 Av. des Canadiens-de-Montréal, Montréal, QC H3B 0G4",
  phone: "514-999-7155",
  email: "info@smartcodee.com",
  navs: [{
    name: "CONTACT US",
    slug: "/contact-us"
  }, {
    name: "ABOUT US",
    slug: "/about-us"
  }]
};
/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 6687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ SiteConfigProvider),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SiteConfigContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});
const SiteConfigProvider = SiteConfigContext.Provider;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SiteConfigContext);

/***/ }),

/***/ 8689:
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(707));
module.exports = __webpack_exports__;

})();