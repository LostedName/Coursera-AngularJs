(function(){
    'use strict';
angular.module('myFirstApp',[])
.controller('myFirstController', function($scope)
{
$scope.name = "Karp";
$scope.sayHello = function () {
 return "Hello Coursera!";   
}
});
})();