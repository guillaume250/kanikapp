angular
  .module("routes", [])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider

      .state("login", {
        url: "/login",
        templateUrl: "/assests/templates/login.html",
        controller: "loginCtrl",
        params: { selectedItem: null }
      })

      .state("dashboard", {
        url: "/dashboard",
        templateUrl: "/assests/templates/dashboard.html",
        controller: "dashboardCtrl"
      })

      .state("dashboard.bookings", {
        url: "/bookings",
        templateUrl: "/assests/templates/bookings/bookings.html",
        controller: "bookingsCtrl"
      })

      .state("dashboard.reports", {
        url: "/reports",
        templateUrl: "/assests/templates/reports/reports.html",
        controller: "reportsCtrl"
      })

      .state("dashboard.users", {
        url: "/users",
        templateUrl: "/assests/templates/users/users.html",
        controller: "usersCtrl"
      });
    /*
      .state('instruct', {
        url: '/instruct',
        templateUrl: '/assests/templates/2instruct/instructions.html',
        controller: 'instructCtrl',
        params : { selectedItem: null }
      })
*/
  });
