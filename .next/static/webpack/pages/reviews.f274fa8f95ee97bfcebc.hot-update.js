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
          href: {
            pathname: `/reviews/${r.id}`,
            query: {
              id: r.id
            }
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: ["Go to pages/reviews/", r.id, ".js"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmV2aWV3cy5mMjc0ZmE4Zjk1ZWU5N2JmY2ViYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNSyxPQUFPLEdBQUcsTUFBTTtBQUFBOztBQUNwQixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JOLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUVBQyxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxVQUFNTSxZQUFZLEdBQUcsWUFBWTtBQUMvQixZQUFNQyxRQUFRLEdBQUcsTUFBTUwsd0RBQVUsRUFBakM7QUFDQUcsTUFBQUEsVUFBVSxDQUFDRSxRQUFELENBQVY7QUFDRCxLQUhEOztBQUlBRCxJQUFBQSxZQUFZO0FBQ2IsR0FOUSxFQU1OLEVBTk0sQ0FBVDs7QUFRQSxNQUFJLENBQUNGLE9BQUQsSUFBWUEsT0FBTyxDQUFDSSxNQUFSLEtBQW1CLENBQW5DLEVBQXNDO0FBQ3BDLHdCQUFPO0FBQUE7QUFBQSxxQkFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUEsY0FDR0osT0FBTyxDQUFDSyxHQUFSLENBQWFDLENBQUQsSUFBTztBQUNsQiwwQkFDRTtBQUFBLCtCQUNFLDhEQUFDLGtEQUFEO0FBQ0UsY0FBSSxFQUFFO0FBQ0pDLFlBQUFBLFFBQVEsRUFBRyxZQUFXRCxDQUFDLENBQUNFLEVBQUcsRUFEdkI7QUFFSkMsWUFBQUEsS0FBSyxFQUFFO0FBQUVELGNBQUFBLEVBQUUsRUFBRUYsQ0FBQyxDQUFDRTtBQUFSO0FBRkgsV0FEUjtBQUFBLGlDQU1FO0FBQUEsK0NBQXdCRixDQUFDLENBQUNFLEVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUFTRixDQUFDLENBQUNFLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQVlELEtBYkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFrQkQsQ0FqQ0Q7O0dBQU1UOztLQUFBQTtBQW1DTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcmV2aWV3cy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgZ2V0UmV2aWV3cyB9IGZyb20gJy4uLy4uL2FwaS9yZXZpZXdzJztcblxuY29uc3QgUmV2aWV3cyA9ICgpID0+IHtcbiAgY29uc3QgW3Jldmlld3MsIHNldFJldmlld3NdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hSZXZpZXdzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRSZXZpZXdzKCk7XG4gICAgICBzZXRSZXZpZXdzKHJlc3BvbnNlKTtcbiAgICB9O1xuICAgIGZldGNoUmV2aWV3cygpO1xuICB9LCBbXSk7XG5cbiAgaWYgKCFyZXZpZXdzIHx8IHJldmlld3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIDw+Tm8gUmV2aWV3czwvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge3Jldmlld3MubWFwKChyKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGxpIGtleT17ci5pZH0+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPXt7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IGAvcmV2aWV3cy8ke3IuaWR9YCxcbiAgICAgICAgICAgICAgICBxdWVyeTogeyBpZDogci5pZCB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YT5HbyB0byBwYWdlcy9yZXZpZXdzL3tyLmlkfS5qczwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJldmlld3M7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJnZXRSZXZpZXdzIiwiUmV2aWV3cyIsInJldmlld3MiLCJzZXRSZXZpZXdzIiwiZmV0Y2hSZXZpZXdzIiwicmVzcG9uc2UiLCJsZW5ndGgiLCJtYXAiLCJyIiwicGF0aG5hbWUiLCJpZCIsInF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==