"use strict";
self["webpackHotUpdate_N_E"]("pages/reviews",{

/***/ "./src/pages/reviews/index.jsx":
/*!*************************************!*\
  !*** ./src/pages/reviews/index.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_reviews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/reviews */ "./src/api/reviews.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/mnt/c/Users/dpd_9/repos/shakespeare/src/pages/reviews/index.jsx",
    _s = $RefreshSig$();





const Reviews = () => {
  _s();

  const {
    0: reviews,
    1: setReviews
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const fetchReviews = async () => {
      const response = await (0,_api_reviews__WEBPACK_IMPORTED_MODULE_3__.getReviews)();
      setReviews(response);
    };

    fetchReviews();
  }, []);

  if (!reviews) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: "Loading..."
    }, void 0, false);
  }

  if (reviews.length === 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: "No Reviews"
    }, void 0, false);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    children: reviews.map(r => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: {
            pathname: `/reviews/${r.id}`,
            query: {
              id: r.id
            }
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: [r.rating, " review ", r.id]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, undefined)
      }, r.id, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

_s(Reviews, "wDktPw+cZqeIVQQbuoLFNcpcag4=");

_c = Reviews;
/* harmony default export */ __webpack_exports__["default"] = (Reviews);

var _c;

$RefreshReg$(_c, "Reviews");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmV2aWV3cy42OThmOTAzODE4MTYwMDRjMWIzZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNSyxPQUFPLEdBQUcsTUFBTTtBQUFBOztBQUNwQixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JOLCtDQUFRLENBQUMsSUFBRCxDQUF0QztBQUVBQyxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNTSxZQUFZLEdBQUcsWUFBWTtBQUMvQixZQUFNQyxRQUFRLEdBQUcsTUFBTUwsd0RBQVUsRUFBakM7QUFDQUcsTUFBQUEsVUFBVSxDQUFDRSxRQUFELENBQVY7QUFDRCxLQUhEOztBQUlBRCxJQUFBQSxZQUFZO0FBQ2IsR0FOUSxFQU1OLEVBTk0sQ0FBVDs7QUFRQSxNQUFJLENBQUNGLE9BQUwsRUFBYztBQUNaLHdCQUFPO0FBQUE7QUFBQSxxQkFBUDtBQUNEOztBQUVELE1BQUlBLE9BQU8sQ0FBQ0ksTUFBUixLQUFtQixDQUF2QixFQUEwQjtBQUN4Qix3QkFBTztBQUFBO0FBQUEscUJBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLGNBQ0dKLE9BQU8sQ0FBQ0ssR0FBUixDQUFhQyxDQUFELElBQU87QUFDbEIsMEJBQ0U7QUFBQSwrQkFDRSw4REFBQyxrREFBRDtBQUNFLGNBQUksRUFBRTtBQUNKQyxZQUFBQSxRQUFRLEVBQUcsWUFBV0QsQ0FBQyxDQUFDRSxFQUFHLEVBRHZCO0FBRUpDLFlBQUFBLEtBQUssRUFBRTtBQUFFRCxjQUFBQSxFQUFFLEVBQUVGLENBQUMsQ0FBQ0U7QUFBUjtBQUZILFdBRFI7QUFBQSxpQ0FNRTtBQUFBLHVCQUFJRixDQUFDLENBQUNJLE1BQU4sY0FBc0JKLENBQUMsQ0FBQ0UsRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQVNGLENBQUMsQ0FBQ0UsRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBWUQsS0FiQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWtCRCxDQXJDRDs7R0FBTVQ7O0tBQUFBO0FBdUNOLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9yZXZpZXdzL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBnZXRSZXZpZXdzIH0gZnJvbSAnLi4vLi4vYXBpL3Jldmlld3MnO1xuXG5jb25zdCBSZXZpZXdzID0gKCkgPT4ge1xuICBjb25zdCBbcmV2aWV3cywgc2V0UmV2aWV3c10gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUmV2aWV3cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmV2aWV3cygpO1xuICAgICAgc2V0UmV2aWV3cyhyZXNwb25zZSk7XG4gICAgfTtcbiAgICBmZXRjaFJldmlld3MoKTtcbiAgfSwgW10pO1xuXG4gIGlmICghcmV2aWV3cykge1xuICAgIHJldHVybiA8PkxvYWRpbmcuLi48Lz47XG4gIH1cblxuICBpZiAocmV2aWV3cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gPD5ObyBSZXZpZXdzPC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICB7cmV2aWV3cy5tYXAoKHIpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bGkga2V5PXtyLmlkfT5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9e3tcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogYC9yZXZpZXdzLyR7ci5pZH1gLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGlkOiByLmlkIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxhPntyLnJhdGluZ30gcmV2aWV3IHtyLmlkfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJldmlld3M7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJnZXRSZXZpZXdzIiwiUmV2aWV3cyIsInJldmlld3MiLCJzZXRSZXZpZXdzIiwiZmV0Y2hSZXZpZXdzIiwicmVzcG9uc2UiLCJsZW5ndGgiLCJtYXAiLCJyIiwicGF0aG5hbWUiLCJpZCIsInF1ZXJ5IiwicmF0aW5nIl0sInNvdXJjZVJvb3QiOiIifQ==