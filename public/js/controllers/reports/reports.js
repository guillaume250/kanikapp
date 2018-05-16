angular.module("reportsCtrl", []).controller('reportsCtrl',function($scope){

$scope.title = "Features under development"
$scope.contents = [
  "Pie Chart of Number of Customers per month, the pie chart shows customers by name to check the customer frequency",
  "Advanced search customer by type of subscription, pay as you go or monthly subscription",
  "Single chart for new, confirmed and canceled bookings"
]
});
