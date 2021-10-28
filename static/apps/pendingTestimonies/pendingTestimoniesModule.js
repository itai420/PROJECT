const pendingTestimoniesModule = angular.module('pendingTestimoniesModule', []);
pendingTestimoniesModule.factory('pendingTestimoniesHttpMethods', ['$http', pendingTestimoniesHttpMethodsFunc])
function pendingTestimoniesHttpMethodsFunc($http) {
    const httpService = {}
    httpService.Approving = (id) => {
        return $http({
            method: 'POST',
            url: '/pendingTestimonies',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'change': "approved",
                'tetimonieId': id
            }
        })
    }
    httpService.Denied = (id) => {
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

    httpService.getTestimonies = () => {
        return $http({
            method: 'POST',
            url: '/testimonies',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
            }
        })
    }

    return httpService
}
export default pendingTestimoniesModule