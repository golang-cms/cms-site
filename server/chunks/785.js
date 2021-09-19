exports.id = 785;
exports.ids = [785];
exports.modules = {

/***/ 3785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ onepirate_Layout)
});

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/script"
var script_ = __webpack_require__(8689);
var script_default = /*#__PURE__*/__webpack_require__.n(script_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(8409);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(1749);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Link/Link.js
var Link = __webpack_require__(9659);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(3832);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(2543);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(3871);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/layout/onepirate/components/Typography.js
const _excluded = ["children", "classes", "marked", "variant"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const styles = theme => ({
  markedH2Center: {
    height: 4,
    width: 73,
    display: 'block',
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main
  },
  markedH3Center: {
    height: 4,
    width: 55,
    display: 'block',
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main
  },
  markedH4Center: {
    height: 4,
    width: 55,
    display: 'block',
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main
  },
  markedH6Left: {
    height: 2,
    width: 28,
    display: 'block',
    marginTop: theme.spacing(0.5),
    background: 'currentColor'
  }
});

const variantMapping = {
  h1: 'h1',
  h2: 'h1',
  h3: 'h1',
  h4: 'h1',
  h5: 'h3',
  h6: 'h2',
  subtitle1: 'h3'
};

function Typography_Typography(props) {
  const {
    children,
    classes,
    marked = false,
    variant
  } = props,
        other = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Typography/* default */.Z, _objectSpread(_objectSpread({
    variantMapping: variantMapping,
    variant: variant
  }, other), {}, {
    children: [children, marked ? /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: classes[`marked${(0,capitalize/* default */.Z)(variant) + (0,capitalize/* default */.Z)(marked)}`]
    }) : null]
  }));
}

/* harmony default export */ const components_Typography = ((0,withStyles/* default */.Z)(styles)(Typography_Typography));
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(3536);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js + 46 modules
var TextField = __webpack_require__(64);
;// CONCATENATED MODULE: ./src/components/layout/onepirate/components/TextField.js
const TextField_excluded = ["classes", "InputProps", "InputLabelProps", "noBorder", "size", "SelectProps"],
      _excluded2 = ["input"],
      _excluded3 = ["classes"];

function TextField_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function TextField_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TextField_ownKeys(Object(source), true).forEach(function (key) { TextField_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TextField_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function TextField_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function TextField_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TextField_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function TextField_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const TextField_styles = theme => ({
  root: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    minWidth: theme.spacing(6),
    backgroundColor: theme.palette.common.white,
    '&$disabled': {
      backgroundColor: theme.palette.divider
    }
  },
  inputBorder: {
    border: '1px solid #e9ddd0',
    '&:focus': {
      borderColor: theme.palette.secondary.main
    }
  },
  disabled: {},
  inputSizeSmall: {
    fontSize: 14,
    padding: theme.spacing(1),
    width: `calc(100% - ${theme.spacing(2)}px)`
  },
  inputSizeMedium: {
    fontSize: 16,
    padding: theme.spacing(2),
    width: `calc(100% - ${theme.spacing(4)}px)`
  },
  inputSizeLarge: {
    fontSize: 18,
    padding: 22,
    width: `calc(100% - ${22 * 2}px)`
  },
  inputSizeXlarge: {
    fontSize: 20,
    padding: 25,
    width: `calc(100% - ${25 * 2}px)`
  },
  formLabel: {
    fontSize: 18
  },
  select: {
    height: 'auto',
    borderRadius: 0
  },
  selectIcon: {
    top: '50%',
    marginTop: -12
  }
});

function TextField_TextField(props) {
  const {
    classes,
    InputProps = {},
    InputLabelProps,
    noBorder = false,
    size = 'medium',
    SelectProps
  } = props,
        other = TextField_objectWithoutProperties(props, TextField_excluded);

  const {
    classes: {
      input: InputPropsClassesInput
    } = {}
  } = InputProps,
        InputPropsClassesOther = TextField_objectWithoutProperties(InputProps.classes, _excluded2),
        InputPropsOther = TextField_objectWithoutProperties(InputProps, _excluded3);

  return /*#__PURE__*/jsx_runtime_.jsx(TextField/* default */.Z, TextField_objectSpread({
    InputProps: TextField_objectSpread({
      disableUnderline: true,
      classes: TextField_objectSpread({
        root: classes.root,
        input: external_clsx_default()(classes.input, classes[`inputSize${(0,capitalize/* default */.Z)(size)}`], {
          [classes.inputBorder]: !noBorder
        }, InputPropsClassesInput),
        disabled: classes.disabled
      }, InputPropsClassesOther)
    }, InputPropsOther),
    InputLabelProps: TextField_objectSpread(TextField_objectSpread({}, InputLabelProps), {}, {
      shrink: true,
      className: classes.formLabel
    }),
    SelectProps: TextField_objectSpread(TextField_objectSpread({}, SelectProps), {}, {
      classes: {
        select: classes.select,
        icon: classes.selectIcon
      }
    })
  }, other));
}

/* harmony default export */ const components_TextField = ((0,withStyles/* default */.Z)(TextField_styles)(TextField_TextField));
// EXTERNAL MODULE: external "@material-ui/icons/Facebook"
var Facebook_ = __webpack_require__(2089);
var Facebook_default = /*#__PURE__*/__webpack_require__.n(Facebook_);
// EXTERNAL MODULE: external "@material-ui/icons/Twitter"
var Twitter_ = __webpack_require__(4233);
var Twitter_default = /*#__PURE__*/__webpack_require__.n(Twitter_);
;// CONCATENATED MODULE: ./src/components/layout/onepirate/Footer.js













function Copyright({
  props
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: ["© ", /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
      color: "inherit",
      href: "/",
      children: props.name
    }), " ", new Date().getFullYear()]
  });
}

const useStyles = (0,makeStyles/* default */.Z)(theme => ({
  root: {
    display: "flex",
    // backgroundColor: theme.palette.secondary.light,
    // backgroundColor: theme.palette.primary.main,
    // backgroundColor: theme.palette.grey.A700,
    color: theme.palette.common.white,
    backgroundColor: "#2a2a72",
    backgroundImage: "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)"
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex"
  },
  iconsWrapper: {
    height: 120
  },
  icons: {
    display: "flex"
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    "&:hover": {// backgroundColor: theme.palette.warning.dark,
    },
    fontSize: 50
  },
  iconItem: {
    // backgroundImage: "linear-gradient( to right, #8f6B29 0, #cb9b51 22%, #f6e27a 45%, #f6f2c0 50%, #f6e27a 55%, #cb9b51 78%, #DF9F28 100%)",
    background: "linear-gradient(to bottom, #e72c83 0%,#a742c6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text"
  },
  list: {
    margin: 0,
    listStyle: "none",
    padding: 0
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    color: "transparent",
    backgroundImage: "linear-gradient( to right, #8f6B29 0, #cb9b51 22%, #f6e27a 45%, #f6f2c0 50%, #f6e27a 55%, #cb9b51 78%, #DF9F28 100%)",
    WebkitBackgroundClip: "text",
    fontFamily: "mazzard",
    letterSpacing: "-1px"
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150
  },
  circle: {
    fill: "url(#linearColors)"
  }
}));
const LANGUAGES = [{
  code: "en-US",
  name: "English"
}
/*
{
  code: 'fr-FR',
  name: 'Français',
},
*/
];
function AppFooter({
  props
}) {
  const classes = useStyles();
  return /*#__PURE__*/jsx_runtime_.jsx(components_Typography, {
    component: "footer",
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
      className: classes.container,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
        container: true,
        spacing: 5,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
          item: true,
          xs: 6,
          sm: 4,
          md: 3,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
            container: true,
            direction: "column",
            justifyContent: "flex-end",
            className: classes.iconsWrapper,
            spacing: 2,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
              item: true,
              className: classes.icons,
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                className: classes.icon,
                children: /*#__PURE__*/jsx_runtime_.jsx((Facebook_default()), {
                  className: classes.iconItem,
                  fontSize: "inherit"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                className: classes.icon,
                children: /*#__PURE__*/jsx_runtime_.jsx((Twitter_default()), {
                  className: classes.iconItem,
                  fontSize: "inherit"
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(Grid/* default */.Z, {
              item: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(Copyright, {
                props: props
              })
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
          item: true,
          xs: 6,
          sm: 4,
          md: 2,
          children: [/*#__PURE__*/jsx_runtime_.jsx(components_Typography, {
            variant: "h6",
            marked: "left",
            gutterBottom: true,
            children: "Legal"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: classes.list,
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              className: classes.listItem,
              children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
                href: "#",
                children: "Terms"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: classes.listItem,
              children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
                href: "#",
                children: "Privacy"
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
          item: true,
          xs: 6,
          sm: 8,
          md: 4,
          children: [/*#__PURE__*/jsx_runtime_.jsx(components_Typography, {
            variant: "h6",
            marked: "left",
            gutterBottom: true,
            children: "Language"
          }), /*#__PURE__*/jsx_runtime_.jsx(components_TextField, {
            select: true,
            SelectProps: {
              native: true
            },
            className: classes.language,
            children: LANGUAGES.map(language => /*#__PURE__*/jsx_runtime_.jsx("option", {
              value: language.code,
              children: language.name
            }, language.code))
          })]
        })]
      })
    })
  });
}

const GradientFacebookIcon = () => {
  const classes = useStyles({});
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("svg", {
      width: "300",
      height: "300",
      children: /*#__PURE__*/_jsxs("linearGradient", {
        id: "linearColors",
        x1: "0",
        y1: "0",
        x2: "1",
        y2: "1",
        children: [/*#__PURE__*/_jsx("stop", {
          offset: "20%",
          stopColor: "#39F"
        }), /*#__PURE__*/_jsx("stop", {
          offset: "90%",
          stopColor: "#F3F"
        })]
      })
    }), /*#__PURE__*/_jsx(FacebookIcon, {
      classes: {
        circle: classes.circle
      }
    })]
  });
};
// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__(1358);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AppBar/AppBar.js
var AppBar = __webpack_require__(5258);
;// CONCATENATED MODULE: ./src/components/layout/onepirate/components/AppBar.js
function AppBar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function AppBar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AppBar_ownKeys(Object(source), true).forEach(function (key) { AppBar_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AppBar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AppBar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const AppBar_styles = theme => ({
  root: {
    // color: theme.palette.common.white,
    color: "linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
    color: "#FDE08D",
    backgroundColor: "#2a2a72",
    backgroundImage: "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)"
  }
});

function AppBar_AppBar(props) {
  return /*#__PURE__*/jsx_runtime_.jsx(AppBar/* default */.Z, AppBar_objectSpread({
    elevation: 0,
    position: "static"
  }, props));
}

/* harmony default export */ const components_AppBar = ((0,withStyles/* default */.Z)(AppBar_styles)(AppBar_AppBar));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js
var Toolbar = __webpack_require__(8358);
;// CONCATENATED MODULE: ./src/components/layout/onepirate/components/Toolbar.js


const Toolbar_styles = theme => ({
  root: {
    height: 64,
    [theme.breakpoints.up('sm')]: {
      height: 70
    }
  }
});
/* harmony default export */ const components_Toolbar = ((0,withStyles/* default */.Z)(Toolbar_styles)(Toolbar/* default */.Z));
;// CONCATENATED MODULE: ./src/components/layout/onepirate/Header.js











const Header_styles = theme => ({
  title: {
    fontSize: 31,
    // background: '-webkit-linear-gradient(top, #8f6B29, #FDE08D, #DF9F28)',
    // background: 'linear-gradient(top, #8f6B29, #FDE08D, #DF9F28)',
    // backgroundColor: 'transparent',
    color: "transparent",
    // backgroundImage: "linear-gradient( to right, #462523 0, #cb9b51 22%, #f6e27a 45%, #f6f2c0 50%, #f6e27a 55%, #cb9b51 78%, #462523 100%)",
    backgroundImage: "linear-gradient( to right, #8f6B29 0, #cb9b51 22%, #f6e27a 45%, #f6f2c0 50%, #f6e27a 55%, #cb9b51 78%, #DF9F28 100%)",
    WebkitBackgroundClip: "text",
    fontFamily: "mazzard",
    letterSpacing: "-1px",
    marginLeft: "5px"
  },
  placeholder: Toolbar_styles(theme).root,
  toolbar: {
    justifyContent: "space-between"
  },
  left: {
    flex: 1
  },
  leftLinkActive: {
    color: theme.palette.common.white
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
    color: "transparent",
    backgroundImage: "linear-gradient( to right, #8f6B29 0, #cb9b51 22%, #f6e27a 45%, #f6f2c0 50%, #f6e27a 55%, #cb9b51 78%, #DF9F28 100%)",
    WebkitBackgroundClip: "text",
    fontFamily: "mazzard",
    marginLeft: "5px"
  },
  menuIcon: {
    color: "#f6e27a"
  },
  drawer: {
    paper: {
      background: "black"
    }
  },
  paper: {
    background: "black"
  },
  drawerList: {},
  linkSecondary: {
    color: theme.palette.secondary.main
  }
});

function Header({
  props,
  classes
}) {
  // const { classes } = props;
  const theme = (0,core_.useTheme)();
  const isMobile = (0,core_.useMediaQuery)(theme.breakpoints.down("md"));
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_AppBar, {
      position: "fixed",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_Toolbar, {
        className: classes.toolbar,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.left
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Slide, {
          direction: "right",
          mountOnEnter: true,
          unmountOnExit: true,
          timeout: 3000,
          in: true,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            width: "20",
            src: "/static/images/logo22symbol.png"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Slide, {
          direction: "left",
          mountOnEnter: true,
          unmountOnExit: true,
          timeout: 3000,
          in: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
            variant: "h6",
            underline: "none",
            color: "inherit",
            className: classes.title,
            href: "/",
            children: props.name
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.right,
          children: isMobile ? /*#__PURE__*/jsx_runtime_.jsx(DrawNav, {
            props: props,
            classes: classes
          }) : /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
            props: props,
            classes: classes
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.placeholder
    })]
  });
}

const DrawNav = ({
  props,
  classes
}) => {
  var _props$navs;

  const {
    0: openDrawer,
    1: setOpenDrawer
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Drawer, {
      className: classes.drawer,
      open: openDrawer,
      classes: {
        paper: classes.paper
      },
      anchor: "right",
      onClose: () => setOpenDrawer(false),
      children: /*#__PURE__*/jsx_runtime_.jsx(core_.List, {
        className: classes.drawerList,
        children: props === null || props === void 0 ? void 0 : (_props$navs = props.navs) === null || _props$navs === void 0 ? void 0 : _props$navs.map(nav => {
          return /*#__PURE__*/jsx_runtime_.jsx(core_.ListItem, {
            onClick: () => setOpenDrawer(false),
            children: /*#__PURE__*/jsx_runtime_.jsx(core_.ListItemText, {
              children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
                className: classes.rightLink,
                href: nav.slug,
                children: nav.name
              })
            })
          });
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(core_.IconButton, {
      onClick: () => setOpenDrawer(!openDrawer),
      children: /*#__PURE__*/jsx_runtime_.jsx((Menu_default()), {
        className: classes.menuIcon
      })
    })]
  });
};

const NavLink = ({
  props,
  classes
}) => {
  var _props$navs2;

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: props === null || props === void 0 ? void 0 : (_props$navs2 = props.navs) === null || _props$navs2 === void 0 ? void 0 : _props$navs2.map(nav => {
      return /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
        color: "inherit",
        variant: "h6",
        underline: "none",
        className: classes.rightLink,
        href: nav.slug,
        children: nav.name
      }, nav.slug);
    })
  });
};

/* harmony default export */ const onepirate_Header = ((0,withStyles/* default */.Z)(Header_styles)(Header));
;// CONCATENATED MODULE: ./src/components/layout/onepirate/Layout.tsx











const Layout_useStyles = (0,core_.makeStyles)(theme => ({
  hidden: {
    display: "none"
  }
}));

const Layout = ({
  children,
  props
}) => {
  const classes = Layout_useStyles();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "SmartCodee"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Smart codee"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(onepirate_Header, {
      props: props
    }), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: (Home_module_default()).main,
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(AppFooter, {
      props: props
    }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
      className: classes.hidden,
      hidden: true
    }), /*#__PURE__*/jsx_runtime_.jsx((script_default()), {
      id: "layout-id",
      strategy: "lazyOnload",
      children: `console.log('onepriate layout load')`
    })]
  });
};

/* harmony default export */ const onepirate_Layout = (Layout);

/***/ }),

/***/ 8409:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"description": "Home_description__17Z4F",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH"
};


/***/ })

};
;