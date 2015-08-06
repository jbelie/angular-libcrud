'use strict';

var items = [
	{ 
		'name' : 'Star Wars - A new hope',
		'category_id' : 1
	},
	{
		'name' : 'Back to the future II',
		'category_id' : 1
	},
	{
		'name' : 'Batman : The Dark Knight',
		'category_id' : 1
	},
	{ 
		'name' : 'Oasis - Definitly Maybe',
		'category_id' : 2
	},
	{
		'name' : 'The Beatles - White Album',
		'category_id' : 2
	}
];

app.service('itemProvider', function(){
	
	this.getItems = function(){
		return items;
	}
	
	this.addItem = function(item){
		items.push(item);
	}
});
