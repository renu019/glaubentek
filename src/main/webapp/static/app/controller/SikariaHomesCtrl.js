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
	  
	  this.options1 = {
				debug: false,
				baseUrl: "static/images/",
				fields: {
					source: {
						modal: "link",
						image: "medium",
						panel: "thumbnail"
					}
				},
				autoplay: {
			        enabled: true, // slideshow play enabled/disabled
			        delay: 4100 // autoplay delay in millisecond
			    },
				theme: 'darkblue',
				thumbnail: {
					height: 50,
					index: true,
				},
				modal: {
					caption: {
						visible: true,
						position: 'bottom'
					},
					header: {
						enabled: true,
						dynamic: false
					},
					title: "Glaubentek",
					subtitle: "Images",
					thumbnail: {
						height: 77,
						index: true,
					},
				},
				panel: {
					click: {
						select: false,
						modal: true
					},
					hover: {
						select: true
					},
					item: {
						class: "custom",
						title: false
					},
				},
				image: {
					height: 320,
					click: {
						modal: true
					},
					transition: 'rotateLR',
				},
			};

			this.files1 = [{
				"link": "g3.jpg",
				"thumbnail": "g3.jpg",
				"medium": "g3.jpg",
			}, {
				"link": "g4.jpg",
				"thumbnail": "g4.jpg",
				"medium": "g4.jpg",
			}, {
				"link": "g5.jpg",
				"thumbnail": "g5.jpg",
				"medium": "g5.jpg",
			}, {
				"link": "g6.jpg",
				"thumbnail": "g6.jpg",
				"medium": "g6.jpg",
			}, {
				"link": "g7.jpg",
				"thumbnail": "g7.jpg",
				"medium": "g7.jpg",
			}, {
				"link": "g8.jpg",
				"thumbnail": "g8.jpg",
				"medium": "g8.jpg",
			}, {
				"link": "g9.jpg",
				"thumbnail": "g9.jpg",
				"medium": "g9.jpg",
			}, {
				"link": "gg1.jpg",
				"thumbnail": "gg1.jpg",
				"medium": "gg1.jpg",
			}, {
				"link": "gg2.jpg",
				"thumbnail": "gg2.jpg",
				"medium": "gg2.jpg",
			}, {
				"link": "gg3.jpg",
				"thumbnail": "gg3.jpg",
				"medium": "gg3.jpg",
			}];

	  
  }
})();