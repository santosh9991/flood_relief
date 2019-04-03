// MODULE
// we are going to put only one variable into global namespace, not to polute it and that variable is angularApp
var angularApp = angular.module('angularApp',
                                //list of modules the app is dependent on angularApp are declared as list
                                //ng messages module is included. We include the name of the module to say our app is dependent on this
                                ['ngMessages']);
// angular has a module method on it which accept two values: 1. app name and 2. dependencies
//everything should be added to angularApp variable so that it doesn't polute the name space
// CONTROLLERS
//declaring a controller
//we are trying to connect the view with the model, this is the controller for the view
angularApp.controller(
    //controller name
    'mainController', 
    //place to put the code assosiated with the controller
    
    [
        //scope binds the model and view togeather, object called scope and is a service
        //all angularjs services start with $ sign
        '$scope','$log','$filter','$timeout', function (
        //angularjs injected the $scope object for us. This is called dependency injection
        // we can add on to the scope object. Eg: $scope.name = "santosh"
        $scope,$log,$filter,$timeout) {
        //Any code inside here is assosiated with the part of the view defined by the controller name
        //mainController in index.html. This is a model code. Model code and the corresponding view is 
        //bound to each other without doing anything by angular code that is already in angular.min.js 
        //whatever we put in scope, it is available in view
        $scope.name = 'Santosh';
        $scope.handle=''
        $scope.characters =5
        $scope.rules = [{
        "ruleName":"Must be 5",
        "ruleName":"Must be 4",
        "ruleName":"Must be 3"
        }]
        $scope.lowercase = function(){
            return $filter('lowercase')($scope.handle)
        }
        $scope.$watch('handle',function(newValue,oldValue){
            console.log("changed!")
            console.log("old:",oldValue)
            console.log("new:",newValue)
        })
//        setTimeout(function(){
//            //$scope.handle is out of scope if you do not 
//            $scope.$apply(function(){
//            $scope.handle="newHandle"
//            console.log("setTimeout")
//            });
//        },3000)
//    
}]);
