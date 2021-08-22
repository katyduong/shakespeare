"use strict";
self["webpackHotUpdate_N_E"]("pages/reviews/[id]",{

/***/ "./src/pages/reviews/[id].jsx":
/*!************************************!*\
  !*** ./src/pages/reviews/[id].jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_reviews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/reviews */ "./src/api/reviews.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/mnt/c/Users/dpd_9/repos/shakespeare/src/pages/reviews/[id].jsx",
    _s = $RefreshSig$();





const Review = () => {
  _s();

  const {
    0: review,
    1: setReview
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const fetchReviewById = async r => {
      console.log({
        r
      });
      const id = await r.query.id;
      const response = await (0,_api_reviews__WEBPACK_IMPORTED_MODULE_3__.getReviewById)(id);
      setReview(response);
    };

    fetchReviewById(router);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: review.rating
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: review.body
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

_s(Review, "nXibIBki5zp7js6pFZlLCMWce00=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = Review;
/* harmony default export */ __webpack_exports__["default"] = (Review);

var _c;

$RefreshReg$(_c, "Review");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmV2aWV3cy9baWRdLjI2ODEwZGY5NzQzMDg5MzI4ZTdiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1LLE1BQU0sR0FBRyxNQUFNO0FBQUE7O0FBQ25CLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQk4sK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQ0EsUUFBTU8sTUFBTSxHQUFHTCxzREFBUyxFQUF4QjtBQUVBRCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNTyxlQUFlLEdBQUcsTUFBT0MsQ0FBUCxJQUFhO0FBQ3RDQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDRixRQUFBQTtBQUFELE9BQVo7QUFDRyxZQUFNRyxFQUFFLEdBQUcsTUFBTUgsQ0FBQyxDQUFDSSxLQUFGLENBQVFELEVBQXpCO0FBQ0EsWUFBTUUsUUFBUSxHQUFHLE1BQU1YLDJEQUFhLENBQUNTLEVBQUQsQ0FBcEM7QUFDQU4sTUFBQUEsU0FBUyxDQUFDUSxRQUFELENBQVQ7QUFDRCxLQUxEOztBQU1BTixJQUFBQSxlQUFlLENBQUNELE1BQUQsQ0FBZjtBQUNELEdBUlEsRUFRTixFQVJNLENBQVQ7QUFTQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtGLE1BQU0sQ0FBQ1U7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSxnQkFBSVYsTUFBTSxDQUFDVztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQSxrQkFERjtBQU1ELENBbkJEOztHQUFNWjtVQUVXRjs7O0tBRlhFO0FBcUJOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9yZXZpZXdzL1tpZF0uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgZ2V0UmV2aWV3QnlJZCB9IGZyb20gJy4uLy4uL2FwaS9yZXZpZXdzJztcblxuY29uc3QgUmV2aWV3ID0gKCkgPT4ge1xuICBjb25zdCBbcmV2aWV3LCBzZXRSZXZpZXddID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUmV2aWV3QnlJZCA9IGFzeW5jIChyKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyh7cn0pO1xuICAgICAgY29uc3QgaWQgPSBhd2FpdCByLnF1ZXJ5LmlkO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRSZXZpZXdCeUlkKGlkKTtcbiAgICAgIHNldFJldmlldyhyZXNwb25zZSk7XG4gICAgfTtcbiAgICBmZXRjaFJldmlld0J5SWQocm91dGVyKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+e3Jldmlldy5yYXRpbmd9PC9oMT5cbiAgICAgIDxwPntyZXZpZXcuYm9keX08L3A+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXc7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImdldFJldmlld0J5SWQiLCJSZXZpZXciLCJyZXZpZXciLCJzZXRSZXZpZXciLCJyb3V0ZXIiLCJmZXRjaFJldmlld0J5SWQiLCJyIiwiY29uc29sZSIsImxvZyIsImlkIiwicXVlcnkiLCJyZXNwb25zZSIsInJhdGluZyIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9