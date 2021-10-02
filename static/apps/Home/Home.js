var Home = angular.module('Home', ['navbar','HomeModule']);


Home.directive('drop', () => {
  let directive = {}
  directive.restrict = 'E'
  directive.templateUrl = "/drop.html"
  directive.scope = {
    content: '=content'
  }
  directive.controller = ($scope) => {
  }
  return directive
})


Home.controller('Home', ['$scope', '$http', '$window', '$timeout','HomeHttpMethods', function ($scope, $http, $window, $timeout,HomeHttpMethods) {

  $scope.goToTheTestimony = (id) => {
    window.location.href = "/testimonies#" + id
  }

  HomeHttpMethods.getQuotes().then(res => {
    $scope.Quotes = res.data;
    // let len = $scope.Quotes.length;
    // let x=0
    // let count=1
    // for(let i in len){
    //   if(x==9)$scope.arr[9]=$scope.Quotes
    //   $scope.arr[x]=$scope.Quotes[i-1]
    //   if(count==len/10){
    //     count=0
    //     x+=1
    //   }
    //   else{
    //     count+=1
    //   }
    // }
    $scope.arr = $scope.Quotes.map(element => [element]);
    console.log($scope.arr)
  })
    .catch(err => alert(err))
}]);
