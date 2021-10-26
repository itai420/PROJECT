/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./static/apps/pendingTestimonies/pendingTestimoniesModule.js":
/*!********************************************************************!*\
  !*** ./static/apps/pendingTestimonies/pendingTestimoniesModule.js ***!
  \********************************************************************/
/***/ (() => {

var pendingTestimoniesModule = angular.module('pendingTestimoniesModule', []);
pendingTestimoniesModule.factory('pendingTestimoniesHttpMethods', ['$http', pendingTestimoniesHttpMethodsFunc]);

function pendingTestimoniesHttpMethodsFunc($http) {
  var httpService = {};

  httpService.Approving = function (id) {
    return $http({
      method: 'POST',
      url: '/pendingTestimonies',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'change': "approved",
        'tetimonieId': id
      }
    });
  };

  httpService.Denied = function (id) {
    return $http({
      method: 'POST',
      url: '/pendingTestimonies',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'change': "denied",
        'tetimonieId': id
      }
    });
  };

  httpService.getTestimonies = function () {
    return $http({
      method: 'POST',
      url: '/testimonies',
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
/*!**************************************************************!*\
  !*** ./static/apps/pendingTestimonies/pendingTestimonies.js ***!
  \**************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pendingTestimoniesModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pendingTestimoniesModule */ "./static/apps/pendingTestimonies/pendingTestimoniesModule.js");
/* harmony import */ var _pendingTestimoniesModule__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pendingTestimoniesModule__WEBPACK_IMPORTED_MODULE_0__);

var pendingTestimonies = angular.module('pendingTestimonies', ['ngMaterial', 'ngMessages', 'navbar', 'pendingTestimoniesModule']);
pendingTestimonies.directive('testimony', function () {
  var directive = {};
  directive.restrict = 'E';
  directive.templateUrl = "/pendingTestimony.html";
  directive.scope = {
    id: '=id',
    testimony: '=testimony'
  };

  directive.controller = function ($scope, $timeout, $http, pendingTestimoniesHttpMethods) {
    $scope.status = $scope.testimony.Approved;

    $scope.Approving = function (id) {
      $scope.status = "approved";
      pendingTestimoniesHttpMethods.Approving(id);
    };

    $scope.Denied = function (id) {
      $scope.status = "denied";
      pendingTestimoniesHttpMethods.Denied(id);
      return $http({
        method: 'POST',
        url: '/pendingTestimonies',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          'change': "denied",
          'tetimonieId': id
        }
      });
    };

    console.log($scope.testimony);
    console.log($scope.id);
    $scope.isChozen = $scope.testimony._id === $scope.id;
    $timeout(function () {
      return $scope.isChozen = false;
    }, 1000);
  };

  return directive;
});
pendingTestimonies.controller('pendingTestimoniesController', ['$timeout', '$scope', '$http', '$anchorScroll', '$location', '$mdDialog', '$mdToast', 'pendingTestimoniesHttpMethods', function ($timeout, $scope, $http, $anchorScroll, $location, $mdDialog, $mdToast, pendingTestimoniesHttpMethods) {
  // $scope.getTestimonies = () => pendingTestimoniesHttpMethods.getTestimonies()
  pendingTestimoniesHttpMethods.getTestimonies().then(function (res) {
    $scope.myTestimonies = res.data;
    console.log($scope.myTestimonies);
  })["catch"](function (err) {
    return console.log(err);
  });
  $scope.options = ["filter by status", "pending", "approved", "denied"];
  $scope.filter = $scope.options[0];

  $scope.fu = function () {
    return console.log($scope.filter);
  };
}]);
})();

/******/ })()
;
//# sourceMappingURL=pendingTestimonies.js.map