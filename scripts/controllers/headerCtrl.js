angular
	.module('app')
	.controller('headerCtrl', ['$scope', '$location', function($scope, $location){
		$scope.toHome = function() {
			$location.path('/');
		}
		$scope.toAccount = function() {
			$location.path('/accountEnter');
		}
	}])