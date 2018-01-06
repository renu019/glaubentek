'use strict';

angular.module('glaubentekapp').factory('contactUsService', ['$http', '$q', function($http, $q){

    var SEND_MAIL_REST_SERVICE_URI = 'sendMail';
    
    var factory = {
    		sendMail : sendMail
    };

    return factory;

    function sendMail(mail) {
        var deferred = $q.defer();
        $http.post(SEND_MAIL_REST_SERVICE_URI, mail)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while sendMail ');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    
    
}]);
