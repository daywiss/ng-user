'use strict';

angular.module('userWebApp', ['ui.router','angular-login'])
  //.constant('routes',{
    //user:'/api/user'
  //})
  .config(function($stateProvider,$urlRouterProvider,$locationProvider){
    //$urlRouterProvider.otherwise('/login')
    //console.log($stateProvider)
    $stateProvider
      //.state('app',
      //{
        //abstract:true
       //,template:'<ui-view></ui-view>'
      //})
      .state('app.home',
      {
        url:'/'
       ,templateUrl:'partials/main'
       ,controller:'MainCtrl'
       ,accessLevel:window.accessLevels.admin
      })
      //.state('app.login',
      //{
        //url:'/'
       //,templateUrl:'partials/login'
       //,controller:'LoginCtrl'
      //})
    $locationProvider.html5Mode(true)
  })

