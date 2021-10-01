var Home = angular.module('Home', ['navbar']);


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


Home.controller('Home', ['$scope', '$http', '$window', '$timeout', function ($scope, $http, $window, $timeout) {

  $scope.getQuotes = () => {
    return $http({
      method: 'POST',
      url: '/home',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
      }
    })
  }

  $scope.goToTheTestimony = (id) => {
    window.location.href = "/testimonies#" + id
  }

  $scope.getQuotes().then(res => {
    console.log(res.data)
    $scope.Quotes = res.data;
    $scope.Quotes.push({ _id: 1, Quote: 'my friend recomended me about it but i said its sound to good to be true' });
    $scope.arr = $scope.Quotes.map(element => [element]);
    console.log($scope.arr)
  })
    .catch(err => alert(err))
}]);
