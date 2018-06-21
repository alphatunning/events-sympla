angular.module("events").config(function ($routeProvider) {
	$routeProvider.when("/login", {
		templateUrl: "view/login/login.html",
		controller: "loginCtrl"
	});

	$routeProvider.when("/home", {
		templateUrl: "view/home/home.html",
		controller: "homeCtrl",
		resolve: {
			eventsList: function (eventsAPI) {
				return eventsAPI.getData();
			}
		}
	});

	$routeProvider.when("/register", {
		templateUrl: "view/register/register.html",
		controller: "registerCtrl"
	});
	
	$routeProvider.otherwise({redirectTo: "/login"});
});