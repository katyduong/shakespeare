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
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const fetchReviews = async () => {
      const response = await (0,_api_reviews__WEBPACK_IMPORTED_MODULE_3__.getReviews)();
      setReviews(response);
    };

    fetchReviews();
  }, []);

  if (!reviews || reviews.length === 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: "No Reviews"
    }, void 0, false);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    children: reviews.map(r => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: `/reviews/${r.id}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "Go to pages/reviews/[id].js"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, undefined)
      }, r.id, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

_s(Reviews, "FPrwLLWcZBXrtWYcIRYMKBd2Ocw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmV2aWV3cy4xNGJhZDI5OTA4YjdlZDAwYjk5NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNSyxPQUFPLEdBQUcsTUFBTTtBQUFBOztBQUNwQixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JOLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUVBQyxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNTSxZQUFZLEdBQUcsWUFBWTtBQUMvQixZQUFNQyxRQUFRLEdBQUcsTUFBTUwsd0RBQVUsRUFBakM7QUFDQUcsTUFBQUEsVUFBVSxDQUFDRSxRQUFELENBQVY7QUFDRCxLQUhEOztBQUlBRCxJQUFBQSxZQUFZO0FBQ2IsR0FOUSxFQU1OLEVBTk0sQ0FBVDs7QUFRQSxNQUFJLENBQUNGLE9BQUQsSUFBWUEsT0FBTyxDQUFDSSxNQUFSLEtBQW1CLENBQW5DLEVBQXNDO0FBQ3BDLHdCQUFPO0FBQUE7QUFBQSxxQkFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUEsY0FDR0osT0FBTyxDQUFDSyxHQUFSLENBQWFDLENBQUQsSUFBTztBQUNsQiwwQkFDRTtBQUFBLCtCQUNFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFHLFlBQVdBLENBQUMsQ0FBQ0MsRUFBRyxFQUE3QjtBQUFBLGlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQVNELENBQUMsQ0FBQ0MsRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBT0QsS0FSQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWFELENBNUJEOztHQUFNUjs7S0FBQUE7QUE4Qk4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Jldmlld3MvaW5kZXguanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IGdldFJldmlld3MgfSBmcm9tICcuLi8uLi9hcGkvcmV2aWV3cyc7XG5cbmNvbnN0IFJldmlld3MgPSAoKSA9PiB7XG4gIGNvbnN0IFtyZXZpZXdzLCBzZXRSZXZpZXdzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUmV2aWV3cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmV2aWV3cygpO1xuICAgICAgc2V0UmV2aWV3cyhyZXNwb25zZSk7XG4gICAgfTtcbiAgICBmZXRjaFJldmlld3MoKTtcbiAgfSwgW10pO1xuXG4gIGlmICghcmV2aWV3cyB8fCByZXZpZXdzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiA8Pk5vIFJldmlld3M8Lz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIHtyZXZpZXdzLm1hcCgocikgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxsaSBrZXk9e3IuaWR9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9yZXZpZXdzLyR7ci5pZH1gfT5cbiAgICAgICAgICAgICAgPGE+R28gdG8gcGFnZXMvcmV2aWV3cy9baWRdLmpzPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L3VsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3cztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsImdldFJldmlld3MiLCJSZXZpZXdzIiwicmV2aWV3cyIsInNldFJldmlld3MiLCJmZXRjaFJldmlld3MiLCJyZXNwb25zZSIsImxlbmd0aCIsIm1hcCIsInIiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=