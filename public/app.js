var myApp = angular.module('InsuranceApp',['ui.router','ngAnimate','ngMaterial','dashboardCtrl','loginCtrl']);

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
      templateUrl: '/assests/templates/dashboard/dashboard.html',
      controller: 'dashboardCtrl'
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
