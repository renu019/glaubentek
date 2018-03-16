(function () {
  'use strict';

  angular.module('glaubentekapp')
    .run(runPages);

  /** @ngInject */
  function runPages($rootScope, $state, $stateParams) {
	  
	  $rootScope.$state = $state;
	  $rootScope.$stateParams = $stateParams;
	  
	  $rootScope.$on('$stateChangeSuccess', function() {
		   document.body.scrollTop = document.documentElement.scrollTop = 0;
		});
  }

})();