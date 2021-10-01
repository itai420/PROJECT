var Authintication = angular.module('Authintication', ['navbar']);


Authintication.controller('AuthinticationController', ['$scope', '$http', function ($scope, $http) {
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
            $http({
                method: 'POST',
                url: '/login',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    name, password
                }
            }).then(res => {
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
            $http({
                method: 'POST',
                url: '/SignUp',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    name, password, email
                }
            }).then(res => {
                console.log("dddddddddddddd",res.data)
                if (res.data) window.location.href = "/login";
                if (!res.data) {
                    $scope.errorTaken = true;
                    setTimeout(() => $scope.errorTaken = false, 1)
                }
                // if (res.data === "email") {
                //     $scope.errorEmailTaken = true;
                //     setTimeout(() => $scope.errorEmailTaken = false, 0)

                // }
            })
        }
    }
}]);


