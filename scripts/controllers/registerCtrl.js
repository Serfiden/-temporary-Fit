angular
	.module('app')
	.controller('registerCtrl', ['$scope', '$http', function($scope, $http){
		$scope.submit = function() {
			var toSend = {
				firstName: $scope.fname,
				lastName: $scope.lname,
				age: $scope.age,
				height: $scope.height,
				weight: $scope.weight
			}
			$http.post('/submitUser', toSend);		
		}
}])