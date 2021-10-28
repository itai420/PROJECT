import '../../../static/css/pendingTestimonies.css'
import '../../vendors/angular.min.js'
import '../../vendors/angular-material/angular-material.min.js'
import '../../vendors/angular-aria/angular-aria.min.js'
import '../../vendors/angular-animate/angular-animate.min.js'
import '../../vendors/angular-messages/angular-messages.min.js'
import '../../vendors/angular-material/angular-material.min.css'

import pendingTestimoniesModule from './pendingTestimoniesModule'
import navbar from '../navbar/navbar'


var pendingTestimonies = angular.module('pendingTestimonies', ['ngMaterial', 'ngMessages', 'navbar','pendingTestimoniesModule']);

pendingTestimonies.directive('testimony', () => {
  let directive = {}
  directive.restrict = 'E'
  directive.templateUrl = "/directives/pendingTestimony.html"
  directive.scope = {
    id: '=id',
    testimony: '=testimony'
  }
  directive.controller = ($scope, $timeout, $http,pendingTestimoniesHttpMethods) => {
    $scope.status = $scope.testimony.Approved

    $scope.Approving = (id) => {
      $scope.status = "approved"
      pendingTestimoniesHttpMethods.Approving(id)

    }

    $scope.Denied = (id) => {
      $scope.status = "denied"
      pendingTestimoniesHttpMethods.Denied(id)
            return $http({
        method: 'POST',
        url: '/pendingTestimonies',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          'change': "denied",
          'tetimonieId': id
        }
      })

    }

    console.log($scope.testimony)
    console.log($scope.id)
    $scope.isChozen = $scope.testimony._id === $scope.id;
    $timeout(() => $scope.isChozen = false, 1000)
  }
  return directive
})


pendingTestimonies.controller('pendingTestimoniesController', ['$timeout', '$scope', '$http', '$anchorScroll', '$location', '$mdDialog', '$mdToast','pendingTestimoniesHttpMethods',
function ($timeout, $scope, $http, $anchorScroll, $location, $mdDialog, $mdToast,pendingTestimoniesHttpMethods) {

  // $scope.getTestimonies = () => pendingTestimoniesHttpMethods.getTestimonies()


  pendingTestimoniesHttpMethods.getTestimonies().then(res => {
    $scope.myTestimonies = res.data;
    console.log($scope.myTestimonies)
  }).catch(err => console.log(err))



  $scope.options = ["filter by status", "pending", "approved", "denied"]
  $scope.filter = $scope.options[0]

  $scope.fu = () => console.log($scope.filter)



}]);
