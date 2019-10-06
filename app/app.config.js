(function () {
  'use strict';

  angular.module('rimSmartApp')
  .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');
      $stateProvider
          .state('home', {
              url: '/home',
              templateUrl: 'home/home.html',
              controller: 'HomeController as vm'
          })

  })
})();

