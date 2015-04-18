module.exports = function(requestJson, serverHost, securityHeaderName) {
  return function(req, res, next) {
    if (req.headers[securityHeaderName] !== undefined) {
      var headers = {};
      headers[securityHeaderName] = req.get(securityHeaderName);
      var client = requestJson.newClient(serverHost, {
        headers: headers
      });
      client.get('me', function (err, res, user) {
        if (!user || err) {
          req.security = { authenticated: false };
        } else {
          req.security = { authenticated: true, user: user, token: req.get(securityHeaderName) };
        }
        next();
      });
    } else {
      req.security = { authenticated: false };
      next();
    }
  };
};
