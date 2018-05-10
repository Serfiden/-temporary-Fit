angular
	.module('app')
	.controller('accountEnterCtrl', ['$scope', '$http', function($scope, $http){

		// Requesting email validation from server, if given email address is available proceed with the user creation process
		var checkAvailableEmail = function() {

			$http.get('/checkAvailableEmail/' + $scope.email).then(function success(results) {
				var response = results.data;
				if (typeof response[0] != 'undefined') {
					$scope.emailAlert = true;
					return;

				} else {
					let toSend = {
						name: $scope.fname + " " + $scope.lname,
						email: $scope.email,
						password: $scope.pass
					}

					// Finish up first part of user creation

					$scope.submitted = false;
					$scope.created = true;
					$http.post('/submitUser', toSend);	
				}
			})
		}

		// Verify and send data from first user creation step
		$scope.submit = function() { 
			if ($scope.pass != $scope.confirm) {
				$scope.confirmAlert = true;

			} else {
				checkAvailableEmail($scope.email);
			}
		}

		$scope.create = function() {
			console.log($scope.email)
			$scope.ageAlert = false;
			$scope.heightAlert = false;
			$scope.weightAlert = false;

			// Basic data validation + finishing up the creation process

			if (!isNaN($scope.age)) {
				if (!isNaN($scope.height)) {
					if (!isNaN($scope.weight)) {
						$scope.created = false;
						$scope.completed = true;
			
						let toSend = {
							email: $scope.email,
							age: $scope.age,
							height: $scope.height,
							weight: $scope.weight,
							tableName: $scope.email.substr(0, $scope.email.indexOf('@')).replace('.', '') + (Math.floor(Math.random() * 1000 + 200))
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