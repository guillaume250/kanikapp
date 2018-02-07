var startCtrl = angular.module("dashboardCtrl", ['services']);




startCtrl.controller('dashboardCtrl',function($scope,$stateParams,$state,$mdDialog,loginService,$httpReqs, $mdSidenav){

  function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }
$scope.toggleLeft = buildToggler('left');
$scope.close = function () {$mdSidenav('left').close()};


$scope.LogOut = function(){
  $state.go('login')
}



});
