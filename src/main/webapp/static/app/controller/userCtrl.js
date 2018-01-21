(function () {
  'use strict';

  angular.module('glaubentekapp')
      .controller('userCtrl', userCtrl);

  /** @ngInject */
  function userCtrl($scope, $http, userService, $stateParams, $state, $window) {
	  
	  new WOW().init();
	  
	  var self = this;
	  self.user = {username:'', firstName:'', lastName:'', mailId:'', password:'', role:''};
	  $scope.selectedTagsList = [];
	  //getTagList();
	  getAllUsers(1);
	  
	  $scope.masterTagList = [];
	  
	  
	  var userId = $stateParams.userId;
	  console.log('userId  ::  '+userId);
	  
	  if(userId != undefined) {
		  getUserById(userId);
	  }
	  
	  function getUserById(userId) {
			console.log("inside getUserById  ::  "+userId);
			userService.getUserById(userId).then(
	   	            function(d) {
	   	            	self.user = d;
	   	            	console.log('self.user  ::  ',self.user);
	   	            },function(errResponse){
	   	              console.error('Error while getPostsById');
	   	            }
	   	 );
		}
	  
	  function getAllUsers(pageNo) {
			console.log("inside getAllUsers");
			userService.getAllUsers(pageNo).then(
	   	            function(d) {
	   	            	$scope.usersList = d.content;
	   	            	$scope.userFullList = d;
	   	            	console.log('$scope.userFullList  ::  ',$scope.userFullList);
	   	            	/*angular.forEach(d, function(value, key){
	   	            		
	   	         		});*/
	   	            },function(errResponse){
	   	              console.error('Error while getAllUsers');
	   	            }
	   	 );
		}
	  
	  $scope.createNewUser = function () {
		  	 console.log("inside createPost");
	    	 $window.location.href = '#/createUser';

	    }
	  
	  $scope.editUser = function(userId) {
		  console.log("userId  ::  "+userId);
		  $state.go("editUser",{'userId':userId})
	  }
	  
	  $scope.deleteUser = function(userId) {
		  userService.deleteUser(userId).then(
		            function(d) {
		            	console.log("d  ::  "+d);
		            	//$window.location.href = '#/listAllUsers';
		            	getAllUsers(1);
		            },function(errResponse){
		              console.error('Error while deleteUser');
		            }
			   	 );
	  }
	  
	  $scope.submitUser = function() {
		  console.log("self.user  ::  ",self.user);
		  
		  userService.createUser(self.user).then(
            function(d) {
            	$window.location.href = '#/listAllUsers';
            },function(errResponse){
              console.error('Error while createUser');
            }
	   	 );
		  
	  }
	  
      
      $scope.getData = function(pageNo) {
  		console.log("pageNo  ::  "+pageNo);
  		getAllUsers(pageNo);
  	  }
	  
  }

})();
