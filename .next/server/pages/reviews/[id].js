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
          className: "display-4 font-italic",
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
          className: "blog-post-meta font-italic",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtBQUFJLG1CQUFTLEVBQUMsdUJBQWQ7QUFBQSxxQkFDR1AsTUFBTSxDQUFDUSxNQURWLEVBRUcsSUFGSCxlQUdFLDhEQUFDLDJEQUFEO0FBQ0Usa0JBQU0sRUFBRVIsTUFBTSxDQUFDUSxNQURqQjtBQUVFLHlCQUFhLEVBQUMsTUFGaEI7QUFHRSx1QkFBVyxFQUFDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFVRTtBQUFHLG1CQUFTLEVBQUMsNEJBQWI7QUFBQSxxQkFDR0gsSUFBSSxDQUFDSSxrQkFBTCxFQURILE9BQytCSixJQUFJLENBQUNLLGtCQUFMLEVBRC9CLFNBQzZELEdBRDdELEVBRUdWLE1BQU0sQ0FBQ1csTUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkYsZUFjRTtBQUFHLG1CQUFTLEVBQUMsV0FBYjtBQUFBLG9CQUEwQlgsTUFBTSxDQUFDWTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFzQkQsQ0ExQ0Q7O0FBNENBLGlFQUFlYixNQUFmOzs7Ozs7Ozs7O0FDakRBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hha2VzcGVhcmUvLi9zcmMvYXBpL3Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vc2hha2VzcGVhcmUvLi9zcmMvcGFnZXMvcmV2aWV3cy9baWRdLmpzeCIsIndlYnBhY2s6Ly9zaGFrZXNwZWFyZS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vc2hha2VzcGVhcmUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NoYWtlc3BlYXJlL2V4dGVybmFsIFwicmVhY3Qtc3Rhci1yYXRpbmdzXCIiLCJ3ZWJwYWNrOi8vc2hha2VzcGVhcmUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSRVZJRVdTX1VSTCA9ICdodHRwczovL3NoYWtlc3BlYXJlLnBvZGl1bS5jb20vYXBpL3Jldmlld3MnO1xuXG5jb25zdCBnZXRSZXZpZXdzUmVxdWVzdCA9ICgpID0+XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBmZXRjaChSRVZJRVdTX1VSTCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ3gtYXBpLWtleSc6ICdIM1RNMjh3akw4UjQjSFRucWs/YycsXG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG5cbmNvbnN0IGdldFJldmlld0J5SWRSZXF1ZXN0ID0gKGlkKSA9PlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZmV0Y2goYCR7UkVWSUVXU19VUkx9LyR7aWR9YCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ3gtYXBpLWtleSc6ICdIM1RNMjh3akw4UjQjSFRucWs/YycsXG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG5cbmNvbnN0IGdldFJldmlld3MgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRSZXZpZXdzUmVxdWVzdCgpO1xuICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gcmVzcG9uc2VKc29uO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coeyBlIH0pO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5jb25zdCBnZXRSZXZpZXdCeUlkID0gYXN5bmMgKGlkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRSZXZpZXdCeUlkUmVxdWVzdChpZCk7XG4gICAgY29uc3QgcmVzcG9uc2VKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiByZXNwb25zZUpzb247XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyh7IGUgfSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGdldFJldmlld0J5SWQsIGdldFJldmlld3MgfTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFN0YXJSYXRpbmdzIGZyb20gJ3JlYWN0LXN0YXItcmF0aW5ncyc7XG5pbXBvcnQgeyBnZXRSZXZpZXdCeUlkIH0gZnJvbSAnLi4vLi4vYXBpL3Jldmlld3MnO1xuXG5jb25zdCBSZXZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IFtyZXZpZXcsIHNldFJldmlld10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFJldmlld0J5SWQgPSBhc3luYyAoaWQpID0+IHtcbiAgICAgIGlmIChpZCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFJldmlld0J5SWQoaWQpO1xuICAgICAgICBzZXRSZXZpZXcocmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICAgIGZldGNoUmV2aWV3QnlJZChpZCk7XG4gIH0sIFtyb3V0ZXJdKTtcblxuICBpZiAoIXJldmlldykge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHJldmlldy5wdWJsaXNoX2RhdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uIHAtMyBwLW1kLTUgcm91bmRlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTBcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00IGZvbnQtaXRhbGljXCI+XG4gICAgICAgICAgICB7cmV2aWV3LnJhdGluZ31cbiAgICAgICAgICAgIHsnICAnfVxuICAgICAgICAgICAgPFN0YXJSYXRpbmdzXG4gICAgICAgICAgICAgIHJhdGluZz17cmV2aWV3LnJhdGluZ31cbiAgICAgICAgICAgICAgc3RhckRpbWVuc2lvbj1cIjQwcHhcIlxuICAgICAgICAgICAgICBzdGFyU3BhY2luZz1cIjJweFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmxvZy1wb3N0LW1ldGEgZm9udC1pdGFsaWNcIj5cbiAgICAgICAgICAgIHtkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpfSB7ZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKX0gYnl7JyAnfVxuICAgICAgICAgICAge3Jldmlldy5hdXRob3J9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWQgbXktM1wiPntyZXZpZXcuYm9keX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdGFyLXJhdGluZ3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSRVZJRVdTX1VSTCIsImdldFJldmlld3NSZXF1ZXN0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiZ2V0UmV2aWV3QnlJZFJlcXVlc3QiLCJpZCIsImdldFJldmlld3MiLCJyZXNwb25zZSIsInJlc3BvbnNlSnNvbiIsImpzb24iLCJlIiwiY29uc29sZSIsImxvZyIsImdldFJldmlld0J5SWQiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiU3RhclJhdGluZ3MiLCJSZXZpZXciLCJyZXZpZXciLCJzZXRSZXZpZXciLCJyb3V0ZXIiLCJmZXRjaFJldmlld0J5SWQiLCJxdWVyeSIsImRhdGUiLCJEYXRlIiwicHVibGlzaF9kYXRlIiwicmF0aW5nIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiYXV0aG9yIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=