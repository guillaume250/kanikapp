var services = angular.module("services", ['ngMaterial']);

services.service('loginService',function($mdDialog){

  this.LoginPopUp = function(ev) {
      $mdDialog.show({

       //******* controller *********//

      controller: function ($scope,$state) {
        $scope.cancel = function() {
              $mdDialog.cancel();
            };

      $scope.login = function() {
                  $mdDialog.cancel();
                  $state.go('apply');

                };

    },
        templateUrl: '/assests/templates/login/login.html',

        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        //fullscreen: $scope.customFullscreen
      })
    };
});

services.factory('$httpReqs', ['$http', function($http) {

   var urlBase = 'https://kanikapp.herokuapp.com';
   var data = {};

   data.AllBookings = function () {
       return $http.get(urlBase + '/books');
   };
      return data;

      }]);


/*
   data.getCustomer = function (id) {
       return $http.get(urlBase + '/' + id);
   };

   data.insertCustomer = function (cust) {
       return $http.post(urlBase, cust);
   };

   data.updateCustomer = function (cust) {
       return $http.put(urlBase + '/' + cust.ID, cust)
   };

   data.deleteCustomer = function (id) {
       return $http.delete(urlBase + '/' + id);
   };

   data.getOrders = function (id) {
       return $http.get(urlBase + '/' + id + '/orders');
   }; */
