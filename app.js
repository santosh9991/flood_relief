// MODULE
// we are going to put only one variable into global namespace, not to polute it and that variable is angularApp
var angularApp = angular.module('angularApp', []);
// angular has a module method on it which accept two values: 1. app name and 2. dependencies
//everything should be added to angularApp variable so that it doesn't polute the name space
// CONTROLLERS
//declaring a controller
//we are trying to connect the view with the model, this is the controller for the view
angularApp.controller(
    //controller name
    'mainController', 
    //place to put the code assosiated with the controller
    
    ['$scope', function ($scope) {
    //Any code inside here is assosiated with the part of the view defined by the controller name
    //mainController in index.html. This is a model code. Model code and the corresponding view is 
    //bound to each other without doing anything by angular code that is already in angular.min.js 
        

}]);
