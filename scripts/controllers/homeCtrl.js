angular
	.module('app')
	.controller('homeCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
		$scope.searchFood = function() {
			$scope.whoops = $scope.food;
			$http.get('/getUser/' + $scope.food).then(function() {
				alert("salut");
			}, function() {
				alert("nu merge");
			})
		}
	}])