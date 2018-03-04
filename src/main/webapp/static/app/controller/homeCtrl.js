(function () {
  'use strict';

  angular.module('glaubentekapp')
      .controller('homeCtrl', homeCtrl);

  /** @ngInject */
  function homeCtrl($scope, $http, blogService, $stateParams, $state) {
	  
	  var self = this;
	  
	  new WOW().init();
	  
	  getRecentPosts();
	  
	  $scope.myTickerItems = [
		   {
		     title: 'item 1',
		     copy: 'amazing copy here'
		   },
		   {
		     title: 'item 2',
		     copy: 'wow, this is great'
		   },
		   {
		     title: 'item 3',
		     copy: 'hello angular'
		   },
		   {
			     title: 'item 4',
			     copy: 'hello angular'
			   },
			   {
				     title: 'item 5',
				     copy: 'hello angular'
				   }
		]
	  
	
	$scope.recentPostsList = [];  
	  
	function getRecentPosts() {
		console.log("inside getAllPosts");
		blogService.getRecentPosts().then(
   	            function(d) {
   	            	$scope.recentPostsList = d;
   	            	self.recentPostsList = d;
   	            	console.log('$scope.recentPostsList  ::  ',$scope.recentPostsList);
   	            	
   	            	if($scope.recentPostsList != null && $scope.recentPostsList.length >= 4) {
   	            		for(var i = 0;i<$scope.recentPostsList.length;i++) {
   	            			if(i == 0) {
   	            				$scope.recentPost1 = $scope.recentPostsList[i];
   	            			}
   	            			console.log("$scope.recentPostsList all  ::  "+$scope.recentPostsList[i].shortText);   	            		
   	            		}
   	            		$scope.recentPost1 = $scope.recentPostsList[0];
   	            		$scope.recentPost2 = $scope.recentPostsList[1];
   	            		$scope.recentPost3 = $scope.recentPostsList[2];
   	            		$scope.recentPost4 = $scope.recentPostsList[3];
   	            	}
   	            	
   	            	/*angular.forEach(d, function(value, key){
   	            		
   	         		});*/
   	            },function(errResponse){
   	              console.error('Error while getRecentPosts');
   	            }
   	 );
	}
	
	$(function () {
        $(".demo").bootstrapNews({
            newsPerPage: 4,
            navigation: true,
            autoplay: true,
            direction: 'up', // up or down
            animationSpeed: 'normal',
            newsTickerInterval: 3000, //4 secs
            pauseOnHover: true,
            onStop: null,
            onPause: null,
            onReset: null,
            onPrev: null,
            onNext: null,
            onToDo: null
        });
    });
	
	$scope.getLinkUrl = function(postId) {
		console.log("postId  ::  "+postId);
		return $state.href('blogItem', {postId: postId});
	}
	
	$scope.readMore = function(postId) {
		  console.log("postId  ::  "+postId);
		  $state.go("blogItem",{'postId':postId})
	}
	
  }

})();
