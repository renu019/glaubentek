'use strict';

angular.module('glaubentekapp').factory('userService', ['$http', '$q', function($http, $q){

    var USER_REST_SERVICE_URI = 'allUsers/';
    var USERBYID_REST_SERVICE_URI = 'user/';
    var CREATE_USER_REST_SERVICE_URI = 'createUser/';
    var DELETE_USER_REST_SERVICE_URI = 'deleteUser/';
    var USER_ROLE_REST_SERVICE_URI = 'userRole/';
    
    var factory = {
    		getAllUsers : getAllUsers,
    		createUser : createUser,
    		deleteUser : deleteUser,
    		getUserById : getUserById,
    		getUserRole : getUserRole
    };

    return factory;

    function getAllUsers(pageNo) {
        var deferred = $q.defer();
        $http.get(USER_REST_SERVICE_URI + pageNo)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while getAllUsers ');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    
    function getUserRole() {
        var deferred = $q.defer();
        $http.get(USER_ROLE_REST_SERVICE_URI)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while getUserRole ');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    
    function getUserById(userId) {
        var deferred = $q.defer();
        $http.get(USERBYID_REST_SERVICE_URI + userId)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while getUserById ');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    
    function deleteUser(userId) {
        var deferred = $q.defer();
        $http.delete(DELETE_USER_REST_SERVICE_URI+userId)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while deleteUser in user service');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    
    function createUser(user) {
        var deferred = $q.defer();
        $http.post(CREATE_USER_REST_SERVICE_URI,user)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while createUser ');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    
    
}]);
