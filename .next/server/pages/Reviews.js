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
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, undefined)
        }, r.id, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvcmV2aWV3cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxXQUFXLEdBQUcsNENBQXBCOztBQUVBLE1BQU1DLGlCQUFpQixHQUFHLE1BQ3hCQyxLQUFLLENBQUNGLFdBQUQsRUFBYztBQUNqQkcsRUFBQUEsTUFBTSxFQUFFLEtBRFM7QUFFakJDLEVBQUFBLE9BQU8sRUFBRTtBQUNQLGlCQUFhLHNCQUROO0FBRVBDLElBQUFBLE1BQU0sRUFBRSxrQkFGRDtBQUdQLG9CQUFnQjtBQUhUO0FBRlEsQ0FBZCxDQURQOztBQVVBLE1BQU1DLG9CQUFvQixHQUFJQyxFQUFELElBQzNCTCxLQUFLLENBQUUsR0FBRUYsV0FBWSxJQUFHTyxFQUFHLEVBQXRCLEVBQXlCO0FBQzVCSixFQUFBQSxNQUFNLEVBQUUsS0FEb0I7QUFFNUJDLEVBQUFBLE9BQU8sRUFBRTtBQUNQLGlCQUFhLHNCQUROO0FBRVBDLElBQUFBLE1BQU0sRUFBRSxrQkFGRDtBQUdQLG9CQUFnQjtBQUhUO0FBRm1CLENBQXpCLENBRFA7O0FBVUEsTUFBTUcsVUFBVSxHQUFHLFlBQVk7QUFDN0IsTUFBSTtBQUNGLFVBQU1DLFFBQVEsR0FBRyxNQUFNUixpQkFBaUIsRUFBeEM7QUFDQSxVQUFNUyxZQUFZLEdBQUcsTUFBTUQsUUFBUSxDQUFDRSxJQUFULEVBQTNCO0FBQ0EsV0FBT0QsWUFBUDtBQUNELEdBSkQsQ0FJRSxPQUFPRSxDQUFQLEVBQVU7QUFDVkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUYsTUFBQUE7QUFBRixLQUFaO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7QUFDRixDQVREOztBQVdBLE1BQU1HLGFBQWEsR0FBRyxNQUFPUixFQUFQLElBQWM7QUFDbEMsTUFBSTtBQUNGLFVBQU1FLFFBQVEsR0FBRyxNQUFNSCxvQkFBb0IsQ0FBQ0MsRUFBRCxDQUEzQztBQUNBLFVBQU1HLFlBQVksR0FBRyxNQUFNRCxRQUFRLENBQUNFLElBQVQsRUFBM0I7QUFDQSxXQUFPRCxZQUFQO0FBQ0QsR0FKRCxDQUlFLE9BQU9FLENBQVAsRUFBVTtBQUNWQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFRixNQUFBQTtBQUFGLEtBQVo7QUFDQSxXQUFPLElBQVA7QUFDRDtBQUNGLENBVEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1XLE9BQU8sR0FBRyxNQUFNO0FBQ3BCLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QlIsK0NBQVEsQ0FBQyxJQUFELENBQXRDO0FBRUFDLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1RLFlBQVksR0FBRyxZQUFZO0FBQy9CLFlBQU1qQixRQUFRLEdBQUcsTUFBTUQsd0RBQVUsRUFBakM7QUFDQWlCLE1BQUFBLFVBQVUsQ0FBQ2hCLFFBQUQsQ0FBVjtBQUNELEtBSEQ7O0FBSUFpQixJQUFBQSxZQUFZO0FBQ2IsR0FOUSxFQU1OLEVBTk0sQ0FBVDs7QUFRQSxNQUFJLENBQUNGLE9BQUwsRUFBYztBQUNaLHdCQUFPO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0Q7O0FBRUQsTUFBSUEsT0FBTyxDQUFDRyxNQUFSLEtBQW1CLENBQXZCLEVBQTBCO0FBQ3hCLHdCQUFPO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQSwyQkFDRSw4REFBQyw0REFBRDtBQUFLLFFBQUUsRUFBRSxDQUFUO0FBQVksUUFBRSxFQUFFLENBQWhCO0FBQW1CLFFBQUUsRUFBRSxDQUF2QjtBQUEwQixRQUFFLEVBQUUsQ0FBOUI7QUFBaUMsZUFBUyxFQUFDLEtBQTNDO0FBQUEsZ0JBQ0dILE9BQU8sQ0FBQ0ksR0FBUixDQUFhQyxDQUFELElBQU87QUFDbEIsY0FBTUMsSUFBSSxHQUFHLElBQUlDLElBQUosQ0FBU0YsQ0FBQyxDQUFDRyxZQUFYLENBQWI7QUFDQSw0QkFDRSw4REFBQyw0REFBRDtBQUFBLGlDQUNFLDhEQUFDLDZEQUFEO0FBQUEsb0NBQ0UsOERBQUMsb0VBQUQ7QUFBYSxnQkFBRSxFQUFDLElBQWhCO0FBQXFCLHVCQUFTLEVBQUMsb0JBQS9CO0FBQUEseUJBQ0dILENBQUMsQ0FBQ0ksTUFETCxFQUVHLElBRkgsZUFHRSw4REFBQywyREFBRDtBQUNFLHNCQUFNLEVBQUVKLENBQUMsQ0FBQ0ksTUFEWjtBQUVFLDZCQUFhLEVBQUMsTUFGaEI7QUFHRSwyQkFBVyxFQUFDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFVRSw4REFBQyxrRUFBRDtBQUFBLHNDQUNFLDhEQUFDLG1FQUFEO0FBQUEsMEJBQWFKLENBQUMsQ0FBQ0s7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBRUUsOERBQUMsa0VBQUQ7QUFBQSwwQkFDR0wsQ0FBQyxDQUFDTSxJQUFGLENBQU9SLE1BQVAsR0FBZ0IsRUFBaEIsR0FDSSxHQUFFRSxDQUFDLENBQUNNLElBQUYsQ0FBT0MsU0FBUCxDQUFpQixDQUFqQixFQUFvQixFQUFwQixDQUF3QixLQUQ5QixHQUVHUCxDQUFDLENBQUNNO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRixlQU9FLDhEQUFDLGtFQUFEO0FBQVcsb0JBQUksRUFBRyxZQUFXTixDQUFDLENBQUN0QixFQUFHLEVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFWRixlQW1CRSw4REFBQyxvRUFBRDtBQUFBLHFDQUNFO0FBQU8seUJBQVMsRUFBQyxZQUFqQjtBQUFBLDRDQUNnQnVCLElBQUksQ0FBQ08sa0JBQUwsRUFEaEIsRUFDMkMsR0FEM0MsRUFFR1AsSUFBSSxDQUFDUSxrQkFBTCxFQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQVVULENBQUMsQ0FBQ3RCLEVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQThCRCxPQWhDQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF1Q0QsQ0ExREQ7O0FBNERBLGlFQUFlZ0IsT0FBZjs7Ozs7Ozs7OztBQ25FQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGFrZXNwZWFyZS8uL3NyYy9hcGkvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly9zaGFrZXNwZWFyZS8uL3NyYy9wYWdlcy9yZXZpZXdzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly9zaGFrZXNwZWFyZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc2hha2VzcGVhcmUvZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiIiwid2VicGFjazovL3NoYWtlc3BlYXJlL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0NvbFwiIiwid2VicGFjazovL3NoYWtlc3BlYXJlL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiIiwid2VicGFjazovL3NoYWtlc3BlYXJlL2V4dGVybmFsIFwicmVhY3Qtc3Rhci1yYXRpbmdzXCIiLCJ3ZWJwYWNrOi8vc2hha2VzcGVhcmUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSRVZJRVdTX1VSTCA9ICdodHRwczovL3NoYWtlc3BlYXJlLnBvZGl1bS5jb20vYXBpL3Jldmlld3MnO1xuXG5jb25zdCBnZXRSZXZpZXdzUmVxdWVzdCA9ICgpID0+XG4gIGZldGNoKFJFVklFV1NfVVJMLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAneC1hcGkta2V5JzogJ0gzVE0yOHdqTDhSNCNIVG5xaz9jJyxcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcblxuY29uc3QgZ2V0UmV2aWV3QnlJZFJlcXVlc3QgPSAoaWQpID0+XG4gIGZldGNoKGAke1JFVklFV1NfVVJMfS8ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICd4LWFwaS1rZXknOiAnSDNUTTI4d2pMOFI0I0hUbnFrP2MnLFxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuXG5jb25zdCBnZXRSZXZpZXdzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmV2aWV3c1JlcXVlc3QoKTtcbiAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlSnNvbjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKHsgZSB9KTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuY29uc3QgZ2V0UmV2aWV3QnlJZCA9IGFzeW5jIChpZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmV2aWV3QnlJZFJlcXVlc3QoaWQpO1xuICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gcmVzcG9uc2VKc29uO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coeyBlIH0pO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5leHBvcnQgeyBnZXRSZXZpZXdCeUlkLCBnZXRSZXZpZXdzIH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJztcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xuaW1wb3J0IFN0YXJSYXRpbmdzIGZyb20gJ3JlYWN0LXN0YXItcmF0aW5ncyc7XG5pbXBvcnQgeyBnZXRSZXZpZXdzIH0gZnJvbSAnLi4vLi4vYXBpL3Jldmlld3MnO1xuXG5jb25zdCBSZXZpZXdzID0gKCkgPT4ge1xuICBjb25zdCBbcmV2aWV3cywgc2V0UmV2aWV3c10gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUmV2aWV3cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmV2aWV3cygpO1xuICAgICAgc2V0UmV2aWV3cyhyZXNwb25zZSk7XG4gICAgfTtcbiAgICBmZXRjaFJldmlld3MoKTtcbiAgfSwgW10pO1xuXG4gIGlmICghcmV2aWV3cykge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICBpZiAocmV2aWV3cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5ObyBSZXZpZXdzIEF2YWlsYWJsZTwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgIDxSb3cgeHM9ezF9IG1kPXsyfSBsZz17M30geGw9ezR9IGNsYXNzTmFtZT1cImctNFwiPlxuICAgICAgICB7cmV2aWV3cy5tYXAoKHIpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoci5wdWJsaXNoX2RhdGUpO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q29sIGtleT17ci5pZH0+XG4gICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlciBhcz1cImg1XCIgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICB7ci5yYXRpbmd9XG4gICAgICAgICAgICAgICAgICB7JyAgJ31cbiAgICAgICAgICAgICAgICAgIDxTdGFyUmF0aW5nc1xuICAgICAgICAgICAgICAgICAgICByYXRpbmc9e3IucmF0aW5nfVxuICAgICAgICAgICAgICAgICAgICBzdGFyRGltZW5zaW9uPVwiMTZweFwiXG4gICAgICAgICAgICAgICAgICAgIHN0YXJTcGFjaW5nPVwiMnB4XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+e3IuYXV0aG9yfTwvQ2FyZC5UaXRsZT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XG4gICAgICAgICAgICAgICAgICAgIHtyLmJvZHkubGVuZ3RoID4gMzBcbiAgICAgICAgICAgICAgICAgICAgICA/IGAke3IuYm9keS5zdWJzdHJpbmcoMCwgMzApfS4uLmBcbiAgICAgICAgICAgICAgICAgICAgICA6IHIuYm9keX1cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxuICAgICAgICAgICAgICAgICAgPENhcmQuTGluayBocmVmPXtgL3Jldmlld3MvJHtyLmlkfWB9PlJlYWQgbW9yZTwvQ2FyZC5MaW5rPlxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgIDxDYXJkLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIFB1Ymxpc2hlZCBvbiB7ZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKX17JyAnfVxuICAgICAgICAgICAgICAgICAgICB7ZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgPC9DYXJkLkZvb3Rlcj5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1Jvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJldmlld3M7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQ2FyZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQ29sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3Rhci1yYXRpbmdzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUkVWSUVXU19VUkwiLCJnZXRSZXZpZXdzUmVxdWVzdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImdldFJldmlld0J5SWRSZXF1ZXN0IiwiaWQiLCJnZXRSZXZpZXdzIiwicmVzcG9uc2UiLCJyZXNwb25zZUpzb24iLCJqc29uIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRSZXZpZXdCeUlkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNhcmQiLCJSb3ciLCJDb2wiLCJTdGFyUmF0aW5ncyIsIlJldmlld3MiLCJyZXZpZXdzIiwic2V0UmV2aWV3cyIsImZldGNoUmV2aWV3cyIsImxlbmd0aCIsIm1hcCIsInIiLCJkYXRlIiwiRGF0ZSIsInB1Ymxpc2hfZGF0ZSIsInJhdGluZyIsImF1dGhvciIsImJvZHkiLCJzdWJzdHJpbmciLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ0b0xvY2FsZVRpbWVTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9