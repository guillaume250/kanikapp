angular
  .module("bookingsCtrl", ["bookingsAPI"])
  .controller("bookingsCtrl", function(
    $scope,
    $stateParams,
    $state,
    $mdDialog,
    bookings
  ) {
    $scope.items;
    function getBookings() {
      bookings.list().then(
        function(response) {
          $scope.items = response.data;
        },
        function(error) {
          $scope.status = "Unable to load customer data: " + error.message;
        }
      );
    }
    getBookings();

    // >>>>>>>>>>>>>>>>>>>> new-request.html Controller <<<<<<<<<<<<<<<<<<<<< \\
    $scope.ViewRequest = function(request) {
      $mdDialog.show({
        templateUrl: "assests/templates/dialogs/new-request.html",

        controller: function($scope, bookings) {
          $scope.cancel = function() {
            $mdDialog.cancel();
          };

          $scope.request = request;
          console.log($scope.request);

          $scope.Confirmed = function() {
            $scope.request.Status = "confirmed";
            bookings.put($scope.request).then(
              function(response) {
                $mdDialog.hide();
                console.log("Updated");
                console.log(response.data);
              },
              function(error) {
                console.log("Error");
                console.log(error.message);
              }
            );
          };

          $scope.Canceled = function() {
            $scope.request.Status = "canceled";
            bookings.put($scope.request).then(
              function(response) {
                $mdDialog.hide();
                console.log("Updated");
                console.log(response.data);
              },
              function(error) {
                console.log("Error");
                console.log(error.message);
              }
            );
          };
          $scope.Delete = function() {
            var booking = $scope.request;
            console.log(booking);
            bookings.delete(booking).then(
              function(response) {
                console.log("Deleted");
                console.log(response.data);
              },
              function(error) {
                console.log("Error");
                console.log(error.message);
              }
            );
          };
        },
        parent: angular.element(document.body),
        targetEvent: request,
        clickOutsideToClose: true,
        fullscreen: $scope.customFullscreen
      });
    };

    $scope.LogOut = function() {
      $state.go("login");
    };
  });
