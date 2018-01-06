'use strict';

angular.module('glaubentekapp').factory('blogService', ['$http', '$q', function($http, $q){

    var POSTS_REST_SERVICE_URI = 'allPosts/';
    var RECENT_POSTS_REST_SERVICE_URI = 'recentPosts';
    var MONTHLY_POSTS_REST_SERVICE_URI = 'postByMonth';
    var THE_POST_REST_SERVICE_URI = 'the_post/';
    var TAG_COUNT_REST_SERVICE_URI = 'tagAndCount';
    
    var factory = {
    		getAllPosts : getAllPosts,
    		getRecentPosts : getRecentPosts,
    		getPostsByMonth : getPostsByMonth,
    		getPostsById : getPostsById,
    		getTagAndCount : getTagAndCount
    };

    return factory;

    function getAllPosts(pageNo) {
        var deferred = $q.defer();
        $http.get(POSTS_REST_SERVICE_URI + pageNo)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while getAllPosts ');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    
    function getRecentPosts() {
        var deferred = $q.defer();
        $http.get(RECENT_POSTS_REST_SERVICE_URI)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while getRecentPosts ');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    
    function getPostsByMonth() {
        var deferred = $q.defer();
        $http.get(MONTHLY_POSTS_REST_SERVICE_URI)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while getPostsByMonth ');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    
    function getTagAndCount() {
        var deferred = $q.defer();
        $http.get(TAG_COUNT_REST_SERVICE_URI)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while getTagAndCount ');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    
    function getPostsById(postId) {
        var deferred = $q.defer();
        $http.get(THE_POST_REST_SERVICE_URI+postId)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while getPostsById ');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    
    
}]);
