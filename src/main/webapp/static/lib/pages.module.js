(function () {
  'use strict';

  angular.module('glaubentekapp').config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, $httpProvider, $stateProvider) {
	  
	  	
	  $urlRouterProvider.when('', '/home');
	  	
	  new WOW().init();
	  
	    $stateProvider
	    .state('home', {
	      url: '/home',
	      templateUrl: 'static/pages/home.html',
	      controller: 'homeCtrl as hCtrl'
	    });

	    $stateProvider
	    .state('aboutus', {
	      url: '/aboutus',
	      templateUrl: 'static/pages/aboutus.html'
	    });
	    
	    $stateProvider
	    .state('services', {
	      url: '/services',
	      templateUrl: 'static/pages/services.html'
	    });
	    
	    $stateProvider
	    .state('portfolio', {
	      url: '/portfolio',
	      templateUrl: 'static/pages/portfolio.html'
	    });
	    
	    $stateProvider
	    .state('blog', {
	      url: '/blog',
	      templateUrl: 'static/pages/blog.html',
	      controller: 'blogCtrl'
	    });
	    
	    $stateProvider
	    .state('blogItem', {
	      url: '/blogItem',
	      params: {'postId': null},
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
	    .state('editPost', {
	      url: '/editPost',
	      params: {'postId': null},
	      templateUrl: 'static/pages/editPost.html',
	      controller: 'postCtrl as pCtrl'
	    });
	    
	    $stateProvider
	    .state('listAllPosts', {
	      url: '/listAllPosts',
	      templateUrl: 'static/pages/listAllPosts.html',
	      controller: 'postCtrl as pCtrl'
	    });
	    
	    $stateProvider
	    .state('sikariaHome', {
	      url: '/sikariaHome',
	      templateUrl: 'static/pages/sikariaHome.html',
	      controller: 'SikariaHomesCtrl as sCtrl',
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
	      templateUrl: 'static/pages/tenderAlert.html',
	      controller: 'homeCtrl'
	    });
	    
	    $stateProvider
	    .state('listAllUsers', {
	      url: '/listAllUsers',
	      templateUrl: 'static/pages/listAllUsers.html',
	      controller: 'userCtrl as uCtrl'
	    });
	    
	    $stateProvider
	    .state('createUser', {
	      url: '/createUser',
	      templateUrl: 'static/pages/createUser.html',
	      controller: 'userCtrl as uCtrl'
	    });
	    
	    $stateProvider
	    .state('editUser', {
	      url: '/editUser',
	      params: {'userId': null},
	      templateUrl: 'static/pages/editUser.html',
	      controller: 'userCtrl as uCtrl'
	    });

  }

})();
