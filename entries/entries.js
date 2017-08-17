'use strict';

angular.module('myApp.entries', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/entries', {
    templateUrl: 'entries/entries.html',
    controller: 'EntriesController'
  });
}])

.controller('EntriesController', ['$scope', '$firebaseArray', '$firebaseAuth', '$location', 'myService', function($scope, $firebaseArray, $firebaseAuth, $location, myService) {
    
    // var userID = myService.getUser();
    var userID = firebase.auth().currentUser.uid;
    console.log(firebase.auth())
    // console.log(userID); 
   
    var userRef = firebase.database().ref().child('entries').child(userID);   
      
    $scope.entries = $firebaseArray(userRef); 
    $scope.editFormShow = false; 

    $scope.addEntry = function(){
        $scope.entries.$add({
             name :$scope.name,
             passage:$scope.passage,
             journal: $scope.journal,
             observation :$scope.observation

        }).then(function(ref){
            var id = ref.push();           
            $scope.name = '';
            $scope.passage = '',
            $scope.journal = '',
            $scope.observation = ''
        })
    }


    $scope.showEditForm = function(entry){
       $scope.editFormShow = true;
       
       $scope.id = entry.$id;
       $scope.name = entry.name;
       $scope.passage = entry.passage;
       $scope.journal = entry.journal;
       $scope.observation = entry.observation;

       console.log('Entry ID is' + entry.$id);
       console.log('Scope is' + $scope.id);

    }

    $scope.editEntry = function(){
       var id = $scope.id;

       console.log('$scope entries is: ' + $scope.entries);

       console.log("id is" + id);
       var record = $scope.entries.$getRecord(id);

       console.log('record is ' + record);

       record.name = $scope.name;
       record.passage = $scope.passage;
       record.journal = $scope.journal;
       record.observation = $scope.observation;


       $scope.entries.$save(record).then(function(ref){
       	     console.log("save")
       }); 

       $scope.name = '',
       $scope.passage = '',
       $scope.journal = '';
       $scope.observation = '';   
       $scope.editFormShow = false;
    }

    $scope.removeEntry = function(entry){
    	$scope.entries.$remove(entry);
    	console.log('Entry Removed');
    }

    $scope.logout = function(){
      console.log('LogOut');
      var auth = $firebaseAuth();
      auth.$signOut();
      $location.path('/login');
    }
}]);