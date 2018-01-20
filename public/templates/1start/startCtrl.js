var startCtrl = angular.module("startCtrl", ['services']);




startCtrl.controller('startCtrl',['$scope','$stateParams','loginService','$httpReqs', function($scope,$stateParams,loginService,$httpReqs){

$scope.items;

function getCustomers() {
 $httpReqs.AllBookings()
     .then(function (response) {
        $scope.items = response.data;
     }, function (error) {
         $scope.status = 'Unable to load customer data: ' + error.message;
     });
}

getCustomers();


        $scope.selectedItem;
        $scope.getSelectedText = function() {
          if ($scope.selectedItem !== undefined) {
            return "You have selected: " + $scope.selectedItem;

          } else {
            return "Please select an insurance Company";
          }
        };

           $scope.showLoginDialog = function(ev) {
              loginService.LoginPopUp(ev);
             };



}]);
