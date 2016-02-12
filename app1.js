var myApp = angular.module('myApps',['ngRoute']);

myApp.config(function($routeProvider){
    
    $routeProvider
    
    .when('/',{
        templateUrl : 'pages/main.html',
        controller : 'mainController'
    })
    
    .when('/second/:num',{
        templateUrl : 'pages/second.html',
        controller : 'secondController'
    })
})

myApp.controller('mainController',['$scope','$log',function($scope,$log){
   $scope.name = "Hello";
}]);

myApp.controller('secondController',['$scope','$log','$routeParams',function($scope,$log,$routeParams){
   $scope.name = "World----";
   $scope.num = $routeParams.num;
}]);