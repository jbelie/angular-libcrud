'use strict';


app
	.controller('itemIndex', function($scope){
		
	})
	.controller('itemList', function($scope, itemProvider){
		
		$scope.items = itemProvider.getItems();
		
	})
	.controller('itemCreate', function($scope, itemProvider, categoryProvider){
		$scope.categories = categoryProvider.getCategories();
		$scope.items = itemProvider.getItems();
		
		$scope.createItem = function(item){
			itemProvider.addItem(item);
		}
	})
	.controller('itemRemove', function($scope){

	});
