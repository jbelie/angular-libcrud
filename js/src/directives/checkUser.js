'use strict';

app.directive('checkUser', function($rootScope, $location, userProvider){
	return{
		restrict: "A",
		link: function(){
			$rootScope.$on('$routeChangeStart',function(event, currRoute, prevRoute){
				var auth = userProvider.getAuthData();
				
				if(currRoute.access && !currRoute.access.isFree && (auth===null || !auth.token)){
					$location.url('/');
				}
			});
		}
	}
});
