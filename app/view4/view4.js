'use strict';

var PatientData=JSON.parse(localStorage.getItem("PatientData"));
if (!PatientData) { //if the localStore is not assigned yet, assign it 0.
  var PatientData={"BMI":0,"MUAC":0,"OEDEMA":0};
  localStorage.setItem("PatientData", JSON.stringify(PatientData));
}
var BMI=PatientData.BMI;
var MUAC=PatientData.MUAC;
var OEDEMA=PatientData.OEDEMA;

angular.module('myApp.view4', ['ngRoute','chart.js'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', ['$scope', function($scope) {
	$scope.labels = ['BMI', 'MUAC', 'OEDEMA'];
  $scope.series = ['Series A'];

  $scope.data = [
    [BMI,MUAC,OEDEMA],
    ["Current Month"]
  ];

  $scope.chartTypes = ['doughnut', 'bar', 'line', 'radar', 'pie', 'polar-area', 'base'];
  $scope.chartType = '';

  $scope.displayChart = function(chartType) {
    $scope.chartType = chartType;
  }

  /*$scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series = ['Series A', 'Series B'];

  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];*/
}]);


angular.module("app", ["chart.js"]).controller("BarCtrl", function ($scope) {
  
});
