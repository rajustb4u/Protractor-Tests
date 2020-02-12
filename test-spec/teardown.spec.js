var Common = require('../page-factory/common.js');

describe('Overview Page', function () {

    var overviewPage = new OverviewPage();
    var common = new Common();

    beforeAll(function () {
        common.clearDB();
    });
});