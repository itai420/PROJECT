import '../../vendors/angular-material/angular-material.min.css'

import '../../../static/css/testimonies.css'
import '../../vendors/angular.min.js'
import '../../vendors/angular-material/angular-material.min.js'
import '../../vendors/angular-aria/angular-aria.min.js'
import '../../vendors/angular-animate/angular-animate.min.js'
import '../../vendors/angular-messages/angular-messages.min.js'
// import 'https://kit.fontawesome.com/685fee1bbe.js'
import testimoniesModule from './testimoniesModule'
import navbar from '../navbar/navbar'



var Testimonies = angular.module('Testimonies', ['ngMaterial','ngMessages', 'navbar','testimoniesModule']);

Testimonies.directive('testimony', () => {
  let directive = {}
  directive.restrict = 'E'
  directive.templateUrl = "/directives/testimony.html"
  directive.scope = {
    id: '=id',
    testimony: '=testimony'
  }
  directive.controller = ($scope, $timeout) => {
    $scope.isChozen = $scope.testimony._id === $scope.id;
    $timeout(() => $scope.isChozen = false, 10000)
  }
  return directive
})


Testimonies.controller('TestimoniesController', ['$timeout', '$scope', '$http', '$anchorScroll', '$location','$mdDialog', '$mdToast','testimoniesHttpMethods', function ($timeout, $scope, $http, $anchorScroll, $location, $mdDialog, $mdToast,testimoniesHttpMethods) {
  // $scope.getTestimonies = () => testimoniesHttpMethods.getTestimonies()

  // $scope.IsUserLogged = () => testimoniesHttpMethods.IsUserLogged();

  testimoniesHttpMethods.IsUserLogged().then(res => {
    $scope.IsOut=res.data == ""
  }).catch(err => console.log("err is" + err))

$scope.openToast = ()=>{
  $mdToast.show(
  $mdToast.simple().textContent('you have to sign in first').hideDelay(2000).position('top left')  )
}
testimoniesHttpMethods.getTestimonies().then(res => {
    $scope.Testimonies = res.data;
    $scope.id = $location.url().substring(1)
    $timeout(() => {$anchorScroll()}, 300)
  }).catch(err => console.log(err))

  $scope.options = ["no filter", "fracture", "inflammation", "rupture"]
  $scope.filter = "no filter"

  $scope.fu = () => console.log("this is " + $scope.filter)

  $scope.showDialog=(ev)=>{
    console.log("open modal")
    $mdDialog.show({
      controller:DialogController,
      templateUrl:'../directives/addTestimony.html',
      parent:angular.element(document.body),
      targetEvent:ev,
      locals:{},
      clickOutsideToClose:true,
      fullscreen:$scope.costumFullscreen
    });
  }

  function DialogController($scope,$mdDialog){
    $scope.LevelOfinjuries= {"fracture":["full fracture","stress fracture"],"inflammation":["chronic inflammation","acute inflammation"],"rupture":["complete rupture","partial rupture"]}

    $scope.activityLevel=["1-2 times a week","3-4 times a week","5-6 times a week","7 times a week or more"]
    $scope.openLevel=true;

    $scope.hide=()=>{
      $mdDialog.hide();
    };
    $scope.cancel=()=>{
      $mdDialog.cancel();
    };
  $scope.answer=(answer)=>{
    $mdDialog.hide(answer);
  }
  $scope.injuries= ["fracture","inflammation","rupture"]

  $scope.updateLevel=()=>{
    $scope.openLevel=false;
    $timeout(() => {$scope.LevelOfinjuri=$scope.LevelOfinjuries[$scope.filter]
    },0)
  }


  // $scope.Add=()=>{
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
};

}]);
