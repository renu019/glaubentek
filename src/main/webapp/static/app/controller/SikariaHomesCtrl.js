(function () {
  'use strict';

  angular.module('glaubentekapp')
      .controller('SikariaHomesCtrl', SikariaHomesCtrl);

  /** @ngInject */
  function SikariaHomesCtrl($scope, $http, sikariaHomesService, $window) {
	  
	  new WOW().init();
	  
	  var self = this;	  
	  
	  $scope.mail = {};
	  
	  $scope.submitSikariaMail = function() {
		  console.log("Inside the sikariaHomes ");
		  console.log("$scope.mail_sikaria  ::  ",$scope.mail);
		  
		  sikariaHomesService.submitSikariaMail($scope.mail).then(
            function(d) {
            	$scope.mail = {};
            	$scope.successMessage = "Mail Sent !! Thanks for contacting us!!";
            	$window.location.href = '#/sikariaHome';
            },function(errResponse){
              console.error('Error while sendMail sikaria Homes');
            }
	   	 );
		  
	  }	  
  }
})();