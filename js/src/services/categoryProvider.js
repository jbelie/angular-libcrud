'use strict';

var categories = [
	{ 
		'id' : 1,
		'name' : 'Film',
	},
	{
		'id' : 2,
		'name' : 'Music'
	}
];

app.service('categoryProvider', function(){
	
	this.getCategories = function(){
		return categories;
	}
	
	this.addCategory = function(category){
		categories.push(category);
	}
	
});
