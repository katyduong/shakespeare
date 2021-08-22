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
  mode: 'no-cors',
  withCredentials: true,
  headers: {
    'x-api-key': 'H3TM28wjL8R4#HTnqk?c',
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

const getReviewByIdRequest = id => // eslint-disable-next-line no-undef
fetch(`${REVIEWS_URL}/${id}`, {
  method: 'GET',
  mode: 'no-cors',
  withCredentials: true,
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
    const headers = await response.headers;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmV2aWV3cy40NzA0NzQ4ZDdmYzUwZThhNWY5Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLFdBQVcsR0FBRyw0Q0FBcEI7O0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsTUFDeEI7QUFDQUMsS0FBSyxDQUFDRixXQUFELEVBQWM7QUFDakJHLEVBQUFBLE1BQU0sRUFBRSxLQURTO0FBRWpCQyxFQUFBQSxJQUFJLEVBQUUsU0FGVztBQUdqQkMsRUFBQUEsZUFBZSxFQUFFLElBSEE7QUFJakJDLEVBQUFBLE9BQU8sRUFBRTtBQUNQLGlCQUFhLHNCQUROO0FBRVBDLElBQUFBLE1BQU0sRUFBRSxrQkFGRDtBQUdQLG9CQUFnQjtBQUhUO0FBSlEsQ0FBZCxDQUZQOztBQWFBLE1BQU1DLG9CQUFvQixHQUFJQyxFQUFELElBQzNCO0FBQ0FQLEtBQUssQ0FBRSxHQUFFRixXQUFZLElBQUdTLEVBQUcsRUFBdEIsRUFBeUI7QUFDNUJOLEVBQUFBLE1BQU0sRUFBRSxLQURvQjtBQUU1QkMsRUFBQUEsSUFBSSxFQUFFLFNBRnNCO0FBRzVCQyxFQUFBQSxlQUFlLEVBQUUsSUFIVztBQUk1QkMsRUFBQUEsT0FBTyxFQUFFO0FBQ1AsaUJBQWEsc0JBRE47QUFFUEMsSUFBQUEsTUFBTSxFQUFFLGtCQUZEO0FBR1Asb0JBQWdCO0FBSFQ7QUFKbUIsQ0FBekIsQ0FGUDs7QUFhQSxNQUFNRyxVQUFVLEdBQUcsWUFBWTtBQUM3QixNQUFJO0FBQ0YsVUFBTUMsUUFBUSxHQUFHLE1BQU1WLGlCQUFpQixFQUF4QztBQUNBVyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFRixNQUFBQTtBQUFGLEtBQVo7QUFDQSxVQUFNTCxPQUFPLEdBQUcsTUFBTUssUUFBUSxDQUFDTCxPQUEvQjtBQUNBLFVBQU1RLFlBQVksR0FBRyxNQUFNSCxRQUFRLENBQUNJLElBQVQsRUFBM0I7QUFDQUgsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUMsTUFBQUE7QUFBRixLQUFaO0FBQ0EsV0FBT0EsWUFBUDtBQUNELEdBUEQsQ0FPRSxPQUFPRSxDQUFQLEVBQVU7QUFDVkosSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUcsTUFBQUE7QUFBRixLQUFaO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7QUFDRixDQVpEOztBQWNBLE1BQU1DLGFBQWEsR0FBRyxNQUFPUixFQUFQLElBQWM7QUFDbEMsTUFBSTtBQUNGLFVBQU1FLFFBQVEsR0FBRyxNQUFNSCxvQkFBb0IsQ0FBQ0MsRUFBRCxDQUEzQztBQUNBRyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFRixNQUFBQTtBQUFGLEtBQVo7QUFDQSxVQUFNRyxZQUFZLEdBQUcsTUFBTUgsUUFBUSxDQUFDSSxJQUFULEVBQTNCO0FBQ0FILElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVDLE1BQUFBO0FBQUYsS0FBWjtBQUNBLFdBQU9BLFlBQVA7QUFDRCxHQU5ELENBTUUsT0FBT0UsQ0FBUCxFQUFVO0FBQ1ZKLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVHLE1BQUFBO0FBQUYsS0FBWjtBQUNBLFdBQU8sSUFBUDtBQUNEO0FBQ0YsQ0FYRDs7QUFhQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBpL3Jldmlld3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUkVWSUVXU19VUkwgPSAnaHR0cHM6Ly9zaGFrZXNwZWFyZS5wb2RpdW0uY29tL2FwaS9yZXZpZXdzJztcblxuY29uc3QgZ2V0UmV2aWV3c1JlcXVlc3QgPSAoKSA9PlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZmV0Y2goUkVWSUVXU19VUkwsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIG1vZGU6ICduby1jb3JzJyxcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ3gtYXBpLWtleSc6ICdIM1RNMjh3akw4UjQjSFRucWs/YycsXG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG5cbmNvbnN0IGdldFJldmlld0J5SWRSZXF1ZXN0ID0gKGlkKSA9PlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgZmV0Y2goYCR7UkVWSUVXU19VUkx9LyR7aWR9YCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgbW9kZTogJ25vLWNvcnMnLFxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAneC1hcGkta2V5JzogJ0gzVE0yOHdqTDhSNCNIVG5xaz9jJyxcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcblxuY29uc3QgZ2V0UmV2aWV3cyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFJldmlld3NSZXF1ZXN0KCk7XG4gICAgY29uc29sZS5sb2coeyByZXNwb25zZSB9KTtcbiAgICBjb25zdCBoZWFkZXJzID0gYXdhaXQgcmVzcG9uc2UuaGVhZGVycztcbiAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coeyByZXNwb25zZUpzb24gfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlSnNvbjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKHsgZSB9KTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuY29uc3QgZ2V0UmV2aWV3QnlJZCA9IGFzeW5jIChpZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmV2aWV3QnlJZFJlcXVlc3QoaWQpO1xuICAgIGNvbnNvbGUubG9nKHsgcmVzcG9uc2UgfSk7XG4gICAgY29uc3QgcmVzcG9uc2VKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHsgcmVzcG9uc2VKc29uIH0pO1xuICAgIHJldHVybiByZXNwb25zZUpzb247XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyh7IGUgfSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGdldFJldmlld0J5SWQsIGdldFJldmlld3MgfTtcbiJdLCJuYW1lcyI6WyJSRVZJRVdTX1VSTCIsImdldFJldmlld3NSZXF1ZXN0IiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwid2l0aENyZWRlbnRpYWxzIiwiaGVhZGVycyIsIkFjY2VwdCIsImdldFJldmlld0J5SWRSZXF1ZXN0IiwiaWQiLCJnZXRSZXZpZXdzIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2VKc29uIiwianNvbiIsImUiLCJnZXRSZXZpZXdCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==