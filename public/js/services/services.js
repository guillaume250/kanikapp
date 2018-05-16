angular.module('bookingAPIs')

var urlBase = '/api/customers';
.factory('bookings', ['$http', function($http) {
    var api = {};
//Booking APIs
    api.list = function (id) {
        return $http.get(urlBase + '/bookings');
    };
    api.post = function (booking) {
        return $http.post(urlBase + '/booking', booking);
    };
    api.put = function (booking) {
        return $http.put(urlBase + '/booking', booking);
    };
    api.delete = function (booking) {
        return $http.delete(urlBase + '/booking', booking);
    };
    //Users APIs
    api.updateCustomer = function (username) {
        return $http.get(urlBase + '/' + username)
    };
    return api;
}])
.factory('users', ['$http', function($http) {
    //Users APIs
    api.login = function (login) {
        return $http.get(urlBase + '/' + username)
    };
    return api;
}])
