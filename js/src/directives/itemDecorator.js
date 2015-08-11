'use strict';

app.directive('itemDecorate',function(){
		return{
			"templateUrl": "views/item/directive/decorator.html",
			"replace"	: true,
			"resctrict" : "E"
		}
	}
);
