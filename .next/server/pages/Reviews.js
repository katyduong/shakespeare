"use strict";
(() => {
var exports = {};
exports.id = "pages/reviews";
exports.ids = ["pages/reviews"];
exports.modules = {

/***/ "./src/api/reviews.js":
/*!****************************!*\
  !*** ./src/api/reviews.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getReviewById": () => (/* binding */ getReviewById),
/* harmony export */   "getReviews": () => (/* binding */ getReviews)
/* harmony export */ });
const REVIEWS_URL = 'https://shakespeare.podium.com/api/reviews';

const getReviewsRequest = () => // eslint-disable-next-line no-undef
fetch(REVIEWS_URL, {
  method: 'GET',
  headers: {
    'x-api-key': 'H3TM28wjL8R4#HTnqk?c',
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

const getReviewByIdRequest = id => // eslint-disable-next-line no-undef
fetch(`${REVIEWS_URL}/${id}`, {
  method: 'GET',
  headers: {
    'x-api-key': 'H3TM28wjL8R4#HTnqk?c',
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

const getReviews = async () => {
  try {
    const response = await getReviewsRequest();
    const responseJson = await response.json();
    return responseJson;
  } catch (e) {
    console.log({
      e
    });
    return null;
  }
};

const getReviewById = async id => {
  try {
    const response = await getReviewByIdRequest(id);
    const responseJson = await response.json();
    return responseJson;
  } catch (e) {
    console.log({
      e
    });
    return null;
  }
};



/***/ }),

/***/ "./src/pages/reviews/index.jsx":
/*!*************************************!*\
  !*** ./src/pages/reviews/index.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Card */ "react-bootstrap/Card");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-star-ratings */ "react-star-ratings");
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_star_ratings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_reviews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/reviews */ "./src/api/reviews.js");

var _jsxFileName = "/mnt/c/Users/dpd_9/repos/shakespeare/src/pages/reviews/index.jsx";







const Reviews = () => {
  const {
    0: reviews,
    1: setReviews
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const fetchReviews = async () => {
      const response = await (0,_api_reviews__WEBPACK_IMPORTED_MODULE_6__.getReviews)();
      setReviews(response);
    };

    fetchReviews();
  }, []);

  if (!reviews) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container-fluid",
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 12
    }, undefined);
  }

  if (reviews.length === 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container-fluid",
      children: "No Reviews Available"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 12
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container-fluid",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default()), {
      xs: 1,
      md: 2,
      lg: 3,
      xl: 4,
      className: "g-4",
      children: reviews.map(r => {
        const date = new Date(r.publish_date);
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default()), {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default()), {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default().Header), {
              as: "h5",
              className: "align-items-center",
              children: [r.rating, '  ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_star_ratings__WEBPACK_IMPORTED_MODULE_5___default()), {
                rating: r.rating,
                starDimension: "16px",
                starSpacing: "2px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default().Body), {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default().Title), {
                children: r.author
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default().Text), {
                children: r.body.length > 30 ? `${r.body.substring(0, 30)}...` : r.body
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default().Link), {
                href: `/reviews/${r.id}`,
                children: "Read more"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default().Footer), {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
                className: "text-muted",
                children: ["Published on ", date.toLocaleDateString(), ' ', date.toLocaleTimeString()]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 17
            }, undefined)]
          }, r.id, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reviews);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Card":
/*!***************************************!*\
  !*** external "react-bootstrap/Card" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("react-bootstrap/Card");

/***/ }),

/***/ "react-bootstrap/Col":
/*!**************************************!*\
  !*** external "react-bootstrap/Col" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ "react-bootstrap/Row":
/*!**************************************!*\
  !*** external "react-bootstrap/Row" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ "react-star-ratings":
/*!*************************************!*\
  !*** external "react-star-ratings" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("react-star-ratings");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/reviews/index.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1Esa0JBQUwsRUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQW5CRjtBQUFBLGFBQVdULENBQUMsQ0FBQ3RCLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUE4QkQsT0FoQ0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBdUNELENBMUREOztBQTREQSxpRUFBZWdCLE9BQWY7Ozs7Ozs7Ozs7QUNuRUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hha2VzcGVhcmUvLi9zcmMvYXBpL3Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vc2hha2VzcGVhcmUvLi9zcmMvcGFnZXMvcmV2aWV3cy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vc2hha2VzcGVhcmUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NoYWtlc3BlYXJlL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0NhcmRcIiIsIndlYnBhY2s6Ly9zaGFrZXNwZWFyZS9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIiIsIndlYnBhY2s6Ly9zaGFrZXNwZWFyZS9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIiIsIndlYnBhY2s6Ly9zaGFrZXNwZWFyZS9leHRlcm5hbCBcInJlYWN0LXN0YXItcmF0aW5nc1wiIiwid2VicGFjazovL3NoYWtlc3BlYXJlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUkVWSUVXU19VUkwgPSAnaHR0cHM6Ly9zaGFrZXNwZWFyZS5wb2RpdW0uY29tL2FwaS9yZXZpZXdzJztcblxuY29uc3QgZ2V0UmV2aWV3c1JlcXVlc3QgPSAoKSA9PlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZmV0Y2goUkVWSUVXU19VUkwsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICd4LWFwaS1rZXknOiAnSDNUTTI4d2pMOFI0I0hUbnFrP2MnLFxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuXG5jb25zdCBnZXRSZXZpZXdCeUlkUmVxdWVzdCA9IChpZCkgPT5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGZldGNoKGAke1JFVklFV1NfVVJMfS8ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICd4LWFwaS1rZXknOiAnSDNUTTI4d2pMOFI0I0hUbnFrP2MnLFxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuXG5jb25zdCBnZXRSZXZpZXdzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmV2aWV3c1JlcXVlc3QoKTtcbiAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlSnNvbjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKHsgZSB9KTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuY29uc3QgZ2V0UmV2aWV3QnlJZCA9IGFzeW5jIChpZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmV2aWV3QnlJZFJlcXVlc3QoaWQpO1xuICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gcmVzcG9uc2VKc29uO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coeyBlIH0pO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5leHBvcnQgeyBnZXRSZXZpZXdCeUlkLCBnZXRSZXZpZXdzIH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJztcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xuaW1wb3J0IFN0YXJSYXRpbmdzIGZyb20gJ3JlYWN0LXN0YXItcmF0aW5ncyc7XG5pbXBvcnQgeyBnZXRSZXZpZXdzIH0gZnJvbSAnLi4vLi4vYXBpL3Jldmlld3MnO1xuXG5jb25zdCBSZXZpZXdzID0gKCkgPT4ge1xuICBjb25zdCBbcmV2aWV3cywgc2V0UmV2aWV3c10gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUmV2aWV3cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmV2aWV3cygpO1xuICAgICAgc2V0UmV2aWV3cyhyZXNwb25zZSk7XG4gICAgfTtcbiAgICBmZXRjaFJldmlld3MoKTtcbiAgfSwgW10pO1xuXG4gIGlmICghcmV2aWV3cykge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICBpZiAocmV2aWV3cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5ObyBSZXZpZXdzIEF2YWlsYWJsZTwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgIDxSb3cgeHM9ezF9IG1kPXsyfSBsZz17M30geGw9ezR9IGNsYXNzTmFtZT1cImctNFwiPlxuICAgICAgICB7cmV2aWV3cy5tYXAoKHIpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoci5wdWJsaXNoX2RhdGUpO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICA8Q2FyZCBrZXk9e3IuaWR9PlxuICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBhcz1cImg1XCIgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICB7ci5yYXRpbmd9XG4gICAgICAgICAgICAgICAgICB7JyAgJ31cbiAgICAgICAgICAgICAgICAgIDxTdGFyUmF0aW5nc1xuICAgICAgICAgICAgICAgICAgICByYXRpbmc9e3IucmF0aW5nfVxuICAgICAgICAgICAgICAgICAgICBzdGFyRGltZW5zaW9uPVwiMTZweFwiXG4gICAgICAgICAgICAgICAgICAgIHN0YXJTcGFjaW5nPVwiMnB4XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+e3IuYXV0aG9yfTwvQ2FyZC5UaXRsZT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XG4gICAgICAgICAgICAgICAgICAgIHtyLmJvZHkubGVuZ3RoID4gMzBcbiAgICAgICAgICAgICAgICAgICAgICA/IGAke3IuYm9keS5zdWJzdHJpbmcoMCwgMzApfS4uLmBcbiAgICAgICAgICAgICAgICAgICAgICA6IHIuYm9keX1cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxuICAgICAgICAgICAgICAgICAgPENhcmQuTGluayBocmVmPXtgL3Jldmlld3MvJHtyLmlkfWB9PlJlYWQgbW9yZTwvQ2FyZC5MaW5rPlxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgIDxDYXJkLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIFB1Ymxpc2hlZCBvbiB7ZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKX17JyAnfVxuICAgICAgICAgICAgICAgICAgICB7ZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPC9DYXJkLkZvb3Rlcj5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1Jvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJldmlld3M7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQ29sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3Rhci1yYXRpbmdzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUkVWSUVXU19VUkwiLCJnZXRSZXZpZXdzUmVxdWVzdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImdldFJldmlld0J5SWRSZXF1ZXN0IiwiaWQiLCJnZXRSZXZpZXdzIiwicmVzcG9uc2UiLCJyZXNwb25zZUpzb24iLCJqc29uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRSZXZpZXdCeUlkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNhcmQiLCJSb3ciLCJDb2wiLCJTdGFyUmF0aW5ncyIsIlJldmlld3MiLCJyZXZpZXdzIiwic2V0UmV2aWV3cyIsImZldGNoUmV2aWV3cyIsImxlbmd0aCIsIm1hcCIsInIiLCJkYXRlIiwiRGF0ZSIsInB1Ymxpc2hfZGF0ZSIsInJhdGluZyIsImF1dGhvciIsImJvZHkiLCJzdWJzdHJpbmciLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ0b0xvY2FsZVRpbWVTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9