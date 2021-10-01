var navbar = angular.module('navbar',[]);

navbar.directive('navbar',function(){
    let directive={}  
    directive.restrict='E'
    directive.templateUrl ="/navbar.html"
    directive.scope={}
    directive.controller=($scope,$http)=>{

      $scope.IsUserLogged = () => {
        return $http({
          method: 'POST',
          url: '/IsLogged',
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            "Question":"log"
          }
        })
      }
      $scope.IsUserManager = () => {
        return $http({
          method: 'POST',
          url: '/IsLogged',
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            "Question":"manager"
          }
        })
      }

    
      $scope.IsUserLogged().then(res => {
        console.log(res.data)
        $scope.IsOut=res.data == ""
        if($scope.IsOut){
          $scope.manager=false
        }
        else{
          $scope.IsUserManager().then(res=>{
            $scope.manager=res.data

          })
         }
      }).catch(err => console.log("err is" + err))
    }
    return directive
  
  });