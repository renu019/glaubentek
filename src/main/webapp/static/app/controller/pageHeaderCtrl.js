(function () {
  'use strict';

  angular.module('glaubentekapp')
      .controller('pageHeaderCtrl', pageHeaderCtrl);

  /** @ngInject */
  function pageHeaderCtrl($scope, $http, $window) {
	  
	  var self = this;	  
	  
	  console.log("inside PageHeaderController");
	  
	  getUserRole();
	  
	  function getUserRole() {
			console.log("inside getUserRole  ::  ");
			
				 $http.get('userRole').
			        then(function(data, status, headers) {
			            $scope.userRole = data.data.role;
			            console.log("$scope.userRole  ::  ",$scope.userRole);
			            },
			        function(errResponse) {
			            console.log("error in getUserRole");
			        });
			
		}
	  
	  $scope.showMenu = function() {
		  if($scope.userRole == 'ROLE_ADMIN') {
			  return true;
		  }
	  }
	  	  
  }
})();