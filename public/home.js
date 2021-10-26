/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./static/apps/Home/HomeModule.js":
/*!****************************************!*\
  !*** ./static/apps/Home/HomeModule.js ***!
  \****************************************/
/***/ (() => {

var HomeModule = angular.module('HomeModule', []);
HomeModule.factory('HomeHttpMethods', ['$http', HomeHttpMethodsFunc]);

function HomeHttpMethodsFunc($http) {
  var httpService = {};

  httpService.getQuotes = function () {
    return $http({
      method: 'POST',
      url: '/home',
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
/*!**********************************!*\
  !*** ./static/apps/Home/Home.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomeModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeModule */ "./static/apps/Home/HomeModule.js");
/* harmony import */ var _HomeModule__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HomeModule__WEBPACK_IMPORTED_MODULE_0__);

var Home = angular.module('Home', ['navbar', 'HomeModule']);
Home.directive('drop', function () {
  var directive = {};
  directive.restrict = 'E';
  directive.templateUrl = "/drop.html";
  directive.scope = {
    content: '=content'
  };

  directive.controller = function ($scope, $timeout, $interval) {
    var delay = $scope.content.shift() * 1000;
    console.log(delay + "eeeeeeeeeeeee");
    console.log($scope.content);
    var len = $scope.content.length;
    $scope.currentPosition = 0;
    $timeout($interval(function () {
      return $scope.currentPosition = Math.floor(Math.random() * len);
    }, 4000), delay);

    $scope.goToTheTestimony = function (id) {
      window.location.href = "/testimonies#" + id;
    };

    console.log($scope.currentPosition);
  };

  return directive;
});
Home.controller('Home', ['$scope', '$interval', '$window', '$timeout', 'HomeHttpMethods', function ($scope, $interval, $window, $timeout, HomeHttpMethods) {
  $scope.goToTheTestimony = function (id) {
    window.location.href = "/testimonies#" + id;
  };

  HomeHttpMethods.getQuotes().then(function (res) {
    $scope.Quotes = res.data;
    console.log("wwwww" & $scope.Quotes);
    var len = $scope.Quotes.length;
    $scope.arr = [];
    var x = 0;
    var count = 1;

    while ($scope.Quotes.length > 0) {
      if (x == 9) $scope.arr[9] = $scope.Quotes.splice(0);else {
        if (count == 1) $scope.arr[x] = [];
        $scope.arr[x][count - 1] = $scope.Quotes.splice(0, 1)[0];

        if (count >= Math.floor(len / 10)) {
          if (len > 10 && len % 10 - 1 >= x) $scope.arr[x][count] = $scope.Quotes.splice(0, 1)[0];
          count = 1;
          x += 1;
        } else {
          count += 1;
        }
      }
    }

    var delay = [3.5, 1, 1.8, 2, 0, 0.5, 2.5, 2.2, 1.5, 0.2];
    $scope.arr.forEach(function (element, index) {
      element.unshift(delay[index]);
    });
    console.log($scope.arr); // $scope.arr = $scope.Quotes.map(element => [element]);
  })["catch"](function (err) {
    return alert(err);
  });
}]);
})();

/******/ })()
;
//# sourceMappingURL=home.js.map