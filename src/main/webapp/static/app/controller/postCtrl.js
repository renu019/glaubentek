(function () {
  'use strict';

  angular.module('glaubentekapp')
      .controller('postCtrl', postCtrl);

  /** @ngInject */
  function postCtrl($scope, $http, postService, $stateParams, $state, $window) {
	  
	  var self = this;
	  self.post = {title:'', shortText:'', fullText:'', tags:[]};
	  $scope.selectedTagsList = [];
	  getTagList();
	  
	  $scope.masterTagList = [];
	  
	  function getTagList() {
			console.log("inside getTagList");
			postService.getTagList().then(
	   	            function(d) {
	   	            	$scope.masterTagList = d;
	   	            	console.log('$scope.masterTagList  ::  ',$scope.masterTagList);
	   	            	/*angular.forEach(d, function(value, key){
	   	            		
	   	         		});*/
	   	            },function(errResponse){
	   	              console.error('Error while getTagList');
	   	            }
	   	 );
		}
	  
	  $scope.createPost = function() {
		  console.log("self.post  ::  ",self.post);
		  
		  postService.createPost(self.post).then(
            function(d) {
            	$window.location.href = '#/blog';
            },function(errResponse){
              console.error('Error while createPost');
            }
	   	 );
		  
	  }
	  
	  $scope.selected_baselines = [];
      $scope.selected_baseline_settings = {
      	template: '<b>{{option.name}}</b>',
        searchField: 'name',
        enableSearch: true,
        selectionLimit: 4,
        selectedToTop: true // Doesn't work
      };
      
      $scope.selected_baselines_customTexts = {buttonDefaultText: 'Select Categories'};
	  
  }

})();
