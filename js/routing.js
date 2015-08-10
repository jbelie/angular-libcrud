'use strict';

app.config(
	function($routeProvider){
		$routeProvider
			.when('/',{
				controller : 'index',
				templateUrl : 'views/index/index.html',
				access : {
					isFree: true
				}
			})
			.when('/create-user',{
				controller : 'indexCreateUser',
				templateUrl : 'views/index/createUser.html',
				access : {
					isFree: true
				}
			})
			.when('/items',{
				controller : 'itemList',
				templateUrl : 'views/item/list.html',
				access : {
					isFree: false
				}
			})
			.when('/item/new',{
				controller : 'itemCreate',
				templateUrl : 'views/item/create.html',
				access : {
					isFree: false
				}
			})
			.when('/item/edit',{
				controller : 'itemEdit',
				templateUrl : 'views/item/create.html',
				access : {
					isFree: false
				}
			})
			.when('/item/index',{
				controller : 'itemIndex',
				templateUrl : 'views/item/create.html',
				access : {
					isFree: false
				}
			})
			.when('/categories',{
				controller : 'categoryList',
				templateUrl : 'views/category/list.html',
				access : {
					isFree: false
				}				
			})
			.when('/category/new',{
				controller : 'categoryCreate',
				templateUrl : 'views/category/create.html',
				access : {
					isFree: false
				}
			})
			.when('/category/edit',{
				controller : 'categoryEdit',
				templateUrl : 'views/category/create.html',
				access : {
					isFree: false
				}
			})
			.otherwise({
				redirectTo :'/'
			});
	}
);
