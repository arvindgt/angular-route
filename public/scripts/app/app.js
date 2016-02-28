var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
        .when("/home", { // if URL is /home then use home.html and homeCtrl controller //
            templateUrl: "public/partials/home.html",
            controller: "homeCtrl"
        })
        .when("/page1", { // if URL is /page1 then use page1.html and page1Ctrl controller //
            templateUrl: "public/partials/page1.html",
            controller: "page1Ctrl"
        })
        .otherwise({ redirectTo: "/home" }); //default route for home page //
    }
  ]);
