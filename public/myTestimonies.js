/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./static/apps/myTestimonies/myTestimoniesModule.js":
/*!**********************************************************!*\
  !*** ./static/apps/myTestimonies/myTestimoniesModule.js ***!
  \**********************************************************/
/***/ (() => {

var myTestimoniesModule = angular.module('myTestimoniesModule', []);
myTestimoniesModule.factory('myTestimoniesHttpMethods', ['$http', myTestimoniesHttpMethodsFunc]);

function myTestimoniesHttpMethodsFunc($http) {
  var httpService = {};

  httpService.getMyTestimonies = function () {
    return $http({
      method: 'POST',
      url: '/mytestimonies',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {}
    });
  };

  return httpService;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************************************!*\
  !*** ./static/apps/myTestimonies/myTestimonies.js ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _myTestimoniesModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myTestimoniesModule */ "./static/apps/myTestimonies/myTestimoniesModule.js");
/* harmony import */ var _myTestimoniesModule__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_myTestimoniesModule__WEBPACK_IMPORTED_MODULE_0__);

var myTestimonies = angular.module('myTestimonies', ['ngMaterial', 'ngMessages', 'navbar', 'myTestimoniesModule']);
myTestimonies.directive('testimony', function () {
  var directive = {};
  directive.restrict = 'E';
  directive.templateUrl = "/testimony.html";
  directive.scope = {
    id: '=id',
    testimony: '=testimony'
  };

  directive.controller = function ($scope, $timeout) {
    console.log($scope.testimony);
    console.log($scope.id);
    $scope.isChozen = $scope.testimony._id === $scope.id;
    $timeout(function () {
      return $scope.isChozen = false;
    }, 1000);
  };

  return directive;
});
myTestimonies.controller('myTestimoniesController', ['$timeout', '$scope', '$http', '$anchorScroll', '$location', '$mdDialog', '$mdToast', 'myTestimoniesHttpMethods', function ($timeout, $scope, $http, $anchorScroll, $location, $mdDialog, $mdToast, myTestimoniesHttpMethods) {
  myTestimoniesHttpMethods.getMyTestimonies().then(function (res) {
    $scope.myTestimonies = res.data;
    console.log($scope.myTestimonies);
  })["catch"](function (err) {
    return console.log(err);
  });
  $scope.options = ["no filter", "fracture", "inflammation", "rupture"];
  $scope.filter = "no filter";

  $scope.fu = function () {
    return console.log("this is " + $scope.filter);
  };
}]);
})();

/******/ })()
;
//# sourceMappingURL=myTestimonies.js.map