var Testimonies = angular.module('Testimonies', ['ngMaterial','ngMessages', 'navbar','testimoniesModule']);

Testimonies.directive('testimony', () => {
  let directive = {}
  directive.restrict = 'E'
  directive.templateUrl = "/testimony.html"
  directive.scope = {
    id: '=id',
    testimony: '=testimony'
  }
  directive.controller = ($scope, $timeout) => {
    $scope.isChozen = $scope.testimony._id === $scope.id;
    $timeout(() => $scope.isChozen = false, 1000)
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
  $mdToast.simple().textContent('you have to sign in first').hideDelay(2000).position('top left')
  //   {
  // hiseDelay :0,
  // position:'top middle',
  // controller:ToastCtrl,
  // bindToController:true,
  // locals :{toastMessage:message},
  // templateUrl:'toast.html'
  // }
  )
}
testimoniesHttpMethods.getTestimonies().then(res => {
    $scope.Testimonies = res.data;
    $scope.id = $location.url().substring(1)
    $timeout(() => {$anchorScroll()}, 100)
  }).catch(err => console.log(err))

  $scope.options = ["no filter", "fracture", "inflammation", "rupture"]
  $scope.filter = "no filter"

  $scope.fu = () => console.log("this is " + $scope.filter)

  $scope.showDialog=(ev)=>{
    console.log("open modal")
    $mdDialog.show({
      controller:DialogController,
      templateUrl:'../addTestimony.html',
      parent:angular.element(document.body),
      targetEvent:ev,
      locals:{},
      clickOutsideToClose:true,
      fullscreen:$scope.costumFullscreen
    });
  }

  function DialogController($scope,$mdDialog){
    $scope.LevelOfinjuries= {"fracture":["שבר מאמץ","שבר מלא"],"inflammation":["דלקת אקוטית","דלקת כרונית"],"rupture":["קרע מלא","קרע חלקי"]}

  

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
    $timeout(() => {$scope.LevelOfinjuri=$scope.LevelOfinjuries[$scope.filter]
    },0)
  }


  $scope.Add=()=>{
    return $http({
      method: 'POST',
      url: '/testimonies/addTestimonies',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        
      }
    })
  }
};

}]);
