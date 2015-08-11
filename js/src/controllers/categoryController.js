'use strict';

app
	.controller('categoryIndex', function($scope){
		
	})
	.controller('categoryList', function($scope, $location, $rootScope, categoryProvider){
		
		$scope.categories = categoryProvider.getCategories();
		
		$scope.removeCategory = function(category){
			categoryProvider.removeCategory(category);
		}
		
		$scope.editCategory = function(category){
			$rootScope.categoryToEdit = category;
			$location.url('/category/edit');
		}
	})
	.controller('categoryCreate', function($scope, $location, categoryProvider){
		
		$scope.saveCategory = function(category){
			categoryProvider.addCategory(category);
			$location.url('/categories');
		}
		
	})
	.controller('categoryEdit', function($scope, $rootScope, $location, categoryProvider){
		$scope.category = $rootScope.categoryToEdit;
		
		$scope.saveCategory = function(category){
			categoryProvider.updateCategory(category);
			$location.url('/categories');
		}
		
	})
