/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./static/apps/testimonies/testimoniesModule.js":
/*!******************************************************!*\
  !*** ./static/apps/testimonies/testimoniesModule.js ***!
  \******************************************************/
/***/ (() => {

var testimoniesModule = angular.module('testimoniesModule', []);
testimoniesModule.factory('testimoniesHttpMethods', ['$http', testimoniesHttpMethodsFunc]);

function testimoniesHttpMethodsFunc($http) {
  var httpService = {};

  httpService.getTestimonies = function () {
    return $http({
      method: 'POST',
      url: '/testimonies',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        "filter": {
          "Approved": "approved"
        }
      }
    });
  };

  httpService.IsUserLogged = function () {
    return $http({
      method: 'POST',
      url: '/IsLogged',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        "Question": "log"
      }
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
/*!************************************************!*\
  !*** ./static/apps/testimonies/testimonies.js ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testimoniesModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testimoniesModule */ "./static/apps/testimonies/testimoniesModule.js");
/* harmony import */ var _testimoniesModule__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_testimoniesModule__WEBPACK_IMPORTED_MODULE_0__);

var Testimonies = angular.module('Testimonies', ['ngMaterial', 'ngMessages', 'navbar', 'testimoniesModule']);
Testimonies.directive('testimony', function () {
  var directive = {};
  directive.restrict = 'E';
  directive.templateUrl = "/testimony.html";
  directive.scope = {
    id: '=id',
    testimony: '=testimony'
  };

  directive.controller = function ($scope, $timeout) {
    $scope.isChozen = $scope.testimony._id === $scope.id;
    $timeout(function () {
      return $scope.isChozen = false;
    }, 10000);
  };

  return directive;
});
Testimonies.controller('TestimoniesController', ['$timeout', '$scope', '$http', '$anchorScroll', '$location', '$mdDialog', '$mdToast', 'testimoniesHttpMethods', function ($timeout, $scope, $http, $anchorScroll, $location, $mdDialog, $mdToast, testimoniesHttpMethods) {
  // $scope.getTestimonies = () => testimoniesHttpMethods.getTestimonies()
  // $scope.IsUserLogged = () => testimoniesHttpMethods.IsUserLogged();
  testimoniesHttpMethods.IsUserLogged().then(function (res) {
    $scope.IsOut = res.data == "";
  })["catch"](function (err) {
    return console.log("err is" + err);
  });

  $scope.openToast = function () {
    $mdToast.show($mdToast.simple().textContent('you have to sign in first').hideDelay(2000).position('top left'));
  };

  testimoniesHttpMethods.getTestimonies().then(function (res) {
    $scope.Testimonies = res.data;
    $scope.id = $location.url().substring(1);
    $timeout(function () {
      $anchorScroll();
    }, 200);
  })["catch"](function (err) {
    return console.log(err);
  });
  $scope.options = ["no filter", "fracture", "inflammation", "rupture"];
  $scope.filter = "no filter";

  $scope.fu = function () {
    return console.log("this is " + $scope.filter);
  };

  $scope.showDialog = function (ev) {
    console.log("open modal");
    $mdDialog.show({
      controller: DialogController,
      templateUrl: '../addTestimony.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      locals: {},
      clickOutsideToClose: true,
      fullscreen: $scope.costumFullscreen
    });
  };

  function DialogController($scope, $mdDialog) {
    $scope.LevelOfinjuries = {
      "fracture": ["full fracture", "stress fracture"],
      "inflammation": ["chronic inflammation", "acute inflammation"],
      "rupture": ["complete rupture", "partial rupture"]
    };
    $scope.activityLevel = ["1-2 times a week", "3-4 times a week", "5-6 times a week", "7 times a week or more"];
    $scope.openLevel = true;

    $scope.hide = function () {
      $mdDialog.hide();
    };

    $scope.cancel = function () {
      $mdDialog.cancel();
    };

    $scope.answer = function (answer) {
      $mdDialog.hide(answer);
    };

    $scope.injuries = ["fracture", "inflammation", "rupture"];

    $scope.updateLevel = function () {
      $scope.openLevel = false;
      $timeout(function () {
        $scope.LevelOfinjuri = $scope.LevelOfinjuries[$scope.filter];
      }, 0);
    }; // $scope.Add=()=>{
    //   return $http({
    //     method: 'POST',
    //     url: '/testimonies/addTestimonies',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     data: {
    //     }
    //   })
    // }

  }

  ;
}]);
})();

/******/ })()
;
//# sourceMappingURL=testimonies.js.map