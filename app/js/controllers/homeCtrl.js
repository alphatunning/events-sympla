angular.module("events").controller("homeCtrl", function ($scope,$route,$rootScope,$location,eventsAPI,eventsList) {

	var vm = $scope;

	vm.title = "Meus eventos";
	vm.events = eventsList.data;
	vm.eventIdSelected = "";
	vm.createEvent=true;
	vm.myEvent=false;

	vm.eventSelectedSave = function (id) {
		vm.eventIdSelected = id;
	}

	vm.deleteEvent = function() {
		eventsAPI.deleteData(vm.eventIdSelected).then(function(success) {
			console.log(success);
			$route.reload();
		});
	}

	vm.fnOpenMenu = function() {
		vm.openedMenu = true;
		$rootScope.modalOpen = true;
	};

})