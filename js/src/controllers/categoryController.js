'use strict';

app
	.controller('categoryIndex', function($scope){
		
	})
	.controller('categoryList', function($scope, categoryProvider){
		
		$scope.categorys = categoryProvider.getCategories();
		
	})
	.controller('categoryCreate', function($scope, categoryProvider){
		
		$scope.createCategory = function(category){
			categoryProvider.addCategory(category);
		}
		
	})
	.controller('categoryRemove', function($scope){
		
	});
