var AuthenticationMiddleware = require('./middleware/authentication');
var AuthorizationMiddleware = require('./middleware/authorization');
var SecurityMiddleware = require('./middleware/security');

module.exports = {
  authentication: AuthenticationMiddleware,
  security: SecurityMiddleware,
  authorization: AuthorizationMiddleware
};
