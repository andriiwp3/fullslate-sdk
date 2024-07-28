const OpeningsResource = require('./resource');

const schemas = require('./schemas');
const { ENDPOINTS } = require('./constants');

OpeningsResource.endpoints = ENDPOINTS;
OpeningsResource.schemas = schemas;

module.exports = OpeningsResource;
