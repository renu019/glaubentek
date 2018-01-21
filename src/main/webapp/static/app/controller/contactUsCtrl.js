(function () {
  'use strict';

  angular.module('glaubentekapp')
      .controller('contactUsCtrl', contactUsCtrl);

  /** @ngInject */
  function contactUsCtrl($scope, $http, contactUsService, $window) {
	  
	  new WOW().init();
	  
	  var self = this;
	  
	  $scope.mail = {};
	  
	  $scope.sendMail = function() {
		  console.log("$scope.mail  ::  ",$scope.mail);
		  
		  contactUsService.sendMail($scope.mail).then(
            function(d) {
            	$scope.mail = {};
            	$scope.successMessage = "Mail Sent !! Thanks for contacting us!!";
            	$window.location.href = '#/contactus';
            },function(errResponse){
              console.error('Error while sendMail');
            }
	   	 );
		  
	  }
	  
  }

})();
