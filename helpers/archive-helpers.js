var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets': path.join(__dirname, '../web/public'),
  'archivedSites': path.join(__dirname, '../archives/sites'),
  'list': path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!
exports.readListOfUrls = function() {
  return fs.readFileSync(exports.paths.list).toString();
};

exports.isUrlInList = function(url) {
  var listOfUrls = exports.readListOfUrls().split('\n');
  return listOfUrls.forEach(function(element) {
    if (element === url) {
      exports.isURLArchived(url);
    } else {
      exports.addUrlToList(url);
    }
  });
};

exports.addUrlToList = function(url) {
  return fs.appendFile(exports.paths.list, '\n' + url, function(url) {
    // exports.redirect();
    // exports.downloadUrls(url);
  });
};

exports.redirect = function(newUrl) {
  this.res.writeHead(200, helpers.headers);
  response.end();
}

exports.isURLArchived = function(url) {
  fs.open(path.join(exports.paths.archivedSites, url), function (err, data) {
    if (err) {
      exports.downloadUrls(url);
    } else {
      console.log(data);
    }
  });
};

exports.downloadUrls = function() {

};

exports.data = function(url) {
  return exports.isUrlInList(url);
};
