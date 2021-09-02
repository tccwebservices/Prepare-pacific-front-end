(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/footer/footer.jsx":
/*!**************************************!*\
  !*** ./components/footer/footer.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.module.css */ "./components/footer/footer.module.css");
/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Andrew.DESKTOP-A21Q4LO\\Desktop\\Websites\\Prepare-pacific-website\\Prepare-pacific-front-end\\components\\footer\\footer.jsx";




const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_1___default().footerContainer),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_1___default().gridContainer)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer/footer */ "./components/footer/footer.jsx");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Andrew.DESKTOP-A21Q4LO\\Desktop\\Websites\\Prepare-pacific-website\\Prepare-pacific-front-end\\pages\\index.jsx";


 // import the library


 // import your icons


 // style={{display:'flex', justifyContent:'center', margin:'20px'}}




const Home = props => {
  //  console.log(props.movies)
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().mainWrapper),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().family__Image)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().hero__Overlay),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().contentContainerMain),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid1),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().leftPattern)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 11
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid2Main),
            children: ["contents", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eius cum est aspernatur odio reprehenderit rem facere magni in dolores corrupti sunt harum facilis, quisquam quas maiores repellendus magnam officiis."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid3Main),
            children: "Picture"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid4),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().scrollDiv)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid5Main),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonContainer),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().arrowDown),
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faChevronDown
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 11
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().brownButton),
                children: "NEW HEALTHLINE"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 11
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 11
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_footer_footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().mainWrapper),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().family__Image)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().hero__Overlay2),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().contentContainer),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid1),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().leftPattern)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 11
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid2),
            children: ["content", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eius cum est aspernatur odio reprehenderit rem facere magni in dolores corrupti sunt harum facilis, quisquam quas maiores repellendus magnam officiis."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid3),
            children: "Picture"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid4),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().scrollDiv)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid5),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonContainer),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().arrowDown2),
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faChevronDown
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 11
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().whiteButton),
                children: "INFORMATION"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 11
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 11
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().mainWrapper),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().family__Image3)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().hero__Overlay3),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().contentContainerA),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid1A),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().leftPatternA)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 11
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid2A),
            children: "content Grid 1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid3A),
            children: "grid2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid4A),
            children: "grid3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid5A),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().scrollDiv)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid6A),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonContainer),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().arrowDown),
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faChevronDown
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 11
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().brownButton),
                children: "NEW HEALTHLINE"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 11
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 11
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().mainWrapper),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().family__Image)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().hero__Overlay4),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().contentContainer),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid1),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().leftPattern)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 11
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid2),
            children: ["content", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eius cum est aspernatur odio reprehenderit rem facere magni in dolores corrupti sunt harum facilis, quisquam quas maiores repellendus magnam officiis."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid3),
            children: "Picture"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid4),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().scrollDiv)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid5),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonContainer),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().arrowDown2),
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faChevronDown
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 11
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().whiteButton),
                children: "GET IN TOUCH"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 11
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 11
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().mainWrapper),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().testingStation__Image)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().hero__Overlay5),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().contentContainerA),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid1A)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid2A),
            children: "contentsssssssssssssssssssssssssssssssssssssssssssssssssssssssssss Grid 1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid3A),
            children: "grid2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid4A),
            children: "grid3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid5A),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().scrollDiv)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid6A),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonContainer),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().arrowDown),
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faChevronDown
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 11
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().brownButton),
                children: "NEW HEALTHLINE"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 11
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 11
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 6
    }, undefined)]
  }, void 0, true);
}; // export async function getStaticProps(){
//   // using dotenv and getting the url from env file.
//   const {API_URL} = process.env
//   // const res = await fetch(`${API_URL}/movies`)
//   // const response = await res.json()
//   const response = await axios.get(`${API_URL}/movies`)
//   return {
//     props: {
//         movies: response.data
//     }
// }
// }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./components/footer/footer.module.css":
/*!*********************************************!*\
  !*** ./components/footer/footer.module.css ***!
  \*********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"footerContainer": "footer_footerContainer__1Lr1N",
	"gridContainer": "footer_gridContainer__1aBJA",
	"grid1": "footer_grid1__3X8hV",
	"grid2": "footer_grid2__WMS7w",
	"grid3": "footer_grid3__3KpOb",
	"buttonContainer": "footer_buttonContainer__3aT5p"
};


/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"mainWrapper": "Home_mainWrapper__37PH3",
	"family__Image": "Home_family__Image__2g_Yx",
	"hero__Overlay": "Home_hero__Overlay__314yd",
	"contentContainerMain": "Home_contentContainerMain__2ptrN",
	"grid2Main": "Home_grid2Main__2alnH",
	"grid3Main": "Home_grid3Main__iNj99",
	"contentContainer": "Home_contentContainer__LyUNE",
	"grid1": "Home_grid1__lTM4r",
	"leftPattern": "Home_leftPattern__djRFG",
	"grid2": "Home_grid2__294rO",
	"grid3": "Home_grid3__3oTX3",
	"grid4": "Home_grid4__2J6Ff",
	"scrollDiv": "Home_scrollDiv__Recfd",
	"grid5": "Home_grid5__3s5lG",
	"grid5Main": "Home_grid5Main__1OGgV",
	"contentContainerA": "Home_contentContainerA__iTxQD",
	"grid1A": "Home_grid1A__2rbEN",
	"leftPatternA": "Home_leftPatternA__TgbL0",
	"grid2A": "Home_grid2A__2Pu1P",
	"grid3A": "Home_grid3A__2kTEe",
	"grid4A": "Home_grid4A__2chLo",
	"grid5A": "Home_grid5A__3jj8d",
	"grid6A": "Home_grid6A__zXOiY",
	"arrowDown": "Home_arrowDown__3cvmO",
	"bounce": "Home_bounce__311Zo",
	"buttonContainer": "Home_buttonContainer__3EXIT",
	"brownButton": "Home_brownButton__1LsF0",
	"hero__Overlay2": "Home_hero__Overlay2__VtEDo",
	"arrowDown2": "Home_arrowDown2__1I5FV",
	"whiteButton": "Home_whiteButton__3BOHg",
	"family__Image3": "Home_family__Image3__2xs8p",
	"hero__Overlay3": "Home_hero__Overlay3__39iLf",
	"hero__Overlay4": "Home_hero__Overlay4__jWXf5",
	"testingStation__Image": "Home_testingStation__Image__DfadX",
	"hero__Overlay5": "Home_hero__Overlay5__hXoco"
};


/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JDQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovL215LWFwcC8uL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5tb2R1bGUuY3NzIiwid2VicGFjazovL215LWFwcC8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9mb290ZXIubW9kdWxlLmNzc1wiXHJcblxyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Zm9vdGVyID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuZm9vdGVyQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmdyaWRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXJcIlxyXG4vLyBpbXBvcnQgdGhlIGxpYnJhcnlcclxuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuLy8gaW1wb3J0IHlvdXIgaWNvbnNcclxuaW1wb3J0IHsgZmFDaGV2cm9uRG93biwgZmFIaWdobGlnaHRlciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcblxyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIlxyXG4vLyBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBqdXN0aWZ5Q29udGVudDonY2VudGVyJywgbWFyZ2luOicyMHB4J319XHJcbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcclxuICAvLyAgY29uc29sZS5sb2cocHJvcHMubW92aWVzKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgey8qIHNlY3Rpb24tIE9SQU5HRSAqL31cclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGUubWFpbldyYXBwZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZmFtaWx5X19JbWFnZX0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGVyb19fT3ZlcmxheX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRlbnRDb250YWluZXJNYWlufT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkMX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubGVmdFBhdHRlcm59PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQyTWFpbn0+XHJcbiAgICAgICAgICAgIGNvbnRlbnRzXHJcbiAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE9mZmljaWEgZWl1cyBjdW0gZXN0IGFzcGVybmF0dXIgb2RpbyByZXByZWhlbmRlcml0IHJlbSBmYWNlcmUgbWFnbmkgaW4gZG9sb3JlcyBjb3JydXB0aSBzdW50IGhhcnVtIGZhY2lsaXMsIHF1aXNxdWFtIHF1YXMgbWFpb3JlcyByZXBlbGxlbmR1cyBtYWduYW0gb2ZmaWNpaXMuPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDNNYWlufT5QaWN0dXJlPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc2Nyb2xsRGl2fT5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQ1TWFpbn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYnV0dG9uQ29udGFpbmVyfSA+XHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17c3R5bGUuYXJyb3dEb3dufVxyXG4gICAgICAgICAgaWNvbj17ZmFDaGV2cm9uRG93bn0gXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLmJyb3duQnV0dG9ufT5ORVcgSEVBTFRITElORTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXIvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgey8qIHNlY3Rpb24yIC0gUFVSUExFICovfVxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZS5tYWluV3JhcHBlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5mYW1pbHlfX0ltYWdlfT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oZXJvX19PdmVybGF5Mn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRlbnRDb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQxfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5sZWZ0UGF0dGVybn0+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDJ9PlxyXG4gICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE9mZmljaWEgZWl1cyBjdW0gZXN0IGFzcGVybmF0dXIgb2RpbyByZXByZWhlbmRlcml0IHJlbSBmYWNlcmUgbWFnbmkgaW4gZG9sb3JlcyBjb3JydXB0aSBzdW50IGhhcnVtIGZhY2lsaXMsIHF1aXNxdWFtIHF1YXMgbWFpb3JlcyByZXBlbGxlbmR1cyBtYWduYW0gb2ZmaWNpaXMuPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDN9PlBpY3R1cmU8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkNH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zY3JvbGxEaXZ9PlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDV9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbkNvbnRhaW5lcn0gPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17c3R5bGUuYXJyb3dEb3duMn1cclxuICAgICAgICAgIGljb249e2ZhQ2hldnJvbkRvd259IFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS53aGl0ZUJ1dHRvbn0+SU5GT1JNQVRJT048L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgey8qIHNlY3Rpb24zIC1XSElURSAqL31cclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGUubWFpbldyYXBwZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZmFtaWx5X19JbWFnZTN9PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhlcm9fX092ZXJsYXkzfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGVudENvbnRhaW5lckF9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQxQX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubGVmdFBhdHRlcm5BfT5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkMkF9PlxyXG4gICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgR3JpZCAxXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkM0F9PmdyaWQyPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDRBfT5ncmlkMzwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQ1QX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zY3JvbGxEaXZ9PlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDZBfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5idXR0b25Db250YWluZXJ9ID5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlLmFycm93RG93bn1cclxuICAgICAgICAgIGljb249e2ZhQ2hldnJvbkRvd259IFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5icm93bkJ1dHRvbn0+TkVXIEhFQUxUSExJTkU8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgIHsvKiBzZWN0aW9uNC0gQkxVRSAqL31cclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGUubWFpbldyYXBwZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZmFtaWx5X19JbWFnZX0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGVyb19fT3ZlcmxheTR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250ZW50Q29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkMX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubGVmdFBhdHRlcm59PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQyfT5cclxuICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBPZmZpY2lhIGVpdXMgY3VtIGVzdCBhc3Blcm5hdHVyIG9kaW8gcmVwcmVoZW5kZXJpdCByZW0gZmFjZXJlIG1hZ25pIGluIGRvbG9yZXMgY29ycnVwdGkgc3VudCBoYXJ1bSBmYWNpbGlzLCBxdWlzcXVhbSBxdWFzIG1haW9yZXMgcmVwZWxsZW5kdXMgbWFnbmFtIG9mZmljaWlzLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQzfT5QaWN0dXJlPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc2Nyb2xsRGl2fT5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQ1fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5idXR0b25Db250YWluZXJ9ID5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlLmFycm93RG93bjJ9XHJcbiAgICAgICAgICBpY29uPXtmYUNoZXZyb25Eb3dufSBcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUud2hpdGVCdXR0b259PkdFVCBJTiBUT1VDSDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgPC9zZWN0aW9uPlxyXG4gICAgIHsvKiBzZWN0aW9uNSAtR1JFWSovfVxyXG4gICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGUubWFpbldyYXBwZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGVzdGluZ1N0YXRpb25fX0ltYWdlfT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oZXJvX19PdmVybGF5NX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRlbnRDb250YWluZXJBfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkMUF9PlxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5sZWZ0UGF0dGVybkF9PlxyXG4gICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkMkF9PlxyXG4gICAgICAgICAgICBjb250ZW50c3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NcclxuICAgICAgICAgICBHcmlkIDFcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQzQX0+Z3JpZDI8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkNEF9PmdyaWQzPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDVBfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnNjcm9sbERpdn0+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkNkF9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbkNvbnRhaW5lcn0gPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17c3R5bGUuYXJyb3dEb3dufVxyXG4gICAgICAgICAgaWNvbj17ZmFDaGV2cm9uRG93bn0gXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLmJyb3duQnV0dG9ufT5ORVcgSEVBTFRITElORTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgIFxyXG4gXHJcbiAgICA8Lz5cclxuXHJcbiAgKVxyXG5cclxuXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xyXG4vLyAgIC8vIHVzaW5nIGRvdGVudiBhbmQgZ2V0dGluZyB0aGUgdXJsIGZyb20gZW52IGZpbGUuXHJcbi8vICAgY29uc3Qge0FQSV9VUkx9ID0gcHJvY2Vzcy5lbnZcclxuXHJcbi8vICAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vbW92aWVzYClcclxuLy8gICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcy5qc29uKClcclxuLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUElfVVJMfS9tb3ZpZXNgKVxyXG5cclxuXHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICAgIG1vdmllczogcmVzcG9uc2UuZGF0YVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyB9XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVcclxuXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlckNvbnRhaW5lclwiOiBcImZvb3Rlcl9mb290ZXJDb250YWluZXJfXzFMcjFOXCIsXG5cdFwiZ3JpZENvbnRhaW5lclwiOiBcImZvb3Rlcl9ncmlkQ29udGFpbmVyX18xYUJKQVwiLFxuXHRcImdyaWQxXCI6IFwiZm9vdGVyX2dyaWQxX18zWDhoVlwiLFxuXHRcImdyaWQyXCI6IFwiZm9vdGVyX2dyaWQyX19XTVM3d1wiLFxuXHRcImdyaWQzXCI6IFwiZm9vdGVyX2dyaWQzX18zS3BPYlwiLFxuXHRcImJ1dHRvbkNvbnRhaW5lclwiOiBcImZvb3Rlcl9idXR0b25Db250YWluZXJfXzNhVDVwXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluV3JhcHBlclwiOiBcIkhvbWVfbWFpbldyYXBwZXJfXzM3UEgzXCIsXG5cdFwiZmFtaWx5X19JbWFnZVwiOiBcIkhvbWVfZmFtaWx5X19JbWFnZV9fMmdfWXhcIixcblx0XCJoZXJvX19PdmVybGF5XCI6IFwiSG9tZV9oZXJvX19PdmVybGF5X18zMTR5ZFwiLFxuXHRcImNvbnRlbnRDb250YWluZXJNYWluXCI6IFwiSG9tZV9jb250ZW50Q29udGFpbmVyTWFpbl9fMnB0ck5cIixcblx0XCJncmlkMk1haW5cIjogXCJIb21lX2dyaWQyTWFpbl9fMmFsbkhcIixcblx0XCJncmlkM01haW5cIjogXCJIb21lX2dyaWQzTWFpbl9faU5qOTlcIixcblx0XCJjb250ZW50Q29udGFpbmVyXCI6IFwiSG9tZV9jb250ZW50Q29udGFpbmVyX19MeVVORVwiLFxuXHRcImdyaWQxXCI6IFwiSG9tZV9ncmlkMV9fbFRNNHJcIixcblx0XCJsZWZ0UGF0dGVyblwiOiBcIkhvbWVfbGVmdFBhdHRlcm5fX2RqUkZHXCIsXG5cdFwiZ3JpZDJcIjogXCJIb21lX2dyaWQyX18yOTRyT1wiLFxuXHRcImdyaWQzXCI6IFwiSG9tZV9ncmlkM19fM29UWDNcIixcblx0XCJncmlkNFwiOiBcIkhvbWVfZ3JpZDRfXzJKNkZmXCIsXG5cdFwic2Nyb2xsRGl2XCI6IFwiSG9tZV9zY3JvbGxEaXZfX1JlY2ZkXCIsXG5cdFwiZ3JpZDVcIjogXCJIb21lX2dyaWQ1X18zczVsR1wiLFxuXHRcImdyaWQ1TWFpblwiOiBcIkhvbWVfZ3JpZDVNYWluX18xT0dnVlwiLFxuXHRcImNvbnRlbnRDb250YWluZXJBXCI6IFwiSG9tZV9jb250ZW50Q29udGFpbmVyQV9faVR4UURcIixcblx0XCJncmlkMUFcIjogXCJIb21lX2dyaWQxQV9fMnJiRU5cIixcblx0XCJsZWZ0UGF0dGVybkFcIjogXCJIb21lX2xlZnRQYXR0ZXJuQV9fVGdiTDBcIixcblx0XCJncmlkMkFcIjogXCJIb21lX2dyaWQyQV9fMlB1MVBcIixcblx0XCJncmlkM0FcIjogXCJIb21lX2dyaWQzQV9fMmtURWVcIixcblx0XCJncmlkNEFcIjogXCJIb21lX2dyaWQ0QV9fMmNoTG9cIixcblx0XCJncmlkNUFcIjogXCJIb21lX2dyaWQ1QV9fM2pqOGRcIixcblx0XCJncmlkNkFcIjogXCJIb21lX2dyaWQ2QV9felhPaVlcIixcblx0XCJhcnJvd0Rvd25cIjogXCJIb21lX2Fycm93RG93bl9fM2N2bU9cIixcblx0XCJib3VuY2VcIjogXCJIb21lX2JvdW5jZV9fMzExWm9cIixcblx0XCJidXR0b25Db250YWluZXJcIjogXCJIb21lX2J1dHRvbkNvbnRhaW5lcl9fM0VYSVRcIixcblx0XCJicm93bkJ1dHRvblwiOiBcIkhvbWVfYnJvd25CdXR0b25fXzFMc0YwXCIsXG5cdFwiaGVyb19fT3ZlcmxheTJcIjogXCJIb21lX2hlcm9fX092ZXJsYXkyX19WdEVEb1wiLFxuXHRcImFycm93RG93bjJcIjogXCJIb21lX2Fycm93RG93bjJfXzFJNUZWXCIsXG5cdFwid2hpdGVCdXR0b25cIjogXCJIb21lX3doaXRlQnV0dG9uX18zQk9IZ1wiLFxuXHRcImZhbWlseV9fSW1hZ2UzXCI6IFwiSG9tZV9mYW1pbHlfX0ltYWdlM19fMnhzOHBcIixcblx0XCJoZXJvX19PdmVybGF5M1wiOiBcIkhvbWVfaGVyb19fT3ZlcmxheTNfXzM5aUxmXCIsXG5cdFwiaGVyb19fT3ZlcmxheTRcIjogXCJIb21lX2hlcm9fX092ZXJsYXk0X19qV1hmNVwiLFxuXHRcInRlc3RpbmdTdGF0aW9uX19JbWFnZVwiOiBcIkhvbWVfdGVzdGluZ1N0YXRpb25fX0ltYWdlX19EZmFkWFwiLFxuXHRcImhlcm9fX092ZXJsYXk1XCI6IFwiSG9tZV9oZXJvX19PdmVybGF5NV9faFhvY29cIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlN0eWxlcyIsIkZvb3RlciIsImZvb3RlckNvbnRhaW5lciIsImdyaWRDb250YWluZXIiLCJheGlvcyIsImZldGNoIiwibGlicmFyeSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhQ2hldnJvbkRvd24iLCJmYUhpZ2hsaWdodGVyIiwic3R5bGUiLCJIb21lIiwicHJvcHMiLCJtYWluV3JhcHBlciIsImZhbWlseV9fSW1hZ2UiLCJoZXJvX19PdmVybGF5IiwiY29udGVudENvbnRhaW5lck1haW4iLCJncmlkMSIsImxlZnRQYXR0ZXJuIiwiZ3JpZDJNYWluIiwiZ3JpZDNNYWluIiwiZ3JpZDQiLCJzY3JvbGxEaXYiLCJncmlkNU1haW4iLCJidXR0b25Db250YWluZXIiLCJhcnJvd0Rvd24iLCJicm93bkJ1dHRvbiIsImhlcm9fX092ZXJsYXkyIiwiY29udGVudENvbnRhaW5lciIsImdyaWQyIiwiZ3JpZDMiLCJncmlkNSIsImFycm93RG93bjIiLCJ3aGl0ZUJ1dHRvbiIsImZhbWlseV9fSW1hZ2UzIiwiaGVyb19fT3ZlcmxheTMiLCJjb250ZW50Q29udGFpbmVyQSIsImdyaWQxQSIsImxlZnRQYXR0ZXJuQSIsImdyaWQyQSIsImdyaWQzQSIsImdyaWQ0QSIsImdyaWQ1QSIsImdyaWQ2QSIsImhlcm9fX092ZXJsYXk0IiwidGVzdGluZ1N0YXRpb25fX0ltYWdlIiwiaGVyb19fT3ZlcmxheTUiXSwic291cmNlUm9vdCI6IiJ9