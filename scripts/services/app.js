angular.module('app', [
		'ui.router'
	]).config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('root', {
				url: '',
				abstract: true,
				views: {
					'header': {
						templateUrl: '/-temporary-Fit/templates/header.html',
						controller: 'headerCtrl'
					}
				}
			})
			.state('root.home', {
				url: '/',
				views: {
					'main@': {
						templateUrl: '/-temporary-Fit/templates/home.html',
						controller: 'homeCtrl'
					}
				}
			})
			.state('root.register', {
				url: '/register',
				views: {
					'main@': {
						templateUrl: '/-temporary-Fit/templates/register.html',
						controller: 'registerCtrl'
					}
				}
			})
	}])