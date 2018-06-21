angular.module("events").controller("registerCtrl", function ($scope, $location, eventsAPI, idGenerator) {

	var vm = $scope;

	vm.title = "Criar evento";
	vm.createEvent=false;
	vm.myEvent=true;
	vm.event = {};

	vm.createEvent = function(event) {
		event.id = idGenerator.generate();
		event.totalAmount = 600;
		eventsAPI.saveData(vm.event).then(function(success) {
			console.log(success);
			$location.path("/home");
		});
	}

	vm.startDateValidator = function(){
		if ((Date.parse(vm.event.startDate) > Date.parse(vm.event.endDate))) {
			return "Data de início não pode ser maior que a data de término.";
		}

		else return true;
	};

	vm.endDateValidator = function(){
		if ((Date.parse(vm.event.endDate) < Date.parse(vm.event.startDate))) {
			return "Data de fim não pode ser menor que a data de início.";
		}

		else return true;
	};

	vm.quantityValidator = function(){
		if (vm.event.amountTicket > 600) {
			return "A quantidade de ingressos não pode ser maior que 600.";
		}

		else return true;
	};

});