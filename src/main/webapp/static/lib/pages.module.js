(function () {
  'use strict';

  angular.module('glaubentekapp', [
    'ui.router', 'angularjs-dropdown-multiselect', 'angularUtils.directives.dirPagination'
  ]).config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, $httpProvider, $stateProvider) {
	  	
	  $urlRouterProvider.when('', '/home');
	  	
	    $stateProvider
	    .state('home', {
	      url: '/home',
	      templateUrl: 'static/pages/home.html',
	      controller: 'blogCtrl',
	    });

	    $stateProvider
	    .state('aboutus', {
	      url: '/aboutus',
	      templateUrl: 'static/pages/aboutus.html',
	      controller: 'blogCtrl',
	    });
	    
	    $stateProvider
	    .state('services', {
	      url: '/services',
	      templateUrl: 'static/pages/services.html',
	      controller: 'blogCtrl',
	    });
	    
	    $stateProvider
	    .state('portfolio', {
	      url: '/portfolio',
	      templateUrl: 'static/pages/portfolio.html',
	      controller: 'blogCtrl',
	    });
	    
	    $stateProvider
	    .state('blog', {
	      url: '/blog',
	      templateUrl: 'static/pages/blog.html',
	      controller: 'blogCtrl'
	    });
	    
	    $stateProvider
	    .state('blogItem', {
	      url: '/blogItem/:postId',
	      templateUrl: 'static/pages/blogItem.html',
	      controller: 'blogCtrl'
	    });
	    
	    $stateProvider
	    .state('createPost', {
	      url: '/createPost',
	      templateUrl: 'static/pages/createPost.html',
	      controller: 'postCtrl as pCtrl'
	    });
	    
	    $stateProvider
	    .state('sikariaHome', {
	      url: '/sikariaHome',
	      templateUrl: 'static/pages/sikariaHome.html',
	      controller: 'blogCtrl',
	    });
	    
	    $stateProvider
	    .state('contactus', {
	      url: '/contactus',
	      templateUrl: 'static/pages/contactus.html',
	      controller: 'contactUsCtrl',
	    });
	    
	    $stateProvider
	    .state('tenderAlert', {
	      url: '/tenderAlert',
	      templateUrl: 'static/pages/tenderAlert.html'
	    });

  }

})();
