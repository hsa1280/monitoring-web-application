var angular = require("angular");

var app = angular.module("monitoringApp", []);

app.controller("MonitoringController", ["$scope", function($scope) {
  $scope.displayData = [
    {hour: 1,sales: 54},
    {hour: 2,sales: 66},
    {hour: 3,sales: 77},
    {hour: 4,sales: 70},
    {hour: 5,sales: 60},
    {hour: 6,sales: 63},
    {hour: 7,sales: 55},
    {hour: 8,sales: 47},
    {hour: 9,sales: 55},
    {hour: 10,sales: 30}
  ];
}]);

app.directive("linearChart", function($window) {
  return{
    restrict: "EA",
    template: "<svg width='850' height='200'></svg>",
    link: function(scope, elem, attrs){
    }
  };
});