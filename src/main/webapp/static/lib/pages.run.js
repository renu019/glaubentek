/**
 * @author v.lugovksy
 * created on 15.12.2015
 */
(function () {
  'use strict';

  angular.module('glaubentekapp')
    .run(runPages);

  /** @ngInject */
  function runPages($rootScope) {
	  $rootScope.$on('$stateChangeSuccess', function() {
		   document.body.scrollTop = document.documentElement.scrollTop = 0;
		});
  }

})();