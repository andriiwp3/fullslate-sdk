const ApiClient = require('./apiClient');

const AuthResource = require('./resources/auth')
const AppointmentsResource = require('./resources/appointments');
const LocationsResource = require('./resources/locations');

class FullSlateClient {
    constructor(options = {}) {
        const { key, token, authType } = options;

        if (!key) throw new Error('Key is required');

        const apiClient = new ApiClient({
            path: `https://${key}.fullslate.com/api/v2/`,
            token,
            authType
        });

        this.auth = new AuthResource({ apiClient, endpoints: AuthResource.endpoints, schemas: AuthResource.schemas });
        this.appointments = new AppointmentsResource({ apiClient, endpoints: AppointmentsResource.endpoints, schemas: AppointmentsResource.schemas });
        this.locations = new LocationsResource({ apiClient, endpoints: LocationsResource.endpoints, schemas: LocationsResource.schemas });
    }
}

module.exports = FullSlateClient;
