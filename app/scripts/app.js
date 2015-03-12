'use strict';

/**
 * @ngdoc overview
 * @name tourDirectiveApp
 * @description
 * # tourDirectiveApp
 *
 * Main module of the application.
 */
angular
  .module('tourDirectiveApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'tourDirectiveApp.mptTourDirective'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('MainCtrl', ['$scope', function($scope) {
    $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    };
  }])
