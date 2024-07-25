const AppointmentsResource = require('./resource');

const schemas = require('./schemas');
const { ENDPOINTS } = require('./constants');

AppointmentsResource.endpoints = ENDPOINTS;
AppointmentsResource.schemas = schemas;

module.exports = AppointmentsResource;
