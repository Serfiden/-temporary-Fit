angular
	.module('app')
	.controller('registerCtrl', ['$scope', '$http', function($scope, $http){

		var checkAvailableEmail = function(email) {
			return $http.get('/checkAvailableEmail/' + email).then(function success(results) {
				
			})
		}


		$scope.submit = function() {

			let toSend = {
				name: $scope.fname + " " + $scope.lname,
				email: $scope.email,
				password: $scope.pass
			} 

			if (toSend.password != $scope.confirm) {
				$scope.confirmAlert = true;

			} else if (

			else {
				$scope.submitted = false;
				$scope.created = true;

				//$http.post('/submitUser', toSend);	
			}
		}

		$scope.create = function() {
			$scope.ageAlert = false;
			$scope.heightAlert = false;
			$scope.weightAlert = false;

			if (!isNaN($scope.age)) {
				if (!isNaN($scope.height)) {
					if (!isNaN($scope.weight)) {
						$scope.created = false;
						$scope.completed = true;
			
						let toSend = {
							age: $scope.age,
							height: $scope.height,
							weight: $scope.weight
						}

						$http.post('/newUserDetails', toSend);

					} else {
						$scope.weightAlert = true;
					}
				} else {
					$scope.heightAlert = true;
				}
			} else {
				$scope.ageAlert = true;
			}


			
		}
}])


// ALTER TABLE `users` ADD `dasdasda` INT NOT NULL AFTER `password`;