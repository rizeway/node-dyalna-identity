Node Dyalna Identity
====================

Security Middleware

Installation
------------

 * npm install node-dyalna-identity

Usage
-----

```javascript
var identity = require('node-dyalna-identity');
var request = require('request-json');

var express = require('express');
var app = express();

// Add the security middleware
var identityHost = 'http://localhost:4000';
var identityToken = 'x-dyalna-auth-token';

app.use(new identity.security(request, identityHost, identityToken));

// Protected routes
app.get('/protected', new identity.authentication(), function(req, res) {
  console.log(req.security.authenticated); // outputs true
  console.log(req.security.token); // outputs the security token
  console.log(req.security.user); // outputs the user object
});

// Authorisation
app.get('/admin', new identity.authorization(['feature-admin']), function(req, res) {
  console.log('route only if the feature "feature-admin" is authorized');
});

```
