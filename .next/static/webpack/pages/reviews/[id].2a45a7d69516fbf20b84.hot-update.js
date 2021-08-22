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
  console.log({
    router
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const fetchReviewById = async id => {
      const response = await (0,_api_reviews__WEBPACK_IMPORTED_MODULE_3__.getReviewById)(id);
      setReview(response);
    };

    fetchReviewById(router.query.id);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: review.rating
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: review.body
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmV2aWV3cy9baWRdLjJhNDVhN2Q2OTUxNmZiZjIwYjg0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1LLE1BQU0sR0FBRyxNQUFNO0FBQUE7O0FBQ25CLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQk4sK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQ0EsUUFBTU8sTUFBTSxHQUFHTCxzREFBUyxFQUF4QjtBQUNBTSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDRixJQUFBQTtBQUFELEdBQVo7QUFFQU4sRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTVMsZUFBZSxHQUFHLE1BQU9DLEVBQVAsSUFBYztBQUNwQyxZQUFNQyxRQUFRLEdBQUcsTUFBTVQsMkRBQWEsQ0FBQ1EsRUFBRCxDQUFwQztBQUNBTCxNQUFBQSxTQUFTLENBQUNNLFFBQUQsQ0FBVDtBQUNELEtBSEQ7O0FBSUFGLElBQUFBLGVBQWUsQ0FBQ0gsTUFBTSxDQUFDTSxLQUFQLENBQWFGLEVBQWQsQ0FBZjtBQUNELEdBTlEsRUFNTixFQU5NLENBQVQ7QUFPQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtOLE1BQU0sQ0FBQ1M7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSxnQkFBSVQsTUFBTSxDQUFDVTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQSxrQkFERjtBQU1ELENBbEJEOztHQUFNWDtVQUVXRjs7O0tBRlhFO0FBb0JOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9yZXZpZXdzL1tpZF0uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgZ2V0UmV2aWV3QnlJZCB9IGZyb20gJy4uLy4uL2FwaS9yZXZpZXdzJztcblxuY29uc3QgUmV2aWV3ID0gKCkgPT4ge1xuICBjb25zdCBbcmV2aWV3LCBzZXRSZXZpZXddID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc29sZS5sb2coe3JvdXRlcn0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hSZXZpZXdCeUlkID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFJldmlld0J5SWQoaWQpO1xuICAgICAgc2V0UmV2aWV3KHJlc3BvbnNlKTtcbiAgICB9O1xuICAgIGZldGNoUmV2aWV3QnlJZChyb3V0ZXIucXVlcnkuaWQpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT57cmV2aWV3LnJhdGluZ308L2gxPlxuICAgICAgPHA+e3Jldmlldy5ib2R5fTwvcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJldmlldztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiZ2V0UmV2aWV3QnlJZCIsIlJldmlldyIsInJldmlldyIsInNldFJldmlldyIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaFJldmlld0J5SWQiLCJpZCIsInJlc3BvbnNlIiwicXVlcnkiLCJyYXRpbmciLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==