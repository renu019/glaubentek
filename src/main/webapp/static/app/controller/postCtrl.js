(function () {
  'use strict';

  angular.module('glaubentekapp')
      .controller('postCtrl', postCtrl);

  /** @ngInject */
  function postCtrl($scope, $http, postService, $stateParams, $state, $window, blogService) {
	  
	  new WOW().init();
	  
	  var self = this;
	  self.post = {title:'', shortText:'', fullText:'', category:''};
	  $scope.selectedTagsList = [];
	  //getTagList();
	  getAllPosts(1);
	  
	  $scope.masterTagList = [];
	  
	  
	  var postId = $stateParams.postId;
	  console.log('postId  ::  '+postId);
	  
	  if(postId != undefined) {
		  getPostsById(postId);
	  }
	  
	  function getPostsById(postId) {
			console.log("inside getPostsById  ::  "+postId);
			blogService.getPostsById(postId).then(
	   	            function(d) {
	   	            	self.post = d;
	   	            	//console.log('self.post  ::  ',self.post);
	   	            	angular.forEach(d, function(value, key){
	   	            		console.log("d.tags  ::  "+d.tags);
	   	            		d.tags = [];
	   	         		});
	   	            },function(errResponse){
	   	              console.error('Error while getPostsById');
	   	            }
	   	 );
		}
	  
	  function getTagList() {
			console.log("inside getTagList");
			postService.getTagList().then(
	   	            function(d) {
	   	            	$scope.masterTagList = d;
	   	            	//console.log('$scope.masterTagList  ::  ',$scope.masterTagList);
	   	            	/*angular.forEach(d, function(value, key){
	   	            		
	   	         		});*/
	   	            },function(errResponse){
	   	              console.error('Error while getTagList');
	   	            }
	   	 );
		}
	  
	  function getAllPosts(pageNo) {
			console.log("inside getAllPosts");
			blogService.getAllPosts(pageNo).then(
	   	            function(d) {
	   	            	$scope.postsList = d.content;
	   	            	$scope.postsFullList = d;
	   	            	//console.log('$scope.postsFullList  ::  ',$scope.postsFullList);
	   	            	/*angular.forEach(d, function(value, key){
	   	            		
	   	         		});*/
	   	            },function(errResponse){
	   	              console.error('Error while getAllPosts');
	   	            }
	   	 );
		}
	  
	  $scope.createNewPost = function () {
		  	 console.log("inside createPost");
	    	 $window.location.href = '#/createPost';

	    }
	  
	  $scope.editPost = function(postId) {
		  //console.log("postId  ::  "+postId);
		  $state.go("editPost",{'postId':postId})
	  }
	  
	  $scope.deletePost = function(postId) {
		  postService.deletePost(postId).then(
		            function(d) {
		            	//console.log("d  ::  "+d);
		            	//$window.location.href = '#/listAllPosts';
		            	getAllPosts(1);
		            },function(errResponse){
		              console.error('Error while deletePost');
		            }
			   	 );
	  }
	  $scope.cancelPost = function() {
      	$window.location.href = '#/listAllPosts';
}
	  
	  $scope.submitPost = function() {
		  
		  postService.createPost(self.post).then(
            function(d) {
            	$window.location.href = '#/listAllPosts';
            },function(errResponse){
              console.error('Error while createPost');
            }
	   	 );
		  
	  }
	  
	  $scope.selected_baselines = [];
	  
	//  console.log("$scope.selected_baselines  ::  "+$scope.selected_baselines);
	  
      $scope.selected_baseline_settings = {
      	template: '<b>{{option.name}}</b>',
        searchField: 'name',
        enableSearch: true,
        selectionLimit: 4,
        selectedToTop: true // Doesn't work
      };
      
      $scope.selected_baselines_customTexts = {buttonDefaultText: 'Select Categories'};
      
      $scope.getData = function(pageNo) {
  		//console.log("pageNo  ::  "+pageNo);
  		getAllPosts(pageNo);
  	  }
	  
      $scope.resetForm = function() {
    	  self.post = {title:'', shortText:'', fullText:'', category:''};
      }
  }

})();
