var myApp = angular.module('myApp',[]); //Javascript array of dependencies

myApp.controller('mainController',['$scope','$timeout','$filter',function($scope,$timeout,$filter){
//    $log.log("Hello");
//    $log.info("Information");
//    $log.warn("Warning");
//    $log.debug("Some Debugging");
//    $log.error("Sorry for the error")
//    
//    $scope.name = 'Soumayjit';
//    $scope.formattedname = $filter('uppercase')($scope.name);
//    console.log($scope.formattedname);
//    $log.info($scope);
    $scope.name = 'Soumyajit';
    $timeout(function(){
        $scope.name = "Jit";
    },2000);
    
    $scope.handle ='';
    $scope.lowerHandle = function(){
        return $filter('lowercase')($scope.handle);
    }
    
    $scope.characters = 5;
    
    $scope.$watch('handle',function(newVal,oldVal){
        console.info('changed');
        console.log("OldValue: "+oldVal);
        console.log("NewValue: "+newVal);
    });
    $scope.name1 = "Coder";                                     
    $scope.rules = [
        {rulename: "Must be 5 characters"},
        {rulename: "Must be unique"},
        {rulename: "Must be cool"}
    ]
}])