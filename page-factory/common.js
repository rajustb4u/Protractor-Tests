 var http = require('C:/acumen-automated-regression-tests/acumen-automated-BDD-E2E-tests/node_moduless/https');

 var Common = function () {

     this.clearDB = function () {
         var deferred = protractor.promise.defer();

         var options = {
             hostname: 'api.parse.com',
             path: '/1/functions/clearDB',
             method: 'POST',
             headers: {
                 'X-Parse-Application-Id': 'PARSE-APPLICATION-ID',
                 'X-Parse-REST-API-Key': 'PARSE-REST-API-KEY'
             }
         };

         var callback = function() {
             deferred.fulfill();
         };

         var req = http.request(options, callback);
         req.end();

         return deferred.promise;
     };

 };

 module.exports = Common;