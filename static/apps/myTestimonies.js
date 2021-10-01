var myTestimonies = angular.module('myTestimonies', ['ngMaterial','ngMessages', 'navbar']);

myTestimonies.directive('testimony', () => {
  let directive = {}
  directive.restrict = 'E'
  directive.templateUrl = "/testimony.html"
  directive.scope = {
    id: '=id',
    testimony: '=testimony'
  }
  directive.controller = ($scope, $timeout) => {
    console.log($scope.testimony)
    console.log($scope.id)
    $scope.isChozen = $scope.testimony._id === $scope.id;
    $timeout(() => $scope.isChozen = false, 1000)
  }
  return directive
})


myTestimonies.controller('myTestimoniesController', ['$timeout', '$scope', '$http', '$anchorScroll', '$location','$mdDialog', '$mdToast', function ($timeout, $scope, $http, $anchorScroll, $location, $mdDialog, $mdToast) {
  $scope.getMyTestimonies = () => {
    return $http({
      method: 'POST',
      url: '/mytestimonies',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
      }
    })
  }


  $scope.getMyTestimonies().then(res => {
    $scope.myTestimonies = res.data;
    console.log($scope.myTestimonies)
  }).catch(err => console.log(err))

  $scope.options = ["no filter", "fracture", "inflammation", "rupture"]
  $scope.filter = "no filter"

  $scope.fu = () => console.log("this is " + $scope.filter)


}]);
