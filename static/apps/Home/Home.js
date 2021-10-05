var Home = angular.module('Home', ['navbar', 'HomeModule']);


Home.directive('drop', () => {
  let directive = {}
  directive.restrict = 'E'
  directive.templateUrl = "/drop.html"
  directive.scope = {
    content: '=content'
  }
  directive.controller = ($scope,$timeout,$interval) => {

    let delay=$scope.content.shift()*1000
    console.log(delay+"eeeeeeeeeeeee")
    console.log($scope.content)
    let len= $scope.content.length
    $scope.currentPosition=0
    $timeout($interval(()=>$scope.currentPosition=Math.floor(Math.random()*len),4000),delay)
    $scope.goToTheTestimony = (id) => {
      window.location.href = "/testimonies#" + id
    }  
    console.log($scope.currentPosition)
  }
  return directive
})


Home.controller('Home', ['$scope', '$interval', '$window', '$timeout', 'HomeHttpMethods', function ($scope, $interval, $window, $timeout, HomeHttpMethods) {

  $scope.goToTheTestimony = (id) => {
    window.location.href = "/testimonies#" + id
  }

  HomeHttpMethods.getQuotes().then(res => {
    $scope.Quotes = res.data;
    console.log("wwwww"&$scope.Quotes)

    let len = $scope.Quotes.length
    $scope.arr = []
    let x = 0
    let count = 1
    while ($scope.Quotes.length > 0) {
      if (x == 9) $scope.arr[9] = $scope.Quotes.splice(0)
      else {
        if (count == 1) $scope.arr[x] = []
        $scope.arr[x][count - 1] = $scope.Quotes.splice(0, 1)[0]
        if (count >= Math.floor(len / 10)) {
          if (len>10 &&len % 10 - 1 >= x) $scope.arr[x][count] = $scope.Quotes.splice(0, 1)[0]
          count = 1
          x += 1
        }
        else {
          count += 1
        }
      }
    }
    let delay=[3.5,1,1.8,2,0,0.5,2.5,2.2,1.5,0.2]
    $scope.arr.forEach((element,index) => {
      element.unshift(delay[index])
    });

    console.log($scope.arr)
    // $scope.arr = $scope.Quotes.map(element => [element]);
  })
    .catch(err => alert(err))
}]);
