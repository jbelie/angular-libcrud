'use strict';

app
	.controller("index",function($scope, userProvider){
		
		$scope.session = userProvider.getAuthData();
		$scope.auth = userProvider.getAuth();
		$scope.authUser = function(user){
			userProvider.authUser(user);
		}
		
		$scope.logout = function(){
			$scope.auth.$unauth();
			$scope.session = userProvider.getAuthData();
		}
		
		$scope.auth.$onAuth(function(authData){
			if(authData){
				$scope.session = authData;
			}
		});
	})
	.controller("indexCreateUser",function($scope, $location, userProvider){
		
		$scope.auth = userProvider.getAuth();
		
		$scope.createUser = function(user){
			userProvider.createUser(user);
		}
		
		$scope.auth.$onAuth(function(authData){
			if(authData){
				$scope.session = authData;
				$location.url('/');
			}
		});
	});
