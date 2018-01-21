'use strict';

angular.module('glaubentekapp').factory('sikariaHomesService', ['$http', '$q', function($http, $q){

    var SEND_MAIL_REST_SERVICE_URI = 'sendMailSikaria';
    
    var factory = {
    		submitSikariaMail : submitSikariaMail
    };

    return factory;

    function submitSikariaMail(mail_sikaria) {
        var deferred = $q.defer();
        $http.post(SEND_MAIL_REST_SERVICE_URI, mail_sikaria)
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
