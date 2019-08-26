//app.js = view model

(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {

    $scope.name= "Yash";
    $scope.sayHello = function () {
        return "Hello Coursera!";
    };
});

}) ();