/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('glaubentekapp')
      .directive('adminPageHeader', adminPageHeader);

  /** @ngInject */
  function adminPageHeader() {
    return {
      restrict: 'E',
      templateUrl: 'static/pages/admin/adminPageHeader.html'
    };
  }

})();