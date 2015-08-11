'use strict';

app.directive('categoryDecorate',function(){
		return{
			"templateUrl": "views/category/directive/decorator.html",
			"replace"	: true,
			"restrict" 	: "E"
		}
	}
);
