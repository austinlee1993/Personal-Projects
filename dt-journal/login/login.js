angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller :'AuthController'
  });
  $routeProvider.when('/register', {
    templateUrl: 'login/register.html',
    controller :'AuthController'
  });
}])

.controller('AuthController', ['$scope', '$firebaseAuth', '$firebaseArray', '$location', function($scope, $firebaseAuth, $firebaseArray, $location) {
     
    $scope.register = function(){
    	var username = $scope.user.email;
    	var password = $scope.user.password;
    	var auth = $firebaseAuth();      
        
    	auth.$createUserWithEmailAndPassword(username,password)
    	.then(function(user){    		
    	   $location.path('/entries'); 

    	})
        .catch(function(error){           
           $scope.signInError = 'true';
           $scope.signInErrorMsg = error.message;
        });        

        var ref = firebase.database().ref().child('users');
    	  var newUser = ref.push();

    	ref.push().set({
              email: username
    	});
    }	
        
    $scope.login = function(){
      var username = $scope.user.email;
    	var password = $scope.user.password;
    	var auth = $firebaseAuth();
    	
    	auth.$signInWithEmailAndPassword(username,password)
    	.then(function(user){    		
    		$location.path('/entries');
    	})
    	.catch(function(error){         
            $scope.signInError = 'true';
            $scope.signInErrorMsg = error.message;
    	});	
    }
}])

.service('myService',['$firebaseAuth', function($firebaseAuth){  
     this.getUser = function(){
        var user = firebase.auth().currentUser.uid;
        return user;
     };
}]);
