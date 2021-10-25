/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./static/apps/pendingTestimonies/pendingTestimonies.js":
/*!**************************************************************!*\
  !*** ./static/apps/pendingTestimonies/pendingTestimonies.js ***!
  \**************************************************************/
/***/ (() => {

eval("var pendingTestimonies = angular.module('pendingTestimonies', ['ngMaterial', 'ngMessages', 'navbar', 'pendingTestimoniesModule']);\npendingTestimonies.directive('testimony', function () {\n  var directive = {};\n  directive.restrict = 'E';\n  directive.templateUrl = \"/pendingTestimony.html\";\n  directive.scope = {\n    id: '=id',\n    testimony: '=testimony'\n  };\n\n  directive.controller = function ($scope, $timeout, $http, pendingTestimoniesHttpMethods) {\n    $scope.status = $scope.testimony.Approved;\n\n    $scope.Approving = function (id) {\n      $scope.status = \"approved\";\n      pendingTestimoniesHttpMethods.Approving(id);\n    };\n\n    $scope.Denied = function (id) {\n      $scope.status = \"denied\";\n      pendingTestimoniesHttpMethods.Denied(id);\n      return $http({\n        method: 'POST',\n        url: '/pendingTestimonies',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        data: {\n          'change': \"denied\",\n          'tetimonieId': id\n        }\n      });\n    };\n\n    console.log($scope.testimony);\n    console.log($scope.id);\n    $scope.isChozen = $scope.testimony._id === $scope.id;\n    $timeout(function () {\n      return $scope.isChozen = false;\n    }, 1000);\n  };\n\n  return directive;\n});\npendingTestimonies.controller('pendingTestimoniesController', ['$timeout', '$scope', '$http', '$anchorScroll', '$location', '$mdDialog', '$mdToast', 'pendingTestimoniesHttpMethods', function ($timeout, $scope, $http, $anchorScroll, $location, $mdDialog, $mdToast, pendingTestimoniesHttpMethods) {\n  // $scope.getTestimonies = () => pendingTestimoniesHttpMethods.getTestimonies()\n  pendingTestimoniesHttpMethods.getTestimonies().then(function (res) {\n    $scope.myTestimonies = res.data;\n    console.log($scope.myTestimonies);\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n  $scope.options = [\"filter by status\", \"pending\", \"approved\", \"denied\"];\n  $scope.filter = $scope.options[0];\n\n  $scope.fu = function () {\n    return console.log($scope.filter);\n  };\n}]);\n\n//# sourceURL=webpack://project/./static/apps/pendingTestimonies/pendingTestimonies.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/apps/pendingTestimonies/pendingTestimonies.js"]();
/******/ 	
/******/ })()
;