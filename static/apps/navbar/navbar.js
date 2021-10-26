import navbarModule from './navbarModule'

var navbar = angular.module('navbar',['navbarModule']);

navbar.directive('navbar',function(){
    let directive={}  
    directive.restrict='E'
    directive.templateUrl ="/navbar.html"
    directive.scope={}
    directive.controller=($scope,$http,navbarHttpMethods)=>{

    
      navbarHttpMethods.IsUserLogged().then(res => {
        $scope.IsOut=res.data == ""
        if($scope.IsOut){
          $scope.manager=false
        }
        else{
          navbarHttpMethods.IsUserManager().then(res=>{
            $scope.manager=res.data

          })
         }
      }).catch(err => console.log("err is" + err))
    }
    return directive
  
  });