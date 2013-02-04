'use strict';

var bamboomtown2App = angular.module('bamboomtown2App', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'AddCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/reviews', {
        templateUrl: 'views/reviews.html',
        controller: 'ReviewsCtrl'
      })
      .when('/sizing', {
        templateUrl: 'views/sizing.html',
        controller: 'SizingCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/media', {
        templateUrl: 'views/media.html',
        controller: 'MediaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

  
