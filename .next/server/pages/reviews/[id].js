"use strict";
(() => {
var exports = {};
exports.id = "pages/reviews/[id]";
exports.ids = ["pages/reviews/[id]"];
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

const getReviewsRequest = () => fetch(REVIEWS_URL, {
  method: 'GET',
  headers: {
    'x-api-key': 'H3TM28wjL8R4#HTnqk?c',
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

const getReviewByIdRequest = id => fetch(`${REVIEWS_URL}/${id}`, {
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

/***/ "./src/pages/reviews/[id].jsx":
/*!************************************!*\
  !*** ./src/pages/reviews/[id].jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-star-ratings */ "react-star-ratings");
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_star_ratings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_reviews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/reviews */ "./src/api/reviews.js");

var _jsxFileName = "/mnt/c/Users/dpd_9/repos/shakespeare/src/pages/reviews/[id].jsx";





const Review = () => {
  const {
    0: review,
    1: setReview
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const fetchReviewById = async id => {
      if (id) {
        const response = await (0,_api_reviews__WEBPACK_IMPORTED_MODULE_4__.getReviewById)(id);
        setReview(response);
      }
    };

    const {
      id
    } = router.query;
    fetchReviewById(id);
  }, [router]);

  if (!review) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container-fluid",
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }, undefined);
  }

  const date = new Date(review.publish_date);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container-fluid",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jumbotron p-3 p-md-5 rounded",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "px-0",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "display-4",
          children: [review.rating, '  ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_star_ratings__WEBPACK_IMPORTED_MODULE_3___default()), {
            rating: review.rating,
            starDimension: "40px",
            starSpacing: "2px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [date.toLocaleDateString(), " ", date.toLocaleTimeString(), " by", ' ', review.author]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "lead my-3",
          children: review.body
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Review);

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/reviews/[id].jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsRUFBQyxXQUFkO0FBQUEscUJBQ0dQLE1BQU0sQ0FBQ1EsTUFEVixFQUVHLElBRkgsZUFHRSw4REFBQywyREFBRDtBQUNFLGtCQUFNLEVBQUVSLE1BQU0sQ0FBQ1EsTUFEakI7QUFFRSx5QkFBYSxFQUFDLE1BRmhCO0FBR0UsdUJBQVcsRUFBQztBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBVUU7QUFBQSxxQkFDR0gsSUFBSSxDQUFDSSxrQkFBTCxFQURILE9BQytCSixJQUFJLENBQUNLLGtCQUFMLEVBRC9CLFNBQzZELEdBRDdELEVBRUdWLE1BQU0sQ0FBQ1csTUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkYsZUFjRTtBQUFHLG1CQUFTLEVBQUMsV0FBYjtBQUFBLG9CQUEwQlgsTUFBTSxDQUFDWTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFzQkQsQ0ExQ0Q7O0FBNENBLGlFQUFlYixNQUFmOzs7Ozs7Ozs7O0FDakRBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hha2VzcGVhcmUvLi9zcmMvYXBpL3Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vc2hha2VzcGVhcmUvLi9zcmMvcGFnZXMvcmV2aWV3cy9baWRdLmpzeCIsIndlYnBhY2s6Ly9zaGFrZXNwZWFyZS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vc2hha2VzcGVhcmUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NoYWtlc3BlYXJlL2V4dGVybmFsIFwicmVhY3Qtc3Rhci1yYXRpbmdzXCIiLCJ3ZWJwYWNrOi8vc2hha2VzcGVhcmUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSRVZJRVdTX1VSTCA9ICdodHRwczovL3NoYWtlc3BlYXJlLnBvZGl1bS5jb20vYXBpL3Jldmlld3MnO1xuXG5jb25zdCBnZXRSZXZpZXdzUmVxdWVzdCA9ICgpID0+XG4gIGZldGNoKFJFVklFV1NfVVJMLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAneC1hcGkta2V5JzogJ0gzVE0yOHdqTDhSNCNIVG5xaz9jJyxcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcblxuY29uc3QgZ2V0UmV2aWV3QnlJZFJlcXVlc3QgPSAoaWQpID0+XG4gIGZldGNoKGAke1JFVklFV1NfVVJMfS8ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICd4LWFwaS1rZXknOiAnSDNUTTI4d2pMOFI0I0hUbnFrP2MnLFxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuXG5jb25zdCBnZXRSZXZpZXdzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmV2aWV3c1JlcXVlc3QoKTtcbiAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlSnNvbjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKHsgZSB9KTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuY29uc3QgZ2V0UmV2aWV3QnlJZCA9IGFzeW5jIChpZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmV2aWV3QnlJZFJlcXVlc3QoaWQpO1xuICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gcmVzcG9uc2VKc29uO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coeyBlIH0pO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5leHBvcnQgeyBnZXRSZXZpZXdCeUlkLCBnZXRSZXZpZXdzIH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBTdGFyUmF0aW5ncyBmcm9tICdyZWFjdC1zdGFyLXJhdGluZ3MnO1xuaW1wb3J0IHsgZ2V0UmV2aWV3QnlJZCB9IGZyb20gJy4uLy4uL2FwaS9yZXZpZXdzJztcblxuY29uc3QgUmV2aWV3ID0gKCkgPT4ge1xuICBjb25zdCBbcmV2aWV3LCBzZXRSZXZpZXddID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hSZXZpZXdCeUlkID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgICBpZiAoaWQpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRSZXZpZXdCeUlkKGlkKTtcbiAgICAgICAgc2V0UmV2aWV3KHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgICBmZXRjaFJldmlld0J5SWQoaWQpO1xuICB9LCBbcm91dGVyXSk7XG5cbiAgaWYgKCFyZXZpZXcpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShyZXZpZXcucHVibGlzaF9kYXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvbiBwLTMgcC1tZC01IHJvdW5kZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0wXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNFwiPlxuICAgICAgICAgICAge3Jldmlldy5yYXRpbmd9XG4gICAgICAgICAgICB7JyAgJ31cbiAgICAgICAgICAgIDxTdGFyUmF0aW5nc1xuICAgICAgICAgICAgICByYXRpbmc9e3Jldmlldy5yYXRpbmd9XG4gICAgICAgICAgICAgIHN0YXJEaW1lbnNpb249XCI0MHB4XCJcbiAgICAgICAgICAgICAgc3RhclNwYWNpbmc9XCIycHhcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAge2RhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCl9IHtkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpfSBieXsnICd9XG4gICAgICAgICAgICB7cmV2aWV3LmF1dGhvcn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZCBteS0zXCI+e3Jldmlldy5ib2R5fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJldmlldztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0YXItcmF0aW5nc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJFVklFV1NfVVJMIiwiZ2V0UmV2aWV3c1JlcXVlc3QiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJnZXRSZXZpZXdCeUlkUmVxdWVzdCIsImlkIiwiZ2V0UmV2aWV3cyIsInJlc3BvbnNlIiwicmVzcG9uc2VKc29uIiwianNvbiIsImUiLCJjb25zb2xlIiwibG9nIiwiZ2V0UmV2aWV3QnlJZCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJTdGFyUmF0aW5ncyIsIlJldmlldyIsInJldmlldyIsInNldFJldmlldyIsInJvdXRlciIsImZldGNoUmV2aWV3QnlJZCIsInF1ZXJ5IiwiZGF0ZSIsIkRhdGUiLCJwdWJsaXNoX2RhdGUiLCJyYXRpbmciLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJhdXRob3IiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==