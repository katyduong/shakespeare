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
    console.log({
      response
    });
    const responseJson = await response.json();
    console.log({
      responseJson
    });
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
    console.log({
      response
    });
    const responseJson = await response.json();
    console.log({
      responseJson
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmV2aWV3cy44YmU2NWE1ZTdlYzQxZGIwZTQ4NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLFdBQVcsR0FBRyw0Q0FBcEI7O0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsTUFDeEI7QUFDQUMsS0FBSyxDQUFDRixXQUFELEVBQWM7QUFDakJHLEVBQUFBLE1BQU0sRUFBRSxLQURTO0FBRWpCQyxFQUFBQSxPQUFPLEVBQUU7QUFDUCxpQkFBYSxzQkFETjtBQUVQQyxJQUFBQSxNQUFNLEVBQUUsa0JBRkQ7QUFHUCxvQkFBZ0I7QUFIVDtBQUZRLENBQWQsQ0FGUDs7QUFXQSxNQUFNQyxvQkFBb0IsR0FBSUMsRUFBRCxJQUMzQjtBQUNBTCxLQUFLLENBQUUsR0FBRUYsV0FBWSxJQUFHTyxFQUFHLEVBQXRCLEVBQXlCO0FBQzVCSixFQUFBQSxNQUFNLEVBQUUsS0FEb0I7QUFFNUJDLEVBQUFBLE9BQU8sRUFBRTtBQUNQLGlCQUFhLHNCQUROO0FBRVBDLElBQUFBLE1BQU0sRUFBRSxrQkFGRDtBQUdQLG9CQUFnQjtBQUhUO0FBRm1CLENBQXpCLENBRlA7O0FBV0EsTUFBTUcsVUFBVSxHQUFHLFlBQVk7QUFDN0IsTUFBSTtBQUNGLFVBQU1DLFFBQVEsR0FBRyxNQUFNUixpQkFBaUIsRUFBeEM7QUFDQVMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUYsTUFBQUE7QUFBRixLQUFaO0FBRUEsVUFBTUcsWUFBWSxHQUFHLE1BQU1ILFFBQVEsQ0FBQ0ksSUFBVCxFQUEzQjtBQUNBSCxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFQyxNQUFBQTtBQUFGLEtBQVo7QUFDQSxXQUFPQSxZQUFQO0FBQ0QsR0FQRCxDQU9FLE9BQU9FLENBQVAsRUFBVTtBQUNWSixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFRyxNQUFBQTtBQUFGLEtBQVo7QUFDQSxXQUFPLElBQVA7QUFDRDtBQUNGLENBWkQ7O0FBY0EsTUFBTUMsYUFBYSxHQUFHLE1BQU9SLEVBQVAsSUFBYztBQUNsQyxNQUFJO0FBQ0YsVUFBTUUsUUFBUSxHQUFHLE1BQU1ILG9CQUFvQixDQUFDQyxFQUFELENBQTNDO0FBQ0FHLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVGLE1BQUFBO0FBQUYsS0FBWjtBQUNBLFVBQU1HLFlBQVksR0FBRyxNQUFNSCxRQUFRLENBQUNJLElBQVQsRUFBM0I7QUFDQUgsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUMsTUFBQUE7QUFBRixLQUFaO0FBQ0EsV0FBT0EsWUFBUDtBQUNELEdBTkQsQ0FNRSxPQUFPRSxDQUFQLEVBQVU7QUFDVkosSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUcsTUFBQUE7QUFBRixLQUFaO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7QUFDRixDQVhEOztBQWFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcGkvcmV2aWV3cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSRVZJRVdTX1VSTCA9ICdodHRwczovL3NoYWtlc3BlYXJlLnBvZGl1bS5jb20vYXBpL3Jldmlld3MnO1xuXG5jb25zdCBnZXRSZXZpZXdzUmVxdWVzdCA9ICgpID0+XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBmZXRjaChSRVZJRVdTX1VSTCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ3gtYXBpLWtleSc6ICdIM1RNMjh3akw4UjQjSFRucWs/YycsXG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG5cbmNvbnN0IGdldFJldmlld0J5SWRSZXF1ZXN0ID0gKGlkKSA9PlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZmV0Y2goYCR7UkVWSUVXU19VUkx9LyR7aWR9YCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ3gtYXBpLWtleSc6ICdIM1RNMjh3akw4UjQjSFRucWs/YycsXG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG5cbmNvbnN0IGdldFJldmlld3MgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRSZXZpZXdzUmVxdWVzdCgpO1xuICAgIGNvbnNvbGUubG9nKHsgcmVzcG9uc2UgfSk7XG5cbiAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coeyByZXNwb25zZUpzb24gfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlSnNvbjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKHsgZSB9KTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuY29uc3QgZ2V0UmV2aWV3QnlJZCA9IGFzeW5jIChpZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmV2aWV3QnlJZFJlcXVlc3QoaWQpO1xuICAgIGNvbnNvbGUubG9nKHsgcmVzcG9uc2UgfSk7XG4gICAgY29uc3QgcmVzcG9uc2VKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHsgcmVzcG9uc2VKc29uIH0pO1xuICAgIHJldHVybiByZXNwb25zZUpzb247XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyh7IGUgfSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGdldFJldmlld0J5SWQsIGdldFJldmlld3MgfTtcbiJdLCJuYW1lcyI6WyJSRVZJRVdTX1VSTCIsImdldFJldmlld3NSZXF1ZXN0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiZ2V0UmV2aWV3QnlJZFJlcXVlc3QiLCJpZCIsImdldFJldmlld3MiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZUpzb24iLCJqc29uIiwiZSIsImdldFJldmlld0J5SWQiXSwic291cmNlUm9vdCI6IiJ9