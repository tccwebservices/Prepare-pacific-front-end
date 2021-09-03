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
var _jsxFileName = "C:\\Users\\fred\\Documents\\TCC\\Prepare Pacific\\Website\\Development\\current\\components\\footer\\footer.jsx";




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
var _jsxFileName = "C:\\Users\\fred\\Documents\\TCC\\Prepare Pacific\\Website\\Development\\current\\pages\\index.jsx";


 // import the library


 // import your icons

 // import PatternBrown from "../assets/patternBrown.svg"

 // style={{display:'flex', justifyContent:'center', margin:'20px'}}




const Home = props => {
  //  console.log(props.movies)
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().sectionsConatiner),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
        id: "section",
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().sectionWrapper),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().family__Image)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
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
                lineNumber: 25,
                columnNumber: 11
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid2Main),
              children: ["contents", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eius cum est aspernatur odio reprehenderit rem facere magni in dolores corrupti sunt harum facilis, quisquam quas maiores repellendus magnam officiis."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 13
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid3Main),
              children: "Picture"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid4),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().scrollDiv)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 13
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
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
                  lineNumber: 41,
                  columnNumber: 11
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                  className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().brownButton),
                  children: "NEW HEALTHLINE"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 11
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 11
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 11
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 9
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_footer_footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
        id: "section",
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().sectionWrapper),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().family__Image)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
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
                lineNumber: 58,
                columnNumber: 11
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid2),
              children: ["content", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eius cum est aspernatur odio reprehenderit rem facere magni in dolores corrupti sunt harum facilis, quisquam quas maiores repellendus magnam officiis."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 13
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid3),
              children: "Picture"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid4),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().scrollDiv)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 13
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
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
                  lineNumber: 74,
                  columnNumber: 11
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                  className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().whiteButton),
                  children: "INFORMATION"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 11
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 11
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 11
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 9
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
        id: "section",
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().sectionWrapper),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().family__Image3)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
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
                lineNumber: 90,
                columnNumber: 11
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid2A),
              children: "content Grid 1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid3A),
              children: "grid2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid4A),
              children: "grid3"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid5A),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().scrollDiv)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 13
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
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
                  lineNumber: 107,
                  columnNumber: 11
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                  className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().brownButton),
                  children: "NEW HEALTHLINE"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 11
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 11
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 11
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 9
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
        id: "section",
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().sectionWrapper),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().family__Image)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
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
                lineNumber: 123,
                columnNumber: 11
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid2),
              children: ["content", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eius cum est aspernatur odio reprehenderit rem facere magni in dolores corrupti sunt harum facilis, quisquam quas maiores repellendus magnam officiis."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 13
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid3),
              children: "Picture"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid4),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().scrollDiv)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 13
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
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
                  lineNumber: 139,
                  columnNumber: 11
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                  className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().whiteButton),
                  children: "GET IN TOUCH"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 11
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 11
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 11
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 9
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
        id: "section",
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().sectionWrapper),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().sectionWrapper)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 8
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().testingStation__Image)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().hero__Overlay5),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().contentContainerA),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid1A)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid2A),
              children: "contentsssssssssssssssssssssssssssssssssssssssssssssssssssssssssss Grid 1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid3A),
              children: "grid2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid4A),
              children: "grid3"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().grid5A),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().scrollDiv)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 13
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
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
                  lineNumber: 174,
                  columnNumber: 11
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                  className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().brownButton),
                  children: "NEW HEALTHLINE"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 11
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 11
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 11
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 9
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 6
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, undefined)
  }, void 0, false);
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
	"sectionsConatiner": "Home_sectionsConatiner__AzvL4",
	"sectionWrapper": "Home_sectionWrapper__2eFPQ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbklEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBLG1CQURGO0FBa0xELENBcExELEVBc0xBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBSUEsaUVBQWVDLElBQWY7Ozs7Ozs7Ozs7QUN0TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdENBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktYXBwLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9mb290ZXIubW9kdWxlLmNzc1wiXG5cblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Zm9vdGVyID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmZvb3RlckNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuZ3JpZENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3RlclwiXHJcbi8vIGltcG9ydCB0aGUgbGlicmFyeVxyXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG4vLyBpbXBvcnQgeW91ciBpY29uc1xyXG5pbXBvcnQgeyBmYUNoZXZyb25Eb3duLCBmYUhpZ2hsaWdodGVyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuLy8gaW1wb3J0IFBhdHRlcm5Ccm93biBmcm9tIFwiLi4vYXNzZXRzL3BhdHRlcm5Ccm93bi5zdmdcIlxyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIlxyXG4vLyBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBqdXN0aWZ5Q29udGVudDonY2VudGVyJywgbWFyZ2luOicyMHB4J319XHJcbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcclxuICAvLyAgY29uc29sZS5sb2cocHJvcHMubW92aWVzKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgey8qIHNlY3Rpb24tIE9SQU5HRSAqL31cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zZWN0aW9uc0NvbmF0aW5lcn0+XHJcbiAgICA8c2VjdGlvbiBpZCA9XCJzZWN0aW9uXCJjbGFzc05hbWU9e3N0eWxlLnNlY3Rpb25XcmFwcGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZhbWlseV9fSW1hZ2V9PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhlcm9fX092ZXJsYXl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250ZW50Q29udGFpbmVyTWFpbn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDF9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxlZnRQYXR0ZXJufT5cclxuICAgICAgICAgXHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDJNYWlufT5cclxuICAgICAgICAgICAgY29udGVudHNcclxuICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gT2ZmaWNpYSBlaXVzIGN1bSBlc3QgYXNwZXJuYXR1ciBvZGlvIHJlcHJlaGVuZGVyaXQgcmVtIGZhY2VyZSBtYWduaSBpbiBkb2xvcmVzIGNvcnJ1cHRpIHN1bnQgaGFydW0gZmFjaWxpcywgcXVpc3F1YW0gcXVhcyBtYWlvcmVzIHJlcGVsbGVuZHVzIG1hZ25hbSBvZmZpY2lpcy48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkM01haW59PlBpY3R1cmU8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkNH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zY3JvbGxEaXZ9PlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDVNYWlufT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5idXR0b25Db250YWluZXJ9ID5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZS5hcnJvd0Rvd259XHJcbiAgICAgICAgICBpY29uPXtmYUNoZXZyb25Eb3dufSBcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuYnJvd25CdXR0b259Pk5FVyBIRUFMVEhMSU5FPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3Rlci8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICB7Lyogc2VjdGlvbjIgLSBQVVJQTEUgKi99XHJcbiAgICA8c2VjdGlvbiBpZD1cInNlY3Rpb25cIiBjbGFzc05hbWU9e3N0eWxlLnNlY3Rpb25XcmFwcGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZhbWlseV9fSW1hZ2V9PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhlcm9fX092ZXJsYXkyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGVudENvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDF9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxlZnRQYXR0ZXJufT5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkMn0+XHJcbiAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gT2ZmaWNpYSBlaXVzIGN1bSBlc3QgYXNwZXJuYXR1ciBvZGlvIHJlcHJlaGVuZGVyaXQgcmVtIGZhY2VyZSBtYWduaSBpbiBkb2xvcmVzIGNvcnJ1cHRpIHN1bnQgaGFydW0gZmFjaWxpcywgcXVpc3F1YW0gcXVhcyBtYWlvcmVzIHJlcGVsbGVuZHVzIG1hZ25hbSBvZmZpY2lpcy48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkM30+UGljdHVyZTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQ0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnNjcm9sbERpdn0+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkNX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYnV0dG9uQ29udGFpbmVyfSA+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZS5hcnJvd0Rvd24yfVxyXG4gICAgICAgICAgaWNvbj17ZmFDaGV2cm9uRG93bn0gXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLndoaXRlQnV0dG9ufT5JTkZPUk1BVElPTjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICB7Lyogc2VjdGlvbjMgLVdISVRFICovfVxyXG4gICAgPHNlY3Rpb24gaWQ9XCJzZWN0aW9uXCIgY2xhc3NOYW1lPXtzdHlsZS5zZWN0aW9uV3JhcHBlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5mYW1pbHlfX0ltYWdlM30+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGVyb19fT3ZlcmxheTN9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250ZW50Q29udGFpbmVyQX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDFBfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5sZWZ0UGF0dGVybkF9PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQyQX0+XHJcbiAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICBHcmlkIDFcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQzQX0+Z3JpZDI8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkNEF9PmdyaWQzPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDVBfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnNjcm9sbERpdn0+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkNkF9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbkNvbnRhaW5lcn0gPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17c3R5bGUuYXJyb3dEb3dufVxyXG4gICAgICAgICAgaWNvbj17ZmFDaGV2cm9uRG93bn0gXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLmJyb3duQnV0dG9ufT5ORVcgSEVBTFRITElORTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICAgey8qIHNlY3Rpb240LSBCTFVFICovfVxyXG4gICAgPHNlY3Rpb24gaWQ9XCJzZWN0aW9uXCIgY2xhc3NOYW1lPXtzdHlsZS5zZWN0aW9uV3JhcHBlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5mYW1pbHlfX0ltYWdlfT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oZXJvX19PdmVybGF5NH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRlbnRDb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQxfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5sZWZ0UGF0dGVybn0+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDJ9PlxyXG4gICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE9mZmljaWEgZWl1cyBjdW0gZXN0IGFzcGVybmF0dXIgb2RpbyByZXByZWhlbmRlcml0IHJlbSBmYWNlcmUgbWFnbmkgaW4gZG9sb3JlcyBjb3JydXB0aSBzdW50IGhhcnVtIGZhY2lsaXMsIHF1aXNxdWFtIHF1YXMgbWFpb3JlcyByZXBlbGxlbmR1cyBtYWduYW0gb2ZmaWNpaXMuPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDN9PlBpY3R1cmU8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkNH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zY3JvbGxEaXZ9PlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDV9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbkNvbnRhaW5lcn0gPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17c3R5bGUuYXJyb3dEb3duMn1cclxuICAgICAgICAgIGljb249e2ZhQ2hldnJvbkRvd259IFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS53aGl0ZUJ1dHRvbn0+R0VUIElOIFRPVUNIPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICA8L3NlY3Rpb24+XHJcbiAgICAgey8qIHNlY3Rpb241IC1HUkVZKi99XHJcbiAgICAgPHNlY3Rpb24gaWQ9XCJzZWN0aW9uXCIgY2xhc3NOYW1lPXtzdHlsZS5zZWN0aW9uV3JhcHBlcn0+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc2VjdGlvbldyYXBwZXJ9PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50ZXN0aW5nU3RhdGlvbl9fSW1hZ2V9PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhlcm9fX092ZXJsYXk1fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGVudENvbnRhaW5lckF9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQxQX0+XHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxlZnRQYXR0ZXJuQX0+XHJcbiAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQyQX0+XHJcbiAgICAgICAgICAgIGNvbnRlbnRzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc1xyXG4gICAgICAgICAgIEdyaWQgMVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDNBfT5ncmlkMjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQ0QX0+Z3JpZDM8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkNUF9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc2Nyb2xsRGl2fT5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQ2QX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYnV0dG9uQ29udGFpbmVyfSA+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZS5hcnJvd0Rvd259XHJcbiAgICAgICAgICBpY29uPXtmYUNoZXZyb25Eb3dufSBcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuYnJvd25CdXR0b259Pk5FVyBIRUFMVEhMSU5FPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICBcclxuIFxyXG4gICAgPC8+XHJcblxyXG4gIClcclxuXHJcblxyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcclxuLy8gICAvLyB1c2luZyBkb3RlbnYgYW5kIGdldHRpbmcgdGhlIHVybCBmcm9tIGVudiBmaWxlLlxyXG4vLyAgIGNvbnN0IHtBUElfVVJMfSA9IHByb2Nlc3MuZW52XHJcblxyXG4vLyAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L21vdmllc2ApXHJcbi8vICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXMuanNvbigpXHJcbi8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJX1VSTH0vbW92aWVzYClcclxuXHJcblxyXG5cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgICBtb3ZpZXM6IHJlc3BvbnNlLmRhdGFcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gfVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcblxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJDb250YWluZXJcIjogXCJmb290ZXJfZm9vdGVyQ29udGFpbmVyX18xTHIxTlwiLFxuXHRcImdyaWRDb250YWluZXJcIjogXCJmb290ZXJfZ3JpZENvbnRhaW5lcl9fMWFCSkFcIixcblx0XCJncmlkMVwiOiBcImZvb3Rlcl9ncmlkMV9fM1g4aFZcIixcblx0XCJncmlkMlwiOiBcImZvb3Rlcl9ncmlkMl9fV01TN3dcIixcblx0XCJncmlkM1wiOiBcImZvb3Rlcl9ncmlkM19fM0twT2JcIixcblx0XCJidXR0b25Db250YWluZXJcIjogXCJmb290ZXJfYnV0dG9uQ29udGFpbmVyX18zYVQ1cFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2VjdGlvbnNDb25hdGluZXJcIjogXCJIb21lX3NlY3Rpb25zQ29uYXRpbmVyX19BenZMNFwiLFxuXHRcInNlY3Rpb25XcmFwcGVyXCI6IFwiSG9tZV9zZWN0aW9uV3JhcHBlcl9fMmVGUFFcIixcblx0XCJmYW1pbHlfX0ltYWdlXCI6IFwiSG9tZV9mYW1pbHlfX0ltYWdlX18yZ19ZeFwiLFxuXHRcImhlcm9fX092ZXJsYXlcIjogXCJIb21lX2hlcm9fX092ZXJsYXlfXzMxNHlkXCIsXG5cdFwiY29udGVudENvbnRhaW5lck1haW5cIjogXCJIb21lX2NvbnRlbnRDb250YWluZXJNYWluX18ycHRyTlwiLFxuXHRcImdyaWQyTWFpblwiOiBcIkhvbWVfZ3JpZDJNYWluX18yYWxuSFwiLFxuXHRcImdyaWQzTWFpblwiOiBcIkhvbWVfZ3JpZDNNYWluX19pTmo5OVwiLFxuXHRcImNvbnRlbnRDb250YWluZXJcIjogXCJIb21lX2NvbnRlbnRDb250YWluZXJfX0x5VU5FXCIsXG5cdFwiZ3JpZDFcIjogXCJIb21lX2dyaWQxX19sVE00clwiLFxuXHRcImxlZnRQYXR0ZXJuXCI6IFwiSG9tZV9sZWZ0UGF0dGVybl9fZGpSRkdcIixcblx0XCJncmlkMlwiOiBcIkhvbWVfZ3JpZDJfXzI5NHJPXCIsXG5cdFwiZ3JpZDNcIjogXCJIb21lX2dyaWQzX18zb1RYM1wiLFxuXHRcImdyaWQ0XCI6IFwiSG9tZV9ncmlkNF9fMko2RmZcIixcblx0XCJzY3JvbGxEaXZcIjogXCJIb21lX3Njcm9sbERpdl9fUmVjZmRcIixcblx0XCJncmlkNVwiOiBcIkhvbWVfZ3JpZDVfXzNzNWxHXCIsXG5cdFwiZ3JpZDVNYWluXCI6IFwiSG9tZV9ncmlkNU1haW5fXzFPR2dWXCIsXG5cdFwiY29udGVudENvbnRhaW5lckFcIjogXCJIb21lX2NvbnRlbnRDb250YWluZXJBX19pVHhRRFwiLFxuXHRcImdyaWQxQVwiOiBcIkhvbWVfZ3JpZDFBX18ycmJFTlwiLFxuXHRcImxlZnRQYXR0ZXJuQVwiOiBcIkhvbWVfbGVmdFBhdHRlcm5BX19UZ2JMMFwiLFxuXHRcImdyaWQyQVwiOiBcIkhvbWVfZ3JpZDJBX18yUHUxUFwiLFxuXHRcImdyaWQzQVwiOiBcIkhvbWVfZ3JpZDNBX18ya1RFZVwiLFxuXHRcImdyaWQ0QVwiOiBcIkhvbWVfZ3JpZDRBX18yY2hMb1wiLFxuXHRcImdyaWQ1QVwiOiBcIkhvbWVfZ3JpZDVBX18zamo4ZFwiLFxuXHRcImdyaWQ2QVwiOiBcIkhvbWVfZ3JpZDZBX196WE9pWVwiLFxuXHRcImFycm93RG93blwiOiBcIkhvbWVfYXJyb3dEb3duX18zY3ZtT1wiLFxuXHRcImJvdW5jZVwiOiBcIkhvbWVfYm91bmNlX18zMTFab1wiLFxuXHRcImJ1dHRvbkNvbnRhaW5lclwiOiBcIkhvbWVfYnV0dG9uQ29udGFpbmVyX18zRVhJVFwiLFxuXHRcImJyb3duQnV0dG9uXCI6IFwiSG9tZV9icm93bkJ1dHRvbl9fMUxzRjBcIixcblx0XCJoZXJvX19PdmVybGF5MlwiOiBcIkhvbWVfaGVyb19fT3ZlcmxheTJfX1Z0RURvXCIsXG5cdFwiYXJyb3dEb3duMlwiOiBcIkhvbWVfYXJyb3dEb3duMl9fMUk1RlZcIixcblx0XCJ3aGl0ZUJ1dHRvblwiOiBcIkhvbWVfd2hpdGVCdXR0b25fXzNCT0hnXCIsXG5cdFwiZmFtaWx5X19JbWFnZTNcIjogXCJIb21lX2ZhbWlseV9fSW1hZ2UzX18yeHM4cFwiLFxuXHRcImhlcm9fX092ZXJsYXkzXCI6IFwiSG9tZV9oZXJvX19PdmVybGF5M19fMzlpTGZcIixcblx0XCJoZXJvX19PdmVybGF5NFwiOiBcIkhvbWVfaGVyb19fT3ZlcmxheTRfX2pXWGY1XCIsXG5cdFwidGVzdGluZ1N0YXRpb25fX0ltYWdlXCI6IFwiSG9tZV90ZXN0aW5nU3RhdGlvbl9fSW1hZ2VfX0RmYWRYXCIsXG5cdFwiaGVyb19fT3ZlcmxheTVcIjogXCJIb21lX2hlcm9fX092ZXJsYXk1X19oWG9jb1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiU3R5bGVzIiwiRm9vdGVyIiwiZm9vdGVyQ29udGFpbmVyIiwiZ3JpZENvbnRhaW5lciIsImF4aW9zIiwiZmV0Y2giLCJsaWJyYXJ5IiwiRm9udEF3ZXNvbWVJY29uIiwiZmFDaGV2cm9uRG93biIsImZhSGlnaGxpZ2h0ZXIiLCJzdHlsZSIsIkhvbWUiLCJwcm9wcyIsInNlY3Rpb25zQ29uYXRpbmVyIiwic2VjdGlvbldyYXBwZXIiLCJmYW1pbHlfX0ltYWdlIiwiaGVyb19fT3ZlcmxheSIsImNvbnRlbnRDb250YWluZXJNYWluIiwiZ3JpZDEiLCJsZWZ0UGF0dGVybiIsImdyaWQyTWFpbiIsImdyaWQzTWFpbiIsImdyaWQ0Iiwic2Nyb2xsRGl2IiwiZ3JpZDVNYWluIiwiYnV0dG9uQ29udGFpbmVyIiwiYXJyb3dEb3duIiwiYnJvd25CdXR0b24iLCJoZXJvX19PdmVybGF5MiIsImNvbnRlbnRDb250YWluZXIiLCJncmlkMiIsImdyaWQzIiwiZ3JpZDUiLCJhcnJvd0Rvd24yIiwid2hpdGVCdXR0b24iLCJmYW1pbHlfX0ltYWdlMyIsImhlcm9fX092ZXJsYXkzIiwiY29udGVudENvbnRhaW5lckEiLCJncmlkMUEiLCJsZWZ0UGF0dGVybkEiLCJncmlkMkEiLCJncmlkM0EiLCJncmlkNEEiLCJncmlkNUEiLCJncmlkNkEiLCJoZXJvX19PdmVybGF5NCIsInRlc3RpbmdTdGF0aW9uX19JbWFnZSIsImhlcm9fX092ZXJsYXk1Il0sInNvdXJjZVJvb3QiOiIifQ==