angular.module('bookingsAPI', []).factory('bookings', ['$http', function($http) {

    //var urlBase = 'http://localhost:5000';
    //var urlBase = 'https://kanikapp.herokuapp.com';

    var api = {};

//Booking APIs
    api.list = function (id) {
        return $http.get('/bookings');
    };

    api.post = function (booking) {
        return $http.post('/booking', booking);
    };

    api.put = function (booking) {
        return $http.put('/booking', booking);
    };

    api.delete = function (booking) {
        return $http.delete('/booking', booking);
    };

    return api;
}]);
