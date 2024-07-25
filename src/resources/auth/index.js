const AuthResource = require('./resource');

const schemas = require('./schemas');
const { ENDPOINTS } = require('./constants');

AuthResource.endpoints = ENDPOINTS;
AuthResource.schemas = schemas;

module.exports = AuthResource;
