'use strict';

angular.module('userWebApp', ['ui.router','angular-login'])
  .constant('routes',{
    user:'/api/user'
  })
  .config(function($stateProvider,$urlRouterProvider,$locationProvider){
    $urlRouterProvider.otherwise('/')
    $stateProvider
      .state('home',
      {
        url:'/'
       ,templateUrl:'partials/main'
       ,controller:'MainCtrl'
      })
    $locationProvider.html5Mode(true)
  })

