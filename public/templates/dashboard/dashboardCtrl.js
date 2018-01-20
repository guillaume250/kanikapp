var startCtrl = angular.module("dashboardCtrl", ['services']);




startCtrl.controller('dashboardCtrl',function($scope,$stateParams,$state,$mdDialog,loginService,$httpReqs){

$scope.items;

function getCustomers() {
 $httpReqs.AllBookings()
     .then(function (response) {
        $scope.items = response.data;
     }, function (error) {
         $scope.status = 'Unable to load customer data: ' + error.message;
     });
}getCustomers();

// >>>>>>>>>>>>>>>>>>>> Click on Request <<<<<<<<<<<<<<<<<<<<< \\
  $scope.ViewRequest = function(request){
    console.log(request);
      $mdDialog.show({
      templateUrl: 'assests/templates/dialogs/request-preview.html',

      controller: function($scope){

      $scope.cancel = function(){
      $mdDialog.cancel();

      };

      
      $scope.request = request;
      console.log($scope.request);
      },

      parent: angular.element(document.body),
      targetEvent: request,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen 
      })
    }
// >>>>>>>>>>>>>>>>>>>> Click on Request <<<<<<<<<<<<<<<<<<<<< \\


        $scope.selectedItem;
        $scope.getSelectedText = function() {
          if ($scope.selectedItem !== undefined) {
            return "You have selected: " + $scope.selectedItem;
          } else {
            return "Please select an insurance Company";
          }
        };

$scope.LogOut = function(){
  $state.go('login')
}



});
