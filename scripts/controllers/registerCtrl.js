angular
	.module('app')
	.controller('registerCtrl', ['$scope', '$http', function($scope, $http){
		var secondPhase;

		$scope.submit = function() {

			let toSend = {
				name: $scope.fname + " " + $scope.lname,
				email: $scope.email,
				password: $scope.pass
			} 

			if (toSend.password != $scope.confirm) {
				$scope.confirmAlert = true;

			} else {
				$scope.submitted = false;
				$scope.created = true;

				$http.post('/submitUser', toSend);	
			}
		}

		$scope.create = function() {
			$scope.created = false;
		}
}])