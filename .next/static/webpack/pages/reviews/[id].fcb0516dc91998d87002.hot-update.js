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
/* harmony import */ var _api_reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/reviews */ "./src/api/reviews.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/mnt/c/Users/dpd_9/repos/shakespeare/src/pages/reviews/[id].jsx",
    _s = $RefreshSig$();




const Review = ({
  id
}) => {
  _s();

  const {
    0: review,
    1: setReview
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const fetchReviewById = async id => {
      const response = await (0,_api_reviews__WEBPACK_IMPORTED_MODULE_2__.getReviewById)();
      setReview(response);
    };

    fetchReviewById(id);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: review.rating
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: review.body
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

_s(Review, "6RTmP1Y0RCq3Ixj//ku67V/SHwg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmV2aWV3cy9baWRdLmZjYjA1MTZkYzkxOTk4ZDg3MDAyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUksTUFBTSxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFFQUMsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTU0sZUFBZSxHQUFHLE1BQU9ILEVBQVAsSUFBYztBQUNwQyxZQUFNSSxRQUFRLEdBQUcsTUFBTU4sMkRBQWEsRUFBcEM7QUFDQUksTUFBQUEsU0FBUyxDQUFDRSxRQUFELENBQVQ7QUFDRCxLQUhEOztBQUlBRCxJQUFBQSxlQUFlLENBQUNILEVBQUQsQ0FBZjtBQUNELEdBTlEsRUFNTixFQU5NLENBQVQ7QUFPQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtDLE1BQU0sQ0FBQ0k7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSxnQkFBSUosTUFBTSxDQUFDSztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQSxrQkFERjtBQU1ELENBaEJEOztHQUFNUDs7S0FBQUE7QUFrQk4sK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Jldmlld3MvW2lkXS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRSZXZpZXdCeUlkIH0gZnJvbSAnLi4vLi4vYXBpL3Jldmlld3MnO1xuXG5jb25zdCBSZXZpZXcgPSAoeyBpZCB9KSA9PiB7XG4gIGNvbnN0IFtyZXZpZXcsIHNldFJldmlld10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFJldmlld0J5SWQgPSBhc3luYyAoaWQpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmV2aWV3QnlJZCgpO1xuICAgICAgc2V0UmV2aWV3KHJlc3BvbnNlKTtcbiAgICB9O1xuICAgIGZldGNoUmV2aWV3QnlJZChpZCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPntyZXZpZXcucmF0aW5nfTwvaDE+XG4gICAgICA8cD57cmV2aWV3LmJvZHl9PC9wPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRSZXZpZXdCeUlkIiwiUmV2aWV3IiwiaWQiLCJyZXZpZXciLCJzZXRSZXZpZXciLCJmZXRjaFJldmlld0J5SWQiLCJyZXNwb25zZSIsInJhdGluZyIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9