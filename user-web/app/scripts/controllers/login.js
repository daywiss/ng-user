'use strict';

angular.module('userWebApp')
  .config(function($stateProvider){
    $stateProvider
      .state('app.login',{
        url:'/login'
       ,templateUrl:'partials/login'
       ,controller:'LoginCtrl'
       ,accessLevel: window.accessLevels.anon
      })
  })
  .controller('LoginCtrl', function ($scope, $http, $state, $stateParams, loginService, $timeout) {
    //Expose $state and $stateParams to the <body> tag
    $scope.$state = $state;
    $scope.$stateParams = $stateParams;

    console.log($scope)
    // loginService exposed and a new Object containing login user/pwd
    $scope.ls = loginService;
    $scope.login = {
      working: false,
      wrong: false
    };
    $scope.loginMe = function () {
      // setup promise, and 'working' flag
      var loginPromise = $http.post('/api/login', $scope.login);
      $scope.login.working = true;
      $scope.login.wrong = false;

      loginService.loginUser(loginPromise);
      loginPromise.error(function () {
        console.log('login error',arguments)
        $scope.login.wrong = true;
        $timeout(function () { $scope.login.wrong = false; }, 8000);
      });
      loginPromise.finally(function () {
        console.log('login finished')
        $scope.login.working = false;
      });
    };
    $scope.logoutMe = function () {
      loginService.logoutUser($http.get('/api/logout'));
    };
  });
