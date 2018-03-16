(function () {
  'use strict';

  angular.module('glaubentekapp')
      .controller('blogCtrl', blogCtrl);

  /** @ngInject */
  function blogCtrl($scope, $http, blogService, $stateParams, $state) {
	  
	  new WOW().init();
	  
	  getAllPosts(1);
	  getRecentPosts();
	  getPostsByMonth();
	  getTagAndCount();
	  
	  var postId = $stateParams.postId;
	 // console.log('postId  ::  '+postId);
	  
	  if(postId != undefined) {
		  getPostsById(postId);
	  }
	  
	 // console.log('$scope.postId  ::  '+$scope.postId);
	  
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
	
	function getRecentPosts() {
		console.log("inside getAllPosts");
		blogService.getRecentPosts().then(
   	            function(d) {
   	            	$scope.recentPostsList = d;
   	            	//console.log('$scope.recentPostsList  ::  ',$scope.recentPostsList);
   	            	/*angular.forEach(d, function(value, key){
   	            		
   	         		});*/
   	            },function(errResponse){
   	              console.error('Error while getRecentPosts');
   	            }
   	 );
	}
	
	function getTagAndCount() {
		console.log("inside getTagAndCount");
		blogService.getTagAndCount().then(
   	            function(d) {
   	            	$scope.tagCountList = d;
   	            	//console.log('$scope.tagCountList  ::  ',$scope.tagCountList);
   	            	/*angular.forEach(d, function(value, key){
   	            		
   	         		});*/
   	            },function(errResponse){
   	              console.error('Error while getTagAndCount');
   	            }
   	 );
	}
	
	function getPostsByMonth() {
		console.log("inside getPostsByMonth");
		blogService.getPostsByMonth().then(
   	            function(d) {
   	            	$scope.postsMonthlyList = d;
   	            	//console.log('$scope.postsMonthlyList  ::  ',$scope.postsMonthlyList);
   	            	/*angular.forEach(d, function(value, key){
   	            		
   	         		});*/
   	            },function(errResponse){
   	              console.error('Error while getPostsByMonth');
   	            }
   	 );
	}
	
	function getPostsById(postId) {
		console.log("inside getPostsById  ::  "+postId);
		blogService.getPostsById(postId).then(
   	            function(d) {
   	            	$scope.singlePost = d;
   	            	//console.log('$scope.singlePost  ::  ',$scope.singlePost);
   	            	/*angular.forEach(d, function(value, key){
   	            		
   	         		});*/
   	            },function(errResponse){
   	              console.error('Error while getPostsById');
   	            }
   	 );
	}
	
	$scope.getLinkUrl = function(postId) {
		console.log("postId  ::  "+postId);
		return $state.href('blogItem', {postId: postId});
	}
	
	$scope.readMore = function(postId) {
		  console.log("postId  ::  "+postId);
		  $state.go("blogItem",{'postId':postId})
	  }
	
	$scope.getData = function(pageNo) {
		console.log("pageNo  ::  "+pageNo);
		getAllPosts(pageNo);
	}
	
  }

})();
