'use strict';


app.service('userProvider', function($firebaseAuth){
	var ref = new Firebase("https://burning-inferno-8229.firebaseio.com");
	var auth = $firebaseAuth(ref);
	
	
	this.createUser = function(user){
		auth.$createUser({
			email : user.email,
			password: user.password
		});
	}
	
	this.authUser = function(user){
		var authSuccess = auth.$authWithPassword({
			email: user.email,
			password: user.password
		})
		.then(function(authData) {
			/* console.log("Logged in as:", authData.uid);*/
		}).catch(function(error) {
			alert("Authentication failed:" + error);
		});

	}
	
	this.getAuth = function(){
		return auth;
	}
	
	this.getAuthData = function(){
		return auth.$getAuth();
	}
});
