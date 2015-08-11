'use strict';


app
	.controller('itemList', function($scope, $location, $rootScope, itemProvider){
		
		$scope.items = itemProvider.getItems();
		
		$scope.removeItem = function(item){
			itemProvider.removeItem(item);
		}
		
		$scope.editItem = function(item){
			$rootScope.itemToEdit = item;
			$location.url('/item/edit');
		}
	})
	.controller('itemCreate', function($scope, $location, itemProvider, categoryProvider){
		$scope.categories = categoryProvider.getCategories();
		$scope.items = itemProvider.getItems();
		
		$scope.saveItem = function(item){
			itemProvider.addItem(item);
			$location.url('/items');
		}
	})
	.controller('itemEdit', function($scope, $rootScope, $location, itemProvider, categoryProvider){
		$scope.categories = categoryProvider.getCategories();
		$scope.item = $rootScope.itemToEdit;
		
		$scope.saveItem = function(item){
			itemProvider.updateItem(item);
			$location.url('/items');
		}
	})

