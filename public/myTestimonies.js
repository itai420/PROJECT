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

/***/ "./static/apps/myTestimonies/myTestimonies.js":
/*!****************************************************!*\
  !*** ./static/apps/myTestimonies/myTestimonies.js ***!
  \****************************************************/
/***/ (() => {

eval("var myTestimonies = angular.module('myTestimonies', ['ngMaterial', 'ngMessages', 'navbar', 'myTestimoniesModule']);\nmyTestimonies.directive('testimony', function () {\n  var directive = {};\n  directive.restrict = 'E';\n  directive.templateUrl = \"/testimony.html\";\n  directive.scope = {\n    id: '=id',\n    testimony: '=testimony'\n  };\n\n  directive.controller = function ($scope, $timeout) {\n    console.log($scope.testimony);\n    console.log($scope.id);\n    $scope.isChozen = $scope.testimony._id === $scope.id;\n    $timeout(function () {\n      return $scope.isChozen = false;\n    }, 1000);\n  };\n\n  return directive;\n});\nmyTestimonies.controller('myTestimoniesController', ['$timeout', '$scope', '$http', '$anchorScroll', '$location', '$mdDialog', '$mdToast', 'myTestimoniesHttpMethods', function ($timeout, $scope, $http, $anchorScroll, $location, $mdDialog, $mdToast, myTestimoniesHttpMethods) {\n  myTestimoniesHttpMethods.getMyTestimonies().then(function (res) {\n    $scope.myTestimonies = res.data;\n    console.log($scope.myTestimonies);\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n  $scope.options = [\"no filter\", \"fracture\", \"inflammation\", \"rupture\"];\n  $scope.filter = \"no filter\";\n\n  $scope.fu = function () {\n    return console.log(\"this is \" + $scope.filter);\n  };\n}]);\n\n//# sourceURL=webpack://project/./static/apps/myTestimonies/myTestimonies.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/apps/myTestimonies/myTestimonies.js"]();
/******/ 	
/******/ })()
;