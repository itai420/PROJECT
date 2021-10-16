var authentication = angular.module('authentication', ['ngMaterial','ngMessages','navbar','AuthenticationModule']);


authentication.controller('authenticationController', ['$scope','AuthenticationHttpMethods','$mdToast', function ($scope,AuthenticationHttpMethods,$mdToast) {
    $scope.passwordType = "password";
    $scope.checkBoxColor = "black"

    $scope.showPassword = () => {
        $scope.passwordType = $scope.passwordType === "password" ? "text" : "password";
        $scope.checkBoxColor = $scope.checkBoxColor === "black" ? "white" : "black";

    }
    $scope.IsSigned = (name, password) => {
        if (!(name && password)) {
            $mdToast.show(
                $mdToast.simple().textContent('Please fill all').hideDelay(2000).position('top left')    )    }
        else {
            AuthenticationHttpMethods.isSigned(name,password).then(res => {
                console.log(res.data)
                if (res.data) window.location.href = "/home";
                else{        $mdToast.show(
                    $mdToast.simple().textContent('Incorrect username or password').hideDelay(2000).position('top left'))
                }
            })
        }

    }

    $scope.openToast = ()=>{
        $mdToast.show(
        $mdToast.simple().textContent('you have to sign in first').hideDelay(2000).position('top left')  )
      }
      
    $scope.checkIfNamEmailNew = (name, password, email) => {
        if (!(name && email && password)) {
            $mdToast.show(
                $mdToast.simple().textContent('Please fill all').hideDelay(2000).position('top left') )       }
        else {
            AuthenticationHttpMethods.checkIfNamEmailNew(name, password, email).then(res => {
                if (res.data) window.location.href = "/login";
                if (!res.data) {
                    $mdToast.show(
                        $mdToast.simple().textContent('Name or email is already in use').hideDelay(2000).position('top left') )               }
            })
        }
    }
}]);


