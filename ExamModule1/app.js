(function (){
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheck);
LunchCheck.$inject = ["$scope"];
function LunchCheck($scope)
{
$scope.food = "";
$scope.message = "";
$scope.checkState = function () {
    if ($scope.food == "")
    {
        $scope.message = "Please enter data first";
        return;
    }
    var dishArr = $scope.food.split(',');
    if (dishArr.length <= 3)
    $scope.message = "Enjoy!";
    else
    $scope.message = "Too much!";
};
};
})();