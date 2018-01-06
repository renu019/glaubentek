/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('glaubentekapp')
      .directive('pageFooter', pageFooter);

  /** @ngInject */
  function pageFooter() {
    return {
      restrict: 'E',
      templateUrl: 'static/pages/pageFooter.html'
    };
  }

})();