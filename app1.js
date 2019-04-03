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
angularApp.service('nameService',function(){
    var self = this;
    var name = "Santosh Kesireddy";
    var nameLenght = function(){
        return self.name.length;
    };
})
angularApp.directive('searchResults',function(){
    return {
        templateUrl:"directives/searchresult.html",
        
           }
})

angularApp.controller('mainController',["$scope","$location","$log","nameService",function($scope,$location,$log,nameService){
    $scope.Person = {
        name:"Santosh reddy",
        Address:"9001 Amberglen blvd"
    }
//    $scope.name = "Santosh"
//    console.log(nameService)
//    console.log(nameService.nameLength())
}]);

angularApp.controller('secondController',["$scope","$location","$log","$routeParams",function($scope,$location,$log,$routeParams){
    $scope.name="Kittu"
    $scope.num =$routeParams.num
}]);