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
  cache: 'no-cache',
  mode: 'no-cors',
  headers: {
    'X-API-KEY': 'H3TM28wjL8R4#HTnqk?c',
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

const getReviewByIdRequest = id => // eslint-disable-next-line no-undef
fetch(`${REVIEWS_URL}/${id}`, {
  method: 'GET',
  cache: 'no-cache',
  mode: 'no-cors',
  headers: {
    'X-API-KEY': 'H3TM28wjL8R4#HTnqk?c',
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
    return null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmV2aWV3cy5iMTBiMjcyNjdiYzJjODI3ZTliMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLFdBQVcsR0FBRyw0Q0FBcEI7O0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsTUFDeEI7QUFDQUMsS0FBSyxDQUFDRixXQUFELEVBQWM7QUFDakJHLEVBQUFBLE1BQU0sRUFBRSxLQURTO0FBRWpCQyxFQUFBQSxLQUFLLEVBQUUsVUFGVTtBQUdqQkMsRUFBQUEsSUFBSSxFQUFFLFNBSFc7QUFJakJDLEVBQUFBLE9BQU8sRUFBRTtBQUNQLGlCQUFhLHNCQUROO0FBRVBDLElBQUFBLE1BQU0sRUFBRSxrQkFGRDtBQUdQLG9CQUFnQjtBQUhUO0FBSlEsQ0FBZCxDQUZQOztBQWFBLE1BQU1DLG9CQUFvQixHQUFJQyxFQUFELElBQzNCO0FBQ0FQLEtBQUssQ0FBRSxHQUFFRixXQUFZLElBQUdTLEVBQUcsRUFBdEIsRUFBeUI7QUFDNUJOLEVBQUFBLE1BQU0sRUFBRSxLQURvQjtBQUU1QkMsRUFBQUEsS0FBSyxFQUFFLFVBRnFCO0FBRzVCQyxFQUFBQSxJQUFJLEVBQUUsU0FIc0I7QUFJNUJDLEVBQUFBLE9BQU8sRUFBRTtBQUNQLGlCQUFhLHNCQUROO0FBRVBDLElBQUFBLE1BQU0sRUFBRSxrQkFGRDtBQUdQLG9CQUFnQjtBQUhUO0FBSm1CLENBQXpCLENBRlA7O0FBYUEsTUFBTUcsVUFBVSxHQUFHLFlBQVk7QUFDN0IsTUFBSTtBQUNGLFVBQU1DLFFBQVEsR0FBRyxNQUFNVixpQkFBaUIsRUFBeEM7QUFDQSxVQUFNVyxZQUFZLEdBQUcsTUFBTUQsUUFBUSxDQUFDRSxJQUFULEVBQTNCO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVKLE1BQUFBO0FBQUYsS0FBWjtBQUNBRyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFSCxNQUFBQTtBQUFGLEtBQVo7QUFDQSxXQUFPQSxZQUFQO0FBQ0QsR0FORCxDQU1FLE9BQU9JLENBQVAsRUFBVTtBQUNWRixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFQyxNQUFBQTtBQUFGLEtBQVo7QUFDQSxXQUFPLElBQVA7QUFDRDtBQUNGLENBWEQ7O0FBYUEsTUFBTUMsYUFBYSxHQUFHLE1BQU9SLEVBQVAsSUFBYztBQUNsQyxNQUFJO0FBQ0YsVUFBTUUsUUFBUSxHQUFHLE1BQU1ILG9CQUFvQixDQUFDQyxFQUFELENBQTNDO0FBQ0EsVUFBTUcsWUFBWSxHQUFHLE1BQU1ELFFBQVEsQ0FBQ0UsSUFBVCxFQUEzQjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFSixNQUFBQTtBQUFGLEtBQVo7QUFDQUcsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUgsTUFBQUE7QUFBRixLQUFaO0FBQ0EsV0FBT0EsWUFBUDtBQUNELEdBTkQsQ0FNRSxPQUFPSSxDQUFQLEVBQVU7QUFDVkYsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUMsTUFBQUE7QUFBRixLQUFaO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7QUFDRixDQVhEOztBQWFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcGkvcmV2aWV3cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSRVZJRVdTX1VSTCA9ICdodHRwczovL3NoYWtlc3BlYXJlLnBvZGl1bS5jb20vYXBpL3Jldmlld3MnO1xuXG5jb25zdCBnZXRSZXZpZXdzUmVxdWVzdCA9ICgpID0+XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBmZXRjaChSRVZJRVdTX1VSTCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgbW9kZTogJ25vLWNvcnMnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdYLUFQSS1LRVknOiAnSDNUTTI4d2pMOFI0I0hUbnFrP2MnLFxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuXG5jb25zdCBnZXRSZXZpZXdCeUlkUmVxdWVzdCA9IChpZCkgPT5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGZldGNoKGAke1JFVklFV1NfVVJMfS8ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgIG1vZGU6ICduby1jb3JzJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnWC1BUEktS0VZJzogJ0gzVE0yOHdqTDhSNCNIVG5xaz9jJyxcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcblxuY29uc3QgZ2V0UmV2aWV3cyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFJldmlld3NSZXF1ZXN0KCk7XG4gICAgY29uc3QgcmVzcG9uc2VKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHsgcmVzcG9uc2UgfSk7XG4gICAgY29uc29sZS5sb2coeyByZXNwb25zZUpzb24gfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlSnNvbjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKHsgZSB9KTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuY29uc3QgZ2V0UmV2aWV3QnlJZCA9IGFzeW5jIChpZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmV2aWV3QnlJZFJlcXVlc3QoaWQpO1xuICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyh7IHJlc3BvbnNlIH0pO1xuICAgIGNvbnNvbGUubG9nKHsgcmVzcG9uc2VKc29uIH0pO1xuICAgIHJldHVybiByZXNwb25zZUpzb247XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyh7IGUgfSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGdldFJldmlld0J5SWQsIGdldFJldmlld3MgfTtcbiJdLCJuYW1lcyI6WyJSRVZJRVdTX1VSTCIsImdldFJldmlld3NSZXF1ZXN0IiwiZmV0Y2giLCJtZXRob2QiLCJjYWNoZSIsIm1vZGUiLCJoZWFkZXJzIiwiQWNjZXB0IiwiZ2V0UmV2aWV3QnlJZFJlcXVlc3QiLCJpZCIsImdldFJldmlld3MiLCJyZXNwb25zZSIsInJlc3BvbnNlSnNvbiIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZSIsImdldFJldmlld0J5SWQiXSwic291cmNlUm9vdCI6IiJ9