'use strict';

angular.module('glaubentekapp').factory('postService', ['$http', '$q', function($http, $q){

    var TAGS_REST_SERVICE_URI = 'tags';
    var POST_REST_SERVICE_URI = 'post';
    var DELETE_POST_REST_SERVICE_URI = 'deletePost/';
    
    var factory = {
    		getTagList : getTagList,
    		createPost : createPost,
    		deletePost : deletePost
    };

    return factory;

    function getTagList() {
        var deferred = $q.defer();
        $http.get(TAGS_REST_SERVICE_URI)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while getTagList ');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    
    function deletePost(postId) {
        var deferred = $q.defer();
        $http.delete(DELETE_POST_REST_SERVICE_URI+postId)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while deletePost in post service');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    
    function createPost(post) {
        var deferred = $q.defer();
        $http.post(POST_REST_SERVICE_URI,post)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while createPost ');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    
    
}]);
