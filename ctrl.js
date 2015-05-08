var app = angular.module('quoteBook');

app.controller('ctrl', function($scope, service){
	$scope.list = service.getData();
	$scope.addItem = function(){
		service.addData();
	};
	$scope.add = function(){
		//list.push(quote);
		service.addData({text: "\"" + $scope.quote + "\"", author: $scope.model});
		$scope.data();
		//console.log(quote);
	};
	$scope.removeItem = function(){
		service.removeData($scope.removeQuote);
		$scope.data();
	}
	$scope.data = function(){
		service.saveData();
	}
	});