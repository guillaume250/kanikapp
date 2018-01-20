var loginCtrl = angular.module("loginCtrl", ['ngMaterial']);


loginCtrl.controller('loginCtrl',function($scope,$state,$mdDialog){

$scope.login = {};


  $scope.cancel = function() {
        $mdDialog.cancel();
      };



   $scope.Login = function(){
   	if ($scope.login.UserName === "Fabrice" && $scope.login.Password === "Fabrice") {
            $state.go('dashboard');

   	} else {

    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#LogX')))
        .clickOutsideToClose(true)
        .title('User not found')
        .textContent('Incorrect Username or Password')
        .ariaLabel('Not Found')
        .ok('Ok')
        //.targetEvent(ev)
    )

   	}
   }
});
