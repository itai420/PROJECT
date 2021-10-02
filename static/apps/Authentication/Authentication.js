var authentication = angular.module('authentication', ['navbar','AuthenticationModule']);


authentication.controller('authenticationController', ['$scope', '$http','AuthenticationHttpMethods', function ($scope, $http,AuthenticationHttpMethods) {
    $scope.passwordType = "password";
    $scope.checkBoxColor = "black"

    $scope.showPassword = () => {
        $scope.passwordType = $scope.passwordType === "password" ? "text" : "password";
        $scope.checkBoxColor = $scope.checkBoxColor === "black" ? "white" : "black";

    }
    $scope.IsSigned = (name, password) => {
        if (!(name && password)) {
            $scope.errorEmpty = true
            setTimeout(() => $scope.errorEmpty = false, 0)
        }
        else {
            AuthenticationHttpMethods.isSigned(name,password).then(res => {
                console.log(res.data)
                if (res.data) window.location.href = "/home";
                else{
                    $scope.errorUser = true;
                    setTimeout(() => $scope.errorUser = false, 0)
                }
            })
        }

    }

    $scope.checkIfNamEmailNew = (name, password, email) => {
        if (!(name && email && password)) {
            $scope.errorEmpty = true
            setTimeout(() => $scope.errorEmpty = false, 0)
        }
        else {
            AuthenticationHttpMethods.checkIfNamEmailNew(name, password, email).then(res => {
                if (res.data) window.location.href = "/login";
                if (!res.data) {
                    $scope.errorTaken = true;
                    setTimeout(() => $scope.errorTaken = false, 1)
                }
            })
        }
    }
}]);


