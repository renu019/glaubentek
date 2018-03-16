(function () {
  'use strict';

  angular.module('glaubentekapp')
      .controller('contactUsCtrl', contactUsCtrl);

  /** @ngInject */
  function contactUsCtrl($scope, $http, contactUsService, $window) {
	  
	  new WOW().init();
	  
	  var self = this;
	  
	  $scope.mail = {};
	  $scope.mail_conetnt = {};
	  
	  $scope.sendMail = function() {
		  alert("Mail Sent !! Thanks for contacting us!!");
		 // console.log("$scope.mail  ::  ",$scope.mail);
		  $scope.mail_conetnt=$scope.mail;
		  $scope.mail={};
		  contactUsService.sendMail($scope.mail_conetnt).then(
            function(d) {
            	$scope.mail_conetnt = {};
            	//$scope.successMessage = "Mail Sent !! Thanks for contacting us!!";
            	$window.location.href = '#/contactus';
            },function(errResponse){
              console.error('Error while sendMail');
            }
	   	 );
		  
	  }
	  
  }

})();
