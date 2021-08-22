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
  }
});

const getReviewByIdRequest = id => // eslint-disable-next-line no-undef
fetch(`${REVIEWS_URL}/${id}`, {
  method: 'GET',
  cache: 'no-cache',
  headers: {
    'X-API-KEY': process.env.TOKEN,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmV2aWV3cy44OWI1YjM4MjAyY2I0OTQ4N2M5OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxXQUFXLEdBQUcsNENBQXBCOztBQUVBLE1BQU1DLGlCQUFpQixHQUFHLE1BQ3hCO0FBQ0FDLEtBQUssQ0FBQ0YsV0FBRCxFQUFjO0FBQ2pCRyxFQUFBQSxNQUFNLEVBQUUsS0FEUztBQUVqQkMsRUFBQUEsS0FBSyxFQUFFLFVBRlU7QUFHakJDLEVBQUFBLE9BQU8sRUFBRTtBQUNQLGlCQUFhQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FEbEI7QUFFUEMsSUFBQUEsTUFBTSxFQUFFLGtCQUZEO0FBR1Asb0JBQWdCO0FBSFQ7QUFIUSxDQUFkLENBRlA7O0FBWUEsTUFBTUMsb0JBQW9CLEdBQUlDLEVBQUQsSUFDM0I7QUFDQVQsS0FBSyxDQUFFLEdBQUVGLFdBQVksSUFBR1csRUFBRyxFQUF0QixFQUF5QjtBQUM1QlIsRUFBQUEsTUFBTSxFQUFFLEtBRG9CO0FBRTVCQyxFQUFBQSxLQUFLLEVBQUUsVUFGcUI7QUFHNUJDLEVBQUFBLE9BQU8sRUFBRTtBQUNQLGlCQUFhQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FEbEI7QUFFUEMsSUFBQUEsTUFBTSxFQUFFLGtCQUZEO0FBR1Asb0JBQWdCO0FBSFQ7QUFIbUIsQ0FBekIsQ0FGUDs7QUFZQSxNQUFNRyxVQUFVLEdBQUcsWUFBWTtBQUM3QixNQUFJO0FBQ0YsVUFBTUMsUUFBUSxHQUFHLE1BQU1aLGlCQUFpQixFQUF4QztBQUNBLFVBQU1hLFlBQVksR0FBRyxNQUFNRCxRQUFRLENBQUNFLElBQVQsRUFBM0I7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUosTUFBQUE7QUFBRixLQUFaO0FBQ0FHLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVILE1BQUFBO0FBQUYsS0FBWjtBQUNBLFdBQU9BLFlBQVA7QUFDRCxHQU5ELENBTUUsT0FBT0ksQ0FBUCxFQUFVO0FBQ1ZGLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVDLE1BQUFBO0FBQUYsS0FBWjtBQUNEO0FBQ0YsQ0FWRDs7QUFZQSxNQUFNQyxhQUFhLEdBQUcsTUFBT1IsRUFBUCxJQUFjO0FBQ2xDLE1BQUk7QUFDRixVQUFNRSxRQUFRLEdBQUcsTUFBTUgsb0JBQW9CLENBQUNDLEVBQUQsQ0FBM0M7QUFDQSxVQUFNRyxZQUFZLEdBQUcsTUFBTUQsUUFBUSxDQUFDRSxJQUFULEVBQTNCO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVKLE1BQUFBO0FBQUYsS0FBWjtBQUNBRyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFSCxNQUFBQTtBQUFGLEtBQVo7QUFDQSxXQUFPQSxZQUFQO0FBQ0QsR0FORCxDQU1FLE9BQU9JLENBQVAsRUFBVTtBQUNWRixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFQyxNQUFBQTtBQUFGLEtBQVo7QUFDRDtBQUNGLENBVkQ7O0FBWUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaS9yZXZpZXdzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJFVklFV1NfVVJMID0gJ2h0dHBzOi8vc2hha2VzcGVhcmUucG9kaXVtLmNvbS9hcGkvcmV2aWV3cyc7XG5cbmNvbnN0IGdldFJldmlld3NSZXF1ZXN0ID0gKCkgPT5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGZldGNoKFJFVklFV1NfVVJMLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnWC1BUEktS0VZJzogcHJvY2Vzcy5lbnYuVE9LRU4sXG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG5cbmNvbnN0IGdldFJldmlld0J5SWRSZXF1ZXN0ID0gKGlkKSA9PlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZmV0Y2goYCR7UkVWSUVXU19VUkx9LyR7aWR9YCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ1gtQVBJLUtFWSc6IHByb2Nlc3MuZW52LlRPS0VOLFxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuXG5jb25zdCBnZXRSZXZpZXdzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmV2aWV3c1JlcXVlc3QoKTtcbiAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coeyByZXNwb25zZSB9KTtcbiAgICBjb25zb2xlLmxvZyh7IHJlc3BvbnNlSnNvbiB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2VKc29uO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coeyBlIH0pO1xuICB9XG59O1xuXG5jb25zdCBnZXRSZXZpZXdCeUlkID0gYXN5bmMgKGlkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRSZXZpZXdCeUlkUmVxdWVzdChpZCk7XG4gICAgY29uc3QgcmVzcG9uc2VKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHsgcmVzcG9uc2UgfSk7XG4gICAgY29uc29sZS5sb2coeyByZXNwb25zZUpzb24gfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlSnNvbjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKHsgZSB9KTtcbiAgfVxufTtcblxuZXhwb3J0IHsgZ2V0UmV2aWV3QnlJZCwgZ2V0UmV2aWV3cyB9O1xuIl0sIm5hbWVzIjpbIlJFVklFV1NfVVJMIiwiZ2V0UmV2aWV3c1JlcXVlc3QiLCJmZXRjaCIsIm1ldGhvZCIsImNhY2hlIiwiaGVhZGVycyIsInByb2Nlc3MiLCJlbnYiLCJUT0tFTiIsIkFjY2VwdCIsImdldFJldmlld0J5SWRSZXF1ZXN0IiwiaWQiLCJnZXRSZXZpZXdzIiwicmVzcG9uc2UiLCJyZXNwb25zZUpzb24iLCJqc29uIiwiY29uc29sZSIsImxvZyIsImUiLCJnZXRSZXZpZXdCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==