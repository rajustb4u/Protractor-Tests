/**
 * Created by Admin on 3/7/2017.
 */

var basePage = function() {

  this.navigateToURL = function (url) {
      browser.get(url);
  };

};

module.exports = new basePage();
