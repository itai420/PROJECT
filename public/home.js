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

/***/ "./static/apps/Home/Home.js":
/*!**********************************!*\
  !*** ./static/apps/Home/Home.js ***!
  \**********************************/
/***/ (() => {

eval("var Home = angular.module('Home', ['navbar', 'HomeModule']);\nHome.directive('drop', function () {\n  var directive = {};\n  directive.restrict = 'E';\n  directive.templateUrl = \"/drop.html\";\n  directive.scope = {\n    content: '=content'\n  };\n\n  directive.controller = function ($scope, $timeout, $interval) {\n    var delay = $scope.content.shift() * 1000;\n    console.log(delay + \"eeeeeeeeeeeee\");\n    console.log($scope.content);\n    var len = $scope.content.length;\n    $scope.currentPosition = 0;\n    $timeout($interval(function () {\n      return $scope.currentPosition = Math.floor(Math.random() * len);\n    }, 4000), delay);\n\n    $scope.goToTheTestimony = function (id) {\n      window.location.href = \"/testimonies#\" + id;\n    };\n\n    console.log($scope.currentPosition);\n  };\n\n  return directive;\n});\nHome.controller('Home', ['$scope', '$interval', '$window', '$timeout', 'HomeHttpMethods', function ($scope, $interval, $window, $timeout, HomeHttpMethods) {\n  $scope.goToTheTestimony = function (id) {\n    window.location.href = \"/testimonies#\" + id;\n  };\n\n  HomeHttpMethods.getQuotes().then(function (res) {\n    $scope.Quotes = res.data;\n    console.log(\"wwwww\" & $scope.Quotes);\n    var len = $scope.Quotes.length;\n    $scope.arr = [];\n    var x = 0;\n    var count = 1;\n\n    while ($scope.Quotes.length > 0) {\n      if (x == 9) $scope.arr[9] = $scope.Quotes.splice(0);else {\n        if (count == 1) $scope.arr[x] = [];\n        $scope.arr[x][count - 1] = $scope.Quotes.splice(0, 1)[0];\n\n        if (count >= Math.floor(len / 10)) {\n          if (len > 10 && len % 10 - 1 >= x) $scope.arr[x][count] = $scope.Quotes.splice(0, 1)[0];\n          count = 1;\n          x += 1;\n        } else {\n          count += 1;\n        }\n      }\n    }\n\n    var delay = [3.5, 1, 1.8, 2, 0, 0.5, 2.5, 2.2, 1.5, 0.2];\n    $scope.arr.forEach(function (element, index) {\n      element.unshift(delay[index]);\n    });\n    console.log($scope.arr); // $scope.arr = $scope.Quotes.map(element => [element]);\n  })[\"catch\"](function (err) {\n    return alert(err);\n  });\n}]);\n\n//# sourceURL=webpack://project/./static/apps/Home/Home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/apps/Home/Home.js"]();
/******/ 	
/******/ })()
;