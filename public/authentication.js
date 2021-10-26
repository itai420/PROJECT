/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./static/apps/Authentication/AuthenticationModule.js":
/*!************************************************************!*\
  !*** ./static/apps/Authentication/AuthenticationModule.js ***!
  \************************************************************/
/***/ (() => {

var AuthenticationModule = angular.module('AuthenticationModule', []);
AuthenticationModule.factory('AuthenticationHttpMethods', ['$http', AuthenticationHttpMethodsFunc]);

function AuthenticationHttpMethodsFunc($http) {
  var httpService = {};

  httpService.isSigned = function (name, password) {
    return $http({
      method: 'POST',
      url: '/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        name: name,
        password: password
      }
    });
  };

  httpService.checkIfNamEmailNew = function (name, password, email) {
    return $http({
      method: 'POST',
      url: '/SignUp',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        name: name,
        password: password,
        email: email
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
/*!******************************************************!*\
  !*** ./static/apps/Authentication/Authentication.js ***!
  \******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthenticationModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthenticationModule */ "./static/apps/Authentication/AuthenticationModule.js");
/* harmony import */ var _AuthenticationModule__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AuthenticationModule__WEBPACK_IMPORTED_MODULE_0__);

var authentication = angular.module('authentication', ['ngMaterial', 'ngMessages', 'navbar', 'AuthenticationModule']);
authentication.controller('authenticationController', ['$scope', 'AuthenticationHttpMethods', '$mdToast', function ($scope, AuthenticationHttpMethods, $mdToast) {
  $scope.passwordType = "password";
  $scope.checkBoxColor = "black";

  $scope.showPassword = function () {
    $scope.passwordType = $scope.passwordType === "password" ? "text" : "password";
    $scope.checkBoxColor = $scope.checkBoxColor === "black" ? "white" : "black";
  };

  $scope.IsSigned = function (name, password) {
    if (!(name && password)) {
      $mdToast.show($mdToast.simple().textContent('Please fill all').hideDelay(2000).position('top left'));
    } else {
      AuthenticationHttpMethods.isSigned(name, password).then(function (res) {
        console.log(res.data);
        if (res.data) window.location.href = "/home";else {
          $mdToast.show($mdToast.simple().textContent('Incorrect username or password').hideDelay(2000).position('top left'));
        }
      });
    }
  };

  $scope.openToast = function () {
    $mdToast.show($mdToast.simple().textContent('you have to sign in first').hideDelay(2000).position('top left'));
  };

  $scope.checkIfNamEmailNew = function (name, password, email) {
    if (!(name && email && password)) {
      $mdToast.show($mdToast.simple().textContent('Please fill all').hideDelay(2000).position('top left'));
    } else {
      AuthenticationHttpMethods.checkIfNamEmailNew(name, password, email).then(function (res) {
        if (res.data) window.location.href = "/login";

        if (!res.data) {
          $mdToast.show($mdToast.simple().textContent('Name or email is already in use').hideDelay(2000).position('top left'));
        }
      });
    }
  };
}]);
})();

/******/ })()
;
//# sourceMappingURL=authentication.js.map