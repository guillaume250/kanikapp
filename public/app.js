var myApp = angular.module('InsuranceApp',['ui.router','ngAnimate','ngMaterial','startCtrl','loginCtrl']);

myApp.config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/start');

  $stateProvider
    .state('start', {
      url: '/start',
      templateUrl: '/assests/templates/1start/start.html',
      controller: 'startCtrl'
    })

    .state('instruct', {
      url: '/instruct',
      templateUrl: '/assests/templates/2instruct/instructions.html',
      controller: 'instructCtrl',
      params : { selectedItem: null }
    })

    .state('apply', {
      url: '/apply',
      templateUrl: '/assests/templates/3Apply/apply.html',
      controller: 'applyCtrl',
      params : { selectedItem: null }
    })
});
