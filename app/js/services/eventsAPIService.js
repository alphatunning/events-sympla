angular.module("events").factory("eventsAPI", function ($http, config) {

	var _getData = function () {
		return $http.get(config.baseUrl + "/events");
	};

	var _saveData = function (data) {
		return $http.post(config.baseUrl + "/events", data);
	};

	var _deleteData = function (data) {
		return $http.delete(config.baseUrl + "/events/" + data);
	};

	return {
		getData: _getData,
		saveData: _saveData,
		deleteData: _deleteData
	};
});