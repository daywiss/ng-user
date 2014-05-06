'use strict';

angular.module('userWebApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }
    ,{
      'title': 'Register',
      'link': '/register'
    }];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
