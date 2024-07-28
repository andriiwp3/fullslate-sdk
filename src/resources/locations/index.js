const LocationsResource = require('./resource');

const schemas = require('./schemas');
const { ENDPOINTS } = require('./constants');

LocationsResource.endpoints = ENDPOINTS;
LocationsResource.schemas = schemas;

module.exports = LocationsResource;
