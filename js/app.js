// Ionic Starter main

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('r3vl', ['ionic', 'r3vl.controllers', 'ionMdInput'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        // Turn off caching for demo simplicity's sake
        $ionicConfigProvider.views.maxCache(0);
        $ionicConfigProvider.tabs.position('bottom');
        /*
        // Turn off back button text
        $ionicConfigProvider.backButton.previousTitleText(false);
        */

        $stateProvider.state('main', {
            url: '/main',
            abstract: true,
            templateUrl: 'templates/main.html',
            controller: 'MainCtrl'
        })

            .state('main.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html',
                        controller: 'HomeCtrl'
                    },
                    'fabContent': {
                        template: ''
                    }
                }
            })

            .state('main.app', {
                url: '/app',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/app.html',
                        controller: 'AppCtrl'
                    }
                }
            })

            .state('main.join', {
                url: '/join',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/join.html',
                        controller: 'JoinCtrl'
                    }
                }
            })
            .state('main.create', {
                url: '/create',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/create.html',
                        controller: 'CreateCtrl'
                    }
                }
            })
        ;

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/main/home');
    });
