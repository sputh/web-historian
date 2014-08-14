var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var helpers = require('./http-helpers');

exports.handleRequest = function (req, res) {
  var statusCode = 200;
  var defaultCorsHeaders = helpers.headers;
  archive.data(req.url)

  res.writeHead(statusCode, defaultCorsHeaders);
  res.end(archive.data(url));
};
