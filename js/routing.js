'use strict';

app.config(
	function($routeProvider){
		$routeProvider
			.when('/items',{
				controller : 'itemList',
				templateUrl : 'views/item/list.html'
			})
			.when('/item/new',{
				controller : 'itemCreate',
				templateUrl : 'views/item/create.html'
			})
			.when('/categories',{
				controller : 'categoryList',
				templateUrl : 'views/category/list.html'				
			})
			.when('/category/new',{
				controller : 'categoryCreate',
				templateUrl : 'views/category/create.html'
			})
	}
);
