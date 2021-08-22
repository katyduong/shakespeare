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
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
const REVIEWS_URL = 'https://shakespeare.podium.com/api/reviews';

const getReviewsRequest = () => // eslint-disable-next-line no-undef
fetch(REVIEWS_URL, {
  method: 'GET',
  cache: 'no-cache',
  headers: {
    'X-API-KEY': process.env.TOKEN,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  credentials: 'include'
});

const getReviewByIdRequest = id => // eslint-disable-next-line no-undef
fetch(`${REVIEWS_URL}/${id}`, {
  method: 'GET',
  cache: 'no-cache',
  headers: {
    'X-API-KEY': process.env.TOKEN,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  credentials: 'include'
});

const getReviews = async () => {
  try {
    const response = await getReviewsRequest();
    const responseJson = await response.json();
    console.log({
      response
    });
    console.log({
      responseJson
    });
    return responseJson;
  } catch (e) {
    console.log({
      e
    });
  }
};

const getReviewById = async id => {
  try {
    const response = await getReviewByIdRequest(id);
    const responseJson = await response.json();
    console.log({
      response
    });
    console.log({
      responseJson
    });
    return responseJson;
  } catch (e) {
    console.log({
      e
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmV2aWV3cy5kZDQwNjAwMjFjM2ZjNjZiNmFkOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxXQUFXLEdBQUcsNENBQXBCOztBQUVBLE1BQU1DLGlCQUFpQixHQUFHLE1BQ3hCO0FBQ0FDLEtBQUssQ0FBQ0YsV0FBRCxFQUFjO0FBQ2pCRyxFQUFBQSxNQUFNLEVBQUUsS0FEUztBQUVqQkMsRUFBQUEsS0FBSyxFQUFFLFVBRlU7QUFHakJDLEVBQUFBLE9BQU8sRUFBRTtBQUNQLGlCQUFhQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FEbEI7QUFFUEMsSUFBQUEsTUFBTSxFQUFFLGtCQUZEO0FBR1Asb0JBQWdCO0FBSFQsR0FIUTtBQVFqQkMsRUFBQUEsV0FBVyxFQUFFO0FBUkksQ0FBZCxDQUZQOztBQWFBLE1BQU1DLG9CQUFvQixHQUFJQyxFQUFELElBQzNCO0FBQ0FWLEtBQUssQ0FBRSxHQUFFRixXQUFZLElBQUdZLEVBQUcsRUFBdEIsRUFBeUI7QUFDNUJULEVBQUFBLE1BQU0sRUFBRSxLQURvQjtBQUU1QkMsRUFBQUEsS0FBSyxFQUFFLFVBRnFCO0FBRzVCQyxFQUFBQSxPQUFPLEVBQUU7QUFDUCxpQkFBYUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLEtBRGxCO0FBRVBDLElBQUFBLE1BQU0sRUFBRSxrQkFGRDtBQUdQLG9CQUFnQjtBQUhULEdBSG1CO0FBUTVCQyxFQUFBQSxXQUFXLEVBQUU7QUFSZSxDQUF6QixDQUZQOztBQWFBLE1BQU1HLFVBQVUsR0FBRyxZQUFZO0FBQzdCLE1BQUk7QUFDRixVQUFNQyxRQUFRLEdBQUcsTUFBTWIsaUJBQWlCLEVBQXhDO0FBQ0EsVUFBTWMsWUFBWSxHQUFHLE1BQU1ELFFBQVEsQ0FBQ0UsSUFBVCxFQUEzQjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFSixNQUFBQTtBQUFGLEtBQVo7QUFDQUcsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUgsTUFBQUE7QUFBRixLQUFaO0FBQ0EsV0FBT0EsWUFBUDtBQUNELEdBTkQsQ0FNRSxPQUFPSSxDQUFQLEVBQVU7QUFDVkYsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUMsTUFBQUE7QUFBRixLQUFaO0FBQ0Q7QUFDRixDQVZEOztBQVlBLE1BQU1DLGFBQWEsR0FBRyxNQUFPUixFQUFQLElBQWM7QUFDbEMsTUFBSTtBQUNGLFVBQU1FLFFBQVEsR0FBRyxNQUFNSCxvQkFBb0IsQ0FBQ0MsRUFBRCxDQUEzQztBQUNBLFVBQU1HLFlBQVksR0FBRyxNQUFNRCxRQUFRLENBQUNFLElBQVQsRUFBM0I7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUosTUFBQUE7QUFBRixLQUFaO0FBQ0FHLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVILE1BQUFBO0FBQUYsS0FBWjtBQUNBLFdBQU9BLFlBQVA7QUFDRCxHQU5ELENBTUUsT0FBT0ksQ0FBUCxFQUFVO0FBQ1ZGLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVDLE1BQUFBO0FBQUYsS0FBWjtBQUNEO0FBQ0YsQ0FWRDs7QUFZQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBpL3Jldmlld3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUkVWSUVXU19VUkwgPSAnaHR0cHM6Ly9zaGFrZXNwZWFyZS5wb2RpdW0uY29tL2FwaS9yZXZpZXdzJztcblxuY29uc3QgZ2V0UmV2aWV3c1JlcXVlc3QgPSAoKSA9PlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZmV0Y2goUkVWSUVXU19VUkwsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdYLUFQSS1LRVknOiBwcm9jZXNzLmVudi5UT0tFTixcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gIH0pO1xuXG5jb25zdCBnZXRSZXZpZXdCeUlkUmVxdWVzdCA9IChpZCkgPT5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGZldGNoKGAke1JFVklFV1NfVVJMfS8ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdYLUFQSS1LRVknOiBwcm9jZXNzLmVudi5UT0tFTixcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gIH0pO1xuXG5jb25zdCBnZXRSZXZpZXdzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmV2aWV3c1JlcXVlc3QoKTtcbiAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coeyByZXNwb25zZSB9KTtcbiAgICBjb25zb2xlLmxvZyh7IHJlc3BvbnNlSnNvbiB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2VKc29uO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coeyBlIH0pO1xuICB9XG59O1xuXG5jb25zdCBnZXRSZXZpZXdCeUlkID0gYXN5bmMgKGlkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRSZXZpZXdCeUlkUmVxdWVzdChpZCk7XG4gICAgY29uc3QgcmVzcG9uc2VKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHsgcmVzcG9uc2UgfSk7XG4gICAgY29uc29sZS5sb2coeyByZXNwb25zZUpzb24gfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlSnNvbjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKHsgZSB9KTtcbiAgfVxufTtcblxuZXhwb3J0IHsgZ2V0UmV2aWV3QnlJZCwgZ2V0UmV2aWV3cyB9O1xuIl0sIm5hbWVzIjpbIlJFVklFV1NfVVJMIiwiZ2V0UmV2aWV3c1JlcXVlc3QiLCJmZXRjaCIsIm1ldGhvZCIsImNhY2hlIiwiaGVhZGVycyIsInByb2Nlc3MiLCJlbnYiLCJUT0tFTiIsIkFjY2VwdCIsImNyZWRlbnRpYWxzIiwiZ2V0UmV2aWV3QnlJZFJlcXVlc3QiLCJpZCIsImdldFJldmlld3MiLCJyZXNwb25zZSIsInJlc3BvbnNlSnNvbiIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZSIsImdldFJldmlld0J5SWQiXSwic291cmNlUm9vdCI6IiJ9