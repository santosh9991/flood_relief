var angularApp = angular.module('angularApp',['ngRoute'])
angularApp.config(function($routeProvider){
    //route provider provides the routes. It decides what to do based on the hash provided
    //
    $routeProvider
    .when('/',{
        templateUrl:"pages/main.html",
        controller:"mainController"
    })
    .when('/second/:num',{
        templateUrl:"pages/second.html",
        controller:"secondController"
        
    })
    
})
angularApp.controller('mainController',["$scope","$location","$log",function($scope,$location,$log){
    $scope.name = "Santosh"
}]);

angularApp.controller('secondController',["$scope","$location","$log","$routeParams",function($scope,$location,$log,$routeParams){
    $scope.name="Kittu"
    $scope.num =$routeParams.num
}]);