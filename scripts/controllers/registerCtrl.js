angular
	.module('app')
	.controller('registerCtrl', ['$scope', '$http', function($scope, $http){
		$scope.submit = function() {
			var toSend = {
				name: $scope.name,
				age: $scope.age,
				height: $scope.height,
				weight: $scope.weight
			}
			$http.post('/submitUser', toSend);		
		}
}])