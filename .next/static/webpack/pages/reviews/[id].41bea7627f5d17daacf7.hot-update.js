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
    }, undefined)]
  }, void 0, true);
};

_s(Review, "NOQpTBt7RsJ0tA+zLOXXKlvvdcc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmV2aWV3cy9baWRdLjQxYmVhNzYyN2Y1ZDE3ZGFhY2Y3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1LLE1BQU0sR0FBRyxNQUFNO0FBQUE7O0FBQ25CLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQk4sK0NBQVEsQ0FBQyxJQUFELENBQXBDO0FBQ0EsUUFBTU8sTUFBTSxHQUFHTCxzREFBUyxFQUF4QjtBQUVBRCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNTyxlQUFlLEdBQUcsTUFBT0MsRUFBUCxJQUFjO0FBQ3BDLFVBQUlBLEVBQUosRUFBUTtBQUNOLGNBQU1DLFFBQVEsR0FBRyxNQUFNUCwyREFBYSxDQUFDTSxFQUFELENBQXBDO0FBQ0FILFFBQUFBLFNBQVMsQ0FBQ0ksUUFBRCxDQUFUO0FBQ0Q7QUFDRixLQUxEOztBQU1BLFVBQU07QUFBRUQsTUFBQUE7QUFBRixRQUFTRixNQUFNLENBQUNJLEtBQXRCO0FBQ0FILElBQUFBLGVBQWUsQ0FBQ0MsRUFBRCxDQUFmO0FBQ0QsR0FUUSxFQVNOLENBQUNGLE1BQUQsQ0FUTSxDQUFUOztBQVdBLE1BQUksQ0FBQ0YsTUFBTCxFQUFhO0FBQ1gsd0JBQU87QUFBQTtBQUFBLHFCQUFQO0FBQ0Q7O0FBQ0Qsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLGdCQUFLQSxNQUFNLENBQUNPO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsZ0JBQUlQLE1BQU0sQ0FBQ1E7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUEsa0JBREY7QUFNRCxDQXhCRDs7R0FBTVQ7VUFFV0Y7OztLQUZYRTtBQTBCTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcmV2aWV3cy9baWRdLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGdldFJldmlld0J5SWQgfSBmcm9tICcuLi8uLi9hcGkvcmV2aWV3cyc7XG5cbmNvbnN0IFJldmlldyA9ICgpID0+IHtcbiAgY29uc3QgW3Jldmlldywgc2V0UmV2aWV3XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUmV2aWV3QnlJZCA9IGFzeW5jIChpZCkgPT4ge1xuICAgICAgaWYgKGlkKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmV2aWV3QnlJZChpZCk7XG4gICAgICAgIHNldFJldmlldyhyZXNwb25zZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gICAgZmV0Y2hSZXZpZXdCeUlkKGlkKTtcbiAgfSwgW3JvdXRlcl0pO1xuXG4gIGlmICghcmV2aWV3KSB7XG4gICAgcmV0dXJuIDw+TG9hZGluZy4uLjwvPjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+e3Jldmlldy5yYXRpbmd9PC9oMT5cbiAgICAgIDxwPntyZXZpZXcuYm9keX08L3A+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXc7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImdldFJldmlld0J5SWQiLCJSZXZpZXciLCJyZXZpZXciLCJzZXRSZXZpZXciLCJyb3V0ZXIiLCJmZXRjaFJldmlld0J5SWQiLCJpZCIsInJlc3BvbnNlIiwicXVlcnkiLCJyYXRpbmciLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==