angular
	.module('app')
	.controller('homeCtrl', ['$scope', '$http', function($scope, $http){
		$scope.searchFood = function() {
			$scope.whoops = $scope.food;
			$http.post('/findFood', $scope.food).then(
				function successCallback(res) {
					console.log(res);
				}, function errorCallback(res) {
					console.log('ohno');
				}
			)
		}
	}])