var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
        .when("/dashboard", {
            templateUrl: "public/partials/dashboard.html",
            controller: "homeCtrl"
        })
        .when("/dashboard1", {
            templateUrl: "public/partials/dashboard1.html",
            controller: "dashboard1"
        })
        
        .otherwise({ redirectTo: "/dashboard" }); //dashboard
    }
  ]);
