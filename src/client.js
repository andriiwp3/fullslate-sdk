const ApiClient = require('./apiClient');

const AuthResource = require('./resources/auth')
const AppointmentResource = require('./resources/appointments');

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
        this.appointments = new AppointmentsResource({ apiClient, endpoints: AppointmentResource.endpoints, schemas: AppointmentResource.schemas });
    }
}

module.exports = FullSlateClient;
