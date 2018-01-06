(function () {
  'use strict';

  angular.module('glaubentekapp')
      .controller('contactUsCtrl', contactUsCtrl);

  /** @ngInject */
  function contactUsCtrl($scope, $http, contactUsService, $window) {
	  
	  var self = this;
	  
	  $scope.sendMail = function() {
		  console.log("$scope.mail  ::  ",$scope.mail);
		  
		  contactUsService.sendMail($scope.mail).then(
            function(d) {
            	$window.location.href = '#/contactus';
            },function(errResponse){
              console.error('Error while sendMail');
            }
	   	 );
		  
	  }
	  
  }

})();
