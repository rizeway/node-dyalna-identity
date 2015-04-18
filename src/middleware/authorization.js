module.exports = function(features) {
  return function(req, res, next) {
    var authorized = false;
    if (req.security.authenticated) {
      authorized = true;
      features.forEach(function(feature) {
        if (req.security.user.features.indexOf(feature) === -1) {
          authorized = false;
        }
      });
    }
    if (!authorized) {
      res.status(403).send('Features ' + features.join(', ') + ' unauthorized');
    } else {
      next();
    }
  };
};
