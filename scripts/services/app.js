angular.module('app', [
		'ui.router',
		'ngAnimate'
	]).config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('root', {
				url: '',
				abstract: true,
				views: {
					'header': {
						templateUrl: '/templates/header.html',
						controller: 'headerCtrl'
					},
					'footer': {
						templateUrl: '/templates/footer.html',
						controller: 'footerCtrl'
					}
				}
			})
			.state('root.home', {
				url: '/',
				views: {
					'main@': {
						templateUrl: '/templates/home.html',
						controller: 'homeCtrl'
					}
				}
			})
			.state('root.accountEnter', {
				url: '/accountEnter',
				views: {
					'main@': {
						templateUrl: '/templates/accountEnter.html',
						controller: 'accountEnterCtrl'
					}
				}
			})
	}])