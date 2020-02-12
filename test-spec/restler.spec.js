describe('Protractor test rest call', function() {
    var rest = require('../node_modules/restler');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('testing Restful web services: the backend test: ', function() {
        rest.get('http://10.0.80.25/#/').on('complete', function(result) {
            if (result instanceof Error) {
                console.log('Error:', result.message);
                this.retry(5000); // try again after 5 sec
            } else {
                console.log(result);
            }
        });
    });
});

//Deploy and Django Unit Tests