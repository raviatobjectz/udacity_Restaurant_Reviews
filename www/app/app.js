var app=angular.module('RestaurantReviews', ['ngMaterial', 'ngMessages']);

app.controller('appCtrl', function($scope, $timeout, $interval, $q) {

	$scope.starRatings = ['No Preference', '5 Star', '4 Star', '3 Star'];
	$scope.starSelected = 'No Preference';
	$scope.selectStar = function(rating) {
		$scope.starSelected = rating;
	}


	$scope.locationArray = ['No Preference', 'Austin', 'LA', 'SFO', 'DC', 'NewYork', 'Chicago'];
	$scope.locationSelected = 'No Preference';
	$scope.selectLocation = function(location) {
		$scope.locationSelected = location;
	}

});