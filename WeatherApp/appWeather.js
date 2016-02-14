//Model

var weatherApp = angular.module('weatherApp',['ngRoute', 'ngResource']);

//
weatherApp.config(function($routeProvider){
    
    $routeProvider
    
    .when('/',{
        templateUrl:'pages/home.html',
        controller:'homeController'
    })
    
    .when('/home',{
        templateUrl:'pages/home.html',
        controller:'homeController'
    })
    
    .when('/forecast',{
        templateUrl:'pages/forecast.html',
        controller:'forecastController'
    })
    
    .when('/forecast/:day',{
        templateUrl:'pages/forecast.html',
        controller:'forecastController'
    })
    
});

// Services
weatherApp.service('cityService',function(){
    
    this.city = "New York, NY";
    
});

// Controllers
weatherApp.controller('homeController',['$scope', 'cityService',function($scope,cityService){
    
   $scope.city = cityService.city;
    
    $scope.$watch('city',function(){
        cityService.city = $scope.city;
        console.log($scope.city);
    });
}]);

weatherApp.controller('forecastController',['$scope','$resource','cityService','$routeParams', function($scope,$resource,cityService,$routeParams){
    $scope.day = $routeParams.day || 2;
    $scope.city = cityService.city;
     console.log(cityService.city);
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=643f29f9c1cd09638088516d79ecc152",{callback: "JSON_CALLBACK"},{ get: { method: "JSONP" }});
    $scope.weatherResult = $scope.weatherAPI.get({q:$scope.city,cnt:$scope.day});
    console.log($scope.weatherResult);
    
    $scope.convertToFah = function(deg){
        return Math.round(1.8*(deg-273)+32);
    }
    
    $scope.convDate = function(dt){
        return new Date(dt*1000);
    }
    
}]);


