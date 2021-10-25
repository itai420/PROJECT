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

/***/ "./static/apps/testimonies/testimonies.js":
/*!************************************************!*\
  !*** ./static/apps/testimonies/testimonies.js ***!
  \************************************************/
/***/ (() => {

eval("var Testimonies = angular.module('Testimonies', ['ngMaterial', 'ngMessages', 'navbar', 'testimoniesModule']);\nTestimonies.directive('testimony', function () {\n  var directive = {};\n  directive.restrict = 'E';\n  directive.templateUrl = \"/testimony.html\";\n  directive.scope = {\n    id: '=id',\n    testimony: '=testimony'\n  };\n\n  directive.controller = function ($scope, $timeout) {\n    $scope.isChozen = $scope.testimony._id === $scope.id;\n    $timeout(function () {\n      return $scope.isChozen = false;\n    }, 10000);\n  };\n\n  return directive;\n});\nTestimonies.controller('TestimoniesController', ['$timeout', '$scope', '$http', '$anchorScroll', '$location', '$mdDialog', '$mdToast', 'testimoniesHttpMethods', function ($timeout, $scope, $http, $anchorScroll, $location, $mdDialog, $mdToast, testimoniesHttpMethods) {\n  // $scope.getTestimonies = () => testimoniesHttpMethods.getTestimonies()\n  // $scope.IsUserLogged = () => testimoniesHttpMethods.IsUserLogged();\n  testimoniesHttpMethods.IsUserLogged().then(function (res) {\n    $scope.IsOut = res.data == \"\";\n  })[\"catch\"](function (err) {\n    return console.log(\"err is\" + err);\n  });\n\n  $scope.openToast = function () {\n    $mdToast.show($mdToast.simple().textContent('you have to sign in first').hideDelay(2000).position('top left'));\n  };\n\n  testimoniesHttpMethods.getTestimonies().then(function (res) {\n    $scope.Testimonies = res.data;\n    $scope.id = $location.url().substring(1);\n    $timeout(function () {\n      $anchorScroll();\n    }, 200);\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n  $scope.options = [\"no filter\", \"fracture\", \"inflammation\", \"rupture\"];\n  $scope.filter = \"no filter\";\n\n  $scope.fu = function () {\n    return console.log(\"this is \" + $scope.filter);\n  };\n\n  $scope.showDialog = function (ev) {\n    console.log(\"open modal\");\n    $mdDialog.show({\n      controller: DialogController,\n      templateUrl: '../addTestimony.html',\n      parent: angular.element(document.body),\n      targetEvent: ev,\n      locals: {},\n      clickOutsideToClose: true,\n      fullscreen: $scope.costumFullscreen\n    });\n  };\n\n  function DialogController($scope, $mdDialog) {\n    $scope.LevelOfinjuries = {\n      \"fracture\": [\"full fracture\", \"stress fracture\"],\n      \"inflammation\": [\"chronic inflammation\", \"acute inflammation\"],\n      \"rupture\": [\"complete rupture\", \"partial rupture\"]\n    };\n    $scope.activityLevel = [\"1-2 times a week\", \"3-4 times a week\", \"5-6 times a week\", \"7 times a week or more\"];\n    $scope.openLevel = true;\n\n    $scope.hide = function () {\n      $mdDialog.hide();\n    };\n\n    $scope.cancel = function () {\n      $mdDialog.cancel();\n    };\n\n    $scope.answer = function (answer) {\n      $mdDialog.hide(answer);\n    };\n\n    $scope.injuries = [\"fracture\", \"inflammation\", \"rupture\"];\n\n    $scope.updateLevel = function () {\n      $scope.openLevel = false;\n      $timeout(function () {\n        $scope.LevelOfinjuri = $scope.LevelOfinjuries[$scope.filter];\n      }, 0);\n    }; // $scope.Add=()=>{\n    //   return $http({\n    //     method: 'POST',\n    //     url: '/testimonies/addTestimonies',\n    //     headers: {\n    //       'Content-Type': 'application/json'\n    //     },\n    //     data: {\n    //     }\n    //   })\n    // }\n\n  }\n\n  ;\n}]);\n\n//# sourceURL=webpack://project/./static/apps/testimonies/testimonies.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./static/apps/testimonies/testimonies.js"]();
/******/ 	
/******/ })()
;