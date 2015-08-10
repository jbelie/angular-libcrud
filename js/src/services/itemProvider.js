'use strict';


app.service('itemProvider', function($firebaseArray){
	var ref = new Firebase("https://burning-inferno-8229.firebaseio.com/items/");
	var sync = $firebaseArray(ref);
	var items = sync;


	this.getItems = function(){
		return items;
	}

	this.addItem = function(item){
		items.$add(item);
	}
		
	this.removeItem = function(item){
		items.$remove(item);
	}
		
	this.updateItem = function(item){
		items.$save(item);
	}


});
