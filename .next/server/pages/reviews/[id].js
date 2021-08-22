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
/* harmony import */ var _api_reviews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/reviews */ "./src/api/reviews.js");


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
        const response = await (0,_api_reviews__WEBPACK_IMPORTED_MODULE_3__.getReviewById)(id);
        setReview(response);
      }
    };

    const {
      id
    } = router.query;
    fetchReviewById(id);
  }, [router]);

  if (!review) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: "Loading..."
    }, void 0, false);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: review.rating
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: review.body
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: review.author
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, undefined)]
  }, void 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkQ7O0FBMkJBLGlFQUFlUixNQUFmOzs7Ozs7Ozs7O0FDL0JBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NoYWtlc3BlYXJlLy4vc3JjL2FwaS9yZXZpZXdzLmpzIiwid2VicGFjazovL3NoYWtlc3BlYXJlLy4vc3JjL3BhZ2VzL3Jldmlld3MvW2lkXS5qc3giLCJ3ZWJwYWNrOi8vc2hha2VzcGVhcmUvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3NoYWtlc3BlYXJlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zaGFrZXNwZWFyZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJFVklFV1NfVVJMID0gJ2h0dHBzOi8vc2hha2VzcGVhcmUucG9kaXVtLmNvbS9hcGkvcmV2aWV3cyc7XG5cbmNvbnN0IGdldFJldmlld3NSZXF1ZXN0ID0gKCkgPT5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGZldGNoKFJFVklFV1NfVVJMLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAneC1hcGkta2V5JzogJ0gzVE0yOHdqTDhSNCNIVG5xaz9jJyxcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcblxuY29uc3QgZ2V0UmV2aWV3QnlJZFJlcXVlc3QgPSAoaWQpID0+XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBmZXRjaChgJHtSRVZJRVdTX1VSTH0vJHtpZH1gLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAneC1hcGkta2V5JzogJ0gzVE0yOHdqTDhSNCNIVG5xaz9jJyxcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcblxuY29uc3QgZ2V0UmV2aWV3cyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFJldmlld3NSZXF1ZXN0KCk7XG4gICAgY29uc3QgcmVzcG9uc2VKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiByZXNwb25zZUpzb247XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyh7IGUgfSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmNvbnN0IGdldFJldmlld0J5SWQgPSBhc3luYyAoaWQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFJldmlld0J5SWRSZXF1ZXN0KGlkKTtcbiAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlSnNvbjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKHsgZSB9KTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuZXhwb3J0IHsgZ2V0UmV2aWV3QnlJZCwgZ2V0UmV2aWV3cyB9O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBnZXRSZXZpZXdCeUlkIH0gZnJvbSAnLi4vLi4vYXBpL3Jldmlld3MnO1xuXG5jb25zdCBSZXZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IFtyZXZpZXcsIHNldFJldmlld10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFJldmlld0J5SWQgPSBhc3luYyAoaWQpID0+IHtcbiAgICAgIGlmIChpZCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFJldmlld0J5SWQoaWQpO1xuICAgICAgICBzZXRSZXZpZXcocmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICAgIGZldGNoUmV2aWV3QnlJZChpZCk7XG4gIH0sIFtyb3V0ZXJdKTtcblxuICBpZiAoIXJldmlldykge1xuICAgIHJldHVybiA8PkxvYWRpbmcuLi48Lz47XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPntyZXZpZXcucmF0aW5nfTwvaDE+XG4gICAgICA8cD57cmV2aWV3LmJvZHl9PC9wPlxuXHRcdFx0PHA+e3Jldmlldy5hdXRob3J9PC9wPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSRVZJRVdTX1VSTCIsImdldFJldmlld3NSZXF1ZXN0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiZ2V0UmV2aWV3QnlJZFJlcXVlc3QiLCJpZCIsImdldFJldmlld3MiLCJyZXNwb25zZSIsInJlc3BvbnNlSnNvbiIsImpzb24iLCJlIiwiY29uc29sZSIsImxvZyIsImdldFJldmlld0J5SWQiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiUmV2aWV3IiwicmV2aWV3Iiwic2V0UmV2aWV3Iiwicm91dGVyIiwiZmV0Y2hSZXZpZXdCeUlkIiwicXVlcnkiLCJyYXRpbmciLCJib2R5IiwiYXV0aG9yIl0sInNvdXJjZVJvb3QiOiIifQ==