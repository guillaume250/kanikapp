var loginCtrl = angular.module("loginCtrl", ['ngMaterial']);

loginCtrl.controller('loginCtrl',['$scope', function($scope){
  $scope.cancel = function() {
        $mdDialog.cancel();
      };
}]);
