var app = angular.module('quoteBook');

app.controller('ctrl', function($scope, service){
	$scope.list = service.getData();
	$scope.addItem = function(){
		service.addData();
	};
	$scope.add = function(quote){
		list.push(quote);
	};
	});