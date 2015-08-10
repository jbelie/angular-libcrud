'use strict';


app.service('categoryProvider', function($firebaseArray){
	var ref = new Firebase("https://burning-inferno-8229.firebaseio.com/categorys/");
	var sync = $firebaseArray(ref);
	var categories = sync;

	this.getCategories = function(){
		return categories;
	}
	
	this.addCategory = function(category){
		categories.$add(category);
	}
	
	this.removeCategory = function(category){
		categories.$remove(category);
	}
	
	this.updateCategory = function(category){
		categories.$save(category);
	}

});
