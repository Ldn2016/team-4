'use strict';

var PatientData=JSON.parse(localStorage.getItem("PatientData"));
if (!PatientData) { //if the localStore is not assigned yet, assign it 0.
  var PatientData={"BMI":0,"MUAC":0,"OEDEMA":0,"TOTAL_ADMISSIONS":0,"DISCHARGES":0,"TOTAL_EOF_PERIOD":0};
  localStorage.setItem("PatientData", JSON.stringify(PatientData));
}
var BMI=PatientData.BMI;
var MUAC=PatientData.MUAC;
var OEDEMA=PatientData.OEDEMA;
var TOTAL_ADMISSIONS=PatientData.TOTAL_ADMISSIONS;
var DISCHARGES=PatientData.DISCHARGES;
var TOTAL_EOF_PERIOD=PatientData.TOTAL_EOF_PERIOD;


angular.module('myApp.view4', ['ngRoute','chart.js'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', ['$scope', function($scope) {
	$scope.labels = ['BMI', 'MUAC', 'OEDEMA', 'TOTAL_ADMISSIONS', 'DISCHARGES', 'TOTAL_EOF_PERIOD'];
  $scope.series = ['Series A'];

  $scope.data = [
    [BMI,MUAC,OEDEMA,TOTAL_ADMISSIONS,DISCHARGES,TOTAL_EOF_PERIOD],
    ["Current Month"]
  ];

  $scope.chartTypes = ['doughnut', 'bar', 'line', 'radar', 'pie', 'polar-area', 'base'];
  $scope.chartType = '';

  $scope.displayChart = function(chartType) {
    $scope.chartType = chartType;
  }

  
}]);


angular.module("app", ["chart.js"]).controller("BarCtrl", function ($scope) {
  
});
