(function(angular) {
  'use strict';
  
  var module = angular.module('tourDirectiveApp.tourDirective', []);

  module.directive('tour', function() {
    return {
      template: 'Name: {{customer.name}} Address: {{customer.address}}'
    };
  });


})(window.angular);