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

/***/ "./static/apps/Authentication/Authentication.js":
/*!******************************************************!*\
  !*** ./static/apps/Authentication/Authentication.js ***!
  \******************************************************/
/***/ (() => {

eval("var authentication = angular.module('authentication', ['ngMaterial', 'ngMessages', 'navbar', 'AuthenticationModule']);\nauthentication.controller('authenticationController', ['$scope', 'AuthenticationHttpMethods', '$mdToast', function ($scope, AuthenticationHttpMethods, $mdToast) {\n  $scope.passwordType = \"password\";\n  $scope.checkBoxColor = \"black\";\n\n  $scope.showPassword = function () {\n    $scope.passwordType = $scope.passwordType === \"password\" ? \"text\" : \"password\";\n    $scope.checkBoxColor = $scope.checkBoxColor === \"black\" ? \"white\" : \"black\";\n  };\n\n  $scope.IsSigned = function (name, password) {\n    if (!(name && password)) {\n      $mdToast.show($mdToast.simple().textContent('Please fill all').hideDelay(2000).position('top left'));\n    } else {\n      AuthenticationHttpMethods.isSigned(name, password).then(function (res) {\n        console.log(res.data);\n        if (res.data) window.location.href = \"/home\";else {\n          $mdToast.show($mdToast.simple().textContent('Incorrect username or password').hideDelay(2000).position('top left'));\n        }\n      });\n    }\n  };\n\n  $scope.openToast = function () {\n    $mdToast.show($mdToast.simple().textContent('you have to sign in first').hideDelay(2000).position('top left'));\n  };\n\n  $scope.checkIfNamEmailNew = function (name, password, email) {\n    if (!(name && email && password)) {\n      $mdToast.show($mdToast.simple().textContent('Please fill all').hideDelay(2000).position('top left'));\n    } else {\n      AuthenticationHttpMethods.checkIfNamEmailNew(name, password, email).then(function (res) {\n        if (res.data) window.location.href = \"/login\";\n\n        if (!res.data) {\n          $mdToast.show($mdToast.simple().textContent('Name or email is already in use').hideDelay(2000).position('top left'));\n        }\n      });\n    }\n  };\n}]);\n\n//# sourceURL=webpack://project/./static/apps/Authentication/Authentication.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/apps/Authentication/Authentication.js"]();
/******/ 	
/******/ })()
;