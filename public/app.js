var myApp = angular.module('InsuranceApp',['ui.router','ngAnimate','ngMaterial','dashboardCtrl','loginCtrl','bookingsCtrl','reportsCtrl','usersCtrl']);

myApp.config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/login');

  $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: '/assests/templates/login/login.html',
      controller: 'loginCtrl',
      params : { selectedItem: null }
    })

    .state('dashboard', {
      url: '/dashboard',
      templateUrl: '/assests/templates/dashboard/0_dashboard.html',
      controller: 'dashboardCtrl'
    })

    .state('dashboard.bookings', {
      url: '/bookings',
      templateUrl: '/assests/templates/dashboard/1_bookings/bookings.html',
      controller: 'bookingsCtrl'
    })

    .state('dashboard.reports', {
      url: '/reports',
      templateUrl: '/assests/templates/dashboard/2_reports/reports.html',
      controller: 'reportsCtrl'
    })

    .state('dashboard.users', {
      url: '/users',
      templateUrl: '/assests/templates/dashboard/3_users/users.html',
      controller: 'usersCtrl'
    })

    .state('instruct', {
      url: '/instruct',
      templateUrl: '/assests/templates/2instruct/instructions.html',
      controller: 'instructCtrl',
      params : { selectedItem: null }
    })

/*
    .state('apply', {
      url: '/apply',
      templateUrl: '/assests/templates/3Apply/apply.html',
      controller: 'applyCtrl',
      params : { selectedItem: null }
    })

*/

});
