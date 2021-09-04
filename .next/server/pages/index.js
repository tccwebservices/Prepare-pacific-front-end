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
	"foodbank__Image": "Home_foodbank__Image__1BSH9",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbklEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBLG1CQURGO0FBa0xELENBcExELEVBc0xBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBSUEsaUVBQWVDLElBQWY7Ozs7Ozs7Ozs7QUN0TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2Q0E7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanN4Iiwid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9teS1hcHAvLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9teS1hcHAvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuL2Zvb3Rlci5tb2R1bGUuY3NzXCJcblxuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxmb290ZXIgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuZm9vdGVyQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5ncmlkQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyXCJcclxuLy8gaW1wb3J0IHRoZSBsaWJyYXJ5XHJcbmltcG9ydCB7IGxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbi8vIGltcG9ydCB5b3VyIGljb25zXHJcbmltcG9ydCB7IGZhQ2hldnJvbkRvd24sIGZhSGlnaGxpZ2h0ZXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG4vLyBpbXBvcnQgUGF0dGVybkJyb3duIGZyb20gXCIuLi9hc3NldHMvcGF0dGVybkJyb3duLnN2Z1wiXHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiXHJcbi8vIHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGp1c3RpZnlDb250ZW50OidjZW50ZXInLCBtYXJnaW46JzIwcHgnfX1cclxuY29uc3QgSG9tZSA9IChwcm9wcykgPT4ge1xyXG4gIC8vICBjb25zb2xlLmxvZyhwcm9wcy5tb3ZpZXMpXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICB7Lyogc2VjdGlvbi0gT1JBTkdFICovfVxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnNlY3Rpb25zQ29uYXRpbmVyfT5cclxuICAgIDxzZWN0aW9uIGlkID1cInNlY3Rpb25cImNsYXNzTmFtZT17c3R5bGUuc2VjdGlvbldyYXBwZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZmFtaWx5X19JbWFnZX0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGVyb19fT3ZlcmxheX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRlbnRDb250YWluZXJNYWlufT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkMX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubGVmdFBhdHRlcm59PlxyXG4gICAgICAgICBcclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkMk1haW59PlxyXG4gICAgICAgICAgICBjb250ZW50c1xyXG4gICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBPZmZpY2lhIGVpdXMgY3VtIGVzdCBhc3Blcm5hdHVyIG9kaW8gcmVwcmVoZW5kZXJpdCByZW0gZmFjZXJlIG1hZ25pIGluIGRvbG9yZXMgY29ycnVwdGkgc3VudCBoYXJ1bSBmYWNpbGlzLCBxdWlzcXVhbSBxdWFzIG1haW9yZXMgcmVwZWxsZW5kdXMgbWFnbmFtIG9mZmljaWlzLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQzTWFpbn0+UGljdHVyZTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQ0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnNjcm9sbERpdn0+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkNU1haW59PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbkNvbnRhaW5lcn0gPlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlLmFycm93RG93bn1cclxuICAgICAgICAgIGljb249e2ZhQ2hldnJvbkRvd259IFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5icm93bkJ1dHRvbn0+TkVXIEhFQUxUSExJTkU8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIHsvKiBzZWN0aW9uMiAtIFBVUlBMRSAqL31cclxuICAgIDxzZWN0aW9uIGlkPVwic2VjdGlvblwiIGNsYXNzTmFtZT17c3R5bGUuc2VjdGlvbldyYXBwZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZmFtaWx5X19JbWFnZX0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGVyb19fT3ZlcmxheTJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250ZW50Q29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkMX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubGVmdFBhdHRlcm59PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQyfT5cclxuICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBPZmZpY2lhIGVpdXMgY3VtIGVzdCBhc3Blcm5hdHVyIG9kaW8gcmVwcmVoZW5kZXJpdCByZW0gZmFjZXJlIG1hZ25pIGluIGRvbG9yZXMgY29ycnVwdGkgc3VudCBoYXJ1bSBmYWNpbGlzLCBxdWlzcXVhbSBxdWFzIG1haW9yZXMgcmVwZWxsZW5kdXMgbWFnbmFtIG9mZmljaWlzLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQzfT5QaWN0dXJlPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc2Nyb2xsRGl2fT5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQ1fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5idXR0b25Db250YWluZXJ9ID5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlLmFycm93RG93bjJ9XHJcbiAgICAgICAgICBpY29uPXtmYUNoZXZyb25Eb3dufSBcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUud2hpdGVCdXR0b259PklORk9STUFUSU9OPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIHsvKiBzZWN0aW9uMyAtV0hJVEUgKi99XHJcbiAgICA8c2VjdGlvbiBpZD1cInNlY3Rpb25cIiBjbGFzc05hbWU9e3N0eWxlLnNlY3Rpb25XcmFwcGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZhbWlseV9fSW1hZ2UzfT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oZXJvX19PdmVybGF5M30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRlbnRDb250YWluZXJBfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkMUF9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxlZnRQYXR0ZXJuQX0+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDJBfT5cclxuICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgIEdyaWQgMVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDNBfT5ncmlkMjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQ0QX0+Z3JpZDM8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkNUF9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc2Nyb2xsRGl2fT5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQ2QX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYnV0dG9uQ29udGFpbmVyfSA+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZS5hcnJvd0Rvd259XHJcbiAgICAgICAgICBpY29uPXtmYUNoZXZyb25Eb3dufSBcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuYnJvd25CdXR0b259Pk5FVyBIRUFMVEhMSU5FPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgICB7Lyogc2VjdGlvbjQtIEJMVUUgKi99XHJcbiAgICA8c2VjdGlvbiBpZD1cInNlY3Rpb25cIiBjbGFzc05hbWU9e3N0eWxlLnNlY3Rpb25XcmFwcGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZhbWlseV9fSW1hZ2V9PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhlcm9fX092ZXJsYXk0fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGVudENvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDF9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxlZnRQYXR0ZXJufT5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkMn0+XHJcbiAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gT2ZmaWNpYSBlaXVzIGN1bSBlc3QgYXNwZXJuYXR1ciBvZGlvIHJlcHJlaGVuZGVyaXQgcmVtIGZhY2VyZSBtYWduaSBpbiBkb2xvcmVzIGNvcnJ1cHRpIHN1bnQgaGFydW0gZmFjaWxpcywgcXVpc3F1YW0gcXVhcyBtYWlvcmVzIHJlcGVsbGVuZHVzIG1hZ25hbSBvZmZpY2lpcy48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkM30+UGljdHVyZTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQ0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnNjcm9sbERpdn0+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkNX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYnV0dG9uQ29udGFpbmVyfSA+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZS5hcnJvd0Rvd24yfVxyXG4gICAgICAgICAgaWNvbj17ZmFDaGV2cm9uRG93bn0gXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLndoaXRlQnV0dG9ufT5HRVQgSU4gVE9VQ0g8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgIDwvc2VjdGlvbj5cclxuICAgICB7Lyogc2VjdGlvbjUgLUdSRVkqL31cclxuICAgICA8c2VjdGlvbiBpZD1cInNlY3Rpb25cIiBjbGFzc05hbWU9e3N0eWxlLnNlY3Rpb25XcmFwcGVyfT5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zZWN0aW9uV3JhcHBlcn0+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRlc3RpbmdTdGF0aW9uX19JbWFnZX0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGVyb19fT3ZlcmxheTV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250ZW50Q29udGFpbmVyQX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDFBfT5cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubGVmdFBhdHRlcm5BfT5cclxuICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDJBfT5cclxuICAgICAgICAgICAgY29udGVudHNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NzXHJcbiAgICAgICAgICAgR3JpZCAxXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkM0F9PmdyaWQyPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDRBfT5ncmlkMzwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWQ1QX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zY3JvbGxEaXZ9PlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZDZBfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5idXR0b25Db250YWluZXJ9ID5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlLmFycm93RG93bn1cclxuICAgICAgICAgIGljb249e2ZhQ2hldnJvbkRvd259IFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5icm93bkJ1dHRvbn0+TkVXIEhFQUxUSExJTkU8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgIFxyXG4gXHJcbiAgICA8Lz5cclxuXHJcbiAgKVxyXG5cclxuXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xyXG4vLyAgIC8vIHVzaW5nIGRvdGVudiBhbmQgZ2V0dGluZyB0aGUgdXJsIGZyb20gZW52IGZpbGUuXHJcbi8vICAgY29uc3Qge0FQSV9VUkx9ID0gcHJvY2Vzcy5lbnZcclxuXHJcbi8vICAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vbW92aWVzYClcclxuLy8gICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcy5qc29uKClcclxuLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUElfVVJMfS9tb3ZpZXNgKVxyXG5cclxuXHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICAgIG1vdmllczogcmVzcG9uc2UuZGF0YVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyB9XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVcclxuXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlckNvbnRhaW5lclwiOiBcImZvb3Rlcl9mb290ZXJDb250YWluZXJfXzFMcjFOXCIsXG5cdFwiZ3JpZENvbnRhaW5lclwiOiBcImZvb3Rlcl9ncmlkQ29udGFpbmVyX18xYUJKQVwiLFxuXHRcImdyaWQxXCI6IFwiZm9vdGVyX2dyaWQxX18zWDhoVlwiLFxuXHRcImdyaWQyXCI6IFwiZm9vdGVyX2dyaWQyX19XTVM3d1wiLFxuXHRcImdyaWQzXCI6IFwiZm9vdGVyX2dyaWQzX18zS3BPYlwiLFxuXHRcImJ1dHRvbkNvbnRhaW5lclwiOiBcImZvb3Rlcl9idXR0b25Db250YWluZXJfXzNhVDVwXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzZWN0aW9uc0NvbmF0aW5lclwiOiBcIkhvbWVfc2VjdGlvbnNDb25hdGluZXJfX0F6dkw0XCIsXG5cdFwic2VjdGlvbldyYXBwZXJcIjogXCJIb21lX3NlY3Rpb25XcmFwcGVyX18yZUZQUVwiLFxuXHRcImZhbWlseV9fSW1hZ2VcIjogXCJIb21lX2ZhbWlseV9fSW1hZ2VfXzJnX1l4XCIsXG5cdFwiZm9vZGJhbmtfX0ltYWdlXCI6IFwiSG9tZV9mb29kYmFua19fSW1hZ2VfXzFCU0g5XCIsXG5cdFwiaGVyb19fT3ZlcmxheVwiOiBcIkhvbWVfaGVyb19fT3ZlcmxheV9fMzE0eWRcIixcblx0XCJjb250ZW50Q29udGFpbmVyTWFpblwiOiBcIkhvbWVfY29udGVudENvbnRhaW5lck1haW5fXzJwdHJOXCIsXG5cdFwiZ3JpZDJNYWluXCI6IFwiSG9tZV9ncmlkMk1haW5fXzJhbG5IXCIsXG5cdFwiZ3JpZDNNYWluXCI6IFwiSG9tZV9ncmlkM01haW5fX2lOajk5XCIsXG5cdFwiY29udGVudENvbnRhaW5lclwiOiBcIkhvbWVfY29udGVudENvbnRhaW5lcl9fTHlVTkVcIixcblx0XCJncmlkMVwiOiBcIkhvbWVfZ3JpZDFfX2xUTTRyXCIsXG5cdFwibGVmdFBhdHRlcm5cIjogXCJIb21lX2xlZnRQYXR0ZXJuX19kalJGR1wiLFxuXHRcImdyaWQyXCI6IFwiSG9tZV9ncmlkMl9fMjk0ck9cIixcblx0XCJncmlkM1wiOiBcIkhvbWVfZ3JpZDNfXzNvVFgzXCIsXG5cdFwiZ3JpZDRcIjogXCJIb21lX2dyaWQ0X18ySjZGZlwiLFxuXHRcInNjcm9sbERpdlwiOiBcIkhvbWVfc2Nyb2xsRGl2X19SZWNmZFwiLFxuXHRcImdyaWQ1XCI6IFwiSG9tZV9ncmlkNV9fM3M1bEdcIixcblx0XCJncmlkNU1haW5cIjogXCJIb21lX2dyaWQ1TWFpbl9fMU9HZ1ZcIixcblx0XCJjb250ZW50Q29udGFpbmVyQVwiOiBcIkhvbWVfY29udGVudENvbnRhaW5lckFfX2lUeFFEXCIsXG5cdFwiZ3JpZDFBXCI6IFwiSG9tZV9ncmlkMUFfXzJyYkVOXCIsXG5cdFwibGVmdFBhdHRlcm5BXCI6IFwiSG9tZV9sZWZ0UGF0dGVybkFfX1RnYkwwXCIsXG5cdFwiZ3JpZDJBXCI6IFwiSG9tZV9ncmlkMkFfXzJQdTFQXCIsXG5cdFwiZ3JpZDNBXCI6IFwiSG9tZV9ncmlkM0FfXzJrVEVlXCIsXG5cdFwiZ3JpZDRBXCI6IFwiSG9tZV9ncmlkNEFfXzJjaExvXCIsXG5cdFwiZ3JpZDVBXCI6IFwiSG9tZV9ncmlkNUFfXzNqajhkXCIsXG5cdFwiZ3JpZDZBXCI6IFwiSG9tZV9ncmlkNkFfX3pYT2lZXCIsXG5cdFwiYXJyb3dEb3duXCI6IFwiSG9tZV9hcnJvd0Rvd25fXzNjdm1PXCIsXG5cdFwiYm91bmNlXCI6IFwiSG9tZV9ib3VuY2VfXzMxMVpvXCIsXG5cdFwiYnV0dG9uQ29udGFpbmVyXCI6IFwiSG9tZV9idXR0b25Db250YWluZXJfXzNFWElUXCIsXG5cdFwiYnJvd25CdXR0b25cIjogXCJIb21lX2Jyb3duQnV0dG9uX18xTHNGMFwiLFxuXHRcImhlcm9fX092ZXJsYXkyXCI6IFwiSG9tZV9oZXJvX19PdmVybGF5Ml9fVnRFRG9cIixcblx0XCJhcnJvd0Rvd24yXCI6IFwiSG9tZV9hcnJvd0Rvd24yX18xSTVGVlwiLFxuXHRcIndoaXRlQnV0dG9uXCI6IFwiSG9tZV93aGl0ZUJ1dHRvbl9fM0JPSGdcIixcblx0XCJmYW1pbHlfX0ltYWdlM1wiOiBcIkhvbWVfZmFtaWx5X19JbWFnZTNfXzJ4czhwXCIsXG5cdFwiaGVyb19fT3ZlcmxheTNcIjogXCJIb21lX2hlcm9fX092ZXJsYXkzX18zOWlMZlwiLFxuXHRcImhlcm9fX092ZXJsYXk0XCI6IFwiSG9tZV9oZXJvX19PdmVybGF5NF9faldYZjVcIixcblx0XCJ0ZXN0aW5nU3RhdGlvbl9fSW1hZ2VcIjogXCJIb21lX3Rlc3RpbmdTdGF0aW9uX19JbWFnZV9fRGZhZFhcIixcblx0XCJoZXJvX19PdmVybGF5NVwiOiBcIkhvbWVfaGVyb19fT3ZlcmxheTVfX2hYb2NvXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJTdHlsZXMiLCJGb290ZXIiLCJmb290ZXJDb250YWluZXIiLCJncmlkQ29udGFpbmVyIiwiYXhpb3MiLCJmZXRjaCIsImxpYnJhcnkiLCJGb250QXdlc29tZUljb24iLCJmYUNoZXZyb25Eb3duIiwiZmFIaWdobGlnaHRlciIsInN0eWxlIiwiSG9tZSIsInByb3BzIiwic2VjdGlvbnNDb25hdGluZXIiLCJzZWN0aW9uV3JhcHBlciIsImZhbWlseV9fSW1hZ2UiLCJoZXJvX19PdmVybGF5IiwiY29udGVudENvbnRhaW5lck1haW4iLCJncmlkMSIsImxlZnRQYXR0ZXJuIiwiZ3JpZDJNYWluIiwiZ3JpZDNNYWluIiwiZ3JpZDQiLCJzY3JvbGxEaXYiLCJncmlkNU1haW4iLCJidXR0b25Db250YWluZXIiLCJhcnJvd0Rvd24iLCJicm93bkJ1dHRvbiIsImhlcm9fX092ZXJsYXkyIiwiY29udGVudENvbnRhaW5lciIsImdyaWQyIiwiZ3JpZDMiLCJncmlkNSIsImFycm93RG93bjIiLCJ3aGl0ZUJ1dHRvbiIsImZhbWlseV9fSW1hZ2UzIiwiaGVyb19fT3ZlcmxheTMiLCJjb250ZW50Q29udGFpbmVyQSIsImdyaWQxQSIsImxlZnRQYXR0ZXJuQSIsImdyaWQyQSIsImdyaWQzQSIsImdyaWQ0QSIsImdyaWQ1QSIsImdyaWQ2QSIsImhlcm9fX092ZXJsYXk0IiwidGVzdGluZ1N0YXRpb25fX0ltYWdlIiwiaGVyb19fT3ZlcmxheTUiXSwic291cmNlUm9vdCI6IiJ9