"use strict";
self["webpackHotUpdate_N_E"]("pages/reviews",{

/***/ "./src/api/reviews.js":
/*!****************************!*\
  !*** ./src/api/reviews.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getReviewById": function() { return /* binding */ getReviewById; },
/* harmony export */   "getReviews": function() { return /* binding */ getReviews; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmV2aWV3cy41ZDI4ODcyMjQ4ZTI0YTVmZTRmNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLFdBQVcsR0FBRyw0Q0FBcEI7O0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsTUFDeEI7QUFDQUMsS0FBSyxDQUFDRixXQUFELEVBQWM7QUFDakJHLEVBQUFBLE1BQU0sRUFBRSxLQURTO0FBRWpCQyxFQUFBQSxPQUFPLEVBQUU7QUFDUCxpQkFBYSxzQkFETjtBQUVQQyxJQUFBQSxNQUFNLEVBQUUsa0JBRkQ7QUFHUCxvQkFBZ0I7QUFIVDtBQUZRLENBQWQsQ0FGUDs7QUFXQSxNQUFNQyxvQkFBb0IsR0FBSUMsRUFBRCxJQUMzQjtBQUNBTCxLQUFLLENBQUUsR0FBRUYsV0FBWSxJQUFHTyxFQUFHLEVBQXRCLEVBQXlCO0FBQzVCSixFQUFBQSxNQUFNLEVBQUUsS0FEb0I7QUFFNUJDLEVBQUFBLE9BQU8sRUFBRTtBQUNQLGlCQUFhLHNCQUROO0FBRVBDLElBQUFBLE1BQU0sRUFBRSxrQkFGRDtBQUdQLG9CQUFnQjtBQUhUO0FBRm1CLENBQXpCLENBRlA7O0FBV0EsTUFBTUcsVUFBVSxHQUFHLFlBQVk7QUFDN0IsTUFBSTtBQUNGLFVBQU1DLFFBQVEsR0FBRyxNQUFNUixpQkFBaUIsRUFBeEM7QUFDQSxVQUFNUyxZQUFZLEdBQUcsTUFBTUQsUUFBUSxDQUFDRSxJQUFULEVBQTNCO0FBQ0EsV0FBT0QsWUFBUDtBQUNELEdBSkQsQ0FJRSxPQUFPRSxDQUFQLEVBQVU7QUFDVkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUYsTUFBQUE7QUFBRixLQUFaO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7QUFDRixDQVREOztBQVdBLE1BQU1HLGFBQWEsR0FBRyxNQUFPUixFQUFQLElBQWM7QUFDbEMsTUFBSTtBQUNGLFVBQU1FLFFBQVEsR0FBRyxNQUFNSCxvQkFBb0IsQ0FBQ0MsRUFBRCxDQUEzQztBQUNBLFVBQU1HLFlBQVksR0FBRyxNQUFNRCxRQUFRLENBQUNFLElBQVQsRUFBM0I7QUFDQSxXQUFPRCxZQUFQO0FBQ0QsR0FKRCxDQUlFLE9BQU9FLENBQVAsRUFBVTtBQUNWQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFRixNQUFBQTtBQUFGLEtBQVo7QUFDQSxXQUFPLElBQVA7QUFDRDtBQUNGLENBVEQ7O0FBV0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaS9yZXZpZXdzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJFVklFV1NfVVJMID0gJ2h0dHBzOi8vc2hha2VzcGVhcmUucG9kaXVtLmNvbS9hcGkvcmV2aWV3cyc7XG5cbmNvbnN0IGdldFJldmlld3NSZXF1ZXN0ID0gKCkgPT5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGZldGNoKFJFVklFV1NfVVJMLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAneC1hcGkta2V5JzogJ0gzVE0yOHdqTDhSNCNIVG5xaz9jJyxcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcblxuY29uc3QgZ2V0UmV2aWV3QnlJZFJlcXVlc3QgPSAoaWQpID0+XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBmZXRjaChgJHtSRVZJRVdTX1VSTH0vJHtpZH1gLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAneC1hcGkta2V5JzogJ0gzVE0yOHdqTDhSNCNIVG5xaz9jJyxcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcblxuY29uc3QgZ2V0UmV2aWV3cyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFJldmlld3NSZXF1ZXN0KCk7XG4gICAgY29uc3QgcmVzcG9uc2VKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiByZXNwb25zZUpzb247XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyh7IGUgfSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmNvbnN0IGdldFJldmlld0J5SWQgPSBhc3luYyAoaWQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFJldmlld0J5SWRSZXF1ZXN0KGlkKTtcbiAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlSnNvbjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKHsgZSB9KTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuZXhwb3J0IHsgZ2V0UmV2aWV3QnlJZCwgZ2V0UmV2aWV3cyB9O1xuIl0sIm5hbWVzIjpbIlJFVklFV1NfVVJMIiwiZ2V0UmV2aWV3c1JlcXVlc3QiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJnZXRSZXZpZXdCeUlkUmVxdWVzdCIsImlkIiwiZ2V0UmV2aWV3cyIsInJlc3BvbnNlIiwicmVzcG9uc2VKc29uIiwianNvbiIsImUiLCJjb25zb2xlIiwibG9nIiwiZ2V0UmV2aWV3QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=