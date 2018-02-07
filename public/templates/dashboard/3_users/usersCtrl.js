var startCtrl = angular.module("usersCtrl", ['services']);




startCtrl.controller('usersCtrl',function($scope,$stateParams,$state,$mdDialog,loginService,$httpReqs, $mdSidenav){



$scope.items;

function getCustomers() {
 $httpReqs.AllBookings()
     .then(function (response) {
        $scope.items = response.data;
     }, function (error) {
         $scope.status = 'Unable to load customer data: ' + error.message;
     });
}getCustomers();

// >>>>>>>>>>>>>>>>>>>> new-request.html Controller <<<<<<<<<<<<<<<<<<<<< \\
  $scope.ViewRequest = function(request){
      $mdDialog.show({
      templateUrl: 'assests/templates/dialogs/new-request.html',

      controller: function($scope,$httpReqs){

      $scope.cancel = function(){
      $mdDialog.cancel();

      };
      
      $scope.request = request;
      console.log($scope.request);

      $scope.Confirmed = function(){
        $scope.request.Status = "confirmed";
        $httpReqs.UpdateBooking($scope.request)
            .then(function (response) {
                $mdDialog.hide();
                console.log("Updated");
                console.log(response.data)
            }, function(error) {
                 console.log("Error");
                 console.log(error.message)
            }); 
      }

      $scope.Canceled = function(){
        $scope.request.Status = "canceled";
        $httpReqs.UpdateBooking($scope.request)
            .then(function (response) {
                $mdDialog.hide();
                console.log("Updated");
                console.log(response.data)
            }, function(error) {
                 console.log("Error");
                 console.log(error.message)
            }); 
      }


      $scope.Delete = function(){
        var booking = $scope.request;
       console.log(booking);
        $httpReqs.DeleteBooking(booking)
            .then(function (response) {
                console.log("Deleted");
                console.log(response.data)
            }, function(error) {
                 console.log("Error");
                 console.log(error.message)
            }); 
      }


      },

      parent: angular.element(document.body),
      targetEvent: request,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen 
      })
    }
// >>>>>>>>>>>>>>>>>>>> Request-Preview Controller <<<<<<<<<<<<<<<<<<<<< \\


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
