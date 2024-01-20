const NextAuth = require('next-auth');
const NextAuthConfig = require('./next-auth.config.js');
 
module.exports = (req, res) => NextAuth(req, res, NextAuthConfig);