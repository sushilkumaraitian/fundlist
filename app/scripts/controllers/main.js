(function(angular){
'use strict';

angular.module('assignmentApp')
  .controller('MainCtrl', function ($scope, $http) {	  	
		//make an ajax request for funds
		$http.get('data/funds.json').
		success(function(data) {
		  $scope.funds = data.funds;
		}).
		error(function() {
		  // log error
		});
		//make an ajax request for chart Data
		$http.get('data/chart.json').
		success(function(data) {
		  $scope.chart = data.chart;
		}).
		error(function() {
		  // log error
		});

		//formate the date to mm/dd/yyyy format
		$scope.launchDateFormatter = function(dateString){
			var date = new Date(dateString),
			year = date.getFullYear(),
			month = (1 + date.getMonth()).toString(),
			day = date.getDate().toString();
			month = month.length > 1 ? month : '0' + month;
			day = day.length > 1 ? day : '0' + day;
			return month + '/' + day + '/' + year;
		};

  });
})(window.angular);
