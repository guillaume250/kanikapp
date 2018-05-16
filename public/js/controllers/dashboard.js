angular.module("dashboardCtrl", []).controller('dashboardCtrl',function($scope,$stateParams,$state,$mdDialog, $mdSidenav){


  function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }
$scope.toggleLeft = buildToggler('left');
$scope.close = function () {
// Component lookup should always be available since we are not using `ng-if`
$mdSidenav('left').close()

};
});
